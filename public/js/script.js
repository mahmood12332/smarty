// script.js

    // create the module and name it scotchApp
        // also include ngRoute for all our routing needs
    var mapp = angular.module("MyApp", ['firebase','ngRoute','angular-flexslider']);
         var config = {
            apiKey: "AIzaSyBCPKAX8a-vgXQnuIRd-zBkvd-meKKHV5w",
            authDomain: "angular-59971.firebaseapp.com",
            databaseURL: "https://angular-59971.firebaseio.com",
            projectId: "angular-59971",
            storageBucket: "angular-59971.appspot.com",
            messagingSenderId: "598546800687"
          };
          firebase.initializeApp(config);
        var db = firebase.database();
        // var fbAuth = $firebaseAuth();

        mapp.run(["$rootScope", "$location", function($rootScope, $location) {
        $rootScope.$on("$routeChangeError", function(event, next, previous, error) {
          // We can catch the error thrown when the $requireAuth promise is rejected
          // and redirect the user back to the home page
          if (error === "AUTH_REQUIRED") {
            $location.path("/");
          }
        });
        }]);
        mapp.factory("Auth", ["$firebaseAuth",
          function($firebaseAuth) {
            return $firebaseAuth();
          }
        ]);
    // configure our routes
    mapp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'homeController'
            })
            .when('/home', {
                templateUrl : 'pages/home.html',
                controller  : 'homeController'
            })

            // route for the about page
            .when('/about', {
                templateUrl : 'pages/about.html',
                controller  : 'aboutController',
            })
            .when('/services', {
                templateUrl : 'pages/services.html',
                controller  : 'serviciesController',
            })

            // route for the contact page
            .when('/team', {
                templateUrl : 'pages/team.html',
                controller  : 'teamController',
              //   resolve: {
              //   "currentAuth" : ["Auth",function(Auth){
              //     return Auth.$requireSignIn();
              //   }]
              // }
            })
            .when('/portfolio', {
                templateUrl : 'pages/portfolio.html',
                controller  : 'portfolioController',
            })
            .when('/services', {
                templateUrl : 'pages/services.html',
                controller  : 'servicesController',
            })
             .when('/contact', {
                templateUrl : 'pages/contact.html',
                controller  : 'contactController',
            })
             .when('/Adminpanel', {
                templateUrl : 'pages/Adminpanel.html',
                controller  : 'addcatController',
                resolve: {
                "currentAuth" : ["Auth",function(Auth){
                  return Auth.$requireSignIn();
                }]
              }
            })
            .when('/:id/image', {
                templateUrl : 'pages/image.html',
                controller  : 'imagesController',
                resolve: {
                "currentAuth" : ["Auth",function(Auth){
                  return Auth.$requireSignIn();
                }]
              }
            });
            // .when('/:id/image', {
            //     templateUrl : 'pages/image.html',
            //     controller  : 'imagesController',
            //     resolve: {
            //     "currentAuth" : ["Auth",function(Auth){
            //       return Auth.$requireSignIn();
            //     }]
            //   }
            // });
    });
//     function homeController($scope) {
       
// }
    // Home Controller??//
    mapp.controller('homeController',['$scope', '$firebaseObject', '$firebaseAuth', '$firebaseArray', 'Auth', function($scope, $firebaseObject, $firebaseAuth, $firebaseArray, Auth){
      var aout = Auth.$getAuth();
          if (aout){
          var reff = '/topic/';
            // if (aout.email=='testadmin@test.com'){
            //   reff = '/topic/';
            // }

            
            $scope.list = [];
            $scope.newlst = $firebaseArray(db.ref('/topic/'));
            $scope.users = [];
            $scope.newlst.$loaded().then(function(object){
             $scope.list = object;
             $scope.loading=true;
            });
          }
          else{
            var reff = '/topic/';
            // if (aout.email=='testadmin@test.com'){
            //   reff = '/topic/';
            // }

            
            $scope.list = [];
            $scope.newlst = $firebaseArray(db.ref('/topic/'));
            $scope.users = [];
            $scope.newlst.$loaded().then(function(object){
              
             $scope.list = object;
             console.log($scope.list[0].images)
             $scope.loading=true;
            });
          }
      $scope.value = undefined;
      $scope.items = [
        {id:1, name:'item1', img:'images/1.jpg'},
        {id:2, name:'item2', img:'images/2.jpg'},
        {id:3, name:'item1', img:'images/3.jpg'},
        {id:4, name:'item2', img:'images/4.jpg'},
        {id:5, name:'item1', img:'images/5.jpg'},
        {id:6, name:'item2', img:'images/6.jpg'},
        {id:7, name:'item1', img:'images/7.jpg'},
        {id:8, name:'item2', img:'images/8.jpg'},
        {id:9, name:'item3', img:'images/9.jpg'}
      ];
    }]);







    mapp.controller('aboutController',['$scope', '$firebaseObject', '$firebaseAuth', '$firebaseArray', function($scope, $firebaseObject, $firebaseAuth, $firebaseArray){
 

    }]);
     mapp.controller('servicesController',['$scope', '$firebaseObject', '$firebaseAuth', '$firebaseArray', function($scope, $firebaseObject, $firebaseAuth, $firebaseArray){
 

    }]);
      mapp.controller('teamController',['$scope', '$firebaseObject', '$firebaseAuth', '$firebaseArray', function($scope, $firebaseObject, $firebaseAuth, $firebaseArray){
 

    }]);
    mapp.controller('portfolioController',['$scope','$firebaseObject', '$firebaseArray', 'Auth','$location', function($scope,$firebaseObject, $firebaseArray, Auth,$location){
     
         var aout = Auth.$getAuth();
          if (aout){
          var reff = '/topic/';
            // if (aout.email=='testadmin@test.com'){
            //   reff = '/topic/';
            // }

            
            $scope.list = [];
            $scope.newlst = $firebaseArray(db.ref('/topic/'));
            $scope.users = [];
            $scope.newlst.$loaded().then(function(object){
             $scope.list = object;
             $scope.loading=true;
            });
          }
          else{
            var reff = '/topic/';
            // if (aout.email=='testadmin@test.com'){
            //   reff = '/topic/';
            // }

            
            $scope.list = [];
            $scope.newlst = $firebaseArray(db.ref('/topic/'));
            $scope.users = [];
            $scope.newlst.$loaded().then(function(object){
              
             $scope.list = object;
             console.log($scope.list)
             $scope.loading=true;
            });
          }
    }]);
       mapp.controller('contactController',['$scope', '$firebaseObject', '$firebaseAuth', '$firebaseArray', function($scope, $firebaseObject, $firebaseAuth, $firebaseArray){
 

    }]);


    // create the controller and inject Angular's $scope
    mapp.controller('loginController',['$scope', '$firebaseObject', '$firebaseAuth', '$firebaseArray', function($scope, $firebaseObject, $firebaseAuth, $firebaseArray){
 
            $scope.fbAuth = $firebaseAuth();
            $scope.err = {};
            $scope.btn_hide = true;
              //var authData = fbAuth.$getAuth();
            $scope.fbAuth.$onAuthStateChanged(function(firebaseUser) {
              if (firebaseUser) {
                console.log("Signed in as:", firebaseUser.email);
                $scope.btn_show = true;
                $scope.btn_hide = false;
              } else {
                console.log("Signed out");
                $scope.btn_hide = true;
                $scope.btn_show = false;
              }
            });
      $scope.logmein = function(username, password) {
        $scope.fbAuth.$signInWithEmailAndPassword(
            username,
            password
        ).then(function(authData) {
            $scope.err.message = "Successfully Logged in as " + authData.uid +" "+authData.providerId;
          $scope.btn_hide = false;
          $scope.redirect();
        }).catch(function(error) {
          $scope.err.message = "Error" + error;
            console.error("ERROR: " + error);
          $scope.btn_hide = true;
        });
            };
        $scope.redirect = function(){
          window.location = "/#!/admin";
        }
  
      $scope.regmein = function(usernames, passwords) {
        console.error("User Details: " + usernames +  $scope.usernames);
       // username = "test@test123.com";
        $scope.fbAuth.$createUserWithEmailAndPassword(
            usernames,
            passwords
        ).then(function(authData) {
            $scope.err.message = "User registered "+authData.uid;
            // $scope.load();
        }).catch(function(error) {
          $scope.err.message = "Error" + error;
            console.error("ERROR: " + error);
        });

    };

  
  $scope.logmeout = function() {
    $scope.fbAuth.$signOut();
    $scope.err.message = "Logged Out";
    $scope.redirects();
  };
  $scope.redirects = function(){
          window.location = "/#!/login";
        }
  // console.error("ERROR: ");
    $scope.deleteuser = function() {
    $scope.fbAuth.$deleteUser();
    $scope.err.message = "User Deleted";
  };
  
     $scope.checkstatus = function(){
       var authData = $scope.fbAuth.$getAuth();

        if (authData) {
           $scope.err.message = "Logged in as: " + authData.uid +" "+ authData.email+" "+ authData.password;
          
            $scope.btn_hide = false;
          
        } else {
           $scope.err.message = "Not Logged in!";
          $scope.btn_hide = true;
        }
      };


  
  $scope.populate = function(){
    var authData = $scope.fbAuth.$getAuth();
    if (authData){
    var refPath = "/topic/";
    so = $firebaseArray(db.ref(refPath));
    so.$add({
      lnames: $scope.lnames
    }).then(function(dat){
      $scope.err.message = "Data uploaded";
    });
    }
  };
 

}]);




     mapp.controller('mainController',['$scope','$firebaseObject', '$firebaseArray', 'Auth','$location', function($scope,$firebaseObject, $firebaseArray, Auth,$location){
     
  var aout = Auth.$getAuth();
  if (aout){
  var reff = '/topic/';
    // if (aout.email=='testadmin@test.com'){
    //   reff = '/topic/';
    // }

    
    $scope.list = [];
    $scope.newlst = $firebaseArray(db.ref('/topic/'));
    $scope.users = [];
    $scope.newlst.$loaded().then(function(object){
     $scope.list = object;
     $scope.loading=true;
    });
  }
  else{
    var reff = '/topic/';
    // if (aout.email=='testadmin@test.com'){
    //   reff = '/topic/';
    // }

    
    $scope.list = [];
    $scope.newlst = $firebaseArray(db.ref('/topic/'));
    $scope.users = [];
    $scope.newlst.$loaded().then(function(object){
      
     $scope.list = object;
     console.log($scope.list)
     $scope.loading=true;
    });
  }

}]);   

 mapp.controller('addcatController',['$scope','$firebaseObject', '$firebaseArray', 'Auth','$location', function($scope,$firebaseObject, $firebaseArray, Auth,$location){
     
  var aout = Auth.$getAuth();
  if (aout){
  var reff = '/topic/';
    if (aout.email=='testadmin@test.com'){
      reff = '/topic/';
    }

    
    // $scope.uid = {};
    // $scope.lst = {};
    $scope.list = [];

    // $scope.lst = $firebaseArray(db.ref(reff));
    $scope.newlst = $firebaseArray(db.ref('/topic/'));
    $scope.users = [];
    $scope.newlst.$loaded().then(function(object){

     $scope.list = object;
     console.log(object.length)
     if (object.length < 20 ) {
       console.log("true")   
       $scope.catogaries=false; 
     } else {
      console.log("else")  
      $scope.catogaries=true; 
     }
     console.log($scope.list)
     console.log($scope.list.length)
     $scope.loading=true;
    });
  }


}]);   

mapp.controller('imagesController', imagesController)
mapp.directive('customOnChange', customOnChange)

  function imagesController ($firebaseArray,$routeParams,$scope) {
  var ref = firebase.database().ref();
  console.log($routeParams.id); 
  $scope.list = $firebaseArray(db.ref('/topic/').child($routeParams.id));
    var vm = this;
    var storageService = firebase.storage();
    var ref = firebase.database().ref("topic/").child($routeParams.id).child("images/");
    var list = $firebaseArray(ref);
    list.$loaded().then(function(object){
      $scope.loading=true;
    })
    vm.images = list;
    console.log(vm.images);
    vm.deleteImg = deleteImg;
    vm.downloadImg = downloadImg;
    vm.image = function(event){
        event.preventDefault();
        var file = event.target.files[0];
        uploadImage(file);
      };
      
    function uploadImage(file) {
      var random = parseInt(Math.random() * 1000000);
      var refStorage = storageService.ref('uploads').child(random.toString()).child(file.name);
      var uploadTask = refStorage.put(file);
      uploadTask.on('state_changed', null, function(error){
        console.log('upload error', error);
      }, function() {
        var imageData = {
          url: uploadTask.snapshot.downloadURL,
          bytes: uploadTask.snapshot.totalBytes,
          name: uploadTask.h.name,
          path: uploadTask.h.fullPath,
          date: uploadTask.h.timeCreated
        }

        list.$add(imageData).then(function(ref) {
         console.log("dataload");
          swal("Success", "Your image has been upload", "success")

        });
      }
    );
    }

    function downloadImg(id) {
      var image = list.$getRecord(id);
      window.open(image.url, 'Download');
    }

    function deleteImg(id) {
      var image = list.$getRecord(id);

      swal({
        title: "Are you sure?",
        text: "Do you want to remove this image?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes, delete it!",
        closeOnConfirm: false
      },
      function(){
        var imgRef = storageService.ref(image.path);
        imgRef.delete().then(function() {
          list.$remove(image).then(function(ref) {
            swal("Deleted!", "Your image has been deleted.", "success");
          });
        }).catch(function(error) {
          console.log('an error occurred!', error);
        });
      });

    }

  }

  function customOnChange() {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        var onChangeHandler = scope.$eval(attrs.customOnChange);
        element.bind('change', onChangeHandler);
      }
    };
  }
  