<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
<div><form method="POST">
<select name = "arrivalStation">
      <option>Київ</option>
      <option>Житомир</option>
      <option>Харків</option>
      <option>Львів</option>
      <option>Маріуполь</option>
      <option>Бердянськ</option>
    </select>

    <select name = "departureStation">
      <option>Київ</option>
      <option>Житомир</option>
      <option>Харків</option>
      <option>Львів</option>
      <option>Маріуполь</option>
      <option>Бердянськ</option>
    </select>

    <select name = "busId">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
      <option>6</option>
    </select>
</div>
<br>
    <input type = "submit" value = "Send">
    </form>

    <?php
              $connection = @mysqli_connect('localhost', 'root', '') or die ("Could not connect");
              mysqli_select_db($connection, "laba7");
              $arrivalStation = $_POST["arrivalStation"];
			  $departureStation = $_POST["departureStation"];
			  $busId = $_POST["busId"];
              $len_name = strlen($arrivalStation);
              if($len_name>0)
              {
                $query = "INSERT IGNORE INTO Route (ArrivalStation, DepartureStation, BusID) VALUES ('$arrivalStation', '$departureStation', '$busId')";
				if(mysqli_query($connection,$query))
                {

                }else{
                  echo mysqli_error($connection);
                }
              }
            ?>

</body>
</html>