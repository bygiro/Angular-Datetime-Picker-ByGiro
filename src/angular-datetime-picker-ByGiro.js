/*! angular-datetime-picker-ByGiro - v0.0.1 - 18 april 2015
* Copyright (c) G. Tomaselli <girotomaselli@gmail.com> 2015; Licensed  
*/
angular.module('ByGiro.datetimePicker', [])
.directive('bgAddressPicker', ['$window','$parse','$compile', function ($window, $parse, $compile) {
	
	// I augment the template element DOM structure before linking.
	function compile( tElement, tAttributes ) {

		function link( scope, element, attributes, _, transclude ) {
			
		   transclude(
				function( content ) {
					element.append( content );
				}
			);
		
			var bg = (typeof jQuery != 'undefined') ? jQuery : angular.element;	
			var options = {};
			if(attributes.bgDtpOptions){
				options = scope.$parent[attributes.bgDtpOptions];
			}
			
			bg(element).datetimepickerByGiro(options);
			
			/*
			.on('selected.addressPickerByGiro', function(eve, data){
				scope.address = data.cleanData;
				
				// update the scope
				scope.$apply();
			});
			*/
			
			sublink( scope );
		}

		return( link );
	}

	return({
		compile: compile,
		priority: 1500,
		restrict: "A",
		scope: {
			dataValue: "=ngModel"
		},
		terminal: true,
		transclude: true
	});
}]);
