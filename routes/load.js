const express = require('express');
router = express.Router();
require ("dotenv").config();
BigCommerce = require('node-bigcommerce');


const bigCommerce = new BigCommerce({
secret: process.env.SECRET,
responseType: 'JSON'
});

router.get('/', (req, res, next) => {
try {
const data = bigCommerce.verify(req.query['signed_payload']);
console.log(data);
res.render('welcome', { title: 'Welcome!'});
} catch (err) {
next(err);
}
});

module.exports = router;
