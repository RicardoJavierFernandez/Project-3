const db = require('../models');

module.exports = {
    findAll: function(req, res) {
        db.Inventory.findAll({})
            .then((dbInventory) => {
                res.json(dbInventory)
            })
            .catch((err) => {
                res.status(422).json(err);
            });
    },
    findById: function(req, res) {
        db.Inventory.findOne({
            where: {
                product_id: req.params.id
            }
        })
        .then((dbInventory) => {
            res.json(dbInventory)
        })
        .catch((err) => {
            res.status(422).json(err);
            });
    },
    create: function(req, res) {
        db.Inventory.create(req.body)
            .then((dbInventory) => {
                res.json(dbInventory);
            })
            .catch((err) => {
                res.status(422).json(err);
            });
    },
    update: function(req, res) {
        db.Inventory.update(req.body, {
            where: {
                id: req.params.id
            }
        })
        .then((dbInventory) => {
            res.json(dbInventory);
        })
        .catch((err) => {
            res.status(422).json(err);
        })
    },
    delete: function(req, res) {
        db.Inventory.destroy({
            where: {
                id: req.params.id
            }
        });
    }
}