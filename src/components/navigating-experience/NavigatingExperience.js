import { navigatingExperienceList } from "./navigatingExperienceList";
import "./NavigatingExperience.scss";
const NavigatingExperience = () => {
  return (
    <>
      <section className="navigating-experience">
        <div className="container">
          <h2 className="navigating-experience-header">
            Navigating the Estatein Experience
          </h2>
          <p className="navigating-experience-text">
            At Estatein, we've designed a straightforward process to help you
            find and purchase your dream property with ease. Here's a
            step-by-step guide to how it all works.
          </p>
          <ul className="navigating-experience-list">
            {navigatingExperienceList.map((item) => {
              return (
                <li className="navigating-experience-list-item" key={item.id}>
                  <p className="navigating-experience-list-item-step">
                    {item.step}
                  </p>
                  <div className="navigating-experience-list-item-wrapper">
                    <h3 className="navigating-experience-list-item-wrapper-header">
                      {item.header}
                    </h3>
                    <p className="navigating-experience-list-item-wrapper-text">
                      {item.text}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
};

export default NavigatingExperience;
