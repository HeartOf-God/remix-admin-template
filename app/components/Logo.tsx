import { Link } from "@remix-run/react";
import logoImg from "./heartofgod-logo.jpg"; // Importing the image

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-3">
      <img
        src={logoImg}
        alt="Heart Of God Logo"
        width={40}
        height={40}
        className="rounded-full"
      />
      <span className="text-xl text-slate-900 font-semibold uppercase">
        Heart Of God
      </span>
    </Link>
  );
};

export default Logo;
