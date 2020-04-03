/*

Quantumult X 脚本:
不背单词 unlock （by LTribe）
Download Link : http://t.cn/A6PaJVrT

[rewrite_local]
# 不背单词 （by LTribe）
^https?:\/\/sapi\.beingfine\.cn\/v\d\/report\/launch* url script-response-body bubeidanci.js

[mitm]
hostname = sapi.beingfine.cn,

*/

let obj = JSON.parse($response.body);
obj.data_body[\"user_info\"][\"privileges\"] = {\"wordroot\":{\"expire_date\":9999999999000,\"user_type\":2,\"granted\":1};
obj.data_body[\"user_info\"][\"collins\"] = {\"expire_date\":9999999999000,\"collins_user_type\":2,\"granted\":1};
 
$done({body: JSON.stringify(obj)});
