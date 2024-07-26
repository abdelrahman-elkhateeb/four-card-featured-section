import supervisor from "../assets/icon-supervisor.svg";
import karma from "../assets/icon-karma.svg";
import calculator from "../assets/icon-calculator.svg";
import teamBuilder from "../assets/icon-team-builder.svg";

function Cards() {
  const classNameCard = `flex flex-col border-t-4 justify-between shadow-md rounded p-4`;

  const classNameHead = `font-bold capitalize text-gray-700`;

  const classNameP = ``;
  return (
    <div className="grid-flow-rows grid grid-cols-3 gap-4">
      <div className={`${classNameCard} border-mainCyan`}>
        <div>
          <h2 className={`${classNameHead}`}>supervisor</h2>
          <p className={`text-sm text-gray-400`}>Monitors activity to identify project roadblocks</p>
        </div>
        <img src={supervisor} alt="supervisor" className="ml-auto" />
      </div>

      <div className={`${classNameCard} border-mainRed`}>
        <div>
          <h2 className={`${classNameHead}`}>team builder</h2>
          <p>
            scans our talent network to create the optimal team for your project
          </p>
        </div>
        <img src={teamBuilder} alt="team" className="ml-auto" />
      </div>

      <div className={`${classNameCard} border-mainOrange`}>
        <div>
          <h2 className={`${classNameHead}`}>karma</h2>
          <p>regularly evaluates our talent to ensure quality</p>
        </div>
        <img src={karma} alt="karma" className="ml-auto" />
      </div>

      <div className={`${classNameCard} border-mainBlue`}>
        <div>
          <h2 className={`${classNameHead}`}>calculator</h2>
          <p>
            uses data from past projects to provide better delivery estimates
          </p>
        </div>
        <img src={calculator} alt="calculator" className="ml-auto" />
      </div>
    </div>
  );
}

export default Cards;
