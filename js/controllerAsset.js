app.controller("TTRController", ['$scope', '$timeout', 'AgeCalculator', 'PdfMaker', 'LineChartService', function($scope, $timeout, AgeCalculator, PdfMaker, LineChartService) {

    String.prototype.replaceAll = function(search, replacement) {
        var target = this;
        return target.split(search).join(replacement);
    };

    $scope.infoShow = function(value) {
        if (value) {
            document.getElementsByClassName("information-overlay")[0].style.visibility = "visible";
            document.getElementsByClassName("information-overlay")[0].style.zIndex = "9999";
            document.getElementsByClassName("information-overlay")[0].style.position = "inline-block";
            document.getElementsByClassName("information-overlay")[0].style.height = "" + (document.getElementsByClassName("otrp-calculator")[0].clientHeight - 10) + "px";
        } else {
            document.getElementsByClassName("information-overlay")[0].style.visibility = "hidden";
        }
    }

    $scope.personalDetails = {};
    $scope.forms = {};

/*    $scope.personalDetails = {
        firstName : "Amit",
        lastName : "Kumar",
        email : "iamitkrs@gmail.com",
        mobile: 412121212,
        postalCode : 1234
    };*/

    $scope.totalPercentageSelected= assetObj.totalPercentageSelected;

    $scope.australianShares1 = assetObj.initial.australianShares1;
    $scope.internationalShares1 = assetObj.initial.internationalShares1;
    $scope.internationalSharesHedged1 = assetObj.initial.internationalSharesHedged1;
    $scope.usShares1 = assetObj.initial.usShares1;
    $scope.australianBonds1 = assetObj.initial.australianBonds1;
    $scope.internationalBondsHedged1 = assetObj.initial.internationalBondsHedged1;
    $scope.cash1 = assetObj.initial.cash1;
    $scope.australianListedProperty1 = assetObj.initial.australianListedProperty1;
    $scope.internationalListedProperty1 = assetObj.initial.internationalListedProperty1;

    $scope.asset1Total = $scope.australianShares1 + $scope.internationalShares1 +
            $scope.internationalSharesHedged1 + $scope.usShares1 +
            $scope.australianBonds1 + $scope.internationalBondsHedged1 +
            $scope.cash1 + $scope.australianListedProperty1 +
            $scope.internationalListedProperty1+"%";

    $scope.australianShares2 = assetObj.altered.australianShares2;
    $scope.internationalShares2 = assetObj.altered.internationalShares2;
    $scope.internationalSharesHedged2 = assetObj.altered.internationalSharesHedged2;
    $scope.usShares2 = assetObj.altered.usShares2;
    $scope.australianBonds2 = assetObj.altered.australianBonds2;
    $scope.internationalBondsHedged2 = assetObj.altered.internationalBondsHedged2;
    $scope.cash2 = assetObj.altered.cash2;
    $scope.australianListedProperty2 = assetObj.altered.australianListedProperty2;
    $scope.internationalListedProperty2 = assetObj.altered.internationalListedProperty2;

    $scope.asset2Total = $scope.australianShares2 + $scope.internationalShares2 +
            $scope.internationalSharesHedged2 + $scope.usShares2 +
            $scope.australianBonds2 + $scope.internationalBondsHedged2 +
            $scope.cash2 + $scope.australianListedProperty2 +
            $scope.internationalListedProperty2+"%";

/*    var initDate = new Date();
    initDate.setYear(1989);
    initDate.setMonth(6);
    initDate.setDate(1);
    $scope.dob = initDate;
    $scope.firstDP = function() {
        $scope.dateOptions.maxDate = new Date(1998, 11, 31);
        $scope.dateOptions.minDate = new Date(1950, 0, 1);
        console.log("firstDp", $scope.dateOptions.minDate);
    }

    $scope.secondDp = function() {
        delete $scope.dateOptions.maxDate;
    }

    $scope.today = function() {
        $scope.dt = new Date();
    };
    $scope.today();

    $scope.clear = function() {
        $scope.dt = null;
    };

    $scope.inlineOptions = {
        customClass: getDayClass,
        showWeeks: true
    };

    $scope.dateOptions = {
        formatYear: 'yy',
        startingDay: 1,
        showWeeks: false
    };

    $scope.open1 = function() {
        $scope.popup1.opened = true;
        $scope.firstDP();
    };

    $scope.open2 = function() {
        $scope.secondDp();
        $scope.popup2.opened = true;
    };

    $scope.setDate = function(year, month, day) {
        $scope.dt = new Date(year, month, day);
    };

    $scope.formats = ['dd-MMM-yyyy', 'yyyy/MM/dd', 'dd.MM.yyyy', 'shortDate', 'dd/MM/yyyy', 'd!/M!/yyyy'];
    $scope.format = $scope.formats[5];

    $scope.popup1 = {
        opened: false
    };

    $scope.popup2 = {
        opened: false
    };

    var tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    var afterTomorrow = new Date();
    afterTomorrow.setDate(tomorrow.getDate() + 1);
    $scope.events = [{
        date: tomorrow,
        status: 'full'
    }, {
        date: afterTomorrow,
        status: 'partially'
    }];*/

/*    function getDayClass(data) {
        var date = data.date,
            mode = data.mode;
        if (mode === 'day') {
            var dayToCheck = new Date(date).setHours(0, 0, 0, 0);

            for (var i = 0; i < $scope.events.length; i++) {
                var currentDay = new Date($scope.events[i].date).setHours(0, 0, 0, 0);

                if (dayToCheck === currentDay) {
                    return $scope.events[i].status;
                }
            }
        }

        return '';
    }
    var dt = new Date();

    $scope.fy = dt.getMonth() > 5 ? dt.getFullYear() : dt.getFullYear() - 1;

    $scope.age = AgeCalculator.getAge($scope.dob, $scope.fy);*/


  /*  $scope.ageChange = function() {
        var dobText = document.getElementById("dobText");
        // console.log("dobText",new Date(dobText.value));
        var dateString = dobText.value;
        var dateArr = dateString.split("/");

        var date_regex = /^([1-9]|0[1-9]|1\d|2\d|3[01])\/(0[1-9]|[1-9]|1[0-2])\/(19[5-9][0-9])$/;
        var correct = date_regex.test(dobText.value);
        var fd = new Date(dateArr[2], dateArr[1] - 1, dateArr[0]);

        if (((fd.getMonth() + 1) === Number(dateArr[1]) && fd.getDate() === Number(dateArr[0])) && correct) {
            $scope.dob = fd;
        } else {
            $scope.dob = initDate;
        }
        $scope.age = AgeCalculator.getAge($scope.dob, $scope.fy);
        // calculateFinal();

        // $scope.compYear = new Date().getFullYear();
        $scope.compYear = 2016;
        /*$scope.maxInvstmntHorzn = $scope.compYear - 1991 + 1;
        $scope.invstmntHorzn = Math.min($scope.maxInvstmntHorzn, $scope.age - 18);*/
   /*     $scope.begngInvstmntPrd = Math.max(1991,$scope.dob.getFullYear()+18); 
        $scope.invstmntHorzn=$scope.compYear-$scope.begngInvstmntPrd;
        alterYearSlider.noUiSlider.updateOptions({
            range: {
                'min': 0,
                'max': [$scope.invstmntHorzn]
            },
        });
    }*/

    // $scope.compYear = new Date().getFullYear();
/*        $scope.compYear = 2016;
    $scope.begngInvstmntPrd = Math.max(1991,$scope.dob.getFullYear()+18); 
    $scope.invstmntHorzn=$scope.compYear-$scope.begngInvstmntPrd;*/

    $scope.initialInvestmentAmount = assetObj.initialInvestmentAmount;
 /*   $scope.chartOneOpen = true;
    $scope.alterOption = assetObj.alterOption;

    $scope.alterOptionChange = function(alter1) {
        $scope.alterOption = alter1;
    }*/

/*    var initialInvestmentAmountSlider = document.getElementById("initialInvestmentAmountSlider");


    var initialInvestmentAmountInput = document.getElementById("initialInvestmentAmountInput");


    noUiSlider.create(initialInvestmentAmountSlider, {
        start: $scope.initialInvestmentAmount,
        range: {
            min: [1000],
            max: [1000000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
        }),
        connect: 'lower'
    });*/


/*    initialInvestmentAmountSlider.noUiSlider.on('update', function(values, handle) {
        initialInvestmentAmountInput.value = values[handle];
        $scope.initialInvestmentAmount = values[handle];
    });

    initialInvestmentAmountInput.addEventListener("change", function() {
        initialInvestmentAmountSlider.noUiSlider.set(initialInvestmentAmountInput.value);
    });

    $scope.error1option = false;
    $scope.error2option = false;*/

/*    function asset1TotalCalculator() {
        var australianShares1 = Number($scope.australianShares1.replaceAll('%', ''));
        var internationalShares1 = Number($scope.internationalShares1.replaceAll('%', ''));
        var internationalSharesHedged1 = Number($scope.internationalSharesHedged1.replaceAll('%', ''));
        var usShares1 = Number($scope.usShares1.replaceAll('%', ''));
        var australianBonds1 = Number($scope.australianBonds1.replaceAll('%', ''));
        var internationalBondsHedged1 = Number($scope.internationalBondsHedged1.replaceAll('%', ''));
        var cash1 = Number($scope.cash1.replaceAll('%', ''));
        var australianListedProperty1 = Number($scope.australianListedProperty1.replaceAll('%', ''));
        var internationalListedProperty1 = Number($scope.internationalListedProperty1.replaceAll('%', ''));

        var tempp = australianShares1 + internationalShares1 +
            internationalSharesHedged1 + usShares1 +
            australianBonds1 + internationalBondsHedged1 +
            cash1 + australianListedProperty1 +
            internationalListedProperty1;

        $scope.error1option = tempp == 100 ? false : true;
        $scope.asset1Total=tempp+"%";

        $timeout(0);


    }*/

/*    function asset2TotalCalculator() {

        var australianShares2 = Number($scope.australianShares2.replaceAll('%', ''));
        var internationalShares2 = Number($scope.internationalShares2.replaceAll('%', ''));
        var internationalSharesHedged2 = Number($scope.internationalSharesHedged2.replaceAll('%', ''));
        var usShares2 = Number($scope.usShares2.replaceAll('%', ''));
        var australianBonds2 = Number($scope.australianBonds2.replaceAll('%', ''));
        var internationalBondsHedged2 = Number($scope.internationalBondsHedged2.replaceAll('%', ''));
        var cash2 = Number($scope.cash2.replaceAll('%', ''));
        var australianListedProperty2 = Number($scope.australianListedProperty2.replaceAll('%', ''));
        var internationalListedProperty2 = Number($scope.internationalListedProperty2.replaceAll('%', ''));


        var tempp = australianShares2 + internationalShares2 +
            internationalSharesHedged2 + usShares2 +
            australianBonds2 + internationalBondsHedged2 +
            cash2 + australianListedProperty2 +
            internationalListedProperty2;

        $scope.error2option = tempp == 100 ? false : true;
        $scope.asset2Total=tempp+"%";

        $timeout(0);
    }*/

    $scope.alterYear = assetObj.alterYear;

/*    console.log("$scope.alterYear", $scope.alterYear);
    console.log("$scope.invstmntHorzn", $scope.invstmntHorzn);

    var alterYearSlider = document.getElementById('alterYearSlider');
    noUiSlider.create(alterYearSlider, {
        start: [$scope.alterYear],
        range: {
            'min': [0],
            'max': [$scope.invstmntHorzn]
        },
        step: 1,
        format: wNumb({
            decimals: 0,
        }),
        connect: 'lower'
    });*/
/*    alterYearInput = document.getElementById('alterYearInput');

    alterYearInput.addEventListener("change", function() {
        alterYearSlider.noUiSlider.set($scope.alterYear);
        console.log("alterYear", $scope.alterYear);
    });
    alterYearSlider.noUiSlider.on('update', function(values, handle) {
        alterYearInput.value = values[handle];
        $scope.alterYear = Number(values[handle]);
    });
    alterYearSlider.noUiSlider.on('set', function(values, handle) {
        alterYearInput.value = values[handle];
        $scope.alterYear = Number(values[handle]);
    });*/

/*    var australianShares1Slider = document.getElementById('australianShares1Slider');
    noUiSlider.create(australianShares1Slider, {
        start: [$scope.australianShares1],
        range: {
            'min': [0],
            'max': [100]
        },
        step: 1,
        format: wNumb({
            decimals: 0,
            postfix: '%'
        }),
        connect: 'lower'
    });*/
/*    var australianShares1Input = document.getElementById('australianShares1Input');
    australianShares1Input.addEventListener("change", function() {
        australianShares1Slider.noUiSlider.set($scope.australianShares1);
        console.log("australianShares1", $scope.australianShares1);
    });
    australianShares1Slider.noUiSlider.on('update', function(values, handle) {
        australianShares1Input.value = values[handle];
        $scope.australianShares1 = (values[handle]);
    });
    australianShares1Slider.noUiSlider.on('set', function(values, handle) {
        australianShares1Input.value = values[handle];
        $scope.australianShares1 = (values[handle]);
        asset1TotalCalculator();
    });*/

/*    var internationalShares1Slider = document.getElementById('internationalShares1Slider');
    noUiSlider.create(internationalShares1Slider, {
        start: [$scope.internationalShares1],
        range: {
            'min': [0],
            'max': [100]
        },
        step: 1,
        format: wNumb({
            decimals: 0,
            postfix: '%'
        }),
        connect: 'lower'
    });*/
/*    var internationalShares1Input = document.getElementById('internationalShares1Input');
    internationalShares1Input.addEventListener("change", function() {
        internationalShares1Slider.noUiSlider.set($scope.internationalShares1);
        console.log("internationalShares1", $scope.internationalShares1);
    });
    internationalShares1Slider.noUiSlider.on('update', function(values, handle) {
        internationalShares1Input.value = values[handle];
        $scope.internationalShares1 = (values[handle]);
    });
    internationalShares1Slider.noUiSlider.on('set', function(values, handle) {
        internationalShares1Input.value = values[handle];
        $scope.internationalShares1 = (values[handle]);
        asset1TotalCalculator();
    });*/

 /*   var internationalSharesHedged1Slider = document.getElementById('internationalSharesHedged1Slider');
    noUiSlider.create(internationalSharesHedged1Slider, {
        start: [$scope.internationalSharesHedged1],
        range: {
            'min': [0],
            'max': [100]
        },
        step: 1,
        format: wNumb({
            decimals: 0,
            postfix: '%'
        }),
        connect: 'lower'
    });*/
/*    var internationalSharesHedged1Input = document.getElementById('internationalSharesHedged1Input');
    internationalSharesHedged1Input.addEventListener("change", function() {
        internationalSharesHedged1Slider.noUiSlider.set($scope.internationalSharesHedged1);
        console.log("internationalSharesHedged1", $scope.internationalSharesHedged1);
    });
    internationalSharesHedged1Slider.noUiSlider.on('update', function(values, handle) {
        internationalSharesHedged1Input.value = values[handle];
        $scope.internationalSharesHedged1 = (values[handle]);
    });
    internationalSharesHedged1Slider.noUiSlider.on('set', function(values, handle) {
        internationalSharesHedged1Input.value = values[handle];
        $scope.internationalSharesHedged1 = (values[handle]);
        asset1TotalCalculator();
    });*/

/*    var usShares1Slider = document.getElementById('usShares1Slider');
    noUiSlider.create(usShares1Slider, {
        start: [$scope.usShares1],
        range: {
            'min': [0],
            'max': [100]
        },
        step: 1,
        format: wNumb({
            decimals: 0,
            postfix: '%'
        }),
        connect: 'lower'
    });*/
/*    var usShares1Input = document.getElementById('usShares1Input');
    usShares1Input.addEventListener("change", function() {
        usShares1Slider.noUiSlider.set($scope.usShares1);
        console.log("usShares1", $scope.usShares1);
    });
    usShares1Slider.noUiSlider.on('update', function(values, handle) {
        usShares1Input.value = values[handle];
        $scope.usShares1 = (values[handle]);
    });
    usShares1Slider.noUiSlider.on('set', function(values, handle) {
        usShares1Input.value = values[handle];
        $scope.usShares1 = (values[handle]);
        asset1TotalCalculator();
    });*/

/*    var australianBonds1Slider = document.getElementById('australianBonds1Slider');
    noUiSlider.create(australianBonds1Slider, {
        start: [$scope.australianBonds1],
        range: {
            'min': [0],
            'max': [100]
        },
        step: 1,
        format: wNumb({
            decimals: 0,
            postfix: '%'
        }),
        connect: 'lower'
    });*/
/*    var australianBonds1Input = document.getElementById('australianBonds1Input');
    australianBonds1Input.addEventListener("change", function() {
        australianBonds1Slider.noUiSlider.set($scope.australianBonds1);
        console.log("australianBonds1", $scope.australianBonds1);
    });
    australianBonds1Slider.noUiSlider.on('update', function(values, handle) {
        australianBonds1Input.value = values[handle];
        $scope.australianBonds1 = (values[handle]);
    });
    australianBonds1Slider.noUiSlider.on('set', function(values, handle) {
        australianBonds1Input.value = values[handle];
        $scope.australianBonds1 = (values[handle]);
        asset1TotalCalculator();
    });*/

/*    var internationalBondsHedged1Slider = document.getElementById('internationalBondsHedged1Slider');
    noUiSlider.create(internationalBondsHedged1Slider, {
        start: [$scope.internationalBondsHedged1],
        range: {
            'min': [0],
            'max': [100]
        },
        step: 1,
        format: wNumb({
            decimals: 0,
            postfix: '%'
        }),
        connect: 'lower'
    });*/
/*    var internationalBondsHedged1Input = document.getElementById('internationalBondsHedged1Input');
    internationalBondsHedged1Input.addEventListener("change", function() {
        internationalBondsHedged1Slider.noUiSlider.set($scope.internationalBondsHedged1);
        console.log("internationalBondsHedged1", $scope.internationalBondsHedged1);
    });
    internationalBondsHedged1Slider.noUiSlider.on('update', function(values, handle) {
        internationalBondsHedged1Input.value = values[handle];
        $scope.internationalBondsHedged1 = (values[handle]);
    });
    internationalBondsHedged1Slider.noUiSlider.on('set', function(values, handle) {
        internationalBondsHedged1Input.value = values[handle];
        $scope.internationalBondsHedged1 = (values[handle]);
        asset1TotalCalculator();
    });*/

/*    var cash1Slider = document.getElementById('cash1Slider');
    noUiSlider.create(cash1Slider, {
        start: [$scope.cash1],
        range: {
            'min': [0],
            'max': [100]
        },
        step: 1,
        format: wNumb({
            decimals: 0,
            postfix: '%'
        }),
        connect: 'lower'
    });*/
/*    var cash1Input = document.getElementById('cash1Input');
    cash1Input.addEventListener("change", function() {
        cash1Slider.noUiSlider.set($scope.cash1);
        console.log("cash1", $scope.cash1);
    });
    cash1Slider.noUiSlider.on('update', function(values, handle) {
        cash1Input.value = values[handle];
        $scope.cash1 = (values[handle]);
    });
    cash1Slider.noUiSlider.on('set', function(values, handle) {
        cash1Input.value = values[handle];
        $scope.cash1 = (values[handle]);
        asset1TotalCalculator();
    });*/

/*    var australianListedProperty1Slider = document.getElementById('australianListedProperty1Slider');
    noUiSlider.create(australianListedProperty1Slider, {
        start: [$scope.australianListedProperty1],
        range: {
            'min': [0],
            'max': [100]
        },
        step: 1,
        format: wNumb({
            decimals: 0,
            postfix: '%'
        }),
        connect: 'lower'
    });*/
/*    var australianListedProperty1Input = document.getElementById('australianListedProperty1Input');
    australianListedProperty1Input.addEventListener("change", function() {
        australianListedProperty1Slider.noUiSlider.set($scope.australianListedProperty1);
        console.log("australianListedProperty1", $scope.australianListedProperty1);
    });
    australianListedProperty1Slider.noUiSlider.on('update', function(values, handle) {
        australianListedProperty1Input.value = values[handle];
        $scope.australianListedProperty1 = (values[handle]);
    });
    australianListedProperty1Slider.noUiSlider.on('set', function(values, handle) {
        australianListedProperty1Input.value = values[handle];
        $scope.australianListedProperty1 = (values[handle]);
        asset1TotalCalculator();
    });*/

/*    var internationalListedProperty1Slider = document.getElementById('internationalListedProperty1Slider');
    noUiSlider.create(internationalListedProperty1Slider, {
        start: [$scope.internationalListedProperty1],
        range: {
            'min': [0],
            'max': [100]
        },
        step: 1,
        format: wNumb({
            decimals: 0,
            postfix: '%'
        }),
        connect: 'lower'
    });*/
/*    var internationalListedProperty1Input = document.getElementById('internationalListedProperty1Input');
    internationalListedProperty1Input.addEventListener("change", function() {
        internationalListedProperty1Slider.noUiSlider.set($scope.internationalListedProperty1);
        console.log("internationalListedProperty1", $scope.internationalListedProperty1);
    });
    internationalListedProperty1Slider.noUiSlider.on('update', function(values, handle) {
        internationalListedProperty1Input.value = values[handle];
        $scope.internationalListedProperty1 = (values[handle]);
    });
    internationalListedProperty1Slider.noUiSlider.on('set', function(values, handle) {
        internationalListedProperty1Input.value = values[handle];
        $scope.internationalListedProperty1 = (values[handle]);
        asset1TotalCalculator();
    });*/

/*    var australianShares2Slider = document.getElementById('australianShares2Slider');
    noUiSlider.create(australianShares2Slider, {
        start: [$scope.australianShares2],
        range: {
            'min': [0],
            'max': [100]
        },
        step: 1,
        format: wNumb({
            decimals: 0,
            postfix: '%'
        }),
        connect: 'lower'
    });*/
/*    var australianShares2Input = document.getElementById('australianShares2Input');
    australianShares2Input.addEventListener("change", function() {
        australianShares2Slider.noUiSlider.set($scope.australianShares2);
        console.log("australianShares2", $scope.australianShares2);
    });
    australianShares2Slider.noUiSlider.on('update', function(values, handle) {
        australianShares2Input.value = values[handle];
        $scope.australianShares2 = (values[handle]);
    });
    australianShares2Slider.noUiSlider.on('set', function(values, handle) {
        australianShares2Input.value = values[handle];
        $scope.australianShares2 = (values[handle]);
        asset2TotalCalculator();
    });*/

/*    var internationalShares2Slider = document.getElementById('internationalShares2Slider');
    noUiSlider.create(internationalShares2Slider, {
        start: [$scope.internationalShares2],
        range: {
            'min': [0],
            'max': [100]
        },
        step: 1,
        format: wNumb({
            decimals: 0,
            postfix: '%'
        }),
        connect: 'lower'
    });*/
/*    var internationalShares2Input = document.getElementById('internationalShares2Input');
    internationalShares2Input.addEventListener("change", function() {
        internationalShares2Slider.noUiSlider.set($scope.internationalShares2);
        console.log("internationalShares2", $scope.internationalShares2);
    });
    internationalShares2Slider.noUiSlider.on('update', function(values, handle) {
        internationalShares2Input.value = values[handle];
        $scope.internationalShares2 = (values[handle]);
    });
    internationalShares2Slider.noUiSlider.on('set', function(values, handle) {
        internationalShares2Input.value = values[handle];
        $scope.internationalShares2 = (values[handle]);
        asset2TotalCalculator();
    });*/

  /*  var internationalSharesHedged2Slider = document.getElementById('internationalSharesHedged2Slider');
    noUiSlider.create(internationalSharesHedged2Slider, {
        start: [$scope.internationalSharesHedged2],
        range: {
            'min': [0],
            'max': [100]
        },
        step: 1,
        format: wNumb({
            decimals: 0,
            postfix: '%'
        }),
        connect: 'lower'
    });*/
 /*   var internationalSharesHedged2Input = document.getElementById('internationalSharesHedged2Input');
    internationalSharesHedged2Input.addEventListener("change", function() {
        internationalSharesHedged2Slider.noUiSlider.set($scope.internationalSharesHedged2);
        console.log("internationalSharesHedged2", $scope.internationalSharesHedged2);
    });
    internationalSharesHedged2Slider.noUiSlider.on('update', function(values, handle) {
        internationalSharesHedged2Input.value = values[handle];
        $scope.internationalSharesHedged2 = (values[handle]);
    });
    internationalSharesHedged2Slider.noUiSlider.on('set', function(values, handle) {
        internationalSharesHedged2Input.value = values[handle];
        $scope.internationalSharesHedged2 = (values[handle]);
        asset2TotalCalculator();
    });*/
/*
    var usShares2Slider = document.getElementById('usShares2Slider');
    noUiSlider.create(usShares2Slider, {
        start: [$scope.usShares2],
        range: {
            'min': [0],
            'max': [100]
        },
        step: 1,
        format: wNumb({
            decimals: 0,
            postfix: '%'
        }),
        connect: 'lower'
    });*/
/*    var usShares2Input = document.getElementById('usShares2Input');
    usShares2Input.addEventListener("change", function() {
        usShares2Slider.noUiSlider.set($scope.usShares2);
        console.log("usShares2", $scope.usShares2);
    });
    usShares2Slider.noUiSlider.on('update', function(values, handle) {
        usShares2Input.value = values[handle];
        $scope.usShares2 = (values[handle]);
    });
    usShares2Slider.noUiSlider.on('set', function(values, handle) {
        usShares2Input.value = values[handle];
        $scope.usShares2 = (values[handle]);
        asset2TotalCalculator();
    });*/
/*
    var australianBonds2Slider = document.getElementById('australianBonds2Slider');
    noUiSlider.create(australianBonds2Slider, {
        start: [$scope.australianBonds2],
        range: {
            'min': [0],
            'max': [100]
        },
        step: 1,
        format: wNumb({
            decimals: 0,
            postfix: '%'
        }),
        connect: 'lower'
    });*/
/*    var australianBonds2Input = document.getElementById('australianBonds2Input');
    australianBonds2Input.addEventListener("change", function() {
        australianBonds2Slider.noUiSlider.set($scope.australianBonds2);
        console.log("australianBonds2", $scope.australianBonds2);
    });
    australianBonds2Slider.noUiSlider.on('update', function(values, handle) {
        australianBonds2Input.value = values[handle];
        $scope.australianBonds2 = (values[handle]);
    });
    australianBonds2Slider.noUiSlider.on('set', function(values, handle) {
        australianBonds2Input.value = values[handle];
        $scope.australianBonds2 = (values[handle]);
        asset2TotalCalculator();
    });*/

   /* var internationalBondsHedged2Slider = document.getElementById('internationalBondsHedged2Slider');
    noUiSlider.create(internationalBondsHedged2Slider, {
        start: [$scope.internationalBondsHedged2],
        range: {
            'min': [0],
            'max': [100]
        },
        step: 1,
        format: wNumb({
            decimals: 0,
            postfix: '%'
        }),
        connect: 'lower'
    });*/
  /*  var internationalBondsHedged2Input = document.getElementById('internationalBondsHedged2Input');
    internationalBondsHedged2Input.addEventListener("change", function() {
        internationalBondsHedged2Slider.noUiSlider.set($scope.internationalBondsHedged2);
        console.log("internationalBondsHedged2", $scope.internationalBondsHedged2);
    });
    internationalBondsHedged2Slider.noUiSlider.on('update', function(values, handle) {
        internationalBondsHedged2Input.value = values[handle];
        $scope.internationalBondsHedged2 = (values[handle]);
    });
    internationalBondsHedged2Slider.noUiSlider.on('set', function(values, handle) {
        internationalBondsHedged2Input.value = values[handle];
        $scope.internationalBondsHedged2 = (values[handle]);
        asset2TotalCalculator();
    });*/

 /*   var cash2Slider = document.getElementById('cash2Slider');
    noUiSlider.create(cash2Slider, {
        start: [$scope.cash2],
        range: {
            'min': [0],
            'max': [100]
        },
        step: 1,
        format: wNumb({
            decimals: 0,
            postfix: '%'
        }),
        connect: 'lower'
    });*/
 /*   var cash2Input = document.getElementById('cash2Input');
    cash2Input.addEventListener("change", function() {
        cash2Slider.noUiSlider.set($scope.cash2);
        console.log("cash2", $scope.cash2);
    });
    cash2Slider.noUiSlider.on('update', function(values, handle) {
        cash2Input.value = values[handle];
        $scope.cash2 = (values[handle]);
    });
    cash2Slider.noUiSlider.on('set', function(values, handle) {
        cash2Input.value = values[handle];
        $scope.cash2 = (values[handle]);
        asset2TotalCalculator();
    });*/

/*    var australianListedProperty2Slider = document.getElementById('australianListedProperty2Slider');
    noUiSlider.create(australianListedProperty2Slider, {
        start: [$scope.australianListedProperty2],
        range: {
            'min': [0],
            'max': [100]
        },
        step: 1,
        format: wNumb({
            decimals: 0,
            postfix: '%'
        }),
        connect: 'lower'
    });*/
  /*  var australianListedProperty2Input = document.getElementById('australianListedProperty2Input');
    australianListedProperty2Input.addEventListener("change", function() {
        australianListedProperty2Slider.noUiSlider.set($scope.australianListedProperty2);
        console.log("australianListedProperty2", $scope.australianListedProperty2);
    });
    australianListedProperty2Slider.noUiSlider.on('update', function(values, handle) {
        australianListedProperty2Input.value = values[handle];
        $scope.australianListedProperty2 = (values[handle]);
    });
    australianListedProperty2Slider.noUiSlider.on('set', function(values, handle) {
        australianListedProperty2Input.value = values[handle];
        $scope.australianListedProperty2 = (values[handle]);
        asset2TotalCalculator();
    });*/

  /*  var internationalListedProperty2Slider = document.getElementById('internationalListedProperty2Slider');
    noUiSlider.create(internationalListedProperty2Slider, {
        start: [$scope.internationalListedProperty2],
        range: {
            'min': [0],
            'max': [100]
        },
        step: 1,
        format: wNumb({
            decimals: 0,
            postfix: '%'
        }),
        connect: 'lower'
    });*/
 /*   var internationalListedProperty2Input = document.getElementById('internationalListedProperty2Input');
    internationalListedProperty2Input.addEventListener("change", function() {
        internationalListedProperty2Slider.noUiSlider.set($scope.internationalListedProperty2);
        console.log("internationalListedProperty2", $scope.internationalListedProperty2);
    });
    internationalListedProperty2Slider.noUiSlider.on('update', function(values, handle) {
        internationalListedProperty2Input.value = values[handle];
        $scope.internationalListedProperty2 = (values[handle]);
    });
    internationalListedProperty2Slider.noUiSlider.on('set', function(values, handle) {
        internationalListedProperty2Input.value = values[handle];
        $scope.internationalListedProperty2 = (values[handle]);
        asset2TotalCalculator();
    });*/



    $scope.calculate = function(isValid) {

        if (isValid && !$scope.error1option && !$scope.error2option) {

            var investments1 = [5.9, 13.3, 9.9, 18.5, 5.7, 15.8, 26.6, 1.6, 15.3, 13.7, 8.8, -4.5, -1.1, 22.4, 24.7, 24.2, 30.3, -12.1, -22.1, 13.8, 12.2, -7, 20.7, 17.6, 5.7, 2];
            var investments2 = [-2, 7.1, 31.8, 0, 14.2, 6.7, 28.6, 42.2, 8.2, 23.8, -6, -23.5, -18.5, 19.4, 0.1, 19.9, 7.8, -21.3, -16.3, 5.2, 2.7, -0.5, 33.1, 20.4, 25.2, 0.4];
            var investments3 = [-5.8, -3, 17.3, 6.7, 3.7, 27.7, 26, 22.1, 15.9, 12.6, -16, -19.3, -6.2, 20.2, 9.8, 15, 21.4, -15.7, -26.6, 11.5, 22.3, -2.1, 21.3, 21.9, 8.5, -2.7];
            var investments4 = [10.3, 16.3, 26.6, -6.5, 30, 12.9, 42.6, 58.2, 14.2, 18.2, 0.5, -26.3, -15.2, 15.4, -4.1, 11.6, 5.6, -23.4, -12.5, 8.9, 3.7, 11.1, 32.5, 22.7, 31.8, 7.5];
            var investments5 = [22.4, 22, 13.9, -1.1, 11.9, 9.5, 16.8, 10.9, 3.3, 6.2, 7.4, 6.2, 9.8, 2.3, 7.8, 3.4, 4, 4.4, 10.8, 7.9, 5.5, 12.4, 2.8, 6.1, 5.6, 7];
            var investments6 = [15.3, 15.8, 14.7, 2.1, 13.1, 11.2, 12.1, 11, 5.5, 5, 9, 8, 12.2, 3.5, 12.3, 1.2, 5.2, 8.6, 11.5, 9.3, 5.7, 11.9, 4.4, 7.2, 6.3, 10.8];
            var investments7 = [13.5, 9, 5.9, 4.9, 7.1, 7.8, 6.8, 5.1, 5, 5.6, 6.1, 4.7, 5, 5.3, 5.6, 5.8, 6.4, 7.4, 5.5, 3.9, 5, 4.7, 3.3, 2.7, 2.6, 2.2];
            var investments8 = [7.7, 14.7, 17.1, 9.8, 7.9, 3.6, 28.5, 10, 4.3, 12.1, 14.1, 15.5, 12.1, 17.2, 18.1, 18, 25.9, -36.3, -42.3, 20.4, 5.8, 11, 24.2, 11.1, 20.3, 24.6];
            var investments9 = [-15.9, 6.9, 28.3, 8.4, 7.5, 2.4, 35.7, 25, -6.8, 14.1, 38.2, 7.5, -5.2, 28.7, 21.2, 24.2, 3, -28.6, -31.2, 31.3, 9.2, 7.5, 24.3, 11.8, 23.1, 20.4];

            var year91 = [5.9, -2, -5.8, 10.3, 22.4, 15.3, 13.5, 7.7, -15.9];
            var year92 = [13.3, 7.1, -3, 16.3, 22, 15.8, 9, 14.7, 6.9];
            var year93 = [9.9, 31.8, 17.3, 26.6, 13.9, 14.7, 5.9, 17.1, 28.3];
            var year94 = [18.5, 0, 6.7, -6.5, -1.1, 2.1, 4.9, 9.8, 8.4];
            var year95 = [5.7, 14.2, 3.7, 30, 11.9, 13.1, 7.1, 7.9, 7.5];
            var year96 = [15.8, 6.7, 27.7, 12.9, 9.5, 11.2, 7.8, 3.6, 2.4];
            var year97 = [26.6, 28.6, 26, 42.6, 16.8, 12.1, 6.8, 28.5, 35.7];
            var year98 = [1.6, 42.2, 22.1, 58.2, 10.9, 11, 5.1, 10, 25];
            var year99 = [15.3, 8.2, 15.9, 14.2, 3.3, 5.5, 5, 4.3, -6.8];
            var year00 = [13.7, 23.8, 12.6, 18.2, 6.2, 5, 5.6, 12.1, 14.1];
            var year01 = [8.8, -6, -16, 0.5, 7.4, 9, 6.1, 14.1, 38.2];
            var year02 = [-4.5, -23.5, -19.3, -26.3, 6.2, 8, 4.7, 15.5, 7.5];
            var year03 = [-1.1, -18.5, -6.2, -15.2, 9.8, 12.2, 5, 12.1, -5.2];
            var year04 = [22.4, 19.4, 20.2, 15.4, 2.3, 3.5, 5.3, 17.2, 28.7];
            var year05 = [24.7, 0.1, 9.8, -4.1, 7.8, 12.3, 5.6, 18.1, 21.2];
            var year06 = [24.2, 19.9, 15, 11.6, 3.4, 1.2, 5.8, 18, 24.2];
            var year07 = [30.3, 7.8, 21.4, 5.6, 4, 5.2, 6.4, 25.9, 3];
            var year08 = [-12.1, -21.3, -15.7, -23.4, 4.4, 8.6, 7.4, -36.3, -28.6];
            var year09 = [-22.1, -16.3, -26.6, -12.5, 10.8, 11.5, 5.5, -42.3, -31.2];
            var year10 = [13.8, 5.2, 11.5, 8.9, 7.9, 9.3, 3.9, 20.4, 31.3];
            var year11 = [12.2, 2.7, 22.3, 3.7, 5.5, 5.7, 5, 5.8, 9.2];
            var year12 = [-7, -0.5, -2.1, 11.1, 12.4, 11.9, 4.7, 11, 7.5];
            var year13 = [20.7, 33.1, 21.3, 32.5, 2.8, 4.4, 3.3, 24.2, 24.3];
            var year14 = [17.6, 20.4, 21.9, 22.7, 6.1, 7.2, 2.7, 11.1, 11.8];
            var year15 = [5.7, 25.2, 8.5, 31.8, 5.6, 6.3, 2.6, 20.3, 23.1];
            var year16 = [2, 0.4, -2.7, 7.5, 7, 10.8, 2.2, 24.6, 20.4];

            var portfolio1 = [0.1, 0.1, 0, 0, 0, 0.3, 0.4, 0.1, 0];
            var portfolio2 = [0.1, 0.2, 0, 0.1, 0, 0.2, 0.3, 0.1, 0];
            var portfolio3 = [0.1, 0.2, 0, 0.25, 0, 0.1, 0.1, 0.15, 0.1];
            var portfolio4 = [];
            var portfolio5 = [];

            portfolio4[0] = Number($scope.australianShares1.replaceAll('%', '')) / 100;
            portfolio4[1] = Number($scope.internationalShares1.replaceAll('%', '')) / 100;
            portfolio4[2] = Number($scope.internationalSharesHedged1.replaceAll('%', '')) / 100;
            portfolio4[3] = Number($scope.usShares1.replaceAll('%', '')) / 100;
            portfolio4[4] = Number($scope.australianBonds1.replaceAll('%', '')) / 100;
            portfolio4[5] = Number($scope.internationalBondsHedged1.replaceAll('%', '')) / 100;
            portfolio4[6] = Number($scope.cash1.replaceAll('%', '')) / 100;
            portfolio4[7] = Number($scope.australianListedProperty1.replaceAll('%', '')) / 100;
            portfolio4[8] = Number($scope.internationalListedProperty1.replaceAll('%', '')) / 100;

            portfolio5[0] = Number($scope.australianShares2.replaceAll('%', '')) / 100;
            portfolio5[1] = Number($scope.internationalShares2.replaceAll('%', '')) / 100;
            portfolio5[2] = Number($scope.internationalSharesHedged2.replaceAll('%', '')) / 100;
            portfolio5[3] = Number($scope.usShares2.replaceAll('%', '')) / 100;
            portfolio5[4] = Number($scope.australianBonds2.replaceAll('%', '')) / 100;
            portfolio5[5] = Number($scope.internationalBondsHedged2.replaceAll('%', '')) / 100;
            portfolio5[6] = Number($scope.cash2.replaceAll('%', '')) / 100;
            portfolio5[7] = Number($scope.australianListedProperty2.replaceAll('%', '')) / 100;
            portfolio5[8] = Number($scope.internationalListedProperty2.replaceAll('%', '')) / 100;

            console.log("portfolio4", portfolio4);
            console.log("portfolio5", portfolio5);


            var bonds1 = [],
                bonds2 = [],
                bonds3 = [],
                bonds4 = [],
                bonds5 = [],
                bonds6 = [],
                bonds7 = [],
                bonds8 = [],
                bonds9 = [],
                bonds10 = [];

            var result1 = [],
                result2 = [],
                result3 = [],
                result4 = [],
                result5 = [],
                result6 = [],
                result7 = [],
                result8 = [],
                result9 = [],
                result10 = [],
                result11 = [],
                result12 = [],
                result13 = [],
                result14 = [],
                result15 = [],
                result16 = [],
                result17 = [],
                result18 = [],
                result19 = [];

            var final1 = [],
                final2 = [],
                final3 = [],
                final4 = [],
                final5 = [],
                final6 = [],
                final7 = [],
                final8 = [],
                final9 = [];

            var dateArray = [];

            var bondsArray = [bonds1, bonds2, bonds3, bonds4, bonds5, bonds6, bonds7, bonds8, bonds9, bonds10],
                yearArray = [year91, year92, year93, year94, year95, year96, year97, year98, year99, year00, year01, year02, year03, year04, year05, year06, year07, year08, year09, year10, year11, year12, year13, year14, year15, year16],
                porfolioArray = [portfolio1, portfolio2, portfolio3, portfolio4, portfolio5],
                resultArray = [result1, result2, result3, result4, result5, result6, result7, result8, result9],
                finalArray = [final1, final2, final3, final4, final5, final6, final7, final8, final9],
                investmentsArray = [investments1, investments2, investments3, investments4, investments5, investments6, investments7, investments8, investments9];


            var yr0 = 1991;
            var yr1 = $scope.begngInvstmntPrd;
            var mvdown = yr1 - yr0;
            var count1 = mvdown;

            var rng1 = yearArray[count1]
            var k = 0;

            for (var i = count1; i < yearArray.length; i++) {
                var temp1 = 0,
                    temp2 = 0,
                    temp3 = 0;
                for (j = 0; j < portfolio1.length; j++) {
                    temp1 = temp1 + (yearArray[i][j] * porfolioArray[0][j]);
                    temp2 = temp2 + (yearArray[i][j] * porfolioArray[1][j]);
                    temp3 = temp3 + (yearArray[i][j] * porfolioArray[2][j]);
                }
                resultArray[0][k] = temp1;
                resultArray[1][k] = temp2;
                resultArray[2][k] = temp3;
                k++;
            }

            if ($scope.alterOption == false) {
                k = 0;
                for (var i = count1; i < yearArray.length; i++) {
                    var temp1 = 0;
                    for (j = 0; j < portfolio1.length; j++) {
                        temp1 = temp1 + (yearArray[i][j] * porfolioArray[3][j]);
                    }
                    resultArray[3][k] = temp1;
                    k++;
                }
            } else {
                var mid = $scope.alterYear;
                k = 0;
                for (var i = count1; i < count1 + mid; i++) {
                    var temp1 = 0;
                    for (j = 0; j < portfolio1.length; j++) {
                        temp1 = temp1 + (yearArray[i][j] * porfolioArray[3][j]);
                    }
                    resultArray[3][k] = temp1;
                    k++;
                }
                for (var i = count1 + mid; i < yearArray.length; i++) {
                    var temp1 = 0;
                    for (j = 0; j < portfolio1.length; j++) {
                        temp1 = temp1 + (yearArray[i][j] * porfolioArray[4][j]);
                    }
                    resultArray[3][k] = temp1;
                    k++;
                }
            }
            k = 0;
            for (var i = count1; i < yearArray.length; i++) {
                if (i == count1) {
                    resultArray[4][k] = Number($scope.initialInvestmentAmount.replaceAll("$", "").replaceAll(",", ""));
                    resultArray[5][k] = resultArray[4][k] * (1 + (resultArray[0][k] / 100));
                    resultArray[6][k] = resultArray[4][k] * (1 + (resultArray[1][k] / 100));
                    resultArray[7][k] = resultArray[4][k] * (1 + (resultArray[2][k] / 100));
                    resultArray[8][k] = resultArray[4][k] * (1 + (resultArray[3][k] / 100));
                } else {
                    resultArray[4][k] = 0;
                    resultArray[5][k] = resultArray[5][k - 1] * (1 + (resultArray[0][k] / 100));
                    resultArray[6][k] = resultArray[6][k - 1] * (1 + (resultArray[1][k] / 100));
                    resultArray[7][k] = resultArray[7][k - 1] * (1 + (resultArray[2][k] / 100));
                    resultArray[8][k] = resultArray[8][k - 1] * (1 + (resultArray[3][k] / 100));
                }
                k++;
            }


            for (j = 0; j < 9; j++) {
                k = 0;
                for (i = count1; i < yearArray.length; i++) {
                    if (i == count1) {
                        finalArray[j][k] = (1 + (investmentsArray[j][i] / 100)) * (Number($scope.initialInvestmentAmount.replaceAll("$", "").replaceAll(",", "")));
                    } else {
                        finalArray[j][k] = (1 + (investmentsArray[j][i] / 100)) * (finalArray[j][k - 1]);
                    }
                    k++;
                }
            }

            console.log("resultArray", resultArray);
            console.log("finalArray", finalArray);
            var p = 0;
            for (var j = $scope.begngInvstmntPrd; j <= $scope.compYear; j++) {
                dateArray[p] = j;
                p++;
            }

            LineChartService.createChart(dateArray, finalArray,resultArray, true);
            LineChartService.createChart(dateArray, finalArray,resultArray, false);


        } else {
            $("#myModal").modal('show');
            $("html, body").animate({ scrollTop: 0 }, "slow");
        }

    }

    $scope.calculate(true, false, false);

    document.getElementById("download").addEventListener("click", function() {
        if ($scope.forms.ttrForm.$valid) {
            var normalDetails = {
                firstName: $scope.personalDetails.firstName,
                lastName: $scope.personalDetails.lastName,
                email: $scope.personalDetails.email,
                mobile: $scope.personalDetails.mobile,
                postalCode: $scope.personalDetails.postalCode,
                initialInvestmentAmount: Number($scope.initialInvestmentAmount.replaceAll('$', '').replaceAll(',', '')),
            }

            PdfMaker.createChart(normalDetails);
        } else {
            $("#myModal").modal('show');
        }
    });

    document.getElementById("bar-chart").addEventListener("click", function() {

        $scope.chartOneOpen = true;
        $("#containerA").highcharts().reflow();

        document.getElementById("containerA").style.display = "none";
        document.getElementById("container").style.display = "block";

        $("#container").highcharts().reflow();
    });

    document.getElementById("area-chart").addEventListener("click", function() {

        $scope.chartOneOpen = false;
        $("#container").highcharts().reflow();

        document.getElementById("container").style.display = "none";
        document.getElementById("containerA").style.display = "block";


        $("#containerA").highcharts().reflow();
    });

    $(".print-doc").on("click", printBothCharts);

    function printBothCharts() {
        if ($scope.forms.ttrForm.$valid) {
            var printUpdate = function() {
                $('#container').highcharts().reflow();
                $("#containerA").highcharts().reflow();
            };

            if ($scope.chartOneOpen) {
                document.getElementById("containerA").style.display = "block";

                if (window.matchMedia) {
                    var mediaQueryList = window.matchMedia('print');
                    mediaQueryList.addListener(function(mql) {
                        printUpdate();
                    });
                }
                window.print();
                setTimeout(function() {
                    document.getElementById("containerA").style.display = "none";
                }, 200);
            } else {
                document.getElementById("container").style.display = "block";

                if (window.matchMedia) {
                    var mediaQueryList = window.matchMedia('print');
                    mediaQueryList.addListener(function(mql) {
                        printUpdate();
                    });
                }
                window.print();
                setTimeout(function() {
                    document.getElementById("container").style.display = "none";
                }, 200);
            }
        } else {
            $("#myModal").modal('show');
            $("html, body").animate({ scrollTop: 0 }, "slow");
        }
    };


}]);
