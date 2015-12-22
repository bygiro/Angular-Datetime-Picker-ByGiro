/*! angular-datetime-picker-ByGiro - v0.0.2 - 18 april 2015
* Copyright (c) G. Tomaselli <girotomaselli@gmail.com> 2015; Licensed  
*/

angular.module('ByGiro.datetimePicker', [])
	.directive('bgDatetimePicker', [ function () { // Angular Directive Declaration
		return {
			restrict: 'A',                 // The Directive is with Attribute 			
			scope: {
				dataVal: "=?ngModel"
			},
			link: function (scope, element, attributes) {
				var bg = (typeof jQuery != 'undefined') ? jQuery : angular.element,
				options = {},res;
				if(attributes.bgDtpOptions){
					options = scope.$parent[attributes.bgDtpOptions];
				}
				
				bg(element).val(scope.dataVal);

				res = bg(element).datetimepickerByGiro(options);
				
				// update model on datepicker change
				bg(element).on('datetimepickerByGiro_changed', function(eve, data){
					var value = data.getValue(true);
					
					// update the scope
					var phase = scope.$root.$$phase;
					if (phase == '$apply' || phase == '$digest') {
						scope.dataVal = value;
					} else {
						scope.$apply(function(){
							scope.dataVal = value;
						});
					}
				});
			}
		}
    }]);
