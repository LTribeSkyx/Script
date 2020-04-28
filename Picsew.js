/*

Quantumult X 脚本:
Picsew Unlocks （by LTribe）
Picsew download link : http://t.cn/AiWC7BVq

[rewrite_local]
# Picsew Unlocks （by LTribe）
^https:\/\/buy\.itunes\.apple\.com\/verifyReceipt url script-response-body Picsew.js

[mitm]
hostname = buy.itunes.apple.com,

*/

let obj = JSON.parse($response.body);
obj.receipt.in_app = [{
      "quantity": "1",
      "product_id": "com.sugarmo.ScrollClip.pro",
      "transaction_id": "1000000000000000",
      "original_transaction_id": "1000000000000000",
      "purchase_date": "2020-01-01 00:00:00 Etc/GMT",
      "purchase_date_ms": "1587700000000",
      "purchase_date_pst": "2020-01-21 00:00:00 America/Los_Angeles",
      "original_purchase_date": "2020-01-01 00:00:00 Etc/GMT",
      "original_purchase_date_ms": "1587700000000",
      "original_purchase_date_pst": "2020-01-01 00:00:00 America/Los_Angeles",
      "is_trial_period": "false"
    }];

$done({body: JSON.stringify(obj)});
