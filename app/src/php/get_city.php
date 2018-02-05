<?php
    /*
        根据ip获取城市
        http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=json&ip=27.46.236.176
     */
    
    // 获取IP
    $ip = isset($_GET['ip']) ? $_GET['ip'] : null;
    
    $url = "http://int.dpool.sina.com.cn/iplookup/iplookup.php?format=json&ip=$ip";
    $content = file_get_contents($url);

    $res = json_decode($content);//得到一个对象

    // 修改编码
    // $content = iconv('gb2312','utf-8',$content);

    // var_dump($res);

    echo $res->city;
?>