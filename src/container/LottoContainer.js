import React, { useState, useRef } from "react";
import LottoCell from "../components/LottoCell";

const LottoContainer = () => {
  const [lotto, setLotto] = useState([0, 0, 0, 0, 0, 0, 0]);
  const lottoNum = lotto;
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
  };

  return (
    <>
      <div className="container">
        <br />
        <button onClick={makeLotto}>로또 번호 생성기</button>
        <br />
        <LottoCell lotto={lottoNum} />
      </div>
    </>
  );
};

export default LottoContainer;
