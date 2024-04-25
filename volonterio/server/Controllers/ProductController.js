const Product = require('../Models/Product');

class ProductController {

    async store(req, res) {
        const { title, description } = req.body;
        const file = req.file ? req.file.path : '';

        try {
            await Product.create({ title, user_id: req.session.userId, description, file });
            console.log('Session User ID:', req.session);
            console.log('Session User ID:', req.session.userId);
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
