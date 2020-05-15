import React from "react";
import "../components/LottoResult.css";

const LottoResult = (props) => {
  return props.lottoresult.map((list, i) => {
    return (
      <ul className="resultList" key={"resultList-" + i.toString()}>
        {" "}
        {list.map((num, j) => {
          return (
            <li className="result" key={"result-" + j.toString()}>
              {j < 6 ? (
                <div className="resultCell">
                  <p>{num}</p>
                </div>
              ) : (
                <div
                  className="resultCell"
                  style={{ backgroundColor: "green" }}
                >
                  <p>{num}</p>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    );
  });
};

export default LottoResult;
