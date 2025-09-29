const express = require(express);

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  console.log(req);
  res.send("<button>Click Me</button>");
});

app.get("/greetings", (req, res) => {
  res.send(" We are greeting you");
});

app.listen(3030, () => {
  console.log(`Server is running on http://localhost:3030`);
});
