const express = require("express");
const { connectDB } = require("./helpers/db");
const authRouter = require("./routes/auth");
const notesRouter = require("./routes/notes");
const cors = require("cors");



connectDB()

const app = express();

app.use(cors())
app.use(express.json());

app.get('/',(req,res)=>res.send("server running"))

app.use('/auth',authRouter)
app.use('/notes',notesRouter)


app.listen(8080, () => {
  console.log(`server started at Port: ${8080}`);
});

