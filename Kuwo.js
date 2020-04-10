/*
Quantumult X 脚本
KuWo music unlock Svip

[rewrite_local]
# 酷我音乐解锁SVIP
# 对下载失败的音乐：先听该音乐-音乐缓存完毕之后点下载，这时下载里会显示下载失败，重启酷我，便会显示下载完成~
^https?:\/\/musicpay\.kuwo\.cn\/music\.pay\?uid\=\d+ url 302 http://musicpay.kuwo.cn/music.pay?uid=1
^https?:\/\/vip1\.kuwo\.cn\/(vip\/v\d\/user\/vip|vip\/spi/mservice) url script-response-body Kuwo.js

[mitm]
hostname = *.kuwo.cn,

*/

var obj = JSON.parse($response.body);

const path1 = "/vip/v2/user/vip";
const path2 = "/vip/spi/mservice";

if ($request.url.indexOf(path1) != -1) {
	obj.data.isNewUser = "2";
	obj.data.isYearUser = "2";
	obj.data.vipLuxuryExpire = "4102500561000";
	obj.data.time = "4102500561000";
	obj.data.vipExpire = "4102500561000";
	obj.data.vip3Expire = "4102500561000";
	obj.data.vipmExpire = "4102500561000";
	obj.data.vipOverSeasExpire = "4102500561000";
};
if ($request.url.indexOf(path2) != -1) {
	obj.isVIPMAutoPay = 2;
	obj.isVIPLuxAutoPay = 2;
};

$done({body: JSON.stringify(obj)});
