const db = require('../models');

module.exports = {
    findByEmail: function(req, res) {
        db.Users.findOne({
            where: {
                email: req.body.email
            }
        })
        .then((dbUser) => {
            if(dbUser) {
                res.json({'message': 'Successfully logged in!'})
            }
            else {
                res.json({'message': 'Email does not exist, please use a valid email. or sign up.'})
            }
        })
        .catch((err) => {
            res.status(422).json(err);
            });
    },
    create: function(req, res) {
        db.Users.create(req.body)
            .then(() => {
                res.json({'message': 'You successfully signed up'});
            })
            .catch((err) => {
                res.status(422).json(err);
            });
    },
    update: function(req, res) {
        db.Users.update(req.body, {
            where: {
                email: req.body.email
            }
        })
        .then((dbUsers) => {
            res.json(dbUsers);
        })
        .catch((err) => {
            res.status(422).json(err);
        });
    }
}