const Category = require('../models/HomePage/Category/Category')

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

exports.CategoryDelete = async (req , res)=>{

  await Category.findByIdAndDelete(req.params.id)
  res.status(201).json({ message: "Success" })

}





