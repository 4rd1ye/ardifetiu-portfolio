import Link from "next/link";

const Navigation = () => (
  <header>
    <nav>
      <div>
        <strong>Ardifetiu</strong>
      </div>
      <div className="links">
        <Link href="/">Home</Link>
        <Link href="/demos">Live Demos</Link>
      </div>
    </nav>
  </header>
);

export default Navigation;
