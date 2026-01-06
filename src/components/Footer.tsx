import Link from "next/link";

const Footer = () => (
  <footer>
    <p>Built with Next.js + Spring Boot demos.</p>
    <p>
      <Link className="text-link" href="/cv">
        View the CV
      </Link>
    </p>
  </footer>
);

export default Footer;
