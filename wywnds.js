var body = $response.body;
var obj = JSON.parse(body);

obj.tradeEndTime = 4070957802000;
body = JSON.stringify(obj);
$done({body});
