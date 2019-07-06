<?PHP

$coffee = [
	[
		"name"=> "Death Wish Bean",
		"country"=> "Brazil",
		"url"=> "https://images-na.ssl-images-amazon.com/images/I/91DlZZBjxzL._SX522_.jpg",
		"price"=> "12.99$",
		"description"=> "Through our unique blend of Arabica and Robusta beans and our slow roasting process, we naturally produce coffee with 200% more caffeine than your average cup of coffee. There are no additives or additional caffeine added throughout making the blend — only organic, Fair Trade coffee beans."
	],
	[
		"name"=> "AROMISTICO Coffee 1 kg",
		"country"=> "Brazil",
		"url"=> "https://images-na.ssl-images-amazon.com/images/I/71qBQnpQFYL._SL1500_.jpg",
		"price"=> "6.99$",
		"description"=> "This slow hand roasted blend has been crafted by Dario of the Pelliconi family. This gourmet coffee has a hint of hazelnut, a full body and an intense colour. It gives a dense flavour while at the same time releases a sharpness, so that taste and fragrance persist. You will be transported to a Roman piazza and immerse yourself in living 'La Dolce Vita'."
	],
	[
		"name"=> "Solimo Coffee Beans 2 kg",
		"country"=> "Kenya",
		"url"=> "https://images-na.ssl-images-amazon.com/images/I/815O9ktyfUL._SL1500_.jpg",
		"price"=> "10.73$",
		"description"=> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet."
	],
	[
		"name"=> "Black Rifle Coffee",
		"country"=> "Kenya",
		"url"=> "https://images-na.ssl-images-amazon.com/images/I/91vwF6Kh8IL._SX522_.jpg",
		"price"=> "19.75$",
		"description"=> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet."
	],
	[
		"name"=> "Presto Coffee Beans 1 kg",
		"country"=> "Columbia",
		"url"=> "https://images-na.ssl-images-amazon.com/images/I/91Ryk2gKejL._SL1500_.jpg",
		"price"=> "15.99$",
		"description"=> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet."
	],
	[
		"name"=> "Organic Coffee One Cup",
		"country"=> "Columbia",
		"url"=> "https://images-na.ssl-images-amazon.com/images/I/51M2fmEXTIL.jpg",
		"price"=> "24.99$",
		"description"=> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet."
	]
];
header('Content-Type: application/json');
echo json_encode($coffee);