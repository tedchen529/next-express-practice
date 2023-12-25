import { useEffect, useState } from "react";
import { Layout1 } from "@/components/Layout1";
import { AB_LIST } from "@/components/my-const";
import { useRouter } from "next/router";
import Link from "next/link";
import dayjs from "dayjs";

export default function ABIndex() {
  // console.log("window.location.href:", window.location.href);
  // Q: Why is window not defined? 要避免使用 window 底下的物件? Why? See pages/index.js

  const [data, setData] = useState({});
  const router = useRouter();

  const getListData = async () => {
    console.log("router.query", router.query);
    let page = +router.query.page || 1;
    // NOTE: The two "pages" are not the same
    // Q: What decides "?page="? Test it out
    if (page < 1) page = 1;

    try {
      // const r = await fetch(AB_LIST);
      // NOTE: `${process.env.API_SERVER2}/address-book/api` if I set env in next.config.js
      const r = await fetch(AB_LIST + `?page=${page}`);
      const d = await r.json();
      setData(d);
    } catch (ex) {
      // NOTE: Handle error. "ex" means exception.
    }
  };

  useEffect(() => {
    getListData();
  }, [router.query.page]);
  // NOTE: Because getListData is an async function and a side effect

  return (
    <>
      <Layout1>
        {/* <pre>{JSON.stringify(data, null, 4)}</pre> */}
        {/* NOTE: JSON-formatted string */}

        {/* <div className="row">
          <pre className="col">{router.query.page}</pre>
        </div> */}

        <div className="row">
          <div className="col">
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                {data.success && data.totalPages
                  ? Array(3)
                      .fill(1)
                      .map((v, i) => {
                        const p = data.page - 1 + i;
                        if (p < 1 || p > data.totalPages) return null;
                        return (
                          <li
                            key={p}
                            className={
                              p === data.page ? "page-item active" : "page-item"
                            }
                          >
                            {/* NOTE: Avoid using index as key as it may be changed */}
                            <Link className="page-link" href={"?page=" + p}>
                              {p}
                            </Link>
                            {/* Q: Client side naviation without full page reload? */}
                          </li>
                        );
                      })
                  : null}
                {/* NOTE: Array(3) represents how many page indices are shown */}
                {/* Q: href? */}
                {/* Q: How to add pagination in ejs? See node practice */}
              </ul>
            </nav>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <table className="table table-striped table-bordered">
              <thead>
                <tr>
                  <th>
                    <i className="fa-solid fa-trash"></i>
                  </th>
                  <th>編號</th>
                  <th>姓名</th>
                  <th>email</th>
                  <th>手機</th>
                  <th>生日</th>
                  <th>地址</th>
                  <th>
                    <i className="fa-solid fa-square-pen"></i>
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* NOTE: If data.rows is truthy, map over it. */}
                {data.rows &&
                  data.rows.map((i) => {
                    return (
                      <tr key={i.sid}>
                        <td>
                          <Link href="#/">
                            {/* Q: Not yet functional */}
                            <i className="fa-solid fa-trash"></i>
                          </Link>
                        </td>
                        <td>{i.sid}</td>
                        <td>{i.name}</td>
                        <td>{i.email}</td>
                        <td>{i.mobile}</td>
                        <td>{dayjs(i.birthday).format("YYYY-MM-DD")}</td>
                        <td>{i.address}</td>
                        <td>
                          <Link href="/address-book/edit/">
                            <i className="fa-solid fa-square-pen"></i>
                          </Link>
                          {/* Q: Not yet functional */}
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </Layout1>
    </>
  );
}
