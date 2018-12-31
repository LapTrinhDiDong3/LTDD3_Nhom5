-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 21, 2018 at 01:59 AM
-- Server version: 10.1.37-MariaDB
-- PHP Version: 7.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_tintuc`
--

-- --------------------------------------------------------

--
-- Table structure for table `tb_loaitin`
--

CREATE TABLE `tb_loaitin` (
  `id` int(11) NOT NULL,
  `loai_tin` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tb_loaitin`
--

INSERT INTO `tb_loaitin` (`id`, `loai_tin`) VALUES
(1, 'Trong Nước'),
(2, 'Kinh Doanh'),
(3, 'Xe Máy'),
(4, 'Pháp Luật'),
(5, 'Xã Hội'),
(6, 'Thể Thao');

-- --------------------------------------------------------

--
-- Table structure for table `tb_nguoidung`
--

CREATE TABLE `tb_nguoidung` (
  `id` int(11) NOT NULL,
  `ho_ten` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `user` varchar(55) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(55) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(55) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `tb_tintuc`
--

CREATE TABLE `tb_tintuc` (
  `id` int(11) NOT NULL,
  `tieu_de` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `mo_ta` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `hinh_anh` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `noi_dung` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `nguoi_dang` varchar(55) COLLATE utf8mb4_unicode_ci NOT NULL,
  `ngay_dang` varchar(55) COLLATE utf8mb4_unicode_ci NOT NULL,
  `the_loai` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `tb_tintuc`
--

INSERT INTO `tb_tintuc` (`id`, `tieu_de`, `mo_ta`, `hinh_anh`, `noi_dung`, `nguoi_dang`, `ngay_dang`, `the_loai`) VALUES
(2, 'Bộ trưởng Malaysia tự tin đánh bại ĐTVN gây “bão” vì đi giày 1.000 USD', 'Bộ trưởng Thanh niên và Thể thao 26 tuổi của Malaysias, Syed Saddiq Abdul Rahman trở thành chủ đề cho cư dân mạng nước này bàn tán sôi nổi vì xuất hiện với một đôi giày hàng hiếm.', 'hinh2.jpg', 'Hãng thông tấn Malaysia Bernama hôm 13.12 đưa tin, Bộ trưởng Syed Saddiq có kế hoạch đáp chuyến bay đến Việt Nam dể dự khán trận chung kết lượt về giữa ĐT Việt Nam và ĐT Malaysia trong khuôn khổ AFF Cup 2018. Ở trận lượt đi trên sân Malaysia, hai đội đã hòa nhau 2-2.\r\n\r\n\"Tôi sẽ cùng họ sang Việt Nam. Chúng tôi có thể thuê 4 chuyến bay AirAsia. Chúng tôi sẽ đưa thật nhiều Ultras Malaya đến để cổ vũ đội tuyển\", Bộ trưởng Thanh niên và Thể thao 26 tuổi nói.\r\n\r\nBộ trưởng Syed Saddiq nói với truyền thông rằng, ông tin tưởng ĐT Malaysia sẽ đánh bại ĐT Việt Nam để lên ngôi vô địch AFF Cup 2018. \r\n\r\nTrước đó vài ngày, Bộ trưởng Syed Saddiq hồi tuần trước xuất hiện trong một sự kiện của thanh thiếu niên. Người ta nhanh chóng nhận ra Bộ trưởng đi đôi giày Off-White x Nike Converse Chuck Taylor All-Stars, theo Business Insider.', 'Dang Phuong Linh', '2/1/2018', 6),
(3, 'Ngắm Suzuki GSX1300R Hayabusa 2019 - Thế hệ \"Thần gió\" cuối cùng được sản xuất', 'Cùng với việc hầu hết các quốc gia trên thế giới bắt đầu thắt chặt tiêu chuẩn phát thải của các phương tiện xe cơ giới, chúng ta đã phải nói lời tạm biệt với huyền thoại “Thần gió” của Suzuki.', 'hinh3.jpg', 'Sau khi ra mắt lần đầu vào năm 1999 và đã bán được 2 thập kỷ qua, bản nâng cấp đáng chú ý cuối cùng của GSX1300R Hayabusa là 10 năm trước - Hayabusa giữ kỷ lục về chiếc xe máy sản xuất nhanh nhất cho đến khi Kawasaki Ninja H2/H2R hay Ducati Panigale V4S ra mắt.\r\n\r\nVới phiên bản 2019 Suzuki GSX1300R Hayabusa cuối cùng này, Suzuki không còn quá chú trọng vào những công nghệ bổ sung hay thay đổi về thiết kế, thay vào đó, hãng xe chỉ tập trung thay đổi về màu sơn và bộ tem mới của xe.', 'Le Minh Vu', '1/8/2018', 3),
(4, 'Những thống kê “khủng” về đợt bán vé online trận chung kết AFF Cup 2018', 'Đã có trên 1 lượt triệu người với khoảng 39 triệu lượt truy cập vào trang web bán vé online trận chung kết AFF Cup 2018 của VFF.', 'hinh4.jpg', 'Mới đây, Liên đoàn bóng đá Việt Nam (VFF) đã công bố những con số thống kê về đợt bán vé online trận chung kết lượt về AFF Cup 2018 giữa đội tuyển Việt Nam và đội tuyển Malaysia.\r\n\r\nTheo đó, đợt mở bán vé online ngày 10 và 11/12 đã đón trên 1 triệu lượt người và 39 triệu lượt truy cập.\r\n\r\n“Đó là một con số khổng lồ mà nếu với cách bán vé truyền thống thì thực sự rất khó để đáp ứng tối đa nhu cầu”, VFF thông tin.\r\n\r\nTrước đó, từ 10h sáng 10/12, VFF đã chính thức mở bán vé online trận chung kết lượt về AFF Cup 2018. Lúc đỉnh điểm, hệ thống bán vé online đã đón 180.000 lượt người, gấp 2 lần so với đợt mở bán trận bán kết lượt về ngày 28/11 với đội tuyển Philippines.\r\n\r\nTheo báo cáo của bộ phận kỹ thuật VFF, đến 22h30 cùng ngày, website www.vebongdaonline.vn đã có 885.000 lượt người vào để tiến hành giao dịch và 30,2 triệu là con số tổng lượng truy cập sau ngày mở bán đầu tiên.', 'Nguyen Thi My Ai', '2/8/2018', 5),
(5, 'Đại gia Xuân Trường đề xuất xây dự án tâm linh 15.000 tỷ đồng gần Chùa Hương', 'Dự án du lịch tâm linh có quy mô 1.000 ha ở khu vực chùa Hương do Doanh nghiệp Tư nhân Xuân Trường đề xuất. ', 'hinh5.jpg', 'Sở Kế hoạch & Đầu tư TP Hà Nội vừa có văn bản gửi UBND TP Hà Nội báo cáo việc Doanh nghiệp xây dựng tư nhân Xuân Trường có đề xuất thực hiện siêu dự án du lịch tâm linh có quy mô 1.000 ha ở khu vực chùa Hương với tổng vốn đầu tư dự kiến là 15.000 tỷ đồng. Đây là doanh nghiệp do ông Nguyễn Văn Trường (sinh năm 1963, tại Hoa Lư, Ninh Bình) làm Tổng giám đốc. Doanh nghiệp này cũng được biết đến là chủ đầu tư một loạt dự án tâm linh hàng chục nghìn tỷ đồng. \r\n\r\nTheo đề xuất, doanh nghiệp sẽ xây dựng khu du lịch tâm linh Hương Sơn tại xã Hương Sơn, huyện Mỹ Đức. Trong đó, phía Bắc của dự án được đề xuất giáp khu bến đò Suối Yến, phía Nam giáp khu du lịch Tam Chúc – Ba Sao của tỉnh Hà Nam, phía Tây là dãy núi giáp với tỉnh Hòa Bình, phía Đông giáp sông Đáy.', 'Dang Phuong Linh', '10/4/2019', 2),
(6, 'Cảnh sát truy đuổi tài xế có súng ở trên xe', 'Khi chặn được xe của Thường, cảnh sát Quảng Trị phát hiện có súng, mã tấu, dao và chất nghi ma túy.', 'hinh6.jpg', 'Trưa 13/12, trên quốc lộ 1A đoạn qua thị trấn Gio Linh (huyện Gio Linh, Quảng Trị), cảnh sát giao thông phát hiện một xe bán tải chạy quá tốc độ.\r\n\r\nTài xế không chấp hành hiệu lệnh dừng xe, buộc cảnh sát phải truy đuổi. Sau khoảng 20 km, đến trạm thu phí BOT Trường Thịnh ở xã Triệu Ái (Triệu Phong, Quảng Trị), chiếc xe bị chặn lại.\r\n\r\nTại trụ sở Phòng cảnh sát giao thông tỉnh Quảng Trị, tài xế khai tên Lương Văn Thường, 31 tuổi, trú tỉnh Sơn La.', 'Nguyen Thi My Ai', '1/10/2018', 4),
(7, 'Làng WWE \"đỏ mặt\": Nam lực sỹ thua ê chề vì dính \"mỹ nhân kế\"', '(Tin thể thao) Mải nhìn \"vòng 1\" đô vật nữ xinh đẹp, huyền thoại WWE đã để thua đối thủ Vince McMahon.', 'hinh7.jpg', 'Tình huống \"đỏ mặt\" diễn ra tại sự kiện đấu vật Mỹ - WWE Smackdown 2003. Không phân thắng bại bằng màn đấu vật thông thường, huyền thoại Hulk Hogan và Vince McMahon bất ngờ so tài bằng cách vật tay.\r\n\r\nKhi hai lực sỹ đứng trên bàn so tài, bất ngờ nữ đô vật Sable đã giở chiêu \"mỹ nhân kế\". Đứng đối diện với góc nhìn của Hulk Hogan, cựu nữ đô vật bất ngờ khoe \"vòng 1\" khiến huyền thoại Hogan mất tập trung thi đấu nên để thua bẽ bàng. Đây là một trong những tình huống đáng nhớ của làng đấu vật WWE.', 'Do Minh Van', '1/10/2018', 6),
(8, 'Hôm nay Đà Nẵng lấy phiếu tín nhiệm 24 lãnh đạo', 'Chủ tịch HĐND thành phố, Giám đốc Sở Tài nguyên và Môi trường, cùng nhiều lãnh đạo khác ở Đà Nẵng mới nhậm chức nên chưa lấy phiếu tín nhiệm.', 'hinh1.jpg', 'Kỳ họp thứ 9 HĐND TP Đà Nẵng sẽ diễn ra vào ngày 17 đến 19/12. Trong đó HĐND thành phố sẽ lấy phiếu tín nhiệm với 24 vị trí lãnh đạo chủ chốt của UBND và HĐND.\r\n\r\nTheo đó, khối chính quyền sẽ gồm ông Huỳnh Đức Thơ - Chủ tịch UBND, ba trong số bốn chức danh Phó chủ tịch UBND, cùng 17 ủy viên UBND thành phố. Phía HĐND thành phố sẽ có ba người là chánh văn phòng và hai trưởng ban.\r\n\r\nThường trực HĐND TP Đà Nẵng cũng đưa ra danh sách chín người không lấy phiếu tín nhiệm kỳ này vì thời gian nhậm chức chưa đủ 9 tháng. Trong đó có ông Nguyễn Nho Trung (Chủ tịch HĐND), ông Lê Minh Trung (Phó chủ tịch HĐND), ông Trần Chí Cường (Trưởng Ban Kinh tế Ngân sách HĐND), ông Nguyễn Thành Tiến (Trưởng Ban Đô thị HĐND).', 'Dang Phuong Linh', '12/1/2018', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tb_loaitin`
--
ALTER TABLE `tb_loaitin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tb_nguoidung`
--
ALTER TABLE `tb_nguoidung`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tb_tintuc`
--
ALTER TABLE `tb_tintuc`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tb_loaitin`
--
ALTER TABLE `tb_loaitin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `tb_nguoidung`
--
ALTER TABLE `tb_nguoidung`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `tb_tintuc`
--
ALTER TABLE `tb_tintuc`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
