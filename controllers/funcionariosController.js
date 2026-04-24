const Funcionario = require("../models/funcionarioModel");

exports.inicio=(req,res)=>res.render('funcionarios/index');
exports.cadastro=(req,res)=>res.render('funcionarios/cadastro');

function formatDateToMySQL(dateStr) {
    if (!dateStr) return null;
    const [day,month,year] = dateStr.split('/');
    return year+"-"+month.padStart(2,'0')+"-"+day.padStart(2,"0");
}

exports.new=(req,res) => {
    console.log('vai inserir no banco de dados');
    req.body.dataAdmissao=formatDateToMySQL(req.body.dataAdmissao);
    Funcionario.insert(req.body, (err,result) => {
        if(err)
          return res.status(500).send('erro ao inserir Funcionário');
        res.redirect('/funcionarios');
    });
}

exports.lista=(req,res)=>{
    Funcionario.getAll((err,results) => {
        if(err) return res.status(500).send('erro no select');
        res.render('funcionarios/lista',{funcionarios: results});
    });
};