angular.module('services', [])
.controller('operations', function($scope, $http) {
    
    $scope.calculate = function() {

        $http.get("http://localhost:3001/sum/"+$scope.number1+"/"+$scope.number2)
		.then(function(response) {
            $scope.sum = response.data;
        });
	
        $http.get("http://localhost:3002/subtraction/"+$scope.number1+"/"+$scope.number2)
		.then(function(response) {
            $scope.subtraction = response.data;
        });
		
	    $http.get("http://localhost:3003/multiplication/"+$scope.number1+"/"+$scope.number2)
		.then(function(response) {
            $scope.multiplication = response.data;
        });
		
	    $http.get("http://localhost:3004/division/"+$scope.number1+"/"+$scope.number2)
		.then(function(response) {
            $scope.division = response.data;
        });
    }
    
    $scope.calculate();
});
