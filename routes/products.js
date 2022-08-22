// products
const PRODUCTS = require("./json/products.json");
const CATEGORIES = require("./json/product-categories.json");

// add
var add = function (app) {

    // get single
    app.get("/products/get/:id", (req, res) => {
        res.header("Content-Type", 'application/json');

        const id = req.params.id;

        let ret = PRODUCTS.filter(x => x.id === id)[0];

        // return ok
        res.end(JSON.stringify(ret));
    });

    // get all
    app.get("/products/all", (req, res) => {
        res.header("Content-Type", 'application/json');
        res.end(JSON.stringify(PRODUCTS));
    });

    // get featured
    app.get("/products/featured", (req, res) => {
        res.header("Content-Type", 'application/json');

        // filter
        let ret = PRODUCTS.filter(x => x.featured === true);
        ret = ret.sort(x => x.featuredSort ?? 999);

        res.end(JSON.stringify(ret));
    });

    // get filters
    app.post("/products/list", (req, res) => {
        res.header("Content-Type", 'application/json');

        // list
        let ret = PRODUCTS;

        // category filter
        let catgId = req.body.categoryId;
        if (catgId && catgId !== "*") {
            ret = ret.filter(x => x.category === catgId);
        }

        res.end(JSON.stringify(ret));
    });

    // categories
    app.get("/productscategories/all", (req, res) => {
        res.header("Content-Type", 'application/json');
        res.end(JSON.stringify(CATEGORIES));
    });
}

// export
module.exports = { add }