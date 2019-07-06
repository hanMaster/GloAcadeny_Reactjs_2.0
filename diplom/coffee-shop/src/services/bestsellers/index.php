<?PHP

$bestsellers = [
	[
		"name"=> "Solimo Coffee Beans 2 kg",
		"url"=> "https://images-na.ssl-images-amazon.com/images/I/815O9ktyfUL._SL1500_.jpg",
		"price"=> "10.73$"
	],
	[
		"name"=> "Presto Coffee Beans 1 kg",
    "url"=> "https://images-na.ssl-images-amazon.com/images/I/91Ryk2gKejL._SL1500_.jpg",
    "price"=> "15.99$"
	],
	[
		"name"=> "AROMISTICO Coffee 1 kg",
    "url"=> "https://images-na.ssl-images-amazon.com/images/I/71qBQnpQFYL._SL1500_.jpg",
    "price"=> "6.99$"

	]
];
header('Content-Type: application/json');
echo json_encode($bestsellers);