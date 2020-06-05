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
    "adam_id": 1000000000,
    "app_item_id": 1000000000,
    "bundle_id": "com.gear.app",
    "application_version": "2.0.8.0",
    "download_id": 60000000000000,
    "version_external_identifier": 800000000,
    "receipt_creation_date": "2100-01-01 01:01:01 Etc/GMT",
    "receipt_creation_date_ms": "4102489858000",
    "receipt_creation_date_pst": "2100-01-01 01:01:01 America/Los_Angeles",
    "request_date": "2100-01-01 01:01:01 Etc/GMT",
    "request_date_ms": "1590000000000",
    "request_date_pst": "2020-06-05 01:01:01 America/Los_Angeles",
    "original_purchase_date": "2020-04-18 08:31:54 Etc/GMT",
    "original_purchase_date_ms": "1500000000000",
    "original_purchase_date_pst": "2020-01-01 01:01:01 America/Los_Angeles",
    "original_application_version": "1.8.12.0",
    "in_app": [{
      "quantity": "1",
      "product_id": "com.gear.app.yearly",
      "transaction_id": "280000000000000",
      "original_transaction_id": "280000000000000",
      "purchase_date": "2020-01-01 01:01:01 Etc/GMT",
      "purchase_date_ms": "1500000000000",
      "purchase_date_pst": "2020-01-01 01:01:01 America/Los_Angeles",
      "original_purchase_date": "2020-01-01 01:01:01 Etc/GMT",
      "original_purchase_date_ms": "1500000000000",
      "original_purchase_date_pst": "2020-01-01 01:01:01 America/Los_Angeles",
      "expires_date": "2100-01-01 01:01:01 Etc/GMT",
      "expires_date_ms": "4102489858000",
      "expires_date_pst": "2100-01-01 01:01:01 America/Los_Angeles",
      "web_order_line_item_id": "280000000000000",
      "is_trial_period": "true",
      "is_in_intro_offer_period": "false"
    }]
  },
  "latest_receipt_info": [{
    "quantity": "1",
    "product_id": "com.gear.app.yearly",
    "transaction_id": "280000000000000",
    "original_transaction_id": "280000000000000",
    "purchase_date": "2020-01-01 01:01:01 Etc/GMT",
    "purchase_date_ms": "1500000000000",
    "purchase_date_pst": "2020-01-01 01:01:01 America/Los_Angeles",
    "original_purchase_date": "2020-01-01 01:01:01 Etc/GMT",
    "original_purchase_date_ms": "1500000000000",
    "original_purchase_date_pst": "2100-01-01 01:01:01 America/Los_Angeles",
    "expires_date": "2100-01-01 01:01:01 Etc/GMT",
    "expires_date_ms": "4102489858000",
    "expires_date_pst": "2100-01-01 01:01:01 America/Los_Angeles",
    "web_order_line_item_id": "280000000000000",
    "is_trial_period": "true",
    "is_in_intro_offer_period": "false",
    "subscription_group_identifier": "20000000"
  }],
  "latest_receipt": "",
  "pending_renewal_info": [{
    "expiration_intent": "1",
    "auto_renew_product_id": "com.gear.app.yearly",
    "original_transaction_id": "280000000000000",
    "is_in_billing_retry_period": "0",
    "product_id": "com.gear.app.yearly",
    "auto_renew_status": "0"
  }]
};

$done({body: JSON.stringify(obj)});
