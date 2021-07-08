import * as React from "react";
import Review1 from "../images/Review-1-Bubble.png";
import Review2 from "../images/Review-2-Bubble.png";
import Review3 from "../images/Review-3-Bubble.png";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonials-content">
        <h2>50+ satisfied clients, from 25+ countries</h2>
        <div className="reviews">
          <div className="reviews__review">
            <img src={Review1} alt="review-1" />
          </div>
          <div className="reviews__review">
            <img src={Review2} alt="review-1" />
          </div>
          <div className="reviews__review">
            <img src={Review3} alt="review-1" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
