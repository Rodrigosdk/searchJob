import React from "react";

function InputStandart({ title, type, state, setState }) {
  return (
    <div>
      <input
        id={title}
        type={type}
        placeholder={title}
        value={state}
        onChange={setState}
      />
    </div>
  );
}

export default InputStandart;
