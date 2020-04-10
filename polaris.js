/*

Quantumult X 脚本:
泼辣修图 Unlock Annual Subscriptions （by LTribe）
泼辣修图 Download Link : http://t.cn/Ai8mqNvm

[rewrite_local]
# 泼辣修图解锁会员 （by LTribe）
^https?:\/\/api\.(polaxiong\.com|polarr\.co)\/v\d\/payments\/appleiap\/receipts\/confirmation$ url script-response-body polaris.js

[mitm]
hostname = api.polaxiong.com, api.polarr.co, 

*/

let obj = JSON.parse($response.body);
obj = {
  "app":"PPE",
  "isUnlimited":true,
  "membershipExpiryDate":"2100-01-01T12:00:00.000Z"
  };
  
$done({body: JSON.stringify(obj)});
