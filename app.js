var lib = require('./rawdeflate');
var lib2 = require('./base64');
var lib3 = require('./sjcl');

var http = require('http')
var server = http.createServer(function(req,res){
	var options = {
               	mode: 'gcm',
        	ks: 256,
	        ts: 128
	};
	var body = "";
	var response = "";
	if(req.method == "POST"){
		req.on('data', function(data){
			body += data.toString('utf8');
		});
		req.on('end',function(){
			pass = lib3.codec.base64.fromBits(lib3.random.randomWords(8, 0), 0);
			res.writeHead(200, {'Content-Type':'text/plain'});
			response = lib2.Base64.toBase64(lib.RawDeflate.deflate(body));
			res.end(JSON.stringify({
				success: "true",
				pass: pass,
				cipherdata: lib3.encrypt(pass,response,options)
			}));
		});
	}
});

port = 4040;
host = '127.0.0.1';
server.listen(port,host);
console.log('Serveur Démarré');
