var appindex = angular.module("app_index", []);
appindex.controller('appindexController', ['$scope', '$http', 'appindexModule', function ($scope, $http, appindexModule) {
    $scope.page ={
        pages:[{
            "version":1,
            "menu":{},
            "areas":[{
                "type": 0,
                "index": 1,
                "text":'���'
            },{
                "type": 1,
                "index": 2,
                "text":'һ������'
            },{
                "type": 2,
                "index": 3,
                "text":'��������'
            },{
                "type": 3,
                "index": 4,
                "text":'��������'
            }]
        }]
    };
    $scope.op =[{},{},{}];
    $scope.$watch('page',function(news,olds){
        console.log(news);
    })
}]);



