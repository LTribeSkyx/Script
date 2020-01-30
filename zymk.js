  
// 微信公众号@QTribe
// Quantumult X 脚本

/*
^https:\/\/getuserinfo\-globalapi\.zymk\.cn\/app\_api\/v5\/getuserinfo\/ url script-response-body https://raw.githubusercontent.com/LTribeSkyx/Script/master/zymk.js
hostname = getuserinfo-globalapi.zymk.cn,
*/

var body = $response.body;
var tribe = JSON.parse(body);
tribe.Uviptime = 4070957802000;
tribe.isvip = 1;
body = JSON.stringify(tribe);
$done({body});

// From QTribe
