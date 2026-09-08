<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];

    // Check if the username and password are "admin"
    if ($username === "cradmin" && $password === "cradmin") {
        header("Location: /Admin/AdminCr.html");
        exit();
    } 
    if ($username === "hpadmin" && $password === "hpadmin") {
        header("Location: /Admin/AdminHp.html");
        exit();
    } 
    if ($username === "spadmin" && $password === "spadmin") {
        header("Location: /Admin/AdminSp.html");
        exit();
    } 
    if ($username === "cpadmin" && $password === "cpadmin") {
        header("Location:/Admin/AdminCO.html");
        exit();
    } else {
        $host = "localhost";
        $user = "root";
        $password = "";
        $database = "user_accounts";

        // Create connection
        $mysqli = new mysqli($host, $user, $password, $database);

        // Check connection
        if ($mysqli->connect_error) {
            die("Connection failed: " . $mysqli->connect_error);
        }

        // Prepare a SQL query to fetch user information
        $stmt = $mysqli->prepare("SELECT * FROM users WHERE username = ?");
        $stmt->bind_param("s", $username);

        $stmt->execute();

        $result = $stmt->get_result();

        // Check if a user with the given username exists
        if ($result->num_rows == 1) {
            $user = $result->fetch_assoc();

            if (password_verify($password, $user['password'])) {
                header("Location: ../Dashboard/Dashboard.html");
                exit();
            }
        }
    }

    header("Location: LoginPage.html?error=1");
    exit();
}
?>
