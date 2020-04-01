/*

Quantumult X 脚本:
弹琴吧解锁所有付费课程（注：钢琴，电子琴，小提琴会员谱库未能解锁）（by LTribe）

[rewrite_local]
# 弹琴吧解锁付费课程（注：钢琴，电子琴，小提琴会员谱库未能解锁） （by LTribe）
^http?:\/\/www\.tan8\.com\/codeindex\.php\?d\=(common\&c*|tan8\&c\=yuepu\&m*|tan8\&c\=myself\&m*) url script-response-body tanqinba.js

[mitm]
hostname = *.tan8.com,

*/

let obj = JSON.parse($response.body);
const path1 = "codeindex.php?d=common&c";
const path2 = "codeindex.php?d=tan8&c=yuepu&m";
const path3 = "codeindex.php?d=tan8&c=myself&m";

if ($request.url.indexOf(path1) != -1){
  var vid = obj.data.result.videoVid;
  delete obj.data.result.alertDic;
  delete obj.data.result.buyLessonJumpEvent;
  obj.data.result.statusCode = "1";
  obj.data.result.message = "Success";
  obj.data.result.videoUrl = "http:\/\/videooss.tan8.com\/tan8video\/" + vid[0] + vid[1] + "\/" + vid[30] + vid[31] +"\/" + vid + "\/" + vid + "_2.mp4";
 };

if ($request.url.indexOf(path2) != -1){
  obj.data.result.isfree = 1;
  obj.data.result.isvipyp = 0;
  obj.data.result.isvip = "0";
};

if ($request.url.indexOf(path3) != -1){
  obj.data.result.vip = 1;
  obj.data.result.classVip = 1;
  obj.data.result.vipInfo = {
        "piano_vip": "1",
        "guitar_vip": "1",
        "ukulele_vip": "1",
        "keyboard_vip": "1",
        "piano_vip_endtime": "4102456447",
        "guitar_vip_endtime": "4102456447",
        "ukulele_vip_endtime": "4102456447",
        "keyboard_vip_endtime": "4102456447",
        "violin_vip": "1",
        "violin_vip_endtime": "4102456447"
      };
  obj.data.result.all_vip_status.svip_status = true;
  obj.data.result.all_vip_status.paino_vip_status = true;
  obj.data.result.all_vip_status.guitar_vip_status = true;
  obj.data.result.all_vip_status.ukulele_vip_status = true;
  obj.data.result.all_vip_status.keyboard_vip_status = true;
  obj.data.result.all_vip_status.violin_vip_status = true;
  obj.data.result.user_attachment.img1 = true;
  obj.data.result.user_attachment.img2 = true;
  obj.data.result.user_attachment.img3 = true;
  obj.data.result.user_attachment.img4 = true;
  obj.data.result.user_attachment.img5 = true;
  obj.data.result.user_attachment.img6 = true;
  obj.data.result.user_attachment.img7 = true;
  obj.data.result.user_attachment.img8 = true;
  obj.data.result.canChangeBackgroundImage = "1";
  obj.data.result.remaining_vip_time = "4102456447"
};
$done({body: JSON.stringify(obj)});
