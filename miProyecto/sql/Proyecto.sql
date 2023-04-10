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
(default, 'Shiseido hidratante', 'Crema hidratante Shiseido. Recomendado para pieles mixtas', 5),
(default, 'Dior lip oil' , 'Dior lip oil para que tus labios esten brillosos todo el dia' , 2),
(default, 'Clinique antiojeras' , 'Clinique crema rejuvenecedora de ojos' ,1),
(default, 'Dior Eye Palette','Dior Eyeshadow Palette: La mejor paleta de ojos que vas a encontrar!' , 3),
(default, 'Laneige Lip Balm', 'Laneige Sleeping Mask. Perfecto para el cuidado de los labios', 4),
(default, 'Loreal antiarrugas' , 'Excelenete crema humectante anti-arrugas LOREAL' , 5);

INSERT INTO comentarios(id_post, id_usuario, comentario, usuario_id, producto_id)
VALUES (default, 'Excelente producto', 1, 1),
(default, 'Producto regular para el precio', 1, 2),
(default, 'Increible, recomendado', 1, 3),
(default, 'Me encanto', 1, 4),
(default, 'Muy bueno', 1, 5),
(default, 'Super lindo', 1, 6),
(default, 'La descripcion es tal cual el producto', 1, 7),
(default, 'Lo volveria a comprar', 1, 8),
(default, 'Tienen envios a todo el pais?', 1, 9),
(default, 'Puedo pagar en cuotas?', 1, 10),
(default, 'Muy util', 2, 1),
(default, 'excelente calidad', 2, 2),
(default, 'Tienen otros colores?', 2, 3),
(default, 'Contiene algo de nuez? Soy alergica', 2, 4),
(default, 'Recomendado siempre', 2, 5),
(default, 'El packaging es impresionante', 2, 6),
(default, 'A mi hija le encanto', 2, 7),
(default, 'Lo podran enviar con papel de regalo?', 2, 8),
(default, 'Excdelente calidad de producto y de packaging', 2, 9);



 




