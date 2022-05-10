const mongoose = require('mongoose')

module.exports = async (uri) => {
    try {
        await mongoose.connect(uri, () => {
            console.log('MongoDB connected ' + uri);
        })
    } catch (error) {
        if (error) console.error(error);
    }
}