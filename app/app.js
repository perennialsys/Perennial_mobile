
    
    var app = angular.module('FcsApp', ['ngRoute', 'ngAnimate','ng.picturefill']);
    
    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
            //    controller: '',
                templateUrl: 'app/views/login/login_dialog_box.directive.html'
                  //templateUrl: 'app/views/live-callC.html'
            })
            .when('/welcome/', {
              //  controller: '',
                templateUrl: 'app/views/welcome.html'
            })
			.when('/signup/', {
              //  controller: '',
                templateUrl: 'app/views/signup.html'
            })
            .when('/login/', {
              //  controller: '',
                templateUrl: 'app/views/login/login_dialog_box.directive.html'
            })
            .when('/textD1/', {
                controller: 'live-textController',
                templateUrl: 'app/views/live-text.html'
            })
            .when('/textD1-A/', {
                controller: 'live-textController',
                templateUrl: 'app/views/live-textA.html'
            })
			.when('/chatD2/', {
                controller: 'live-chatController',
                templateUrl: 'app/views/live-chat.html'
            })
            .when('/chatD2-A/', {
                controller: 'live-chatController',
                templateUrl: 'app/views/live-chatA.html'
            })
          /*  .when('/chatD2-B/', {
                controller: 'live-callController',
                templateUrl: 'app/views/live-chatB.html'
            })
             .when('/chatD2-C/', {
              //  controller: 'live-chatController',
                templateUrl: 'app/views/live-chatC.html'
            })
            .when('/chatD2-D/', {
              //  controller: '',
                templateUrl: 'app/views/live-chatD.html'
            })
              .when('/chatD2-E/', {
              //  controller: '',
                templateUrl: 'app/views/live-chatE.html'
            })
            */
            .when('/callD3-A/', {
                controller: 'live-callController',
                templateUrl: 'app/views/live-callA.html'
            })
            .when('/callD3-B/', {
                controller: 'live-callController',
                templateUrl: 'app/views/live-callB.html'
            })
           /* .when('/callD3-C/', {
              //  controller: '',
                templateUrl: 'app/views/live-callC.html'
            })
             .when('/callD3-D/', {
              //  controller: '',
                templateUrl: 'app/views/live-callD.html'
            })
            .when('/callD3-ED/', {
              //  controller: '',
                templateUrl: 'app/views/live-callE.html'
            })
              .when('/chatD2-F/', {
              //  controller: '',
                templateUrl: 'app/views/live-callF.html'
            })*/
            .when('/coach-box/', {
               controller: 'coachs-boxController',
                templateUrl: 'app/views/coachs-box.html'
            })
            .when('/coach-details/', {
                controller: 'coach-detailsController',
                templateUrl: 'app/views/coach-details.html'
            })
             .when('/messages/', {
                controller: 'messagesController',
                templateUrl: 'app/views/messages.html'
            })
            .when('/archive-details-text/', {
               controller: 'archive_detailsController',
                templateUrl: 'app/views/archive-details-text.html'
            })
             .when('/archive-details-call/', {
               controller: 'archive_detailsController',
                templateUrl: 'app/views/archive-details-call.html'
            })
             .when('/archive-details-chat/', {
               controller: 'archive_detailsController',
               templateUrl: 'app/views/archive-details-chat.html'
            })
            .when('/purchase-history/', {
               controller: 'purchase-historyController',
               templateUrl: 'app/views/purchase-history.html'
            })
            .when('/coachmessages/', {
               controller: 'coachmessagesController',
               templateUrl: 'app/views/coachmessages.html'
            })
              
               
            .otherwise( { redirectTo: '/' } );
    });
 
 

 
    app.directive('backAnimation', ['$browser', '$location', function($browser, $location) {
    	return {
    		link: function(scope, element) {

    			$browser.onUrlChange(function(newUrl) {
    				if ($location.absUrl() === newUrl) {
    					//alert('Back');
    					element.addClass('reverse');
    				}
    			});

    			scope.__childrenCount = 0;
    			scope.$watch(function() {
    				scope.__childrenCount = element.children().length;
    			});

    			scope.$watch('__childrenCount', function(newCount, oldCount) {
    				if (newCount !== oldCount && newCount === 1) {
    					element.removeClass('reverse');
    				}
    			});
    		}
    	};
    }]);
    
//}());

