import React from "react";
import "../components/LottoButton.css";

const LottoButton = (props) => {
  return (
    <>
      <div className="button-container">
        <button onClick={props.lottoEvent}>로또 번호 생성기</button>
      </div>
    </>
  );
};

export default LottoButton;
