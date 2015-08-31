DROP TABLE `rsak`.`sb_teams`;
CREATE TABLE `rsak`.`sb_teams` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `code` varchar(10) NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`, `code`,`name`));

drop table rsak.sb_game;
create table rsak.sb_game (
	id int not null auto_increment,
	game_id varchar(10) not null,
	description varchar(10) not null,
	primary key (id),
	unique key game_uk(game_id, description)
);

drop table rsak.sb_button;
create table rsak.sb_button (
	id int not null auto_increment,
	btn_id varchar(10) not null,
    primary key (id),
    unique key sb_button_uk (btn_id)
);

DROP TABLE rsak.sb_team_btn_game_x; 
CREATE TABLE rsak.sb_team_btn_game_x (
	id int not null auto_increment,
    team_code varchar(10) not null,
    btn_code varchar(10) not null,
    game_id varchar(10) not null,
    primary key (id),
    unique key sb_team_btn_game_x_uk (team_code,btn_code,game_id)
);

DROP TABLE rsak.sb_category;
CREATE TABLE rsak.sb_category (
	id int not null auto_increment,
    cat_id int not null,
    cat_name varchar(20) not null,    
    primary key (id),
    unique key sb_team_btn_game_x_uk (cat_id,cat_name)
);

drop table rsak.sb_current_team;
create table rsak.sb_current_team(
  code varchar(10) not null,
  primary key (code)
);

drop table rsak.sb_question;
create table rsak.sb_question(
  id int not null auto_increment,
  category_id int not null,
  answer varchar(50) not null,
  question varchar(255) not null,
  airdate varchar(25) not null,
  insdate date not null,
  amount int not null,
  primary key (id),
  unique key sb_question_uk (category_id, answer,question,airdate,amount)
);
