import Link from "next/link";
import { demos } from "../data/demos";

const HomePage = () => (
  <>
    <section className="hero">
      <span className="badge">Portfolio</span>
      <h1>Hi, I&apos;m Ardifetiu. I build full-stack demos.</h1>
      <p>
        This portfolio highlights live projects built with Spring Boot backends and Next.js
        front-ends. Browse demos or jump into a specific showcase.
      </p>
      <div>
        <Link className="badge" href="/demos">
          Explore live demos
        </Link>
      </div>
    </section>
    <section>
      <h2>Featured demos</h2>
      <div className="card-grid">
        {demos.slice(0, 2).map((demo) => (
          <article key={demo.title} className="card">
            <h3>{demo.title}</h3>
            <p>{demo.description}</p>
            <p>
              <strong>Stack:</strong> {demo.stack.join(", ")}
            </p>
            <Link href={demo.href}>View demo details →</Link>
          </article>
        ))}
      </div>
    </section>
  </>
);

export default HomePage;
