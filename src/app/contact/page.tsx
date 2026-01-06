import Link from "next/link";

const ContactPage = () => (
  <div className="page">
    <section className="page-hero">
      <div className="eyebrow">Contact</div>
      <h1>Let&apos;s connect</h1>
      <p>
        The CV includes direct contact details. If you want to collaborate or discuss a demo, start
        there and I will respond quickly.
      </p>
      <div className="hero-actions">
        <Link className="button" href="/cv">
          Open CV
        </Link>
        <Link className="button ghost" href="/about">
          Learn more first
        </Link>
      </div>
    </section>
    <section className="section">
      <h2>What I can help with</h2>
      <div className="card-grid">
        <article className="card">
          <h3>Full-stack demos</h3>
          <p>End-to-end delivery with Spring Boot services and Next.js front-ends.</p>
        </article>
        <article className="card">
          <h3>Portfolio-ready polish</h3>
          <p>Experience design, UI details, and documentation for launch-ready showcases.</p>
        </article>
        <article className="card">
          <h3>API integration</h3>
          <p>Cleanly structured APIs, data flows, and production-style setups.</p>
        </article>
      </div>
    </section>
  </div>
);

export default ContactPage;
