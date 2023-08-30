const express = require("express");
const app = express();

require("dotenv").config();

let dbconnect = require("./dbConnect");

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const plantRoutes = require("./routes/plantRoutes");
const recentRoutes = require("./routes/recentRoutes")
const favoritesRoutes = require("./routes/favoritesRoutes");
const foldersRoutes = require("./routes/recentRoutes");

const seedPlant = require('./seeds/seedPlant')
seedPlant.seedPlant()

// const seedUser = require('./seeds/seedUser')
// seedUser.seedUsers()

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.use(express.json());

const cors=require("cors");

const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) 
// app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/plant", plantRoutes);
app.use("/api/folders", foldersRoutes);
app.use("/api/recents", recentRoutes);
app.use("/api/favorites", favoritesRoutes);

app.get("/", (req, res) => {
  res.send({ message: "Welcome to Plant Assist" });
});

// app.post('/users', (req, res) => {
//     const { name, email, password } = req.body;
//     // create user logic here
//     res.send('User created successfully!');
//   });

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
