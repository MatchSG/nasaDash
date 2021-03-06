console.log('dash controller has been entered');
angular.module('nasadash.dash', [])

.controller('DashController', function($scope, Dash) {
  $scope.url = '';
  var intitialize = function () {
    console.log('This is the unstringified data recieved from DashController')
    Dash.getUrl().then(function(data){
      $scope.url = JSON.stringify(data);
      console.log('This is the unstringified data recieved from DashController', data)
    })
  }
  intitialize();
})

.controller('timeController', function($scope, $timeout){
  $scope.clock = "loading clock";
  $scope.tickInterval = 1000; //1 sec

  var tick = function (){
    $scope.clock = Date.new();
    $timeout(tick, $scope.tickInterval);
  }

  $timeout(tick, $scope.tickInterval);
})