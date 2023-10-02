import logo from "../help_assets/help_logo_white.png";

const Footer = () => {
  return (
    <footer className="flex bg-[#120B48] justify-between px-[130px] py-[98px]">
      <a href="http://" className="flex gap-2 items-center">
        <img src={logo} alt="Help me out logo" />
        <p className="text-white font-bold">Help me Out</p>
      </a>
      <div className="flex gap-[220px]">
        <ul className="p-0 flex flex-col gap-[26px]">
          <li>
            <a href="http://" className="text-white">
              Menu
            </a>
          </li>
          <li>
            <a href="http://" className="text-white">
              Home
            </a>
          </li>
          <li>
            <a href="http://" className="text-white">
              Converter
            </a>
          </li>
          <li>
            <a href="http://" className="text-white">
              How it works
            </a>
          </li>
        </ul>
        <ul className="p-0 flex flex-col gap-[26px]">
          <li>
            <a href="http://" className="text-white">
              About Us
            </a>
          </li>
          <li>
            <a href="http://" className="text-white">
              About
            </a>
          </li>
          <li>
            <a href="http://" className="text-white">
              Contact Us
            </a>
          </li>
          <li>
            <a href="http://" className="text-white">
              Privacy Policy
            </a>
          </li>
        </ul>
        <ul className="p-0 flex flex-col gap-[26px]">
          <li>
            <a href="http://" className="text-white">
              Screen Record
            </a>
          </li>
          <li>
            <a href="http://" className="text-white">
              Browser Window
            </a>
          </li>
          <li>
            <a href="http://" className="text-white">
              Desktop
            </a>
          </li>
          <li>
            <a href="http://" className="text-white">
              Application
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
