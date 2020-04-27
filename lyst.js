/*
Quantumult X 脚本:

[rewrite_local]
# 朗易思听
^https?:\/\/sapi\.beingfine\.cn\/v\d\/LE_GetCourseEpisodes* url response-body locked":\d response-body locked":0
^https?:\/\/sapi\.beingfine\.cn\/v\d\/UserLaunchAppReport* url script-response-body lyst.js

[mitm]
hostname = sapi.beingfine.cn,

*/

let obj = JSON.parse($response.body);
obj.data_body.privileges = {
    "lrc_unlimited_online_playback": {
      "expire_date": 4102430231000,
      "granted": 2
    },
    "wordroot": {
      "expire_date": 4102430231000,
      "user_type": 1,
      "granted": 2
    },
    "collins": {
      "expire_date": 4102430231000,
      "granted": 2,
      "collins_user_type": 1
    },
    "lrc_unlimited_download": {
      "expire_date": 4102430231000,
      "granted": 2
    }
};
$done({body: JSON.stringify(obj)});

// Updated April 11,2020
// 仅供个人参考学习交流，勿用于其它...
