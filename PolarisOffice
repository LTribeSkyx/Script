/*

Quantumult X 脚本:
PolarisOffice Unlock Annual Subscriptions （by LTribe）
PolarisOffice Download Link : http://t.cn/A67a1dbB

[rewrite_local]
# PolarisOffice Unlock annual subscriptions （by LTribe）
^https?:\/\/api\.polarisoffice\.com\/api\/.*\/account\/userinfo url script-response-body PolarisOffice.js

[mitm]
hostname = *.polarisoffice.com,

*/

let obj = JSON.parse($response.body);
obj.level = 2;
$done({body: JSON.stringify(obj)});
