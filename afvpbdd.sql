CREATE DATABASE afvpbdd
CHARACTER
SET 'utf8';

USE afvpbdd;

/* -------------
Table Members
---------------*/

CREATE TABLE t_members (
    memb_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    memb_name VARCHAR
(50) NOT NULL,
    memb_firstname VARCHAR
(50) NOT NULL,
    memb_email VARCHAR
(50) NOT NULL,
    memb_password VARCHAR
(255) NOT NULL,
    memb_duty VARCHAR
(50) DEFAULT 'adherent',
    memb_subsdate DATE,
    memb_uptodate DATE,
    memb_banned BOOLEAN DEFAULT 0,
    memb_status ENUM
('registered', 'inregistration', 'tovalidate', 'rejected') DEFAULT 'tovalidate',
    memb_bio MEDIUMTEXT,
    memb_hospital VARCHAR
(50),
    memb_function VARCHAR
(50),
    memb_photo VARCHAR
(50),
    memb_city VARCHAR
(50),
    memb_degree VARCHAR
(150),
    role_id INT
) ENGINE=INNODB;


INSERT INTO t_members
    (memb_id, memb_name, memb_firstname, memb_email, memb_password, memb_duty, memb_subsdate, memb_uptodate, memb_banned, memb_status, memb_bio, memb_hospital, memb_function, memb_photo, memb_city, memb_degree, role_id)
VALUES
    (NULL, 'test', 'test', 'test@test.com', '$2b$10$hqUDp.K8TJ897QAhAn1oZ.KXfpJe2w3Wr7mt4tpGvCgOI8AZYzl3G', 'test', '2019-06-20', NULL, 0, 'tovalidate', 'test', 'test', 'test', 'test', 'test', 'test', NULL),
    (NULL, 'Rataxes', 'Habibo', 'rhinofunkys@gmail.com', '$2b$10$awaRHqTbF9fjkYEDtL0d7.HV3bs9yClbDeWYwtMetqCL.Le3esXmS', 'Whatever', '2019-06-20', NULL, 0, 'tovalidate', 'Awesome', 'Two Point Hospital', 'Big Boss', 'null', 'Paris', 'A lot', NULL),
    (NULL, 'The BOSS', 'Marine', 'marinemargaco.pros@gmail.com', '$2b$10$dx09CMN/OFs36WhtL.PoXu6QhV/NmMLBpr/G8ADDAoGVMbB3bIODG', 'Whatever', '2019-06-20', NULL, 0, 'tovalidate', 'Awesome', 'Two Point Hospital', 'Big Boss', 'null', 'Feucherolles', 'A lot', NULL),
    (NULL, 'El Kabouss', 'Hakim', 'elkabousshakims@hotmail.com', '$2b$10$R/ghN1srinWf2wyM8Ex2z.r2FQveYugfhVRgbTUbFgaLkSB/jADzy', '', '2019-06-20', NULL, 0, 'tovalidate', 'Great !', 'Henri Hospital', 'Director', 'null', 'Londres', 'Diplome generale en USA', NULL),
    (NULL, 'memb_', 'memb_', 'memb@gg.fr', '$2b$10$i4TVtFzHAMnMz7m07loQz.weqhKmrc1G89LmHwOWwF.z39GPxFicW', NULL, '2019-06-21', NULL, 0, 'tovalidate', 'memb_', 'memb_', NULL, 'C:\\fakepath\\.gitignore', 'memb_', 'memb_', NULL),
    (NULL, 'admin', 'admin', 'admin@gmail.com', '$2b$10$JjDzO/2jN58bB0JtungJAOZFBbKeY/rgE5nD6nmAErZhOkzQ8aFam', NULL, '2019-06-21', NULL, 0, 'tovalidate', 'admin', 'admin', NULL, '', 'admin', 'admin', 3),
    (NULL, 'superadmin', 'superadmin', 'superadmin@gmail.com', '$2b$10$WhP2qqvRpMANDhWrWOXyKegYIioVjXriUndza3UScMkFav4eTKzoC', NULL, '2019-06-21', NULL, 0, 'tovalidate', 'superadmin', 'superadmin', NULL, '', 'superadmin', 'superadmin', 4),
    (NULL, 'superadmin', 'superadmin', 'superadmin@gmail.com', '$2b$10$WhP2qqvRpMANDhWrWOXyKegYIioVjXriUndza3UScMkFav4eTKzoC', NULL, '2019-06-21', NULL, 0, 'tovalidate', 'superadmin', 'superadmin', NULL, '', 'superadmin', 'superadmin', 4),
    (NULL, 'Tran', 'Lap', 'lapb6@yahoo.com', '$2b$10$OvosUVXbfOp01tTQNvyu7O3cNqJRczomXYxErHlLITVp2Bq97JNEW', 'adherent', '2019-07-11', NULL, 0, 'tovalidate', 'ma bio', 'mon hopital', 'ma fonction', '', 'Paris', 'mon diplôme', NULL);
/* -------------
Table Roles
---------------*/

CREATE TABLE t_roles (
    role_id INT PRIMARY KEY AUTO_INCREMENT,
    role_type ENUM
('adherent', 'moderateur', 'administrateur', 'superadministrateur') DEFAULT 'adherent'
) ENGINE=INNODB;

INSERT INTO t_roles
    (role_id, role_type)
VALUES
    (NULL, 'adherent'),
    (NULL, 'moderateur'),
    (NULL, 'administrateur'),
    (NULL, 'superadministrateur');


/* -------------
Table Payment
---------------*/

CREATE TABLE t_payment (
    paym_id INT PRIMARY KEY AUTO_INCREMENT,
    paym_status BOOLEAN,
    paym_year DATE,
    memb_id INT
) ENGINE=INNODB;


/* -------------
Table Imagery
---------------*/

CREATE TABLE t_imagery (
    imag_id INT PRIMARY KEY AUTO_INCREMENT,
    imag_title VARCHAR
(80),
    imag_body MEDIUMTEXT,
    imag_path VARCHAR
(80),
    post_id INT
) ENGINE=INNODB;


/* -------------
Table Imagery Post
---------------*/

CREATE TABLE t_imagerypost (
    post_id INT PRIMARY KEY AUTO_INCREMENT,
    post_title VARCHAR
(50),
    post_subtitle VARCHAR
(50),
    post_body MEDIUMTEXT,
    post_created DATE,
    post_updated DATE,
    post_images VARCHAR
(255),
    memb_id INT
) ENGINE=INNODB;


/* -------------
Table Education
---------------*/

CREATE TABLE t_education (
    educ_id INT PRIMARY KEY AUTO_INCREMENT,
    educ_title TEXT,
    educ_created DATE,
    educ_updated DATE,
    educ_body LONGTEXT,
    educ_summary TEXT,
    memb_id INT
)ENGINE=INNODB;

/* -------------
Table Forum Post
---------------*/

CREATE TABLE t_forum_post (
    foru_id INT PRIMARY KEY AUTO_INCREMENT,
    foru_title VARCHAR
(50),
    foru_body LONGTEXT,
    foru_status ENUM
('approved', 'rejected', 'inreview') DEFAULT 'inreview',
    foru_idparent INT,
    foru_date DATE,
    foru_update DATE,
    cate_id INT,
    memb_id INT,
    memb_idmoderateur INT
)ENGINE=INNODB;

/* -------------
Table Catégories
---------------*/

CREATE TABLE t_categories (
    cate_id INT PRIMARY KEY AUTO_INCREMENT,
    cate_type VARCHAR
(50)
) ENGINE=INNODB;


/* Foreign Keys */

ALTER TABLE t_members ADD FOREIGN KEY (role_id) REFERENCES t_roles(role_id);
ALTER TABLE t_payment ADD FOREIGN KEY (memb_id) REFERENCES t_members(memb_id);
ALTER TABLE t_imagery ADD FOREIGN KEY (post_id) REFERENCES t_imagerypost(post_id);
ALTER TABLE t_imagerypost ADD FOREIGN KEY (memb_id) REFERENCES t_members(memb_id);
ALTER TABLE t_education ADD FOREIGN KEY (memb_id) REFERENCES t_members(memb_id);
ALTER TABLE t_forum_post ADD FOREIGN KEY (cate_id) REFERENCES t_categories(cate_id);
ALTER TABLE t_forum_post ADD FOREIGN KEY (memb_id) REFERENCES t_members(memb_id);
ALTER TABLE t_forum_post ADD FOREIGN KEY (memb_idmoderateur) REFERENCES t_members(memb_id);





