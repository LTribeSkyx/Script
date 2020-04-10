/*

Quantumult X 脚本:
不背单词 unlock （by LTribe）
Download link : https://t.cn/A6Z1ysfS

说明：该脚本qx域名解密有问题，在iPad上暂时无法使用，iPhone上勉强能用.
不背单词[Http Catcher]网球规则下载链接：https://t.cn/AiFmr7db

[三选一]:
1.将该js文件下载保存到[qx-script]本地写法：
[rewrite_local]
# 不背单词 （by LTribe）
^https?:\/\/sapi\.beingfine\.cn\/v\d\/report\/launch* url script-response-body bubeidanci.js

2.正则写法（无需保存下载保存js文件）
[rewrite_local]
# 不背单词 （by LTribe）
^https?:\/\/sapi\.beingfine\.cn\/v\d\/report\/launch* url response-body \\"privileges\\":\{.*?\}\}, response-body \\"privileges\\":{\\"wordroot\\":{\\"expire_date\\":4102429976000,\\"user_type\\":2,\\"granted\\":1},\\"collins\\":{\\"expire_date\\":4102429976000,\\"collins_user_type\\":2,\\"granted\\":1}},

3.远程写法（要求使用qx TF版本）
[rewrite_local]
# 不背单词 （by LTribe）
^https?:\/\/sapi\.beingfine\.cn\/v\d\/report\/launch* url script-response-body https://raw.githubusercontent.com/LTribeSkyx/Script/master/bubeidanci.js

[mitm]
hostname = sapi.beingfine.cn,

*/

let body = $response.body;
let obj = JSON.parse(body);
let ltr = JSON.parse(obj.data_body);
ltr.privileges.wordroot = {"expire_date":4102429976000,"user_type":2,"granted":1};
ltr.privileges.collins = {"expire_date":4102429976000,"collins_user_type":2,"granted":1};
obj.data_body = JSON.stringify(ltr);
$done({body: JSON.stringify(obj)});

// Updated April 11,2020
// 仅供个人参考学习交流，勿用于其它...
