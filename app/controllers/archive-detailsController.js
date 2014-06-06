app.controller('archive_detailsController', ['$scope', function($scope) {
                                   
    $scope.title = 'Archive Details';
                                   $scope.link="messages";
                                   $scope.animationClass = "slide";
                                   
                                   $scope.toggleAnimation = function() {
                                   $scope.animationClass = "reverse";
                                   $timeout(function() {
                                            $scope.animationClass = "slide";
                                            }, 350);  
                                   }
                                             
                                             $scope.toggleAnimation = function (
                                             ) {
                                             $(location).attr('href', '#/'+$scope.link+'/');
                                             };
                                             
                                             
                                   
}]);
