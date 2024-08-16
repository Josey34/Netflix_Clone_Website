import { BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";
import { CgFacebook } from "react-icons/cg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-transparent text-xl h-auto p-7 px-8 max-w-[1000px] mx-auto cursor-pointer">
      <div id="socials" className="flex gap-6 pb-5">
        <Link to="https://www.facebook.com">
          <CgFacebook />
        </Link>
        <Link to="https://www.instagram.com">
          <BsInstagram />
        </Link>
        <Link to="https://www.x.com">
          <BsTwitter />
        </Link>
        <Link>
          <BsYoutube to="https://www.youtube.com"/>
        </Link>
      </div>
      <ul className="grid grid-cols-2 sm:grid-cols-4 items-center justify-between text-sm space-y-2 text-gray-400">
        <li className="cursor-pointer hover:underline">Audio Description</li>
        <li className="cursor-pointer hover:underline">Help Center</li>
        <li className="cursor-pointer hover:underline">Gift Cards</li>
        <li className="cursor-pointer hover:underline">Media Center</li>
        <li className="cursor-pointer hover:underline">Investor Relations</li>
        <li className="cursor-pointer hover:underline">Jobs</li>
        <li className="cursor-pointer hover:underline">Terms of Use</li>
        <li className="cursor-pointer hover:underline">Privacy</li>
        <li className="cursor-pointer hover:underline">Legal Notices</li>
        <li className="cursor-pointer hover:underline">Cookie Preferences</li>
        <li className="cursor-pointer hover:underline">
          Corporate Information
        </li>
        <li className="cursor-pointer hover:underline">Contact Us</li>
      </ul>
      <p className="text-sm pt-9 text-gray-400">
        &copy; 1997-2024 Netflix, Inc.
      </p>
    </div>
  );
};

export default Footer;
