/*
Quantumult X 脚本:
[rewrite_local]
# Gear Unlock Pro （by LTribe）
^https?:\/\/buy\.itunes\.apple\.com\/verifyReceipt url script-response-body Geist.js
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
    "bundle_id": "com.firecore.infuse",
    "application_version": "6.4.3073",
    "download_id": 60000000000000,
    "version_external_identifier": 800000000,
    "receipt_creation_date": "2000-01-01 01:01:01 Etc/GMT",
    "receipt_creation_date_ms": "1000000000000",
    "receipt_creation_date_pst": "2000-01-01 01:01:01 America/Los_Angeles",
    "request_date": "2000-01-01 01:01:01 Etc/GMT",
    "request_date_ms": "1000000000000",
    "request_date_pst": "2000-01-01 01:01:01 America/Los_Angeles",
    "original_purchase_date": "2000-01-01 01:01:01 Etc/GMT",
    "original_purchase_date_ms": "1588186076000",
    "original_purchase_date_pst": "2020-04-29 11:47:56 America/Los_Angeles",
    "original_application_version": "6.3.3026",
    "in_app": [{
      "quantity": "1",
      "product_id": "com.firecore.infuse.pro.365.special",
      "transaction_id": "200000000000000",
      "original_transaction_id": "200000000000000",
      "purchase_date": "2000-01-01 01:01:01 Etc/GMT",
      "purchase_date_ms": "1000000000000",
      "purchase_date_pst": "2000-01-01 01:01:01 America/Los_Angeles",
      "original_purchase_date": "2000-01-01 01:01:01 Etc/GMT",
      "original_purchase_date_ms": "1000000000000",
      "original_purchase_date_pst": "2000-01-01 01:01:01 America/Los_Angeles",
      "expires_date": "2100-01-01 01:01:01 Etc/GMT",
      "expires_date_ms": "4000000000000",
      "expires_date_pst": "2100-01-01 01:01:01 America/Los_Angeles",
      "web_order_line_item_id": "200000000000000",
      "is_trial_period": "true",
      "is_in_intro_offer_period": "false"
    }]
  },
  "latest_receipt_info": [{
    "quantity": "1",
    "product_id": "com.firecore.infuse.pro.365.special",
    "transaction_id": "200000000000000",
    "original_transaction_id": "200000000000000",
    "purchase_date": "2000-01-01 01:01:01 Etc/GMT",
    "purchase_date_ms": "1000000000000",
    "purchase_date_pst": "2000-01-01 01:01:01 America/Los_Angeles",
    "original_purchase_date": "2000-01-01 01:01:01 Etc/GMT",
    "original_purchase_date_ms": "1000000000000",
    "original_purchase_date_pst": "2000-01-01 01:01:01 America/Los_Angeles",
    "expires_date": "2021-04-29 18:51:04 Etc/GMT",
    "expires_date_ms": "4000000000000",
    "expires_date_pst": "2100-01-01 01:01:01 America/Los_Angeles",
    "web_order_line_item_id": "200000000000000",
    "is_trial_period": "true",
    "is_in_intro_offer_period": "false",
    "subscription_group_identifier": "20000000"
  }],
  "latest_receipt": "",
  "pending_renewal_info": [{
    "auto_renew_product_id": "com.firecore.infuse.pro.365.special",
    "original_transaction_id": "200000000000000",
    "product_id": "com.firecore.infuse.pro.365.special",
    "auto_renew_status": "0"
  }]
};

$done({body: JSON.stringify(obj)});
