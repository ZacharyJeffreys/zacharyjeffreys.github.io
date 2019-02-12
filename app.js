const express = require('express');
const app = express();
const port = 3000

app.use(express.static(__dirname + '/public'))

app.listen(port, ()=>{
  console.log('listening to port' + port)
})


//Get main HTML portfoliopage
app.get('/', (req, res)=>{
  res.sendFile(__dirname + '/views/index.html')
})
