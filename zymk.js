/*

Quantumult X 脚本:
知音漫客解锁会员VIP及付费漫画 （by LTribe）
Download Link : http://t.cn/A6PaJVrT

[rewrite_local]
# 知音漫客解锁会员VIP及付费漫画 （by LTribe）
^https?:\/\/.*\.zymk\.cn\/app_api\/v\d\/(getuserinfo|purchase_chapters_coin)\/$ url script-response-body zymk.js

[mitm]
hostname = *.zymk.cn,

*/

let obj = JSON.parse($response.body);
const path1 = "/getuserinfo/";
const path2 = "/purchase_chapters_coin/";

if ($request.url.indexOf(path1) != -1){
    obj.data.Uviptime = 4102419417000;
    obj.data.Cnewviptime = 4102419417000;
    obj.data.isvip = 1;
    obj.data.coins = 99999;
    obj.data.Cgold = 99999;
    obj.data.Cticket = 99999;
    obj.data.recommend = 99999;
    obj.data.vipdays = 9999;
    obj.data.Ulevel = 9;
 };
 

if ($request.url.indexOf(path2) != -1){
   obj.status = 1;
   obj.msg = "ok";
   obj.data.Cnewviptime = 4102419417000;
   obj.data.isvip = 1;
   obj.data.coins = 99999;
   obj.data.Cgold = 99999;
   obj.data.Cticket = 99999;
   obj.data.recommend = 99999;
   obj.data.vipdays = 99999;
 };
 
 $done({body: JSON.stringify(obj)});
