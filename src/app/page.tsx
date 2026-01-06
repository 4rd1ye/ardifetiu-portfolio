import Link from "next/link";
import { demos } from "../data/demos";

const HomePage = () => (
  <>
    <section className="hero">
      <div className="eyebrow">Portfolio</div>
      <div className="hero-grid">
        <div>
          <h1>Ardi Fetiu builds full-stack experiences that ship.</h1>
          <p>
            I design product-ready demos powered by Spring Boot backends and polished Next.js
            front-ends. Explore my approach, view my CV, and then dive into the live work.
          </p>
          <div className="hero-actions">
            <Link className="button" href="/about">
              About me
            </Link>
            <Link className="button ghost" href="/cv">
              View CV
            </Link>
            <Link className="button subtle" href="/demos">
              Live demos
            </Link>
          </div>
        </div>
        <div className="hero-card">
          <p className="hero-card-title">Currently focused on</p>
          <ul>
            <li>Spring Boot APIs with clean domain boundaries</li>
            <li>Next.js dashboards and public-facing product sites</li>
            <li>Deployment-ready demos with real workflows</li>
          </ul>
          <div className="chip-row">
            <span className="chip">Java</span>
            <span className="chip">Spring Boot</span>
            <span className="chip">Next.js</span>
            <span className="chip">TypeScript</span>
          </div>
        </div>
      </div>
    </section>
    <section className="section split">
      <div>
        <h2>About me</h2>
        <p>
          I build demo-ready products that feel like real applications. My focus is on reliable
          APIs, crisp interfaces, and the story behind each build.
        </p>
        <p>
          Want the full background and toolkit? Start with the CV, then explore the live demos once
          you are ready.
        </p>
        <Link className="button ghost" href="/about">
          Read the full story
        </Link>
      </div>
      <div className="panel">
        <h3>Focus areas</h3>
        <ul>
          <li>Backend architecture and data modeling</li>
          <li>Designing user flows for portfolio-grade demos</li>
          <li>Shipping clean UI components with Next.js</li>
        </ul>
      </div>
    </section>
    <section className="section">
      <h2>CV snapshot</h2>
      <div className="card-grid">
        <article className="card">
          <h3>Core stack</h3>
          <p>Java, Spring Boot, Next.js, TypeScript, PostgreSQL, REST APIs.</p>
        </article>
        <article className="card">
          <h3>What I deliver</h3>
          <p>Feature-ready demos, API integrations, and UI systems built for clarity.</p>
        </article>
        <article className="card">
          <h3>Next steps</h3>
          <p>Download the CV or scroll to the live demos when you are ready to explore.</p>
        </article>
      </div>
      <div className="section-actions">
        <Link className="button" href="/cv">
          Open the CV page
        </Link>
        <Link className="button subtle" href="/demos">
          Jump to demos
        </Link>
      </div>
    </section>
    <section className="section">
      <h2>Featured demos</h2>
      <div className="card-grid">
        {demos.slice(0, 2).map((demo) => (
          <article key={demo.title} className="card">
            <h3>{demo.title}</h3>
            <p>{demo.description}</p>
            <p>
              <strong>Stack:</strong> {demo.stack.join(", ")}
            </p>
            <Link className="text-link" href={demo.href}>
              View demo details
            </Link>
          </article>
        ))}
      </div>
    </section>
  </>
);

export default HomePage;
