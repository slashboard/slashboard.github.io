/**
 * Created by Bishaka on 07/03/2016.
 */

var
    slashboard = angular.module('slashboard',['zingchart-angularjs'])
    .controller('mainCtrl',['$scope','$http',function($scope,$http){

            var ping = function(){
                $http.get($scope.webhook_url).success(function(data){
                    $scope.slashboard = data["slashboard"] || data;
                }).error(function(data,err){
                    //console.log(err);
                    //var msg = "", title="";
                    //switch(err){
                    //    case -1: //Connection refused
                    //        title = "Oops..."
                    //        msg = "The connection was refused. This normally means that the server isn't turned on or it doesn't have that path";
                    //    break;
                    //    case 404:
                    //        title = "Hmmm..."
                    //        msg = "No page was found. please check if the webhook is spelled the right way";
                    //    break;
                    //}
                    //sweetAlert(title, msg, "error");
                });
            };

            $scope.fetch = function(){
                ping();
            };

            $scope.goTo = function(url){
                $scope.webhook_url = url;
                ping();
            };

        console.log("We good");
    }])
;