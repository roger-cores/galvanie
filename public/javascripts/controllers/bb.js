angular.module('galvanie')
  .controller('BBCtrl',[
    '$scope',
    '$http',
    '$localStorage',
    '$sessionStorage',
    '$mdToast',
    '$mdDialog',
    '$mdMedia',
    '$rootScope',
    '$window',
    '$location',
  function ($scope, $http, $localStorage, $sessionStorage, $mdToast, $mdDialog, $mdMedia, $rootScope, $window, $location) {


    var bbId;
    var bbInfo;
    $rootScope.$emit('LoginPageCalled', {isLogin: false});


    $scope.refreshIncomingRequests = function(){
      $http.get('/api/login/user/request/city/' + bbInfo.address.city).success(function(response){
        $scope.requests = response;
        console.log(response);
        
      }).error(function(response){
        console.log(response);
      });
    }


    var refreshBloodGroups = function(){
      $scope.bloodgroups = [];
      $http.get('/api/bloodgroup').success(function(response){
        $scope.bloodgroups = response;
      });
    }
    refreshBloodGroups();

    $scope.bloodGroupChanged = function(bloodGroup){
      console.log(bloodGroup);
      console.log($scope.bloodStorageData.masterDataList);
      var names = $scope.bloodStorageData.masterDataList.map(function(item) {
          return item['bloodGroup']['_id'];

      });
      console.log(names);
    }

    $scope.bloodGroupPattern = (function() {

      return {

          test: function(value) {
              var names = $scope.bloodStorageData.masterDataList.map(function(item) {
                  return item['bloodGroup']['_id'];
              });
              return names.indexOf(value) == -1;
          }
      };
    })();

    /**
        BloodBank Storage
    **/

    $scope.bloodStorageData = {};
    $scope.bloodStorageData.error = function(response){
      console.log(response);
      $mdToast.show(
        $mdToast.simple()
          .textContent('Something went wrong!')
          .position('left bottom')
          .hideDelay(3000)
      );
    }

    $scope.bloodStorageData.preAdd = function(masterData, next){
      $scope.bloodStorageData.masterData.bloodBank = bbId;
      next();
    }

    $scope.bloodStorageData.preEdit = function(data, next){
      var masterData = {};
      angular.copy(data, masterData);
      masterData.bloodGroup = masterData.bloodGroup._id;
      next(masterData);
    }

    /**
          BloodBank Ads
    **/

    $scope.adData = {};
    $scope.adData.error = function(response){
      console.log(response);
      $mdToast.show(
        $mdToast.simple()
          .textContent('Something went wrong!')
          .position('left bottom')
          .hideDelay(3000)
      );
    }


    function DialogController($scope, $mdDialog, ad, bbId) {

      $scope.ad = ad;



      $scope.refreshDonors = function(){
        $http.get('/api/login/org/0/bloodbank/' + bbId + '/ad/' + $scope.ad._id).success(function(response){
          console.log(response);
          if(response)
          $scope.response = response;

        }).error(function(response){
          console.log(response);
        });
      }

      $scope.refreshDonors();

      $scope.acceptDonor = function(user){
        user.accepted = true;
        $http.put('/api/login/org/0/bloodbank/' + bbId + '/ad/' + ad._id + '/updateUsers', {user: user}).success(function(response){
          $scope.refreshDonors();
        }).error(function(response){
          console.log(response);
        });
      }

      $scope.releaseDonor = function(user){
        user.done = true;
        user.doneDate = Date.now();
        $http.put('/api/login/org/0/bloodbank/' + bbId + '/ad/' + ad._id + '/updateUsers', {user: user}).success(function(response){
          $scope.refreshDonors();
        }).error(function(response){
          console.log(response);
        });
      }

      $scope.cancelDonor = function(user){
        user.accepted = false;
        $http.put('/api/login/org/0/bloodbank/' + bbId + '/ad/' + ad._id + '/updateUsers', {user: user}).success(function(response){
          $scope.refreshDonors();
        }).error(function(response){
          console.log(response);
        });
      }

      $scope.formatDate = function(date){
        return moment(new Date(date)).format('DD MMM YYYY');
      }

      $scope.isEmpty = function(){
        if($scope.response && $scope.response.ad && $scope.response.ad.users){
          if($scope.response.ad.users.length > 0) return false;
          else return true;
        } else return false;

      }

      $scope.hide = function() {
        $mdDialog.hide();
      };
      $scope.cancel = function() {
        $mdDialog.cancel();
      };
      $scope.answer = function(answer) {
        $mdDialog.hide(answer);
      };
    }

    $scope.customFullscreen = $mdMedia('xs');
    $scope.openAd = function(ev, ad){
      var useFullScreen = ($mdMedia('xs'))  && $scope.customFullscreen;
      $mdDialog.show({
        controller: DialogController,
        templateUrl: '/ad-info',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true,
        fullscreen: useFullScreen,
        locals: {
           ad: ad,
           bbId: bbId
        }
      })
      .then(function(answer) {
        $scope.status = 'You said the information was "' + answer + '".';
      }, function() {
        $scope.status = 'You cancelled the dialog.';
      });
      $scope.$watch(function() {
        return $mdMedia('xs') || $mdMedia('sm');
      }, function(wantsFullScreen) {
        $scope.customFullscreen = (wantsFullScreen === true);
      });
    }

    $scope.adData.preAdd = function(masterData, next){
      $scope.adData.masterData.requestorBloodBank = bbId;
      $scope.adData.masterData.active = true;
      $scope.adData.masterData.requestedDate = new Date();
      next();
    }

    $scope.adData.preEdit = function(data, next){
      var masterData = {};
      angular.copy(data, masterData);
      masterData.requestedBloodGroup = masterData.requestedBloodGroup._id;
      masterData.expiry = new Date(data.expiry);
      next(masterData);
    }
    $scope.today = new Date();
    $scope.nextMonth = new Date(
        $scope.today.getFullYear(),
        $scope.today.getMonth() + 1,
        $scope.today.getDate()
    );


    $scope.getExpiryInvalidMsg = function(){
      return moment($scope.today).format('MMMM Do YYYY') + ' to ' + moment($scope.nextMonth).format('MMMM Do YYYY');
    }

    $scope.formatDate = function(date){
      return moment(new Date(date)).format('MMMM Do YYYY');
    }

    /**
      Set up master data
    **/

    if($location.search().bbId){
      bbId = $location.search().bbId;

      $http.get('/api/login/org/'+ $localStorage.orgInfo._id +'/bloodbank/'+bbId).success(function(response){
        bbInfo = response;
        console.log(bbInfo);
        $scope.refreshIncomingRequests();
        masterDataManager($scope, $http, '/api/login/org/'+ $localStorage.orgInfo._id +'/bloodbank/'+bbId+'/bloodStorage', 'bloodStorageData');
        masterDataManager($scope, $http, '/api/login/org/'+ $localStorage.orgInfo._id +'/bloodbank/'+bbId+'/ad', 'adData');
      }).error(function(response){
        console.log(response);

      });
    }
    else{
      bbId = $localStorage.bbInfo._id;
      bbInfo = $localStorage.bbInfo;
      $scope.refreshIncomingRequests();
      masterDataManager($scope, $http, '/api/login/org/0/bloodbank/'+bbId+'/bloodStorage', 'bloodStorageData');
      masterDataManager($scope, $http, '/api/login/org/0/bloodbank/'+bbId+'/ad', 'adData');
    }






  }]);
