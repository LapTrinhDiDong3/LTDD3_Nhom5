<?php
include 'DBConfig.php';
$conn = new mysqli($HostName, $HostUser, $HostPass, $DatabaseName); 
$conn->set_charset('utf8');
if ($conn->connect_error) { 
 die("Connection failed: " . $conn->connect_error);
} 
 

if(isset($_GET['id'])){
	$id = $_GET['id'];
	if($id == 0 ){
 	$sql = "SELECT * FROM tb_tintuc ORDER BY id DESC LIMIT 0,5";
}else
 	$sql = "SELECT * FROM tb_tintuc where the_loai = $id";
 }

 
$result = $conn->query($sql);
 
if ($result->num_rows >0) { 
 
 while($row[] = $result->fetch_assoc()) {
 
 $tempt = $row;
 $json = json_encode($tempt); 
 }
 
} else {
 echo "No Results Found.";
}

 echo $json;
$conn->close();
?>