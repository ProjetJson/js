/**
 * Created by marie on 11/04/2017.
 */
const http = require('http');
const url = require('url');

const json1 = require('./omniscol_newedt_dbdump_2017-02-28T23-19-06.json');
const json2 = require('./omniscol_newedt_timetable-2_2017-02-28T00-45-12.json');

let json;

const server = http.createServer((req, res) => {
	const page = url.parse(req.url).pathname;
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(String('<!DOCTYPE html>' +
        '<html>' +
        '    <head>' +
        '             <meta charset="utf-8" />' +
        '    </head>' +
        '    <body>' +
        '           <style type=\'text/css\'>' +
        '               header' +
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
        '               <a href="/"> emploi du temps </a>' +
        '           </center>' +
        '           <br><br><br><br>' +
        '    </body>' +
        '</html>'));
	if (page === '/') {
		json = JSON.stringify(json1.timetables);

		res.write(json);

		res.write(String('<!DOCTYPE html>' +
            '<html>' +
            '    <head>' +
            '             <meta charset="utf-8" />' +
            '             <title>emploi du temps</title>' +
            '    </head>' +
            '</html>'));
	} else if (page === '/eleve') {
		json = JSON.stringify(json1.users);

		res.write(json);
		res.write(String('<!DOCTYPE html>' +
            '<html>' +
            '    <head>' +
            '             <meta charset="utf-8" />' +
            '             <title>eleve</title>' +
            '    </head>' +
            '</html>'));
	} else if (page === '/prof') {
		res.write(String('<!DOCTYPE html>' +
            '<html>' +
            '    <head>' +
            '             <meta charset="utf-8" />' +
            '             <title>prof</title>' +
            '    </head>' +
            '</html>'));
		json = JSON.stringify(json2.teachers);

		res.write(json);
	} else if (page === '/matiere') {
		res.write(String('<!DOCTYPE html>' +
            '<html>' +
            '    <head>' +
            '             <meta charset="utf-8" />' +
            '             <title>matiere</title>' +
            '    </head>' +
            '</html>'));
		res.write('Voici les matieres');
	}
	res.end();
});
server.listen(8080);
