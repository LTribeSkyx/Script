  
/*

Quantumult X 脚本:
[rewrite_local]
# 1Blocker Unlock （by LTribe）
^https://api.revenuecat.com/v1/subscribers/* url script-response-body 1Blocker.js

[mitm]
hostname = api.revenuecat.com,

*/

let obj = JSON.parse($response.body);

obj.subscriber = {
    "entitlements": {
      "premium": {
        "expires_date": "2020-11-28T12:45:20Z",
        "grace_period_expires_date": null,
        "product_identifier": "blocker.ios.subscription.yearly",
        "purchase_date": "2020-11-14T12:45:20Z"
      }
    },
    "first_seen": "2020-11-14T12:43:59Z",
    "last_seen": "2020-11-14T12:43:59Z",
    "management_url": "itms-apps://apps.apple.com/account/subscriptions",
    "non_subscriptions": {},
    "original_app_user_id": "0B14FE75-27E3-445C-96DC-D0B4DEB12254",
    "original_application_version": "900",
    "original_purchase_date": "2020-11-14T12:43:04Z",
    "other_purchases": {},
    "subscriptions": {
      "blocker.ios.subscription.yearly": {
        "billing_issues_detected_at": null,
        "expires_date": "2020-11-28T12:45:20Z",
        "grace_period_expires_date": null,
        "is_sandbox": false,
        "original_purchase_date": "2020-11-14T12:45:21Z",
        "period_type": "trial",
        "purchase_date": "2020-11-14T12:45:20Z",
        "store": "app_store",
        "unsubscribe_detected_at": null
      }
    }
 }
$done({body: JSON.stringify(obj)});
