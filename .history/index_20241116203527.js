const express = require("express");

let app = express();

// console.dir(app);

let port = 3000;

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});


app.use(())