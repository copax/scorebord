<?php

require 'Slim/Slim.php';

\Slim\Slim::registerAutoloader();

$app = new \Slim\Slim();

$app->post('/setteam/:code', function ($code) use ($app) {
	$sql = "insert into scorebord.sb_current_team (code) VALUES (:code)";
	try {
		$db = getConnection();
		$stmt = $db->prepare($sql);
		$stmt->bindParam("code",$code);
		$stmt->execute();
		$db = null;
		echo '{"success":{"code":' . $code . '}}';
	} catch(PDOException $e) {
		echo '{"error":{"text":'. $e->getMessage() .'}}';
	}
});

$app->post('/resetteam', function () use ($app) {
    $sql = "truncate table scorebord.sb_current_team";
    try {
        $db = getConnection();
        $stmt = $db->prepare($sql);
        $stmt->execute();
        $db = null;
        echo '{"success":{ }}';
    } catch(PDOException $e) {
        echo '{"error":{"text":'. $e->getMessage() .'}}';
    }
});

$app->run();

function getConnection() {
	$dbhost="localhost";
	$dbuser="root";
	$dbpass="raspberrypi";
	$dbname="scorebord";
	$dbh = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);
	$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	return $dbh;
}

?>
