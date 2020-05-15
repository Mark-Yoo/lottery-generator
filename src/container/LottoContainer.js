import React, { useState, useRef } from "react";
import LottoCell from "../components/LottoCell";
import LottoButton from "../components/LottoButton";
import LottoResult from "../components/LottoResult";

const LottoContainer = () => {
  const [lotto, setLotto] = useState([0, 0, 0, 0, 0, 0, 0]);
  const [resultList, setResultList] = useState([]);
  const lottoNum = lotto;
  const result = resultList;
  const makeLotto = () => {
    let lottoArray = [];
    let count = 0;
    let lastNum = 7;
    while (1) {
      if (count === lastNum) break;
      let poppedNum = Math.floor(Math.random() * 45) + 1;
      if (lottoArray.indexOf(poppedNum) < 0) {
        lottoArray.push(poppedNum);
        count++;
      }
    }
    setLotto(lottoArray);
    setResultList([...result, lottoArray]);
  };

  return (
    <>
      <div className="container">
        <br />
        <LottoCell lotto={lottoNum} />
        <br />
        <LottoButton lottoEvent={makeLotto} />
        <br />
        <LottoResult lottoresult={resultList} />
      </div>
    </>
  );
};

export default LottoContainer;
