/*

Quantumult X 脚本:
[手机硬件管家] unlock （by LTribe）

[rewrite_local]
# 手机硬件管家终身会员（恢复购买后可禁用,by LTribe）
^http?:\/\/api\.591master\.com\:\d+\/.*\/uicommon\/getuser url script-response-body sjyjgj.js

[mitm]
hostname = api.591master.com,

*/

let obj = JSON.parse($response.body);
obj.data.isVip = true;
obj.data.expireTime = "4102479403";
ob.data.expExpireTime = "4102479403";
obj.data.lastBuyTime = "4102479403";
  
$done({body: JSON.stringify(obj)});
