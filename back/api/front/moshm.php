<?php
    include 'DBHelper.php';
    $sql = 'select * from moshm';
    $result = query_oop($sql);
    if($result){
        echo json_encode($result, JSON_UNESCAPED_UNICODE);
    }else{
        echo "fail";
    }
?>