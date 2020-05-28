/*

Quantumult X 脚本:

[rewrite_local]
# Duet Display Unlock Pro （by LTribe）
^https?:\/\/rdp\.duetdisplay\.com\/v\d\/users\/validateReceipt url script-response-body DuetPro.js

[mitm]
hostname = rdp.duetdisplay.com,

*/

let obj = JSON.parse($response.body);
obj = {
    "products": [{
    "subscriptionId": 100000,
    "purchaseDate": "2020-01-01T01:11:11Z",
    "cancelled": false,
    "expiresDate": "2100-01-02T01:01:01Z",
    "product": "DuetStudio",
    "vendor": "apple",
    "inTrial": false
  }],
  "hasStripeAccount": false,
  "success": true
};

$done({body: JSON.stringify(obj)});
