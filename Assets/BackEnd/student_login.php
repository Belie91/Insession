<?php
include 'db.php';
// Error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $studentId = $_POST['username'];
    $password = $_POST['password'];

    // Check if student exists
    $sql = "SELECT * FROM students WHERE student_id = ? AND password = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ss", $studentId, $password);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        // Redirect to student dashboard
        header("Location: /Assets/pages/Students/student.html");
        exit();
    } else {
        // Invalid credentials
        echo "<script>alert('Invalid Student ID or Password. Please try again.'); window.location.href = '/Assets/pages/Students/student_login.html';</script>";
    }

    $stmt->close();
}
?>
