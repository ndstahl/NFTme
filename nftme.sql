DROP DATABASE IF EXISTS nftme;

CREATE DATABASE nftme;

\c nftme;

CREATE TABLE IF NOT EXISTS nfts (
  id SERIAL UNIQUE PRIMARY KEY,
  nftImg varchar(450) NOT NULL,
  title varchar(45) NOT NULL,
  price numeric NOT NULL,
  info varchar(450) NOT NULL,
);

INSERT INTO
 nfts (nftImg, title, price, info)
VALUES
  ('../../../assets/nfts/Image 1-17-23 at 6.26 PM.jpg', 'Title', '8.99', 'description'),
  ('.../../../assets/nfts/Image 1-17-23 at 6.25 PM.jpg', 'Title', '6.99', 'description');
  