function daoBase(model) {
    this.model = model;
};

//create
daoBase.prototype.create = function (doc, callback) {
    this.model.create(doc, function (err) {
        if (err) {
            return callback(err);
        }
        return callback(doc);
    });
};

daoBase.prototype.getById = function (id, callback) {
    this.model.findOne({
        _id: id
    }, function (err, model) {
        if (err) {
            return callback(err);
        }
        return callback(null, model);
    });
};

daoBase.prototype.getAll = function (callback) {
    this.model.find({}, function (error, models) {
        if (error) {
            return callback(error, null);
        }
        return callback(null, models);
    });
};

daoBase.prototype.remove = function (id, callback) {
    this.model.findByIdAndRemove(id, null, function (error, model) {
        if (error) {
            return callback(error);
        }
        return callback(null, model);
    });
};

daoBase.prototype.update = function (conditions, update, options, callback) {
    this.model.update(conditions, update, options, function (error) {
        if (error) {
            return callback(error);
        }
        return callback(null);
    });
};

module.exports = daoBase;
