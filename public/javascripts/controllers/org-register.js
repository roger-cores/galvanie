angular.module('galvanie')
  .controller('OrgRegisterCtrl',['$scope', '$http', '$localStorage', '$sessionStorage', '$mdToast', '$mdDialog', '$mdMedia', '$rootScope', '$window', function ($scope, $http, $localStorage, $sessionStorage, $mdToast, $mdDialog, $mdMedia, $rootScope, $window) {

    $scope.org = {};
    $scope.states = [];
    $scope.cities = [];

    $http.get('/api/state').success(function(response){
      $scope.states = response;
    });

    $scope.refreshCities = function(stateId){
      $scope.selectedStateId = stateId;
      $http.get('/api/city/state/'+stateId).success(function(response){
        $scope.cities = response;
      });
    }

    $scope.clear = function(){
      $scope.org = angular.copy({
        name: '',
        desc: '',
        license: '',
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


    $rootScope.$emit('LoginPageCalled', {isLogin: true});


    $scope.repPasswordPattern = (function() {

      return {
          test: function(value) {

              return $scope.org.password === value;
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
    };



    $scope.licensemsg = 'Please input a valid license number';
    $scope.licenseExists = false;
    $scope.licensePattern = (function() {
      return {
          test: function(value) {
              if($scope.licenseExists) {
                $scope.licensemsg = 'This license is already taken';
              }
              else {
                $scope.licensemsg = 'Please input a valid license number';
              }
              return !$scope.licenseExists;
          }
      };
    })();
    $scope.validateLicense = function(license){
      console.log(license);
      $http.get('/api/login/org/check-license/'+ license).success(function(response){
        if(!(response.result == null || response.result == undefined)) $scope.licenseExists = response.result;
        console.log(response);
        console.log($scope.licenseExists);

        $scope.orgInfo.license.$validate();
      }).error(function(response){
        console.log(response);
        $scope.orgInfo.license.$validate();
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

    var errorHandler = function(err){
      $mdToast.show(
        $mdToast.simple()
          .textContent('Sign up failed')
          .position('left bottom')
          .hideDelay(3000)
      );
      console.log(err);
    }
    $scope.register = function(){
      $scope.org.client_secret = 'r18sAsEsxR';
      $scope.org.client_id = 'efOeHY5Ovf';
      $scope.org.type = 'ORGANIZATION';
      $http.post('/api/login/signup', $scope.org).success(function(org){

        $http.post('/api/login/oauth/token', {
          grant_type: 'password',
          username: $scope.org.email,
          password: $scope.org.password,
          client_secret: $scope.org.client_secret,
          client_id: $scope.org.client_id
        }).success(function(response){
          $localStorage.access_token = response.access_token;
          $http.post('/api/login/validate-token', {
            access_token: $localStorage.access_token,
            client_id: 'efOeHY5Ovf',
            client_secret: 'r18sAsEsxR'
          }).success(function(response){
            $http.post('/api/login/org', {
              name: $scope.org.name,
              license: $scope.org.license,
              description: $scope.org.desc,
              login: org._id
            }).success(function(response){
              //redirect
              $http.get('/api/login/loginInfo').success(function(response){
                $localStorage.userInfo = response;
                $http.get('/api/login/org/orgInfo/'+$localStorage.userInfo._id).success(function(response){

                  $localStorage.orgInfo = response;
                  $window.location.href = '/'


                }).error(function(response){
                  console.log(response);

                });
              }).error(function(response){

              });
            }).error(errorHandler);
          }).error(errorHandler);
        }).error(errorHandler);



      }).error(errorHandler);
    }

  }]);
