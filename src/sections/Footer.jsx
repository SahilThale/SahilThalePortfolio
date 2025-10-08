const Footer = () => {
  return (
    <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
      <div className="text-white-500 flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>

      <div className="flex gap-3">
        <div className="social-icon">
          <a href="https://github.com/SahilThale" className="w-1/2 h-1/2">
          <img src="/assets/github.svg" alt="github"  />
          </a>
        </div>
        <div className="social-icon">
          <a href="https://www.linkedin.com/in/sahilthale/" className="w-1/2 h-1/2">
          <img src="/assets/linkedin.png" alt="linkedin"  />
          </a>
        </div>
        <div className="social-icon">
           <a href="https://www.instagram.com/thale.sahill/" className="w-1/2 h-1/2">
          <img src="/assets/instagram.svg" alt="instagram" />
          </a>
        </div>
      </div>

      <p className="text-white-500">© 2025 Sahil Thale. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
