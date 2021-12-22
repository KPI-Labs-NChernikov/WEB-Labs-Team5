<!DOCTYPE html>
<html>
<head>
    <link type="text/css" rel="stylesheet" href="css/style.css" />
  	<script type="text/javascript" src="js/jquery-1.11.1.min.js"></script>
	<script type="text/javascript" src="js/jquery.touchSwipe.min.js"></script>
	<script type="text/javascript" src="js/jquery.easing.1.3.min.js"></script>
	<script type="text/javascript" src="js/slider-reverse-min.js"></script>
</head>

<body>
<script>
    $(document).ready(function () {
    $.ajax({
        url: 'xml2.xml',
        type: 'GET',
        dataType: "xml",
        error: function () {
            $('#slider-wrapper').text("Ошибка!");
        },
        success: function (xml) {
            $(xml).find('list').each(function () {
                $(this).find('path').each(function () {
                   $('.slider-wrapper').append('<div class="slider-box" style="background-image: url(\'' + $(this).text() + '\');"></div>');
				   $('.img').append('<img width="250" style="margin: 0 10px 0 5px;" src="'+ $(this).text() + '"/>');
                });
            });
        }
    });

    window.setTimeout(function(){
        $('.slider-wrapper').show();
    }, 100);
    
    window.setTimeout(function(){
        $(".slider-wrapper").sliderReverse({
            animateType   : false,
            autoPlaySpeed : 1000,
            btnsText      : {
                next      : "",
                prev      : "",
                play      : "",
                pause     : ""
            },
            hoverPause    : true,
            navigation    : true,
            speed         : "normal",
            swipe         : true,
            swipeLimit    : 100,
            responsive    : false,
            width         : "800px"
        });
    }, 1000);
});
</script>
    <div class="slider-wrapper"></div>
<form method="POST" align="center">
        <p>
            <br><h5>Ведіть назву картинки для додання: <input type = "name" name="img"></h5><br>
        </p>

        <p><input class="send-button" type="submit" value = "Додати"></p>
</form>
<?php
    $img0 = $_POST["img"];
    $img = "img/" . $img0;
    if($img != "img/"){
        $temp = file_get_contents("xml2.xml");
        $list = new SimpleXMLElement($temp);
        $array = array();
        foreach ($list->path as $path) {
            array_push($array, (string)$path);
        }
        array_push($array, $img);
        $finalXml = "<list>\n";
        for ($i = 0; $i < count($array); $i++) {
            $finalXml .= "  <path>" . $array[$i] . "</path>\n";
        }
        $finalXml .= "</list>";
        $xml = fopen('xml2.xml', 'w');
        fwrite($xml, $finalXml);
        fclose($xml);
    }
?>

<form method="POST" align="center">
        <p>
            <br><h5>Ведіть назву картинки для видалення: <input type = "name" name="img2"></h5><br>
        </p>

        <p><input class="send-button" type="submit" value = "Видалити"></p>
</form>
<br><br>
<div class="img"></div>
<?php
	$img0 = $_POST["img2"];
	$img = "img/" . $img0;
	if($img != "img/"){
			$temp = file_get_contents("xml2.xml");
			$list = new SimpleXMLElement($temp);
			$array = array();
			foreach ($list->path as $path) {
				array_push($array, (string)$path);
			}
			$array = array_flip($array);
			$index = $array[$img];
			$array = array_flip($array);
			unset ($array[$index]) ; 
			$finalXml = "<list>\n";
			foreach ($array as &$value) {
					$finalXml .= "  <path>" . $value . "</path>\n";
			}
			$finalXml .= "</list>";
			$xml = fopen('xml2.xml', 'w');
			fwrite($xml, $finalXml);
			fclose($xml);
	}
?>
</body>
</html>