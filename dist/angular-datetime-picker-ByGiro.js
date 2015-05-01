/*! angular-datetime-picker-ByGiro - v0.0.1 - 18 april 2015
* Copyright (c) G. Tomaselli <girotomaselli@gmail.com> 2015; Licensed  
*/
angular.module('ByGiro.datetimePicker', [])
.directive('bgDatetimePicker', ['$window','$parse','$compile', function ($window, $parse, $compile) {
	
	
	// I augment the template element DOM structure before linking.
	function compile( tElement, tAttributes ) {
		
		var sublink = $compile( tElement, null, 1500 );

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
			
			var res = bg(element).datetimepickerByGiro(options);

			bg(element).on('datetimepickerByGiro_changed', function(eve, data){				
				// update the scope
				scope.$parent.$apply(function(){					
					scope.dataValue = data.getValue();
				});
			});
			
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
