<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
							$connection = @mysqli_connect('localhost', 'root', '') or die ("Could not connect");
							mysqli_select_db($connection, "laba7");
							$sql = "SELECT * FROM route";
							if($result = $connection->query($sql)){
    							$rowsCount = $result->num_rows;
    							echo "<p>Знайдено маршрутів : $rowsCount</p>";
    							echo "<table route=\"raz\"><tr><th> |Станція відправлення|</th><th>  |Станція прибуття| </th><th>|Номер автобуса|</th></tr><br>";
    							foreach($result as $row){
        							echo "<tr>";
            					echo "<td>" . $row["ArrivalStation"] . "</td>";
            					echo "<td>" . $row["DepartureStation"] . "</td>";
            					echo "<td>" . $row["BusID"] . "</td>";
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
<br>
<br>
<br>
<form method="POST">
<select name = "name">
      <option>bus</option>
      <option>schedule</option>
      <option>route</option>
    </select>
	<input id="send-button" type="submit" value = "Send">
	</form>
						
							<?php
								$connection = @mysqli_connect('localhost', 'root', '') or die ("Could not connect");
								mysqli_select_db($connection, "laba7");
								$name = $_POST["name"];
									$sql = "SELECT * FROM $name ";
									if($result = $connection->query($sql)){
		    							$rowsCount = $result->num_rows;
		    							if(	$rowsCount != 0){
												echo "Рядки в таблиці '$name' існують.";
											}else{
												echo "Таблиця '$name' пуста";
											}
		    							$result->free();
								}
							?>