/**
 * Created by Bishaka on 07/03/2016.
 */

var
    slashboard = angular.module('slashboard',['zingchart-angularjs'])
    .controller('mainCtrl',['$scope','$http','$location',function($scope,$http,$location){

            var ping = function(){
                $http.get($scope.webhookurl).success(function(data){
                    $scope.slashboard = data["slashboard"] || data;
                    if(typeof $scope.slashboard.links === "string"){
                        $http.get($scope.slashboard.links).success(function(data){
                            $scope.slashboard.menu = data;
                        })
                    }else{
                        $scope.slashboard.menu = $scope.slashboard.links;
                    }
                    $location.search('webhookurl',$scope.webhookurl);
                })
            };

            $scope.webhookurl = $location.search().webhookurl || "";
            ping();

            $scope.fetch = function(){
                ping();
            };

            $scope.goTo = function(url){
                $scope.webhookurl = url;
                ping();
            };
    }])
;