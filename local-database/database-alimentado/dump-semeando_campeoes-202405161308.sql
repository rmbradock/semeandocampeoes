-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: semeando_campeoes
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `centro_de_treinamento`
--

DROP TABLE IF EXISTS `centro_de_treinamento`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `centro_de_treinamento` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `centro_de_treinamento`
--

LOCK TABLES `centro_de_treinamento` WRITE;
/*!40000 ALTER TABLE `centro_de_treinamento` DISABLE KEYS */;
INSERT INTO `centro_de_treinamento` VALUES (1,'Centro'),(2,'Lar Paraná'),(3,'Iretama'),(4,'???');
/*!40000 ALTER TABLE `centro_de_treinamento` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cidade`
--

DROP TABLE IF EXISTS `cidade`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cidade` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome_cidade` varchar(45) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=83 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cidade`
--

LOCK TABLES `cidade` WRITE;
/*!40000 ALTER TABLE `cidade` DISABLE KEYS */;
INSERT INTO `cidade` VALUES (19,'Campo Mourao'),(20,'Rua Akibono'),(21,'Campo Mourão'),(22,'Campo Mourao'),(23,'Campo Mourão'),(24,''),(25,'São Paulo'),(26,'São Paulo'),(27,'São Paulo'),(28,'São Paulo'),(29,'São Paulo'),(30,'São Paulo'),(31,'São Paulo'),(32,'São Paulo'),(33,'São Paulo'),(34,'asdasd'),(35,'asdasd'),(36,'asdasd'),(37,''),(38,''),(39,''),(40,''),(41,''),(42,''),(43,'Campo Mourão'),(44,'Iretama'),(45,'Campo Mourao'),(46,''),(47,'Peabiru'),(48,'Campo Mourao'),(49,'Campo Mourao'),(50,'Campo Mourao'),(51,'Campo Mourao'),(52,'Campo Mourao'),(53,''),(54,'Campo Mourao'),(55,'Campo Mourao'),(56,'Campo Mourao'),(57,'Campo Mourao'),(58,'Campo Mourão'),(59,'Campo Mourão'),(60,'Campo Mourão'),(61,'Campo Mourão'),(62,'Campo Mourão'),(63,'Campo Mourão'),(64,'Campo Mourão'),(65,'Campo Mourão'),(66,'Campo Mourão'),(67,'Campo Mourão'),(68,'Campo Mourão'),(69,'Campo Mourão'),(70,'Campo Mourão'),(71,'Campo Mourão'),(72,'Campo Mourão'),(73,'Campo Mourão'),(74,'Campo Mourão'),(75,'Campo Mourão'),(76,'Campo Mourão'),(77,'Campo Mourão'),(78,'Campo Mourão'),(79,'Campo Mourão'),(80,'Campo Mourão'),(81,'Iretama'),(82,'Campo Mourão');
/*!40000 ALTER TABLE `cidade` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `endereco`
--

DROP TABLE IF EXISTS `endereco`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `endereco` (
  `id` int NOT NULL AUTO_INCREMENT,
  `id_cidade` int NOT NULL,
  `rua` varchar(100) NOT NULL,
  `numero` varchar(100) NOT NULL,
  `bairro` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `endereco_cidade_FK` (`id_cidade`),
  CONSTRAINT `endereco_cidade_FK` FOREIGN KEY (`id_cidade`) REFERENCES `cidade` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=72 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `endereco`
--

LOCK TABLES `endereco` WRITE;
/*!40000 ALTER TABLE `endereco` DISABLE KEYS */;
INSERT INTO `endereco` VALUES (8,19,'','','Lar Parana'),(9,20,'Rua Akibono','723','Jd Lar Parana'),(10,21,'Rua Akibono','723','Jd Lar Parana'),(11,22,'Duque de caxias','1215','Jd Lar Parana'),(12,23,'','123','lasn'),(13,24,'','',''),(14,25,'Rua das Flores','123','Centro'),(15,26,'Rua das Flores','123','Centro'),(16,27,'Rua das Flores','123','Centro'),(17,28,'Rua das Flores','123','Centro'),(18,29,'Rua das Flores','123','Centro'),(19,30,'Rua das Flores','123','Centro'),(20,31,'Rua das Flores','123','Centro'),(21,32,'Rua das Flores','123','Centro'),(22,33,'Rua das Flores','123','Centro'),(23,34,'dsadsadasdasd','123','sad'),(24,35,'sadasd','123','asdasd'),(25,36,'aaa','12','aaaaaa'),(26,37,'','',''),(27,38,'','',''),(28,39,'','',''),(29,40,'','',''),(30,41,'','',''),(31,42,'','',''),(32,43,'','','Lar Parana'),(33,44,'','','Centro'),(34,45,'','','Lar Parana'),(35,46,'','',''),(36,47,'','','Vila Rural'),(37,48,'','','Lar Parana'),(38,49,'','','Lar Parana'),(39,50,'','','Lar Parana'),(40,51,'Duque de Caxias','','Lar Parana'),(41,52,'','','Lar Parana'),(42,53,'','',''),(43,54,'','',''),(44,55,'','','Lar Parana'),(45,56,'','','Lar Parana'),(46,57,'','',''),(47,58,'','','Lar Parana'),(48,59,'','','Lar Parana'),(49,60,'','',''),(50,61,'Rua Akibono','723',''),(51,62,'','',''),(52,63,'Rua Akibono','723',''),(53,64,'','',''),(54,65,'','',''),(55,66,'','',''),(56,67,'','','Lar Parana'),(57,68,'','','Lar Parana'),(58,69,'','',''),(59,70,'','',''),(60,71,'','',''),(61,72,'','',''),(62,73,'','',''),(63,74,'','',''),(64,75,'','',''),(65,76,'','','Lar Parana'),(66,77,'','',''),(67,78,'','',''),(68,79,'','',''),(69,80,'','',''),(70,81,'','','Centro'),(71,82,'','','');
/*!40000 ALTER TABLE `endereco` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `faixa`
--

DROP TABLE IF EXISTS `faixa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `faixa` (
  `id` int NOT NULL AUTO_INCREMENT,
  `cor_da_faixa` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `faixa`
--

LOCK TABLES `faixa` WRITE;
/*!40000 ALTER TABLE `faixa` DISABLE KEYS */;
INSERT INTO `faixa` VALUES (1,'Branca'),(2,'Cinza/Branca'),(3,'Cinza'),(4,'Cinza/Preta'),(5,'Amarela/Branca'),(6,'Amarela'),(7,'Amarela/Preta'),(8,'Laranja/Branca'),(9,'Laranja'),(10,'Laranja/Preta'),(11,'Verde/Branca'),(12,'Verde'),(13,'Verde/Preta'),(14,'Azul'),(15,'Roxa'),(16,'Marrom'),(17,'Preta');
/*!40000 ALTER TABLE `faixa` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fila_de_espera`
--

DROP TABLE IF EXISTS `fila_de_espera`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `fila_de_espera` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `data_de_nascimento` date NOT NULL,
  `telefone` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `responsavel` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `id_centro_de_treinamento` int DEFAULT NULL,
  `id_endereco` int DEFAULT NULL,
  `id_faixa` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `Pessoa_centro_de_treinamento_FK` (`id_centro_de_treinamento`) USING BTREE,
  KEY `Pessoa_endereco_FK` (`id_endereco`) USING BTREE,
  KEY `participante_faixa_FK` (`id_faixa`) USING BTREE,
  CONSTRAINT `participante_faixa_FK_copy` FOREIGN KEY (`id_faixa`) REFERENCES `faixa` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `Pessoa_centro_de_treinamento_FK_copy` FOREIGN KEY (`id_centro_de_treinamento`) REFERENCES `centro_de_treinamento` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  CONSTRAINT `Pessoa_endereco_FK_copy` FOREIGN KEY (`id_endereco`) REFERENCES `endereco` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fila_de_espera`
--

LOCK TABLES `fila_de_espera` WRITE;
/*!40000 ALTER TABLE `fila_de_espera` DISABLE KEYS */;
INSERT INTO `fila_de_espera` VALUES (4,'João Silva','1995-03-15','(00) 1234-5678','Maria Silva',1,21,3),(5,'João Silva','1995-03-15','(00) 44 1234-5678','Maria Silva',1,22,3),(6,'asdasd','2000-11-11','5544991283923','asdasd',2,23,15),(7,'testefrontfiladeespra','2000-12-12','5544991354595','asdasd',2,24,15),(8,'dsdasd','1999-11-11','5592929999999','asdasd',2,25,8);
/*!40000 ALTER TABLE `fila_de_espera` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `loginaluno`
--

DROP TABLE IF EXISTS `loginaluno`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `loginaluno` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario` varchar(100) NOT NULL,
  `senha` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `loginaluno`
--

LOCK TABLES `loginaluno` WRITE;
/*!40000 ALTER TABLE `loginaluno` DISABLE KEYS */;
INSERT INTO `loginaluno` VALUES (1,'admin','admin');
/*!40000 ALTER TABLE `loginaluno` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `loginprofessor`
--

DROP TABLE IF EXISTS `loginprofessor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `loginprofessor` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `senha` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `loginprofessor`
--

LOCK TABLES `loginprofessor` WRITE;
/*!40000 ALTER TABLE `loginprofessor` DISABLE KEYS */;
INSERT INTO `loginprofessor` VALUES (1,'admin','admin');
/*!40000 ALTER TABLE `loginprofessor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `participante`
--

DROP TABLE IF EXISTS `participante`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `participante` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `data_de_nascimento` date NOT NULL,
  `telefone` varchar(100) NOT NULL,
  `responsavel` varchar(100) DEFAULT NULL,
  `id_centro_de_treinamento` int DEFAULT NULL,
  `id_endereco` int DEFAULT NULL,
  `id_faixa` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `Pessoa_centro_de_treinamento_FK` (`id_centro_de_treinamento`),
  KEY `Pessoa_endereco_FK` (`id_endereco`),
  KEY `participante_faixa_FK` (`id_faixa`),
  CONSTRAINT `participante_faixa_FK` FOREIGN KEY (`id_faixa`) REFERENCES `faixa` (`id`),
  CONSTRAINT `Pessoa_centro_de_treinamento_FK` FOREIGN KEY (`id_centro_de_treinamento`) REFERENCES `centro_de_treinamento` (`id`),
  CONSTRAINT `Pessoa_endereco_FK` FOREIGN KEY (`id_endereco`) REFERENCES `endereco` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=68 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `participante`
--

LOCK TABLES `participante` WRITE;
/*!40000 ALTER TABLE `participante` DISABLE KEYS */;
INSERT INTO `participante` VALUES (1,'Ricardo Maciel Batista','1975-11-29','44998130695','',1,10,17),(2,'Dionata Silva Benedito','1988-04-18','','',1,8,16),(3,'Heloisa Garaluz Batista','2005-05-21','44998130695','Heloisa',1,9,14),(4,'Ana Beatriz Protasio Bonete','2005-09-26','','',1,26,1),(5,'Ana Julia Escoriça','2007-10-30','','',1,27,1),(6,'Beatriz Valerita da Silva','2000-04-02','','',1,28,14),(7,'Breno da silva Inacio','2014-05-23','','',1,29,1),(8,'Bruna Poliana Silva','1991-12-19','','',1,30,1),(9,'Cecilia Yumi Zampar','2007-01-26','','',1,31,1),(10,'Daniel E L Krzischi','2008-11-18','4432192750','Newton',1,32,9),(11,'Donizette da Silva Pereira','1991-03-30','','',3,33,1),(12,'Ederson Kevin Guirunas de Oliveira','2010-03-21','','Newton',1,34,12),(13,'Felipe G S Oliveira','2014-05-20','','',1,35,8),(14,'Gabrielle Rodrigues','2010-02-03','','Dionata',1,36,12),(15,'Guilherme Vaz Berdinski','2016-08-05','44999401973','Vanessa Vaz Berdinski',1,37,6),(16,'Isabelly Kohut Melo','2015-04-30','44991847110','Jaqueline K Melo',2,38,7),(17,'Luiz Flavio','2010-07-09','44999810931','Flavio',2,39,9),(18,'Matheus Felipe Teodoro','2008-11-18','44988034300','Daniele',1,40,12),(19,'Matheus Henrique Martinelli T Santos','2010-07-28','','',2,41,11),(20,'Milena Romualdo Benedito','2010-01-01','','Dionata',1,42,12),(22,'Rebecca Rosa','2013-01-21','','Thiago',2,45,7),(23,'Santhiago Garcia','2005-09-14','44999872688','',1,46,1),(24,'Gabriel Padrilha Mazzo','2011-03-02','44998995694','Jaqueline',2,47,1),(25,'Davi Luiz Machado da Conceição','2016-09-14','44999222424','Andressa S Machado',2,48,4),(26,'Gustavo Borges Macedo','2013-06-10','44998913595','Cairo L Macedo',1,49,8),(27,'Camilly Ambrosio da Silva','2013-12-17','44991072412','Yara M Ambrosio',1,50,8),(28,'Diego Henrique Leopoldino de Souza','2011-03-07','44997359727','Wellita Leopoldino',1,51,9),(29,'Danilo da Silva Ildebrando Moreira','2011-05-23','44999178252','Nivaldo I Moreira',1,52,1),(30,'Sophia Calixto Amaral','2014-03-04','44991783965','Jhonatan Amaral',1,53,9),(31,'Julio Cesar Machado Leite','2013-11-20','44999382011','Inajara Machado',1,54,6),(32,'Murilo dos santos Moraes','2012-07-03','44999942423','Elias de Moraes',1,55,10),(33,'Maria Julia Machado','2013-04-08','44999222424','Andressa',2,56,7),(34,'Heloise Claro de Oliveira','2015-03-04','44998195031','Marcia Claro',2,57,6),(35,'Luiz Mariano Costa','2013-03-01','44999262295','Mayara Carla F',1,58,1),(36,'Tiago dos Santos Vaz','2006-08-11','44998307112','Marcos Vaz',1,59,1),(37,'João Miguel Libanio Iora','2014-03-21','44999912195','Liliane C L Iora',1,60,7),(38,'Joaquim Pedrolo HeleBrando','2014-03-10','44999737031','Evelyn Pedrolo',1,61,8),(39,'Emanuel carlos Zaramella Opaloski','2015-02-23','44999321187','Carlos Andre Opaloski',1,62,6),(40,'João Gabriel Zaramella Opaloski','2013-07-01','44998020926','Carlos Andre Opaloski',1,63,5),(41,'Julia Borges Macedo','2015-11-18','44988507610','Cairo L Macedo',1,64,6),(42,'Eduardo Andre da silva B','2013-04-09','44988294472','Caroline A da silva',2,65,1),(43,'Cinthya Landes Batista','2014-12-05','44999376122','João Batista',1,66,1),(44,'Moises da Silva Pereira','2016-05-21','44991171216','Caludirene da S F Pereira',1,67,1),(45,'Carlos Miguel Teodoro da silva','2015-08-16','44988034300','Daniele Teodoro',2,68,6),(46,'Heitor Vilela de Oliveira Soares','2018-08-08','44998777444','Francimary',1,69,1),(66,'Diego Antonio de Oliveira','1990-01-01','449984190600','',3,70,15),(67,'Rebeca Martins','2015-03-17','44988394659','Larissa',2,71,6);
/*!40000 ALTER TABLE `participante` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'semeando_campeoes'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-16 13:08:19
