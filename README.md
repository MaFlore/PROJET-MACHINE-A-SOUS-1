# PROJET-MACHINE-A-SOUS-1
PROJET : Gestion d’une machine à sous en ligne Le projet consiste principalement à la mise en place d’une machine à sous en ligne.
Vous allez mettre en place une page Web sur laquelle l’utilisateur dispose d’un bouton pour 
jouer. Dès qu'il clique sur le bouton jouer, vous allez envoyer une requête asynchrone AJAX
GET au serveur PHP qui se chargera de générer un nombre compris entre 0 et 100.
Si le nombre généré est strictement inférieur à 50, le joueur a perdu 5.000F CFA. Sinon si le 
nombre généré est compris entre 50 et 75 (exclu), le joueur a gagné 5.000F CFA et si le nombre 
est compris entre 75 et 100 alors le joueur a gagné 10.000F CFA.
Un jeu commence par un chargement de la page. Vous devez donc à chaque fois cumuler et 
afficher le gain du joueur ainsi que le nombre de tentatives. Au début d’un jeu, un joueur mise 
25.000F CFA.
Le jeu s’arrête lorsque la mise du joueur atteint 0F CFA ou s’il décide d’arrêter lui-même (on 
recharge donc la page pour commencer un autre jeu par un autre joueur).
La présentation de la page Web sera notée.
