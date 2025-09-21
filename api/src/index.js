require("dotenv/config");
const mongoose = require("mongoose");
require("./models/user");
require("./models/token");
const db = require("./utils/db");
const app = require("./app");

async function main() {
  const MONGODB_URI = process.env.MONGODB_URI;
  if (!MONGODB_URI) {
    throw new Error("Please define the MONGODB_URI environment variable");
  }
  await db.connect(MONGODB_URI);
  mongoose.Promise = global.Promise;

  const PORT = process.env.PORT || 3000;
  app.set("port", PORT);

  const port = app.get("port");
  app.listen(port, () => {
    console.log(`Express running on PORT ${port}`);
  });
}

main().catch((err) => {
  console.error(err);
});
