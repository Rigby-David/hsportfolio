import { headerIconsObj, statsObj } from "../stats";
import "./Stats.css";

export default function Stats() {
  console.log(statsObj);
  console.log("headerIconsObj", headerIconsObj);
  return (
    <div className="stats-container">
      <header>
        <h3>Skills</h3>
        {statsObj.map((obj) => {
          return (
            <section key={obj.id} className="skill-row">
              #{obj.id} {obj.name} {obj.rating}
            </section>
          );
        })}
        <section className="header-icons">
          <a href=""></a>
          <a href=""></a>
          <a href=""></a>
          <a href=""></a>
          <a href=""></a>
        </section>
      </header>
    </div>
  );
}
