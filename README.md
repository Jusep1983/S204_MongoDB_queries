# S204_MongoDB_queries

📄 **Descripción**

Este repositorio contiene un conjunto de consultas MongoDB aplicadas sobre una colección de objetos `Restaurant` de la ciudad de Nueva York. El objetivo es practicar y demostrar habilidades en la construcción de consultas para bases de datos NoSQL.

---

🔽 **Enunciado**

Tenemos una colección de objetos `Restaurant` en la ciudad de Nueva York y necesitamos realizar diferentes consultas. ¿Puedes ayudarnos?

1. Mostrar todos los documentos en la colección `restaurants`.  
2. Mostrar `restaurant_id`, `name`, `borough` y `cuisine` de todos los documentos.  
3. Igual que la anterior, pero excluyendo el campo `_id`.  
4. Mostrar `restaurant_id`, `name`, `borough` y `zipcode`, excluyendo `_id`.  
5. Mostrar todos los restaurantes que están en el Bronx.  
6. Mostrar los primeros 5 restaurantes que están en el Bronx.  
7. Mostrar los siguientes 5 restaurantes después de omitir los primeros 5 del Bronx.  
8. Encontrar restaurantes con `score` mayor de 90.  
9. Restaurantes con `score` mayor de 80 pero menor de 100.  
10. Restaurantes con latitud menor a -95.754168.  
11. Restaurantes que no sean 'American', con `score` > 70 y longitud < -65.754168.  
12. Igual que la anterior pero sin usar `$and`.  
13. Restaurantes con `grade` 'A', que no estén en Brooklyn y con `cuisine` distinta a 'American'. Ordenados por `cuisine` descendente.  
14. Restaurantes con 'Wil' como las tres primeras letras del nombre.  
15. Restaurantes con 'ces' como las tres últimas letras del nombre.  
16. Restaurantes con 'Reg' en cualquier parte del nombre.  
17. Restaurantes en el Bronx que sirvan comida americana o china.  
18. Restaurantes en Staten Island, Queens, Bronx o Brooklyn.  
19. Restaurantes que **no** estén en Staten Island, Queens, Bronx ni Brooklyn.  
20. Restaurantes con puntuación no superior a 10.  
21. Restaurantes que sirvan pescado (excluyendo American y Chinese) o cuyo nombre empiece por 'Wil'.  
22. Restaurantes con `grade` "A", `score` 11 y fecha `"2014-08-11T00:00:00Z"`.  
23. Restaurantes donde el segundo elemento de `grades` es "A", `score` 9 y fecha `"2014-08-11T00:00:00Z"`.  
24. Restaurantes cuyo segundo valor de `coord` esté entre 42 y 52.  
25. Ordenar los restaurantes por nombre ascendente mostrando todas las columnas.  
26. Ordenar los restaurantes por nombre descendente mostrando todas las columnas.  
27. Ordenar por `cuisine` ascendente y `borough` descendente.  
28. Direcciones que **no** contienen el campo `street`.  
29. Documentos donde el campo `coord` es de tipo `Double`.  
30. Restaurantes con `restaurant_id`, `name` y `grade` donde `score % 7 == 0`.  
31. Restaurantes con 'mon' en alguna parte del nombre. Mostrar `name`, `borough`, longitud, latitud y `cuisine`.  
32. Restaurantes con 'Mad' como tres primeras letras del nombre. Mostrar `name`, `borough`, longitud, latitud y `cuisine`.

---

🏅 **Niveles de Dificultad**

- **Nivel 1**: 17 consultas correctas.  
- **Nivel 2**: Entre 17 y 25 consultas correctas.  
- **Nivel 3**: Más de 25 consultas correctas.

---

💻 **Tecnologías Utilizadas**

- MongoDB como sistema gestor de base de datos  
- MongoDB Compass para ejecución y validación de las consultas  
- Git y GitHub como sistema de control de versiones

---

📋 **Requisitos**

- Tener instalado MongoDB Server  
- Utilizar MongoDB Compass o cualquier cliente compatible  
- Tener instalado Git para clonar el repositorio

---

🛠️ **Instalación**

1. Clona el repositorio:

		git clone https://github.com/Jusep1983/S204_MongoDB_queries.git

2. Descomprime el archivo restaurants.zip para obtener la base de datos.

3. Importa la colección en MongoDB usando MongoDB Compass o terminal:

		mongoimport --db nombre_de_tu_db --collection restaurants --file ruta_al_archivo.json --jsonArray

---


▶️ **Ejecución**

- Ejecuta las consultas incluidas en el archivo queries.js dentro de MongoDB Compass o desde la consola.

- El archivo principal restaurants_queries.js contiene las consultas ofuscadas (una por línea).

- También se incluye (opcional) un archivo restaurants_queries_commented.js con las consultas y anotaciones explicativas.

---

🌐 **Despliegue**

Este proyecto está pensado para entorno local. No se contempla despliegue online.

---

🤝 **Contribuciones**

Si deseas colaborar, puedes:

- Abrir una issue con sugerencias o problemas

- Hacer un fork y luego una pull request con tus propuestas de mejora

---

¡Gracias por tu interés en este proyecto! 🚀
