(function() {
	angular.module('demoApp', ['ByGiro.datetimePicker'])
		.controller('demoCtrl', [
		'$scope','$filter','$sce','$window', function($scope, $filter, $sce, $window) {
			$scope.my_datetime = {};

			var options = {
				mode: 'multiple',
				calendars: 3
			};
			
			$scope.datetimePickerOptions = options;
			
			var format = 'yyyy-MM-dd HH:mm:ss Z';
			$scope.$watch('my_datetime', function(){
				var result = '',
				input = $scope.my_datetime;
				
				switch(options.mode){
					case 'range':
						if(!(input instanceof Array)) break;
						result += '<ul>';
						result += '<li>from: '+ ($filter('date')(input[0], format) || '') +'</li>';
						result += '<li>to: '+ ($filter('date')(input[1], format) || '') +'</li>';
						result += '</ul>';
						break;
						
					case 'multiple':
						if(!($scope.my_datetime instanceof Array)) break;
						result += '<ul>';
						for(var i=0;i<input.length;i++){
							result += '<li>'+ ($filter('date')(input[i], format) || '') +'</li>';
						}
						result += '</ul>';						
						break;
						
					case 'single':
					default:
						result = ($filter('date')(input, format) || '');
						break;
				}
				
				$scope.my_datetime_output = $sce.trustAsHtml(result);
			}, true);
		}
	]);
})();