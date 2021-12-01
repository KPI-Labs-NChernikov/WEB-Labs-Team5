<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<form method="POST">
       
            <h2> Введіть прізвище та ім'я водія
                <p> <input class="text-field" type = "name" name="name"></h2>
            </p>
            <p><input id="send-button" type="submit" value = "Send"></p>
    </form>
    <?php
              $db_host = "laba7";
              $db_user = "root";
              $db_password = "";
              $connection = @mysqli_connect('localhost', 'root', '') or die ("Could not connect");
              mysqli_select_db($connection, "laba7");
              $name = $_POST["name"];
              $len_name = strlen($name);
              if($len_name>0)
              {
                $query = "INSERT IGNORE INTO bus (driver) VALUES ('$name')";
                if(mysqli_query($connection,$query))
                {
                }else{
                  echo mysqli_error($connection);
                }
              }
            ?>

    <?php
						  $db_host = "laba7";
							$db_user = "root";
							$db_password = "";
							$connection = @mysqli_connect('localhost', 'root', '') or die ("Could not connect");
							mysqli_select_db($connection, "laba7");
							$arrivalStation = $_post["arrivalStation"];
							$departureStation = $_post["departureStation"];
							$busId = $_post["busId"];
							$query = "INSERT IGNORE INTO route (ArrivalStation, DepartureStation, BusID) VALUES ('$arrivalStation', '$departureStation', '$busId')";
							
						?>

</body>
</html>
