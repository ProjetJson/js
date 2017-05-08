/**
 * Created by marie on 11/04/2017.
 */
const http = require('http');
const url = require('url');

const json1 = require('./omniscol_newedt_dbdump_2017-02-28T23-19-06.json');
const json2 = require('./omniscol_newedt_timetable-2_2017-02-28T00-45-12.json');

let i;

const server = http.createServer((req, res) => {
	const page = url.parse(req.url).pathname;
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.write(String('<!DOCTYPE html>' +
        '<html>' +
        '    <head>' +
        '             <meta charset="utf-8" />' +
        '    </head>' +
        '           <style type=\'text/css\'>' +
        '                .espace' +
        '               {' +
        '                   background-color: #1BC5B3;' +
        '               }' +
        '               .sommaire' +
        '               {' +
        '                   background-color: white;' +
        '               }' +
        '               header' +
        '               {' +
        '                   z-index: 1; position: fixed; left: 0; top: 0; width: 100%;' +
        '               }' +
        '               a ' +
        '               {' +
        '                   color:#B39E9D;' +
        '                   font-size: 20px;' +
        '                   padding: 50px;' +
        '                   font-family: Calibri;' +
        '                   text-decoration:none;' +
        '               }' +
        '               th' +
        '               {' +
        '                   padding-top:20px;' +
        '                   padding-left: 50px;' +
        '                   color:#857784;' +
        '                   font-size: 17px;' +
        '                   font-family: Calibri;' +
        '               }' +
        '               p' +
        '               {' +
        '                   color:#6A7799;' +
        '                   font-size: 17px;' +
        '                   font-family: Calibri;' +
        '                   padding-bottom:10px' +
        '               }' +
        '               button' +
        '               {' +
        '                   background-color:#E64C66;' +
        '                   border-color:red;' +
        '               }' +
        '               body' +
        '               {' +
        '                   background-color: white;' +
        '                   margin-left:40px;' +
        '                   margin-right:20px;' +
        '                   margin-bottom:20px;' +
        '               }' +
        '               html' +
        '               {' +
        '                   background-color: #F0F2F4;' +
        '               }' +
        '           </style>' +
        '           <header>' +
        '           <div class=\'espace\'><br><br></div>' +
        '           <div class=\'sommaire\'> ' +
        '           <center>' +
        '               <br>' +
        '                <a  href=\'/eleve\'> Eleve </a>' +
        '               <a  href=\'/prof\'> Professeur </a>' +
        '               <a  href=\'matiere\'"> Matière </a> ' +
        '               <a  href="/"> Emploi du temps </a>' +
        '               <br><br>' +
        '           </center>' +
        '       </div>' +
        '           <div class=\'espace2\' style="background-color: #F0F2F4;"><br></div>' +
        '           </header>' +
        '<br><br><br><br><br><br>' +

        '</html>'));

	if (page === '/') {
		res.write(String('<!DOCTYPE html>' +
            '<html>' +
            '    <head>' +
            '             <meta charset="utf-8" />' +
            '             <title>emploi du temps</title>' +
            '    </head>' +
            '</html>'));
	} else if (page === '/eleve') {
		res.write(String('<!DOCTYPE html>' +
        '<html>' +
        '    <head>' +
        '             <meta charset="utf-8" />' +
        '             <link rel="stylesheet" href="./css/design.css"/>' +
        '             <title>Eleve</title>' +
        '    </head>' +
        '   <div class="eleves">' +
        '       <table>' +
        '           <tr>' +
        '               <td json2">' +
        '                   <table class="dataTable">' +
        '                       <tr>' +
        '                           <th>Nom</th>' +
        '                           <th>Prénom</th>' +
        '                       </tr>' +
        '                   </table>' +
        '               </td>' +
        '           </tr>' +
        '       </table>' +
        '   </div>' +
        '</html>'));

		for (i in json1.users) {
			if (json1.users[i].roles[0] === 'student') {
				res.write('<p style="padding-left: 50px;">' +
                   json1.users[i].last_name + ' ' +
                   json1.users[i].first_name + ' ' +
                    '<button type="button">Supprimer</button>' +
                   '</p>');
			}
		}
	} else if (page === '/prof') {
		res.write('<title>prof</title>');
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
