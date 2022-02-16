import React from "react";
import GridColumn from "./GridColumn";

const GridHeader = () => {
  return (
    <div>
      <GridColumn text="순번"></GridColumn>
      <GridColumn text="주문일자"></GridColumn>
      <GridColumn text="차대번호"></GridColumn>
      <GridColumn text="품번"></GridColumn>
      <GridColumn text="수량"></GridColumn>
      <GridColumn text="금액"></GridColumn>
      <GridColumn text="추가공임"></GridColumn>
      <GridColumn text="합계"></GridColumn>
    </div>
  );
};

export default GridHeader;
