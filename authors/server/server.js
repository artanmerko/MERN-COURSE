const express =  require('express');
const app = express();
const port = 8000;

require('./config/mongoose.config');

app.use(express.json());
app.use(express.urlencoded({ extended:true }));

require('../server/routes/author.routes')(app)

app.listen(port,()=>{
  console.log(`Connecting at port : ${port}`)
})