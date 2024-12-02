const express = require("express");
const todosRoutes = require("./routes");


const app = express();
app.use("/todos", todosRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
