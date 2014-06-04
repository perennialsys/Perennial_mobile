app.controller('coach-detailsController', ['$scope', function($scope) {
                                             
                                             $scope.title = 'Coach Details';
                                             $scope.link="coach-box";
                                             $scope.animationClass = "slide";
                                             
                                             $scope.toggleAnimation = function() {
                                             $scope.animationClass = "reverse";
                                             $timeout(function() {
                                                      $scope.animationClass = "slide";
                                                      }, 350);
                                             }
                                             
                                             
                                             
                                             }]);
