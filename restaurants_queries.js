db.restaurants.find();
db.restaurants.find({}, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1})
db.restaurants.find({}, { restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id : 0})
db.restaurants.find({}, { restaurant_id: 1, name: 1, borough: 1, "address.zipcode": 1, _id : 0})
db.restaurants.find({ borough: "Bronx" });
db.restaurants.find({ borough: "Bronx" }).limit(5);
db.restaurants.find({ borough: "Bronx" }).skip(5);
db.restaurants.find({"grades.score":{$gt:90}});
db.restaurants.find({"grades.score":{$gt:80,$lt:100}});
db.restaurants.find({"grades.score":{$gt:80,$lt:100}});
db.restaurants.find({$and:[{cuisine : {$ne: "American "}} , {"grades.score":{$gt:70}} , {"address.coord.0":{$lt:-65.754168}}]});
db.restaurants.find({cuisine : {$ne:"American "} , "grades.score":{$gt:70} , "address.coord.0":{$lt:-65.754168}});
db.restaurants.find({"grades.grade":"A" , borough:{$ne:"Brooklyn"} , cuisine:{$ne:"American "}}).sort({cuisine:-1});
db.restaurants.find({name:{$regex:"^Wil"}});
db.restaurants.find({name:{$regex:"ces$"}});
db.restaurants.find({name:{$regex:"Reg"}});
db.restaurants.find({borough:"Bronx", cuisine:{$in:["American ","Chinese"]}},{name:1,borough:1,cuisine:1,_id:0});
db.restaurants.find({borough:{$in:["Staten Island","Queens","Bronx","Brooklyn"]}},{name:1,borough:1,cuisine:1,_id:0});
db.restaurants.find({borough:{$nin:["Staten Island","Queens","Bronx","Brooklyn"]}},{name:1,borough:1,cuisine:1,_id:0});
db.restaurants.find({"grades.score":{$lt:10}});
db.restaurants.find({ $or:[ {cuisine : {$nin:["American ","Chinese"]}}, {name:{$regex:"^Wil"}} ] },{restaurant_id:1,name:1,cuisine:1,_id:0}).toArray();
db.restaurants.find({"grades.grade":"A","grades.score":11,"grades.date":ISODate("2014-08-11T00:00:00Z")});
db.restaurants.find({ "grades.1.grade":"A" , "grades.1.score": 9 , "grades.1.date":ISODate("2014-08-11T00:00:00Z")});
db.restaurants.find({"address.coord.1":{$gte:42,$lte:52}});
db.restaurants.find({}).sort({name:1});
db.restaurants.find({}).sort({name:-1});
db.restaurants.find({},{name:1,borough:1,cuisine:1,_id:0}).sort({cuisine:1,borough:-1});
db.restaurants.find({"address.street":null});
db.restaurants.find({"address.coord":{$type:"double"}});
db.restaurants.find( { "grades.score": { $mod: [7, 0] } },  { restaurant_id: 1, name: 1, "grades.grade": 1, _id: 0 } );
db.restaurants.find({name:{$regex:"mon",$options:"i"}},{name:1,borough:1,"address.coord":1,cuisine:1,_id:0});
db.restaurants.find({name:{$regex:"^Mad"}},{name:1,borough:1,"address.coord":1,cuisine:1,_id:0});