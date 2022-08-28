const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database("src/database/sqlite.db", sqlite3.OPEN_READWRITE, (err) => {
    if (err) return console.error(err.message);
});

class FuncionariosController {
    index(req, res) {
        db.all("SELECT * FROM funcionarios", [], (err, row) => {
            return res.json(row);
        })
    }

    create(req, res) {
        try {
            const { name } = req.body;

            if (!name) {
                return res.json({
                    status: 400,
                    success: false,
                    msg: `Parametro name inválido`
                });
            }

            db.run("INSERT INTO funcionarios (name) VALUES(?)", [name], (err) => {
                if (err) return res.json({ status: 300, success: false, error: err.message })
            })

            return res.json({
                status: 200,
                success: true,
                msg: "Funcionario gravado com sucesso" 
            })

        } catch (error) {
            return res.json({
                status: 400,
                success: false
            })
        }
    }
}

module.exports = new FuncionariosController();