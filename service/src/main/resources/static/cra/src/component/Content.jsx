import React from "react";

const Content = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
      <div>
        <div>
          <div>순번</div>
          <div>주문일자</div>
          <div>차대번호</div>
          <div>품목</div>
          <div>수량</div>
          <div>금액</div>
          <div>추가공임</div>
          <div>합계</div>
        </div>
        <div>
          <div>1</div>
          <div>20210212</div>
          <div>1234</div>
          <div>노주브타이어</div>
          <div>100</div>
          <div>500,000</div>
          <div>100,000</div>
          <div>600,000</div>
        </div>
      </div>
    </div>
  );
};

export default Content;
