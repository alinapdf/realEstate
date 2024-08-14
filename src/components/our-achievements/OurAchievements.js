import "./OurAchievements.scss";
const OurAchievements = () => {
  return (
    <>
      <section className="our-achievements">
        <div className="container">
          <h2 className="our-achievements-header">Our Achievements</h2>
          <p className="our-achievements-text">
            Our story is one of continuous growth and evolution. We started as a
            small team with big dreams, determined to create a real estate
            platform that transcended the ordinary.
          </p>
          <ul className="our-achievements-list">
            <li className="our-achievements-list-item">
              <h3 className="our-achievements-list-item-header">
                3+ Years of Excellence
              </h3>
              <p className="our-achievements-list-item-text">
                With over 3 years in the industry, we've amassed a wealth of
                knowledge and experience, becoming a go-to resource for all
                things real estate.
              </p>
            </li>
            <li className="our-achievements-list-item">
              <h3 className="our-achievements-list-item-header">
                Happy Clients
              </h3>
              <p className="our-achievements-list-item-text">
                Our greatest achievement is the satisfaction of our clients.
                Their success stories fuel our passion for what we do.
              </p>
            </li>
            <li className="our-achievements-list-item">
              <h3 className="our-achievements-list-item-header">
                Industry Recognition
              </h3>
              <p className="our-achievements-list-item-text">
                We've earned the respect of our peers and industry leaders, with
                accolades and awards that reflect our commitment to excellence.
              </p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default OurAchievements;
