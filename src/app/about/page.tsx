import Link from "next/link";

const AboutPage = () => (
  <div className="page">
    <section className="page-hero">
      <div className="eyebrow">About</div>
      <h1>About Ardi Fetiu</h1>
      <p>
        I create full-stack demos that feel like real products. Each build pairs a Spring Boot
        backend with a refined Next.js front-end so the experience is ready to share.
      </p>
      <div className="hero-actions">
        <Link className="button" href="/cv">
          View CV
        </Link>
        <Link className="button subtle" href="/demos">
          Browse demos
        </Link>
      </div>
    </section>
    <section className="section split">
      <div>
        <h2>How I work</h2>
        <p>
          I start with the story behind the product, then shape APIs and interfaces around the core
          flow. The goal is always a demo that feels dependable and thoughtful.
        </p>
        <p>
          I care about clear architecture, clean UI systems, and making sure each project has a
          reason to exist in the portfolio.
        </p>
      </div>
      <div className="panel">
        <h3>Toolkit highlights</h3>
        <ul>
          <li>Spring Boot services, REST APIs, and data modeling</li>
          <li>Next.js, TypeScript, and design-focused front-end UI</li>
          <li>End-to-end demo planning and release polish</li>
        </ul>
      </div>
    </section>
    <section className="section">
      <h2>What you will see here</h2>
      <div className="card-grid">
        <article className="card">
          <h3>Full-stack demos</h3>
          <p>Realistic workflows backed by Spring Boot services and live data flows.</p>
        </article>
        <article className="card">
          <h3>Design-aware UI</h3>
          <p>Layouts, typography, and motion that make each demo memorable.</p>
        </article>
        <article className="card">
          <h3>Documented process</h3>
          <p>Clear notes on stack choices, trade-offs, and implementation details.</p>
        </article>
      </div>
    </section>
  </div>
);

export default AboutPage;
