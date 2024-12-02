const express = require("express");
const todosRoutes = require("./routes");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());
app.use("/todos", todosRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
