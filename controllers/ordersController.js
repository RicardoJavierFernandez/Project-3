const db = require('../models');

module.exports = {
    findAll: function(req, res) {
        db.Orders.findAll({})
            .then((dbOrder) => {
                res.json(dbOrder);
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