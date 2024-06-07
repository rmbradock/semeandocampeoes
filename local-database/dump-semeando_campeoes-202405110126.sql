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
) ENGINE=InnoDB AUTO_INCREMENT=37 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cidade`
--

LOCK TABLES `cidade` WRITE;
/*!40000 ALTER TABLE `cidade` DISABLE KEYS */;
INSERT INTO `cidade` VALUES (19,'Campo Mourao'),(20,'Rua Akibono'),(21,'Campo Mourão'),(22,'Campo Mourao'),(23,'Campo Mourão'),(24,''),(25,'São Paulo'),(26,'São Paulo'),(27,'São Paulo'),(28,'São Paulo'),(29,'São Paulo'),(30,'São Paulo'),(31,'São Paulo'),(32,'São Paulo'),(33,'São Paulo'),(34,'asdasd'),(35,'asdasd'),(36,'asdasd');
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
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `endereco`
--

LOCK TABLES `endereco` WRITE;
/*!40000 ALTER TABLE `endereco` DISABLE KEYS */;
INSERT INTO `endereco` VALUES (8,19,'Akibono','723','Jd Lar Parana'),(9,20,'Rua Akibono','723','Jd Lar Parana'),(10,21,'Rua Akibono','723','Jd Lar Parana'),(11,22,'Duque de caxias','1215','Jd Lar Parana'),(12,23,'','123','lasn'),(13,24,'','',''),(14,25,'Rua das Flores','123','Centro'),(15,26,'Rua das Flores','123','Centro'),(16,27,'Rua das Flores','123','Centro'),(17,28,'Rua das Flores','123','Centro'),(18,29,'Rua das Flores','123','Centro'),(19,30,'Rua das Flores','123','Centro'),(20,31,'Rua das Flores','123','Centro'),(21,32,'Rua das Flores','123','Centro'),(22,33,'Rua das Flores','123','Centro'),(23,34,'dsadsadasdasd','123','sad'),(24,35,'sadasd','123','asdasd'),(25,36,'aaa','12','aaaaaa');
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
INSERT INTO `loginaluno` VALUES (1,'lucas','123'),(2,'ricardo','123');
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
INSERT INTO `loginprofessor` VALUES (1,'grander','123'),(2,'batista','123');
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
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `participante`
--

LOCK TABLES `participante` WRITE;
/*!40000 ALTER TABLE `participante` DISABLE KEYS */;
INSERT INTO `participante` VALUES (17,'Ricardo Maciel Batista Filho','2007-12-17','44998130695','Ricardo',1,8,11),(18,'Heloisa Garaluz Batista','2005-05-21','44998130695','Heloisa',1,9,14),(19,'Ricardo Maciel Batista','1975-11-29','44998130695','',1,10,17),(21,'Guilherme','2012-12-12','44998130695','',2,12,9);
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

-- Dump completed on 2024-05-11  1:26:02
