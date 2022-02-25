const main = (req, res) => {
    res.render('index.html')
}

const fileTransfer = async (req, res) => {
    console.log(req.file)
    // IPFS = require('ipfs-core')
    // const node = await IPFS.create()
    // const data = 'holy moly guacamole'
    // const results = await node.add(data)
    // console.log(results)
    
}


module.exports = {
    main,
    fileTransfer,
}