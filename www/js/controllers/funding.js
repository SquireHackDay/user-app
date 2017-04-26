angular.module('generic-client.controllers.funding', [])

    .controller('ProjectsCtrl', function ($scope, $state) {
        'use strict';

        $scope.projects = [{id: 'coffeeshoprehive@gmail.com', merchant: 'Coffee Street', title: 'Kettle', goal: '10.00', progress: '5.00'},
            {id: 'coffeeshoprehive@gmail.com', merchant: 'Tea Street', title: 'Chairs', goal: '15.00', progress: '2.00'}]

        $scope.submit = function (form) {
            console.log(form)
            $state.go('app.contribute', {
                project: form.project
            });
        }
    })

    .controller('ContributeCtrl', function ($scope, $state, $stateParams, $window) {
        'use strict';

        $scope.data = {};
        $scope.currency = JSON.parse($window.localStorage.getItem('myCurrency'));

        console.log($stateParams.project);

        $scope.submit = function (form) {
            if (form.$valid) {
                $state.go('app.add_card', {
                    amount: form.amount.$viewValue,
                    note: form.note.$viewValue,
                    currency: $scope.currency
                });
            }
        };
    })

    .controller('AddCardCtrl', function ($scope, $state, $stateParams, $window) {
        'use strict';

        $scope.data = {};
        $scope.currency = JSON.parse($window.localStorage.getItem('myCurrency'));
        $scope.months = [1,2,3,4,5,6,7,8,9,10,11,12];
        $scope.days = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];

        console.log($stateParams.project);

        $scope.submit = function (form) {
            if (form.$valid) {
                $state.go('app.card', {
                    number: form.number.$viewValue,
                    name: form.name.$viewValue,
                    expiry: form.expiry.$viewValue,
                    csv: form.csv.$viewValue
                });
            }
        };
    })

//.controller('FundingCardCtrl', function ($scope, $state, $stateParams) {
//    'use strict';
//
//    $scope.data = {};
//    $scope.amount = $stateParams.amount;
//    $scope.note = $stateParams.note;
//    $scope.currency = $stateParams.currency;
//
//    function onError() {
//        alert('Error!');
//    }
//
//    $scope.submit = function (form) {
//        if (form.$valid) {
//            $state.go('app.send_confirm', {
//                amount: $scope.amount,
//                note: $scope.note,
//                to: form.to.$viewValue,
//                currency: $scope.currency
//            });
//        }
//    };
//})
//
//.controller('FundingCompleteCtrl', function ($scope, $state, $stateParams, $ionicLoading, $translate, Transaction, $ionicPopup, Conversions) {
//    'use strict';
//    $scope.data = {};
//    $scope.amount = $stateParams.amount;
//    $scope.note = $stateParams.note;
//    $scope.to = $stateParams.to;
//    $scope.currency = $stateParams.currency;
//
//    if ($scope.note === null) {
//        $scope.note = ''
//    }
//
//    $scope.submit = function (amount, note, to, currency) {
//        $ionicLoading.show({
//            template: $translate.instant("LOADER_SENDING")
//        });
//
//        Transaction.create(Conversions.to_cents(amount), note, to).then(function (res) {
//            if (res.status === 201) {
//                $ionicLoading.hide();
//                $state.go('app.send_success', {
//                    amount: amount,
//                    note: note,
//                    to: to,
//                    currency: currency
//                });
//            } else {
//                $ionicLoading.hide();
//                $ionicPopup.alert({title: $translate.instant("ERROR"), template: res.data.message});
//            }
//        }).catch(function (error) {
//            $ionicPopup.alert({title: $translate.instant("AUTHENTICATION_ERROR"), template: error.message});
//            $ionicLoading.hide();
//        });
//    };
//})
//
//.controller('SendSuccessCtrl', function ($scope, $state, $stateParams) {
//    'use strict';
//
//    $scope.data = {};
//    $scope.amount = $stateParams.amount;
//    $scope.note = $stateParams.note;
//    $scope.to = $stateParams.to;
//    $scope.currency = $stateParams.currency;
//});
