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
obj = {
  "receipt": {
    "receipt_type": "Production",
    "adam_id": 1208145167,
    "app_item_id": 1208145167,
    "bundle_id": "com.sugarmo.ScrollClip",
    "application_version": "3054",
    "download_id": 112044622526410,
    "version_external_identifier": 834699960,
    "receipt_creation_date": "2020-03-25 07:20:52 Etc/GMT",
    "receipt_creation_date_ms": "1585120852000",
    "receipt_creation_date_pst": "2020-03-25 00:20:52 America/Los_Angeles",
    "request_date": "2020-03-25 07:21:37 Etc/GMT",
    "request_date_ms": "1585120897449",
    "request_date_pst": "2020-03-25 00:21:37 America/Los_Angeles",
    "original_purchase_date": "2019-12-13 17:36:07 Etc/GMT",
    "original_purchase_date_ms": "1576258567000",
    "original_purchase_date_pst": "2019-12-13 09:36:07 America/Los_Angeles",
    "original_application_version": "3037",
    "in_app": [{
      "quantity": "1",
      "product_id": "com.sugarmo.ScrollClip.standard",
      "transaction_id": "600000444769237",
      "original_transaction_id": "600000444769237",
      "purchase_date": "2019-11-26 03:49:15 Etc/GMT",
      "purchase_date_ms": "1574740155000",
      "purchase_date_pst": "2019-11-25 19:49:15 America/Los_Angeles",
      "original_purchase_date": "2019-11-26 03:49:15 Etc/GMT",
      "original_purchase_date_ms": "1574740155000",
      "original_purchase_date_pst": "2019-11-25 19:49:15 America/Los_Angeles",
      "is_trial_period": "false"
    }]
  },
  "status": 0,
  "environment": "Production"
};
$done({body: JSON.stringify(obj)});
