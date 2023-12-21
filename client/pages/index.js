import { Layout1 } from "@/components/Layout1";
import Head from "next/head";

export default function Home() {
  // console.log("window.location.href:", window.location.href);
  // Q: 要避免使用 window 底下的物件? Why? See pages/address-book/index.js
  return (
    <>
      <Layout1>
        <div>123</div>
      </Layout1>
      <Head>
        <title>ABCD</title>
      </Head>
    </>
  );
}
