/*

Quantumult X 脚本:
实时天气 - 当地预报 Unlock annual subscriptions （by LTribe）
Download Link : http://t.cn/A6zrDewt

[rewrite_local]
# 实时天气 Unlock Vip （by LTribe）
^https?:\/\/subs\.platforms\.team\/.*\/(offer/checkEligibility$|verifyTransaction$) url script-response-body shishitianqi.js

[mitm]
hostname = *.platforms.team,

*/

let obj = JSON.parse($response.body);
obj = {
  "error": 0,
  "data": {
    "is_offer_eligible": true,
    "may_expire": true,
    "hash": "e999cea47fe12ef2b5f3jd8kd1d10i6e",
    "consumable_inapp": [],
    "is_valid": true,
    "in_app": {
      "com.apalonapps.wlf.7d_3dt_sub00004": {
        "expired": false,
        "may_expire": true,
        "cancelled": false,
        "is_valid": true,
        "is_trial": true,
        "is_intro": false,
        "transaction_id": "720000000099999",
        "purchase_date_ms": "1577882954000",
        "expires_date_ms": "4070954795000",
        "remaining_time_ms": "222259196000"
      }
    }
  }
};
$done({body: JSON.stringify(obj)});
