app.controller('purchase-historyController', ['$scope', function($scope) {
                                             
                                              
                                            $(".purchase-page .overlay").stop().animate({opacity: 0}, function(){
                                                                     $(".purchase-page .overlay").hide();
                                                                     });
                                             $scope.title = 'Purchase History';
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
                                                              {cName: "Coach John S.", cstatus: "1", date: "March 3",type:"call",typeStatus:"incoming",value:"$10"},
                                                              {cName: "Coach Ruby S.", cstatus: "0", date: "March 1",type:"chat",typeStatus:"wait",value:"$5"},
                                                              {cName: "Coach John S.", cstatus: "1", date: "February 28",type:"question",typeStatus:"complete",value:"$10"},
                                                              {cName: "Coach John S.", cstatus: "1", date: "February 27",type:"call",typeStatus:"wait",value:"$5"},
                                                              {cName: "Coach John S.", cstatus: "1", date: "February 26",type:"question",typeStatus:"wait",value:"$10"},
                                                              {cName: "Coach Ruby S.", cstatus: "0", date: "February 25",type:"chat",typeStatus:"incoming",value:"$5"},
                                                              {cName: "Coach John S.", cstatus: "1", date: "February 24",type:"question",typeStatus:"incoming",value:"$10"},
                                                              {cName: "Coach John S.", cstatus: "1", date: "February 23",type:"call",typeStatus:"complete",value:"$5"},
                                                              {cName: "Coach Ruby S.", cstatus: "0", date: "March 1",type:"chat",typeStatus:"complete",value:"$10"},
                                                              {cName: "Coach John S.", cstatus: "1", date: "March 3",type:"call",typeStatus:"incoming",value:"$5"},
                                                              {cName: "Coach Ruby S.", cstatus: "0", date: "March 1",type:"chat",typeStatus:"wait",value:"$10"},
                                                              {cName: "Coach John S.", cstatus: "1", date: "February 28",type:"question",typeStatus:"complete",value:"$5"},
                                                              {cName: "Coach John S.", cstatus: "1", date: "February 27",type:"call",typeStatus:"wait",value:"$10"},
                                                              {cName: "Coach John S.", cstatus: "1", date: "February 26",type:"question",typeStatus:"wait",value:"$5"},
                                                              {cName: "Coach Ruby S.", cstatus: "0", date: "February 25",type:"chat",typeStatus:"incoming",value:"$10"}
                                                              
                                                              ];
                                              
                                              
                                              $scope.hreflink="";
                                              
                                              
                                              $scope.filterfun = function (type) {
                                              
                                              $scope.filters.type = type;
                                              $(".purchase-page #conversation").slideUp();
                                              $(".purchase-page #show-conversation style").remove();
                                              $('.purchase-page #show-conversation').append('<style>.filter-header #show-conversation:after{border-width: 11px 8.5px 0 8.5px;border-color: #026876 transparent transparent transparent;}</style>');
                                              };
                                             
                                            
                                             
                                             }]);


