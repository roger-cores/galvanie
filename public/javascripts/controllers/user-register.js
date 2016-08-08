angular.module('galvanie')
  .controller('UserRegisterCtrl',[
    '$scope',
    '$http',
    '$localStorage',
    '$sessionStorage',
    '$mdToast',
    '$mdDialog',
    '$mdMedia',
    '$rootScope',
    '$window',
    function ($scope, $http, $localStorage, $sessionStorage, $mdToast, $mdDialog, $mdMedia, $rootScope, $window) {

    console.log('welcome');

    $scope.sexes = ['Male', 'Female'];

    $scope.myDate = new Date();
    $scope.minDate = new Date(
        $scope.myDate.getFullYear() - 80,
        $scope.myDate.getMonth(),
        $scope.myDate.getDate());

    $scope.maxDate = new Date(
        $scope.myDate.getFullYear() -18,
        $scope.myDate.getMonth(),
        $scope.myDate.getDate());

    $scope.user = {};
    $scope.user.dob=$scope.maxDate;
    $scope.states = [];
    $scope.cities = [];
    $scope.bloodgroups = [];

    $http.get('/api/state').success(function(response){
      $scope.states = response;
    });

    $http.get('/api/bloodgroup').success(function(response){
      $scope.bloodgroups = response;
    });

    $scope.refreshCities = function(stateId){
      $scope.selectedStateId = stateId;
      $http.get('/api/city/state/'+stateId).success(function(response){
        $scope.cities = response;
      });
    }

    $scope.getDobInvalidMsg = function(){
      return moment($scope.minDate).format('MMMM Do YYYY') + ' to ' + moment($scope.maxDate).format('MMMM Do YYYY');
    }

    $scope.clear = function(){



      $scope.user = angular.copy({

      });
      $scope.login = angular.copy({

      });
      $scope.user.dob=$scope.maxDate;
    }

    $scope.register = function(){
      $scope.login.client_secret = 'r18sAsEsxR';
      $scope.login.client_id = 'efOeHY5Ovf';
      $scope.login.type = 'USER';
      //Signing up
      $http.post('/api/login/signup', $scope.login).success(function(usr){
        //update request


        //Logging in
        $http.post('/api/login/oauth/token', {
          grant_type: 'password',
          username: $scope.login.email,
          password: $scope.login.password,
          client_secret: $scope.login.client_secret,
          client_id: $scope.login.client_id
        }).success(function(response){
          $localStorage.refresh_token = response.refresh_token;
          $localStorage.access_token = response.access_token;


          //validate token and start session
          $http.post('/api/login/validate-token', {access_token: $localStorage.access_token, client_id: 'efOeHY5Ovf', client_secret: 'r18sAsEsxR'}).success(function(response){
            $scope.user.login = usr._id;
            $http.post('/api/login/user', $scope.user).success(function(response){
              $http.get('/api/login/loginInfo').success(function(response){
                $localStorage.userInfo = response;
                $http.get('/api/login/user/userInfo/'+$localStorage.userInfo._id).success(function(response){
                  $localStorage.concreteUserInfo = response;
                  $window.location.href = '/'
                }).error(function(response){
                  console.log(response);
                });
              }).error(function(response){

              });
            }).error(function(response){
              $mdToast.show(
                $mdToast.simple()
                  .textContent('Request failed!')
                  .position('left bottom')
                  .hideDelay(3000)
              );
              console.log(response);
            });
          }).error(function(response){
            $mdToast.show(
              $mdToast.simple()
                .textContent('Request failed!')
                .position('left bottom')
                .hideDelay(3000)
            );
          });



        }).error(function(response){
          $mdToast.show(
            $mdToast.simple()
              .textContent('Request failed!')
              .position('left bottom')
              .hideDelay(3000)
          );
          console.log(response);
        });


      }).error( function(response){
        $mdToast.show(
          $mdToast.simple()
            .textContent('Signup failed!')
            .position('left bottom')
            .hideDelay(3000)
        );
        console.log(response);
      });
    }

    $rootScope.$emit('LoginPageCalled', {isLogin: true});


    $scope.repPasswordPattern = (function() {

      return {
          test: function(value) {
              return $scope.login.password === value;
          }
      };
    })();
    $scope.emailExists = false;
    $scope.emailPattern = (function() {
      var regex = /^.+@.+\..+$/;
      return {
          test: function(value) {
              if($scope.emailExists) {
                $scope.emailmsg = 'This email is already taken';
              }
              else {
                $scope.emailmsg = 'Please input a valid email address that ranges between 5 to 100 characters';
              }
              return regex.test(value) && !$scope.emailExists;
          }
      };
    })();
    $scope.emailmsg = 'Please input a valid email address that ranges between 5 to 100 characters';
    $scope.validateEmail = function(email){
      console.log(email);
      $http.get('/api/login/check-email/'+ email).success(function(response){
        if(!(response.result == null || response.result == undefined)) $scope.emailExists = response.result;
        console.log(response);
        console.log($scope.emailExists);

        $scope.account.email.$validate();
      }).error(function(response){
        console.log(response);
        $scope.account.email.$validate();
      })
    }

    $scope.mobileExists = false;
    $scope.mobilePattern = (function() {
      var regex = /^([0-9]){10,10}$/;
      return {
          test: function(value) {
              if($scope.mobileExists) {
                $scope.mobilemsg = 'This mobile number is already taken';
              }
              else {
                $scope.mobilemsg = 'Please input a valid mobile number';
              }
              return regex.test(value) && !$scope.mobileExists;
          }
      };
    })();
    $scope.mobilemsg = 'Please input a valid mobile number';
    $scope.validateMobile = function(mobile){
      console.log(mobile);
      $http.get('/api/login/check-mobile/'+ mobile).success(function(response){
        if(!(response.result == null || response.result == undefined)) $scope.mobileExists = response.result;

        $scope.account.phone.$validate();
      }).error(function(response){
        console.log(response);
        $scope.account.phone.$validate();
      })
    }


  }]);
