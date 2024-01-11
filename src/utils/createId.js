const {v4 : uuid} = require('uuid')

const createId = () => {
    return uuid();  
}

module.exports = createId;