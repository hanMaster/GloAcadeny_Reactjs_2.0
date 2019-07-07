<?php 
  // Headers
  header('Access-Control-Allow-Origin: *');
  header('Content-Type: application/json');
  header('Access-Control-Allow-Methods: GET');
  header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');
	$db = json_decode(file_get_contents('./db.json'));

	if (isset($_GET['coffee'])){
		echo (json_encode($db->coffee));
	}
		
	if (isset($_GET['goods'])){
		echo (json_encode($db->goods));
	}
	if (isset($_GET['bestsellers'])){
		echo (json_encode($db->bestsellers));
	}
