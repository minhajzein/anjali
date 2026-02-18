import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="mb-8 md:mb-0">
          <Link
            href="/"
            className="text-3xl font-bold tracking-tighter mb-4 block"
          >
            ANJALI<span className="text-secondary">.</span>
          </Link>
          <p className="max-w-xs text-primary-foreground/70">
            Elevating brands through strategic digital marketing and innovative
            solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
          <div>
            <h4 className="font-bold mb-4 uppercase text-xs tracking-widest text-secondary">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>
                <Link
                  href="/"
                  className="hover:text-secondary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-secondary transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="hover:text-secondary transition-colors"
                >
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 uppercase text-xs tracking-widest text-secondary">
              Services
            </h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li className="hover:text-secondary transition-colors cursor-default">
                SEO Optimization
              </li>
              <li className="hover:text-secondary transition-colors cursor-default">
                Social Media
              </li>
              <li className="hover:text-secondary transition-colors cursor-default">
                Paid Advertising
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 uppercase text-xs tracking-widest text-secondary">
              Connect
            </h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-secondary transition-colors">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-primary-foreground/10 text-center text-xs text-primary-foreground/50">
        © {new Date().getFullYear()} Anjali Portfolio. All rights reserved.
        Built for excellence.
      </div>
    </footer>
  );
}
