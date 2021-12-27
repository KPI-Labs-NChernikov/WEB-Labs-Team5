<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body style="background-color:cadetblue;">
    
<div><form method="POST"">
<select name = "arrivalStation">
      <option>Київ</option>
      <option>Алупка</option>
      <option>Харків</option>
      <option>Алушта</option>
      <option>Сарни</option>
      <option>Бердянськ</option>
      <option>Армянськ</option>
      <option>Нью Йорк</option>
      <option>Маріуполь</option>
      <option>Бердичів</option>
      <option>Полтава</option>
    </select>

    <select name = "departureStation">
    <option>Київ</option>
      <option>Алупка</option>
      <option>Харків</option>
      <option>Алушта</option>
      <option>Сарни</option>
      <option>Бердянськ</option>
      <option>Армянськ</option>
      <option>Нью Йорк</option>
      <option>Маріуполь</option>
      <option>Бердичів</option>
      <option>Полтава</option>
    </select>
</div>
<br>
    <input type = "submit" value = "Send" style="color: darkcyan;">
    </form>

    <?php
              $connection = @mysqli_connect('localhost', 'root', '') or die ("Could not connect");
              mysqli_select_db($connection, "laba7");
              $arrivalStation = $_POST["arrivalStation"];
			  $departureStation = $_POST["departureStation"];
              $len_name = strlen($arrivalStation);
              if($len_name>0)
              {
                $query = "INSERT IGNORE INTO Route (ArrivalStation, DepartureStation) VALUES ('$arrivalStation', '$departureStation')";
				if(mysqli_query($connection,$query))
                {

                }else{
                  echo mysqli_error($connection);
                }
              }
            ?>

</body>
</html>