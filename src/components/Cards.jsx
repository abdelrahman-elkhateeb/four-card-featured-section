import supervisor from "../assets/icon-supervisor.svg";
import karma from "../assets/icon-karma.svg";
import calculator from "../assets/icon-calculator.svg";
import teamBuilder from "../assets/icon-team-builder.svg";

function Cards() {
  const classNameCard = `flex flex-col border-t-4 justify-between shadow-md rounded p-6 min-h-60 grow`;

  const classNameHead = `font-bold capitalize text-gray-700 mb-2`;

  const classNameP = `text-sm text-gray-400 leading-6`;
  return (
    <div className="grid grid-cols-1 items-center justify-center gap-4 xl:grid-cols-3">
      <div className={`${classNameCard} border-mainCyan`}>
        <div>
          <h2 className={`${classNameHead}`}>supervisor</h2>
          <p className={`${classNameP}`}>
            Monitors activity to identify project roadblocks
          </p>
        </div>
        <img src={supervisor} alt="supervisor" className="ml-auto" />
      </div>

      <div className="flex flex-col gap-4">
        <div className={`${classNameCard} border-mainRed`}>
          <div>
            <h2 className={`${classNameHead}`}>team builder</h2>
            <p className={`${classNameP}`}>
              scans our talent network to create the optimal team for your
              project
            </p>
          </div>
          <img src={teamBuilder} alt="team" className="ml-auto" />
        </div>

        <div
          className={`${classNameCard} col-start-2 row-start-2 border-mainOrange`}
        >
          <div>
            <h2 className={`${classNameHead}`}>karma</h2>
            <p className={`${classNameP}`}>
              regularly evaluates our talent to ensure quality
            </p>
          </div>
          <img src={karma} alt="karma" className="ml-auto" />
        </div>
      </div>

      <div className={`${classNameCard} border-mainBlue`}>
        <div>
          <h2 className={`${classNameHead}`}>calculator</h2>
          <p className={`${classNameP}`}>
            uses data from past projects to provide better delivery estimates
          </p>
        </div>
        <img src={calculator} alt="calculator" className="ml-auto" />
      </div>
    </div>
  );
}

export default Cards;
