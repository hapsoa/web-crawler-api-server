const rp = require('request-promise');

module.exports = {
    async getSiteContent(url) {
        const result = await rp(url);
        return result;
    }
};
