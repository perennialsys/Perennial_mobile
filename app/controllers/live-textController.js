app.controller('live-textController', ['$scope', function($scope) {
                                       
                                       $scope.title = 'Text Coach';
                                       $scope.link="coach-details";
                                       $scope.animationClass = "slide";
                                       
                                       $scope.toggleAnimation = function() {
                                       $scope.animationClass = "reverse";
                                       $timeout(function() {
                                                $scope.animationClass = "slide";
                                                }, 350);
                                       }
                                       
                                       
                                       
                                       }]);