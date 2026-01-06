import Link from "next/link";

const Navigation = () => (
  <header>
    <nav>
      <div className="brand">
        <Link href="/">Ardi Fetiu</Link>
      </div>
      <div className="links">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/cv">CV</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/demos">Live Demos</Link>
      </div>
    </nav>
  </header>
);

export default Navigation;
