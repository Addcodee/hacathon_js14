import React from "react";
import "./features.css";
import motor from "../../assets/tulpar-features.jpg";
import { AiOutlineArrowRight } from "react-icons/ai";

const Features = () => {
  return (
    <div className="features">
      <div className="features__descr">
        <h3>TULPAR TECHNOLOGY</h3>
        <p>
          Staying ahead of the curve in a very competitive e-mobility
          landscape in true Tulpar fashion, we are offering our
          ground-breaking components to visionary clientele. Sharing
          this technology enables Koenigsegg to have a positive impact
          on CO2 reduction.
        </p>
        <button>
          Discover our solutions <AiOutlineArrowRight />
        </button>
      </div>
      <div className="features__img">
        <h2>INNOVATIONS INDA HOUSE</h2>
        <div>
          <img src={motor} alt="motor" />
        </div>
      </div>
    </div>
  );
};

export default Features;
