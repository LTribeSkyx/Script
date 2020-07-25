/*

Quantumult X 脚本:
Darkroom Unlock annual subscriptions （by LTribe）

[rewrite_local]
# Darkroom Unlock annual subscriptions （by LTribe）
^https?:\/\/api\.revenuecat\.com\/v\d\/(receipts|subscribers*) url script-response-body Darkroom.js

[mitm]
hostname = api.revenuecat.com,

*/

let obj = JSON.parse($response.body);

obj = {
  "request_date": "2020-01-01T01:01:01Z",
  "request_date_ms": 1590000000000,
  "subscriber": {
    "entitlements": {
      "co.bergen.Darkroom.entitlement.allToolsAndFilters.legacy": {
        "expires_date": null,
        "product_identifier": "co.bergen.Darkroom.filterpack.instant",
        "purchase_date": "2000-01-01T01:01:01Z"
      }
    },
    "first_seen": "2000-01-01T01:01:01Z",
    "last_seen": "2000-01-01T01:01:01Z",
    "management_url": null,
    "non_subscriptions": {
      "co.bergen.Darkroom.filterpack.instant": [{
        "id": "13df813300",
        "is_sandbox": false,
        "original_purchase_date": "2000-01-01T01:01:01Z",
        "purchase_date": "2000-01-01T01:01:01Z",
        "store": "app_store"
      }]
    },
    "original_app_user_id": "$RCAnonymousID:123456789987654321",
    "original_application_version": "47500",
    "original_purchase_date": "2000-01-01T01:01:01Z",
    "other_purchases": {
      "co.bergen.Darkroom.filterpack.instant": {
        "purchase_date": "2000-01-01T01:01:01Z"
      }
    },
    "subscriptions": {
    "co.bergen.Darkroom.product.year.everything": {
        "billing_issues_detected_at": null,
        "expires_date": "2020-08-01T01:40:46Z",
        "is_sandbox": false,
        "original_purchase_date": "2020-07-25T01:40:47Z",
        "period_type": "trial",
        "purchase_date": "2020-07-25T01:40:46Z",
        "store": "app_store",
        "unsubscribe_detected_at": "2020-07-25T02:59:19Z"
      }
    }
  }
}
