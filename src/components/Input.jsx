import { useState } from "react";
import React from "react";

const Input = () => {
  const [num, setNum] = useState(0);
  const [name, setName] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div>
      <input
        type="number"
        value={num}
        onChange={(e) => setNum(e.target.value)}
      />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <div>
        <input
          type="checkbox"
          value={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
        />
        {isChecked ? <span>체크됨</span> : <span>체크되지 않음</span>}
      </div>
    </div>
  );
};
export default Input;
