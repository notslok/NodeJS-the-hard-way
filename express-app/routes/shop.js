const express = require('express');
const router = express.Router();
const path = require('path');
router.get('/',(req, res, next) => {
    // res.send(`<html>
    //             <body>
    //                 <h1>You are currently in homepage!</h1>
    //                     <form action="/admin/add-products" method="GET">
    //                         <button type="submit">Go to add products</button>
    //                     </form>
    //             </body>
    //           </html>`);
    res.sendFile(path.join(__dirname,"../","views","shop.html"));
});

module.exports = router;