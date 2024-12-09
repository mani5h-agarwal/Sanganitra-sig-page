/* eslint-disable react/prop-types */
import "./About.css";
import { Fade } from "react-awesome-reveal";
import Card from "./Card";
import AboutBox from "./AboutBox";
// import { dataLeft, dataRight, About } from "./data";

export const About_sig = ({ Sig, events }) => {
  return (
    <div>
      {/* <h1 className="sig_about">
        <Fade duration={2000} triggerOnce="true" fraction={1}>
          {Sig.name ? "About " + Sig.name : "Sig Name"}
        </Fade>
      </h1> */}
      {/* {About.map((data, index) => (
        <AboutBox
          key={index}
          position={index % 2 === 0 ? "left" : "right"}
          heading={data.title}
          content={data.content}
          imageUrl={data.imageUrl}
        />
      ))} */}
      <AboutBox
        key={Sig.id}
        position="left"
        heading={"What is " + Sig.name}
        content={Sig.title}
        imageUrl="./image.png"
      />
      <AboutBox
        key={Sig.id}
        position="right"
        heading={"What do we do here at " + Sig.name}
        content={Sig.description}
        imageUrl="./image.png"
      />
      <AboutBox
        key={Sig.id}
        position="left"
        heading="Our Vision"
        content={Sig.vision}
        imageUrl="./image.png"
      />
      <AboutBox
        key={Sig.id}
        position="right"
        heading="Our Mission"
        content={Sig.mission}
        imageUrl="./image.png"
      />

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
          {/* <div className="right">
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
          </div> */}
          <div className="right">
            {events.map((data, index) => {
              if (index % 2 === 0) {
                return (
                  <Card
                    key={index}
                    className="card-right"
                    title={data.name.toUpperCase()}
                    content={data.description}
                    imageUrl={data.image}
                    altText={data.name}
                  />
                );
              }
              return null;
            })}
          </div>
          <div className="left">
            {events.map((data, index) => {
              if (index % 2 !== 0) {
                return (
                  <Card
                    key={index}
                    className="card-left"
                    title={data.name.toUpperCase()}
                    content={data.description}
                    imageUrl={data.image}
                    altText={data.image}
                  />
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About_sig;
