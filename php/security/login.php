<?php

require("../db/db.php");
require("PassHash.php");

session_start();

$userName = $_POST['user'];
$pass = $_POST['password'];


$userName = stripslashes($userName);
$pass = stripslashes($pass);

$userName = $mysqli -> real_escape_string($userName);
$sql= "SELECT * FROM user WHERE userName='$userName'";

 if($resultDB=$mysqli ->query($sql)){


    $count = $resultDb -> num_rows;

    if($count ==1){
        
        $record = $resultDB->fetch_assoc();

        if(PassHash::check_password($record['password'],$pass)){

            $_SESSION['auhenticated']="yes";
            $_SESSION['username']=$userName;

            $result['success']=true;
            $result['msg']='User authenticated!';

        
        } else{

            $result['success']=false;
            $result['msg']='Incorrect password';

        }
        
    } else {


        $result['success']=false;
        $result['msg']="Incorrect  user or password.";

    }
    $resultDB ->close();

}

/* close connection */
$mysqli->close();

//JSON encoding
echo json_encode($result);

?>
