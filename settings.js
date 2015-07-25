/**
 * Created by Liomka on 25/07/15.
 */

module.exports = function() {

    function constructDbUri (user, pass, host, port, name) {
        return "mongodb://" +
            (("" !== user) ? user + (("" !== pass) ? ":" + pass : "") + "@" : "") +
            host +
            (("" !== port) ? ":" + port : "") +
            (("" !== name) ? "/" + name : "");
    }

    // DB params
    var name  = process.env.DATABASE_NAME || "LiomkaSiteNode";
    var host  = process.env.DATABASE_HOST || "localhost";
    var port  = process.env.DATABASE_PORT || "27017";
    var user  = process.env.DATABASE_USER || "";
    var pass  = process.env.DATABASE_PASS || "";
    var normalizedDbUri = constructDbUri(user, pass, host, port, name);
    var dburi = process.env.DATABASE_URI || normalizedDbUri;

    // Websockets chat server
    var wsuri = process.env.WSSERVERURI || 'ws://pywsserver.herokuapp.com/ws';


    return {
        DATABASE_NAME: name,
        DATABASE_HOST: host,
        DATABASE_PORT: port,
        DATABASE_USER: user,
        DATABASE_PASS: pass,
        DATABASE_URI:  dburi,

        WSSERVER_URI: wsuri
    }
};