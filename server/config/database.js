const mongoose = require("mongoose");

mongoose.connect(
    process.env.MONGO_URL,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
);

const db = mongoose.connection;

db.on("error", error => console.log("Ha fallado la conexión a Mongo", error));
db.once("open", () => console.log("La conexión con Mongo ha ido correctamente."));