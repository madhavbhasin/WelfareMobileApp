  /**
 * WelfareCase New Controller
 *
 * @description description
 */
(function() {
  'use strict';

  angular
    .module('starter.controllers')
    .controller('vaConfirmationCtrl', vaConfirmationCtrl);

  vaConfirmationCtrl.$inject = ['$scope', '$window', '$timeout', '$rootScope','vaCheckInService'];

  function vaConfirmationCtrl($scope, $window, $timeout, $rootScope, vaCheckInService) {
   
	  $scope.currentDateTime = new Date();

	  $scope.confMsg =  $rootScope.confmsg;

		$scope.pastCheckIn = $rootScope.PastCheckIn;

		$scope.pastCheckInDate = $rootScope.pastCheckInDate;
		$scope.pastCheckInTime = $rootScope.pastCheckInTime;
		$scope.pastCheckOutDate = $rootScope.pastCheckOutDate;
		$scope.pastCheckOutTime = $rootScope.pastCheckOutTime;
	 
		console.log('$scope.currentDateTime' + $scope.currentDateTime);
		console.log('$scope.pastCheckIn' + $scope.pastCheckIn);
		console.log('$rootScope.childrenObjectList.records' + $rootScope.childrenObjectList.records);
		console.log('$rootScope.selChildIdList= ' + $rootScope.selChildIdList);

		 var selChildObjList = [];
		 var selChildIdList = $rootScope.selChildIdList;
		 if(selChildIdList.length > 0 ) {
			 for(var j=0; j < selChildIdList.length; j++){
					console.log('--->'+selChildIdList[j]);
					
					for(var k=0; k < $rootScope.childrenObjectList.records.length ; k ++ ) {						
						var selectedChld = $rootScope.childrenObjectList.records[k];
						//console.log('selectedChld.Id=' + selectedChld.Id);
						if( selChildIdList[j] === selectedChld.Id ) {
							//var childIns = {"Id":selectedChld.Id , "IS_CHECKED_IN__c":'true'};
							var childIns = {"Id":selectedChld.Id , "CHECKED_IN_FLG__c": "Y"};
							//selectedChld.IS_CHECKED_IN__c = true;
							console.log('matched selectedChld.first name=' + selectedChld.FIRST_NAME__c);
							selChildObjList.push(childIns);
						}
					}
			 }
			console.log('selChildObjList' + selChildObjList);
			if(selChildObjList.length > 0 ) {
			  console.log('in vaConfirmationCtrl Updated' + $rootScope);
				vaCheckInService.updateChildren(selChildObjList).then(function(resObjects) {
					
			   }, function(e) {
				 console.error('error', e);
			   });
			}
		}
	
	    $timeout(function() {

			 $rootScope.childAuthCode = '';
			 $rootScope.confMsg = '';
			 $rootScope.pin = '';
			 $rootScope.PastCheckIn = 'false';	 
			 $rootScope.listOfChildren1 = [];
			 $rootScope.listOfChildren2 = [];
			 $rootScope.listOfChildren3 = [];

			/*for (var prop in $rootScope) {
				if (prop.substring(0,1) !== '$') {
				console.log('in $rootScope[prop]' + $rootScope[prop]);
				delete $rootScope[prop];
				}
			}*/
			 console.log('in vaConfirmationCtrl' + $rootScope);
			$window.location.href = '#/tab/vaHome';
		}, 6000);
  }

})();
  
  
  
 