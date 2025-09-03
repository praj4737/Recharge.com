CREATE DATABASE  IF NOT EXISTS `data_add_on_system_db_test` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `data_add_on_system_db_test`;
-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: data_add_on_system_db_test
-- ------------------------------------------------------
-- Server version	8.1.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `address_details`
--

DROP TABLE IF EXISTS `address_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `address_details` (
  `id` int NOT NULL AUTO_INCREMENT,
  `status` bit(1) NOT NULL,
  `user_id` int DEFAULT NULL,
  `address_line1` varchar(255) NOT NULL,
  `address_line2` varchar(255) NOT NULL,
  `address_line3` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `country` varchar(255) NOT NULL,
  `pincode` varchar(255) NOT NULL,
  `state` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_ib5elppv29nrjiu4yus94g8o8` (`user_id`),
  CONSTRAINT `FKf8pnbxbefk4pfw4wnd57fudhv` FOREIGN KEY (`user_id`) REFERENCES `user_details` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `address_details`
--

LOCK TABLES `address_details` WRITE;
/*!40000 ALTER TABLE `address_details` DISABLE KEYS */;
INSERT INTO `address_details` VALUES (1,_binary '\0',NULL,'ratan tola','sadasdas','asdasd','','India','801108','Bihar'),(2,_binary '\0',NULL,'bnglr','bnglr','bnglr','','india','560077','karnataka'),(3,_binary '\0',NULL,'benaras','uttarpradesh','india','','India','10000002','UP');
/*!40000 ALTER TABLE `address_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contact_details`
--

DROP TABLE IF EXISTS `contact_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `contact_details` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `alternate_mobile_number` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `registered_mobile_number` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_tjdga9lnq5wvyyulucv3iuehf` (`user_id`),
  CONSTRAINT `FKngxheiwtc1nilnwaay1d92u44` FOREIGN KEY (`user_id`) REFERENCES `user_details` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contact_details`
--

LOCK TABLES `contact_details` WRITE;
/*!40000 ALTER TABLE `contact_details` DISABLE KEYS */;
INSERT INTO `contact_details` VALUES (1,NULL,'7061597110','praj4737@gmail.com','7061597110'),(2,NULL,'8639322892','reddysidhuvinay@gmail.com','8639322892'),(3,NULL,'63885 22307','ashuu848@gmail.com','63885 22307');
/*!40000 ALTER TABLE `contact_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `credentials`
--

DROP TABLE IF EXISTS `credentials`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `credentials` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_ry431gkw9ueu8xq0yfbys0d1d` (`user_id`),
  CONSTRAINT `FKhxe09s0xylsg5hhfff1v0ffjd` FOREIGN KEY (`user_id`) REFERENCES `user_details` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `credentials`
--

LOCK TABLES `credentials` WRITE;
/*!40000 ALTER TABLE `credentials` DISABLE KEYS */;
INSERT INTO `credentials` VALUES (1,1,'praj4737@gmail.com','123456789'),(2,2,'reddysidhuvinay@gmail.com','123456789'),(3,3,'ashuu848@gmail.com','123456789');
/*!40000 ALTER TABLE `credentials` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `payments_details`
--

DROP TABLE IF EXISTS `payments_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `payments_details` (
  `amount` double NOT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `payment_date` date DEFAULT NULL,
  `payment_time` time(6) DEFAULT NULL,
  `status` bit(1) NOT NULL,
  `user_id` int DEFAULT NULL,
  `payment_type` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK50ci5dn1dg93k5dy827gcghq0` (`user_id`),
  CONSTRAINT `FK50ci5dn1dg93k5dy827gcghq0` FOREIGN KEY (`user_id`) REFERENCES `user_details` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `payments_details`
--

LOCK TABLES `payments_details` WRITE;
/*!40000 ALTER TABLE `payments_details` DISABLE KEYS */;
INSERT INTO `payments_details` VALUES (199,22,'2025-09-02','03:18:40.000000',_binary '',1,'upi'),(89,23,'2025-09-02','03:42:29.000000',_binary '',1,'upi'),(15,24,'2025-09-02','10:01:16.500000',_binary '',1,'upi'),(15,25,'2025-09-02','10:05:45.463000',_binary '',1,'upi');
/*!40000 ALTER TABLE `payments_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recharge_plans`
--

DROP TABLE IF EXISTS `recharge_plans`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `recharge_plans` (
  `data_at_high_speed` double NOT NULL,
  `end_date` date DEFAULT NULL,
  `generation_type` int NOT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `price` double NOT NULL,
  `sms` int NOT NULL,
  `start_date` date DEFAULT NULL,
  `status` bit(1) NOT NULL,
  `total_data` int NOT NULL,
  `validity` int NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `voice` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recharge_plans`
--

LOCK TABLES `recharge_plans` WRITE;
/*!40000 ALTER TABLE `recharge_plans` DISABLE KEYS */;
INSERT INTO `recharge_plans` VALUES (1.5,'2025-09-30',1,1,199,100,'2025-08-31',_binary '',45,28,'Daily 1.5GB, 100 SMS/day, Unlimited Calls','Smart Saver 199','Prepaid','Unlimited'),(2,'2025-10-15',1,2,299,100,'2025-08-31',_binary '',56,28,'2GB/day, 100 SMS/day, Unlimited Voice','Power Pack 299','Prepaid','Unlimited'),(0,'2025-09-30',2,3,149,300,'2025-08-31',_binary '',0,28,'300 SMS, No Data, Unlimited Calls','Talktime 149','Prepaid','Unlimited'),(3,'2025-11-30',1,4,499,100,'2025-08-31',_binary '',84,56,'3GB/day, 100 SMS/day, Unlimited Voice','Max Data 499','Prepaid','Unlimited'),(1,'2025-12-31',3,5,999,1000,'2025-08-31',_binary '',120,90,'1GB/day, 1000 SMS, Unlimited Calls for 90 days','Long Validity 999','Prepaid','Unlimited'),(0,'2025-09-15',2,6,79,0,'2025-08-31',_binary '',0,14,'Unlimited Voice, No Data or SMS','Voice Only 79','Prepaid','Unlimited'),(1.5,'2025-09-30',1,7,219,100,'2025-08-31',_binary '',42,28,'1.5GB/day, 100 SMS/day, Unlimited Voice','Balanced Pack 219','Prepaid','Unlimited'),(1,'2025-09-03',4,8,15,0,'2025-09-02',_binary '',1,1,'1GB high-speed data for 1 day','Quick Boost 1GB','Addon','None'),(5,'2025-09-08',4,9,49,0,'2025-09-02',_binary '',10,2,'5GB/day for 2 days','Weekend Streamer 10GB','Addon','None'),(2,'2025-09-09',4,10,89,0,'2025-09-02',_binary '',14,7,'2GB/day for 7 days','Weekly Surf 14GB','Addon','None'),(1,'2025-10-01',4,11,199,0,'2025-09-02',_binary '',30,30,'1GB/day for 30 days','Monthly Top-Up 30GB','Addon','None'),(10,'2025-09-03',4,12,99,0,'2025-09-02',_binary '',10,1,'10GB lump sum data for 1 day','Heavy Duty 10GB','Addon','None'),(0,'2025-11-01',4,13,299,0,'2025-09-02',_binary '',50,60,'50GB bulk data valid for 60 days','Bulk Data 50GB','Addon','None'),(2,'2025-09-03',4,14,29,0,'2025-09-02',_binary '',2,1,'2GB usable between 12AM–6AM only','Night Rider 2GB','Addon','None'),(0,'2025-09-10',4,15,149,0,'2025-09-02',_binary '',25,7,'25GB for video streaming, valid 7 days','Stream Pack 25GB','Addon','None'),(3,'2025-09-05',4,16,59,0,'2025-09-02',_binary '',6,2,'3GB/day for 2 days, ideal for gaming','Gamer’s Boost 6GB','Addon','None'),(0,'2025-12-01',4,17,499,0,'2025-09-02',_binary '',100,90,'100GB bulk data valid for 90 days','Long Haul 100GB','Addon','None'),(2.5,'2025-10-05',1,18,249,150,'2025-09-02',_binary '',70,28,'2.5GB/day, 150 SMS/day, Unlimited Calls + OTT access','Festive Combo 249','Special','Unlimited'),(3,'2025-10-15',1,19,349,200,'2025-09-02',_binary '',84,28,'3GB/day, 200 SMS/day, Unlimited Voice + ₹50 Cashback','Cashback Pack 349','Special','Unlimited'),(1.5,'2025-09-25',1,20,199,100,'2025-09-02',_binary '',42,28,'1.5GB/day, 100 SMS/day, Unlimited Calls + Free Caller Tune','Caller Tune 199','Special','Unlimited'),(4,'2025-10-10',1,21,399,150,'2025-09-02',_binary '',112,28,'4GB/day, 150 SMS/day, Unlimited Voice + Weekend Data Boost','Weekend Boost 399','Special','Unlimited'),(2,'2025-09-20',1,22,299,100,'2025-09-02',_binary '',56,28,'2GB/day, 100 SMS/day, Unlimited Voice + ₹20 Talktime Bonus','Talktime Bonus 299','Special','Unlimited'),(0,'2025-09-15',2,23,99,0,'2025-09-02',_binary '',1,10,'Unlimited Voice + 1GB Data for 10 days','Mini Combo 99','Special','Unlimited'),(1,'2025-10-05',1,24,149,50,'2025-09-02',_binary '',15,15,'1GB/day, 50 SMS/day, Unlimited Calls + App Coupons','Coupon Pack 149','Special','Unlimited'),(1.5,'2025-09-30',1,25,219,100,'2025-09-02',_binary '',42,28,'1.5GB/day, 100 SMS/day, Unlimited Voice','Balanced Pack 219','Suggested','Unlimited'),(2,'2025-10-15',1,26,299,100,'2025-09-02',_binary '',56,28,'2GB/day, 100 SMS/day, Unlimited Voice','Power Pack 299','Suggested','Unlimited'),(1,'2025-12-31',3,27,999,1000,'2025-09-02',_binary '',120,90,'1GB/day, 1000 SMS, Unlimited Calls for 90 days','Long Validity 999','Suggested','Unlimited'),(3,'2025-11-30',1,28,499,100,'2025-09-02',_binary '',84,56,'3GB/day, 100 SMS/day, Unlimited Voice','Max Data 499','Suggested','Unlimited'),(0,'2025-09-15',2,29,79,0,'2025-09-02',_binary '',0,14,'Unlimited Voice, No Data or SMS','Voice Only 79','Suggested','Unlimited'),(1.5,'2025-09-30',1,30,199,100,'2025-09-02',_binary '',45,28,'Daily 1.5GB, 100 SMS/day, Unlimited Calls','Smart Saver 199','Suggested','Unlimited'),(0,'2025-10-05',4,31,149,0,'2025-09-02',_binary '',25,7,'25GB for video streaming, valid 7 days','Stream Pack 25GB','Suggested','None'),(0,'2025-09-20',2,32,79,0,'2025-09-02',_binary '',0,14,'Unlimited Voice, No Data or SMS','Voice Only 79','Talktime','Unlimited'),(0,'2025-09-30',2,33,149,300,'2025-09-02',_binary '',0,28,'300 SMS, No Data, Unlimited Calls','Talktime 149','Talktime','Unlimited'),(0,'2025-10-10',2,34,99,100,'2025-09-02',_binary '',0,14,'100 SMS, Unlimited Voice, No Data','Basic Talk 99','Talktime','Unlimited'),(0,'2025-10-15',2,35,129,200,'2025-09-02',_binary '',0,21,'200 SMS, Unlimited Voice, No Data','Voice+SMS 129','Talktime','Unlimited'),(0,'2025-09-25',2,36,59,0,'2025-09-02',_binary '',0,7,'Unlimited Voice for 7 days','Weekly Voice 59','Talktime','Unlimited'),(0,'2025-10-01',2,37,199,500,'2025-09-02',_binary '',0,30,'500 SMS, Unlimited Voice, No Data','Monthly Talktime 199','Talktime','Unlimited');
/*!40000 ALTER TABLE `recharge_plans` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_details`
--

DROP TABLE IF EXISTS `user_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_details` (
  `address_id` int DEFAULT NULL,
  `contact_id` int DEFAULT NULL,
  `cred_id` int DEFAULT NULL,
  `dob` date NOT NULL,
  `end_date` date DEFAULT NULL,
  `start_date` date NOT NULL,
  `status` bit(1) NOT NULL,
  `user_id` int NOT NULL AUTO_INCREMENT,
  `fname` varchar(255) NOT NULL,
  `lname` varchar(255) NOT NULL,
  `token` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `UK_9nv85vuuj043xw9b6j9gkh9f0` (`address_id`),
  UNIQUE KEY `UK_idsnu6p9ebr5lt59vokeqd30r` (`contact_id`),
  UNIQUE KEY `UK_94nkxrpqlrj9akmvosjhbpm5i` (`cred_id`),
  CONSTRAINT `FKcj9460q6v8obg2uh10yi398sm` FOREIGN KEY (`address_id`) REFERENCES `address_details` (`id`),
  CONSTRAINT `FKdbneqrfepdm3ihkpwgvo3yy2u` FOREIGN KEY (`cred_id`) REFERENCES `credentials` (`id`),
  CONSTRAINT `FKh88t7yxop7dftxp63dlrb7026` FOREIGN KEY (`contact_id`) REFERENCES `contact_details` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_details`
--

LOCK TABLES `user_details` WRITE;
/*!40000 ALTER TABLE `user_details` DISABLE KEYS */;
INSERT INTO `user_details` VALUES (1,1,1,'2005-01-14',NULL,'2025-08-28',_binary '',1,'Pranav','Raj',NULL),(2,2,2,'2005-01-14',NULL,'2025-08-28',_binary '',2,'Bhola','Ram',NULL),(3,3,3,'1999-01-01',NULL,'2025-08-28',_binary '',3,'Rishabh','upadhaya',NULL);
/*!40000 ALTER TABLE `user_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_plans`
--

DROP TABLE IF EXISTS `user_plans`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_plans` (
  `end_date` date DEFAULT NULL,
  `id` int NOT NULL AUTO_INCREMENT,
  `plan_id` int DEFAULT NULL,
  `remaining_data` double NOT NULL,
  `remaining_sms` double NOT NULL,
  `remaining_talktime` double NOT NULL,
  `start_date` date DEFAULT NULL,
  `status` bit(1) NOT NULL,
  `user_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKt0fs3cvca3w4j41nbwiinum7l` (`plan_id`),
  KEY `FKgwu5u7uf6f2888qk94f69eiv4` (`user_id`),
  CONSTRAINT `FKgwu5u7uf6f2888qk94f69eiv4` FOREIGN KEY (`user_id`) REFERENCES `user_details` (`user_id`),
  CONSTRAINT `FKt0fs3cvca3w4j41nbwiinum7l` FOREIGN KEY (`plan_id`) REFERENCES `recharge_plans` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_plans`
--

LOCK TABLES `user_plans` WRITE;
/*!40000 ALTER TABLE `user_plans` DISABLE KEYS */;
INSERT INTO `user_plans` VALUES (NULL,22,1,1,100,1000,'2025-09-02',_binary '',1),(NULL,23,10,2,100,1000,'2025-09-02',_binary '',1),(NULL,24,8,1,100,1000,'2025-09-02',_binary '',1),(NULL,25,8,1,100,1000,'2025-09-02',_binary '',1);
/*!40000 ALTER TABLE `user_plans` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-09-02 10:28:01
