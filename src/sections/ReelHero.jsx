import { useEffect, useRef } from "react";
import "@fontsource/inter-tight/700.css";
import "@fontsource/caveat/600.css";
import "./ReelHero.css";

import { scrollToHash } from "../components/Navbar";
import { reelHero } from "../constants/content";

// ---------------------------------------------------------------
//  Closing work reel (near the end of the page). Layout + motion follow the MotionSites
//  "Reelmark hero" prompt: a 1440x1080 frame in --u units, ten
//  cards on the inside of a cylinder, drifting right -> left.
// ---------------------------------------------------------------

const PITCH = 196; // even spacing between unpushed card centres (u)
const SPEED = 50; // auto-scroll, u per second
const DECAY = 0.05; // momentum left after 1s (velocity decays ~95%/s)
const RADIUS_U = 15; // card corner radius (u)

const fmt = (n) => Math.round(n * 100) / 100;

// Rounded quad as a clip-path path() string (px)
function roundedQuad(pts, r) {
  const n = pts.length;
  const a = [];
  const b = [];
  for (let i = 0; i < n; i++) {
    const v = pts[i];
    const p = pts[(i + n - 1) % n];
    const q = pts[(i + 1) % n];
    const lp = Math.hypot(p[0] - v[0], p[1] - v[1]) || 1;
    const lq = Math.hypot(q[0] - v[0], q[1] - v[1]) || 1;
    const rp = Math.min(r, lp / 2);
    const rq = Math.min(r, lq / 2);
    a.push([v[0] + ((p[0] - v[0]) / lp) * rp, v[1] + ((p[1] - v[1]) / lp) * rp]);
    b.push([v[0] + ((q[0] - v[0]) / lq) * rq, v[1] + ((q[1] - v[1]) / lq) * rq]);
  }
  let d = `M${fmt(a[0][0])} ${fmt(a[0][1])}`;
  for (let i = 0; i < n; i++) {
    if (i > 0) d += `L${fmt(a[i][0])} ${fmt(a[i][1])}`;
    d += `Q${fmt(pts[i][0])} ${fmt(pts[i][1])} ${fmt(b[i][0])} ${fmt(b[i][1])}`;
  }
  return `path("${d}Z")`;
}

const Card = ({ item, motionOk, cardRef }) => {
  const markReady = (e) => e.currentTarget.parentElement?.classList.add("is-ready");
  const showVideo = item.type === "video" && motionOk;
  return (
    <div className="rh-card" ref={cardRef} aria-hidden="true">
      {showVideo ? (
        <video
          className="rh-media"
          src={item.src}
          poster={item.poster}
          muted
          loop
          autoPlay
          playsInline
          preload="auto"
          disablePictureInPicture
          onLoadedData={markReady}
        />
      ) : (
        <img
          className="rh-media"
          src={item.type === "video" ? item.poster : item.src}
          alt=""
          draggable="false"
          decoding="async"
          onLoad={markReady}
        />
      )}
      {item.type === "video" && (
        <span className="rh-play">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M8 5.5v13l11-6.5z" fill="currentColor" />
          </svg>
        </span>
      )}
    </div>
  );
};

const ReelHero = () => {
  const sectionRef = useRef(null);
  const bandRef = useRef(null);
  const cardRefs = useRef([]);
  const motionOk =
    typeof window === "undefined" || !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ---- carousel loop -------------------------------------------------
  useEffect(() => {
    const section = sectionRef.current;
    const band = bandRef.current;
    const cards = cardRefs.current.filter(Boolean);
    const N = cards.length;
    const LOOP = N * PITCH;
    const phoneMQ = window.matchMedia("(max-width: 820px)");

    // geometry, refreshed on resize only (no reads inside the frame loop)
    const geo = { s: 1, C: 720, R: 706, Cy: 267, W: 1440 };
    const measure = () => {
      const w = band.clientWidth;
      const h = band.clientHeight;
      if (phoneMQ.matches) {
        geo.s = w / 640; // 640-unit scale on phones
        geo.C = 320;
        geo.R = 420; // gentler curve so edge cards fit the 250px band
        geo.W = 640;
        geo.Cy = h / geo.s / 2 + 6;
      } else {
        // band bleeds past the 1440u frame into any side gutters; geometry stays in frame units
        geo.s = band.parentElement.clientWidth / 1440;
        geo.C = 720 - band.offsetLeft / geo.s;
        geo.R = 706;
        geo.W = w / geo.s;
        geo.Cy = 687 - band.offsetTop / geo.s; // frame y 687 -> band-local
      }
    };
    measure();
    const ro = new ResizeObserver(() => {
      measure();
      render();
    });
    ro.observe(band);

    // long-running Web Animations clock -> time-based scroll
    const clock = document.documentElement.animate([], { duration: 1e9 });
    const now = () => Number(clock.currentTime) || 0;

    let manual = 0; // drag / momentum offset (u)
    let vel = 0; // u per second
    let last = now();
    let dragging = false;
    let lastX = 0;
    let lastT = 0;
    let pointerId = null;

    function render() {
      const t = now();
      const dt = Math.min(0.1, Math.max(0, (t - last) / 1000));
      last = t;
      if (!dragging && vel !== 0) {
        manual += vel * dt;
        vel *= Math.pow(DECAY, dt);
        if (Math.abs(vel) < 0.5) vel = 0;
      }
      const pos = (motionOk ? (SPEED * t) / 1000 : 0) + manual;
      const { s, C, R, Cy, W } = geo;
      const r = RADIUS_U * s;
      for (let i = 0; i < N; i++) {
        const el = cards[i];
        let tt = (((i * PITCH - pos) % LOOP) + LOOP) % LOOP; // 0..LOOP
        if (tt >= LOOP / 2) tt -= LOOP; // unpushed offset from centre
        const x = C + tt * (1 + 0.083 * (tt / R) ** 2);
        // sizes follow the spec; only cards beyond the frame edge (d > 1.3) stop growing
        const d = Math.min(1.3, Math.abs(x - C) / R);
        const w = 170 + 48 * d * d;
        const xl = x - w / 2;
        const xr = x + w / 2;
        if (xr < -20 || xl > W + 20) {
          if (el.style.visibility !== "hidden") el.style.visibility = "hidden";
          continue;
        }
        if (el.style.visibility) el.style.visibility = "";
        const ql = Math.min(1.3, Math.abs(xl - C) / R);
        const qr = Math.min(1.3, Math.abs(xr - C) / R);
        const hl = 280 + 92 * ql ** 2.6;
        const hr = 280 + 92 * qr ** 2.6;
        const cy = Cy - 12 * d * d;
        const top = cy - Math.max(hl, hr) / 2;
        const bh = Math.max(hl, hr);
        const pts = [
          [0, (cy - hl / 2 - top) * s],
          [w * s, (cy - hr / 2 - top) * s],
          [w * s, (cy + hr / 2 - top) * s],
          [0, (cy + hl / 2 - top) * s],
        ];
        el.style.transform = `translate3d(${fmt(xl * s)}px, ${fmt(top * s)}px, 0)`;
        el.style.width = `${fmt(w * s)}px`;
        el.style.height = `${fmt(bh * s)}px`;
        el.style.clipPath = roundedQuad(pts, r);
      }
    }

    // run only while the hero is on screen
    let raf = 0;
    let visible = false;
    const loop = () => {
      render();
      raf = requestAnimationFrame(loop);
    };
    const start = () => {
      if (raf) return;
      last = now();
      raf = requestAnimationFrame(loop);
    };
    const stop = () => {
      cancelAnimationFrame(raf);
      raf = 0;
    };
    const videos = band.querySelectorAll("video");
    const io = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) {
          start();
          videos.forEach((v) => v.play().catch(() => {}));
        } else {
          stop();
          videos.forEach((v) => v.pause());
        }
      },
      { threshold: 0 }
    );
    io.observe(section);
    render();

    // ---- drag with momentum ----
    const onDown = (e) => {
      if (e.button !== undefined && e.button !== 0) return;
      dragging = true;
      pointerId = e.pointerId;
      band.setPointerCapture(e.pointerId);
      band.classList.add("is-grabbing");
      lastX = e.clientX;
      lastT = performance.now();
      vel = 0;
      if (!visible) start();
    };
    const onMove = (e) => {
      if (!dragging || e.pointerId !== pointerId) return;
      const dxU = (e.clientX - lastX) / geo.s; // 1:1 with the pointer
      const tNow = performance.now();
      const dts = Math.max(1, tNow - lastT) / 1000;
      manual -= dxU;
      const inst = -dxU / dts;
      vel = vel * 0.6 + inst * 0.4; // smoothed release velocity
      lastX = e.clientX;
      lastT = tNow;
    };
    const onUp = (e) => {
      if (!dragging || e.pointerId !== pointerId) return;
      dragging = false;
      band.classList.remove("is-grabbing");
      if (performance.now() - lastT > 120) vel = 0; // held still before release
      try {
        band.releasePointerCapture(e.pointerId);
      } catch {
        /* already released */
      }
    };
    band.addEventListener("pointerdown", onDown);
    band.addEventListener("pointermove", onMove);
    band.addEventListener("pointerup", onUp);
    band.addEventListener("pointercancel", onUp);

    // test hook (read-only): lets the screenshot script read card positions
    window.__reelHero = { geo, get pos() { return (motionOk ? (SPEED * now()) / 1000 : 0) + manual; } };

    return () => {
      stop();
      io.disconnect();
      ro.disconnect();
      clock.cancel();
      band.removeEventListener("pointerdown", onDown);
      band.removeEventListener("pointermove", onMove);
      band.removeEventListener("pointerup", onUp);
      band.removeEventListener("pointercancel", onUp);
      delete window.__reelHero;
    };
  }, [motionOk]);

  // ---- one-time entrance, played when the section first scrolls into view ----
  useEffect(() => {
    if (!motionOk) return;
    const root = sectionRef.current;
    const ease = "cubic-bezier(.2,.8,.2,1)";
    const run = (sel, frames, delay, duration = 800, easing = ease) =>
      root.querySelectorAll(sel).forEach((el, i) =>
        el.animate(frames, { delay: delay + i * 130, duration, easing, fill: "backwards" })
      );
    const play = () => {
      run(".rh-badge", [{ transform: "scale(.6)", opacity: 0 }, { transform: "none", opacity: 1 }], 0, 650, "cubic-bezier(.34,1.56,.64,1)");
      run(".rh-line", [{ transform: "translateY(36px)", filter: "blur(14px)", opacity: 0 }, { transform: "none", filter: "blur(0)", opacity: 1 }], 150, 950);
      run(".rh-sub", [{ transform: "translateY(18px)", opacity: 0 }, { transform: "none", opacity: 1 }], 500, 800);
      run(".rh-band", [{ transform: "translateY(90px)", opacity: 0 }, { transform: "none", opacity: 1 }], 600, 1150);
      run(".rh-cta", [{ transform: "scale(.7)", opacity: 0 }, { transform: "none", opacity: 1 }], 950, 700, "cubic-bezier(.34,1.56,.64,1)");
      run(".rh-stroke", [{ strokeDashoffset: 1 }, { strokeDashoffset: 0 }], 1150, 900, "cubic-bezier(.65,0,.35,1)");
      run(".rh-note", [{ opacity: 0, translate: "0 10px" }, { opacity: 1, translate: "0 0" }], 1250, 700);
      root.classList.remove("rh-wait");
    };
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        io.disconnect();
        play();
      },
      { threshold: 0.2 }
    );
    io.observe(root);
    return () => io.disconnect();
  }, [motionOk]);

  const go = (e, href) => scrollToHash(e, href);
  const setCard = (i) => (el) => (cardRefs.current[i] = el);

  return (
    <section id="reel" ref={sectionRef} aria-label="Work reel" className={`reel-section ${motionOk ? "rh-wait" : "rh-reduced"}`}>
      <div className="rh-frame">
        <div className="rh-badge-row">
          <p className="rh-badge">{reelHero.badge}</p>
        </div>

        <h2 className="rh-headline">
          <span className="rh-line">{reelHero.headline[0]}</span>
          <span className="rh-line rh-line-2">{reelHero.headline[1]}</span>
        </h2>

        <p className="rh-sub">
          {reelHero.subline.map((l, i) => (
            <span key={i}>
              {l}
              {i < reelHero.subline.length - 1 && (
                <>
                  {" "}
                  <br />
                </>
              )}
            </span>
          ))}
        </p>

        {/* hand-drawn doodles, in frame units */}
        <svg className="rh-doodles" viewBox="0 0 1440 1080" aria-hidden="true">
          <g fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round">
            <path className="rh-stroke" pathLength="1" d="M281 380 C276 398 271 414 265 431" />
            <path className="rh-stroke" pathLength="1" d="M299 383 C294 401 289 417 283 434" />
            <path className="rh-stroke" pathLength="1" d="M1262 420 C1292 448 1292 492 1262 510 C1240 524 1212 529 1182 526" />
            <path className="rh-stroke" pathLength="1" d="M1199 511 L1181 526 L1199 541" />
          </g>
        </svg>

        <p className="rh-note rh-note-top">
          {reelHero.noteTop[0]}
          <br />
          {reelHero.noteTop[1]}
        </p>

        <div className="rh-cta-row">
          <p className="rh-note rh-note-bottom">
            <span>{reelHero.noteBottom}</span>
            <svg viewBox="0 0 60 36" aria-hidden="true" className="rh-note-arrow">
              <g fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round">
                <path className="rh-stroke" pathLength="1" d="M4 26 C18 30 36 26 52 12" />
                <path className="rh-stroke" pathLength="1" d="M40 11 L53 11 L50 24" />
              </g>
            </svg>
          </p>
          <a href={reelHero.cta.href} className="rh-cta" onClick={(e) => go(e, reelHero.cta.href)}>
            <span className="rh-cta-btn">{reelHero.cta.label}</span>
          </a>
        </div>

        <div className="rh-band" ref={bandRef}>
          {reelHero.cards.map((item, i) => (
            <Card key={item.src} item={item} motionOk={motionOk} cardRef={setCard(i)} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReelHero;
