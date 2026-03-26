const Footer = () => {
  return (
    <footer className="navy-gradient section-padding py-12">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-display text-xl font-bold text-gold-light">
            Annan Zulfiqar Tax Services
          </p>
          <p className="text-gold-light/60 font-body text-sm mt-1">
            VITA Certified · UVA McIntire Graduate
          </p>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/annan-zulfiqar-a1934b229"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold-light/60 hover:text-gold transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="mailto:annanzulfiqar@gmail.com" className="text-gold-light/60 hover:text-gold transition-colors font-body text-sm">
            annanzulfiqar@gmail.com
          </a>
        </div>
        <p className="text-gold-light/40 font-body text-xs">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
