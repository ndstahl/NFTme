DROP DATABASE IF EXISTS nftme;

CREATE DATABASE nftme;

\c nftme;

CREATE TABLE IF NOT EXISTS nfts_me (
  id SERIAL UNIQUE PRIMARY KEY,
  nftImg varchar(450) NOT NULL,
  title varchar(45) NOT NULL,
  info varchar(450) NOT NULL,
  category varchar (45) NOT NULL
);

INSERT INTO
 nfts_me (nftImg, title, info, category)
VALUES
  ('https://mpb-site.s3.us-east-2.amazonaws.com/imgs/winter-22/ar1.png','DesireInspire','A collection dedicated to the young black queens','art'),
  ('https://mpb-site.s3.us-east-2.amazonaws.com/imgs/winter-22/ar2.jpg','WeBloom','A flower untouched will bloom','art'),
  ('https://mpb-site.s3.us-east-2.amazonaws.com/imgs/winter-22/ar3.jpg','MoonMunchies','If you are a McDonalds loverthis one is for you.','art'),
  ('https://mpb-site.s3.us-east-2.amazonaws.com/imgs/winter-22/a1.png','SilverPawKing','4 cats of royality survives after world desruction determined to rebuild their empire','animals'),
  ('https://mpb-site.s3.us-east-2.amazonaws.com/imgs/winter-22/a2.png','GoldPawQueen4','4 cats of royality survives after world desruction determined to rebuild their empire' ,'animals'),
  ('https://mpb-site.s3.us-east-2.amazonaws.com/imgs/winter-22/a3.jpg','GoldenTinyPaw','4 cats of royality survives after world desruction determined to rebuild their empire' ,'animals'),
  ('https://mpb-site.s3.us-east-2.amazonaws.com/imgs/winter-22/n1.png','EarthSeed','Give back to the Earth, as it gives unto you!','nature'),
  ('https://mpb-site.s3.us-east-2.amazonaws.com/imgs/winter-22/n1.jpg','ReflectLake','Where do you go when you need to reflect? Can you hear the lake calling to you?','nature'),
  ('https://mpb-site.s3.us-east-2.amazonaws.com/imgs/winter-22/n3.jpg','DayBreak','You adventure awaits, here is a glimpse of mine.','nature'),
  ('https://mpb-site.s3.us-east-2.amazonaws.com/imgs/winter-22/a4.jpg','PawPrincess','4 cats of royality survives after world desruction determined to rebuild their empire ','animal'),
  ('https://mpb-site.s3.us-east-2.amazonaws.com/imgs/winter-22/ar4.png','QueenKorra','A collection dedicated to the young black queens','art'),
  ('https://mpb-site.s3.us-east-2.amazonaws.com/imgs/winter-22/n4.png','SunsetLake','A get away to a piece of paradise','nature');

  

  /*
  TODO: verify the tables we need for the DB - nfts, users,
  verify the coloum name for each table

  */



CREATE TABLE IF NOT EXISTS users_me (
  id SERIAL UNIQUE PRIMARY KEY,
  userName varchar(450) NOT NULL,
  userPassword varchar(45) NOT NULL,
  userImg varchar(450) NOT NULL
);

INSERT INTO
 users_me (userName, userPassword, userImg)
VALUES
  ('Caylee', 'nftme',''),
  ('Kia', 'nftme',''),
  ('AJ', 'nftme',''),
  ('Nick', 'nftme','');
  