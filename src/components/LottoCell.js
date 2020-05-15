import React from "react";
import classNames from "classnames";
import "../components/LottoCell.css";

const LottoCell = (props) => {
  return (
    <>
      {props.lotto.map((num, i) => {
        return i < 6 ? (
          <>
            <div
              key={i.toString()}
              className={classNames({
                lottocell: true,
                lottonum: true,
                lottobasic: true,
              })}
            >
              <p>{num}</p>
            </div>
          </>
        ) : (
          <>
            <div
              key={"lottoCell-" + i.toString()}
              className={classNames({
                lottocell: true,
                lottonum: true,
                lottobonus: true,
              })}
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
