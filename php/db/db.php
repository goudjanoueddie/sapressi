<?php 
$server = "127.0.0.1";
$user="root";
$pass="rootroot";
$dbName="sapressiDB";

$mysqli=new mysqli($server,$user,$pass,$dbName);

/*check connection */
    if($mysqli ->connect_errno){
        printf("Connect failed: %s\n", mysqli_connect_error());
        exit();
    }
?>