const db=require('../config/db');

const Funcionario={
getAll:cb=>db.query('SELECT * FROM FUNCIONARIOS', cb),
insert:(data,cb)=>db.query('INSERT INTO FUNCIONARIOS SET ?',data,cb)
};

module.exports = Funcionario;