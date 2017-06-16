var myUIRoute = angular.module('MyUIRoute', ['ui.router', 'ngAnimate']);
myUIRoute.config(function($stateProvider, $locationProvider,$urlRouterProvider) {
    // $urlRouterProvider.deferIntercept();禁用路由
    // $locationProvider.hashPrefix('');去掉地址栏中的！
    $urlRouterProvider.otherwise("/state2");//默认跳转路径
    
    $stateProvider
        .state('state', {//对应ui-sref="这里的名称"
            url: "/state1/{name}/{id}",//地址栏显示跳转路径
            templateUrl: "tpls/state1.html",
            controller: function($state,$stateParams){
                $state.go('state2.list',{name:'小明'},{id:1});
                 console.log($stateParams.name);
            }
        })
        .state('state.list', {
            url: "/list1111",
            templateUrl: "tpls/state1.list.html",
            controller: function($scope) {
                $scope.items = ["A", "List", "Of", "Items"];
            }
        })
        .state('state2', {
            url: "/state2",
            templateUrl: "tpls/state2.html"
        })
        .state('state2.list', {
            url: "/list",
            templateUrl: "tpls/state2.list.html",
            controller: function($scope,$stateParams) {
                $scope.things = ["A", "Set", "Of", "Things"];
                $scope.things.push($stateParams.name);
                console.log($stateParams.name);
            }
        });
});

