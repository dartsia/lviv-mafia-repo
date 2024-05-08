const Product = require('../Models/Product');

class ProductController {

    async index(req, res) {
        const products = await Product.find({});
        res.status(200).json(products);
}

    async store(req, res) {
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
}

module.exports = new ProductController();
