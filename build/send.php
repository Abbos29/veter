<?php

$name = $_POST['name'];
// $email = $_POST['email'];
$phone = $_POST['phone'];
// $text = $_POST['textarea'];

$token = "6187146406:AAGFmR-7k6E7HpqFHjN8neF6ZngWwPpRr5w"; // Токен телеграм бота


$chat_id = "-1001950861223";  // Идентификатор чата
// $chat_id2 = "CHAT_ID2";  // Дополнительный идентификатор чата

$arr = array(
    'Имя пользователя: ' => $name,
    // 'Почта: ' => $email,
    'Телефон: ' => $phone,
    // 'Письмо: ' => $text,
);

foreach ($arr as $key => $value) {
    $txt .= "<b>" . $key . "</b> " . $value . "%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}", "r");
// $sendToTelegram2 = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id2}&parse_mode=html&text={$txt}", "r");


if ($sendToTelegram) {
    ob_start();
    $new_url = './thanks.html';
    header('Location: ' . $new_url);
    ob_end_flush();
} else {
    echo "Error";
}
