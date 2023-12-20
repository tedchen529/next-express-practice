import { useEffect, useState } from "react";
import { Layout1 } from "@/components/Layout1";
import { AB_LIST } from "@/components/my-const";
// Q: my-const?

export default function ABIndex() {
  const [data, setData] = useState({});
  // Q: Why empty object?

  const getListData = async () => {
    try {
      const r = await fetch(AB_LIST);
      // Q: explain!
      // NOTE: `${process.env.API_SERVER2}/address-book/api` if I set env in next.config.js
      const d = await r.json();
      // Q: explain!
      setData(d);
    } catch (ex) {}
  };
  // Q: Why does this need to be async?
  // Q: Is try-catch optional? Why isn't catch finished? What's ex?

  useEffect(() => {
    getListData();
  }, []);
  // Q: Why can't I just run the function without useEffect?

  return (
    <>
      <Layout1>
        <pre>{JSON.stringify(data, null, 4)}</pre>
        {/* Q: Explain! */}
      </Layout1>
    </>
  );
}
