import React from "react";
import DataList from "./DataList";
import DateField from "./DateField";
import DisplayField from "./DisplayField";
import NumberField from "./NumberField";
import Select from "./Select";
import Submit from "./Submit";

const InputForm = () => {
  return (
    <form>
      <Submit text="입력하기"></Submit>
      <DateField label="입력일자"></DateField>
      <Select label="거래처" placeholder="거래처를 선택해주세요"></Select>
      <NumberField
        label="차대번호"
        placeholder="차대번호를 입력해주세요"
      ></NumberField>
      <DataList label="품목" placeholder="품목을 선택해주세요"></DataList>
      <NumberField
        label="수량"
        placeholder="수량을 입력해주세요"
        min="0"
      ></NumberField>
      <DisplayField
        label="부품금액"
        placeholder="부품금액이 표시됩니다"
      ></DisplayField>
      <NumberField
        label="추가공임"
        placeholder="추가공임 금액을 입력해주세요"
      ></NumberField>
      <DisplayField
        label="합계"
        placeholder="합계 금액이 표시됩니다"
      ></DisplayField>
    </form>
  );
};

export default InputForm;
