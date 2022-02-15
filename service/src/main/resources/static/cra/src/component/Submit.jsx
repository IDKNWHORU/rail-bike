import React from "react";

const Submit = ({ text }) => {
  return (
    <div>
      <div>
        <input type="submit" value={text} />
      </div>
    </div>
  );
};

export default Submit;
