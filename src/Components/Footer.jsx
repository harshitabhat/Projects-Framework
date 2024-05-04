import { useContext } from "react";
import { BsGithub } from "react-icons/bs";
import ThemeContext from "../Context/ThemeContext";

const Footer = () => {

  const { theme } = useContext(ThemeContext);

  return (
    <footer className={`${theme === "dark" ? "bg-orange-800" : "bg-red-900"} p-2.5 flex justify-center items-center`}>
      <BsGithub className="mx-2" />
      <p>GitHub Profile Finder | © 2024 Harshita Krishna Bhat</p>
    </footer>
  );
};

export default Footer;
