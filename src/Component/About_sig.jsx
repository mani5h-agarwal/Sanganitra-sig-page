import "./About.css";
import { Fade } from "react-awesome-reveal";
import Card from "./Card";
import AboutBox from "./AboutBox"
import { dataLeft, dataRight, About } from "./data";

export const About_sig = () => {
  return (
    <div>
      <h1 className="sig_about">
        <Fade duration={2000} triggerOnce="true" fraction={1}>
          About Sanganitra
        </Fade>
      </h1>
      {About.map((data, index) => (
        <AboutBox
          key={index}
          position={index % 2 === 0 ? "left" : "right"}
          title={data.title}
          content={data.content}
          imageUrl={data.imageUrl}
        />
      ))}
      <div className="our_events_container">
        <Fade
          className="our_events_title"
          cascade
          damping={0.3}
          triggerOnce="true"
          duration={100}
        >
          OUR EVENTS
        </Fade>
        <Fade
          className="our_events_subtitle"
          cascade
          damping={0.3}
          triggerOnce="true"
          duration={50}
        >
          An overview of our past and upcoming events
        </Fade>

        <div className="events_timeline">
          <div className="timeline_line"></div>
          <div className="right">
            {dataRight.map((data, index) => (
              <Card
                key={index}
                className="card-right"
                title={data.title}
                content={data.content}
                imageUrl={data.imageUrl}
                altText={data.altText}
              />
            ))}
          </div>
          <div className="left">
            {dataLeft.map((data, index) => (
              <Card
                key={index}
                className="card-left"
                title={data.title}
                content={data.content}
                imageUrl={data.imageUrl}
                altText={data.altText}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About_sig;
