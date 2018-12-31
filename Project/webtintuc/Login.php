<?php
 include 'DBConfig.php';
 $con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
 $json = file_get_contents('php://input');
  $obj = json_decode($json,true);
  
  
 
 $user  = $obj["userName"];
 $password = $obj["passWord"];
 
 if($obj["userName"] != ""){
 
  $Sql_Query = "SELECT * FROM tb_nguoidung WHERE user = '$user' AND password='$password'";
 
 $result = $con->query($Sql_Query);
 if($result->num_rows == 0){
	 echo json_encode('that bai');
 }else{
	 echo json_encode('ok');
 }
 }
 mysqli_close($con);
 
?>