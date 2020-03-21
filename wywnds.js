/*
Quantumult X 脚本
Unlock WangYiWoNiu
Download Link : http://t.cn/AiOW7xlU

[rewrite_local]
# 解锁网易蜗牛读书VIP
^https://p\.du\.163\.com/readtime/info.json url reject
^https:\/\/p\.du\.163\.com\/gain\/readtime\/info\.json url script-response-body wywnds.js

[mitm]
hostname = p.du.163.com,

*/

var body = $response.body;
var tribe = JSON.parse(body);
tribe.tradeEndTime = 4070957802000;
body = JSON.stringify(tribe);
$done({body});
