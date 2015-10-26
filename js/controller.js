var app = angular.module('listApp', []);
app.controller('listCtrl', function($scope) {
	$scope.users = [
		{
			name: 'Alex',
			roles: ['admin', 'user', 'custom']
		}
	];
	
	$scope.addUser = function() {
		var newUser = {name: 'New User', roles: ['user']};
		$scope.users.push(newUser);
	};
	
});
