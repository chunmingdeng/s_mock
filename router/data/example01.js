const Mock = require('mockjs')

const data = Mock.mock({
    "list|1-20": [{
        "name": '@FIRST'
    }]
})
module.exports = {
    status: 200,
    data: data.list
}