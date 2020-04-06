/*

Quantumult X 脚本:
不背单词 unlock （by LTribe）

[rewrite_local]
# 不背单词 （by LTribe）
^https?:\/\/sapi\.beingfine\.cn\/v\d\/report\/launch* url script-response-body bubeidanci.js

[mitm]
hostname = sapi.beingfine.cn,

*/

let body = $response.body;
let obj = JSON.parse(body);
let ltr = JSON.parse(obj.data_body);
ltr.privileges.wordroot = {"expire_date":9999999999000,"user_type":2,"granted":1};
ltr.privileges.collins = {"expire_date":9999999999000,"collins_user_type":2,"granted":1};
obj.data_body = JSON.stringify(ltr);
$done({body: JSON.stringify(obj)});
