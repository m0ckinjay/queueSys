const config = require("../config");
const helper = require('../helper')
const db = require('./db')

async function getMultiple(page=1){
    const offSet = helper.getOffset(page, config.listPerPage);
    const rows = await db.query(
        `select * from users LIMIT ${offSet},${config.listPerPage}`
    );

    const data = helper.emptyOrRows(rows);
    const meta = {page};


    return{
        data,
        meta
    }
}

module.exports = {
    getMultiple
}