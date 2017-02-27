// CREA UN CONTROLLER PER L'OGGETTO
angular.module('app').controller('ItemCtrl', function ($scope) {

	$scope.titolo = "Ng-Repeat";

	// CREA UNA LISTA DI OGGETTI ARMA DI TIPO
	/*
	 * nome: "Ascia bipenne",
	 * descrizione: "L’ascia bipenne è una scure a due lame, simbolo del potere minoico.",
	 * slots : "3",
	 * image: "http://khazalidgrungron.altervista.org/axes/05.png"
	 */

	$scope.armi = [{
		name: 'Ascia bipenne',
		description: 'L\’ascia bipenne è una scure a due lame, simbolo del potere minoico.',
		image: 'http://khazalidgrungron.altervista.org/axes/05.png',
		slots: 2
	}, {
		name: 'Katana',
		description: 'Arma inizialmente usata dai Samurai e successivamente evolutasi con le arti Ninja.',
		image: 'http://www.clker.com/cliparts/5/s/J/S/8/i/wakisashi-sword.svg',
		slots: 4
	}, {
		name: 'Pugnale',
		description: 'Arma da taglio usata unicamente per gli scontri ravvicinati. Può essere nascosta, in modo da cogliere di sorpresa il nemico.',
		image: 'http://www.dailyclipart.net/wp-content/uploads/medium/Pirates3.jpg',
		slots: 3
	}, {
		name: 'Shuriken',
		description: 'Arma esclusivamente da lancio. Grazie alla forma e alla struttura, raggiunge può raggiungere una velocità impressionante.',
		image: 'http://www.karatemart.com/images/products/large/tiny-typhoon-shuriken.jpg',
		slots: 1
	}];



})