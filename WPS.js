/*

Quantumult X 脚本:
WPS Office Unlock
Download Link : https://w.url.cn/s/A7je1S3

[rewrite_local]
# WPS Office
^https?:\/\/account\.wps\.cn\/api\/users\/.*\/overview url script-response-body WPS.js

[mitm]
hostname = account.wps.cn,

*/

let obj = JSON.parse($response.body);
obj = {
  "result": "ok",
  "total_cost": 0,
  "privilege": [{
    "times": 0,
    "expire_time": 7956882115,
    "spid": "data_recover"
  }, {
    "times": 0,
    "expire_time": 7956882115,
    "spid": "ocr"
  }, {
    "times": 0,
    "expire_time": 7956882115,
    "spid": "pdf2doc"
  }, {
    "times": 0,
    "expire_time": 7956882115,
    "spid": "pdf_merge"
  }, {
    "times": 0,
    "expire_time": 7956882115,
    "spid": "pdf_sign"
  }, {
    "times": 0,
    "expire_time": 7956882115,
    "spid": "pdf_split"
  }],
  "userid": 100861008,
  "wealth": 10086,
  "level": 10,
  "exp": 10086,
  "vip": {
    "memberid": 40,
    "expire_time": 7956882115,
    "name": "超级会员",
    "has_ad": 0,
    "enabled": [{
      "name": "超级会员",
      "expire_time": 7956882115,
      "memberid": 40
    }, {
      "name": "WPS会员",
      "expire_time": 7956882115,
      "memberid": 20
    }, {
      "name": "稻壳会员",
      "expire_time": 7956882115,
      "memberid": 12
    }]
  },
  "total_buy": 0
}

$done({body: JSON.stringify(obj)});
