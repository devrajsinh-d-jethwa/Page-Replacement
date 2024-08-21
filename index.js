const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

const dirPath = path.resolve(__dirname,"../");
app.use(express.static(__dirname));
app.use("/images",express.static(`${dirPath}/Images`));

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/page.html`);
});


app.get("/page-replacement-display",(req,res)=>{
  res.sendFile(`${__dirname}/algo2.html`);
})

app.get("*",(req,res)=>{
  res.sendFile(`${__dirname}/page.html`);
})


app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});