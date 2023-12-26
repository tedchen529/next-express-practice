import { useEffect, useRef, useState } from "react";

export default function Comp02() {
  const [num, setNum] = useState(0);

  // 模擬 componentDidUpdate
//   Q: How?
  useEffect(() => {
    console.log("Comp02 run useEffect");

    return () => {
      console.log("Comp02 cleanup useEffect");
    };
  }, [num]);

  console.log("Comp02 render ...");

  return (
    <div style={{ border: "1px solid blue" }}>
      <h3>Comp02</h3>
      <button onClick={() => setNum(num + 1)}>click</button>
      <div>{num}</div>
    </div>
  );
}