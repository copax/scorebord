<?php

require 'Slim/Slim.php';

\Slim\Slim::registerAutoloader();

$app = new \Slim\Slim();

$app->get('/fetchteams/:mode/:buttonid', function ($mode,$buttonid) use ($app, $db) {
	//$sql = "insert into rsak.client_dog_x (dog_id,client_id) VALUES (:dogid, :clientid)";
	$sql= "select st.name from rsak.sb_teams st join rsak.sb_team_btn_game_x stbgx on (st.code = stbgx.team_code)" .
		"where stbgx.btn_code = :buttonid and game_id = :mode";
	try {
		$db = getConnection();
		$stmt = $db->prepare($sql);
		$stmt->bindParam("mode",$mode);
		$stmt->bindParam("buttonid",$buttonid);

		$stmt->execute();
		$team = $stmt->fetchAll(PDO::FETCH_OBJ);
		$db = null;
		echo '{"team" : ' . json_encode($team) .'}';
	} catch(PDOException $e) {
		echo '{"error":{"text":'. $e->getMessage() .'}}';
	}
});

$app->get('/fetchcurrentteam', function()use ($app, $db) {
   $sql = "select st.name from rsak.sb_current_team";
	try {
		$db = getConnection();
		$stmt = $db->prepare($sql);

			$stmt->execute();
		$team = $stmt->fetchAll(PDO::FETCH_OBJ);
		$db = null;
		echo '{"team" : ' . json_encode($team) .'}';
	} catch(PDOException $e) {
		echo '{"error":{"text":'. $e->getMessage() .'}}';
	}
});

$app->post('/setcurrentteam/:buttonid', function ($buttonid) use ($app, $db) {
	$sql = "insert into rsak.sb_current_team (dog_id,client_id) VALUES (:dogid, :clientid)";
	try {
		$db = getConnection();
		$stmt = $db->prepare($sql);
		$stmt->bindParam("dogid",$dogid);
		$stmt->bindParam("clientid",$clientid);
		$stmt->execute();
		$db = null;
		echo '{"success":{"clientid":' . $clientid . ',"dogid":' . $dogid . '}}';
	} catch(PDOException $e) {
		echo '{"error":{"text":'. $e->getMessage() .'}}';
	}
});

$app->run();

function getConnection() {
	$dbhost="rsak.db.11594131.hostedresource.com";
	$dbuser="rsak";
	$dbpass="Rsak!330";
	$dbname="rsak";
	$dbh = new PDO("mysql:host=$dbhost;dbname=$dbname", $dbuser, $dbpass);
	$dbh->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	return $dbh;
}

?>