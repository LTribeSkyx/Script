/*

Quantumult X 脚本:
The camera of light words Unlock Annual Subscriptions （by LTribe）
Download Link : http://t.cn/A6ZtvYIJ

[rewrite_local]
# 轻言相机解锁年订阅 （by LTribe）
^https?:\/\/commerce-api\.faceu\.mobi\/commerce\/.*\/subscription\/user_info* url script-response-body qingyanxiangji.js

[mitm]
hostname = commerce-api.faceu.mobi,

*/

let obj = JSON.parse($response.body);
obj.data.start_time = 1577813990;
obj.data.end_time = 4070885990;
obj.data.is_first_subscribe = true;
obj.data.is_cancel_subscribe = true;
obj.data.flag = true;
$done({body: JSON.stringify(obj)});
