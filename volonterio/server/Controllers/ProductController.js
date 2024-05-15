const Product = require('../Models/Product');

class ProductController {

    async index(req, res) {
        const products = await Product.find({});
        res.status(200).json(products);
}

async store(req, res) {
    console.log("Received request to store product");
    const { name, organization, price, description, characteristic } = req.body;

    const fileLocation = req.file ? req.file.location : ''; 

    try {
        await Product.create({
            name,
            organization, 
            user_id: req.session.userId,
            description, 
            price, 
            characteristic,
            file: fileLocation
        });
        console.log("Product created successfully with file location:", fileLocation);
        res.status(201).send("Product created successfully");
    } catch (err) {
        console.error("Error while creating product:", err);
        res.status(500).send(err.message);
    }
}
    async show(req,res) {
        const id = req.params.id;
        const product = await Product.findOne({ _id: id.trim() });

        try {
            console.log(id)
            if (!product) {
                return res.status(404).send('Product not found');
            }
            res.status(200).json(product)
        } catch (error) {
            res.status(500).send('Failed to open the product page: ' + error.message);
        }
    }
}

module.exports = new ProductController();
