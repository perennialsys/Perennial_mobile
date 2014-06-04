app.controller('coachs-boxController', ['$scope', function($scope) {
                                           
                                           $scope.title = "Coach's Box";
                                           $scope.link="messages";
                                           $scope.animationClass = "slide";
                                           
                                           $scope.toggleAnimation = function() {
                                           $scope.animationClass = "reverse";
                                           $timeout(function() {
                                                    $scope.animationClass = "slide";
                                                    }, 350);
                                           }
                                           }]);
