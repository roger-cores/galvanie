angular.module('galvanie')
  .controller('IndexCtrl',['$scope', '$http', '$localStorage', '$sessionStorage', '$mdToast', '$mdDialog', '$mdMedia', '$rootScope', '$window', function ($scope, $http, $localStorage, $sessionStorage, $mdToast, $mdDialog, $mdMedia, $rootScope, $window) {



    if($localStorage.userInfo && $localStorage.userInfo.type){
      console.log($localStorage.userInfo);
      switch($localStorage.userInfo.type){
        case 'USER':
          $scope.target = 'user-home';
          break;
        case 'ORGANIZATION':
          $scope.target = 'org-home';
          break;
        case 'BLOODBANK':
          $scope.target = 'bb-home';
          break;
        default:
          $scope.target = 'main';
      }

      $rootScope.$emit('LoginPageCalled', {isLogin: false, index: true});
    } else {
      $scope.target = 'main';
      $rootScope.$emit('LoginPageCalled', {isLogin: false, index: true});
    }


    $rootScope.$on('LoggedOut', function(event, data){
      $scope.target = 'main';
    });

  }]);
