const app = require("./index");
const { host, port } = require("./config.json");
app.listen((host, port), async () => {
  console.log(`Server listening at ${host}:${port}`);
});
