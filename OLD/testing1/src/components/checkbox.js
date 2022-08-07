import { useState } from "react";

function Checkbox() {
  const [status, setStatus] = useState({ isChecked: false });

  function handleCheck() {
    setStatus({ isChecked: !status.isChecked });
  }

  return (
    <div>
      <label>{status.isChecked ? "Active" : "Inactive"}</label>
      <input
        type="checkbox"
        checked={status.isChecked}
        onChange={handleCheck}
      />
    </div>
  );
}

export default Checkbox;
