const mongoose = require('mongoose')
const chalk = require('chalk')

module.exports = async (uri) => {
    try {
        await mongoose.connect(uri, () => {
            console.log(chalk.yellow.bgGray('MongoDB connected ' + uri));
        })
    } catch (error) {
        if (error) console.error(chalk.red.bgYellow(error));
    }
}