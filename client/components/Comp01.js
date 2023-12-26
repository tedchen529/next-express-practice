import { useEffect } from "react";

export default function Comp01() {
  // NOTE: 模擬 componentDidMount
  useEffect(() => {
    console.log("run useEffect");

    // NOTE: 模擬 componentWillUnmount
    return () => {
      console.log("cleanup useEffect");
    };
  }, []);

  console.log("render ...");

  return (
    <div style={{ border: "1px solid green" }}>
      <h3>Comp01</h3>
    </div>
  );
}
