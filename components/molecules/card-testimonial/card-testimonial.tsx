import "./card-testimonial.css";

export function CardTestimonial() {
  return (
    <div className="card-testimonial">
      <div className="card-testimonial-text">
        <p>
          “ It’s amazing how much easier it has been to meet new people and
          create instantly non connections. I have the exact same personal the
          only thing that has changed is my mind set and a few behaviors. “
        </p>
      </div>
      <div className="card-testimonial-profile">
        <img src="/images/image-1.png" width="100px" />
        <div className="card-testimonial-profile-info">
          <h5>Head Of Idea</h5>
          <h4>James C. Anderson</h4>
        </div>
      </div>
    </div>
  );
}
