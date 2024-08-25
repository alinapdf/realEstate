import "./Team.scss";

import twitter from "./../../img/team/twitter-icon.svg";
import sendMessage from "./../../img/team/send-icon.svg";

import { teamList } from "./teamList";
import React, { forwardRef } from "react";
const Team = forwardRef((props, ref) => {
  return (
    <>
      <section className="team" ref={ref}>
        <div className="container">
          <h2 className="team-header">Meet the Estatein Team</h2>
          <p className="team-text">
            At Estatein, our success is driven by the dedication and expertise
            of our team. Get to know the people behind our mission to make your
            real estate dreams a reality.
          </p>
          <ul className="team-list">
            {teamList.map((human) => {
              return (
                <li className="team-list-item" key={human.id}>
                  <div className="team-list-item-top-wrapper">
                    <div className="team-list-item-top-wrapper-img">
                      <img src={human.photo} alt={human.name} />
                    </div>
                    <a className="team-list-item-top-wrapper-twitter">
                      <img src={twitter} alt="Follow twittter" />
                    </a>
                  </div>
                  <h3 className="team-list-item-name">{human.name}</h3>
                  <p className="team-list-item-position">{human.position}</p>
                  <form action="#" className="team-list-item-form">
                    <input
                      type="text"
                      className="team-list-item-form-input"
                      placeholder="Say Hello 👋"
                    />
                    <button className="team-list-item-form-send-message">
                      <img src={sendMessage} alt="Send Message" />
                    </button>
                  </form>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </>
  );
});

export default Team;
