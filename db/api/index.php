<?php

require 'Slim/Slim.php';

\Slim\Slim::registerAutoloader();

$app = new \Slim\Slim();

$app->get('/fetchteam/:mode', function ($mode) use ($app, $db) {
	$sql= "select * from rsak.sb_teams st ".
		"join rsak.sb_team_btn_game_x stbgx on (st.code = stbgx.team_code) ".
		"join rsak.sb_current_team sct on (sct.code = stbgx.btn_code) " .
		"where stbgx.game_id = :mode";
	try {
		$db = getConnection();
		$stmt = $db->prepare($sql);
		$stmt->bindParam("mode",$mode);

		$stmt->execute();
		$team = $stmt->fetchAll(PDO::FETCH_OBJ);
		$db = null;
		echo '{"team" : ' . json_encode($team) .'}';
	} catch(PDOException $e) {
		echo '{"error":{"text":'. $e->getMessage() .'}}';
	}
});

$app->post('/setteam/:code', function ($code) use ($app, $db) {
	$sql = "insert into rsak.sb_current_team (code) VALUES (:code)";
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

$app->post('/resetteam', function () use ($app, $db) {
    $sql = "truncate table rsak.sb_current_team";
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

$app->post('/loadquestion', function () use ($app,$db) {
	$reqbody = json_decode($app->request()->getBody());
	var_dump($reqbody);
	$sql = "insert into rsak.sb_question(category_id, answer, question, airdate, amount, insdate) " .
			"values (:category_id,:answer,:question,:airdate,:amount, now())";

	try {
		$db = getConnection();
		$stmt = $db->prepare($sql);
		$stmt->bindParam("category_id",$reqbody->{'category_id'});
		$stmt->bindParam("answer",$reqbody->{'answer'});
		$stmt->bindParam("question",$reqbody->{'question'});
		$stmt->bindParam("airdate",$reqbody->{'airdate'});
		$stmt->bindParam("amount",$reqbody->{'amount'});

		$stmt->execute();
		$db = null;
		echo '{"success":{}}';
	} catch(PDOException $e) {
		echo '{"error":{"text":'. $e->getMessage() .'}}';
	}
});

$app->get('/getquestions', function () use ($app,$db) {
	$sql = "select sc.cat_name,sq.question,sq.answer, sq.amount " .
		"from rsak.sb_question sq " .
		"join rsak.sb_category sc on (sq.category_id = sc.cat_id) " .
		"order by sq.airdate, sc.cat_name, sq.amount";
	try {
		$db = getConnection();
		$stmt = $db->prepare($sql);

		$stmt->execute();
		$team = $stmt->fetchAll(PDO::FETCH_OBJ);
		$db = null;
		echo '{"questions" : ' . json_encode($team) .'}';
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