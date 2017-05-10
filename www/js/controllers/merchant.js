angular.module('generic-client.controllers.merchant', [])

    .controller('MerchantCtrl', function ($scope, $state) {
        'use strict';

        $scope.projects = [
        {id: 'coffeeshoprehive@gmail.com', 'left': '500', 'merchant': 'Columbus café', 'title': 'Shaker', 'img': 'shaker.png',  'description': 'This project is for buying kettles.'},
        {id: 'coffeeshoprehive@gmail.com', 'left': '187', 'merchant': 'Starbucks', 'title': 'Table', 'img': 'table.png', 'description': 'This project is for buying chairs.'}];

        // $scope.submit = function (form) {
        //     $state.go('app.donate', {
        //         project: form.project
        //     });
        // }

    });
