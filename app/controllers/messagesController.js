app.controller('messagesController', ['$scope', '$location',function($scope, $location){
                                            $(".overlay").stop().animate({opacity: 0}, function(){
                                                                   $(".overlay").hide();
                                                                   });
                                             $scope.title = 'Responses';
                                             $scope.link="coach-box";
                                             $scope.animationClass = "slide";
                                             
                                             $scope.toggleAnimation = function() {
                                             $scope.animationClass = "reverse";
                                             $timeout(function() {
                                                      $scope.animationClass = "slide";
                                                      }, 350);
                                             }
                                       $scope.filters = { };
                                             $scope.items = [
                                                {cName: "Coach John S.", cstatus: "1", date: "March 3",type:"call",typeStatus:"incoming"},
                                                {cName: "Coach Ruby S.", cstatus: "0", date: "March 1",type:"chat",typeStatus:"wait"},
                                                {cName: "Coach John S.", cstatus: "1", date: "February 28",type:"question",typeStatus:"complete"},
                                                {cName: "Coach John S.", cstatus: "1", date: "February 27",type:"call",typeStatus:"wait"},
                                                {cName: "Coach John S.", cstatus: "1", date: "February 26",type:"question",typeStatus:"wait"},
                                                {cName: "Coach Ruby S.", cstatus: "0", date: "February 25",type:"chat",typeStatus:"incoming"},
                                                {cName: "Coach John S.", cstatus: "1", date: "February 24",type:"question",typeStatus:"incoming"},
                                                {cName: "Coach John S.", cstatus: "1", date: "February 23",type:"call",typeStatus:"complete"},
                                                {cName: "Coach Ruby S.", cstatus: "0", date: "March 1",type:"chat",typeStatus:"complete"},
                                                {cName: "Coach John S.", cstatus: "1", date: "March 3",type:"call",typeStatus:"incoming"},
                                                {cName: "Coach Ruby S.", cstatus: "0", date: "March 1",type:"chat",typeStatus:"wait"},
                                                {cName: "Coach John S.", cstatus: "1", date: "February 28",type:"question",typeStatus:"complete"},
                                                {cName: "Coach John S.", cstatus: "1", date: "February 27",type:"call",typeStatus:"wait"},
                                                {cName: "Coach John S.", cstatus: "1", date: "February 26",type:"question",typeStatus:"wait"},
                                                {cName: "Coach Ruby S.", cstatus: "0", date: "February 25",type:"chat",typeStatus:"incoming"}

                                      ];
                                      
                                      
                                       $scope.hreflink="";
                                      
                                     
                                      $scope.filterfun = function (type) {
                                     
                                      $scope.filters.type = type;
                                      $(".messages-page #conversation").slideUp();
                                      $(".messages-page #show-conversation style").remove();
                                      $('.messages-page #show-conversation').append('<style>.filter-header #show-conversation:after{border-width: 11px 8.5px 0 8.5px;border-color: #026876 transparent transparent transparent;}</style>');
                                      };
                                      
                                     

                                      
                                      
                                      
                                             }]);
