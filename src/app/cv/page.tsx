const CvPage = () => (
  <div className="page">
    <section className="page-hero">
      <div className="eyebrow">Curriculum Vitae</div>
      <h1>CV</h1>
      <p>
        This page hosts the complete CV alongside a quick snapshot of the focus areas showcased in
        the portfolio.
      </p>
      <div className="hero-actions">
        <a className="button" href="/ardi-fetiu-cv.pdf" target="_blank" rel="noreferrer">
          Download PDF
        </a>
        <a className="button ghost" href="/ardi-fetiu-cv.pdf">
          Open full screen
        </a>
      </div>
    </section>
    <section className="section split">
      <div>
        <h2>Snapshot</h2>
        <p>
          The CV highlights full-stack delivery, with a focus on Spring Boot services and modern
          Next.js experiences. Use the PDF below for the complete story.
        </p>
      </div>
      <div className="panel">
        <h3>Key focus</h3>
        <ul>
          <li>Backend services, APIs, and data workflows</li>
          <li>Front-end systems with strong UI polish</li>
          <li>Demo-ready project presentation</li>
        </ul>
      </div>
    </section>
    <section className="section">
      <h2>Full CV</h2>
      <div className="cv-frame">
        <iframe title="Ardi Fetiu CV" src="/ardi-fetiu-cv.pdf" />
      </div>
    </section>
  </div>
);

export default CvPage;
