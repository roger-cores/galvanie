angular.module('galvanie')
  .controller('UserCtrl',[
    '$scope',
    '$http',
    '$localStorage',
    '$sessionStorage',
    '$rootScope',
    '$window',
    function ($scope, $http, $localStorage, $sessionStorage, $rootScope, $window) {


      $scope.request = {};
      $scope.request.copyAddress = true;

      $scope.adsListStatus = true;


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

      $scope.refreshAdsList = function(){
        $http.get('/api/login/org/0/bloodbank/0/ad/bloodgroup/'+$localStorage.concreteUserInfo.bloodGroup._id).success(function(response){
          $scope.ads = response;
          console.log(response);
        }).error(function(response){
          console.log(response);
        });
      }

      $scope.listVisibility = function(){
        if($scope.adsListStatus){
          if($scope.lastDonated != null){
            return false;
          }
          else return $scope.adsListStatus;
        } else return $scope.adsListStatus;
      }

      $scope.isLastDonatedNull = function(){
        if($scope.lastDonated == null || $scope.lastDonated == undefined)
          return true;
        else return false;
      }


      $scope.refreshAdsListStatus = function(){
        if($localStorage.concreteUserInfo._id == null) return false;
        $http.get('/api/login/org/0/bloodbank/0/ad/forUser/' + $localStorage.concreteUserInfo._id).success(function(response){

          $scope.adsListStatus = response.result;
          console.log(response);
          if(response.status && response.status.doneDate){
            var lastDonated = new Date(response.status.doneDate);
            lastDonated = moment(lastDonated).add('95', 'days').calendar();
            $scope.lastDonated = lastDonated;
          }


          $scope.ad = response.ad;
          $scope.status = response.status;
          if($scope.adsListStatus) $scope.refreshAdsList();
        }).error(function(response){
          console.log(response);
        })
      }

      $scope.refreshAdsListStatus();

      $scope.cancelDonation = function(){
        $http.put('/api/login/org/0/bloodbank/0/ad/'+$scope.ad._id+'/pullUser/' + $localStorage.concreteUserInfo._id).success(function(response){
          $scope.refreshAdsListStatus();
        }).error(function(response){
          console.log(response);
        });
      }

      $scope.refreshCurrentRequest = function(){
        $http.get('/api/login/user/request').success(function(response){
          console.log(response);
          $scope.currentRequest = response;
          if(response['code']==null){
            $scope.newRequestClass = 'hidden';
            $scope.currentRequestExists = true;
            $scope.requestEditMode = false;
          }
          else {
            $scope.newRequestClass = '';
            $scope.requestEditMode = false;
            $scope.currentRequestExists = false;
          }
          console.log(response);
        }).error(function(response){
          console.log(response);
          $scope.newRequestClass = '';
          $scope.currentRequestExists = false;
          $scope.currentRequest = null;
          $scope.requestEditMode = false;
        });
      }

      $scope.refreshCurrentRequest();

      $scope.getFormattedRequestedDate = function(){
        if($scope.currentRequest)
        return moment($scope.currentRequest.requestedDate).fromNow();
      }

      $scope.getFormattedDeadlineDate = function(){
        if($scope.currentRequest) {
          console.log(new Date($scope.currentRequest.deadline) > Date.now());
          if(new Date($scope.currentRequest.deadline) < Date.now())
            return 'This request expired ' + moment($scope.currentRequest.deadline).fromNow();
          else
            return 'Expires: ' + moment($scope.currentRequest.deadline).fromNow();
        }
      }

      $scope.donate = function(ad){
        $http.put('/api/login/org/0/bloodbank/0/ad/' + ad._id + '/pushUser/' + $localStorage.concreteUserInfo._id).success(function(response){
          console.log(response);
          $scope.refreshAdsListStatus();
        }).error(function(response){
          console.log(response);
        });
      }

      $scope.getFormattedExpiringDate = function(){
        if($scope.ad)
        return moment(new Date($scope.ad.expiry)).fromNow();
      }

      $scope.cancelRequest = function(){
        $http.delete('/api/login/user/request/'+$scope.currentRequest._id).success(function(response){
          $scope.refreshCurrentRequest();
        }).error(function(response){
          console.log(response);
        })
      }

      $rootScope.$emit('LoginPageCalled', {isLogin: false});
      $scope.storage = $localStorage;
      $scope.requestEditMode = false;
      $scope.newRequestClass = 'hidden';
      $scope.times = [

        {id: 0, time: '00:00 AM'},
        {id: 1, time: '01:00 AM'},
        {id: 2, time: '02:00 AM'},
        {id: 3, time: '03:00 AM'},
        {id: 4, time: '04:00 AM'},
        {id: 5, time: '05:00 AM'},
        {id: 6, time: '06:00 AM'},
        {id: 7, time: '07:00 AM'},
        {id: 8, time: '08:00 AM'},
        {id: 9, time: '09:00 AM'},
        {id: 10, time: '10:00 AM'},
        {id: 11, time: '11:00 AM'},
        {id: 12, time: '12:00 PM'},
        {id: 13, time: '01:00 PM'},
        {id: 14, time: '02:00 PM'},
        {id: 15, time: '03:00 PM'},
        {id: 16, time: '04:00 PM'},
        {id: 17, time: '05:00 PM'},
        {id: 18, time: '06:00 PM'},
        {id: 19, time: '07:00 PM'},
        {id: 20, time: '08:00 PM'},
        {id: 21, time: '09:00 PM'},
        {id: 22, time: '10:00 PM'},
        {id: 23, time: '11:00 PM'}
      ];


      $scope.today = new Date();
      $scope.deadline = new Date();
      $scope.nextMonth = new Date(
          $scope.today.getFullYear(),
          $scope.today.getMonth() + 1,
          $scope.today.getDate()
      );

      $scope.newRequestAlter = function(){
        $scope.requestEditMode = true;
        $scope.newRequestClass = 'hidden';
        $scope.deadline = new Date();
        var hour = parseInt(moment($scope.deadline).format('H'));
        $scope.request.selectedTime = (hour==23?0:hour+1);
        $scope.request.copyAddress = true;
      }

      $scope.createRequest = function(){
        $scope.request.deadline = new Date(
          $scope.deadline.getFullYear(),
          $scope.deadline.getMonth(),
          $scope.deadline.getDate()
        );
        $scope.request.deadline.setHours($scope.request.selectedTime);

        $scope.request.requestorLogin = $localStorage.userInfo._id;
        $scope.request.active = true;
        $scope.request.fulfilled = false;
        $scope.request.requestedDate = new Date();

        if($scope.request.copyAddress) {$scope.request.address = $localStorage.userInfo.address;}

        $http.post('/api/login/user/request', $scope.request).success(function(response){
          $scope.refreshCurrentRequest();
        }).error(function(response){
          console.log(response);
        });
      }

      $scope.getExpiryInvalidMsg = function(){
        return moment($scope.today).format('MMMM Do YYYY') + ' to ' + moment($scope.nextMonth).format('MMMM Do YYYY');
      }

      $scope.formatDate = function(date){
        return moment(new Date(date)).format('MMMM Do YYYY');
      }

      $scope.fromNow = function(date){
        return moment(new Date(date)).fromNow();
      }




      $http.get('/api/bloodgroup').success(function(response){
        $scope.bloodgroups = response;
      });





  }]);
