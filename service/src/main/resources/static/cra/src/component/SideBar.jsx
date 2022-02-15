import InputForm from "./InputForm";

const SideBar = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
      <InputForm></InputForm>
    </div>
  );
};

export default SideBar;
