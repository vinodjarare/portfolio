import "./contact.scss";
import { Person, Mail, LinkedIn, GitHub} from "@material-ui/icons";

export default function Contact() {
  return (
    <div className="contact" id="contact">
     
      <div className="left">
      <div className="title">
     <h2 className="text-center">Contact</h2>
       </div>
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
     
          <div className="itemContainer">
            <Mail className="icon" />
            <p>vsjarare@gmail.com</p>
          </div>
      <div className="itemContainer">
            <Person className="icon" />
            <p>+91 7264005494</p>
          </div>
          <div className="itemContainer">
            <LinkedIn className="icon" />
            <p>LinkedIn</p>
          </div>
          
          <div className="itemContainer">
            <GitHub className="icon" />
            <p>GitHub</p>
          </div>
          
      </div>
    </div>
  );
}
