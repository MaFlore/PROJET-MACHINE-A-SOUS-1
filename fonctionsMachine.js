function jouer() {


    objet_xml_http_request = creation_objet_xml_http_request();

    objet_xml_http_request.open('get', 'gainAleatoire.php', true);


    objet_xml_http_request.onreadystatechange = actualiserPage;

    document.getElementById('button').disabled = true;
    document.getElementById('charge').style.visibility = "visible";
    document.getElementById('resultat').style.visibility = "hidden";
    document.getElementById('gain').style.visibility = "hidden";
    document.getElementById('tentative').style.visibility = "hidden";

    objet_xml_http_request.send(null);
}