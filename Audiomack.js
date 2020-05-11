/*

Quantumult X 脚本:

[rewrite_local]
# Audiomack 去广告（by LTribe）
^https?:\/\/api\.revenuecat\.com\/v\d\/subscribers\/\w+$ url script-response-body Audiomack.js

[mitm]
hostname = api.revenuecat.com,

*/

let obj = JSON.parse($response.body);
obj = {
  "request_date": "2020-05-11T11:49:28Z",
  "request_date_ms": 1589197768369,
  "subscriber": {
    "entitlements": {
      "Premium1": {
        "expires_date": "2020-05-18T09:56:58Z",
        "product_identifier": "com.audiomack.premium.2018",
        "purchase_date": "2020-05-11T09:56:58Z"
      }
    },
    "first_seen": "2020-05-11T09:49:22Z",
    "last_seen": "2020-05-11T11:46:45Z",
    "management_url": "itms-apps://apps.apple.com/account/subscriptions",
    "non_subscriptions": {},
    "original_app_user_id": "304BCA4B-0322-44F8-A455-A091BFE178DE",
    "original_application_version": "3698",
    "original_purchase_date": "2020-05-11T09:48:40Z",
    "other_purchases": {},
    "subscriptions": {
      "com.audiomack.premium.2018": {
        "billing_issues_detected_at": null,
        "expires_date": "2020-05-18T09:56:58Z",
        "is_sandbox": false,
        "original_purchase_date": "2020-05-11T09:56:59Z",
        "period_type": "trial",
        "purchase_date": "2020-05-11T09:56:58Z",
        "store": "app_store",
        "unsubscribe_detected_at": null
      }
    }
  }
}

$done({body: JSON.stringify(obj)});

// Updated April 11,2020
// 仅供个人参考学习交流，勿用于其它...
