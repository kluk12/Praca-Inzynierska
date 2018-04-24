-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 13 Kwi 2018, 10:30
-- Wersja serwera: 10.1.30-MariaDB
-- Wersja PHP: 7.2.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `gielda`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `account_balans`
--

CREATE TABLE `account_balans` (
  `id_ab` int(11) NOT NULL,
  `waluta` varchar(50) NOT NULL,
  `symbol` varchar(6) DEFAULT NULL,
  `balans` float NOT NULL,
  `id_user` int(11) NOT NULL,
  `block` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Zrzut danych tabeli `account_balans`
--

INSERT INTO `account_balans` (`id_ab`, `waluta`, `symbol`, `balans`, `id_user`, `block`) VALUES
(1, 'Bitcoin', 'BTC', 570.623, 1, 22.7423),
(2, 'Litecoin', 'LTC', 78.5283, 1, 16.3755),
(3, 'Ethereum', 'ETH', 33.9367, 1, 23.967),
(4, 'Ripple', 'XRP', 1094, 1, 494),
(5, 'Tether', 'USDT', 522.75, 1, 1787.25);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `deposit_history`
--

CREATE TABLE `deposit_history` (
  `id_dh` int(11) NOT NULL,
  `data` datetime NOT NULL,
  `ile` float NOT NULL,
  `id_user` int(11) NOT NULL,
  `waluta` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Zrzut danych tabeli `deposit_history`
--

INSERT INTO `deposit_history` (`id_dh`, `data`, `ile`, `id_user`, `waluta`) VALUES
(1, '2017-11-23 00:00:00', 10, 1, 'BTC'),
(2, '2017-11-16 00:00:00', 1000, 1, 'LTC'),
(3, '2018-03-04 00:00:00', 10000, 1, 'USDT');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `konto`
--

CREATE TABLE `konto` (
  `id_k` int(11) NOT NULL,
  `id_user` int(11) NOT NULL,
  `id_dh` int(11) NOT NULL,
  `id_ab` int(11) NOT NULL,
  `id_oo` int(11) NOT NULL,
  `id_oh` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `open_orders`
--

CREATE TABLE `open_orders` (
  `id_oo` int(11) NOT NULL,
  `data` datetime NOT NULL,
  `typ` tinyint(1) NOT NULL,
  `kurs` float NOT NULL,
  `jednostki` float NOT NULL,
  `id_user` int(11) NOT NULL,
  `limit` float DEFAULT NULL,
  `total` float NOT NULL,
  `market` text
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Zrzut danych tabeli `open_orders`
--

INSERT INTO `open_orders` (`id_oo`, `data`, `typ`, `kurs`, `jednostki`, `id_user`, `limit`, `total`, `market`) VALUES
(40, '2018-03-21 07:19:49', 0, 0.00007899, 100, 0, 0.00007577, 0.007899, 'BTC-XRP'),
(44, '2018-03-21 07:39:17', 0, 8991, 1000, 0, 8921, 0.111222, 'BTC-USDT'),
(45, '2018-03-26 04:55:53', 0, 8075.75, 0, 0, 8075.75, 0, 'BTC-USDT');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `orders_history`
--

CREATE TABLE `orders_history` (
  `id_oh` int(11) NOT NULL,
  `data_otw` datetime NOT NULL,
  `data_zam` datetime NOT NULL,
  `typ` tinyint(1) NOT NULL,
  `kurs_otw` float NOT NULL,
  `jednostki` float NOT NULL,
  `id_User` int(11) NOT NULL,
  `market` varchar(10) DEFAULT NULL,
  `limit` float DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Zrzut danych tabeli `orders_history`
--

INSERT INTO `orders_history` (`id_oh`, `data_otw`, `data_zam`, `typ`, `kurs_otw`, `jednostki`, `id_User`, `market`, `limit`) VALUES
(178, '2018-03-19 04:19:54', '2018-03-19 10:30:17', 1, 8570.66, 566, 0, 'BTC-USDT', 8570.66),
(179, '2018-03-19 04:33:48', '2018-03-19 10:30:17', 0, 0.0000789, 2, 0, 'BTC-XRP', 0.0000788),
(180, '2018-03-19 09:22:35', '2018-03-19 10:30:17', 1, 8435, 0.118554, 0, 'BTC-USDT', 8435),
(181, '2018-03-19 09:03:49', '2018-03-19 10:42:33', 1, 537.351, 1.03284, 0, 'ETH-USDT', 537.351),
(182, '2018-03-19 09:03:35', '2018-03-19 10:50:26', 0, 537.351, 55, 0, 'ETH-USDT', 537.351),
(184, '2018-03-19 04:33:55', '2018-03-21 05:11:29', 1, 0.0000787, 0.00787, 0, 'BTC-XRP', 0.0000788),
(185, '2018-03-19 04:33:10', '2018-03-21 05:11:29', 1, 0.0000788, 0.00788, 0, 'BTC-XRP', 0.0000788),
(186, '2018-03-19 09:09:37', '2018-03-21 05:11:29', 1, 156, 5.04606, 0, 'LTC-USDT', 157.437),
(187, '2018-03-21 07:09:02', '2018-03-21 07:13:08', 1, 8805, 5, 0, 'BTC-USDT', 8825),
(188, '2018-03-21 07:09:12', '2018-03-21 07:13:08', 1, 8505, 5.17637, 0, 'BTC-USDT', 8825),
(189, '2018-03-21 07:11:25', '2018-03-21 07:13:08', 1, 507.691, 0.984851, 0, 'ETH-USDT', 557.691),
(190, '2018-03-21 07:12:29', '2018-03-21 07:13:08', 1, 0.00007572, 0.053004, 0, 'BTC-XRP', 0.00007572),
(191, '2018-03-21 07:12:59', '2018-03-21 07:13:08', 1, 0.000075, 0.0375, 0, 'BTC-XRP', 0.00007572),
(192, '2018-03-21 07:12:03', '2018-03-21 07:16:37', 0, 0.018999, 15, 0, 'BTC-LTC', 0.018991),
(193, '2018-03-21 07:20:18', '2018-03-21 07:21:58', 1, 0.0628, 1.884, 0, 'BTC-ETH', 0.0629),
(194, '2018-03-21 07:09:36', '2018-03-21 07:38:13', 0, 8895, 100, 0, 'BTC-USDT', 8825),
(195, '2018-03-21 07:19:21', '2018-03-21 08:13:00', 0, 0.00007599, 100, 0, 'BTC-XRP', 0.00007577),
(196, '2018-03-21 07:12:42', '2018-03-21 08:13:00', 0, 0.0000758, 200, 0, 'BTC-XRP', 0.00007572),
(197, '2018-03-21 07:21:53', '2018-03-26 02:25:15', 1, 0.018, 0.54, 0, 'BTC-LTC', 0.01894),
(198, '2018-03-21 07:39:01', '2018-03-26 02:25:15', 1, 8821, 0.340097, 0, 'BTC-USDT', 8921);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `user`
--

CREATE TABLE `user` (
  `id_User` int(11) NOT NULL,
  `email` varchar(50) DEFAULT NULL,
  `haslo` varchar(50) DEFAULT NULL,
  `imie` varchar(50) DEFAULT NULL,
  `nazwisko` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Zrzut danych tabeli `user`
--

INSERT INTO `user` (`id_User`, `email`, `haslo`, `imie`, `nazwisko`) VALUES
(1, 'sk', '123', 'Szymon', 'kluk'),
(2, 'a', 'aa', 'aaa', 'aa'),
(3, 'szymekkluk@interia.pl', '123', 'Szymon', 'sks');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indexes for table `account_balans`
--
ALTER TABLE `account_balans`
  ADD PRIMARY KEY (`id_ab`);

--
-- Indexes for table `deposit_history`
--
ALTER TABLE `deposit_history`
  ADD PRIMARY KEY (`id_dh`);

--
-- Indexes for table `konto`
--
ALTER TABLE `konto`
  ADD PRIMARY KEY (`id_k`),
  ADD UNIQUE KEY `id_user` (`id_user`),
  ADD UNIQUE KEY `id_dh` (`id_dh`),
  ADD UNIQUE KEY `id_ab` (`id_ab`),
  ADD UNIQUE KEY `id_oo` (`id_oo`),
  ADD UNIQUE KEY `id_oh` (`id_oh`);

--
-- Indexes for table `open_orders`
--
ALTER TABLE `open_orders`
  ADD PRIMARY KEY (`id_oo`);

--
-- Indexes for table `orders_history`
--
ALTER TABLE `orders_history`
  ADD PRIMARY KEY (`id_oh`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id_User`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT dla tabeli `account_balans`
--
ALTER TABLE `account_balans`
  MODIFY `id_ab` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT dla tabeli `deposit_history`
--
ALTER TABLE `deposit_history`
  MODIFY `id_dh` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT dla tabeli `konto`
--
ALTER TABLE `konto`
  MODIFY `id_k` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT dla tabeli `open_orders`
--
ALTER TABLE `open_orders`
  MODIFY `id_oo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT dla tabeli `orders_history`
--
ALTER TABLE `orders_history`
  MODIFY `id_oh` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=199;

--
-- AUTO_INCREMENT dla tabeli `user`
--
ALTER TABLE `user`
  MODIFY `id_User` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Ograniczenia dla zrzutów tabel
--

--
-- Ograniczenia dla tabeli `konto`
--
ALTER TABLE `konto`
  ADD CONSTRAINT `konto_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `user` (`id_User`),
  ADD CONSTRAINT `konto_ibfk_3` FOREIGN KEY (`id_oh`) REFERENCES `orders_history` (`id_oh`),
  ADD CONSTRAINT `konto_ibfk_4` FOREIGN KEY (`id_ab`) REFERENCES `account_balans` (`id_ab`),
  ADD CONSTRAINT `konto_ibfk_5` FOREIGN KEY (`id_dh`) REFERENCES `deposit_history` (`id_dh`),
  ADD CONSTRAINT `konto_ibfk_6` FOREIGN KEY (`id_oo`) REFERENCES `open_orders` (`id_oo`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
