/* eslint-disable react/prop-types */
import { useSpring, animated, config } from "react-spring";
import { useInView } from "react-intersection-observer";
import "./Banner.css";

const Banner = ({ Sig }) => {
  const { ref: headingRef, inView: headingInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { ref: sigRef, inView: sigInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const headingSpring = useSpring({
    opacity: headingInView ? 0.5 : 0,
    transform: headingInView ? "translateY(0)" : "translateY(-50px)",
    config: config.wobbly,
  });

  const sigSpring = useSpring({
    opacity: sigInView ? 1 : 0,
    transform: sigInView ? "translateY(0)" : "translateY(50px)",
    config: config.wobbly,
  });

  const movingTextSpring = useSpring({
    from: { transform: "translateX(100%)" },
    to: { transform: "translateX(-100%)" },
    config: config.molasses,
    loop: { reverse: false },
  });

  return (
    <div className="banner">
      <div className="inner-banner">
        <div className="heading-banner">
          <animated.h1
            className="Acm_heading"
            ref={headingRef}
            style={headingSpring}
          >
            ACM NITK Chapter
          </animated.h1>
          <animated.h2 className="sig_name" ref={sigRef} style={sigSpring}>
            {Sig.name ? Sig.name.toUpperCase() : "Sig Name"}
          </animated.h2>
        </div>

        <div className="buttons">
          <div className="text-box1">
            <a href="#" className="btn1 btn1-white">
              ACM NITK
            </a>
          </div>
          <div className="text-box2">
            <a href="#" className="btn2 btn2-white">
              SUB-SIGS
            </a>
          </div>
        </div>
      </div>
      <div className="background-text-container">
        <animated.div className="background-text" style={movingTextSpring}>
          {Sig.motto ? Sig.motto : "Sig motto"}
        </animated.div>
      </div>
      {Sig.name == "Sanganitra" ? (
        <div className="logos">
          <img
            className="sig-logo"
            src="/Sanganitra logo.svg"
            alt="logo"
          />
          <img className="circle1" src="/circle1.svg" alt="circle1" />
          <img className="circle2" src="/circle2.svg" alt="circle2" />
        </div>
      ) : (
        <div className="logos">
          <img
            className="sig-logo"
            src={Sig.logo ? Sig.logo : "/Sanganitra logo.svg"}
            alt="logo"
          />
        </div>
      )}
    </div>
  );
};

export default Banner;
