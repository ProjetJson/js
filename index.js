/**
 * Created by marie on 11/04/2017.
 */
const http = require('http');
const url = require('url');

const json1 = require('./omniscol_newedt_dbdump_2017-02-28T23-19-06.json');
const json2 = require('./omniscol_newedt_timetable-2_2017-02-28T00-45-12.json');

let i;
let j;

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
        '               .classes{margin-left:275px;}' +
        '               .classe' +
        '               {' +
        '                   color:white;' +
        '                   margin-left:10px;' +
        '                   background-color: #1BC5B3;' +
        '               }' +
        '               .sommaire' +
        '               {' +
        '                   background-color: white;' +
        '               }' +
        '               .nom' +
        '               {' +
        '                    color:#6A7799; display : inline; ' +
        '                    font-size: 17px;' +
        '                    font-family: Calibri;' +
        '                    padding-right:50px;' +
        '                    padding-left:50px;' +
        '               }' +
        '               header' +
        '               {' +
        '                   z-index: 1; position: fixed; left: 0; top: 0; width: 100%;' +
        '               }' +
        '               .lien ' +
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
        '                   padding-left: 60px;' +
        '                   padding-right: 40px;' +
        '                   color:#857784;' +
        '                   font-size: 17px;' +
        '                   font-family: Calibri;' +
        '               }' +
        '               .modifier' +
        '               {' +
        '                   background-color:#1BC5B3;' +
        '                   border-radius: 5px;' +
        '                   margin-bottom:10px;' +
        '                   border-color:turquoise;' +
        '                   position:relative;' +
        '                   left:650px;' +
        '               }' +
        '               .supprimer' +
        '               {' +
        '                   background-color:#E64C66;' +
        '                   margin-bottom:10px;' +
        '                   border-radius: 5px;' +
        '                   border-color:red;' +
        '                   position:relative;' +
        '                   left:700px;' +
        '               }' +
        '               .lienS{text-decoration:none;}' +
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
        '                <a  href=\'/eleve\' class="lien"> Eleve </a>' +
        '               <a  href=\'/prof\' class="lien"> Professeur </a>' +
        '               <a  href=\'matiere\'" class="lien"> Matière </a> ' +
        '               <a  href="/" class="lien"> Emploi du temps </a>' +
        '               <br><br>' +
        '           </center>' +
        '       </div>' +
        '           <div class=\'espace2\' style="background-color: #F0F2F4;"><br></div>' +
        '           </header>' +
        '<br><br><br><br><br><br>' +
        '</html>'));

	function bouton() {
		res.write('<div class="classes"><a href="/6A"><button class="classe" type="button">' +
            json2.classes.classe[0].name +
            '</button></a><a href="/6B"><button class="classe" type="button">' +
            json2.classes.classe[1].name +
            '</button></a><a href="/6C"><button class="classe" type="button">' +
            json2.classes.classe[2].name +
            '</button></a><a href="/6D"><button class="classe" type="button">' +
            json2.classes.classe[3].name +
            '</button></a><a href="/5A"><button class="classe" type="button">' +
            json2.classes.classe[4].name +
            '</button></a><a href="/5B"><button class="classe" type="button">' +
            json2.classes.classe[5].name +
            '</button></a><a href="/5C"><button class="classe" type="button">' +
            json2.classes.classe[6].name +
            '</button></a><a href="/5D"><button class="classe" type="button">' +
            json2.classes.classe[7].name +
            '</button></a> <a href="/4A"><button class="classe" type="button">' +
            json2.classes.classe[8].name +
            '</button></a><a href="/4B"><button class="classe" type="button">' +
            json2.classes.classe[9].name +
            '</button></a><a href="/4C"><button class="classe" type="button">' +
            json2.classes.classe[10].name +
            '</button></a><a href="/4D"><button class="classe" type="button">' +
            json2.classes.classe[11].name +
            '</button></a><a href="/3A"><button class="classe" type="button">' +
            json2.classes.classe[12].name +
            '</button></a><a href="/3B"><button class="classe" type="button">' +
            json2.classes.classe[13].name +
            '</button></a><a href="/3C"><button class="classe" type="button">' +
            json2.classes.classe[14].name +
            '</button></a><a href="/3D"><button class="classe" type="button">' +
            json2.classes.classe[15].name +
            '</button></a></div>');
	}
	function redirection() {
	    res.write('<head><meta http-equiv="refresh" content="0; URL=/eleve" ></head>');
	}

    function del(){
        var deletedItem = json1.users.splice(31, 1);
    }

	if (page === '/') {
		res.write('<title>emploi du temps</title>');
		bouton();
	} else if (page === '/eleve') {
		res.write('<title>Eleve</title>' +
            '<table><tr><th>Nom</th><th>Prénom</th></tr>');

		for (i in json1.users) {
			if (json1.users[i].roles[0] === 'student') {
				res.write('<tr><td><div class="nom">' + json1.users[i].last_name + '</td></div>' +
                    '<td><div class="nom">' + json1.users[i].first_name + '</td></div>' +
                    '<td><a href="/modifier" ><button class="modifier"  type=button>Modifier</button></a></td>' +
                    '<td><a href="/supprimer" ><button class="supprimer" type=button>Supprimer</button></a></td></tr>');
			}
		}
		res.write('</table><br>');
	} else if (page === '/prof') {
		res.write('<title>prof</title>' +
            '<table><tr><th>Prénom</th><th>Nom</th><th>Matière</th></tr></table><br>');

		for (j in json2.classes) {
			for (i in json2.classes[j].courses) {
				res.write('<p>json2.classes[j].courses[i].teachers' +
                    'json2.classes[j].courses[i].subject' +

                    '<a class="nom" href="/supprimer" ><button type=button>Supprimer</button></a>');
			}
		}

		res.write('<br>');
	} else if (page === '/matiere') {
		res.write('<title>matiere</title>' +
            '<table><tr><th>Nom</th><th>Prénom</th>');

		for (i in json1.users) {
			if (json1.users[i].roles[0] === 'student') {
				res.write('<tr><td><div class="nom">' + json1.users[i].last_name + '</td></div>' +
                    '<td><div class="nom">' + json1.users[i].first_name + '</td></div>' +
                    '<td><a href="/modifier" ><button class="modifier"  type=button>Modifier</button></a></td>' +
                    '<td><a href="/supprimer" ><button class="supprimer" type=button>Supprimer</button></a></td></tr>');
			}
		}
		res.write('</table>');
	}	else if (page === '/supprimer') {

        del();
	    redirection();
	} else if (page === '/modifier') {
		redirection();
	} else if (page === '/6A' || page === '/6B' || page === '/6C' || page === '/6D') {
		res.write('<title>emploi du temps</title>');
		bouton();
	} else if (page === '/5A' || page === '/5B' || page === '/5C' || page === '/5D') {
		res.write('<title>emploi du temps</title>');
		bouton();
	} else if (page === '/4A' || page === '/4B' || page === '/4C' || page === '/4D') {
		res.write('<title>emploi du temps</title>');
		bouton();
	} else if (page === '/3A' || page === '/3B' || page === '/3C' || page === '/3D') {
		res.write('<title>emploi du temps</title>');
		bouton();
	}	else {
		res.write('<center>La page n\'existe pas.</center>');
	}
	res.end();
});
server.listen(8080);
