import Link from "next/link";
import { demos } from "../../data/demos";

const DemosPage = () => (
  <section>
    <h1>Live demos</h1>
    <p>Build, host, and showcase projects powered by Spring Boot and Next.js.</p>
    <div className="card-grid">
      {demos.map((demo) => (
        <article key={demo.title} className="card">
          <span className="badge">{demo.status === "live" ? "Live" : "Planned"}</span>
          <h2>{demo.title}</h2>
          <p>{demo.description}</p>
          <p>
            <strong>Stack:</strong> {demo.stack.join(", ")}
          </p>
          <Link href={demo.href}>Open demo →</Link>
        </article>
      ))}
    </div>
  </section>
);

export default DemosPage;
