app.controller("RAController", ['$scope', '$timeout', 'AgeCalculator', 'ChartServiceHc', 'AreaChartService', function($scope, $timeout, AgeCalculator, ChartServiceHc, AreaChartService) {

    String.prototype.replaceAll = function(search, replacement) {
        var target = this;
        return target.split(search).join(replacement);
    };
    var minDrawdown;
    $scope.listOb = [{ id: 0, name: "Minimum Pension Only" },
        { id: 1, name: "Choose you own pension" }
    ];

    $scope.forms = {};

    $scope.personalDetails = {};

    var maleExpectancy = [80.3, 79.6, 78.6, 77.6, 76.6, 75.6, 74.6, 73.6, 72.7, 71.7, 70.7, 69.7, 68.7, 67.7, 66.7, 65.7, 64.7, 63.7, 62.8, 61.8, 60.8, 59.9, 58.9, 57.9, 57, 56, 55, 54.1, 53.1, 52.2, 51.2, 50.2, 49.3, 48.3, 47.3, 46.4, 45.4, 44.5, 43.5, 42.6, 41.6, 40.7, 39.8, 38.8, 37.9, 37, 36, 35.1, 34.2, 33.3, 32.4, 31.4, 30.5, 29.6, 28.8, 27.9, 27, 26.1, 25.3, 24.4, 23.5, 22.7, 21.9, 21, 20.2, 19.4, 18.6, 17.8, 17, 16.3, 15.5, 14.8, 14, 13.3, 12.6, 11.9, 11.2, 10.6, 9.9, 9.3, 8.7, 8.2, 7.6, 7.1, 6.6, 6.1, 5.7, 5.3, 4.9, 4.5, 4.2, 3.9, 3.6, 3.4, 3.2, 3, 2.8, 2.6, 2.5, 2.4, 2.3];

    var femaleExpectancy = [84.4, 83.7, 82.7, 81.7, 80.7, 79.7, 78.7, 77.7, 76.8, 75.8, 74.8, 73.8, 72.8, 71.8, 70.8, 69.8, 68.8, 67.8, 66.8, 65.9, 64.9, 63.9, 62.9, 61.9, 60.9, 60, 59, 58, 57, 56, 55, 54.1, 53.1, 52.1, 51.1, 50.1, 49.2, 48.2, 47.2, 46.3, 45.3, 44.3, 43.4, 42.4, 41.4, 40.5, 39.5, 38.6, 37.6, 36.7, 35.8, 34.8, 33.9, 33, 32, 31.1, 30.2, 29.3, 28.4, 27.5, 26.6, 25.7, 24.8, 23.9, 23, 22.2, 21.3, 20.4, 19.6, 18.8, 17.9, 17.1, 16.3, 15.5, 14.7, 13.9, 13.2, 12.4, 11.7, 11, 10.3, 9.6, 9, 8.3, 7.7, 7.2, 6.6, 6.1, 5.7, 5.2, 4.8, 4.4, 4.1, 3.8, 3.5, 3.3, 3, 2.9, 2.7, 2.5, 2.4];

    $scope.showPensionOption = true;
    $scope.showPensionOptionSpouse = true;

    $scope.genderOption = true;
    $scope.genderOptionSpouse = false;
    $scope.spouseOption = false;
    $scope.houseOption = false;
    $scope.isCouple = true;
    $scope.ownsHome = true;
    $scope.minPension = true;
    $scope.minPensionSpouse = true;
    $scope.overlay = false;


    $scope.retirementAgeSpouse = 70;
    $scope.annualSalarySpouse = 90000;
    $scope.superBalanceSpouse = 200000;
    $scope.salarySacrificeSpouse = 5000;
    $scope.pensionStartSpouse = 65;
    $scope.insurancePremiumSpouse = 0;
    $scope.investmentReturnSpouse = 5.30;
    $scope.variableFeeSpouse = 1.11;
    $scope.fixedFeeSpouse = 300;
    $scope.pensionDrawdownBase = 40000;
    $scope.pensionDrawdownBaseSpouse = 30000;
    $scope.retirementAge = 65;
    $scope.preservationAge = 55;
    $scope.preservationAgeSpouse = 55;
    $scope.annualSalary = 260000;
    $scope.employerContributionLevel = 9.50;
    $scope.employerContributionLevelSpouse = 9.50;
    $scope.inflation = 3.50;
    $scope.inflationSpouse = 3.50;
    $scope.superBalance = 500000;
    $scope.wageIncrease = 4.00;
    $scope.wageIncreaseSpouse = 4.00;
    $scope.insurancePremium = 0;
    $scope.salarySacrifice = 20000;
    $scope.pensionStart = 57;
    $scope.investmentReturn = 5.30;
    $scope.variableFee = 1.11;
    $scope.fixedFee = 300;
    $scope.homeContents = 50000;
    $scope.vehicleCost = 0;
    $scope.investmentProperty = 2000;
    $scope.bankAssets = 20000;
    $scope.listedInvestment = 0;
    $scope.marginLoans = 0;
    $scope.allocatedPension = 60000;
    $scope.otherInvestment = 20000;
    $scope.netRentalIncome = 0;
    $scope.otherIncome = 0;
    $scope.pensionIncome = 0;
    $scope.target = 40000;
    $scope.ddPercent = 4.00;
    $scope.ddBase = 40000;
    $scope.ddBaseSpouse = 30000;

    var genderOption = raObj.genderOption;
    var genderOptionSpouse = raObj.genderOptionSpouse;
    var spouseOption = raObj.spouseOption;
    var houseOption = raObj.houseOption;
    var isCouple = raObj.isCouple;
    var ownsHome = raObj.ownsHome;
    var minPension = raObj.minPension;
    var minPensionSpouse = raObj.minPensionSpouse;
    var overlay = raObj.overlay;
    var showPensionOption = raObj.showPensionOption;
    var showPensionOptionSpouse = raObj.showPensionOptionSpouse;

    var age = raObj.age;
    var ageSpouse = raObj.ageSpouse;


    var annualSalary = raObj.annualSalary;
    var superBalance = raObj.superBalance;
    var wageIncrease = raObj.wageIncrease;
    var inflation = raObj.inflation;
    var investmentReturn = raObj.investmentReturn;
    var variableFee = raObj.variableFee;
    var employerContributionLevel = raObj.employerContributionLevel;
    var salarySacrifice = raObj.salarySacrifice;
    var fixedFee = raObj.fixedFee;
    var insurancePremium = raObj.insurancePremium;
    var retirementAge = raObj.retirementAge;
    var pensionStart = raObj.pensionStart;
    var minPension = !showPensionOption;
    var ddBase = raObj.pensionDrawdownBase;
    var ageL = raObj.age;

    var annualSalarySpouse = raObj.annualSalarySpouse;
    var superBalanceSpouse = raObj.superBalanceSpouse;
    var wageIncreaseSpouse = raObj.wageIncreaseSpouse;
    var inflationSpouse = raObj.inflationSpouse;
    var investmentReturnSpouse = raObj.investmentReturnSpouse;
    var variableFeeSpouse = raObj.variableFeeSpouse;
    var employerContributionLevelSpouse = raObj.employerContributionLevelSpouse;
    var salarySacrificeSpouse = raObj.salarySacrificeSpouse;
    var fixedFeeSpouse = raObj.fixedFeeSpouse;
    var insurancePremiumSpouse = raObj.insurancePremiumSpouse;
    var retirementAgeSpouse = raObj.retirementAgeSpouse;
    var pensionStartSpouse = raObj.pensionStartSpouse;
    var minPensionSpouse = !showPensionOptionSpouse;
    var ddBaseSpouse = raObj.pensionDrawdownBaseSpouse;
    var ageLSpouse = raObj.ageSpouse;

    var homeContents = raObj.homeContents;
    var vehicleCost = raObj.vehicleCost;
    var investmentProperty = raObj.investmentProperty;
    var bankAssets = raObj.bankAssets;
    var listedInvestment = raObj.listedInvestment;
    var marginLoans = raObj.marginLoans;
    var allocatedPension = raObj.allocatedPension;
    var otherInvestment = raObj.otherInvestment;
    var employmentIncome = annualSalary;
    var employmentIncomePartner = spouseOption ? annualSalarySpouse : 0;
    var netRentalIncome = raObj.netRentalIncome;
    var otherIncome = raObj.otherIncome;
    var pensionIncome = raObj.pensionIncome;
    var targetIncome = raObj.target;

    var leMember1 = genderOption ? maleExpectancy[age] : femaleExpectancy[age];

    var preservationAge = raObj.preservationAge;


    function preservationTable(ageTemp) {
        var temp;
        switch (ageTemp) {
            case 56:
                temp = 56;
                break;
            case 55:
                temp = 57;
                break;
            case 54:
                temp = 58;
                break;
            case 53:
                temp = 59;
                break;
            default:
                if ($scope.age > 56) { temp = 55 } else { temp = 60 }
                break;
        }
        return temp;
    }

    var preservationAge = preservationTable(age);
    var preservationAgeSpouse = preservationTable(ageSpouse);
    console.log("preservationAge:", preservationAge);
    console.log("preservationAgeSpouse:", preservationAgeSpouse);
    if (preservationAge == retirementAge) {
        pensionStart = preservationAge;
        console.log("pensionStart:", pensionStart);
    } else {
        console.log("preservationAge:", preservationAge);
        console.log("retirementAge:", retirementAge);
    }
    changeCCLimit();

    var leMember2 = genderOptionSpouse ? maleExpectancy[ageSpouse] : femaleExpectancy[ageSpouse];
    var preservationAgeSpouse = raObj.preservationAgeSpouse;
    if (preservationAgeSpouse == retirementAgeSpouse) {
        pensionStartSpouse = preservationAgeSpouse;
        console.log("pensionStart:", pensionStartSpouse);
    } else {
        console.log("preservationAge:", preservationAgeSpouse);
        console.log("retirementAge:", retirementAgeSpouse);
    }
    changeCCLimitSpouse();

    function calculateMinPension(age) {
        if (age >= 56 && age <= 64) {
            return 4;
        }
        if (age >= 65 && age <= 74) {
            return 5;
        }
        if (age >= 75 && age <= 79) {
            return 6;
        }
        if (age >= 80 && age <= 84) {
            return 7;
        }
        if (age >= 85 && age <= 89) {
            return 9;
        }
        if (age >= 90 && age <= 94) {
            return 11;
        }
        if (age >= 95) {
            return 14;
        }
    }

    function cLookUp(sal) {
        if (sal <= 249999) {
            return 0.15;
        } else {
            return 0.3;
        }
    }

    function changeCCLimit() {
        var salary = annualSalary;
        var empContributionPerc = employerContributionLevel;
        var empContribution = salary * (empContributionPerc / 100) > 19615.60 ? 19615.60 : salary * (empContributionPerc / 100);
        var ccLimit = age >= 49 ? (35000 - empContribution) : (30000 - empContribution);
        if (ccLimit < 0) {
            ccLimit = 0.4;
        }
        console.log("ccLimit:", ccLimit);
    }

    function changeCCLimitSpouse() {
        var salarySpouse = annualSalarySpouse;
        var empContributionPercSpouse = employerContributionLevelSpouse;
        var empContributionSpouse = salarySpouse * (empContributionPercSpouse / 100) > 19615.60 ? 19615.60 : salarySpouse * (empContributionPercSpouse / 100);
        var ccLimitSpouse = ageSpouse >= 49 ? (35000 - empContribution) : (30000 - empContribution);
        if (ccLimitSpouse < 0) {
            ccLimitSpouse = 0.4;
        }
        console.log("ccLimitspouse:", ccLimitSpouse);
    }

    changeCCLimit();
    changeCCLimitSpouse();


    function biCount(spouse) {

        if (!spouse) {

            var annualSalaryTemp = annualSalary;
            var superBalanceTemp = superBalance;
            var wageIncreaseTemp = wageIncrease;
            var inflationTemp = inflation;
            var investmentReturnTemp = investmentReturn;
            var variableFeeTemp = variableFee;
            var employerContributionLevelTemp = employerContributionLevel;
            var salarySacrificeTemp = salarySacrifice;
            var fixedFeeTemp = fixedFee;
            var insurancePremiumTemp = insurancePremium;
            var retirementAgeTemp = retirementAge;
            var pensionStartTemp = pensionStart;
            var minPensionTemp = !showPensionOption;
            var ddBaseTemp = pensionDrawdownBase;
            var ageLTemp = age;

        } else {

            var annualSalaryTemp = annualSalarySpouse;
            var superBalanceTemp = superBalanceSpouse;
            var wageIncreaseTemp = wageIncreaseSpouse;
            var inflationTemp = inflationSpouse;
            var investmentReturnTemp = investmentReturnSpouse;
            var variableFeeTemp = variableFeeSpouse;
            var employerContributionLevelTemp = employerContributionLevelSpouse;
            var salarySacrificeTemp = salarySacrificeSpouse;
            var fixedFeeTemp = fixedFeeSpouse;
            var insurancePremiumTemp = insurancePremiumSpouse;
            var retirementAgeTemp = retirementAgeSpouse;
            var pensionStartTemp = pensionStartSpouse;
            var minPensionTemp = !showPensionOptionSpouse;
            var ddBaseTemp = pensionDrawdownBaseSpouse;
            var ageLTemp = ageSpouse;
        }
        var biArray = [];
        var baArray = [];
        var penArray = [];
        var ageArray = [];
        var balanceIndexed = 0;
        var year = 0;
        var cpi;
        var adjustedSalary, concessionalCo, earning, taxation, drawdown, fAndI, balance, balanceCpi, paymentFactor;
        var count = 0;
        while (balanceIndexed >= 0) {
            cpi = Math.pow(1 + (inflationTemp / 100), year);
            adjustedSalary = ageLTemp < retirementAgeTemp ? annualSalaryTemp * Math.pow(1 + (wageIncreaseTemp / 100), year) : 0;
            if (year === 0) {
                concessionalCo = 0;
            } else {
                if (ageLTemp < retirementAgeTemp) {
                    var concessionalCap = ageLTemp >= 49 ? 35000 : 30000;
                    // console.log("cCap",concessionalCap);
                    concessionalCo = Math.min(Math.min(adjustedSalary * (employerContributionLevelTemp / 100), 19615.60) + salarySacrificeTemp, concessionalCap);
                } else {
                    concessionalCo = 0;
                }
            }
            balanceCpi = 1 / cpi;
            // var temp1 = 0;
            if (year === 0) {
                earnings = taxation = drawdown = fAndI = 0;
                balance = superBalanceTemp;

            } else {
                if (minPensionTemp) {
                    if (ageLTemp < pensionStartTemp) {
                        drawdown = 0;
                    } else {
                        drawdown = baArray[year - 1] * (calculateMinPension(ageLTemp) / 100)
                    }
                } else {
                    if (ageLTemp < pensionStartTemp) {
                        drawdown = 0;
                    } else {
                        drawdown = ddBaseTemp * Math.pow(1 + (inflationTemp / 100), ageLTemp - pensionStartTemp);
                    }
                }
                minDrawdown = drawdown;
                fAndI = baArray[year - 1] * (variableFeeTemp / 100.00) + fixedFeeTemp + insurancePremiumTemp;
                earnings = baArray[year - 1] * (Math.pow(1 + (investmentReturnTemp / 100), 0.5) - 1) + (baArray[year - 1] * Math.pow(1 + (investmentReturnTemp / 100), 0.5) + concessionalCo - fAndI - drawdown) * (Math.pow(1 + (investmentReturnTemp / 100), 0.5) - 1);
                if (ageLTemp >= 60 && ageLTemp >= pensionStartTemp) {
                    taxation = cLookUp(annualSalaryTemp) * concessionalCo;
                } else {
                    taxation = cLookUp(annualSalaryTemp) * concessionalCo + earnings * 0.15;
                }
                balance = baArray[year - 1] + concessionalCo + earnings - taxation - drawdown - fAndI;
            }

            balanceIndexed = balance * balanceCpi;
            baArray.push(balance);
            penArray.push(drawdown);
            biArray.push(balanceIndexed);
            ageArray.push(ageLTemp);
            year++;
            ageLTemp++;
            count++;
            // console.log([balance,balanceCpi,balanceIndexed]);
        }

        // console.log(biArray);
        // console.log({
        //     count: count - 1,
        //     biArray: biArray,
        //     penArray: penArray,
        //     ageArray: ageArray
        // });

        return {
            count: count - 1,
            biArray: biArray,
            penArray: penArray,
            ageArray: ageArray
        }
    }

    function entitledAgedPension(superFunds, assetCalculationObj, ageMember1, ageMember2) {
        // console.log("super" , superFunds);
        if (ageMember1 >= retirementAge) {
            employmentIncome = 0;
        }
        if (ageMember2 >= retirementAgeSpouse) {
            employmentIncomePartner = 0;
        }
        var temp, temp2, temp3, deemingRate;
        if (spouseOption) {
            deemingRate = ((age < pensionStart) && (ageSpouse < pensionStartSpouse)) ? 40300 : 80600;
        } else {
            deemingRate = 48600;
        }
        var totalAsset = homeContents + vehicleCost + investmentProperty;
        var totalInvestment = bankAssets + listedInvestment + marginLoans + allocatedPension + superFunds + otherInvestment;
        var totalIncome = employmentIncome + employmentIncomePartner + netRentalIncome + otherIncome + pensionIncome;
        // console.log("tip", totalIncome , memberN);
        if (totalInvestment <= deemingRate) {
            temp = totalInvestment * (1.75 / 100);
        } else {
            temp = deemingRate * (1.75 / 100) + (totalInvestment - deemingRate) * (3.25 / 100);
        }
        var totalCalcIncome = totalIncome + temp;
        var fortnightIncome = totalCalcIncome / 26;
        if (fortnightIncome <= assetCalculationObj.itCheck) {
            temp2 = assetCalculationObj.default;
        } else {
            temp2 = assetCalculationObj.default-assetCalculationObj.percent * (fortnightIncome - assetCalculationObj.itCheck);
        }
        var maxAgedPensionIncome = temp2;
        var totalCalcAsset = totalAsset + totalInvestment;
        if (totalCalcAsset <= assetCalculationObj.low) {
            temp3 = assetCalculationObj.default;
        } else {
            if (totalCalcAsset > assetCalculationObj.high) {
                temp3 = 0;
            } else {
                temp3 = assetCalculationObj.default-(assetCalculationObj.default / (assetCalculationObj.high - assetCalculationObj.low)) * (totalCalcAsset - assetCalculationObj.low);
            }
        }
        var maxAgedPensionAsset = temp3;
        var entitledAgedPension = maxAgedPensionIncome > maxAgedPensionAsset ? maxAgedPensionAsset : maxAgedPensionIncome;
        // return entitledAgedPension;
        return entitledAgedPension > 0 ? entitledAgedPension : 0;
    }


    $scope.calculateFinal = function() {

        var isCouple = spouseOption;
        var ctm;
        var object1 = biCount(false);
        var object2;

        if (isCouple) {
            object2 = biCount(true);
            ctm = Math.max(object1.count, object2.count);
        } else {
            ctm = object1.count;
        }

        var last = Math.max(object1.penArray[object1.count] + object1.biArray[object1.count], 0);

        object1.penArray.pop();

        object1.penArray.push(last);

        // console.log("array",object1.penArray);

        if (spouseOption) {

            var last = Math.max(object2.penArray[object2.count] + object2.biArray[object2.count], 0);

            object2.penArray.pop();

            object2.penArray.push(last);

            // console.log("array2",object2.penArray);

        }

        if (isCouple) {
            fillArray();
        }

        function fillArray() {
            if (object1.count < object2.count) {
                for (var i = 0; i < object2.count - object1.count; i++) {
                    object1.penArray.push(0);
                    object1.biArray.push(0);
                    object1.ageArray.push(object1.ageArray[object1.count + i] + 1);
                }
            } else {
                for (var i = 0; i < object1.count - object2.count; i++) {
                    object2.penArray.push(0);
                    object2.biArray.push(0);
                    object2.ageArray.push(object2.ageArray[object2.count + i] + 1);
                }
            }
        }

        // console.log("obj1",object1);
        // console.log("obj2",object2);


        var assetCalculationObj = {};

        if (spouseOption && houseOption) {
            assetCalculationObj.high = 1163000;
            assetCalculationObj.low = 291500;
            assetCalculationObj.default = 653.5;
            assetCalculationObj.itCheck = 288;
            assetCalculationObj.percent = 0.25;
        }

        if (spouseOption && !houseOption) {
            assetCalculationObj.high = 1312000;
            assetCalculationObj.low = 440500;
            assetCalculationObj.default = 653.5;
            assetCalculationObj.itCheck = 288;
            assetCalculationObj.percent = 0.25;
        }

        if (!spouseOption && houseOption) {
            assetCalculationObj.high = 783500;
            assetCalculationObj.low = 205500;
            assetCalculationObj.default = 867;
            assetCalculationObj.itCheck = 162;
            assetCalculationObj.percent = 0.5;
        }

        if (!spouseOption && !houseOption) {
            assetCalculationObj.high = 932500;
            assetCalculationObj.low = 354500;
            assetCalculationObj.default = 867;
            assetCalculationObj.itCheck = 162;
            assetCalculationObj.percent = 0.5;
        }

        var superFund;
        var member1BalanceArray = object1.biArray;
        // console.log(cArray);
        var member2BalanceArray = spouseOption ? object2.biArray : [];
        // console.log(eArray);
        var member1PensionArray = object1.penArray;
        var member2PensionArray = spouseOption ? object2.penArray : [];
        var member1EPArray = [];
        var member2EPArray = [];
        var member1APArray = [];
        var member2APArray = [];
        var totalSuperBalanceArray = [];
        var totalAnnualIncomeArray = [];

        for (i = 0; i <= ctm; i++) {
            if (spouseOption) {
                superFund = object1.biArray[i] > 0 ? object1.biArray[i] : 0 + object2.biArray[i] > 0 ? object2.biArray[i] : 0;
                if (object2.ageArray[i] < 65) {
                    member2EPArray.push(0);
                } else {
                    // if(i > object2.count){
                    //     member2EPArray.push(0);
                    // }else{
                    member2EPArray.push(entitledAgedPension(superFund, assetCalculationObj, object1.ageArray[i], object2.ageArray[i]));
                    // }
                }

                if (object1.ageArray[i] < 65) {
                    member1EPArray.push(0);
                } else {
                    // if(i > object1.count){
                    // member1EPArray.push(0);
                    // }else{
                    member1EPArray.push(entitledAgedPension(superFund, assetCalculationObj, object1.ageArray[i], object2.ageArray[i]));
                    // }
                }
                member2APArray.push(member2EPArray[i] * 26);
                member1APArray.push(member1EPArray[i] * 26);
                totalSuperBalanceArray.push(member1BalanceArray[i] + member2BalanceArray[i]);
                totalAnnualIncomeArray.push(member1APArray[i] + member2APArray[i] + member1PensionArray[i] + member2PensionArray[i]);
            } else {
                superFund = object1.biArray[i] > 0 ? object1.biArray[i] : 0;
                if (object1.ageArray[i] < 65) {
                    member1EPArray.push(0);
                } else {
                    member1EPArray.push(entitledAgedPension(superFund, assetCalculationObj, object1.ageArray[i], object1.ageArray[i]));
                }
                member2EPArray.push(0);
                member2APArray.push(member2EPArray[i] * 26);
                member1APArray.push(member1EPArray[i] * 26);
                totalSuperBalanceArray.push(member1BalanceArray[i]);
                totalAnnualIncomeArray.push(member1APArray[i] + member1PensionArray[i]);
            }
        }

        console.log('j', member1APArray);
        console.log('k', member2APArray);
        console.log('l',totalSuperBalanceArray);
        console.log('m', totalAnnualIncomeArray);
        console.log(assetCalculationObj);

        if (!spouseOption) {
            while (member1APArray.length <= Math.ceil(leMember1)) {
                member1APArray.push(0);
            }
            while (member1PensionArray.length <= Math.ceil(leMember1)) {
                member1PensionArray.push(0);
            }
            ChartServiceHc.createChart(totalSuperBalanceArray.slice(0, 5 + Math.ceil(leMember1)));
            AreaChartService.createChart(member1APArray.slice(0, 5 + Math.ceil(leMember1)), [], member1PensionArray.slice(0, 5 + Math.ceil(leMember1)), [], leMember1, leMember2, false, targetIncome);
        } else {
            while (member1APArray.length <= Math.max(Math.ceil(leMember1), Math.ceil(leMember2))) {
                member1APArray.push(0);
            }
            while (member1PensionArray.length <= Math.max(Math.ceil(leMember1), Math.ceil(leMember2))) {
                member1PensionArray.push(0);
            }
            while (member2PensionArray.length <= Math.max(Math.ceil(leMember1), Math.ceil(leMember2))) {
                member2PensionArray.push(0);
            }
            while (member2APArray.length <= Math.max(Math.ceil(leMember1), Math.ceil(leMember2))) {
                member2APArray.push(0);
            }
            ChartServiceHc.createChart(totalSuperBalanceArray.slice(0, 5 + Math.max(Math.ceil(leMember1), Math.ceil(leMember2))));
            AreaChartService.createChart(member1APArray.slice(0, 5 + Math.max(Math.ceil(leMember1), Math.ceil(leMember2))), member2APArray.slice(0, 5 + Math.max(Math.ceil(leMember1), Math.ceil(leMember2))), member1PensionArray.slice(0, 5 + Math.max(Math.ceil(leMember1), Math.ceil(leMember2))), member2PensionArray.slice(0, 5 + Math.max(Math.ceil(leMember1), Math.ceil(leMember2))), leMember1, leMember2, true, targetIncome);

        }
    }

    $scope.calculateFinal();

}]);
