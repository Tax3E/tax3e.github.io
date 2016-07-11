(function () {
    
    angular
        .module("tax3e")
        .controller("servicesController", ServicesController);
    
    function ServicesController() {
        var vm = this;

        vm.selected = "business";
        vm.select = select;
        
        function select(newSelected) {
            vm.selected = newSelected;
        }
    }

})();