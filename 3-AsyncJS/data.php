<?php  
    $list = [];
    for ($i=0; $i <= 1000; $i++) { 
        array_push($list, $i);
    }
    print json_encode($list);
 ?>