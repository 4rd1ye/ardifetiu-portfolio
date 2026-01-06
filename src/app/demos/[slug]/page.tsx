import Link from "next/link";
import { demos } from "../../../data/demos";

type DemoPageProps = {
  params: Promise<{ slug: string }>;
};

const DemoPage = async ({ params }: DemoPageProps) => {
  const { slug } = await params;
  const demo = demos.find((item) => item.href.endsWith(slug));

  if (!demo) {
    return (
      <section>
        <h1>Demo not found</h1>
        <p>Pick another demo from the list.</p>
        <Link href="/demos">Back to demos</Link>
      </section>
    );
  }

  return (
    <section>
      <span className="badge">{demo.status === "live" ? "Live" : "Planned"}</span>
      <h1>{demo.title}</h1>
      <p>{demo.description}</p>
      <p>
        <strong>Stack:</strong> {demo.stack.join(", ")}
      </p>
      <div className="card">
        <h2>Implementation checklist</h2>
        <ul>
          <li>Expose a Spring Boot REST API for this demo.</li>
          <li>Connect the Next.js UI to the API.</li>
          <li>Add a live demo link once deployed.</li>
        </ul>
      </div>
      <p>
        <Link href="/demos">← Back to demos</Link>
      </p>
    </section>
  );
};

export default DemoPage;
