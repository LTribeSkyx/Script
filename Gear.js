/*

Quantumult X 脚本:

[rewrite_local]
# Gear Unlock Pro （by LTribe）
^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt url script-response-body Gear.js

[mitm]
hostname = buy.itunes.apple.com,

*/

let obj = JSON.parse($response.body);
obj = {
  "status": 0,
  "environment": "Production",
  "receipt": {
    "receipt_type": "Production",
    "adam_id": 1458962238,
    "app_item_id": 1458962238,
    "bundle_id": "com.gear.app",
    "application_version": "2.0.8.0",
    "download_id": 68058358405288,
    "version_external_identifier": 836220787,
    "receipt_creation_date": "2020-06-05 12:26:29 Etc/GMT",
    "receipt_creation_date_ms": "4102489858000",
    "receipt_creation_date_pst": "2020-06-05 05:26:29 America/Los_Angeles",
    "request_date": "2020-06-05 12:27:30 Etc/GMT",
    "request_date_ms": "1591360050000",
    "request_date_pst": "2020-06-05 05:27:30 America/Los_Angeles",
    "original_purchase_date": "2020-04-18 08:31:54 Etc/GMT",
    "original_purchase_date_ms": "1587198714000",
    "original_purchase_date_pst": "2020-04-18 01:31:54 America/Los_Angeles",
    "original_application_version": "1.8.12.0",
    "in_app": [{
      "quantity": "1",
      "product_id": "com.gear.app.yearly",
      "transaction_id": "280000597135826",
      "original_transaction_id": "280000597135826",
      "purchase_date": "2020-04-18 08:38:18 Etc/GMT",
      "purchase_date_ms": "1587199098000",
      "purchase_date_pst": "2020-04-18 01:38:18 America/Los_Angeles",
      "original_purchase_date": "2020-04-18 08:38:18 Etc/GMT",
      "original_purchase_date_ms": "1587199098000",
      "original_purchase_date_pst": "2020-04-18 01:38:18 America/Los_Angeles",
      "expires_date": "2020-05-18 08:38:18 Etc/GMT",
      "expires_date_ms": "4102489858000",
      "expires_date_pst": "2020-05-18 01:38:18 America/Los_Angeles",
      "web_order_line_item_id": "280000218403533",
      "is_trial_period": "true",
      "is_in_intro_offer_period": "false"
    }]
  },
  "latest_receipt_info": [{
    "quantity": "1",
    "product_id": "com.gear.app.yearly",
    "transaction_id": "280000597135826",
    "original_transaction_id": "280000597135826",
    "purchase_date": "2020-04-18 08:38:18 Etc/GMT",
    "purchase_date_ms": "1587199098000",
    "purchase_date_pst": "2020-04-18 01:38:18 America/Los_Angeles",
    "original_purchase_date": "2020-04-18 08:38:18 Etc/GMT",
    "original_purchase_date_ms": "1587199098000",
    "original_purchase_date_pst": "2020-04-18 01:38:18 America/Los_Angeles",
    "expires_date": "2020-05-18 08:38:18 Etc/GMT",
    "expires_date_ms": "4102489858000",
    "expires_date_pst": "2020-05-18 01:38:18 America/Los_Angeles",
    "web_order_line_item_id": "280000218403533",
    "is_trial_period": "true",
    "is_in_intro_offer_period": "false",
    "subscription_group_identifier": "20518394"
  }],
  "latest_receipt": "",
  "pending_renewal_info": [{
    "expiration_intent": "1",
    "auto_renew_product_id": "com.gear.app.yearly",
    "original_transaction_id": "280000597135826",
    "is_in_billing_retry_period": "0",
    "product_id": "com.gear.app.yearly",
    "auto_renew_status": "0"
  }]
};

$done({body: JSON.stringify(obj)});
