function creation_objet_xml_http_request() {
    var resultat = null;
    try {
        resultat = new XMLHttpRequest();
    } catch (error) {
        try {
            resultat = new ActiveXObject("Msxlm2.XMLHTTP");
        } catch (error) {
            try {
                resultat = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (error) {
                resultat = null;
            }
        }
    }
    return resultat;
}

function actualiserPage() {

    if (objet_xml_http_request.readyState == 4) {

        if (objet_xml_http_request.status == 200) {

            nouveauGain = objet_xml_http_request.responseText;

            var message;

            if (nouveauGain < 50) {

                gain = gain - 5000;
                message = "Vous avez perdu 5 milles";

            } else if (nouveauGain >= 50 && nouveauGain < 75) {

                gain = gain + 5000;
                message = "Vous avez gagné 5 milles";

            } else {

                gain = gain + 10000;
                message = "Vous avez gagné 10 milles";

            }
            document.getElementById('resultat').innerHTML = message;
            document.getElementById('tentative').innerHTML = "Votre tentative est de : " + (++nombreTentative);

            if (gain <= 0) {

                document.getElementById('gain').innerHTML = "Vous avez perdu";
                document.getElementById('button').style.visibility = "hidden";

            } else {
                document.getElementById('gain').innerHTML = "Vous avez " + gain + " F CFA sur votre compte"
            }

            document.getElementById('info').style.visibility = "visible";
            document.getElementById('button').disabled = false;
            document.getElementById('charge').style.visibility = "hidden";
            document.getElementById('gain').style.visibility = "visible";
            document.getElementById('resultat').style.visibility = "visible";
            document.getElementById('tentative').style.visibility = "visible";

        } else {

            document.getElementById('info').innerHTML = "Erreur du serveur";
            document.getElementById('info').style.visibility = "visible";
            document.getElementById('button').disabled = false;
            document.getElementById('charge').style.visibility = "hidden";
            document.getElementById('gain').style.visibility = "hidden";
            document.getElementById('resultat').style.visibility = "visible";
            document.getElementById('tentative').style.visibility = "visible";

            objet_xml_http_request.abort();
            objet_xml_http_request = null;
        }
    }
}