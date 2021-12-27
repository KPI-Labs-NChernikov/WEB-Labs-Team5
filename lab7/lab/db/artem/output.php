<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body style="background-color:cadetblue; font-size:larger; text-transform: uppercase; line-height:30px;">
<?php
							$connection = @mysqli_connect('localhost', 'root', '') or die ("Could not connect");
							mysqli_select_db($connection, "laba7");
							$sql = "SELECT * FROM route";
							if($result = $connection->query($sql)){
    							$rowsCount = $result->num_rows;
    							echo "<p>Всього маршрутів : $rowsCount</p>";
    							echo "<table route=\"raz\"><tr><th>  Станція відправлення ///</th><th>   Станція прибуття  </th><th> <br>";
    							foreach($result as $row){
        							echo "<tr>";
            					echo "<td>" . $row["ArrivalStation"] . "</td>";
            					echo "<td>" . $row["DepartureStation"] . "</td>";
        							echo "</tr>";
    							}
    							echo "</table>";
    							$result->free();
							} else{
    							echo "Ошибка: " . $connection->error;
							}
						?>
</body>
</html>