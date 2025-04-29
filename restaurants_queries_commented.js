// 1. Mostrar tots els documents en la col·lecció Restaurants.
db.restaurants.find();

// 2. Mostrar restaurant_id, name, borough i cuisine de tots els documents.
db.restaurants.find({}, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1})

// 3. Igual que l'anterior, però excloent el camp _id.
db.restaurants.find({}, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id : 0})

// 4. Mostrar restaurant_id, name, borough i zip code, excloent _id.
db.restaurants.find({}, { restaurant_id: 1, name: 1, borough: 1, "address.zipcode": 1, _id : 0})

// 5. Mostrar tots els restaurants que estan en el Bronx.
db.restaurants.find({ borough: "Bronx" });

// 6. Mostrar els primers 5 restaurants que estan en el Bronx.
db.restaurants.find({ borough: "Bronx" }).limit(5);

// 7. Mostrar els 5 restaurants següents després de saltar els primers 5 del Bronx.
db.restaurants.find({ borough: "Bronx" }).skip(5);

// 8. Trobar restaurants amb score de més de 90.
db.restaurants.find({"grades.score":{$gt:90}});

// 9. Trobar restaurants amb score de més de 80 però menys de 100.
db.restaurants.find({"grades.score":{$gt:80,$lt:100}});

// 10. Restaurants amb latitud menor a -95.754168.
db.restaurants.find({"grades.score":{$gt:80,$lt:100}});

// 11. Restaurants que no siguin 'American', puntuació > 70 i longitud < -65.754168.
db.restaurants.find({$and:[{cuisine : {$ne: "American "}} , {"grades.score":{$gt:70}} , {"address.coord.0":{$lt:-65.754168}}]});

// 12. Igual que l’anterior però sense utilitzar $and.
db.restaurants.find({cuisine : {$ne:"American "} , "grades.score":{$gt:70} , "address.coord.0":{$lt:-65.754168}});

// 13. Restaurants amb grade 'A', no a Brooklyn i cuisine diferent a 'American'. Ordenats descendent per cuisine.
db.restaurants.find({"grades.grade":"A" , borough:{$ne:"Brooklyn"} , cuisine:{$ne:"American "}}).sort({cuisine:-1});

// 14. Restaurants amb 'Wil' com tres primeres lletres del nom.
db.restaurants.find({name:{$regex:"^Wil"}});

// 15. Restaurants amb 'ces' com últimes tres lletres del nom.
db.restaurants.find({name:{$regex:"ces$"}});

// 16. Restaurants amb 'Reg' com tres lletres en qualsevol lloc del nom.
db.restaurants.find({name:{$regex:"Reg"}});

// 17. Restaurants al Bronx amb plats americans o xinesos.
db.restaurants.find({borough:"Bronx", cuisine:{$in:["American ","Chinese"]}},{name:1,borough:1,cuisine:1,_id:0});

// 18. Restaurants a Staten Island, Queens, Bronx o Brooklyn.
db.restaurants.find({borough:{$in:["Staten Island","Queens","Bronx","Brooklyn"]}},{name:1,borough:1,cuisine:1,_id:0});

// 19. Restaurants que no siguin de Staten Island, Queens, Bronx o Brooklyn.
db.restaurants.find({borough:{$nin:["Staten Island","Queens","Bronx","Brooklyn"]}},{name:1,borough:1,cuisine:1,_id:0});

// 20. Restaurants amb marcador no superior a 10.
db.restaurants.find({"grades.score":{$lt:10}});

// 21. Restaurants que preparen peix (no American ni Chinese) o nom comença per 'Wil'.
db.restaurants.find({ $or:[ {cuisine : {$nin:["American ","Chinese"]}}, {name:{$regex:"^Wil"}} ] },{restaurant_id:1,name:1,cuisine:1,_id:0}).toArray();

// 22. Restaurants amb grade "A", score 11 i data "2014-08-11T00:00:00Z".
db.restaurants.find({"grades.grade":"A","grades.score":11,"grades.date":ISODate("2014-08-11T00:00:00Z")});

// 23. Restaurants on el segon element del grade és "A", score 9 i data "2014-08-11T00:00:00Z".
db.restaurants.find({ "grades.1.grade":"A" , "grades.1.score": 9 , "grades.1.date":ISODate("2014-08-11T00:00:00Z")});

// 24. Restaurants amb segon valor de coordenades entre 42 i 52.
db.restaurants.find({"address.coord.1":{$gte:42,$lte:52}});

// 25. Ordenar els restaurants per nom ascendent amb totes les columnes.
db.restaurants.find({}).sort({name:1});

// 26. Ordenar els restaurants per nom descendent amb totes les columnes.
db.restaurants.find({}).sort({name:-1});

// 27. Ordenar cuisine ascendent i pel mateix borough de manera descendent.
db.restaurants.find({},{name:1,borough:1,cuisine:1,_id:0}).sort({cuisine:1,borough:-1});

// 28. Direccions que no contenen el carrer.
db.restaurants.find({"address.street":null});

// 29. Documents on el camp coord és Double.
db.restaurants.find({"address.coord":{$type:"double"}});

// 30. Restaurants amb restaurant_id, name i grade, on score % 7 == 0.
db.restaurants.find( { "grades.score": { $mod: [7, 0] } },  { restaurant_id: 1, name: 1, "grades.grade": 1, _id: 0 } );

// 31. Restaurants amb 'mon' com tres lletres en algun lloc del nom. Mostrar name, borough, longitud, altitud, cuisine.
db.restaurants.find({name:{$regex:"mon",$options:"i"}},{name:1,borough:1,"address.coord":1,cuisine:1,_id:0});

// 32. Restaurants amb 'Mad' com tres primeres lletres del nom. Mostrar name, borough, longitud, latitud, cuisine.
db.restaurants.find({name:{$regex:"^Mad"}},{name:1,borough:1,"address.coord":1,cuisine:1,_id:0});
