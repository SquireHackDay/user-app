angular.module('generic-client.controllers.funding', [])

    .controller('FundingCtrl', function ($scope) {
        'use strict';

        $scope.projects = [
        {'merchant': 'Coffee Street', 'title': 'Kettle', 'goal': '10.00', 'progress': '5.00', 'img': 'kettle.png', 'progressbar': '50%', 'description': 'This project is for buying kettles.'},
        {'merchant': 'Tea Street', 'title': 'Chairs', 'goal': '15.00', 'progress': '2.00', 'img': 'chairs.png', 'progressbar': '13.33%', 'description': 'This project is for buying chairs.'}];

    })

    //.controller('FundingAmountCtrl', function ($scope, $state, $window) {
    //    'use strict';
    //
    //    $scope.data = {};
    //    $scope.currency = JSON.parse($window.localStorage.getItem('myCurrency'));
    //
    //    $scope.submit = function (form) {
    //        if (form.$valid) {
    //            $state.go('app.send_to', {
    //                amount: form.amount.$viewValue,
    //                note: form.note.$viewValue,
    //                currency: $scope.currency
    //            });
    //        }
    //    };
    //})

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
