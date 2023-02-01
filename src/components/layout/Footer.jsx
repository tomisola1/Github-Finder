import { FaHashtag } from "react-icons/fa";

const Footer = () => {
  const footerYear = new Date().getFullYear();

  return (
    <footer className="footer p-10 bg-pink-900 text-primary-context footer-center">
      <div>
        <FaHashtag size="40" />
        <p>Copy &copy; {footerYear} All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
