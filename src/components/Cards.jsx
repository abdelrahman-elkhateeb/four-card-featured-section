import supervisor from "../assets/icon-supervisor.svg";
import karma from "../assets/icon-karma.svg";
import calculator from "../assets/icon-calculator.svg";
import teamBuilder from "../assets/icon-team-builder.svg";

function Cards() {
  return (
    <div>
      <div>
        <h2>supervisor</h2>
        <p>Monitors activity to identify project roadblocks</p>
        <img src={supervisor} alt="supervisor" />
      </div>

      <div>
        <h2>team builder</h2>
        <p>
          scans our talent network to create the optimal team for your project
        </p>
        <img src={karma} alt="karma" />
      </div>

      <div>
        <h2>calculator</h2>
        <p>uses data from past projects to provide better delivery estimates</p>
        <img src={calculator} alt="calculator" />
      </div>

      <div>
        <h2>team builder</h2>
        <p>
          scans our talent network to create the optimal team for your project
        </p>
        <img src={teamBuilder} alt="team" />
      </div>
    </div>
  );
}

export default Cards;
