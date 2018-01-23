-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-01-2018 a las 04:00:17
-- Versión del servidor: 10.1.9-MariaDB
-- Versión de PHP: 5.5.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `deportes`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categoria`
--

CREATE TABLE `categoria` (
  `id_categoria` int(11) NOT NULL,
  `nombre_categoria` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `categoria`
--

INSERT INTO `categoria` (`id_categoria`, `nombre_categoria`) VALUES
(1, 'DE TIRO'),
(2, 'ACUATICOS'),
(3, 'DE SALON'),
(4, 'DE LUCHA');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `deporte`
--

CREATE TABLE `deporte` (
  `deporte_id` int(11) NOT NULL,
  `deporte_nombre` varchar(200) NOT NULL,
  `deporte_descripcion` text NOT NULL,
  `deporte_imagen_p` varchar(200) NOT NULL,
  `deporte_imagen_s` varchar(200) NOT NULL,
  `deporte_categoria_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `deporte`
--

INSERT INTO `deporte` (`deporte_id`, `deporte_nombre`, `deporte_descripcion`, `deporte_imagen_p`, `deporte_imagen_s`, `deporte_categoria_id`) VALUES
(1, 'TIRO CON ARCO', 'El tiro con arco, o arquería, es el deporte, práctica o habilidad de utilizar\r\n un arco para propulsar flechas. Aunque históricamente se ha practicado el tiro\r\n con arco para la caza o la guerra, en tiempos modernos esta actividad ha pasado\r\n a tener fines principalmente recreativos o competitivos. La persona que practica\r\n la arquería es llamada arquero.', '../img2/TIRO_ARCO.jpg', '', 1),
(2, 'TIRO AL PLATO', 'El tiro al plato, tiro al platillo o tiro al vuelo, es una de las dos modalidades del \r\ntiro deportivo y es considerado como uno de los deportes olímpicos contemporáneos.\r\nEl tiro al plato básicamente en cualquiera de sus modalidades consiste en disparar \r\ncon un arma y un cartucho a un plato en movimiento, dicho movimiento lo produce la \r\nmaquina lanza platos, rompiendo o derribando la mayor cantidad de platos', '../img2/TIPO_PLATO.jpg', '', 1),
(3, 'ESQUI ACUATICO', 'El esquí acuático, también llamado esquí náutico, es un deporte que mezcla el surf y el esquí. \r\nFue deporte de exhibición en los Juegos Olímpicos de Múnich 1972.1?\r\nEste deporte en el que se alcanzan altas velocidades, exige buenos reflejos y equilibrio. Los \r\nparticipantes esquían sobre el agua agarrados a una cuerda tirada por una lancha de gran potencia\r\n realizando maniobras espectaculares sobre uno o dos esquís.', '../img2/ESQUI_ACUATICO.jpg', '', 2),
(4, 'SURF', 'El surf es un deporte acuático que consiste en deslizarse y hacer giros en una ola, de pie sobre una tabla.', '../img2/SURF.jpg', '', 2),
(5, 'TENIS DE MESA ', 'El tenis de mesa (también conocido popularmente como ping-pong o pimpón)1?2? es un deporte de \r\nraqueta que se disputa entre dos jugadores o dos parejas (dobles). Es un deporte olímpico desde \r\nSeúl 1988, y el deporte con mayor número de practicantes, con 40 millones de jugadores compitiendo \r\nen todo el mundo.3?4?5? Según un estudio realizado por la NASA, es el deporte más complicado que un \r\nser humano puede practicar a nivel profesional.6?7?8? Diversos estudios han demostrado que la práctica\r\n de este deporte mejora, entre otras, la capacidad y el tiem', '../img2/TENIS_MESA.jpg', '', 3),
(6, 'DARDOS', 'El blanco es el centro de una diana, y por extensión el nombre dado a cualquier disparo que golpea \r\nal blanco. Metafóricamente, se usa la expresión "darle al blanco" para referirse a un éxito inesperadamente \r\nbueno.', '../img2/DARDOS.JPG', '', 3),
(7, 'ARTES MARCIALES', 'Los términos arte marcial, artes marciales y artes militares aluden a aquellas prácticas \r\ny tradiciones codificadas cuyo objetivo es someter o defenderse mediante la técnica. Hay\r\n varios estilos y escuelas de artes marciales que habitualmente excluyen el empleo de armas\r\n de fuego u otro tipo de armamento moderno', '../img2/ARTES_MARCIALES.jpg', '', 4),
(8, 'ESGRIMA', 'La esgrima, conocida también como esgrima deportiva para diferenciarla de la esgrima histórica,\r\n es un deporte de combate en el que se enfrentan dos contrincantes debidamente protegidos que deben \r\nintentar tocarse con un arma blanca, en función de la cual se diferencian tres modalidades: sable, \r\nespada y florete. Su definición es "arte de defensa y ataque con una espada, florete o un arma similar"', '../img2/ESGRIMA.jpg', '', 4);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`id_categoria`);

--
-- Indices de la tabla `deporte`
--
ALTER TABLE `deporte`
  ADD PRIMARY KEY (`deporte_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categoria`
--
ALTER TABLE `categoria`
  MODIFY `id_categoria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- AUTO_INCREMENT de la tabla `deporte`
--
ALTER TABLE `deporte`
  MODIFY `deporte_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
