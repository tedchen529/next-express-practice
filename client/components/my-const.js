export const API_SERVER = "http://localhost:3002";
export const AB_LIST = API_SERVER + "/address-book/api";

// NOTE: See API_SERVER2 in next.config.js for alternative

export const AB_ADD = API_SERVER + "/address-book/add";
// Q: method: POST?

export const AB_GET_ONE = API_SERVER + "address-book/api/edit";
// NOTE: 取得某一筆 method: GET

export const AB_EDIT_ONE = API_SERVER + "/address-book/edit";
// NOTE: 修改某一筆 method: PUT
// Q: PUT? "/address-book/edit/:sid"?
