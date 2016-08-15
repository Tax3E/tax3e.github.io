(function() {

    angular
        .module("tax3e")
        .run(scrollFix);

    function scrollFix($rootScope, $window) {
        $rootScope.$on("$stateChangeSuccess", function() {
            $window.scrollTo(0,0);
        })
    }

})();