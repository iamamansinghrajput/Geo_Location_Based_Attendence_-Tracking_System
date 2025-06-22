const mongoose = require("mongoose");

//code clique
//const DB = "mongodb+srv://debabratodas729:qzqRYddVN5eFh72K@database1.u7jnn.mongodb.net/?retryWrites=true&w=majority&appName=Database1";
 
//infinito uiux
const DB = "mongodb+srv://debabratodas930:8210003751@main.zqg9q2v.mongodb.net/?retryWrites=true&w=majority&appName=main"

//new database 
//const DB = "mongodb+srv://debabratodas930:8210003751@cluster0.wcyen.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

//testing
//nslookup main.zqg9q2v.mongodb.net 
 
//new infinito 
//const DB = "mongodb+srv://debabratodas930:8210003751>@cluster0.bk5qdyy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(DB, {}) 
.then(() => console.log("Connection successful"))
.catch((error) => {
    console.error("MongoDB connection error:", error);
    console.error("Cause:", error.cause);
});  