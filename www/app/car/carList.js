(function(){
	angular.module('myCar').controller('carListCtrl',[carListCtrl]);
	function carListCtrl(){
		var vm = this;
		console.log("Hi carListCtrl");
	}
})();