const Sequence = require('../models/HomePage/Sequence/Sequence')


exports.Sequence = async (req, res) => {
    try {
        const { number, text } = req.body
        const newSequence = new Sequence({
            number,
            text
        })
        await newSequence.save()
        res.status(201).json({ message: "Success", newSequence })
    } catch (error) {
        console.log(error.massage);
    }

}



exports.SequenceEdit = async (req, res) => {
    const neww = await Sequence.findByIdAndUpdate(req.params.id, req.body, {
        new: true
    })

    res.status(201).json({ message: "Success", neww })
} 


exports.SequenceDelete = async (req, res) => {

    await Sequence.findByIdAndDelete(req.params.id)

    res.status(201).json({ message: "Success" })

}