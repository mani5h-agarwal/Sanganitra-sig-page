import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import "./About.css";
import { Fade, Slide } from "react-awesome-reveal";
import Card from "./Card";

export const About_sig = () => {
  // Refs to track elements
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const ref4 = useRef(null);
  const ref5 = useRef(null);
  const ref6 = useRef(null);

  const isInView1 = useInView(ref1, { triggerOnce: true });
  const isInView2 = useInView(ref2, { triggerOnce: true });
  const isInView3 = useInView(ref3, { triggerOnce: true });
  const isInView4 = useInView(ref4, { triggerOnce: true });
  const isInView5 = useInView(ref5, { triggerOnce: true });
  const isInView6 = useInView(ref6, { triggerOnce: true });

  return (
    <div>
      <h1 className="sig_about">
        <Fade duration={2000} triggerOnce="true" fraction={1}>
          About Sanganitra
        </Fade>
      </h1>
      <div className="about_box_1">
        <img className="about_box_1_img" src="/image.png" alt="About Box 1" />
        <div className="about1-inner">
          <Fade cascade damping={0.3} triggerOnce="true" duration={2000}>
            <h1 className="What_is">What is Sanganitra</h1>
            <p className="what_is_para">
              Sanganitra is the computer-science oriented Special Interest Group
              of ACM NITK Chapter
            </p>
          </Fade>
        </div>
      </div>
      <div className="about_box_2">
        <div className="about2-inner">
          <Fade cascade damping={0.3} triggerOnce="true" duration={2000}>
            <h1 className="What_do">What do we do here at Sanganitra?</h1>
            <p className="what_do_para">
              We are a bunch of people from different walks of life united by a
              single goal, to code, and to code well. Split into five sub
              interest groups Competitive Programming, Development, Systems,
              Machine Learning and Theoretical CS, we carry out lively
              discussions year around on the various developments and
              complications in the aforementioned fields. We believe that code
              can do miracles and our projects are a testament to this fact. We
              also host code oriented events throughout the year and try to
              establish a platform to bring the best out of the coder in
              everyone.
            </p>
          </Fade>
        </div>
        <img className="about_box_2_img" src="/image.png" alt="About Box 2" />
      </div>
      <div className="vision">
        <img className="about_box_3_img" src="/image.png" alt="About Box 3" />
        <div className="about3-inner">
          <h1 className="vision_text">
            <Slide triggerOnce="true">Our Vision</Slide>
          </h1>
          <p className="vision_subheading">
            <Fade duration={2500} triggerOnce="true">
              To ensure that the development of computer technology paves the
              path for a brighter future
            </Fade>
          </p>
        </div>
      </div>
      <div className="mission">
        <div className="about4-inner">
          <h1 className="mission_text">
            {" "}
            <Slide triggerOnce="true">Our Mission</Slide>{" "}
          </h1>
          <p className="mission_subheading">
            <Fade duration={2500} triggerOnce="true">
              To probe, promote and propagate knowledge in computer science and
              work towards overcoming 21st century challenges.
            </Fade>
          </p>
        </div>
        <img className="about_box_4_img" src="/image.png" alt="About Box 4" />
      </div>

      <motion.div
        className="our_events_container"
        // initial={{ opacity: 0 }}
        // animate={isInView6 ? { opacity: 1 } : { opacity: 0 }}
        // transition={{ duration: 1 }}
        // ref={ref6}
        // triggerOnce="true"
      >
        <motion.h2
          className="our_events_title"
          // initial={{ opacity: 0, y: -20 }}
          // animate={isInView6 ? { opacity: 1, y: 0 } : { opacity: 0 }}
          // transition={{ duration: 1 }}
        >
          OUR EVENTS
        </motion.h2>
        <motion.p
          className="our_events_subtitle"
          // initial={{ opacity: 0, y: 20 }}
          // animate={isInView6 ? { opacity: 1, y: 0 } : { opacity: 0 }}
          // transition={{ duration: 1, delay: 0.2 }}
        >
          An overview of our past and upcoming events
        </motion.p>

        <div className="events_timeline">
          <div className="timeline_line"></div>
          <div className="right">
            <motion.div
              className="card-right"
              initial={{ opacity: 0, x: -100 }}
              animate={isInView2 ? { opacity: 1, x: 0 } : { opacity: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              ref={ref2}
            >
              <Card
                title="1. SANGAMITRA"
                content="A buddy system with one-on-one mentoring to help chapter members interested in competitive coding on their path to various contests, resume tailoring, and to initiate conversation and foster bonds between seniors and juniors, both within and outside the club."
                imageUrl="/image.png"
                altText="About Box 4"
              />
            </motion.div>
            <motion.div
              className="card-right"
              initial={{ opacity: 0, x: -100 }}
              animate={isInView4 ? { opacity: 1, x: 0 } : { opacity: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              ref={ref4}
            >
              <Card
                title="3. INTRODUCTION TO DEVELOPMENT: TOOLS AND TECHNOLOGIES"
                content="We will host an enlightening session on 'Introduction to
                Development: Tools and Technologies' and explore the tech
                landscape. From version control with Git to the power of the
                digital realm, we will delve into Frontend and Backend Web
                Development, Mobile App Development, programming languages, and
                frameworks along with a host of other tools to cross-platform
                development and cloud computing."
                imageUrl="/image.png"
                altText="About Box 4"
              />
            </motion.div>
            <motion.div
              className="card-right"
              initial={{ opacity: 0, x: -100 }}
              animate={isInView6 ? { opacity: 1, x: 0 } : { opacity: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              ref={ref6}
            >
              <Card
                title="5. INTRODUCTION TO MACHINE LEARNING"
                content=" ACM NITK brings to you an electrifying session on 'Introduction
                to Machine Learning' like no other. Join us as we unravel the
                secrets of AI, from 'What is Machine Learning?' to its
                incredible applications. Whether you're a tech enthusiast or
                curious about data science, this event is perfect for you!"
                imageUrl="/image.png"
                altText="About Box 4"

              />
            </motion.div>
          </div>
          <div className="left">
            <motion.div
              className="card-left"
              initial={{ opacity: 0, x: 100 }}
              animate={isInView1 ? { opacity: 1, x: 0 } : { opacity: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              triggerOnce={true}
              ref={ref1}
            >
              <Card
                title="2. ACM WEEK OF CODE"
                content="A buddy system with one-on-one mentoring to help chapter members interested in competitive coding on their path to various contests, resume tailoring, and to initiate conversation and foster bonds between seniors and juniors, both within and outside the club."
                imageUrl="/image.png"
                altText="About Box 4"
              />
            </motion.div>
            <motion.div
              className="card-left"
              initial={{ opacity: 0, x: 100 }}
              animate={isInView3 ? { opacity: 1, x: 0 } : { opacity: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              ref={ref3}
            >
              <Card
                title="4. ACM SUMMER CHALLENGE"
                content="An online contest series held during the summer vacations for
                all ACM members, it gives our members a fun way to stay engaged
                and brush up on their coding skills."
                imageUrl="/image.png"
                altText="About Box 4"
              />
            </motion.div>
            <motion.div
              className="card-left"
              initial={{ opacity: 0, x: 100 }}
              animate={isInView5 ? { opacity: 1, x: 0 } : { opacity: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              ref={ref5}
            >
              <Card
                title="6. INTRODUCTION TO OPEN SOURCE"
                content='Calling all tech enthusiasts! ACM NITK is thrilled to present
                the Knowledge Exchange Program on "Introduction to Open Source"!'
                imageUrl="/image.png"
                altText="About Box 4"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About_sig;
