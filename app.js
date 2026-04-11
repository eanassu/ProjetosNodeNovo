const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const funcionariosRoutes=require('./routes/funcionariosRoutes');
app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.json());
app.use(express.urlencoded({extended:true}));
app.use('/funcionarios', funcionariosRoutes);
app.set('view engine','ejs');
app.set('views','./views');
module.exports = app;
app.get('/',(req,res)=>res.redirect('/funcionarios'));
app.listen(port,()=>{
    console.log("rodando na porta 3000");
});