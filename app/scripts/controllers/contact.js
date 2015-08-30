'use strict';

/**
 * @ngdoc function
 * @name analyticsApp.controller:ContactCtrl
 * @description
 * # ContactCtrl
 * Controller of the analyticsApp
 */
angular.module('analyticsApp')
	.controller('ContactCtrl', function () {
		this.convenors = [{
			name: "Roshan Santhosh",
			email: "roshan.santhosh@gmail.com",
			phone: 9003098118
		}, {
			name: "Bhaumik Shah",
			email: "bhaumik93@gmail.com",
			phone: 9444895166
		}];
		this.coordinators = [{
			name: "Vaishnavi Janakiraman",
			email: "vaishnavijanakiraman1@gmail.com",
			phone: 9597051738
		}, {
			name: "Sunil kumar j s",
			email: "sunilkmrjs@gmail.com",
			phone: 9884180714
		}, {
			name: "Tejkiran k m",
			email: "tejkirankm@gmail.com",
			phone: 9962398096
		}, {
			name: "Shubham Gupta",
			email: "shubhamgupta15061995@gmail.com",
			phone: 9043807237
		}, {
			name: "Musafir Safwan",
			email: "musafirsafwan@gmail.com",
			phone: 9884300619
		}, {
			name: "Thanush Kodi",
			email: "tkthanushkodi@gmail.com",
			phone: 9486633487
		}];
	});
