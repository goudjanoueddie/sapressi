<?php 
$server = "127.0.0.1";
<<<<<<< HEAD
<<<<<<< HEAD
$user="root";
$pass="Root123@";
$dbName="sapressiDB";
=======
$user = "root";
$pass = "rootroot";
$dbName = "sapressiDB";
>>>>>>> c5fb6026cc1a08dd1af1d1fa8c1c67b5665553eb
=======
$user = "root";
$pass = "rootroot";
$dbName = "sapressiDB";
>>>>>>> cafc04e11262dfb2840e927a94977a6ead55ef09

$mysqli = new mysqli($server,$user,$pass,$dbName);

/*check connection */
    if ($mysqli ->connect_errno) {
        printf("Connect failed: %s\n", mysqli_connect_error());
        exit();
    }

?>