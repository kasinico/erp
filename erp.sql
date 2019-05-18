-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 16, 2019 at 04:03 PM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.3.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `erp`
--

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2016_06_01_000001_create_oauth_auth_codes_table', 1),
(4, '2016_06_01_000002_create_oauth_access_tokens_table', 1),
(5, '2016_06_01_000003_create_oauth_refresh_tokens_table', 1),
(6, '2016_06_01_000004_create_oauth_clients_table', 1),
(7, '2016_06_01_000005_create_oauth_personal_access_clients_table', 1),
(8, '2019_02_13_094543_create_user_profiles_table', 2),
(9, '2019_02_14_060728_update_user_profile', 3),
(10, '2019_02_14_062228_update_user_profile_is_super_default', 4),
(11, '2019_02_14_071720_update_user_profile_user_id', 5),
(12, '2019_02_14_072004_update_user_profile_user_id_update', 6),
(13, '2019_02_14_080201_create_table_tenants', 7),
(14, '2019_03_07_193435_create_products_table', 8),
(15, '2019_03_16_161729_add_tenant_to_user_profile', 9),
(16, '2019_03_17_090536_apdate_product_', 10),
(17, '2019_03_18_072243_create_product_types_table', 11);

-- --------------------------------------------------------

--
-- Table structure for table `oauth_access_tokens`
--

CREATE TABLE `oauth_access_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `client_id` int(11) NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_access_tokens`
--

INSERT INTO `oauth_access_tokens` (`id`, `user_id`, `client_id`, `name`, `scopes`, `revoked`, `created_at`, `updated_at`, `expires_at`) VALUES
('0044b534a95f663eb1de42878820d165c4781627b95b2c698cf38fe47617298be2406b3bd87b29d6', 4, 2, NULL, '[]', 0, '2019-03-17 03:32:41', '2019-03-17 03:32:41', '2020-03-17 06:32:41'),
('1456d92c4992304c13152db984a54a5c385ed63427df698adf097cb8109925dbb152aa872ab24dea', 1, 2, NULL, '[]', 0, '2019-04-12 16:48:05', '2019-04-12 16:48:05', '2020-04-12 19:48:05'),
('171e7b639110af51a19120b50ab20386d4fe20e7593304f3a7d370a690cae8a64d23b9a136eadebe', 1, 2, NULL, '[]', 0, '2019-04-12 09:24:28', '2019-04-12 09:24:28', '2020-04-12 12:24:28'),
('1911963c018c1eb2e2fda883333b2859bc17e455cf9baf21a8e726f32f779b7c60d18a23b85c17cf', 1, 2, NULL, '[]', 0, '2019-04-13 04:13:45', '2019-04-13 04:13:45', '2020-04-13 07:13:45'),
('29afe60112e0bf13694ba26c896f1367e11fbbbe4802d070e0ba5fdb427aebb72a92332463300ba1', 1, 2, NULL, '[]', 0, '2019-04-15 04:40:59', '2019-04-15 04:40:59', '2020-04-15 07:40:59'),
('3059f49a8650790e3bf4f7d3a5188b5a70952013cb123df0beae19204834ec323f54bab6897d35b4', 5, 2, NULL, '[]', 0, '2019-04-16 05:44:08', '2019-04-16 05:44:08', '2020-04-16 08:44:08'),
('35b7fdc7aa6e7f4aed033bf1d13d91e5d06023dc0911687ba418d955435c6175db42b9e456fd78f2', 1, 2, NULL, '[]', 0, '2019-04-15 06:30:51', '2019-04-15 06:30:51', '2020-04-15 09:30:51'),
('37332b35e26d29b79c7f11c8d705f3956e689a2b5d223cbd1f61e37db63e963c007a952a471f1891', 1, 2, NULL, '[]', 0, '2019-04-15 03:58:51', '2019-04-15 03:58:51', '2020-04-15 06:58:51'),
('511c03aa17988dc35bcf89ee6d114c848647b919302a9674b36ab7269eb08367186edc9d27f69eed', 1, 2, NULL, '[]', 0, '2019-04-15 06:52:44', '2019-04-15 06:52:44', '2020-04-15 09:52:44'),
('84892a004e1e67d07050690c15dbcfa265b4d70e8a262d45c42af837001ca787e332592533425234', 4, 2, NULL, '[]', 0, '2019-03-17 03:33:42', '2019-03-17 03:33:42', '2020-03-17 06:33:42'),
('8dcffe42126de5e0dcbbfc8be0e46c37ff0d937373341775fde05dd0cba8db630b8b496424878383', 1, 2, NULL, '[]', 0, '2019-04-15 04:42:24', '2019-04-15 04:42:24', '2020-04-15 07:42:24'),
('a25cacc6255c7223d5892dcc365eddf6c3c7e4176f1f72f7db3a9e4ab7c757f49cfe5f29fa6907c9', 1, 2, NULL, '[]', 0, '2019-04-12 16:39:51', '2019-04-12 16:39:51', '2020-04-12 19:39:51'),
('b52181f4f1f353dc989719a9990b8639b52ef3cf608aa8ea46117086f5ecb423b4808cfd27a73254', 1, 2, NULL, '[]', 0, '2019-04-16 05:02:19', '2019-04-16 05:02:19', '2020-04-16 08:02:19'),
('b8506e88f4c30f52d7e29c74c05cf7957fef6078e819cb84950c5cc18932369bb1b2301618007f75', 1, 2, NULL, '[]', 0, '2019-04-15 13:57:47', '2019-04-15 13:57:47', '2020-04-15 16:57:47'),
('be256b2521fd8828d3aa100aabf7fbead1ff4b4633371649718cb0ec784549af123676bd15ee7395', 4, 2, NULL, '[]', 0, '2019-03-21 12:57:38', '2019-03-21 12:57:38', '2020-03-21 15:57:38'),
('d7134851dd62e4bae6af5f8c5d67f591366c0957f2c943cadb9a07efb1d3ad40b40793e78f7eb562', 1, 2, NULL, '[]', 0, '2019-04-12 13:24:02', '2019-04-12 13:24:02', '2020-04-12 16:24:02'),
('ef1cd5979645e0bc07be88e4df01b32be0a5081882a7f245f43b8d0b4bcad63aac6bd64aa7e438f4', 1, 2, NULL, '[]', 0, '2019-04-12 16:35:51', '2019-04-12 16:35:51', '2020-04-12 19:35:51'),
('ef316ceb76d8961f303896a32bc8cf9eb9f429e5c03a9118ef7a0a7182274bb7fef28f2c46285fab', 1, 2, NULL, '[]', 0, '2019-04-15 03:52:48', '2019-04-15 03:52:48', '2020-04-15 06:52:48'),
('f0da30130ce4141e6294125746d7839c0f5c3b949abe5bd5e5bdff9f45ac9f73ae2fdd769e89ef6e', 1, 2, NULL, '[]', 0, '2019-04-15 06:35:58', '2019-04-15 06:35:58', '2020-04-15 09:35:58'),
('fad824e9aaf9ed31d278989c83e953c6afcf555022a19cbe7cd24dcdd4c30b00cc2035ef70160282', 5, 2, NULL, '[]', 0, '2019-04-16 05:57:39', '2019-04-16 05:57:39', '2020-04-16 08:57:39');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_auth_codes`
--

CREATE TABLE `oauth_auth_codes` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user_id` int(11) NOT NULL,
  `client_id` int(11) NOT NULL,
  `scopes` text COLLATE utf8mb4_unicode_ci,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `oauth_clients`
--

CREATE TABLE `oauth_clients` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `secret` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `redirect` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `personal_access_client` tinyint(1) NOT NULL,
  `password_client` tinyint(1) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_clients`
--

INSERT INTO `oauth_clients` (`id`, `user_id`, `name`, `secret`, `redirect`, `personal_access_client`, `password_client`, `revoked`, `created_at`, `updated_at`) VALUES
(1, NULL, 'Laravel Personal Access Client', 'frjwztFVRFHiTwvf0M00yrtDB2gmJzZHmhDh4Pti', 'http://localhost', 1, 0, 0, '2019-02-13 05:43:25', '2019-02-13 05:43:25'),
(2, NULL, 'Laravel Password Grant Client', '4g6QnNg0J1XlYjmRi9dziy4BhfkomtnYhtWUgPP7', 'http://localhostc', 0, 1, 0, '2019-02-13 05:43:25', '2019-02-13 05:43:25');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_personal_access_clients`
--

CREATE TABLE `oauth_personal_access_clients` (
  `id` int(10) UNSIGNED NOT NULL,
  `client_id` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_personal_access_clients`
--

INSERT INTO `oauth_personal_access_clients` (`id`, `client_id`, `created_at`, `updated_at`) VALUES
(1, 1, '2019-02-13 05:43:25', '2019-02-13 05:43:25');

-- --------------------------------------------------------

--
-- Table structure for table `oauth_refresh_tokens`
--

CREATE TABLE `oauth_refresh_tokens` (
  `id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `access_token_id` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `oauth_refresh_tokens`
--

INSERT INTO `oauth_refresh_tokens` (`id`, `access_token_id`, `revoked`, `expires_at`) VALUES
('07da044b5f9d20c244ea745bfe2cccdf18e95dcb1fb3ada3398eeab8359fe140a3a6d4b889f015a4', 'f0da30130ce4141e6294125746d7839c0f5c3b949abe5bd5e5bdff9f45ac9f73ae2fdd769e89ef6e', 0, '2020-04-15 09:35:59'),
('1535206ab8a3838636100648f008084abda1de97d0a688df885e57d45f4708572ea01ca20ed8e89e', 'b52181f4f1f353dc989719a9990b8639b52ef3cf608aa8ea46117086f5ecb423b4808cfd27a73254', 0, '2020-04-16 08:02:19'),
('2459add9430a4912ed5a4c41837f5c756bc5e97deaf46e3c46ba06ddff155ef79753a9571e32d888', '1456d92c4992304c13152db984a54a5c385ed63427df698adf097cb8109925dbb152aa872ab24dea', 0, '2020-04-12 19:48:05'),
('41ab2fda0b33962cfd0129257fd1471137d77a1a2f743481ffd9a0e38d9c6fe8dc7228567b139181', '29afe60112e0bf13694ba26c896f1367e11fbbbe4802d070e0ba5fdb427aebb72a92332463300ba1', 0, '2020-04-15 07:40:59'),
('4d5a1bebfda768f957a7f415fdeab4ce8bf8fcf0648da7102ff7f7d51781eb4cfa74e1b4be377dbd', '3059f49a8650790e3bf4f7d3a5188b5a70952013cb123df0beae19204834ec323f54bab6897d35b4', 0, '2020-04-16 08:44:09'),
('53b642d7c4e2de078fdbc6e5ed0b557f5be1226e37ab06439080fa89ad9b0ee52ccfcc490b9e6050', 'ef316ceb76d8961f303896a32bc8cf9eb9f429e5c03a9118ef7a0a7182274bb7fef28f2c46285fab', 0, '2020-04-15 06:52:48'),
('649366f75ec61fb95fd62faf10b8f33d1546c1df6f26e4bf1f79e62573028d360e5636b159c5f1b9', '35b7fdc7aa6e7f4aed033bf1d13d91e5d06023dc0911687ba418d955435c6175db42b9e456fd78f2', 0, '2020-04-15 09:30:51'),
('6cdb48f8703b5c7eba5dbdfb38713da1e5988c735ad8179f54b5db592e1a2d7a307e138bd6515b47', '8dcffe42126de5e0dcbbfc8be0e46c37ff0d937373341775fde05dd0cba8db630b8b496424878383', 0, '2020-04-15 07:42:24'),
('75dce36af4473b35ecc20463e4af6a89425654e543209686bb35e7fc30a6241a085dd8dae24a9f4b', '1911963c018c1eb2e2fda883333b2859bc17e455cf9baf21a8e726f32f779b7c60d18a23b85c17cf', 0, '2020-04-13 07:13:45'),
('77bb6ef7f78f88a3a22a2c7ddf27d100c42a8dfd27cc63bdc0eceb597bff0e840d5fd6038eb55931', '511c03aa17988dc35bcf89ee6d114c848647b919302a9674b36ab7269eb08367186edc9d27f69eed', 0, '2020-04-15 09:52:44'),
('806528897f4790587477020529e46f964135c223c4b18b41cdedc00a21fdcd44c35d5f9889b498a1', 'a25cacc6255c7223d5892dcc365eddf6c3c7e4176f1f72f7db3a9e4ab7c757f49cfe5f29fa6907c9', 0, '2020-04-12 19:39:52'),
('8717589b6cd86097fc09dc6e89ebae7e04b0e8a2603b260069f7071a32884ed01ae8a29addb7a72b', '171e7b639110af51a19120b50ab20386d4fe20e7593304f3a7d370a690cae8a64d23b9a136eadebe', 0, '2020-04-12 12:24:28'),
('9788c7cce886f0b4e5404d7c6acdd3fc5e9dd2f579d39a807c73dd3363d7a1822b6468d9564530f1', '84892a004e1e67d07050690c15dbcfa265b4d70e8a262d45c42af837001ca787e332592533425234', 0, '2020-03-17 06:33:42'),
('ada2a2d3759f6a6a331adbc2efcff281ba2fa9401b9cbe01778952fb9292b4a045c2b5ee1bac8a28', 'b8506e88f4c30f52d7e29c74c05cf7957fef6078e819cb84950c5cc18932369bb1b2301618007f75', 0, '2020-04-15 16:57:47'),
('c0f3a0ba2cbc66dd8b59e4cb9ad014240b9a0b4ad3f279047fcf751edd05ee3fa52f1776c2c99dd8', 'd7134851dd62e4bae6af5f8c5d67f591366c0957f2c943cadb9a07efb1d3ad40b40793e78f7eb562', 0, '2020-04-12 16:24:02'),
('c60a8a34b5f1dd7bc4971394de4b322eed35365bf3088d70a3e3ccba3d136e86a25464c2a9e466d8', 'be256b2521fd8828d3aa100aabf7fbead1ff4b4633371649718cb0ec784549af123676bd15ee7395', 0, '2020-03-21 15:57:38'),
('cbe20b83380134aeadbf975f96be96e967cc60ec7d2d02b8008553484f7ee134c6536b252694e53b', '37332b35e26d29b79c7f11c8d705f3956e689a2b5d223cbd1f61e37db63e963c007a952a471f1891', 0, '2020-04-15 06:58:52'),
('ccf03d0e85ebcd9570ccafcba8a5d3cfbd4335b6cd370a62f2f93d46f65636fcbd675f7427821faf', 'fad824e9aaf9ed31d278989c83e953c6afcf555022a19cbe7cd24dcdd4c30b00cc2035ef70160282', 0, '2020-04-16 08:57:39'),
('dc2880ecf79b62870023d511dcc5f9bdf36685aee1dfa22dee66859c653a092b2e9644e49082e004', 'ef1cd5979645e0bc07be88e4df01b32be0a5081882a7f245f43b8d0b4bcad63aac6bd64aa7e438f4', 0, '2020-04-12 19:35:51'),
('fbdf3457ca736ecb7d5a96ae45786d5b38be5e18eb5647dd3eb9779a306eed88ddaf077b97f0860a', '0044b534a95f663eb1de42878820d165c4781627b95b2c698cf38fe47617298be2406b3bd87b29d6', 0, '2020-03-17 06:32:42');

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `size` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `starting_inventory` bigint(20) NOT NULL DEFAULT '0',
  `inventory_at_hand` bigint(20) NOT NULL DEFAULT '0',
  `minimum_required` bigint(20) NOT NULL DEFAULT '0',
  `sale_price` double(8,2) NOT NULL DEFAULT '0.00',
  `tenant_id` int(10) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `buying_price` double(8,2) NOT NULL DEFAULT '0.00'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `product_types`
--

CREATE TABLE `product_types` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` text COLLATE utf8mb4_unicode_ci,
  `tenant_id` int(10) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tenants`
--

CREATE TABLE `tenants` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `address` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tenants`
--

INSERT INTO `tenants` (`id`, `name`, `address`, `phone`, `email`, `created_at`, `updated_at`) VALUES
(1, 'eyJpdiI6IjNBVFRvREVMYW9BK1dRM0hzMmZcL1pBPT0iLCJ2YWx1ZSI6IjFKSlB3NmJHTkZnbXp1YzZKbjJcL3VBPT0iLCJtYWMiOiIzZDc2NWYzNjYzNzIwMzM4MWVmNTg3NjBlNDVhOGJkMDMzOGRiYTAyZmYyNGQyNzg2MjlkZmUzY2IwMTcyMjAwIn0=', 'eyJpdiI6IkplNUx2NXZZOHk3MlFzMEY1XC9GRkRBPT0iLCJ2YWx1ZSI6InJORnNtYWVPY2YyUVwvMG1yV1RtMG5nPT0iLCJtYWMiOiI1NWYwYWZlODAwNTM5ZjQ3ZTBhMmVhNTk2NTkyMjA2OGFiNjAwMGNiYzUzZjY5ZDVjYjEzNzE5YmYzZmU5MDk4In0=', 'eyJpdiI6IllySFAyVkZjMmo0NitGZlBNbytRanc9PSIsInZhbHVlIjoiQTZUVUxUbUFlTERNVVNFTitZcWlnNURNWldlWWdaSHQ2UnlHbGl2TkxsZz0iLCJtYWMiOiI1ZGE0MGM4ZWI4YmQ2OTc1Y2IxOWVmNjIxNmRlOWI0OWE1NjlkOWE4OWMyYzFmNjFkZGJmYmIzZDY1M2M3Zjk1In0=', 'eyJpdiI6IkRjVytkSjZYSzJtcDE1T1wvYzIzSHpBPT0iLCJ2YWx1ZSI6IlVUb0tnS292M0FcL0FCSmVMRXhtZHZ0aFpmZFJGZWN6UkdYNnpJSnFBZys4PSIsIm1hYyI6IjJlY2U5MGI4ZmRhODkwZmJkZGE3ZWIyYTA4N2E1NTJmZTFhNDYxOGZmOGZhOTA5OGFmYzRkZTFjMjE2OGQyNDMifQ==', '2019-03-17 04:14:34', '2019-03-17 04:14:34'),
(2, 'eyJpdiI6IlYzeXpoSXM0d09jRzZ3c3JOUkZHUXc9PSIsInZhbHVlIjoiTlNUOHZXUFd2SER6SHo4R1RZa2c2QT09IiwibWFjIjoiMDIxZTdiYzJlZmQ0ODhlN2YzYjNkMGRjOTA5ZDJmZDlhNGFjNjU3NWI0MGYzNjk3MjExYjRkYTc1OGM0M2U2YiJ9', 'eyJpdiI6Imowdm9wdzI1YUpBSW1wVUxBdjNsa0E9PSIsInZhbHVlIjoid0dEN2pCXC8yTWhiRm00UytiK0Nwd3c9PSIsIm1hYyI6IjJlZDE1M2Q1NzRjYjkwOWYwNThiNGZjMDZkYjlkNjhjZmY4ZmNiNTNkN2I3MmYwN2RjZjVlZDNkODdiMTU2ZjYifQ==', 'eyJpdiI6IjJWQ3hDWGJTUUlDVEp5SDlzT3BCRUE9PSIsInZhbHVlIjoiYUNYMnRHSkpyeW93U252K3NhTFVsaVhvckNkcFdMbHFHdE5rejVYS2N4UT0iLCJtYWMiOiJhYTVjY2Q2MzAyZDRmMzkzYzg2ZjU3YzZmNWE2MDZjMTAxZjRhMDE3N2NhYTAyOWQ2MjI3YmY0YmZiN2I1YTA5In0=', 'eyJpdiI6IlNWZW1URWlQRFQ4U0xpbWhqVzJBUHc9PSIsInZhbHVlIjoiS09uQTlHVDFcLzVxYWhFWCt1dnRvZnVFdFhYaGM5NGQ4MEZGQkZwaVQ5MkFUZ21GQ2ZoRHA2QmdwaW5SclBYTEkiLCJtYWMiOiIzNGI3ODQxYjk2NzMyOTJjY2U2OTkzMzBhMWNhMjcxNmI2NDE1MTFmMzNhNDFlODhmNjIzMDljYjZiNmZmNGFmIn0=', '2019-04-16 05:43:45', '2019-04-16 05:43:45'),
(4, 'eyJpdiI6ImtXYm9qZitYUFF4ZlNHVjZUOHRFM2c9PSIsInZhbHVlIjoidTEyT0FZWnE0cW5Wd1pidERYeHB2dz09IiwibWFjIjoiOWE2MjVjMTc3MjIwNTk0NTM4MWJmYTBkODI2MDMyNTM5ZDRhMzBiOWZlZTI2NjQxMTRhMzQ4MzE0NjM0ZTc1OSJ9', 'eyJpdiI6IlBvQjFxNlFZUjVcL3AxQnJaZFNMMktRPT0iLCJ2YWx1ZSI6Ijc3NlhKeUhQemJPUW11TlRtY3cyQmc9PSIsIm1hYyI6Ijg2ZTdjYTQ4NDgwNTgwOTdhNTZlNjkwZjllYzBlOGMwYjJlYzQzY2Q0MjhlNzgxNzgwZTViNGI0NThjMGI3YzcifQ==', 'eyJpdiI6IlNreHFRYkN1bUZGbnNCQzJwNUpCaFE9PSIsInZhbHVlIjoidllqSURDdnQ1MXRXUlczU3IyWmhWNkJJZEVTN0NHYW0xQ2ZQRUQ1Q0xVND0iLCJtYWMiOiJiZTgzMGJhZjExYjQ4NGZlMmNmN2MwODI1N2NkMWE1ZGY3ZTRiYThjODg0NTNhMmM3ZjAyODUwNmEyYjdkNGFhIn0=', 'eyJpdiI6IlJsc1JrS0VVYW1yVWZMQ29LcE9CU2c9PSIsInZhbHVlIjoiNjBaZkxRT2F5a3J5SVdNVm55dkE5bVhDcXR5MnBkQ1NcL0gzXC82OVpKQk5ZPSIsIm1hYyI6ImRhMThiNjgxODFhNjg3ZjBiMGFlZWM1MTZmMTc1YjVhMzBkZjYzNzJlZDZiNjBmMzg5YzJjNGI4MTc2ZjRmZDQifQ==', '2019-04-16 05:50:57', '2019-04-16 05:50:57'),
(5, 'eyJpdiI6ImJoalJvazZ3ZWZGQjJRM2JRZ3lmc1E9PSIsInZhbHVlIjoibU82cVlIcFUzY2RwMjlPOExOUWVxZz09IiwibWFjIjoiZTdkMDBhY2NmYjkyZWE0ZTBlY2IzMWMzYjk2ODU4MDg0YWQ1MjBkNjVjOWZmZDFlNDM4MWM2MjRlYzExZTEwNSJ9', 'eyJpdiI6IitcL2thWTdLOEV6RHVkT3oxUktra0N3PT0iLCJ2YWx1ZSI6IldHK01WNG5XeDFhUUdKZnhxUkhWK3c9PSIsIm1hYyI6ImU0ZDAzZTM4OTdhNWUxNjFlYzUwYTMxNTk0NTYwNGY5NDVjY2IwOTA5YmU3ODMyYzAzN2E4OTVkYTZlZWZkYjMifQ==', 'eyJpdiI6Ik5zZFJ1RUd1T3U5aVZiRWlibjFGMEE9PSIsInZhbHVlIjoiRW9aeGRsekRweFhVb05iRGRaMnpuUGNUQ09sMWZDXC8rcjJuWnE5c1BYbTA9IiwibWFjIjoiZjIxOWNiNzFmOGJmNGE1ZjllMjk0Njk0ZmU5MzE3MDVmMDBlZTFhODI1YmJmZjNkMTllZmQ2NGQ0N2RkYjUzMSJ9', 'eyJpdiI6IjZ0U3RGeXFXc2g3S0hURXpmMmFBa1E9PSIsInZhbHVlIjoiQXgwYVdQMnZLd3hXZE5YbFVzNVVNdW9iQjJsazJwZkg5cFhHQng1RWs2VT0iLCJtYWMiOiJmZmMwNWZlMjk1ODUwZDRiNDkyNGViODBmYjNjZjA3ZTRiNGZmYzI3YWJiY2E5YWUyMzM4M2Q4OWRlM2QwZmRlIn0=', '2019-04-16 05:51:34', '2019-04-16 05:51:34'),
(6, 'eyJpdiI6IndFUnkzWnpKVFRXUWV0Nk1OZFkzSGc9PSIsInZhbHVlIjoiZFpoQzJLRGxRODZhWnBrSGFSY3hXQT09IiwibWFjIjoiYjNmMmZlYzM0YTVmNmNjNGI0ODE4YThhZmEyNjM1YzVhMzcyMGUxMWFlZDU5YTgwMmFhMDA3MTk3NTc2OTNjOSJ9', 'eyJpdiI6IjFMaWtXTXlnQm9qdjQ2SmJNNTh1UlE9PSIsInZhbHVlIjoiUDArNlFhZ3VNTHFRU05RNjBDbGtUQT09IiwibWFjIjoiODY5MmMwMDEzY2U5M2NjYjI0MDk0ZmViMDMzZjg2MDRkOTk1NDMyOGU2ZDhmYmI2YjE2ZWQzYjZlNTUwMDZhZiJ9', 'eyJpdiI6ImY3R0VXVEZQRk80QjhGZWVTSkNuU0E9PSIsInZhbHVlIjoiMTNENForUFkwb0pxb1J1eTV3TjJxTW1tTFQyVFNXbXliZG9GWGtwWW9Kbz0iLCJtYWMiOiI0OTgyMGYxMDk0NWI1ZWQ1NWI3OTc3MmRmZjdkY2FhYmQxMzQzYzYxYzE3MzE4M2E5NTE2MTBmOTA1MmQ1MjdlIn0=', 'eyJpdiI6IlBVcXZpd3YxWGxwZG4wWWFlWVlCUXc9PSIsInZhbHVlIjoiNTBGcGRRYXB3UkJHRmRTQ2J3dmZ6YW9RNmw3eUh5SURxQlE0UjhiRGpEdz0iLCJtYWMiOiI4OGUwZGRjOWVhZDYxNTg2ZDNkOWFlYWFkZjY1YWU0NDc3M2ZhZTZiYTlhMjc2MmE3ODgyM2MzODBmM2ZiMGVlIn0=', '2019-04-16 05:52:12', '2019-04-16 05:52:12'),
(7, 'eyJpdiI6ImRadlhWZ2F2R1g4QlVcL3dVbHhmcnFnPT0iLCJ2YWx1ZSI6Im5YbFJmM1Y1djNoZU1ZWDhLa3dqQlE9PSIsIm1hYyI6IjM4NzE1NWZmZTQzMjI5ZjEzYmVkM2YyZmJmODIzZjlmNmNkZGUwN2Y1MGM2YTgwZTFiMzJlZTMwZTY4ZjU4NjEifQ==', 'eyJpdiI6InFnVFV6V1BCcUFrbFVsK3BuNFBuN3c9PSIsInZhbHVlIjoidTFzMWtsY3JmMjE4NkNuTjB3K1duUT09IiwibWFjIjoiOWJhNGNiOGFmMjRiYzRmZjI2M2MwNDhmODBjY2E4NjE3Njk4ZDM2MjJhODdhMzVlMDc0YjdmNTBkYTNhNTRhNCJ9', 'eyJpdiI6IjlQVjdIT0JjRmZNMFF4d2o1Q3c0K1E9PSIsInZhbHVlIjoiYVwvdjlIZnVtRXVmQ1N1TWlrOExvdVh0ckNaMktmM1V6RzJSdGJYdUJ0SjA9IiwibWFjIjoiNTAxNWE0NGE4ZjM2OGY1YzFlODVlNzZhZDI5NGI5ZTc2Mjc1MjY5MzE4OWU4MDM4YjAyYTAzNWFjMjYyMTZlNiJ9', 'eyJpdiI6IlwvakwwOXB5dUxjdVp4RVYzSll3NlRRPT0iLCJ2YWx1ZSI6IlZHa2xWWTFvT3JYS1NObDdpK0N1VTMzbVpvd1YyS2t1WmpnRDI2akllZTA9IiwibWFjIjoiMGI3NGQzMGE0OTZhYzY5Mjk2ZjVjNTMzZmUzMGEyNzM3NjYwOWVmOTNjMWY3ZDJkZjA0MDlkMmY4OTIwNDc2MiJ9', '2019-04-16 05:53:58', '2019-04-16 05:53:58'),
(8, 'eyJpdiI6Imk4WkJKWkR1MytibVlWR3VtK3VMSUE9PSIsInZhbHVlIjoiS2NUaGZHV1Y2N0NGQlVaRE5qSkc1QT09IiwibWFjIjoiY2Y5Zjc4NTQ2MzY0YzM3NzFiZDRjY2RlODI4MjlkZjRhMDRiMWZiYzMwZWUwNTYxZjE3MjVmNTcyYzNkZjIzNSJ9', 'eyJpdiI6IlwvUURiNmZ5V3ZzNFVvXC95SXFaWURUZz09IiwidmFsdWUiOiJoS3lLdndYb0hFaGc3cTdpTGw1dml3PT0iLCJtYWMiOiI5YWZkMjdiMmVjZTk2MmY5MDJmMzgzYTk3MmM5ZmI1MDk1N2EwOWI2MThkYTc4ODI3Mjk3MTk0ZDQ5ZWVlYWQyIn0=', 'eyJpdiI6IktcL2VLK1BHYUNYc3FDUXhsViszWU1RPT0iLCJ2YWx1ZSI6InNaekJXd0ljbmJwMGEyekNjSEVLZkc2bUlKNFFuNGp2VzZ2R3dYdzZwczA9IiwibWFjIjoiY2ExMDY3NTVlYWRjN2FkNDViOGZlNzQ0YWUyMzc0MGI4NTM0NDAzNjE3NzkzYmEzMGYwODIzMjRmMzljZWVkOCJ9', 'eyJpdiI6IjFMOGZYMzhxbmIxd1hQSzczNEFIb2c9PSIsInZhbHVlIjoiek9NTnQzXC96QkRlQk01bDlVRVJFRTlLMUtHSnpHVEZqbEpGUUFaenNKY3c9IiwibWFjIjoiNDE5ODhiNWE2NjJhOGNlNjY2ZTJkMGE5ZDdjNTY5N2I3MTM0YTM0NTU0Y2ZlMDllY2RjZWNlNjRlNTkzMjZhNiJ9', '2019-04-16 05:57:17', '2019-04-16 05:57:17');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(510) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Dennis Joel Mwagiru', 'dennismwagiru@gmail.com', '$2y$10$q8XS/mDXepL3A/wUR2jOaOtXfwJJQItyl8Usw88hDhqM7Qa3xYfhq', NULL, '2019-02-13 08:46:41', '2019-02-13 08:46:41'),
(4, '', 'dkarimi@gmail.com', '$2y$10$S4zN4ihsBJBGiGxbP0gRrOj85gkGHvckGimD.L2POEXkKi2tFwrGS', NULL, '2019-02-14 03:25:58', '2019-02-14 03:25:58'),
(5, '', 'dkarimi@ke.nationmedia.com', '$2y$10$gAfEXtaJRyQOS8DMlJ8DYOtwHS5qS2vjGqUqu4KFjws7kfO30XT4C', NULL, '2019-04-16 05:43:46', '2019-04-16 05:43:46'),
(7, '', 'dkarim@gmail.com', '$2y$10$Y/wqiHSv/OjY5syiWXYIQ.LGXIbyLkJEzVec9LQZvSpP0/k7wZUU6', NULL, '2019-04-16 05:50:57', '2019-04-16 05:50:57'),
(8, '', 'dkarissm@gmail.com', '$2y$10$Wo6ReEsaSVzM7PAh8rfdeOpppaKGowCGwBdyb6p7DXDoTj70oPruS', NULL, '2019-04-16 05:51:35', '2019-04-16 05:51:35'),
(9, '', 'dkarim@gmail.coms', '$2y$10$.77Rps8GAXk0Yh83CFCtOO5haLfod28kgaQaTHxUB3xwrrX4okIsC', NULL, '2019-04-16 05:52:13', '2019-04-16 05:52:13'),
(10, '', 'dkarim@gmail.comd', '$2y$10$3WRNbarki8bp5luqK9z7O.fKCcFGvlDfPvoSmF6FPZOPOUp/.h7z6', NULL, '2019-04-16 05:53:58', '2019-04-16 05:53:58'),
(11, '', 'dkarim@gmail.comddd', '$2y$10$7DHrOuyXoUcwmMLdo71ZOOVMSBDMLOwmOy11T4ybhAI4E9zw95DsG', NULL, '2019-04-16 05:57:17', '2019-04-16 05:57:17');

-- --------------------------------------------------------

--
-- Table structure for table `user_profiles`
--

CREATE TABLE `user_profiles` (
  `id` int(10) UNSIGNED NOT NULL,
  `user_id` int(10) UNSIGNED DEFAULT NULL,
  `tenant_id` int(10) UNSIGNED DEFAULT NULL,
  `first_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone_number` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `is_super_user` tinyint(1) DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `middle_name` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user_profiles`
--

INSERT INTO `user_profiles` (`id`, `user_id`, `tenant_id`, `first_name`, `last_name`, `phone_number`, `is_active`, `is_super_user`, `created_at`, `updated_at`, `middle_name`) VALUES
(1, 1, NULL, 'eyJpdiI6InlXeEJGVExicTBKbjV6dUZ4b3lWT3c9PSIsInZhbHVlIjoidWpPMnB6S0NZOUI3SExlTG9yMlUzUT09IiwibWFjIjoiZjg2NDhiODhlN2MyMzFhNDlhM2EwZjA1ZTVkMTlkYTY2M2JiYzdhNTRkOTJmM2I4YWRmZGExNTNhMTIzNjZkZSJ9', 'eyJpdiI6ImVzZDRLQWxYV0ROdlNOZ21tc1ZPQnc9PSIsInZhbHVlIjoiTHI3cXVNa3FIXC9UUkQyV2hqZWdNWmc9PSIsIm1hYyI6IjI0MGQ0NWNhM2EzZjdmNjc0Mjc5MGJmYmU3YWZjOWZhYWQxNTI4OTAxYzIyMjY5ODQzNDA4N2RkODViOWEzZDEifQ==', 'eyJpdiI6IkFBY1Q1b1N5R0dhRVZKZmdtQngyWHc9PSIsInZhbHVlIjoiazJcLzg0dDM5K3NMNkk4SUkyS21FeEZ1V2lQSmd5RzJhaTgxTU1tWml0MkE9IiwibWFjIjoiMDEwZGM4OTNjY2E0MzNiYjZlY2I4ZmQ3ZWU3OGM0MGMwNjBmY2EwYjg4ZDhmMzkwOTVmZjI2NDJiYmE0NzRkYiJ9', 1, 0, '2019-02-14 03:25:59', '2019-02-14 03:25:59', 'eyJpdiI6Ijc3bFhZc1wvdVQ4SGp1T0xXR3NtNzJBPT0iLCJ2YWx1ZSI6InBmd0FSTUlJcVFwOU0xNERTRUxDN3c9PSIsIm1hYyI6ImEwMWVlYjY0NjhlMjU0N2EzYmFkMDQ3YjE5OGMxYTQ3MGE1MDM0NDg3NGYyODI4MDU4YjJkZmEwZTEwMWRhMDIifQ=='),
(2, 4, 1, 'eyJpdiI6InlXeEJGVExicTBKbjV6dUZ4b3lWT3c9PSIsInZhbHVlIjoidWpPMnB6S0NZOUI3SExlTG9yMlUzUT09IiwibWFjIjoiZjg2NDhiODhlN2MyMzFhNDlhM2EwZjA1ZTVkMTlkYTY2M2JiYzdhNTRkOTJmM2I4YWRmZGExNTNhMTIzNjZkZSJ9', 'eyJpdiI6ImVzZDRLQWxYV0ROdlNOZ21tc1ZPQnc9PSIsInZhbHVlIjoiTHI3cXVNa3FIXC9UUkQyV2hqZWdNWmc9PSIsIm1hYyI6IjI0MGQ0NWNhM2EzZjdmNjc0Mjc5MGJmYmU3YWZjOWZhYWQxNTI4OTAxYzIyMjY5ODQzNDA4N2RkODViOWEzZDEifQ==', 'eyJpdiI6IkFBY1Q1b1N5R0dhRVZKZmdtQngyWHc9PSIsInZhbHVlIjoiazJcLzg0dDM5K3NMNkk4SUkyS21FeEZ1V2lQSmd5RzJhaTgxTU1tWml0MkE9IiwibWFjIjoiMDEwZGM4OTNjY2E0MzNiYjZlY2I4ZmQ3ZWU3OGM0MGMwNjBmY2EwYjg4ZDhmMzkwOTVmZjI2NDJiYmE0NzRkYiJ9', 1, 1, NULL, NULL, 'eyJpdiI6Ijc3bFhZc1wvdVQ4SGp1T0xXR3NtNzJBPT0iLCJ2YWx1ZSI6InBmd0FSTUlJcVFwOU0xNERTRUxDN3c9PSIsIm1hYyI6ImEwMWVlYjY0NjhlMjU0N2EzYmFkMDQ3YjE5OGMxYTQ3MGE1MDM0NDg3NGYyODI4MDU4YjJkZmEwZTEwMWRhMDIifQ=='),
(5, 5, 2, 'eyJpdiI6ImNFUzVSTDN1b29NN1NmemtxQ0dGM1E9PSIsInZhbHVlIjoiU2RyV0NkallQOFhjcHpzOW41Wmh2MnVoVUlsRTlPS29ZNGVCVllNcjRhVT0iLCJtYWMiOiJiYWU1MDgxMDA2NDRlODVhZTczNTY3NTkyNzg3MTMwOWNjZjg1MjA2OGMxOTc0NDZlNDdlN2JlNWVkZTc4NTUyIn0=', 'eyJpdiI6Imw5VGtCK3BKd0NVZlgzWHNxZzluS1E9PSIsInZhbHVlIjoiRWhST1VkWTZpbGZcL1U1OFdhNXFCa2c9PSIsIm1hYyI6IjE5MmY2ZDI4OTNhY2MxNTI2OWFiNzIxNGM1M2MyMjA3NTZhNDBkYTZhN2Y4MmQ4ZWMxMDNmYjY1MjIwNjNmMDQifQ==', 'eyJpdiI6IlFkQWphXC9YV21TdUEzaFwvVVY4M1hVdz09IiwidmFsdWUiOiJ0VVJHM05sQnV3UElkK0pLeHZMbU1aRmFSaVpadDhwZjM2aks0KzRJZ3lZPSIsIm1hYyI6IjE3Y2NlZTk1MTIzOWZhMjE5NDliMzBiMGQ0NzZlM2EzNjFhZTljNjliODUzZDE4OGQ5NDY3NjVhMGI4ODU3MWUifQ==', 1, 0, '2019-04-16 05:43:46', '2019-04-16 05:43:46', 'eyJpdiI6InZ4aGFtalBTOFdqNTBWeTFiV0tqZVE9PSIsInZhbHVlIjoiQnptRndDRXc4TEViMVNoOFFHV1orZz09IiwibWFjIjoiNGFjNWRjOWIxYjk5OTZjN2VhOWNmOTE5NDQ2ZTExNzg3OWNjNjI5ODM2NzU0OTc2Y2RlNTU2MWFhZGFjNTE2MCJ9'),
(7, 7, 4, 'eyJpdiI6IkkrVDdIYlJEMDFXY1JYVkkzTnNDaVE9PSIsInZhbHVlIjoiYWhUWWZ6NDRyVG84c0RjSVFCV3lYUT09IiwibWFjIjoiMTE3MWY3NTQxZDBhYjNkNmU5MDMyNmFlYjQ1MGU1YjlkMmYxMTUyOTJlNmQ0NjFhYTBkODE4ZTcxODAzOTM1ZSJ9', 'eyJpdiI6Im5RRGFNRzl3ODVqNERWZjltQVpyTmc9PSIsInZhbHVlIjoiYmc0SFVLS2lxbVNRNWtWQ21pUXdQUT09IiwibWFjIjoiNTJiMTliYzYwM2E1YTBkMzY4MGNiYzhkMTQxN2QxODJjMjI1NDI4OTk4MGNkMTJiYzEzNjM0ZTg5MjA1YzU3ZSJ9', 'eyJpdiI6InRBRU5zWU14K2s2VVVIdDVqbnROS3c9PSIsInZhbHVlIjoidFZwTjV0OWpaaWdsQmdsRlYrRVZ0WnN4VzJlNDV1SHl0OVVicmsxSUZRRT0iLCJtYWMiOiJhZjIyNjg0MmQ4ZTJiYjE1OTQ4NzEyMzZkODRhYjcxNTJjMTViNmI2YzA3MzM0NDE0YzFhZWMxODYwNWRiZTgzIn0=', 1, 0, '2019-04-16 05:50:57', '2019-04-16 05:50:57', 'eyJpdiI6InJjcWJ2UlJFeXRBZHQxMVpOYTUwbkE9PSIsInZhbHVlIjoiQVlqcFM1bWJYbFpRbWtTM1MwYXloZz09IiwibWFjIjoiMmI4MTk3N2IwYzJlNGNiMzUzMmY0YTdmMTE5Njc3NGE2MTM4NTNlNzBiZDFkOGY3YzI4ZWE0MjFhOTcxMGI1MCJ9'),
(8, 8, 5, 'eyJpdiI6IjQyOEZBVWs3MURiNHBYbWZodksyMHc9PSIsInZhbHVlIjoiRWxRMGw0alwvZXFDME1YanQwcWd2UFZhS1F6UERRY0VQZ3hqbml3OVd5YjQ9IiwibWFjIjoiYzEzOTMzMzU5NjQ5YWFhMzJlZWI2Yzk1ZDM1MTBhNjgyY2IyMDY3NDBlOTUwYjA3YmRjNTEzMDE4M2Y1ODQ2ZiJ9', 'eyJpdiI6IlB0MWJNUmhLKzVuWEQ3SGZMVjdXTFE9PSIsInZhbHVlIjoiU2NJRmJcL2xkMFFDUk5rRG1wV2hUUFE9PSIsIm1hYyI6IjRlZDkzNDM1NzZkY2NjNzhlZTk2YjU4NjBjN2Q5NDhjNTU1MjlhNjhkMWQzODE5ZDU3OTVkYTIyNjQ2NDU2NTUifQ==', 'eyJpdiI6Ilh5c3VIZHNscmo2dStiSm1wZjNDcEE9PSIsInZhbHVlIjoiYnlLdXJEYlg0akpsWVM3bTlXV09ZMGdROVJwRUR3UHJjK1FRV1BjRUFvUT0iLCJtYWMiOiIyOGYyOWI1YjAzNDFiMzI5NGM0MWNiYzM0NmE2MWEwNDcwNjJlZDQ5YTFhYzQ0ODAyMGJhYzYyMmFkY2EyMDg1In0=', 1, 0, '2019-04-16 05:51:35', '2019-04-16 05:51:35', 'eyJpdiI6IlFHcHhUTzFQbjdaaFNjb3M0a1duaHc9PSIsInZhbHVlIjoiVEJcL0RPTGJuRWVIK2l4T1Bmd2M3UEE9PSIsIm1hYyI6IjllNWM0MWYxN2RlODIzYWI5YzZiZjQyYWU4MzkwNzQ5OWEyODRmZjIzNDE2YWJjMDE1YzhhMDVhOWNiYWFjMWQifQ=='),
(9, 9, 6, 'eyJpdiI6InNUNk1OTW5aKzJZUmZ4eDdEZ281bVE9PSIsInZhbHVlIjoiRlwvNW9kc1FCWCtReU9IdE1BSFFwcURjMTMxYXhDSGFWd1wvZlZPRHVaMmd3PSIsIm1hYyI6IjJkMGQ1Y2QxNmY4MDllODNjYWIwZDNmZjViMTI1NmEzY2FmOTIxNTI1ZTBhNmY3MDdlMTRhOTM1ZmM5ZGRiZjUifQ==', 'eyJpdiI6IlcyVW1uVnRDWlVncFlscWRqOVhIVlE9PSIsInZhbHVlIjoiM3dpeDgraGV0eVJQUUNJUFcyQU5QZz09IiwibWFjIjoiMWNiZWU1YmEzMjI1YmZlYWI0Y2MzMDQzNjkzYTk5MjgzZmIzYWQ1OTRjMWY1YzQyNmU3Y2I1MGM2YmY0OWNjYyJ9', 'eyJpdiI6Inl4aTVZbklBZ1ZsZHd3WmEySCtjbGc9PSIsInZhbHVlIjoiTlNIU3ZUMmhjTHgramMzSjk1SHh3K2kxWW5KektxNUVyQXJuemd1VHdKdz0iLCJtYWMiOiIxNmFiYjg3MGVhZDE2MTY5OWZlYjE0NzNmMTdmNmJjNGVjZTY0ZTgwZTZmMmExNTVlMDBlODBmNDhjYzY5NjM5In0=', 1, 0, '2019-04-16 05:52:13', '2019-04-16 05:52:13', 'eyJpdiI6Ilg3djc1c3VqbnFwcW0xMlwvMTRlQmRBPT0iLCJ2YWx1ZSI6InhvSmgwaWNhSTVOd0NQYlAyNFhTRmc9PSIsIm1hYyI6ImMxNDI5NTQyNzhkMDExNDU2ODk0NTUxY2YzMTFmNzcxOWJlNzliMTNlNmJhZDBmOThiNTc4ZjQ5OTdkODZkZTEifQ=='),
(10, 10, 7, 'eyJpdiI6Ik43UnVZS0oyR1p3TTdURjlVc2FaR3c9PSIsInZhbHVlIjoieWpaWHptN3BTK05Mbkw3Zk9ScnBPeGM1dzFcL2taaTQ1ZGhWVmF6VXd1b289IiwibWFjIjoiNDRkMzhiNThhOWUzNDdmZmIwNzFjZjYwODUwZjAzNWM3MGJkY2VkMmVlM2IzZWIyZjNjYTM2ZWE2N2IzMzZiZiJ9', 'eyJpdiI6IkNnQWdpU1hvUHhDVnRKOVdFMVNYWFE9PSIsInZhbHVlIjoiY3VwZmhwdGhhUnZQZ2Q2NEV4VHdlUT09IiwibWFjIjoiZWRiZjA2N2M4YWUzMDgxNzJiMmU1OTY5ZTc5ODI1ZmQ1NjA2ZWE5NGE0NWVkMzZjMDEyZTc2ZjQyNDMwN2RkYyJ9', 'eyJpdiI6InQxcElNaUUwQ2x4dVZUWlNHbEM4aUE9PSIsInZhbHVlIjoiYm5EVDE3YTZocmljTWVWcHNuUXgrQzBISzFmMlZ5VEw3bnl6MHZjdm45OD0iLCJtYWMiOiI5MTBhMDNlZDZmZjFkMDEwMjZiOWVhMGQ2MDkwYTRmMTg3YTlhNjIxNjJlZmQwNDBhN2EyYmM0YTIyYzBkYjM0In0=', 1, 0, '2019-04-16 05:53:58', '2019-04-16 05:53:58', 'eyJpdiI6IitteGJhNlVRZFVCQkFqZlpwem9JeHc9PSIsInZhbHVlIjoidzllWTVwYmRPVzdTaEpXNmtzcFdFdz09IiwibWFjIjoiNTg2MTBhMjFjNzkwOWI4YzEwMjI4ZmNhY2U4ZjMxMTk5ODMxZmQ3MDAzODc1ZjYzOTliNmI4YmUzNmEyODYzMyJ9'),
(11, 11, 8, 'eyJpdiI6InZEdzhwZFdRbUxjXC85N2VMaERMU2VnPT0iLCJ2YWx1ZSI6IjNBN2FoZzVnUEVSbldJdlJ1NXpwTmhsOTlSOU1saWNqZmJBdlI5Rit6TzQ9IiwibWFjIjoiNjhiODE0ZmY1OGE2NGY3YTY2NDUyN2FmM2U0NTYzMjJkNzVhYzhlZDYxNGFkY2I4ZTRhOTkwN2ZhNmVmMmMyZiJ9', 'eyJpdiI6Ilwvb2pleGxUVndURWlVM1RjNUIrKzhnPT0iLCJ2YWx1ZSI6InI3bXE1ZkZIVTZxUkJoYjVlWWRvMXc9PSIsIm1hYyI6ImNhNDI2YzM1MDYyYTA2NjIyM2I0OTIwNzVmODcyNjc4ZGFiYzYwOTMxZjNiYzhiNmVkNTY4YTllOWE3YTg3MmYifQ==', 'eyJpdiI6IktzTDl4WVQ1UTFncWlWSjIrMHl6S3c9PSIsInZhbHVlIjoiRnhWbnlNcnBiaW0wSkNJS05WRENHdjk1UGFPK3pubzd5V0dYNXR0WTBwTT0iLCJtYWMiOiJmMDYxNDdhNzFlNGQwOWZkMzI0YTJjNWY2NzdmYzgyYTY1NWQ3ZWRiMjVlODU3ZDlkNDFiMTIyZDhhZDgxOTIwIn0=', 1, 0, '2019-04-16 05:57:17', '2019-04-16 05:57:17', 'eyJpdiI6IjZkWCtEWXlwa3Vqd3dUQmdxV0NjMGc9PSIsInZhbHVlIjoiZ1lrNlJIZEtIMEgyRWRyaDBnUzlhUT09IiwibWFjIjoiYjZkZmYwOTUyZDE2MWQzMjljYWMwZTgzOGUzMTBkNTI1ODc2NmU0NGIyYjMyYzZjMTJhODgzNjU3NDQ3ODNiNCJ9');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `oauth_access_tokens`
--
ALTER TABLE `oauth_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_access_tokens_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_auth_codes`
--
ALTER TABLE `oauth_auth_codes`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `oauth_clients`
--
ALTER TABLE `oauth_clients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_clients_user_id_index` (`user_id`);

--
-- Indexes for table `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_personal_access_clients_client_id_index` (`client_id`);

--
-- Indexes for table `oauth_refresh_tokens`
--
ALTER TABLE `oauth_refresh_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_refresh_tokens_access_token_id_index` (`access_token_id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `products_tenant_id_foreign` (`tenant_id`);

--
-- Indexes for table `product_types`
--
ALTER TABLE `product_types`
  ADD PRIMARY KEY (`id`),
  ADD KEY `product_types_tenant_id_foreign` (`tenant_id`);

--
-- Indexes for table `tenants`
--
ALTER TABLE `tenants`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- Indexes for table `user_profiles`
--
ALTER TABLE `user_profiles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_profiles_user_id_index` (`user_id`),
  ADD KEY `user_profiles_tenant_id_foreign` (`tenant_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `oauth_clients`
--
ALTER TABLE `oauth_clients`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `product_types`
--
ALTER TABLE `product_types`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tenants`
--
ALTER TABLE `tenants`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `user_profiles`
--
ALTER TABLE `user_profiles`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_tenant_id_foreign` FOREIGN KEY (`tenant_id`) REFERENCES `tenants` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `product_types`
--
ALTER TABLE `product_types`
  ADD CONSTRAINT `product_types_tenant_id_foreign` FOREIGN KEY (`tenant_id`) REFERENCES `tenants` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `user_profiles`
--
ALTER TABLE `user_profiles`
  ADD CONSTRAINT `user_profiles_tenant_id_foreign` FOREIGN KEY (`tenant_id`) REFERENCES `tenants` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `user_profiles_user_id_foreign` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
