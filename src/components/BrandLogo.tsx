import lightThemeLogo from "../assets/brand/dark.svg";
import darkThemeLogo from "../assets/brand/light.svg";

export default function BrandLogo() {
  return (
    <span className="brand-logo-wrap">
      <img
        className="brand-logo brand-logo-light"
        src={lightThemeLogo}
        alt="MRB logo"
      />
      <img
        className="brand-logo brand-logo-dark"
        src={darkThemeLogo}
        alt=""
        aria-hidden="true"
      />
    </span>
  );
}
