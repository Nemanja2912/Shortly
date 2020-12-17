import React from "react";
import img1 from "../image/introduction1.png";
import img2 from "../image/introduction2.png";
import img3 from "../image/introduction3.png";

const Introduction = () => {
  return (
    <div className="introduction container">
      <div className="info">
        <h2>Introduction</h2>
        <p>
          Don't let the links limit you. Make your links support your brand. The
          new standard of shortening links. A new standard for link analytics.
          Discover unique redirects analytics - work with your team together
          building your brand engagment. Manage your links like a pro.
        </p>
      </div>
      <div className="grid">
        <div className="img">
          <img src={img1} alt="" />
        </div>
        <div className="txt">
          <h3>Brand Recognition</h3>
          <p>
            Boost your brand recognition with each click. Generic links don't
            mean a thing. Branded links help instil confidence in your content.
          </p>
          <div className="learn-more">
            Learn more <i class="fas fa-long-arrow-alt-right"></i>
          </div>
        </div>
        <div className="txt">
          <h3>Detailed Records</h3>
          <p>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
          <div className="learn-more">
            Learn more <i class="fas fa-long-arrow-alt-right"></i>
          </div>
        </div>
        <div className="img">
          <img src={img2} alt="" />
        </div>
        <div className="img img2">
          <img src={img3} alt="" />
        </div>
        <div className="txt">
          <h3>Fully Customizable</h3>
          <p>
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
          <div className="learn-more">
            Learn more <i class="fas fa-long-arrow-alt-right"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
