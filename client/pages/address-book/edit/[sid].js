import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { AB_GET_ONE, AB_EDIT_ONE } from "@/components/my-const";
import { Layout1 } from "@/components/Layout1";

export default function ABEdit() {
  const [myForm, setMyForm] = useState({
    sid: "",
    name: "",
    email: "",
    mobile: "",
    birthday: "",
    address: "",
  });

  const router = useRouter();

  useEffect(() => {
    const sid = +router.query.sid;
    console.log({ sid, raw: router.query.sid });
    // NOTE: "raw:" creates "raw" property
    if (router.query.sid !== undefined) {
      // NOTE: router.query.sid must be defined (有抓到值), and after converting it to a number, it must be truthy (not NaN)
      if (!sid) {
        router.push("/address-book");
      } else {
        // NOTE: 取得單筆資料

        // Q: Data fetching issues unresolved!
        fetch(AB_GET_ONE + "/" + sid)
          .then((r) => r.json())
          .then((data) => {
            // Q: No data retrieved!
            if (!data.success) {
              router.push("address-book");
              // NOTE: 沒拿到資料就跳列表頁
            } else {
              setMyForm({ ...data.row });
            }
          });
        // .catch((ex) => console.log(ex));
        // Q: Why is catch still necessary when data.success === false is already considered?
      }
    }
  }, [router.query.sid]);

  const [displayInfo, setDisplayInfo] = useState("");

  const changeHandler = (e) => {
    const { name, id, value } = e.target;
    console.log({ name, id, value });
    setDisplayInfo("");
    setMyForm({ ...myForm, [id]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    // NOTE: 檢查各欄位資料
    /*
    const emailSchema = z.coerce
      .string()
      .email({ message: "錯誤的 email 格式" });
    console.log("emailSchema:", emailSchema.safeParse(myForm.email));
    */

    const mySend = { ...myForm };
    delete mySend.created_at;
    // Q: Why remove created_at?

    // Q: Data fetching issues unresolved!
    const r = await fetch(AB_EDIT_ONE + "/" + myForm.sid, {
      method: "PUT",
      body: JSON.stringify(mySend),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // Q: PUT?
    const responseData = await r.json();

    if (responseData.success) {
      setDisplayInfo("succ");
    } else {
      setDisplayInfo("fail");
    }
  };

  //   return <pre>{router.query.sid}</pre>;
  //   return <pre>{JSON.stringify(myForm, null, 4)}</pre>;
  return (
    <>
      <Layout1>
        <div className="row">
          <div className="col-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">修改資料</h5>
                <form name="form1" onSubmit={onSubmit}>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={myForm.name}
                      onChange={changeHandler}
                    />
                    <div className="form-text"></div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      email
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      name="email"
                      value={myForm.email}
                      onChange={changeHandler}
                    />
                    <div className="form-text"></div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="mobile" className="form-label">
                      mobile
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="mobile"
                      name="mobile"
                      value={myForm.mobile}
                      onChange={changeHandler}
                    />
                    <div className="form-text"></div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="birthday" className="form-label">
                      birthday
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="birthday"
                      name="birthday"
                      value={myForm.birthday}
                      onChange={changeHandler}
                    />
                    <div className="form-text"></div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="address" className="form-label">
                      address
                    </label>
                    <textarea
                      className="form-control"
                      id="address"
                      name="address"
                      cols="30"
                      rows="3"
                      value={myForm.address}
                      onChange={changeHandler}
                    ></textarea>
                  </div>
                  {displayInfo ? (
                    displayInfo === "succ" ? (
                      <div class="alert alert-success" role="alert">
                        資料修改成功
                      </div>
                    ) : (
                      <div class="alert alert-danger" role="alert">
                        資料沒有修改!!!
                      </div>
                    )
                  ) : null}
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Layout1>
    </>
  );
}
