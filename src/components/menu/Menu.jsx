import "./menu.scss";
import { saveAs } from "file-saver";
export default function Menu({ menuOpen, setMenuOpen }) {
  const saveFile = () => {
    saveAs(
      "assets/cv.pdf"
    );
  };
  return (
    <div className={"menu "+(menuOpen && "active")}>
      <ul>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#intro">Home</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#projects">Projects</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#Certificate">Certificate</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#resume">Resume</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#contact">Contact</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <button className="button" onClick={saveFile}>Download CV</button>
        </li>
      </ul>
    </div>
  );
}
