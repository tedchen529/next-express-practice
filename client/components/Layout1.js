import Navbar from "@/components/Navbar";
import Head from "next/head";
// Q: Different than Head in _document.js?

export function Layout1({ children }) {
  return (
    <>
      <Head>
        <title>Ted's Website</title>
      </Head>
      <div className="container">
        <Navbar />
      </div>
      <div className="container">{children}</div>
    </>
  );
}
