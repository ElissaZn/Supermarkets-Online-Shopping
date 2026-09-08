<?php
// Database connection details
$host = "localhost";
$user = "root";
$password = "";
$database = "shopix";

// Create connection
$mysqli = new mysqli($host, $user, $password, $database);

// Check connection
if ($mysqli->connect_error) {
    die("Connection failed: " . $mysqli->connect_error);
}

// Get the search term from the search bar input
$searchTerm = $_GET['search'] ?? '';

// Prepare the SQL statement with wildcard search
$stmt = $mysqli->prepare("SELECT * FROM items WHERE name LIKE ?");
$searchTermWildcard = '%' . $searchTerm . '%';
$stmt->bind_param("s", $searchTermWildcard);

// Execute the statement
$stmt->execute();

// Get the result
$result = $stmt->get_result();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Search Results</title>
    <style>
        .search-results {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
        }
        .item {
            border: 1px solid #ccc;
            padding: 20px;
            width: calc(33.333% - 40px); /* Three items per row */
            box-sizing: border-box;
        }
        .item img {
            max-width: 100%;
            height: auto;
        }
        .item h3 {
            font-size: 1.2em;
        }
        .item p {
            font-size: 1em;
            color: #333;
        }
        .item button {
            display: block;
            margin-top: 10px;
            padding: 10px 20px;
            background-color: #28a745;
            color: #fff;
            border: none;
            cursor: pointer;
        }
        .item button:hover {
            background-color: #218838;
        }
        .item .icon {
            width: 50px; /* Specific width for the icon */
            height: auto;
            display: block;
            margin-top: 10px;
        }
    </style>
</head>
<body>

<div class="search-results">
    <?php
    // Display the results
    while ($row = $result->fetch_assoc()) {
        echo '<div class="item">';
        echo '<img src="' . $row['image'] . '" alt="' . $row['name'] . '">';
        echo '<h3>' . $row['name'] . '</h3>';
        echo '<p>Price: $' . $row['price'] . '</p>';
        echo '<button>Add to Cart</button>';
        echo '<img src="' . $row['icon'] . '" alt="Icon" class="icon">';
        echo '</div>';
    }
    ?>
</div>

</body>
</html>

<?php
// Close the statement and connection
$stmt->close();
$mysqli->close();
?>
