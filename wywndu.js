// 微信公众号@LTribe

/*

^https://p\.du\.163\.com/readtime/info.json url reject
^https:\/\/p\.du\.163\.com\/gain\/readtime\/info\.json url script-response-body https://raw.githubusercontent.com/LTribeSkyx/Script/master/wywnds.js

hostname = p.du.163.com,

*/

var obj = JSON.parse($response.body);
obj.tradeEndTime = 4070957802000;
body = JSON.stringify(obj);
$done({body});

// From LTribe
