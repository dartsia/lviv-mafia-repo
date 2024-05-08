const Product = require('../Models/Product');

class ProductController {

    async index(req, res) {
        const products = await Product.find({});
        res.status(200).json(products);
}

    async store(req, res) {
        console.log(1)
        const { title, organization, amount, description, characteristic } = req.body;
        const file = req.uploadedFileName || ''; 
    
        try {
            await Product.create(
                { 
                    title, organization, 
                    user_id: req.session.userId,
                    description, 
                    amount, 
                    characteristic: characteristic,
                    file 
                }
            );
            res.status(201).send("Product created successfully");
        } catch (err) {
            console.log(err);
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
