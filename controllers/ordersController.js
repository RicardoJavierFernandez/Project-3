const db = require('../models');

module.exports = {
    findAll: function(req, res) {
        db.sequelize.query(`
                SELECT 
                    tt.transaction_type,
                    date_format(t.transaction_date, '%m/%d/%Y') as transaction_date,
                    p.product_name,
                    o.price,
                    o.quantity,
                    o.total
                FROM forcastly.Orders o
                LEFT JOIN forcastly.Transactions t
                    on o.transaction_id = t.transaction_id
                LEFT JOIN forcastly.Products p
                    on p.product_id = o.product_id
                LEFT JOIN forcastly.TransactionTypes tt
                    on t.transaction_type_id = tt.transaction_type_id
                ORDER BY t.transaction_id;`
            ) 
            .then((dbOrders) => {
                res.json(dbOrders); 
            }) 
            .catch((err) => {
                res.status(422).json(err);
            });
    },
    findById: function(req, res) {
        db.Orders.findOne({
            where: {
                product_id: req.body.product_id,
                transaction_id: req.body.transaction_id
            }
        })
        .then((dbOrders) => {
            res.json(dbOrders);
        })
        .catch((err) => {
            res.status(422).json(err);
        });
    }
}