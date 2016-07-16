(function () {
    
    angular
        .module("tax3e")
        .config(routes);
    
    routes.$inject = ["$stateProvider", "$urlRouterProvider"];

    function routes($stateProvider, $urlRouterProvider) {
        
        $urlRouterProvider.otherwise("/");

        $stateProvider
            .state("home", {
                url: "/",
                templateUrl: "app/home.view.html"
            })
            .state("about", {
                url: "/about",
                templateUrl: "app/about.view.html"
            })
            .state("services", {
                url: "/services",
                controller: "servicesController as services",
                templateUrl: "app/services.view.html"
            })
            .state("tax-problems", {
                url: "/tax-problems",
                templateUrl: "app/tax-problems.view.html"
            })
            .state("portfolio", {
                url: "/portfolio",
                controller: "portfolioController as portfolio",
                templateUrl: "app/portfolio.view.html"
            })
            .state("links", {
                url: "/links",
                templateUrl: "app/links.view.html"
            });
    }

})();