import { statsObj } from "../stats";
import "./Stats.css";

export default function Stats() {
  console.log(statsObj);
  return (
    <div className="stats-container">
      <header>
        <h3>Skills</h3>
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
