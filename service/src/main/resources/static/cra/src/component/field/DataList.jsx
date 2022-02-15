const DataList = ({ label, placeholder }) => {
  return (
    <div>
      <div>
        <label>{label}</label>
      </div>
      <div>
        <input type="datalist" placeholder={placeholder} required />
      </div>
    </div>
  );
};

export default DataList;
