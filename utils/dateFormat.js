const dayjs = require('dayjs')

const dateFormat = (datetime)=> {
    dayjs(datetime).format('dddd, MMM DD YYYY');
};

module.exports = {dateFormat}