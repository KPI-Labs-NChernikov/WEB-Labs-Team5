<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Laba7</title>
    <style>
    .raz td {
        border: 1px solid black;
        padding-left: 10px;
        padding-right: 35px;
        padding-top: 10px;
        padding-bottom: 10px;
        }
    </style>
</head>
<body>
    <h3><center>Додавання днів поїздки</center></h3>
        <form method="POST">
            <p>
                <h5>Оберіть номер поїзду:<input class="text-field" type = "name" name="TrainNumber"></h5>
            </p>
            <p>
                <h5>Оберіть дату :<input type="date" name="DateOfDeparture"></h5>
            </p>
            <p>
                <h5>Оберіть кількість квитків: <input class="text-field" type = "name" name="NumberOfTickets"></h5>
            </p>
            <p>
                <h5>Оберіть ціну квитків: <input class="text-field" type = "name" name="TicketPrice"></h5>
            </p>
            <p><input id="send-button" type="submit" value = "Відправити"></p>
        </form>
    <?php
    $connect = @mysqli_connect('localhost','root', '') or die ("Could not connect");
    mysqli_select_db($connect, "laba7");
    $trnumber = $_POST["TrainNumber"];
    $date = $_POST["DateOfDeparture"];
    $numoftick = $_POST["NumberOfTickets"];
    $tickprice = $_POST["TicketPrice"];
    
    if($trnumber > 0 && $trnumber <= 5 && $numoftick <= 50 && $numoftick >= 0 && $tickprice <= 5000 && $numoftick >= 0)
    {
        $query = "INSERT IGNORE INTO Schedule (TrainNumber, DateOfDeparture, NumberOfTickets, TicketPrice) VALUES ($trnumber, '$date', $numoftick, $tickprice)";
        if(mysqli_query($connect,$query))
        {
            echo 'Дані були оновлені.';
        }else{
            echo mysqli_error($connect);
        }
    }
    mysqli_close($connect);
    ?>
    <br><br>
    <h3><center>Виведення таблиці розкладу</center></h3>
        <h2><center>
        <?php
            $connect = @mysqli_connect('localhost','root', '') or die ("Could not connect");
            mysqli_select_db($connect, "laba7");
            $sql = "SELECT * FROM Schedule";
            if($result = $connect->query($sql)){
                $rowsCount = $result->num_rows;
                echo "<p>Отримано записів : $rowsCount</p>";
                echo "<table class=\"raz\"><tr><th>Id</th><th>TrainNumber</th><th>DateOfDeparture</th><th>NumberOfTickets</th><th>TicketPrice</th></tr><br>";
                foreach($result as $row){
                    echo "<tr>";
                echo "<td>" . $row["id"] . "</td>";
                echo "<td>" . $row["TrainNumber"] . "</td>";
                echo "<td>" . $row["DateOfDeparture"] . "</td>";
                echo "<td>" . $row["NumberOfTickets"] . "</td>";
                echo "<td>" . $row["TicketPrice"] . "</td>";
                    echo "</tr>";
                }
                echo "</table>";
                $result->free();
            } else{
                echo "Ошибка: " . $connect->error;
            }
        ?>
        </center></h2>
        <br><br>
            <form method="POST">
                <p>
                    <h2>Введіть номер потягу на перевірку чи він є:
                        <input class="text-field" type = "name2" name="TrainNumber1"></h2>
                    </p>
                    <br>
                    <p><input id="send-button" type="submit" value = "Відправити"></p>
            </form>
            <h2><center>
                <?php
                    $connect = @mysqli_connect('localhost','root', '') or die ("Could not connect");
                    mysqli_select_db($connect, "laba7");
                    $name = $_POST["TrainNumber1"];
                    $len_name = strlen($name);
                    if($len_name>0)
                    {
                        $sql = "SELECT * FROM Schedule WHERE TrainNumber = '$name'";
                        if($result = $connect->query($sql)){
                            $rowsCount = $result->num_rows;
                            if(	$rowsCount != 0){
                                    echo "Потяга з номером $name існує.";
                                }else{
                                    echo "Потяга з номером $name не існує.";
                                }
                            $result->free();
                        } else{
                            echo "Ошибка: " . $connect->error;
                        }
                    }
                ?>
        </center></h2>
</body>
</html>