const paginate = require('jw-paginate')

function getPaginator(req, players) {
    const currentPage = parseInt(req.query.page) || 1;
    const pageSize = parseInt(req.query.count) || 8
    const pager = paginate(players.length, currentPage, pageSize)
    const pageOfItems = players.slice(pager.startIndex, pager.endIndex + 1);
    return {pager, pageOfItems}
}

module.exports = {getPaginator }
