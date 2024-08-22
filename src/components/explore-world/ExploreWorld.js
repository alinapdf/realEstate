import img1 from "./../../img/contact-page/eew-1.jpg";
import img2 from "./../../img/contact-page/eew-2.jpg";
import img3 from "./../../img/contact-page/eew-3.jpg";
import img4 from "./../../img/contact-page/eew-4.jpg";
import img5 from "./../../img/contact-page/eew-5.jpg";
import img6 from "./../../img/contact-page/eew-6.jpg";

import "./ExploreWorld.scss";
const ExploreWorld = () => {
  return (
    <>
      <section className="explore-world">
        <div className="container">
          <div className="explore-world-wrapper">
            <div className="explore-world-wrapper-section">
              <img src={img1} alt="1" />
            </div>
            <div className="explore-world-wrapper-section">
              <img src={img2} alt="2" />
            </div>
            <div className="explore-world-wrapper-section">
              <img src={img3} alt="3" />
            </div>
            <div className="explore-world-wrapper-section">
              <img src={img4} alt="4" />
              <img src={img5} alt="5" />
            </div>
            <div className="explore-world-wrapper-section">
              <h2 className="explore-world-wrapper-section-header">
                Explore Estatein's World
              </h2>
              <p className="explore-world-wrapper-section-text">
                Step inside the world of Estatein, where professionalism meets
                warmth, and expertise meets passion. Our gallery offers a
                glimpse into our team and workspaces, inviting you to get to
                know us better.
              </p>
            </div>
            <div className="explore-world-wrapper-section">
              <img src={img6} alt="6" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ExploreWorld;
