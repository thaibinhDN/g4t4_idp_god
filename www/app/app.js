angular.module('myCar',['ionic'])
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
    url: '/home',
    templateUrl: 'app/home/home.html',
    controller: 'homeCtrl'
  })
  .state('app',{
      abstract:true,
      url:"/app",
      templateUrl:"app/layout/layout.html",
      controller: 'layoutCtrl'
  })
  .state('app.carList',{
      url:"/carList",
      views:{
        "mainContent":{
            templateUrl:"app/car/carList.html"
        }
      }
      
  })
  .state('app.updateCar',{
      url:"/updateCar",
      views:{
        "mainContent":{
            templateUrl:"app/updateCar/updateCar.html"
        }
      }
      
  })
  .state('app.addCar',{
      url:"/addCar",
      views:{
        "mainContent":{
            templateUrl:"app/addCar/addCar.html"
        }
      }
      
  })
  .state('app.taskList',{
      url:"/taskList",
      views:{
        "mainContent":{
            templateUrl:"app/taskList/taskList.html"
        }
      }
      
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/carList');
});

