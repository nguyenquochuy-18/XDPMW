-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Máy chủ: localhost:3306
-- Thời gian đã tạo: Th3 24, 2023 lúc 09:44 PM
-- Phiên bản máy phục vụ: 10.3.32-MariaDB-cll-lve
-- Phiên bản PHP: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `ymbrrfdq_aroma`
--

CREATE DATABASE IF NOT EXISTS `ymbrrfdq_aroma` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `ymbrrfdq_aroma`;
-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `category`
--

CREATE TABLE `category` (
  `id` int(10) UNSIGNED NOT NULL,
  `cate_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `category`
--

INSERT INTO `category` (`id`, `cate_name`, `created_at`, `updated_at`) VALUES
(8, 'Đồng hồ', '2023-03-22 19:24:32', '2023-03-22 19:24:32'),
(9, 'Áo', '2023-03-22 19:24:39', '2023-03-22 19:24:39'),
(10, 'Quần', '2023-03-22 19:24:43', '2023-03-22 19:24:43'),
(11, 'Giày', '2023-03-22 19:24:49', '2023-03-22 19:24:49'),
(12, 'Lắc tay', '2023-03-24 17:50:28', '2023-03-24 17:50:28');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(14, '2014_10_12_000000_create_users_table', 1),
(15, '2014_10_12_100000_create_password_resets_table', 1),
(16, '2019_08_19_000000_create_failed_jobs_table', 1),
(17, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(18, '2023_02_07_131330_create_product_table', 1),
(19, '2023_02_08_153655_create_category_table', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `products`
--

CREATE TABLE `products` (
  `id` int(10) UNSIGNED NOT NULL,
  `pro_code` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pro_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `cate_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pro_brand` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pro_color` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `pro_price` int(11) NOT NULL,
  `pro_amount` int(11) NOT NULL,
  `pro_sex` int(11) NOT NULL,
  `pro_detail` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `pro_discount` int(11) DEFAULT NULL,
  `pro_gift` longtext COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `pro_image` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `products`
--

INSERT INTO `products` (`id`, `pro_code`, `pro_name`, `cate_name`, `pro_brand`, `pro_color`, `pro_price`, `pro_amount`, `pro_sex`, `pro_detail`, `pro_discount`, `pro_gift`, `pro_image`, `created_at`, `updated_at`) VALUES
(13, 'DH0002', 'Áo Sơ Mi Tay Dài', 'Đồng hồ', 'Yame', 'Xanh Đen', 255000, 20, 0, '- Khó nhăn , dễ ủi\r\n- Nhanh khô', 0, NULL, '1679501444.a8dd7e01-4e36-1300-c1b3-00195ca2a46c[1].jpg', '2023-03-22 20:10:44', '2023-03-23 15:48:54'),
(14, 'DH0003', 'Quần Tây Nam', 'Đồng hồ', 'Yame', 'Đen', 385000, 12, 0, '- Mềm mại, bề mặt vải trơn mịn, cảm giác mát mẻ, nhẹ khi mặc.\r\n- Thiết kế quần ống đứng mang đến sự lịch, tự tin nam tính cho người mặc.', NULL, NULL, '1679501564.51abd442-18f4-3600-7c34-0018b9fbbe0c[1].jpg', '2023-03-22 20:12:44', '2023-03-23 15:49:20'),
(15, 'DH0001', 'Casio MTP-VT01L', 'Đồng hồ', 'Casio', 'Bạc', 850000, 12, 0, 'Đồng hồ Nhật', NULL, NULL, '1679502104.Casio-MTP-VT01L-1B-1-1636084438196[1].jpg', '2023-03-22 20:21:44', '2023-03-23 15:49:38'),
(16, 'DH0005', 'Lắc tay cỏ 4 lá', 'Lắc tay', 'TNJ', 'Bạc', 379000, 12, 0, 'Lắc tay bạc nữ vô cực tình yêu vĩnh cửu chất liệu bạc cao cấp 925.\r\n Thiết kế tinh xảo trên công nghệ 3D tiên tiến', NULL, NULL, '1679665809.lac-tay-bac-nu-hinh-co-4-la-ltn0130[1].jpg', '2023-03-24 17:50:09', '2023-03-24 17:50:47'),
(17, 'DH0006', 'BASAS SIMPLE LIFE', 'Giày', 'Ananas', 'Trắng', 490000, 20, 2, 'Giữ vững nét tối giản đặc trưng thuộc dòng Basas, Basas Simple Life - NE (New Episode) sở hữu những đặc điểm nâng cấp ở chất liệu cùng họa tiết foxing mới, sự kết hợp tinh giản không hề đơn điệu, bình thường nhưng không tầm thường cho những ai thực sự yêu thích sự thoải mái đơn giản cho ngày dài hoạt động.', NULL, NULL, '1679665981.Pro_AV00002_1-2[1].jpg', '2023-03-24 17:53:01', '2023-03-24 17:53:01'),
(18, 'DH0008', 'Giày MLB Bigball', 'Giày', 'York Yankees', 'Trắng', 2080000, 15, 2, 'Sản phẩm đến từ thương hiệu MLB nổi tiếng của Hàn Quốc với thiết kế trẻ trung, năng động', NULL, NULL, '1679666168.giay-mlb-bigball-chunky-mesh-new-york-yankees-3ashce12n-50crs-mau-trang-size-260-6237ed72e3b43-21032022101354[1].jpg', '2023-03-24 17:56:08', '2023-03-24 17:56:08'),
(19, 'DH0010', 'Áo Khoác Bomber', 'Áo', 'Yame', 'Nâu', 597000, 12, 1, 'Áo Khoác Bomber Đơn Giản Y Nguyên Bản Ver42. Chất liệu: Kaki nhung gân', NULL, NULL, '1679666727.2d5c6880-9047-4200-e0fb-0019b533893d[1].jpg', '2023-03-24 18:05:27', '2023-03-24 18:05:27'),
(20, 'DH0011', 'Áo khoác nữ Dây kéo', 'Áo', 'Shein', 'Nâu', 466000, 8, 0, 'EMERY ROSE Áo khoác nữ Dây kéo Nút phía trước Sọc ca rô Giải trí', NULL, NULL, '1679666863.1659512140442342dfe288e7b9b46072cdeb5b71cc[1].webp', '2023-03-24 18:07:43', '2023-03-24 18:07:43'),
(21, 'DH0012', 'Quần Baggy Jeans Nam', 'Đồng hồ', 'Zizoou', 'Xanh Dương', 525000, 10, 1, 'Quần Jean Baggy ống suông cao cấp thời trang đường phố.', NULL, NULL, '1679667035.Quan-Baggy-Jean-nam-nu-LightGrey-1-3-ZiZoou-Store[1].jpg', '2023-03-24 18:10:35', '2023-03-24 18:10:35');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`) VALUES
(1, 'Nguyễn Quốc Huy', 'admin@gmail.com', NULL, '$2y$10$E6maZlb6bom2nWsCxXIq8uED9BxiAukFKCN6E/MXagHy.EjU2v42S', NULL, '2023-02-27 00:51:03', '2023-02-27 00:51:03');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Chỉ mục cho bảng `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `password_resets`
--
ALTER TABLE `password_resets`
  ADD PRIMARY KEY (`email`);

--
-- Chỉ mục cho bảng `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Chỉ mục cho bảng `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `category`
--
ALTER TABLE `category`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT cho bảng `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT cho bảng `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT cho bảng `products`
--
ALTER TABLE `products`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
