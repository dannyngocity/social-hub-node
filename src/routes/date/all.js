const get = require('../../methods/getMethods');

module.exports = (req, res) => {

    const modelId = req.query.itemRef;
    var model = null;
    if (modelId) {
        model = get.getJsonById(modelId);
    } else {
        model = get.getJson();
    }

    res.status(200).json(model);
};