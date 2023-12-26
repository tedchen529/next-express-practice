import { useEffect, useRef } from "react";

export default function Comp01() {
  const myRef = useRef();

  // NOTE: 模擬 componentDidMount
  useEffect(() => {
    console.log("Comp01 run useEffect");

    const iid = setInterval(() => {
      // const myp = document.querySelector("#myp");
      const myp = myRef.current;
      myp.innerText = +myp.innerText + 1;
    }, 500);

    // NOTE: 模擬 componentWillUnmount
    return () => {
      console.log("Comp01 cleanup useEffect");
      clearInterval(iid);
    };
  }, []);

  console.log("Comp01 render ...");

  return (
    <div style={{ border: "1px solid green" }}>
      <h3>Comp01</h3>
      {/* <p id="myp">0</p> */}
      <p ref={myRef}>0</p>
    </div>
  );
}
