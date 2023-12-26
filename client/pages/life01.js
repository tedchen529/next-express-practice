import { Layout1 } from "@/components/Layout1";
import Comp01 from "@/components/Comp01";
import { useState } from "react";

export default function Life01() {
  const [show, setShow] = useState(true);

  return (
    <>
      <Layout1>
        <div>
          <button onClick={() => setShow(!show)}>toggle Comp01</button>
        </div>

        {show && <Comp01 />}
      </Layout1>
    </>
  );
}
