// 微信公众号@QTribe
// Quantumult X 脚本

/*

^https:\/\/license\.pdfexpert\.com\/api\/1.0\/pdfexpert6\/subscription\/(refresh|check) url script-response-body https://raw.githubusercontent.com/LTribeSkyx/Script/master/PDFExpert7.js
hostname = license.pdfexpert.com,

*/  

var tribe = JSON.parse($response.body);

tribe = {
  "isEligibleForIntroPeriod":true,
  "originalTransactionId":"730000355000000",
  "subscriptionExpirationDate":"01:01 01/01/2020",
  "subscriptionState":"active",
  "subscriptionReceiptId":"1559207500000",
  "isPDFExpert6User":true,
  "subscriptionAutoRenewStatus":"autoRenewOff",
  "isInGracePeriod":true
};

$done({body: JSON.stringify(tribe)});

// From QTribe
