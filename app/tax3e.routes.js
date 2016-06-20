(function () {
    
    angular
        .module("tax3e")
        .config(routes);
    
    routes.$inject = ["$stateProvider"];

    function routes($stateProvider) {
        
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
                templateUrl: "app/services.view.html"
            })
            .state("tax-problems", {
                url: "/tax-problems",
                templateUrl: "app/tax-problems.view.html"
            })
            .state("portfolio", {
                url: "/portfolio",
                templateUrl: "app/portfolio.view.html"
            })
            .state("links", {
                url: "/links",
                templateUrl: "app/links.view.html"
            });
    }

})();