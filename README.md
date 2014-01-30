express_basic
=============

node stylus/jade express basic server

It's very simple

+ <a href="http://shapeshed.com/creating-a-basic-site-with-node-and-express/"> creating a basic express with node </a>

```
cd express_example && npm install
```


This will install packages and you will see a lot of output. When this is complete you can boot your application.

Boot the app

That's all the setup you need. Phew. Now you can boot the app:
```
npm install -g express
express -c stylus express_example
node app.js
```

+ Adding mongoose driver to conect node and mongoDB -> package.json
+ Create a file called db.js for db schema
+ insert db.js path at top of app.js
+ redo index.js to connect with new mongo DB

#new_features
+ Adding restAPI CRUD methods
+ New db_model
+ Delete Method is working using a HACK get method
+ Adding nodemon, similar to grunt watch, there's no need to restart server, it does automatically
+ Adding pm2 to keep server live

basic mogo commands
==========
```
show dbs
use dbs_name
db.dropDatabase();
show collections
db.collection_name.find().pretty()
db.collection_name.drop()
```
