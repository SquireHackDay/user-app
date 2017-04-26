angular.module('generic-client.controllers.funding', [])

    .controller('ProjectsCtrl', function ($scope, $state) {
        'use strict';

        $scope.projects = [
        {id: 'coffeeshoprehive@gmail.com', 'merchant': 'Coffee Street', 'title': 'Kettle', 'goal': '10.00', 'progress': '5.00', 'img': 'kettle.png', 'progressbar': '50%', 'description': 'This project is for buying kettles.'},
        {id: 'coffeeshoprehive@gmail.com', 'merchant': 'Tea Street', 'title': 'Chairs', 'goal': '15.00', 'progress': '2.00', 'img': 'chairs.png', 'progressbar': '13.33%', 'description': 'This project is for buying chairs.'}];

        $scope.submit = function (form) {
            $state.go('app.donate', {
                project: form.project
            });
        }

    })

    .controller('DonateCtrl', function ($scope, $state, $stateParams, $window) {
        'use strict';

        $scope.data = {};
        $scope.currency = JSON.parse($window.localStorage.getItem('myCurrency'));

        $scope.submit = function (form) {
            if (form.$valid) {
                $state.go('app.add_card', {
                    amount: form.amount.$viewValue,
                    project: $stateParams.project
                });
            }
        };
    })

    .controller('AddCardCtrl', function ($scope, $state, $stateParams, $window, Donation, Conversions, $ionicLoading, $translate, $ionicPopup) {
        'use strict';

        $scope.data = {};
        $scope.currency = JSON.parse($window.localStorage.getItem('myCurrency'));
        $scope.months = [1,2,3,4,5,6,7,8,9,10,11,12];
        $scope.days = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];
        $scope.project = $stateParams.project;
        $scope.amount = $stateParams.amount;

        $scope.submit = function (form) {
             $ionicLoading.show({
                template: $translate.instant("LOADER_PROCESSING")
            });
            Donation.create(Conversions.to_cents(60), $scope.project).then(function (res) {
                console.log(res.status);
                if (res.status === 0) {
                    $ionicLoading.hide();
                    $state.go('app.donation_success', {
                        amount: $scope.amount,
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
        }
    })

    .controller('DonateSuccessCtrl', function ($scope, $state, $stateParams) {
        'use strict';

        $scope.data = {};
        $scope.amount = $stateParams.amount;
        $scope.note = $stateParams.note;
        $scope.to = $stateParams.to;
        $scope.currency = $stateParams.currency;
    });
