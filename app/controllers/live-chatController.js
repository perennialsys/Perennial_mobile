app.controller('live-chatController', ['$scope', function($scope) {
                                        
                                        $scope.title = 'Live Chat';
                                        $scope.link="coach-details";
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