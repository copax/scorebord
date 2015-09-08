<?php

require 'Slim/Slim.php';

\Slim\Slim::registerAutoloader();

$app = new \Slim\Slim();

$app->get('/fetchteam/:mode', function ($mode) use ($app, $db) {
	$sql= "select * from scorebord.sb_teams st ".
		"join scorebord.sb_team_btn_game_x stbgx on (st.code = stbgx.team_code) ".
		"join scorebord.sb_current_team sct on (sct.code = stbgx.btn_code) " .
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

$app->post('/resetteam', function () use ($app, $db) {
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

$app->post('/loadquestion', function () use ($app,$db) {
	$reqbody = json_decode($app->request()->getBody());
	var_dump($reqbody);
	$sql = "insert into scorebord.sb_question(category_id, answer, question, airdate, amount, insdate) " .
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

$app->get('/getquestions/:round', function ($round) use ($app,$db) {
	$sql = "select sc.cat_name,sq.question,sq.answer, sq.amount " .
		"from scorebord.sb_question sq " .
		"join scorebord.sb_category sc on (sq.category_id = sc.cat_id) " .
		"where sc.cat_id = :category and sq.round = :round " .
		"order by sq.airdate, sc.cat_name, sq.amount";
	try {
		$db = getConnection();
		$stmt = $db->prepare($sql);
		$category = 21;
		$stmt->bindParam("category",$category);
		$stmt->bindParam("round",$round);
		$stmt->execute();
		$animals = $stmt->fetchAll(PDO::FETCH_OBJ);

		$category = 26;
		$stmt->bindParam("category",$category);
		$stmt->bindParam("round",$round);
		$stmt->execute();
		$fashion = $stmt->fetchAll(PDO::FETCH_OBJ);

		$category = 49;
		$stmt->bindParam("category",$category);
		$stmt->bindParam("round",$round);
		$stmt->execute();
		$food = $stmt->fetchAll(PDO::FETCH_OBJ);

		$category = 105;
		$stmt->bindParam("category",$category);
		$stmt->bindParam("round",$round);
		$stmt->execute();
		$letters = $stmt->fetchAll(PDO::FETCH_OBJ);

		$category = 249;
		$stmt->bindParam("category",$category);
		$stmt->bindParam("round",$round);
		$stmt->execute();
		$homophones = $stmt->fetchAll(PDO::FETCH_OBJ);

		$category = 770;
		$stmt->bindParam("category",$category);
		$stmt->bindParam("round",$round);
		$stmt->execute();
		$popmusic = $stmt->fetchAll(PDO::FETCH_OBJ);

		$db = null;
		echo '[{"cat_name": "Animals", "questions": ' . json_encode($animals) .'},' .
			' { "cat_name": "Fashion", "questions": ' . json_encode($fashion) .'},' .
			' { "cat_name": "Food", "questions": ' . json_encode($food) .'},' .
			' { "cat_name": "3 Letter Words", "questions": ' . json_encode($letters) .'},' .
			' { "cat_name": "Homophones", "questions": ' . json_encode($homophones) .'},' .
			' { "cat_name": "Pop Music", "questions": ' . json_encode($popmusic) .'}' .
			']';
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
