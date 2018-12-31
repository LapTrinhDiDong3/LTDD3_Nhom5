<?php
 include ('DBConfig.php');
 $con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);
 $json = file_get_contents('php://input');
  $obj = json_decode($json,true);
  $tieu_de = $obj["tieu_de"];
 $mo_ta =$obj["mo_ta"];
  $hinh_anh =$obj["hinh_anh"];
  $noi_dung =$obj["noi_dung"];
  $the_loai =$obj["the_loai"];
  $Sql_Query = "INSERT INTO tb_tintuc (id ,  tieu_de , mo_ta,  hinh_anh,  noi_dung, nguoi_dang,ngay_dang, the_loai ) 
 VALUES (null,'$tieu_de','$mo_ta', '$hinh_anh','$noi_dung',null,null,$'the_loai',)";
 
 if(mysqli_query($con,$Sql_Query)){
 $MSG = 'Successfully' ;

 $json = json_encode($MSG);
 echo $json ; 
 }
 else{
 
 echo 'Wrong';
 
 }
 mysqli_close($con);
 
?>