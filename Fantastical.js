/*
Quantumult X 脚本:

[rewrite_local]
# Fantastical Unlock Pro （by LTribe）
^https?:\/\/api\.flexibits\.com\/v1\/account\/details/ url script-response-body Fantastical.js

[mitm]
hostname = api.flexibits.com,
*/

let obj = JSON.parse($response.body);
obj.subscription = {
    "autorenew": true,
    "additional_seats": 4,
    "expiration": "2030-01-01T01:01:01.000000Z",
    "uuid": "78hg9ji0-9j80-40kk-nj90-897827klsf6",
    "subscription_type": "AppStore",
    "is_expired": false,
    "is_canceled": false,
    "trial": true,
    "dependents": [],
    "parent": null,
    "pending_invitations": []
  };

$done({body: JSON.stringify(obj)});
