angular.module('generic-client.controllers.merchant', [])

    .controller('MerchantCtrl', function ($scope, $state, $window) {
        'use strict';

        $scope.currency = JSON.parse($window.localStorage.getItem('myCurrency'));

        $scope.projects = [
            {
                id: 'coffeeshoprehive@gmail.com',
                'left': '500',
                'amount': '100.00',
                'to': 'helghardt@gmail.com',
                'currency': $scope.currency,
                'merchant': 'Columbus café',
                'title': 'Shaker',
                'img': 'shaker.png',
                'description': 'Beautiful shaker made of super steel.'
            },
            {
                id: 'coffeeshoprehive@gmail.com',
                'left': '187',
                'amount': '150.00',
                'to': 'helghardt@gmail.com',
                'currency': $scope.currency,
                'merchant': 'Starbucks',
                'title': 'Table',
                'img': 'table.png',
                'description': 'Most square table in history of tables.'
            }];

        $scope.submit = function (form) {
            $state.go('app.buy_confirm', {
                project: form.project
            });
        }

    })

    .controller('BuyConfirmCtrl', function ($scope, $state, $stateParams, $ionicLoading, $translate, Transaction, $ionicPopup, Conversions) {
        'use strict';

        $scope.project = $stateParams.project;

        $scope.submit = function (amount, to) {
            $ionicLoading.show({
                template: $translate.instant("LOADER_BUYING")
            });

            $scope.note = "Purchase";

            Transaction.create(Conversions.to_cents(amount), $scope.note, to, $scope.project).then(function (res) {
                if (res.status === 201) {
                    $ionicLoading.hide();
                    $state.go('app.buy_success', {
                        project: $scope.project
                    });
                } else {
                    $ionicLoading.hide();
                    $ionicPopup.alert({title: $translate.instant("ERROR"), template: res.data.message});
                }
            }).catch(function (error) {
                $ionicPopup.alert({title: $translate.instant("AUTHENTICATION_ERROR"), template: error.message});
                $ionicLoading.hide();
            });
        };
    })


    .controller('BuySuccessCtrl', function ($scope, $state, $stateParams) {
        'use strict';

        $scope.data = {};
        $scope.project = $stateParams.project;

    });
