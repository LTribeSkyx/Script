/*

Quantumult X 脚本:
Myscript Nebo Unlocks （by LTribe）
Myscript Nebo download link : http://t.cn/AiklUp5b

[rewrite_local]
# Myscript Nebo Unlocks （by LTribe）
^https?:\/\/.*\.nebo\.app\/api\/.*\/inapppurchase\/apple\/receipt url script-response-body Nebo.js

[mitm]
hostname = *.nebo.app,

*/

let obj = JSON.parse($response.body);
obj = {
  "originalApplicationVersion": "2.2.4.2936",
  "dateReceiptCreation": 1582695984000,
  "inapps": [],
  "bundleIdentifier": "com.myscript.nebo",
  "bundleVersion": "2.5.0.5032"
};

$done({body: JSON.stringify(obj)});
