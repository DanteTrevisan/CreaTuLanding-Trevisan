import Author from "./Author";
import SocialMedia from "./SocialMedia"

const Footer = () => {
  return (
    <footer className="container flex flex-col justify-center items-center bg-sky-700 text-sky-50 h-52">
      <Author
        author="Dante Trevisan"
      />
      <SocialMedia />
    </footer>
    // Hosting
    // Other Data Components
  );
};

export default Footer;