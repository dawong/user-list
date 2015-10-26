var app = angular.module('listApp');
app.directive('listItem', function() {
	return {
		restrict: 'A',
		replace: true,
		scope: {
			user: '=',
			users: '=',
			index: '='
		},
		templateUrl: 'partials/list-item.html',	
		link: function(scope, element, attrs) {
			scope.editUser = function() {
				scope.editUserInfo = angular.copy(scope.user);
				_.each(scope.editUserInfo.roles, function(val, ind) {
					var obj = {value: val};
					scope.editUserInfo.roles[ind] = obj;
				});
			};
			scope.removeUser = function(user, index) {
				if (scope.users[index] == user) {
					scope.users.splice(index, 1);
				}		
			};
			
			scope.removeRole = function(role, index) {
				if (scope.editUserInfo.roles[index] == role) {
					scope.editUserInfo.roles.splice(index, 1);
				}
			};
			scope.addRole = function() {
				var obj = {value: ''};
				scope.editUserInfo.roles.push(obj);
			};
			scope.saveUser = function() {
				scope.user.name = scope.editUserInfo.name;
				var rolesContainer = [];
				_.each(scope.editUserInfo.roles, function(role) {
					var exists = _.find(rolesContainer, function(val) {
						return val == role.value;
					});
					if (role.value && !exists) {
						rolesContainer.push(role.value);
					}
				});
				scope.user.roles = rolesContainer;
			};
			
		}
	};
});
