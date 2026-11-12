export default function Footer({ name }: { name: string }) {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} {name}</p>
        <a className="top-link" href="#top">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
