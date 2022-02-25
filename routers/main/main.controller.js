const main = (req, res) => {
    res.render('index.html')
}

const fileTransfer = async (req, res) => {
    // console.log('here')
    IPFS = require('ipfs-core')
    const node = await IPFS.create()
    const data = 'testing, attention please'
    const results = node.add(data)
    console.log(results, 'resultsㅋㅋ')
    for await (const {cid} of results){
        console.log(cid.toString(), 'toStringㅋㅋㅋ')
    }
}


module.exports = {
    main,
    fileTransfer,
}