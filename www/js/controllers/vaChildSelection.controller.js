  /**
 * WelfareCase New Controller
 *
 * @description description
 */
(function() {
  'use strict';

  angular
    .module('starter.controllers')
    .controller('vaChildSelectionCtrl', vaChildSelectionCtrl);

  vaChildSelectionCtrl.$inject = ['$scope', '$window', 'vaCheckInService', '$rootScope'];

  function vaChildSelectionCtrl($scope, $window, vaCheckInService, $rootScope) {

	 // console.log('vaCheckInService.get()' + vaCheckInService.get());

	  console.log('$rootScope.PastCheckIn' + $rootScope.PastCheckIn );

	  $scope.pastCheckIn = $rootScope.PastCheckIn;

	  $scope.currentDateTime = new Date();

	  $scope.listOfChildren1 = $rootScope.listOfChildren1;
	  $scope.listOfChildren2 = $rootScope.listOfChildren2;
      $scope.listOfChildren3 = $rootScope.listOfChildren3;
	  $scope.hhName = $rootScope.hhName;

	  $scope.proceedCheckIn = function() {
		  var confMsg = '';
		  var selChildList = [];
		  var selChildIdList = $rootScope.selChildIdList;

		  if(selChildIdList === null || selChildIdList === undefined) {
			selChildIdList = [];
		  }
		 $rootScope.pastCheckInDate = $scope.checkInDate;
		 $rootScope.pastCheckInTime = $scope.checkInTime;
		 $rootScope.pastCheckOutDate = $scope.checkOutDate;
		 $rootScope.pastCheckOutTime = $scope.checkOutTime;

			console.log('--->proceedCheckIn<---');
			if($scope.listOfChildren1 !== null && $scope.listOfChildren1 !== undefined && $scope.listOfChildren1.length > 0 )  {
				for(var i=0; i < $scope.listOfChildren1.length; i++){
					var isChkd = $scope.listOfChildren1[i].isChecked;
					var childName = $scope.listOfChildren1[i].childname;
					if(isChkd===true) {
						console.log('--->Checked<---');
						selChildList.push(childName);
						selChildIdList.push($scope.listOfChildren1[i].childId);
					}
				}
			}
			if($scope.listOfChildren2 !== null && $scope.listOfChildren2 !== undefined && $scope.listOfChildren2.length > 0 )  {
				for(var l=0; l < $scope.listOfChildren2.length; l++){
					var isChkd2 = $scope.listOfChildren2[l].isChecked;
					var childName2 = $scope.listOfChildren2[l].childname;
					if(isChkd2===true) {
						console.log('--->Checked<---');
						selChildList.push(childName2);
						selChildIdList.push($scope.listOfChildren2[l].childId);
					}
				}
			}
			if($scope.listOfChildren3 !== null && $scope.listOfChildren3 !== undefined && $scope.listOfChildren3.length > 0 )  {
				for(var m=0; m < $scope.listOfChildren3.length; m++){
					var isChkd3 = $scope.listOfChildren3[m].isChecked;
					var childName3 = $scope.listOfChildren3[m].childname;
					if(isChkd3===true) {
						console.log('--->Checked<---');
						selChildList.push(childName3);
						selChildIdList.push($scope.listOfChildren3[m].childId);
					}
				}
			}
			if(selChildList !== null && selChildList !== undefined && selChildList.length > 0 ) {
				for(var j=0; j < selChildList.length; j++){
					console.log('--->'+selChildList[j]);
				}
				if(selChildList.length < 2) {
					for(var k=0; k < selChildList.length; k++){
						confMsg +=selChildList[k];
						console.log('--->'+selChildList[k]);
					}
				} else {
					for(var z=0; z < selChildList.length; z++) {
						if(z===0) {
							confMsg += selChildList[z];
						} else if(z===(selChildList.length-1)) {
							confMsg += ' and '+selChildList[z];
						} else {
							confMsg += ', '+selChildList[z];
						}
					}
				}
			}
			console.log('confMsg --->'+confMsg);
			$rootScope.confmsg = confMsg;
			console.log('selChildIdList --->'+selChildIdList);

var selectedChild=[{
  'Care_Date__c' : $scope.currentDateTime,
  //'Checked_In__c' : $scope.currentDateTime,
  //'Checked_Out__c' : $scope.currentDateTime,
  'holiday__c' : true,
  //'IsDeleted' : false,
  'Enrollment__c': 'a0c0Y000000H21YQAS',
  'Name' : 'bablu',
  'absent__c': false

  //'holiday__c': false
  // 'LastModifiedById': ,
  // 'LastModifiedDate':,


}];

if(selectedChild!==undefined && selectedChild.length>0){
  alert("I am going in....Madhav");

   vaCheckInService.addAttendance(selectedChild,function(household) {

    alert("household...."+household);
  //   var isauthenticated=vaCheckInService.getisauthenticated();
  //   if(isauthenticated===true && isauthenticated!==undefined){
  //     alert("welcome");
  //
  //     $state.go('tab.vaHome');
  //   }
  //   else{
  //   if(isauthenticated!==undefined){
  //      var alertPopup = $ionicPopup.alert({
  //         title: 'Login failed!',
  //         template: 'Please check your credentials!'
  //     });
  //     $timeout(function() {
  //             alertPopup.close();
  //           }, 2000);
  //   }
  //   }
  }, function(e) {
  console.error('error', e);
  var alertPopup = $ionicPopup.alert({
     title: 'Login failed!',
     template: 'Please check your credentials!'
  });
  $timeout(function() {
         alertPopup.close();
       }, 2000);
  });




}


			$rootScope.selChildIdList = selChildIdList;
			$window.location.href = '#/tab/vaConfirmation';
	  };

	}

})();
