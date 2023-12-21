import { useEffect, useState } from "react";
import { Layout1 } from "@/components/Layout1";
import { AB_LIST } from "@/components/my-const";

export default function ABIndex() {
  // console.log("window.location.href:", window.location.href);
  // Q: Why is window not defined? 要避免使用 window 底下的物件? Why? See pages/index.js

  const [data, setData] = useState({});

  const getListData = async () => {
    try {
      const r = await fetch(AB_LIST);
      // NOTE: `${process.env.API_SERVER2}/address-book/api` if I set env in next.config.js
      const d = await r.json();
      setData(d);
    } catch (ex) {
      // NOTE: Handle error. "ex" means exception.
    }
  };

  useEffect(() => {
    getListData();
  }, []);
  // NOTE: Because getListData is an async function and a side effect

  return (
    <>
      <Layout1>
        {/* <pre>{JSON.stringify(data, null, 4)}</pre> */}
        {/* NOTE: JSON-formatted string */}
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
                          <a
                            href="javascript:"
                            onclick="removeItem(event)"
                            data-sid=""
                          >
                            {/* Q: Not yet functional */}
                            <i className="fa-solid fa-trash"></i>
                          </a>
                        </td>
                        <td>{i.sid}</td>
                        <td>{i.name}</td>
                        <td>{i.email}</td>
                        <td>{i.mobile}</td>
                        <td>{i.birthday}</td>
                        <td>{i.address}</td>
                        <td>
                          <a href="/address-book/edit/">
                            {/* Q: Not yet functional */}
                            <i className="fa-solid fa-square-pen"></i>
                          </a>
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
