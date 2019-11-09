const router = require('express').Router();
const productsRoutes = require('./products');
const productGroupsRoutes = require('./productgroups');
const forecastAssumptionsRoutes = require('./forecastAssumptions');
const usersRoutes = require('./users');
const transactionType = require('./transactiontypes');
const inventoryRoutes = require('./inventory');

router.use('/products', productsRoutes);
router.use('/productgroups', productGroupsRoutes);
router.use('/assumptions', forecastAssumptionsRoutes);
router.use('/users', usersRoutes);
router.use('/transactiontypes', transactionType);
router.use('/inventory', inventoryRoutes);


module.exports = router;

