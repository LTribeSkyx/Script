/*
Quantumult X 脚本:
[rewrite_local]
# Scanner Pro 的 Pro 订阅 （by LTribe）
^https?:\/\/license\.pdfexpert\.com\/api\/2\.0\/scanner\/subscription\/refresh url script-response-body 1Blocker.js
[mitm]
hostname = api.revenuecat.com,
*/

let obj = JSON.parse($response.body);

obj = {
  "receiptStatus": "ok",
  "isEligibleForIntroPeriod": true,
  "subscriptionState": "notActive",
  "receiptId": 1000000000000,
  "isScanner7User": true,
  "inAppStates": [{
    "type": "custom purchase",
    "productId": "scannerpro7-user",
    "entitlements": []
  }],
  "chargingPlatform": "iOS AppStore",
  "bundleId": "com.readdle.Scanner"
 }

$done({body: JSON.stringify(obj)});
