app.controller('loginController', ['$scope','$rootScope',function($scope, $rootScope){
                                   
                                  // alert($(".overlay"));
                                   
                                   $(".overlay").stop().animate({opacity: 0}, function(){
                                                                               $(".overlay").hide();
                                                                               });
                                   $rootScope.logintype = '';
                                   
                                   $scope.login = function () {
                                  
                                   var email= $("#loginemail").val();
                                   var pass= $("#loginemail").val();
                                   
                                   if(email=="p" && pass=="p"){ $rootScope.logintype="player";
                                   $(location).attr('href', '#/welcome/');}
                                   else if(email=="c" && pass=="c"){ $rootScope.logintype="coach";
                                   $(location).attr('href', '#/coachmessages/');}
                                   }
                                   
                                }]);
