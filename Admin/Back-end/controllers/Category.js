const Category = require('../models/HomePage/Category/Category')
const toDelete = require('../middleware/toDelete')

exports.Category = async (req, res) => {
    if (req.file) {
        const { name } = req.body
        
        const CreatCategory = new Category({
            name,
            image: req.file.filename
        })
        await CreatCategory.save()
        res.status(201).json({ message: "Success" })
    } else {
        res.send("Error in create category")
    }
}

exports.CategoryEdit = async (req, res) => {
    const category = await Category.findById(req.params.id)

    const imgCategory = req.body

    if (req.file) {
        toDelete(category.image);
        imgCategory.image = req.file.filename
    }

    const editCategory = await Category.findByIdAndUpdate(req.params.id, imgCategory)


    res.status(201).json({ message: "Success", editCategory })

}



exports.CategoryDelete = async (req, res) => {

    await Category.findByIdAndDelete(req.params.id)

    res.status(201).json({ message: "Success" })

}





