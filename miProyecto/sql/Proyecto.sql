drop schema miProyecto;
create schema miProyecto;

use miProyecto;

create table usuarios(
id int unsigned primary key auto_increment,
email varchar(200) unique not null,
contrasena varchar(250)  not null,
fotoDeperfil varchar(200),
fecha date,
dni int unsigned,
createdAt timestamp default current_timestamp,
updatedAt timestamp default current_timestamp on update current_timestamp,
deletedAt timestamp default current_timestamp
);
/* cunadoe ejecutas un create de nuevo te tira error*/
/* me daba error por poner text y constraint unique */
/* los campos escribirlos siempre en misuscula */
/* comentarios campo text*/


create table productos(
id int unsigned primary key auto_increment,
nombre varchar(200) not null,
descripcion varchar(500) not null,
usuario_id int unsigned,
createdAt timestamp default current_timestamp,
updatedAt timestamp default current_timestamp on update current_timestamp,
deletedAt timestamp default current_timestamp,
foreign key (usuario_id) references usuarios(id)
);



create table comentarios(
id_post int unsigned primary key auto_increment,
id_usuario int, 
comentario text,
usuario_id int unsigned,
producto_id int unsigned,
createdAt timestamp default current_timestamp,
updatedAt timestamp default current_timestamp on update current_timestamp,
deletedAt timestamp default current_timestamp,
foreign key (usuario_id) references usuarios(id),
foreign key (producto_id) references productos(id)
);

INSERT INTO usuarios(id, email, contrasena, fotoDeperfil, fecha, dni)
VALUES (default, 'Carla12345@gmail.com' , 'PI123456' , '/images/users/foto1.jpg', '10/04/23', '33446677'),
(default, 'FranciscaRomero22@gmail.com' , 'JU123OOP' , '/images/users/foto2.jpg', '25/02/23', '44679877'),
(default, 'NicoleSikorski13@gmail.com' , 'SI193LK56' , '/images/users/foto3.jpg', '02/01/23', '23205040'),
(default, 'PilarMedico75@gmail.com', 'PM12345', '/images/users/foto4.jpg', '12-01-23', '66778899'),
(default, 'Veronica89@gmail.com', 'V22345', '/images/users/foto5.jpg', '12-01-22', '6674599');

INSERT INTO productos(id, nombre, descripcion, usuario_id )
VALUES (default, 'RB Bronzer','Rare Beauty Bronzer, para pieles mixtas.',2 ),
(default, 'Dherma Oil' , 'Serum hidratante Lidherma para rejuvenecer rostro.' , 1),
(default, 'RB Highlighter' , 'Highlighter super luminoso' ,3),
(default, 'Ordinary acid','Acido Ordinary : Funciona como rejuvenecedor para la cara. Super recomendado' , 4),
(default, 'Shiseido hidratante', 'Crema hidratante Shiseido. Recomendado para pieles mixtas', 5);
 




