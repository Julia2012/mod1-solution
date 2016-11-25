(function() {
'use strict';

angular.module('LunchCheck',[])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['scope'];
function LunchCheckController($scope) {
    $scope.dishes="sss,ddd";
    $scope.myMessage="";

    $scope.feedDishes = function() {
        $count = ($scope.dishes.split(",").length - 1);
        if ( $count == 0) {
            $scope.myMessage = 'Please enter data first';
        } else if ( $count <= 3) {
            $scope.myMessage = 'Enjoy!';
        } else {
            $scope.myMessage = 'Too much!';
        }
    }
}

})();
