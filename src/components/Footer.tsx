const Footer = () => {
  return (
    <footer className="w-full border-t bg-slate-900 text-slate-100">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs md:text-sm">
        <p>© {new Date().getFullYear()} Sanskrooti. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-orange-400">
            About
          </a>
          <a href="#" className="hover:text-orange-400">
            Contact
          </a>
          <a href="#" className="hover:text-orange-400">
            Privacy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
