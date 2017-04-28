/**
 * Created by marie on 11/04/2017.
 */
const http = require('http');

const url = require('url');



const server = http.createServer((req, res) => {
	const page = url.parse(req.url).pathname;
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(String('<!DOCTYPE html>' +
        '<html>' +
        '    <head>' +
        '             <meta charset="utf-8" />' +
        '             <link rel="stylesheet" href="./css/design.css"/>' +
        '             <title>Supprimer un élève</title>' +
        '    </head>' +

        '    <body>' +
        '           <style type=\'text/css\'>' +
        '               header'+
        '               {' +
        '                   background-color: aqua;' +
        '               }' +
        '               body' +
        '               {' +
        '                   background-color: white;' +
        '               }' +
        '               html' +
        '               {' +
        '                   background-color: darkgray;' +
        '               }' +
        '           </style>' +
        '           <header>' +
        '               <br><br>' +
        '           </header>' +
        '           <center>' +
        '               <a href=\'/eleve\'> eleve </a>' +
        '               <a href=\'/prof\'> professeur </a>' +
        '               <a href=\'matiere\'"> matière </a> ' +
        '               <a href="index"> emploi du temps </a>' +
        '           </center>' +
        '           <br><br><br><br>' +
        '    </body>' +
        '</html>'));
	if (page === '/index') {
		res.write('Voici l\'emploi du temps');
	} else if (page === '/eleve') {
		res.write('Voici les eleves');
	} else if (page === '/prof') {
		res.write('Voici les profs');
	}
	res.end();
});
server.listen(8080);
