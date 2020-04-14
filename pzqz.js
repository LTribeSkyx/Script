/*

Quantumult X 脚本[未完成]:
拍照取字 Unlocks （by LTribe）

[rewrite_local]
# 拍照取字 Unlocks （by LTribe）
^http?:\/\/pay_free\.maoqilai\.com\/get_user_info url response-body pzqz.js

[mitm]
hostname = *.maoqilai.com,

*/

let obj = JSON.parse($response.body);
obj.is_forever = true;
$done({body: JSON.stringify(obj)});
