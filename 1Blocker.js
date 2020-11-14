  
/*

Quantumult X 脚本:
[rewrite_local]
# 1Blocker Unlock （by LTribe）
^https:\/\/api\.revenuecat\.com\/v1\/subscribers* url script-response-body 1Blocker.js

[mitm]
hostname = api.revenuecat.com,

*/

let obj = JSON.parse($response.body);

obj.subscriber = {
    "entitlements": {
      "premium": {
        "expires_date": "2030-01-01T01:01:01Z",
        "grace_period_expires_date": null,
        "product_identifier": "blocker.ios.subscription.yearly",
        "purchase_date": "2020-01-01T01:01:01Z"
      }
    },
    "first_seen": "2030-01-01T01:01:01Z",
    "last_seen": "2030-01-01T01:01:01Z",
    "management_url": "itms-apps://apps.apple.com/account/subscriptions",
    "non_subscriptions": {},
    "original_app_user_id": "0099LK05-2799-489J-09CD-D9IJSEB09876",
    "original_application_version": "900",
    "original_purchase_date": "2030-01-01T01:01:01Z",
    "other_purchases": {},
    "subscriptions": {
      "blocker.ios.subscription.yearly": {
        "billing_issues_detected_at": null,
        "expires_date": "2030-01-01T01:01:01Z",
        "grace_period_expires_date": null,
        "is_sandbox": false,
        "original_purchase_date": "2020-01-01T01:01:01Z",
        "period_type": "trial",
        "purchase_date": "2020-01-01T01:01:01Z",
        "store": "app_store",
        "unsubscribe_detected_at": null
      }
    }
 }

$done({body: JSON.stringify(obj)});
