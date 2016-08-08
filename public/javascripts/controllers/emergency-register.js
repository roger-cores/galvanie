angular.module('galvanie')
  .controller('EmergencyRegisterCtrl',[
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

    $scope.user = {};
    $scope.states = [];
    $scope.cities = [];
    $scope.bloodgroups = [];
    $scope.firstVisible = true;

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

    $scope.clear = function(){
      $scope.user = angular.copy({
        bloodgroup: '',
        email: '',
        password: '',
        repassword: '',
        phone: '',
        address:{
          pincode: '',
          streetAddress: '',
          businessBlockName: '',
          city: '',
          state: ''
        }
      });
    }

    $scope.register = function(){
      $scope.user.client_secret = 'r18sAsEsxR';
      $scope.user.client_id = 'efOeHY5Ovf';
      $scope.user.type = 'USER';
      //Signing up
      $http.post('/api/login/signup', $scope.user).success(function(usr){
        //update request


        //Logging in
        $http.post('/api/login/oauth/token', {
          grant_type: 'password',
          username: $scope.user.email,
          password: $scope.user.password,
          client_secret: $scope.user.client_secret,
          client_id: $scope.user.client_id
        }).success(function(response){
          $localStorage.refresh_token = response.refresh_token;
          $localStorage.access_token = response.access_token;
          var deadline = new Date(new Date().getTime() + (86400000));
          var request = {
            requestorLogin: usr._id,
          	requestedBloodGroup: $scope.user.bloodgroup,
          	active: true,
          	requestedDate: Date.now(),
          	deadline: deadline,
          	fulfilled: false,
          	address: $scope.user.address,
            client_secret: 'r18sAsEsxR',
            client_id: 'efOeHY5Ovf'
          }
          console.log(request);
          //validate token and start session
          $http.post('/api/login/validate-token', {access_token: $localStorage.access_token, client_id: 'efOeHY5Ovf', client_secret: 'r18sAsEsxR'}).success(function(response){



            //create request
            $http.post('/api/login/user/request', request).success(function(response){
              //redirect
              console.log(response);

              $scope.user.login = usr._id;
              $http.get('/api/login/loginInfo').success(function(response){
                $localStorage.userInfo = response;
                $localStorage.concreteUserInfo = {fname: 'Guest', login: response._id};
                $window.location.href = '/';



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

              return $scope.user.password === value;
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
