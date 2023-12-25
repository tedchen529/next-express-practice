import { Layout1 } from "@/components/Layout1";
import { useState } from "react";
import { z } from "zod";
// Q: 可控表單?

export default function ABAdd() {
  const [myForm, setMyForm] = useState({
    name: "",
    email: "",
    mobile: "",
    birthday: "",
    address: "",
  });

  const changeHandler = (e) => {
    /*
    setMyForm((old) => {
      return { ...old, name: e.target.value };
    });
    */
    // Q: Difference?
    // setMyForm({...myForm, name: e.target.value});
    /*
    setMyForm((old) => {
      return { ...old, [id]: e.target.value };
    });
    */
    /*
    setMyForm((old) => {
      return { ...old, [id]: e.target.value };
    });
    */

    const { name, id, value } = e.target;
    console.log({ name, id, value });
    setMyForm({ ...myForm, [id]: value });
    // Q: Why brackets for [id]? Why change id?
    // Q: Why does setMyForm run first?
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  // const emailSchema = z.string().email({ message: "錯誤的 email 格式" });
  const emailSchema = z.coerce.string().email({ message: "錯誤的 email 格式" });
  // Q: Coercing what?
  console.log("emailSchema:", emailSchema.safeParse(myForm.email));

  console.log("re-render---", new Date());

  return (
    <>
      <Layout1>
        <div className="row">
          <div className="col-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">新增資料</h5>
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
                      //   Q: ?
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
