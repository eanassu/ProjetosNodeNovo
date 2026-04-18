const db=require('../config/db');

const Funcionario={
insert:(data,cb)=>db.query('INSERT INTO FUNCIONARIOS SET ?',data,cb)
};

module.exports = Funcionario;