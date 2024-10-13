import './About.css'; // Optional for styling
import { motion, useInView } from "framer-motion";
import { useRef } from 'react';


const Card = ({ title, content, imageUrl, altText, className }) => {


  const ref = useRef(null);
  const isInView = useInView(ref, { triggerOnce: true });

  return (
    <motion.div
    className={className}
    initial={{ opacity: 0, x: className == "card-right" ? -100 : 100 }}
    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0 }}
    transition={{ duration: 1, delay: 0.4 }}
    ref={ref}
  >
    <div className="card">
      <div className="card-header">
        <h2>{title}</h2>
      </div>
      <div className="card-content">
        <p>{content}</p>
        {imageUrl && <img className="about_box_img" src={imageUrl} alt={altText} />}
      </div>
    </div>
    </motion.div>

  );
};

export default Card;