/**
 * Created by Bishaka on 07/03/2016.
 */

var
    slashboard = angular.module('slashboard',['zingchart-angularjs'])
    .controller('mainCtrl',['$scope','$http',function($scope,$http){

            $scope.chart = {
                "title":"",
                "col":"col-xs-2",
                "render":{
                    width:"100%",
                    height:"100",
                    autoResize:true
                },
                "data":{
                    "type": "null",
                    "x": "0%",
                    "y": "0%",
                    "height": "100",
                    "width": "100%",
                    "border-width": "1px",
                    "border-color": "#384653",
                    "border-radius": 4,
                    "background-color": "#fbfcf7",
                    "title": {
                        "text": "Users",
                        "background-color": "none",
                        "font-color": "#384653",
                        "font-size": "12px",
                        "text-align": "center",
                        "height": "70px"
                    },
                    "subtitle": {
                        "text": "1",
                        "font-color": "#dd655f",
                        "font-size": "24px",
                        "bold": true,
                        "text-align": "center",
                        "height": "40px",
                        "padding-top": "25%"
                    }
                }
            };

            var ping = function(){
                $http.get($scope.webhook_url).success(function(data){
                    $scope.slashboard = data["slashboard"] || data;
                });
            };

            $scope.fetch = function(){
                ping();
            };

        console.log("We good");
    }])
;