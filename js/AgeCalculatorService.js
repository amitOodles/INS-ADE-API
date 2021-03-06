app.service('AgeCalculator', function() {
    this.getAge = function(dateBirth, year) {
        thisYear = year;
        thisMonth = 6;
        thisDay = 1;
        birthYear = dateBirth.getFullYear();
        birthMonth = dateBirth.getMonth();
        birthDay = dateBirth.getDate();
        var age = thisYear - birthYear;
        if (thisMonth < birthMonth) {
            age--;
        }
        if (birthMonth === thisMonth && thisDay < birthDay) {
            age--;
        }
        return age;
    };

});
