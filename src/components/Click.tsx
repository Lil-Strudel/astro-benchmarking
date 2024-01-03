import React, { useState } from "react";

function Click() {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div className="flex flex-col justify-center">
      <h1 className="text-xl">{count}</h1>
      <button
        onClick={handleClick}
        className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Click Me
      </button>
    </div>
  );
}

export default Click;
