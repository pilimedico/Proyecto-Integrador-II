drop schema miProyecto;
create schema miProyecto;

use miProyecto;

create table usuarios(
id int unsigned primary key auto_increment,
nombre varchar(200) not null,
email varchar(200) unique not null,
contrasena varchar(250)  not null,
fotoDeperfil varchar(200),
fecha date,
dni int unsigned,
createdAt timestamp default current_timestamp,
updatedAt timestamp default current_timestamp on update current_timestamp,
deletedAt timestamp default current_timestamp
);



create table productos(
id int unsigned primary key auto_increment,
nombre varchar(200) not null,
descripcion varchar(500) not null,
cover text,
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

create table likes(
id_post int unsigned primary key auto_increment,
usuario_id int unsigned,
producto_id int unsigned,
createdAt timestamp default current_timestamp,
updatedAt timestamp default current_timestamp on update current_timestamp,
deletedAt timestamp default current_timestamp,
foreign key (usuario_id) references usuarios(id),
foreign key (producto_id) references productos(id)
);

INSERT INTO usuarios(id, nombre, email, contrasena, fotoDeperfil, fecha, dni)
VALUES (default, 'Carla Rodriguez', 'Carla12345@gmail.com' , '$2a$04$VzfjZVHAoQZOXwHpS4Pc2u7aRikSBKimpBTc7SLfTLtZAZE3jLH2y' , '/images/users/foto1.jpg', '10/04/23', '33446677'),
(default, 'Francisca Romero','FranciscaRomero22@gmail.com' , '$2a$04$VzfjZVHAoQZOXwHpS4Pc2u7aRikSBKimpBTc7SLfTLtZAZE3jLH2y' , '/images/users/fran.jpg', '25/02/23', '44679877'),
(default, 'Nicole Sikorski','NicoleSikorski13@gmail.com' , '$2a$04$VzfjZVHAoQZOXwHpS4Pc2u7aRikSBKimpBTc7SLfTLtZAZE3jLH2y' , '/images/users/niki.jpg', '02/01/23', '23205040'),
(default, 'Pilar Médico','PilarMedico75@gmail.com', '$2a$04$VzfjZVHAoQZOXwHpS4Pc2u7aRikSBKimpBTc7SLfTLtZAZE3jLH2y', '/images/users/pili2.jpg', '12-01-23', '66778899'),
(default, 'Veronica Aides','Veronica89@gmail.com', '$2a$04$VzfjZVHAoQZOXwHpS4Pc2u7aRikSBKimpBTc7SLfTLtZAZE3jLH2y', '/images/users/foto5.jpg', '12-01-22', '6674599');

INSERT INTO productos(id, nombre, descripcion, cover, usuario_id )
VALUES (default, 'RB Bronzer','Rare Beauty Bronzer, para pieles mixtas.', '/images/products/rare2.jpg', 2 ),
(default, 'Dherma Oil' , 'Serum hidratante Lidherma para rejuvenecer rostro.' , '/images/products/serum_rosa.jpg',1),
(default, 'RB Highlighter' , 'Highlighter super luminoso' , '/images/products/rare.jpg',3),
(default, 'Ordinary acid','Acido Ordinary : Funciona como rejuvenecedor para la cara. Super recomendado' , '/images/products/ordinary2.jpg',4),
(default, 'Shiseido hidratante', 'Crema hidratante Shiseido. Recomendado para pieles mixtas', '/images/products/shisheido.jpg',5),
(default, 'Dior lip oil' , 'Dior lip oil para que tus labios esten brillosos todo el dia' , '/images/products/dior.jpg', 2),
(default, 'Clinique antiojeras' , 'Clinique crema rejuvenecedora de ojos' , '/images/products/cliniqueojos.jpg', 1),
(default, 'Dior Eye Palette','Dior Eyeshadow Palette: La mejor paleta de ojos que vas a encontrar!' , '/images/products/dior2.jpg',3),
(default, 'Laneige Lip Balm', 'Laneige Sleeping Mask. Perfecto para el cuidado de los labios', '/images/products/laneige3.jpg',4),
(default, 'Loreal antiarrugas' , 'Excelenete crema humectante anti-arrugas LOREAL' , '/images/products/loreal.jpg',5);

INSERT INTO comentarios(id_post, comentario, usuario_id, producto_id)
VALUES (default, 'Excelente producto', 1, 1),
(default, 'Producto regular para el precio', 1, 2),
(default, 'Increible, recomendado', 1, 3),
(default, 'Me encanto', 1, 4),
(default, 'Muy bueno', 1, 5),
(default, 'Super lindo', 5, 1),
(default, 'La descripcion es tal cual el producto', 1, 7),
(default, 'Lo volveria a comprar', 1, 8),
(default, 'Tienen envios a todo el pais?', 1, 9),
(default, 'Puedo pagar en cuotas?', 1, 10),
(default, 'Muy util', 2, 1),
(default, 'excelente calidad', 5, 2),
(default, 'Tienen otros colores?', 2, 3),
(default, 'Contiene algo de nuez? Soy alergica', 2, 4),
(default, 'Recomendado siempre', 2, 5),
(default, 'El packaging es impresionante', 2, 6),
(default, 'A mi hija le encanto', 5, 7),
(default, 'Lo podran enviar con papel de regalo?', 2, 8),
(default, 'Excdelente calidad de producto y de packaging', 2, 9),
(default, 'Pesima calidad', 2, 10),
(default, 'Hay compra minima?', 3, 1),
(default, 'Excelente realcion precio calidad', 3, 2),
(default, 'No me resulto util', 3, 3),
(default, 'Es apto para celiacos?', 5, 4),
(default, 'Se lo regale a una amiga y le encanto', 3, 5),
(default, 'Cuanto tiempo demora el envio?', 3, 6),
(default, 'Buen producto', 3, 7),
(default, 'Me resulto genial', 3, 8),
(default, 'Si compro hoy, llega para mañana?', 3, 9),
(default, 'No esperaba mucho y me sorprendio. Lo super recomiendo', 3, 10),
(default, 'Probe productos de esta marca pero no este y me re gusto', 4, 1),
(default, 'Me pueden explicar como usarlo?', 4, 2),
(default, 'Escencial, lo uso y lo recomiendo', 5, 3),
(default, 'Indispensable', 4, 4),
(default, 'Tienen stock de otro color?', 4, 5),
(default, 'Muy bueno para usar diariamnente', 4, 6),
(default, 'Tienen envios a salta?', 4, 7),
(default, 'Excelente', 4, 8),
(default, 'Lo uso diariamente, muy bueno', 4, 9),
(default, 'Es un must have', 4, 10);







 




