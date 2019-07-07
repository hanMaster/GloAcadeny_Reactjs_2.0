<?PHP

$goods = [
	[
		"name"=> "Electric Spice and Coffee Grinder",
		"url"=> "https://images-na.ssl-images-amazon.com/images/I/41qvqWRCm3L.jpg",
		"price"=> "36.99$"
	],
	[
		"name"=> "Manual Coffee Grinder",
		"url"=> "https://images-na.ssl-images-amazon.com/images/I/91gR5HFtmaL._SL1500_.jpg",
		"price"=> "25.99$"
	],
	[
		"name"=> "Coffee Cup with Lid",
		"url"=> "https://images-na.ssl-images-amazon.com/images/I/71L5Ut1HHSL._SL1500_.jpg",
		"price"=> "15.99$"
	],
	[
		"name"=> "Pour Over Coffee Maker",
		"url"=> "https://images-na.ssl-images-amazon.com/images/I/916TPwGqfML._SL1500_.jpg",
		"price"=> "45.99$"
	]
];
header('Content-Type: application/json');
header('Access-Control-Allow-Origin:*');
echo json_encode($goods);

