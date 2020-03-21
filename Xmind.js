/*

Quantumult X 脚本:
Xmind Unlock annual subscriptions （by LTribe）
Xmind Download Link : http://t.cn/A6zhp3Bm
Thanks To@xiaozhuolao's membership data.

[rewrite_local]
# Xmind Unlock annual subscriptions （by LTribe）
https?:\/\/.*\.xmind\..*\/_res\/(devices|user_sub_status|profile\/*) url script-response-body XMind.js

[mitm]
MITM = *.xmind.*,

*/

const path1 = "/devices";
const path2 = "/user_sub_status";
const path3 = "/profile/*";
let obj = JSON.parse($response.body);

if ($request.url.indexOf(path1) != -1){
    obj.license = {
    "status": "sub",
    "expireTime": 4102494057000
  };
 };
  
if ($request.url.indexOf(path2) != -1){
    obj = {
    "_code": 200,
    "ios": {
    "status": "sub",
    "expireTime": 4102494057000
  }};
 };

if ($request.url.indexOf(path3) != -1){
  obj.sub = {
    "ios": {
      "status": "sub",
      "expireTime": 4102494057000,
      "buyable": 0
    }};
  };
  
$done({body: JSON.stringify(obj)});
