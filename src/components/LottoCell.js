import React from "react";
import classNames from "classnames";
import "../components/LottoCell.css";

const LottoCell = (props) => {
  return (
    <>
      {props.lotto.map((num, i) => {
        return (
          <>
            <div
              key={i}
              className={classNames({ lottocell: true, lottonum: true })}
            >
              <p>{num}</p>
            </div>
          </>
        );
      })}
    </>
  );
};

export default LottoCell;
