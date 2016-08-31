/*! angular-datetime-picker-ByGiro - v0.0.3 - 18 april 2015
* Copyright (c) G. Tomaselli <girotomaselli@gmail.com> 2015; Licensed  
*/

angular.module('ByGiro.datetimePicker', [])
.directive('bgDatetimePicker', [function () {
	
	contrFunction = ['$scope', '$timeout', '$element', '$attrs', function($scope, $timeout, $element, $attrs){

			$element.datetimepickerByGiro($scope.options)
			.on('datetimepickerByGiro_changed', function(eve, data){

				if($attrs.ngModel){
					$scope.ngModel = data.getValue(true);
				}

				$timeout();
			});
		}];
	
	return({
		scope: {
			options: "=bgDtpOptions",
			ngModel: "=?"
		},
		restrict: "A",
		controller: contrFunction
	});
}]);
