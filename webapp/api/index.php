<?php

require 'Slim/Slim.php';

\Slim\Slim::registerAutoloader();

$app = new \Slim\Slim();

$app->get('/fetchteam/:mode', function ($mode) use ($app) {
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

$app->post('/loadquestion', function () use ($app) {
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

$app->get('/getquestions/:round', function ($round) use ($app) {
	$sql = "select sc.cat_name,sq.question,sq.answer, sq.amount " .
		"from scorebord.sb_question_filtered sq " .
		"join scorebord.sb_category sc on (sq.category_id = sc.cat_id) " .
		"where sc.cat_id = :category and sq.round = :round " .
		"order by sc.cat_name, sq.amount";
	try {
		$db = getConnection();
		$stmt = $db->prepare($sql);
		$category = 21;
		$stmt->bindParam("category",$category);
		$stmt->bindParam("round",$round);
		$stmt->execute();
		$category1_questions = $stmt->fetchAll(PDO::FETCH_OBJ);
		$category1_name = $category1_questions[0]->cat_name;

		$category = 26;
		$stmt->bindParam("category",$category);
		$stmt->bindParam("round",$round);
		$stmt->execute();
		$category2_questions = $stmt->fetchAll(PDO::FETCH_OBJ);
		$category2_name = $category2_questions[0]->cat_name;

		$category = 49;
		$stmt->bindParam("category",$category);
		$stmt->bindParam("round",$round);
		$stmt->execute();
		$category3_questions = $stmt->fetchAll(PDO::FETCH_OBJ);
		$category3_name = $category3_questions[0]->cat_name;

		$category = 105;
		$stmt->bindParam("category",$category);
		$stmt->bindParam("round",$round);
		$stmt->execute();
		$category4_questions = $stmt->fetchAll(PDO::FETCH_OBJ);
		$category4_name = $category4_questions[0]->cat_name;

		$category = 249;
		$stmt->bindParam("category",$category);
		$stmt->bindParam("round",$round);
		$stmt->execute();
		$category5_questions = $stmt->fetchAll(PDO::FETCH_OBJ);
		$category5_name = $category5_questions[0]->cat_name;

		$category = 770;
		$stmt->bindParam("category",$category);
		$stmt->bindParam("round",$round);
		$stmt->execute();
		$category6_questions = $stmt->fetchAll(PDO::FETCH_OBJ);
		$category6_name = $category6_questions[0]->cat_name;

		$db = null;
		echo '[{"cat_name": "'. $category1_name . '", "questions": ' . json_encode($category1_questions) .'},' .
			' { "cat_name": "'. $category2_name . '", "questions": ' . json_encode($category2_questions) .'},' .
			' { "cat_name": "'. $category3_name . '", "questions": ' . json_encode($category3_questions) .'},' .
			' { "cat_name": "'. $category4_name . '", "questions": ' . json_encode($category4_questions) .'},' .
			' { "cat_name": "'. $category5_name . '", "questions": ' . json_encode($category5_questions) .'},' .
			' { "cat_name": "'. $category6_name . '", "questions": ' . json_encode($category6_questions) .'}' .
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
