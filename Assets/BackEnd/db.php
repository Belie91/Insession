<?php
$servername = "localhost";
$username = "root"; // default for XAMPP
$password = "";     // default is blank
$dbname = "attendance"; // change to your actual DB name

$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
?>
