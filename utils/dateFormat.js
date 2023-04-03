const dayjs = require('dayjs')

const dateFormat = (datetime)=> {
    dayjs(datetime).format('DD/MM/YYYY');
};

module.exports = {dateFormat}