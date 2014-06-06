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
                                        
                                        $scope.items = [
                                                        {cName: "Coach John S.", cstatus: "1", id: "1",startype:"4",typeStatus:"incoming"},
                                                        {cName: "Coach Ruby S.", cstatus: "0", id: "2",startype:"5",typeStatus:"wait"},
                                                        {cName: "Coach Matthew M.", cstatus: "1", id: "3", startype:"4",typeStatus:"complete"},
                                                        {cName: "Coach Elsa A.", cstatus: "1", id: "4",startype:"4",typeStatus:"wait"},
                                                        {cName: "Coach John S.", cstatus: "1", id: "1",startype:"4",typeStatus:"wait"},
                                                        {cName: "Coach Ruby S.", cstatus: "0", id: "2",startype:"5",typeStatus:"incoming"},
                                                        {cName: "Coach Matthew M.", cstatus: "1", id: "3",startype:"4",typeStatus:"incoming"},
                                                        {cName: "Coach Elsa A.", cstatus: "1", id: "4",startype:"4",typeStatus:"complete"},
                                                        
                                                        ];
                                        $scope.toggleAnimation = function (
                                        ) {
                                        $(location).attr('href', '#/'+$scope.link+'/');
                                        };
                                        
                                    }]);
