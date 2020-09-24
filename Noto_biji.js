/*
Quantumult X 脚本:

[rewrite_local]
# Fantastical Unlock Pro （by LTribe）
^https?:\/\/api\.revenuecat\.com\/v1\/(subscribers*|receipts) url script-response-body Noto_biji.js
[mitm]
hostname = api.revenuecat.com,
*/

let obj = JSON.parse($response.body);
obj.subscriber.entitlements = {
      "pro": {
        "expires_date": "2100-01-01T01:01:01Z",
        "product_identifier": "com.lkzhao.editor.pro.ios.yearly",
        "purchase_date": "2020-01-01T01:01:01Z"
      }
    };
obj.subscriber.subscriptions = {
      "com.lkzhao.editor.pro.ios.yearly": {
        "billing_issues_detected_at": null,
        "expires_date": "2100-01-01T01:01:01Z",
        "is_sandbox": false,
        "original_purchase_date": "2020-01-01T01:01:01Z",
        "period_type": "trial",
        "purchase_date": "2020-01-01T01:01:01Z",
        "store": "app_store",
        "unsubscribe_detected_at": null
      }
    };

$done({body: JSON.stringify(obj)});
