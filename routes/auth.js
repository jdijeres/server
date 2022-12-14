const express = require('express');
router = express.Router();
require ("dotenv").config();
BigCommerce = require('node-bigcommerce');

const bigCommerce = new BigCommerce({
clientId: process.env.CLIENT_ID,
secret: process.env.SECRET,
callback: process.env.CALLBACK,
responseType: 'JSON'
});

router.get('/', (req, res) => {
bigCommerce.authorize(req.query)
.then(data => console.log(data))
.then(data => res.render('/auth', { title: 'Authorized!' })
.catch(err));
});


module.exports = router;