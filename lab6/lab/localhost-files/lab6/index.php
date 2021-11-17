<!DOCTYPE html>
<html>
<head>
    <title>Laba 6</title>
    <meta charset="utf-8">
    <link rel="shortcut icon" href="favicon.ico">
    <link rel="icon" href="favicon.ico" type="image/png">
    <link rel="stylesheet" href="jquery-ui-1.13.0/jquery-ui.min.css">
    <script src="jquery-ui-1.13.0/external/jquery/jquery.js"></script>
    <script src="jquery-ui-1.13.0/jquery-ui.min.js"></script>
    <script src="script.js"></script>
</head>
<body>
    <form action="action.php" method="POST">
    <p>Дата: <input type="text" name="date" id="date"></p>
    <br>
    <p><a href="#" title="Дайте їм, наприклад, грошей">Подумайте</a> про свою сім'ю</p>
    <p>
        <label for="SocialCredit">Напишіть, скільки добрих справ Ви зробили у своєму житті: </label>
        <input name="SocialCredit" id="SocialCredit" type="number" title="Наприклад, покормили бродячих собак, перевели якихось бабок через дорогу тощо">
    </p>
    <br>
    <p><div id="tabs">
        <ul>
            <li><a href="#tabs-1">Приклад 1</a></li>
            <li><a href="#tabs-2">Приклад 2</a></li>
            <li><a href="#tabs-3">Приклад 3</a></li>
        </ul>
        <div id="tabs-1">
            <p>Текст прикладу 1</p>
        </div>
        <div id="tabs-2">
            <p>Текст прикладу 2</p>
        </div>
        <div id="tabs-3">
            <p>Текст прикладу 3</p>
        </div>
    </div></p>
    <p><div id="slider"></div></p>
    <input type="submit" value="Відправити">
    </form>
</body>
</html>