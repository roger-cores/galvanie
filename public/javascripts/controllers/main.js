angular.module('galvanie')
  .controller('LoginCtrl',[
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

    $scope.$storage = $localStorage;



    $scope.login = function(){
      $http.post('/api/login/oauth/token', {
        username: $scope.email,
        password: $scope.password,
        grant_type: "password",
        client_id: "efOeHY5Ovf",
        client_secret: "r18sAsEsxR"
      }).then(function(res){
        $localStorage.access_token = res.data.access_token;
        $localStorage.refresh_token = res.data.refresh_token;
        $http.post('/api/login/validate-token', {
          access_token: $localStorage.access_token,
          client_id: "efOeHY5Ovf",
          client_secret: "r18sAsEsxR"
        }).success(function(respones){


          $http.get('/api/login/loginInfo').success(function(response){
            $localStorage.userInfo = response;

            switch($localStorage.userInfo.type){
              case 'USER':
                $http.get('/api/login/user/userInfo/'+$localStorage.userInfo._id).success(function(response){
                  $localStorage.concreteUserInfo = response;
                  $window.location.href = '/'
                }).error(function(response){
                  console.log(response);
                });
                break;
              case 'BLOODBANK':
                $http.get('/api/login/org/0/bloodbank/bbInfo/'+$localStorage.userInfo._id).success(function(response){
                  $localStorage.bbInfo = response;
                  $window.location.href = '/'
                }).error(function(response){
                  console.log(response);

                });
                break;
              case 'ORGANIZATION':
                $http.get('/api/login/org/orgInfo/'+$localStorage.userInfo._id).success(function(response){

                  $localStorage.orgInfo = response;
                  $window.location.href = '/'



                }).error(function(response){
                  console.log(response);

                });
                break;
            }




          }).error(function(response){

          });
        }).error(function(response){});

      }, function(err){
        $scope.showSimpleToast();
      });
    }




    $scope.showSimpleToast = function() {
      $mdToast.show(
        $mdToast.simple()
          .textContent('Authentication Failed!')
          .position("top right")
          .hideDelay(3000)
      );
    };

    $rootScope.$emit('LoginPageCalled', {isLogin: true});

  }]);
