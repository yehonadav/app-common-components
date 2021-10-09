Object.defineProperty(exports, '__esModule', { value: true });

var accountRoles = /** @class */ (function () {
    function accountRoles() {
    }
    accountRoles.admin = 'admin';
    accountRoles.user = 'user';
    return accountRoles;
}());
var accountRoleList = Object.values(accountRoles);
var accountRoleDbScheme = { type: String, required: true, enum: accountRoleList };

var getEnvironmentVariable = function (name) {
    if (!process.env[name])
        throw "missing required environment variable process.env." + name;
    return process.env[name];
};
var getEnv = function (key, required) {
    if (required === void 0) { required = false; }
    return required ? getEnvironmentVariable(key) : process.env[key];
};

var getEnvironmentVariables = function () {
    var names = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        names[_i] = arguments[_i];
    }
    return names.map(function (name) { return getEnvironmentVariable(name); });
};

exports.accountRoleDbScheme = accountRoleDbScheme;
exports.accountRoleList = accountRoleList;
exports.accountRoles = accountRoles;
exports.getEnv = getEnv;
exports.getEnvironmentVariable = getEnvironmentVariable;
exports.getEnvironmentVariables = getEnvironmentVariables;
//# sourceMappingURL=index.js.map
