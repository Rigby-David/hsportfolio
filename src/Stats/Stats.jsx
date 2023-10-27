import { headerIconsObj, statsObj } from "../stats";
import "./Stats.css";

export default function Stats() {
  console.log(statsObj);
  console.log("headerIconsObj", headerIconsObj);
  return (
    <div className="skills-container">
      <section className="skills-top">
        <h3>Skills</h3>
        <section className="skills-icons">
          {headerIconsObj.map((obj) => {
            return <a key={obj.id}>{obj.icon}</a>;
          })}
        </section>
      </section>
      <div className="skills-rows">
        {statsObj.map((obj) => {
          return (
            <section key={obj.id} className="skill-row">
              <div>
                #{obj.id} {obj.name}
              </div>
              <div>{obj.rating}</div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
