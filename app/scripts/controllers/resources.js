'use strict';

/**
 * @ngdoc function
 * @name analyticsApp.controller:ResourcesCtrl
 * @description
 * # ResourcesCtrl
 * Controller of the analyticsApp
 */
angular.module('analyticsApp')
  .controller('ResourcesCtrl', function () {
		this.titles = [{
			name: "Introduction to Analytics",
			slug: "intro",
			file: "docs/intro.pdf"
		}, {
			name: "Introduction to R",
			slug: "intro-R",
			file: "docs/intro-R.pdf"
		}, {
			name: "Regression",
			slug: "regression",
			file: "docs/regression.pdf"
		}, {
			name: "Classfication",
			slug: "classfication",
			file: "docs/classfication.pdf"
		}
		];
		this.showMe = "intro";
  });
