<?php
$pickedDate = $_POST["date"];
$socialCredit = $_POST["SocialCredit"];
if (empty($socialCredit))
    $socialCredit = "0";
echo "Повідомлення отримано! <br>";
echo "Ви зробили добрих справ: <b>". $socialCredit . "</b><br>";
echo "Обрана дата: <b>". $pickedDate . "</b><br>";
echo "Сьогоднішня дата: <b>". date("d/m/Y") . "</b>";
?>