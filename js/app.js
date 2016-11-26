(function() {
'use strict';

angular.module('LunchCheck',[])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
    $scope.dishes = '';
    $scope.count = 0;
    
    $scope.feedDishes = function() {
        
        $scope.dishes = $scope.dishes.replace(/,*\s*$/g,"");
        
        $scope.count = ($scope.dishes.split(",").length);
        console.log($scope.count);
        if ( $scope.dishes == '') {
            $scope.myMessage = 'Please enter data first';
        } else if ( $scope.count <= 3) {
            $scope.myMessage = 'Enjoy!';
        } else {
            $scope.myMessage = 'Too much!';
        }
    }
}

})();
