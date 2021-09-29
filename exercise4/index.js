const express = require('express')
const app = express()
const port = 3005
const data = require('./data.json')
const cors = require('cors')

app.use(express.json());
app.use(cors());

let products = data.products;
let users = data.users;
let invoices = data.invoices;

/* GET all products */
app.get('/products', (req, res) => {
    res.json(products);
})

/* GET all users */
app.get('/users', (req, res) => {
    res.json(users);
})

/* GET all invoices */
app.get('/invoices', (req, res) => {
    let idCounter = 1;
    invoices.map(i => i.id = idCounter++)
    res.json(invoices);
})


/* GET single product */
app.get('/products/:id', (req, res) => {
    const id = Number(req.params.id);
    const product = products.find(p => p.id === id);

    if(product) {
        console.log(product);
        res.json(product);
    }
    else {
        console.log("No product found!");
        res.status(404).end();
    }
    
})

/* GET single user */
app.get('/users/:id', (req, res) => {
    const id = Number(req.params.id);
    const user = users.find(u => u.id === id);
    
    if(user) {
        console.log(user);
        res.json(user);
    }
    else {
        console.log("No user found!");
        res.status(404).end();
    }
})

/* GET single invoice */
app.get('/invoices/:id', (req, res) => {
    const id = Number(req.params.id);
    const invoice = invoices.find(i => i.id === id);

    if(invoice) {
        console.log(invoice);
        res.json(invoice);
    }
    else {
        console.log("No invoice found!");
        res.status(404).end();
    }
})

/* GET single invoice of a user */
app.get('/invoices/:user/:id', (req, res) => {
    const id = Number(req.params.id);
    const userName = req.params.user;
    const userInvoices = invoices.filter(i => i.buyerName === userName);
    let idCounter = 1;
    userInvoices.map(i => i.id = idCounter++);
    const invoice = userInvoices.find(i => i.id === id);

    if(invoice) {
        console.log(invoice);
        res.json(invoice);
    }
    else {
        console.log("No invoice found!");
        res.status(404).end();
    }
})


/* POST (create) product */
app.post('/products', (req, res) => {
    const body = req.body

    if(!body.name || !body.manufacturer || !body.category || !body.description || !body.price) {
        console.log("Missing data!");
        return res.status(400).json({
            error: 'Missing data!'
        });
    }
    const maxID = products.length > 0
    ? Math.max(...products.map(p => p.id))
    : 0

    const product = req.body;
    product.id = maxID + 1;
    products = products.concat(product);
    res.json(product);
    console.log("Product added", product);
})

/* POST (create) user */
app.post('/users', (req, res) => {
    const body = req.body
    
    if(!body.name || !body.address || !body.number) {
        console.log("Missing data!");
        return res.status(400).json({
            error: 'Missing data!'
        });
    }
    const maxID = users.length > 0
    ? Math.max(...users.map(u => u.id))
    : 0

    const user = req.body;
    user.id = maxID + 1;
    users = users.concat(user);
    res.json(user);
    console.log("User added", user);
})

/* POST (create) invoice */
app.post('/invoices', (req, res) => {
    const maxID = invoices.length > 0
    ? Math.max(...invoices.map(i => i.id))
    : 0
    console.log(req.body)
    const invoice = req.body;
    invoice.id = maxID + 1;
    invoices = invoices.concat(invoice);
    res.json(invoice);
    console.log("Invoice added", invoice);
})


/* PUT (modify) product */
app.put('/products/:id', (req, res) => {
    const id = Number(req.params.id);
    const productIndx = products.findIndex(p => p.id === id);
    if(productIndx !== -1) {
        products.splice(productIndx, 1, {
            id: id,
            name: req.body.name,
            manufacturer: req.body.manufacturer,
            category: req.body.category,
            description: req.body.description,
            price: req.body.price,
            image: req.body.image
        })
        res.send("Product modified!");
        console.log("Product modified!");
    }
    else res.send("Product not found!");
})



/* DELETE all products */
app.delete('/products', (req, res) => {
    products = [];
    console.log("All products deleted!");
    res.send("All products deleted!");    
})

/* DELETE all users */
app.delete('/users', (req, res) => {
    users = [];
    console.log("All users deleted!");
    res.send("All users deleted!");
})

/* DELETE all invoices */
app.delete('/invoices', (req, res) => {
    invoices = [];
    console.log("All invoices deleted!");
    res.send("All invoices deleted!");
})


/* DELETE single product */
app.delete('/products/:id', (req, res) => {
    const id = Number(req.params.id);
    products = products.filter(p => p.id !== id);
    res.send(`Product with id ${id} deleted!`);
    console.log("Product with id", id, "deleted!");
})

/* DELETE single user */
app.delete('/users/:id', (req, res) => {
    const id = Number(req.params.id);
    users = users.filter(u => u.id !== id);
    res.send(`User with id ${id} deleted!`);
    console.log("User with id", id, "deleted!");
})

/* DELETE single invoice */
app.delete('/invoices/:id', (req, res) => {
    const id = Number(req.params.id);
    invoices = invoices.filter(i => i.id !== id);
    res.send(`Invoice with id ${id} deleted!`);
    console.log("Invoice with id", id, "deleted!");
})


app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`)
})