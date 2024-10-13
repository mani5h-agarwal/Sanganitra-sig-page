import "./About.css"; // Optional for styling
import { Fade } from "react-awesome-reveal";

const AboutBox = ({ title, content, position, imageUrl }) => {
  return (
    <div className={`about_box_${position}`}>
      <img className="about_box_img" src={imageUrl} alt={imageUrl} />
      <div className="about-inner">
        <Fade cascade damping={0.3} triggerOnce="true" duration={2000}>
          <h1 className="What_is">{title}</h1>
          <p className="what_is_para">{content}</p>
        </Fade>
      </div>
    </div>
  );
};

export default AboutBox;
