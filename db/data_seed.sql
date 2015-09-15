
insert into scorebord.sb_teams( code,name) values ('REDD','Red');
insert into scorebord.sb_teams( code,name) values ('LBLU','Light Blue');
insert into scorebord.sb_teams( code,name) values ('GRNN','Green');
insert into scorebord.sb_teams( code,name) values ('YLLW','Yellow');
insert into scorebord.sb_teams( code,name) values ('PINK','Pink');
insert into scorebord.sb_teams( code,name) values ('BLCK','Black');
insert into scorebord.sb_teams( code,name) values ('GOLD','Gold');
insert into scorebord.sb_teams( code,name) values ('SLVR','Silver');
insert into scorebord.sb_teams( code,name) values ('PRPL','Purple');
insert into scorebord.sb_teams( code,name) values ('NAVY','Navy');
insert into scorebord.sb_teams( code,name) values ('ORNG','Orange');
insert into scorebord.sb_teams( code,name) values ('MARO','Maroon');
insert into scorebord.sb_teams( code,name) values ('GRAY','Gray');
insert into scorebord.sb_teams( code,name) values ('WHIT','White');

insert into scorebord.sb_game(game_id,description) values ('12TM','Final!');
insert into scorebord.sb_game(game_id,description) values ('2TMS','Jeopardy!');

insert into scorebord.sb_button(btn_id) values ('BTN01');
insert into scorebord.sb_button(btn_id) values ('BTN02');
insert into scorebord.sb_button(btn_id) values ('BTN03');
insert into scorebord.sb_button(btn_id) values ('BTN04');
insert into scorebord.sb_button(btn_id) values ('BTN05');
insert into scorebord.sb_button(btn_id) values ('BTN06');
insert into scorebord.sb_button(btn_id) values ('BTN07');
insert into scorebord.sb_button(btn_id) values ('BTN08');
insert into scorebord.sb_button(btn_id) values ('BTN09');
insert into scorebord.sb_button(btn_id) values ('BTN10');
insert into scorebord.sb_button(btn_id) values ('BTN11');
insert into scorebord.sb_button(btn_id) values ('BTN12');

insert into scorebord.sb_team_btn_game_x(team_code,btn_code,game_id) values ('REDD','BTN01','12TM');
insert into scorebord.sb_team_btn_game_x(team_code,btn_code,game_id) values ('LBLU','BTN02','12TM');
insert into scorebord.sb_team_btn_game_x(team_code,btn_code,game_id) values ('GRNN','BTN03','12TM');
insert into scorebord.sb_team_btn_game_x(team_code,btn_code,game_id) values ('YLLW','BTN04','12TM');
insert into scorebord.sb_team_btn_game_x(team_code,btn_code,game_id) values ('PINK','BTN05','12TM');
insert into scorebord.sb_team_btn_game_x(team_code,btn_code,game_id) values ('BLCK','BTN06','12TM');
insert into scorebord.sb_team_btn_game_x(team_code,btn_code,game_id) values ('GOLD','BTN07','12TM');
insert into scorebord.sb_team_btn_game_x(team_code,btn_code,game_id) values ('SLVR','BTN08','12TM');
insert into scorebord.sb_team_btn_game_x(team_code,btn_code,game_id) values ('PRPL','BTN09','12TM');
insert into scorebord.sb_team_btn_game_x(team_code,btn_code,game_id) values ('NAVY','BTN10','12TM');
insert into scorebord.sb_team_btn_game_x(team_code,btn_code,game_id) values ('ORNG','BTN11','12TM');
insert into scorebord.sb_team_btn_game_x(team_code,btn_code,game_id) values ('MARO','BTN12','12TM');

insert into scorebord.sb_team_btn_game_x(team_code,btn_code,game_id) values ('GRAY','BTN01','2TMS');
insert into scorebord.sb_team_btn_game_x(team_code,btn_code,game_id) values ('GRAY','BTN02','2TMS');
insert into scorebord.sb_team_btn_game_x(team_code,btn_code,game_id) values ('GRAY','BTN03','2TMS');
insert into scorebord.sb_team_btn_game_x(team_code,btn_code,game_id) values ('GRAY','BTN04','2TMS');
insert into scorebord.sb_team_btn_game_x(team_code,btn_code,game_id) values ('GRAY','BTN05','2TMS');
insert into scorebord.sb_team_btn_game_x(team_code,btn_code,game_id) values ('GRAY','BTN06','2TMS');

insert into scorebord.sb_team_btn_game_x(team_code,btn_code,game_id) values ('WHIT','BTN07','2TMS');
insert into scorebord.sb_team_btn_game_x(team_code,btn_code,game_id) values ('WHIT','BTN08','2TMS');
insert into scorebord.sb_team_btn_game_x(team_code,btn_code,game_id) values ('WHIT','BTN09','2TMS');
insert into scorebord.sb_team_btn_game_x(team_code,btn_code,game_id) values ('WHIT','BTN10','2TMS');
insert into scorebord.sb_team_btn_game_x(team_code,btn_code,game_id) values ('WHIT','BTN11','2TMS');
insert into scorebord.sb_team_btn_game_x(team_code,btn_code,game_id) values ('WHIT','BTN12','2TMS');

insert into scorebord.sb_category( cat_id, cat_name) values (21,'Animals');
insert into scorebord.sb_category( cat_id, cat_name) values (105,'3 Letter Words');
insert into scorebord.sb_category( cat_id, cat_name) values (249,'Homophones');
insert into scorebord.sb_category( cat_id, cat_name) values (49,'Food');
insert into scorebord.sb_category( cat_id, cat_name) values (770,'Pop Music');
insert into scorebord.sb_category( cat_id, cat_name) values (26,'Fashion');
	insert into scoreboard.sb_category( cat_id, cat_name ) values (89, 'Double Talk');
		insert into scoreboard.sb_category( cat_id, cat_name ) values (999, 'Games');