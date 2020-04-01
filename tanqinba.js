/*

Quantumult X 脚本:
tanqinba Unlock（by LTribe）
tanqinba Download Link : http://t.cn/A6zhp3Bm

[rewrite_local]
# tanqinba Unlock （by LTribe）
^http:\/\/www\.tan8\.com\/codeindex\.php\?d\=common\&c* url script-response-body tanqinba.js

[mitm]
hostname = www.tan8.com,

*/

let obj = JSON.parse($response.body);
var vid = obj.data.result.videoVid;
delete obj.data.result.alertDic;
delete obj.data.result.buyLessonJumpEvent;
obj.data.result.statusCode = "1";
obj.data.result.message = "Success";
obj.data.result.videoUrl = "http:\/\/videooss.tan8.com\/tan8video\/" + vid[0] + vid[1] + "\/" + vid[30] + vid[31] +"\/" + vid + "\/" + vid + "_2.mp4";
$done({body: JSON.stringify(obj)});
