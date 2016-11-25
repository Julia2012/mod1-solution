(function() {
'use strict';

angular.module('LunchCheck',[])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['scope'];
function LunchCheckController($scope) {
    $scope.dishes="";
});
$scope.feedDishes = function() {
    $count = ($scope.dishes.split(",").length - 1)
    if ( $count == 0) {
        $scope.myMessage = 'Please enter data first';
    } elseif ( $count =< 3) {
        $scope.myMessage = 'Enjoy!';
    } else {
        $scope.myMessage = 'Too much!';
    }
}
})();