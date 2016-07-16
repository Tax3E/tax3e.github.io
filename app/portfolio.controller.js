(function () {
    
    angular
        .module("tax3e")
        .controller("portfolioController", PortfolioController);
    
    function PortfolioController() {
        var vm = this;

        vm.filter = filter;

        vm.repeatFilter = repeatFilter;
        vm.selectedType = null;

        function filter(filterBy) {
            vm.selectedType = filterBy;
        }

        function repeatFilter(element) {
            return element.type == vm.selectedType || vm.selectedType == null;
        }

        vm.items = [
            {
                "type": "certificate",
                "name": "ASPE",
                "flavourText": "Certificate",
                "thumb": "portfolio/ca-certificate-aspe-thumb.jpg",
                "link": "portfolio/ca-certificate-aspe.jpg"
            },
            {
                "type": "certificate",
                "name": "Auditing",
                "flavourText": "Certificate",
                "thumb": "portfolio/ca-certificate-auditing-thumb.jpg",
                "link": "portfolio/ca-certificate-auditing.jpg"
            },
            {
                "type": "certificate",
                "name": "IFRS",
                "flavourText": "Certificate",
                "thumb": "portfolio/ca-certificate-ifrs-thumb.jpg",
                "link": "portfolio/ca-certificate-ifrs.jpg"
            },
            {
                "type": "certificate",
                "name": "Certified Accountant",
                "flavourText": "Badge",
                "thumb": "portfolio/certified-account-badge-thumb.jpg",
                "link": "portfolio/certified-account-badge.png"
            },
            {
                "type": "certificate",
                "name": "FreshBooks",
                "flavourText": "Certificate",
                "thumb": "portfolio/freshbooks-certificate-thumb.png",
                "link": "portfolio/freshbooks-certificate.pdf"
            },
            {
                "type": "pamphlet",
                "name": "Flyer",
                "flavourText": "Chinese",
                "thumb": "portfolio/flyer-chinese-thumb.jpg",
                "link": "portfolio/flyer-chinese.jpg"
            },
            {
                "type": "pamphlet",
                "name": "Flyer",
                "flavourText": "English",
                "thumb": "portfolio/flyer-english-thumb.jpg",
                "link": "portfolio/flyer-english.jpg"
            },
            {
                "type": "pamphlet",
                "name": "Leaflet",
                "flavourText": "Chinese",
                "thumb": "portfolio/leaflet-chinese-thumb.jpg",
                "link": "portfolio/leaflet-chinese.docx"
            },
            {
                "type": "pamphlet",
                "name": "Leaflet",
                "flavourText": "English",
                "thumb": "portfolio/leaflet-english-thumb.jpg",
                "link": "portfolio/leaflet-english.docx"
            },
            {
                "type": "businessCard",
                "name": "Business Card",
                "flavourText": "Chinese",
                "thumb": "portfolio/businesscard-chinese-thumb.jpg",
                "link": "portfolio/businesscard-chinese.jpg" 
            },
            {
                "type": "businessCard",
                "name": "Business Card",
                "flavourText": "English",
                "thumb": "portfolio/businesscard-english-thumb.jpg",
                "link": "portfolio/businesscard-english.jpg"
            }
        ]
    }

})();