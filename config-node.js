module.exports = function(RED) {
    function config-node(n) {
        RED.nodes.createNode(this,n);
    }
    RED.nodes.registerType("config-node",config-node);

    RED.httpAdmin.get('/config-node/js/*', function (req, res) {
        var options = {
            root: __dirname + '/lib/',
            dotfiles: 'deny'
        };
        res.sendFile(req.params[0], options);
    });
};