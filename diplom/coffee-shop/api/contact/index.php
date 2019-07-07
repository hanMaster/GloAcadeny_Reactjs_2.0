<?php
  // Headers
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');
$db = json_decode(file_get_contents('../db.json'));
$postData = file_get_contents('php://input');
$data = json_decode($postData, true);
$db->contacts = $data;
$fp = fopen('../db.json', 'w');
if (fwrite($fp, json_encode($db)) === FALSE) {
	echo json_encode(
		array('message' => 'Contact Not Saved')
	);
	exit;
}else{
	echo json_encode(
   	array('message' => 'Contact saved')
	);
}
fclose($fp);