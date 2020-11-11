const paginate = require('jw-paginate')
const moment = require('moment')

function getPaginator(req, arr) {
    const currentPage = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.count) || 8
    const pager = paginate(arr.length, currentPage, pageSize)
    const pageOfItems = arr.slice(pager.startIndex, pager.endIndex + 1);
    return {pager, pageOfItems}
}

function combineDateAndTime(date, time) {
    let dataValue = moment(date).format('ll')
    let timeValue = moment(time).format('HH:mm:ss')
    const dateTime = new Date(`${dataValue} ${timeValue}`)
    return moment(dateTime).format('lll')
}

module.exports = {getPaginator ,combineDateAndTime}
