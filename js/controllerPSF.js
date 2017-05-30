app.controller("TTRController", ['$scope', '$timeout', 'PdfMaker', 'LineChartService', function($scope, $timeout, PdfMaker, LineChartService) {

    String.prototype.replaceAll = function(search, replacement) {
        var target = this;
        return target.split(search).join(replacement);
    };


    $scope.schoolObjects = [
        { id: 0, name: "Sydney Grammar School Darlinghurst", address: "College St- Darlinghurst NSW 2010", state: "NSW", upfrontFee: 5489, annualFee: 32644 },
        { id: 1, name: "PLC Sydney", address: "Boundary St- Croydon NSW 2132", state: "NSW", upfrontFee: 3415, annualFee: 24411 },
        { id: 2, name: "SCEGGS Darlinghurst", address: "215 Forbes St- Darlinghurst NSW 2010", state: "NSW", upfrontFee: 4950, annualFee: 28348 },
        { id: 3, name: "The Scotts College Sydney", address: "Victoria Rd- Bellevue Hill NSW 2023", state: "NSW", upfrontFee: 5500, annualFee: 33925 },
        { id: 4, name: "Pymble Ladies College", address: "Avon Rd- Pymble NSW 2073", state: "NSW", upfrontFee: 3430, annualFee: 24002 },
        { id: 5, name: "Ascham School", address: "188 New South Head Rd- Edgecliff- NSW 2027", state: "NSW", upfrontFee: 6300, annualFee: 32000 },
        { id: 6, name: "Abbotsleigh", address: "1666 Pacific Highway- Wahroonga- NSW 2076", state: "NSW", upfrontFee: 1970, annualFee: 28640 },
        { id: 7, name: "St Aloysius College", address: "47 Upper Pitt Street- Milsons Point 2061 NSW Australia", state: "NSW", upfrontFee: 2650, annualFee: 16278 },
        { id: 8, name: "Meridan School", address: "10-12 Redmyre Road- Strathfield NSW 2135", state: "NSW", upfrontFee: 1825, annualFee: 28340 },
        { id: 9, name: "Sydney Church of England Grammar School (SHORE)", address: "Blue Street- North Sydney- NSW- 2060- Australia", state: "NSW", upfrontFee: 2400, annualFee: 24126 },
        { id: 10, name: "Cranbrook School", address: "5 Victoria Road- Bellevue Hill NSW 2023 Australia", state: "NSW", upfrontFee: 7300, annualFee: 28325 },
        { id: 11, name: "Knox Grammar School", address: "7 Woodville Ave- Wahroonga 2076 NSW Australia", state: "NSW", upfrontFee: 3000, annualFee: 29430 },
        { id: 12, name: "The Kings School", address: "87-129 PENNANT HILLS ROAD- NORTH PARRAMATTA- NSW 2151- AUSTRALIA", state: "NSW", upfrontFee: 3850, annualFee: 25345 },
        { id: 13, name: "ST Ignatius' College", address: "1 Tambourine Bay Road- NSW Lane Cove", state: "NSW", upfrontFee: 4530, annualFee: 23880 },
        { id: 14, name: "St Joseph's College", address: "Mark Street- Hunters Hill- NSW 2110", state: "NSW", upfrontFee: 3300, annualFee: 29040 },
        { id: 15, name: "Loreto Normanhurst", address: "91-93 Pennant Hills Road- Normanhurst- Sydney- NSW 2076", state: "NSW", upfrontFee: 3330, annualFee: 19179 },
        { id: 16, name: "Loreto Kirribilli", address: "85 Carabella Street- Kirribilli NSW 2061- Australia", state: "NSW", upfrontFee: 3220, annualFee: 15645 },
        { id: 17, name: "Queenswood School for Girls", address: "47 Mandolong Rd- Mosman NSW 2088", state: "NSW", upfrontFee: 4220, annualFee: 25171 },
        { id: 18, name: "Roseville College", address: "27 Bancroft Avenue Roseville NSW 2069 Australia", state: "NSW", upfrontFee: 1220, annualFee: 20735 },
        { id: 19, name: "Parramatta Marist High School", address: "2 DARCY ROAD- WESTMEAD NSW AUSTRALIA 2145", state: "NSW", upfrontFee: 1220, annualFee: 4473 },
        { id: 20, name: "Barker College", address: "91 Pacific Highway Hornsby NSW 2077", state: "NSW", upfrontFee: 3800, annualFee: 25140 },
        { id: 21, name: "Ruyton Girls' School, Kew.", address: "12 Selbourne Rd- Kew VIC 3101", state: "VIC", upfrontFee: 1610, annualFee: 22360 },
        { id: 22, name: "Shelford Girls' Grammar, Caulfield.", address: "3 Hood Cres- Caulfield VIC 3161", state: "VIC", upfrontFee: 1100, annualFee: 25518 },
        { id: 23, name: "Fintona Girls' School, Balwyn.", address: "79 Balwyn Rd- Balwyn VIC 3103", state: "VIC", upfrontFee: 1150, annualFee: 20399 },
        { id: 24, name: "Lauriston Girls' School, Aramadale.", address: "38 Huntingtower Rd- Armadale VIC 3143", state: "VIC", upfrontFee: 1100, annualFee: 27160 },
        { id: 25, name: "Loreto Mandeville Hall, Toorak.", address: "10 Mandeville Cres- Toorak VIC 3142", state: "VIC", upfrontFee: 1900, annualFee: 22398 },
        { id: 26, name: "Prebyterian Ladies' College, Burwood.", address: "141 Burwood Hwy- Burwood VIC 3125", state: "VIC", upfrontFee: 1300, annualFee: 23479 },
        { id: 27, name: "Camberwell Girls' Grammar School, Canterbury.", address: " 2 Torrington St- Canterbury VIC 3126", state: "VIC", upfrontFee: 1100, annualFee: 19051 },
        { id: 28, name: "Melbourne Girls Grammar School, South Yarra.", address: "86 Anderson St- South Yarra VIC 3141", state: "VIC", upfrontFee: 1650, annualFee: 27746 },
        { id: 29, name: "Mentone Girls' Grammar School, Mentone.", address: "11 Mentone Parade- Mentone VIC 3194", state: "VIC", upfrontFee: 1100, annualFee: 22354 },
        { id: 30, name: "Korowa Anglican Girls' School Glen Iris.", address: "10-16 Ranfurlie Cres- Glen Iris VIC 3146", state: "VIC", upfrontFee: 900, annualFee: 27138 },
        { id: 31, name: "Camberwell Grammar School, Canterbury.", address: "55 Mont Albert Rd- Canterbury VIC 3126", state: "VIC", upfrontFee: 1330, annualFee: 25600 },
        { id: 32, name: "Scotch College, Hawthorn. ", address: "1 Morrison St- Hawthorn VIC 3122", state: "VIC", upfrontFee: 1600, annualFee: 29912 },
        { id: 33, name: "Melbourne Grammar School, South Yarra.", address: "355 St Kilda Rd- Melbourne VIC 3004", state: "VIC", upfrontFee: 3900, annualFee: 24885 },
        { id: 34, name: "Caulfield Grammar School, St Kilda", address: "217 Glen Eira Road- East St. Kilda- Melbourne- Victoria 3183", state: "VIC", upfrontFee: 2100, annualFee: 23789 },
        { id: 35, name: "Haileybury College, Keysborough.", address: "855 Springvale Road Keysborough VIC 3173", state: "VIC", upfrontFee: 2500, annualFee: 24702 },
        { id: 36, name: "Xavier College, Kew.", address: "135 Barkers Road- Melbourne- Kew- Victoria", state: "VIC", upfrontFee: 945, annualFee: 21957 },
        { id: 37, name: "Trinity Grammar School, Kew.", address: "40 Charles St- Kew- Melbourne Victoria 3101", state: "VIC", upfrontFee: 2360, annualFee: 26349 },
        { id: 38, name: "St Kevin's College, Toorak.", address: "31 Moonga Rd- Toorak VIC 3142", state: "VIC", upfrontFee: 3000, annualFee: 16290 },
        { id: 39, name: "Brighton Grammar School, Brighton", address: "90 Outer Cres- Brighton VIC 3186", state: "VIC", upfrontFee: 2200, annualFee: 25247 },
        { id: 40, name: "Firbank Grammar School, Brighton", address: "51 Outer Crescent- Brighton VIC 3186", state: "VIC", upfrontFee: 1100, annualFee: 24769 },
        { id: 41, name: "St Leonard's College, Brighton East.", address: "163 South Road- Brighton East VIC 3187", state: "VIC", upfrontFee: 1800, annualFee: 23415 },
        { id: 42, name: "Brisbane Grammar School", address: "24 Gregory Terrace- Spring Hill QLD 4000", state: "QLD", upfrontFee: 2550, annualFee: 23000 },
        { id: 43, name: "Brisbane Girls Grammer School", address: "70 Gregory Terrace- Spring Hill QLD 4000", state: "QLD", upfrontFee: 2040, annualFee: 22520 },
        { id: 44, name: "Ormiston College", address: "97 Dundas St W- Ormiston QLD 4160", state: "QLD", upfrontFee: 795, annualFee: 2527 },
        { id: 45, name: "Somerville House", address: "17 Graham St- South Brisbane QLD 4101", state: "QLD", upfrontFee: 1530, annualFee: 18292 },
        { id: 46, name: "Brisbane Boys College", address: "Kensington Terrace- Toowong QLD 4066", state: "QLD", upfrontFee: 1960, annualFee: 18434 },
        { id: 47, name: "St Aidan's Anglican Girls School", address: "11 Ruthven St- Corinda QLD 4075", state: "QLD", upfrontFee: 1300, annualFee: 17272 },
        { id: 48, name: "Anglican Church Grammar School", address: "Oaklands Parade- East Brisbane QLD 4169", state: "QLD", upfrontFee: 1930, annualFee: 18813 },
        { id: 49, name: "Clayfield College", address: "23 Gregory Street- Clayfield QLD 4011", state: "QLD", upfrontFee: 1135, annualFee: 17031 },
        { id: 50, name: "Cannon Hill Anglican College", address: "Junction Rd- Cannon Hill QLD 4170", state: "QLD", upfrontFee: 1250, annualFee: 10386 },
        { id: 51, name: "Sheldon College", address: "Taylor Road- Sheldon- QLD 4157", state: "QLD", upfrontFee: 660, annualFee: 11479 },
        { id: 52, name: "St Margarets Anglican Girls School", address: "11 Petrie St- Ascot QLD 4007", state: "QLD", upfrontFee: 1220, annualFee: 17762 },
        { id: 53, name: "Hillbrook Anglican School", address: "45 Hurdcotte Street Enoggera QLD 4051", state: "QLD", upfrontFee: 1610, annualFee: 11092 },
        { id: 54, name: "st peters lutheran college", address: "66 Harts Rd- Indooroopilly QLD 4068", state: "QLD", upfrontFee: 1100, annualFee: 15806 },
        { id: 55, name: "Moreton Bay College", address: "450 Wondall Rd- Manly West QLD 4179", state: "QLD", upfrontFee: 1100, annualFee: 12532 },
        { id: 56, name: "St Rita's College, Clayfield", address: "41 Enderley Rd- Clayfield QLD 4011", state: "QLD", upfrontFee: 1100, annualFee: 7120 },
        { id: 57, name: "The Southport School", address: "2 Winchester St- Southport QLD 4215", state: "QLD", upfrontFee: 1500, annualFee: 15030 },
        { id: 58, name: "St Joseph's College Gregory Terrace", address: "Gregory Terrace- Brisbane- QLD 4000- Australia", state: "QLD", upfrontFee: 2420, annualFee: 8215 },
        { id: 59, name: "The Lakes College", address: "2 College St- North Lakes QLD 4509", state: "QLD", upfrontFee: 500, annualFee: 8415 },
        { id: 60, name: "Redeemer Lutheran College", address: "745 Rochedale Rd- Rochedale QLD 4123", state: "QLD", upfrontFee: 700, annualFee: 8979 },
        { id: 61, name: "Moreton Bay Boys College", address: "302 Manly Rd- Manly West QLD 4179", state: "QLD", upfrontFee: 1100, annualFee: 11023 },
        { id: 62, name: "Wilderness School, Medindie.", address: "30 Hawkers Rd- Medindie SA 5081", state: "SA", upfrontFee: 1050, annualFee: 18888 },
        { id: 63, name: "St Peter's College ", address: "57 Hackney Rd- Hackney SA 5069", state: "SA", upfrontFee: 2600, annualFee: 20520 },
        { id: 64, name: "St Peter's Girls Collegiate Girls' School", address: "Stonyfell Rd- Stonyfell SA 5066", state: "SA", upfrontFee: 970, annualFee: 17285 },
        { id: 65, name: "Walford Anglican School for Girls", address: "316 Unley Rd- Hyde Park SA 5061", state: "SA", upfrontFee: 1095, annualFee: 19301 },
        { id: 66, name: "Prince Alfred College", address: "23 Dequetteville Terrace- Kent Town SA 5067", state: "SA", upfrontFee: 1100, annualFee: 17319 },
        { id: 67, name: "Seymour College", address: "546 Portrush Rd- Glen Osmond SA 5064", state: "SA", upfrontFee: 1050, annualFee: 19679 },
        { id: 68, name: "Pulteney Grammar School", address: "190 South Terrace ADELAIDE SA 5000", state: "SA", upfrontFee: 850, annualFee: 18946 },
        { id: 69, name: "St Aloysius College, Adelaide", address: "53 Wakefield St- Adelaide SA 5000", state: "SA", upfrontFee: 600, annualFee: 7636 },
        { id: 70, name: "St Dominics Priory College", address: "119/139 Molesworth St- North Adelaide SA 5006", state: "SA", upfrontFee: 0, annualFee: 6674 },
        { id: 71, name: "St John's Grammar School", address: "29 Gloucester Ave- Belair SA 5052", state: "SA", upfrontFee: 688, annualFee: 11811 },
        { id: 72, name: "Woodcroft College", address: "143-173 Bains Rd- Morphett Vale SA 5162", state: "SA", upfrontFee: 755, annualFee: 6297 },
        { id: 73, name: "St Ignatious College, Adelaide", address: "2 Manresa Ct- Athelstone SA 5076", state: "SA", upfrontFee: 975, annualFee: 14013 },
        { id: 74, name: "Pedare Christian College", address: "2-30 Surrey Farm Dr- Golden Grove SA 5125", state: "SA", upfrontFee: 150, annualFee: 7502 },
        { id: 75, name: "Westminster School", address: "1-27 Alison Avenue- Marion- South Australia ", state: "SA", upfrontFee: 800, annualFee: 17932 },
        { id: 76, name: "Kings Baptist Grammar School", address: "no address", state: "SA", upfrontFee: 175, annualFee: 0 },
        { id: 77, name: "Scotch College Adelaide", address: "Carruth Road- Torrens Park South Australia 5062", state: "SA", upfrontFee: 1150, annualFee: 19668 },
        { id: 78, name: "Concordia College", address: "45 Cheltenham St- Highgate SA 5063", state: "SA", upfrontFee: 75, annualFee: 8820 },
        { id: 79, name: "Pembroke School", address: "342 The Parade- Kensington Park SA 5068", state: "SA", upfrontFee: 860, annualFee: 19690 },
        { id: 80, name: "Loreto College, Marryatville", address: "316 Portrush Rd- Marryatville SA 5068", state: "SA", upfrontFee: 745, annualFee: 14664 },
        { id: 81, name: "Trinity College, Gawler", address: "Alexander Ave- Evanston South SA 5116", state: "SA", upfrontFee: 540, annualFee: 4622 },
        { id: 82, name: "Hale School", address: "160 Hale Rd- Wembley Downs WA 6019", state: "WA", upfrontFee: 8250, annualFee: 21450 },
        { id: 83, name: "Christ Church Grammar School", address: "Queenslea Dr- Claremont WA 6010", state: "WA", upfrontFee: 6700, annualFee: 23088 },
        { id: 84, name: "All Saints College", address: "Ewing Ave.- Bull Creek WA 6149", state: "WA", upfrontFee: 5423, annualFee: 16534 },
        { id: 85, name: "St Mary's Anglican Girls School", address: "75 Elliott Rd- Karrinyup WA 6018", state: "WA", upfrontFee: 5545, annualFee: 18394 },
        { id: 86, name: "St Hilda's Anglican Girls School", address: "26 Bay View Terrace- Mosman Park WA 6012", state: "WA", upfrontFee: 4959, annualFee: 20284 },
        { id: 87, name: "Presbyterian Ladies' College, Perth", address: "14 McNeil St- Peppermint Grove WA 6011", state: "WA", upfrontFee: 4950, annualFee: 20982 },
        { id: 88, name: "Perth College", address: "31 Lawley Crescent- Mount Lawley WA 6050", state: "WA", upfrontFee: 5742, annualFee: 18701 },
        { id: 89, name: "Guildford Grammar School ", address: "11 Terrace Rd- Guildford WA 6055", state: "WA", upfrontFee: 2925, annualFee: 18073 },
        { id: 90, name: "Penrhos College", address: "6 Morrison Street- Como WA 6152", state: "WA", upfrontFee: 5489, annualFee: 19442 },
        { id: 91, name: "Scotch College, Perth", address: "76 Shenton Rd- Swanbourne WA 6010", state: "WA", upfrontFee: 6687, annualFee: 23499 },
        { id: 92, name: "John XXIII College, Perth", address: "Mooro Dr- Mount Claremont WA 6010", state: "WA", upfrontFee: 2110, annualFee: 7710 },
        { id: 93, name: "Santa Maria College", address: "18 Stoneham Rd- Attadale WA 6156", state: "WA", upfrontFee: 1020, annualFee: 10521 },
        { id: 94, name: "Wesley College, Perth", address: "40 Coode St- South Perth WA 6151", state: "WA", upfrontFee: 7276, annualFee: 20001 },
        { id: 95, name: "Methodist Ladies College, Perth", address: "356 Stirling Hwy- Claremont WA 6010", state: "WA", upfrontFee: 5320, annualFee: 21203 },
        { id: 96, name: "St Marks Anglican Community School", address: "St Marks Dr- Hillarys WA 6025", state: "WA", upfrontFee: 2030, annualFee: 7251 },
        { id: 97, name: "Aquinas College, Perth", address: "58 Mount Henry Rd- Salter Point WA 6152", state: "WA", upfrontFee: 2832, annualFee: 14013 },
        { id: 98, name: "Trinity College, Perth", address: "2 Trinity Ave- East Perth WA 6004", state: "WA", upfrontFee: 2243, annualFee: 13602 },
        { id: 99, name: "Sacred Heart College", address: "Hocking Parade- Sorrento WA 6020", state: "WA", upfrontFee: 805, annualFee: 8220 },
        { id: 100, name: "Newman College Perth", address: "216 Empire Ave- Churchlands WA 6018", state: "WA", upfrontFee: 1110, annualFee: 5715 },
        { id: 101, name: "Kingsway Christian College", address: "157 Kingsway- Darch WA 6065", state: "WA", upfrontFee: 1320, annualFee: 7288 },
        { id: 102, name: "Canberra Grammar School", address: "40 Monaro Cres- Red Hill ACT 2603", state: "ACT", upfrontFee: 2975, annualFee: 18753 },
        { id: 103, name: "Radford College", address: "1 College St- Bruce ACT 2617", state: "ACT", upfrontFee: 950, annualFee: 12307 },
        { id: 104, name: "Canberra Girls Grammar School", address: "Melbourne Ave- Deakin ACT 2600", state: "ACT", upfrontFee: 150, annualFee: 16942 },
        { id: 105, name: "Burgmann Anglican School", address: "Gungahlin Dr & The Valley Avenue- Gungahlin ACT 291", state: "ACT", upfrontFee: 875, annualFee: 8413 },
        { id: 106, name: "Brindabella Christian College", address: "136 Brigalow St- Lyneham ACT 2602", state: "ACT", upfrontFee: 700, annualFee: 5874 },
        { id: 107, name: "Marist College", address: "27 Marr St- Pearce ACT 2607", state: "ACT", upfrontFee: 400, annualFee: 8644 },
        { id: 108, name: "Orana Steiner School", address: "Unwin Place- ACT 2611", state: "ACT", upfrontFee: 550, annualFee: 6467 },
        { id: 109, name: "Merici College", address: "Wise St- Braddon ACT 2612", state: "ACT", upfrontFee: 50, annualFee: 6277 },
        { id: 110, name: "Emmaus Christian School", address: "73 Davenport St- Dickson ACT 2602", state: "ACT", upfrontFee: 300, annualFee: 6292 },
        { id: 111, name: "The Friends School, Hobart", address: "23 Commercial Rd- North Hobart TAS 7000", state: "TAS", upfrontFee: 1200, annualFee: 14254 },
        { id: 112, name: "Fahan School", address: "Fisher Avenue- Lower Sandy Bay TAS 7005", state: "TAS", upfrontFee: 2100, annualFee: 12412 },
        { id: 113, name: "St Michael's Collegiate School", address: "218 Macquarie St- Hobart TAS 7000", state: "TAS", upfrontFee: 1110, annualFee: 12908 },
        { id: 114, name: "The Hutchins School", address: "71 Nelson Rd- Sandy Bay TAS 7005", state: "TAS", upfrontFee: 1610, annualFee: 13400 },
        { id: 115, name: "St Mary's College, Hobart", address: "164 Harrington St- Hobart TAS 7000", state: "TAS", upfrontFee: 0, annualFee: 3958 },
        { id: 116, name: "Launceston Chruch Grammar School", address: "36 Button St- Mowbray TAS 7248", state: "TAS", upfrontFee: 100, annualFee: 12900 },
        { id: 117, name: "Launceston Christian School", address: " 452A W Tamar Hwy- Riverside TAS 7250", state: "TAS", upfrontFee: 1300, annualFee: 4802 }
    ];

    /*$scope.schoolObject_NSW = [{ id: 0, name: "Sydney Grammar School Darlinghurst", address: "College St- Darlinghurst NSW 2010", state: "NSW", upfrontFee: 5489, annualFee: 32644 },
        { id: 1, name: "PLC Sydney", address: "Boundary St- Croydon NSW 2132", state: "NSW", upfrontFee: 3415, annualFee: 24411 },
        { id: 2, name: "SCEGGS Darlinghurst", address: "215 Forbes St- Darlinghurst NSW 2010", state: "NSW", upfrontFee: 4950, annualFee: 28348 },
        { id: 3, name: "The Scotts College Sydney", address: "Victoria Rd- Bellevue Hill NSW 2023", state: "NSW", upfrontFee: 5500, annualFee: 33925 },
        { id: 4, name: "Pymble Ladies College", address: "Avon Rd- Pymble NSW 2073", state: "NSW", upfrontFee: 3430, annualFee: 24002 },
        { id: 5, name: "Ascham School", address: "188 New South Head Rd- Edgecliff- NSW 2027", state: "NSW", upfrontFee: 6300, annualFee: 32000 },
        { id: 6, name: "Abbotsleigh", address: "1666 Pacific Highway- Wahroonga- NSW 2076", state: "NSW", upfrontFee: 1970, annualFee: 28640 },
        { id: 7, name: "St Aloysius College", address: "47 Upper Pitt Street- Milsons Point 2061 NSW Australia", state: "NSW", upfrontFee: 2650, annualFee: 16278 },
        { id: 8, name: "Meridan School", address: "10-12 Redmyre Road- Strathfield NSW 2135", state: "NSW", upfrontFee: 1825, annualFee: 28340 },
        { id: 9, name: "Sydney Church of England Grammar School (SHORE)", address: "Blue Street- North Sydney- NSW- 2060- Australia", state: "NSW", upfrontFee: 2400, annualFee: 24126 },
        { id: 10, name: "Cranbrook School", address: "5 Victoria Road- Bellevue Hill NSW 2023 Australia", state: "NSW", upfrontFee: 7300, annualFee: 28325 },
        { id: 11, name: "Knox Grammar School", address: "7 Woodville Ave- Wahroonga 2076 NSW Australia", state: "NSW", upfrontFee: 3000, annualFee: 29430 },
        { id: 12, name: "The Kings School", address: "87-129 PENNANT HILLS ROAD- NORTH PARRAMATTA- NSW 2151- AUSTRALIA", state: "NSW", upfrontFee: 3850, annualFee: 25345 },
        { id: 13, name: "ST Ignatius' College", address: "1 Tambourine Bay Road- NSW Lane Cove", state: "NSW", upfrontFee: 4530, annualFee: 23880 },
        { id: 14, name: "St Joseph's College", address: "Mark Street- Hunters Hill- NSW 2110", state: "NSW", upfrontFee: 3300, annualFee: 29040 },
        { id: 15, name: "Loreto Normanhurst", address: "91-93 Pennant Hills Road- Normanhurst- Sydney- NSW 2076", state: "NSW", upfrontFee: 3330, annualFee: 19179 },
        { id: 16, name: "Loreto Kirribilli", address: "85 Carabella Street- Kirribilli NSW 2061- Australia", state: "NSW", upfrontFee: 3220, annualFee: 15645 },
        { id: 17, name: "Queenswood School for Girls", address: "47 Mandolong Rd- Mosman NSW 2088", state: "NSW", upfrontFee: 4220, annualFee: 25171 },
        { id: 18, name: "Roseville College", address: "27 Bancroft Avenue Roseville NSW 2069 Australia", state: "NSW", upfrontFee: 1220, annualFee: 20735 },
        { id: 19, name: "Parramatta Marist High School", address: "2 DARCY ROAD- WESTMEAD NSW AUSTRALIA 2145", state: "NSW", upfrontFee: 1220, annualFee: 4473 },
        { id: 20, name: "Barker College", address: "91 Pacific Highway Hornsby NSW 2077", state: "NSW", upfrontFee: 3800, annualFee: 25140 }
    ];*/
    /*$scope.schoolObject_VIC = [{ id: 21, name: "Ruyton Girls' School, Kew.", address: "12 Selbourne Rd- Kew VIC 3101", state: "VIC", upfrontFee: 1610, annualFee: 22360 },
        { id: 22, name: "Shelford Girls' Grammar, Caulfield.", address: "3 Hood Cres- Caulfield VIC 3161", state: "VIC", upfrontFee: 1100, annualFee: 25518 },
        { id: 23, name: "Fintona Girls' School, Balwyn.", address: "79 Balwyn Rd- Balwyn VIC 3103", state: "VIC", upfrontFee: 1150, annualFee: 20399 },
        { id: 24, name: "Lauriston Girls' School, Aramadale.", address: "38 Huntingtower Rd- Armadale VIC 3143", state: "VIC", upfrontFee: 1100, annualFee: 27160 },
        { id: 25, name: "Loreto Mandeville Hall, Toorak.", address: "10 Mandeville Cres- Toorak VIC 3142", state: "VIC", upfrontFee: 1900, annualFee: 22398 },
        { id: 26, name: "Prebyterian Ladies' College, Burwood.", address: "141 Burwood Hwy- Burwood VIC 3125", state: "VIC", upfrontFee: 1300, annualFee: 23479 },
        { id: 27, name: "Camberwell Girls' Grammar School, Canterbury.", address: " 2 Torrington St- Canterbury VIC 3126", state: "VIC", upfrontFee: 1100, annualFee: 19051 },
        { id: 28, name: "Melbourne Girls Grammar School, South Yarra.", address: "86 Anderson St- South Yarra VIC 3141", state: "VIC", upfrontFee: 1650, annualFee: 27746 },
        { id: 29, name: "Mentone Girls' Grammar School, Mentone.", address: "11 Mentone Parade- Mentone VIC 3194", state: "VIC", upfrontFee: 1100, annualFee: 22354 },
        { id: 30, name: "Korowa Anglican Girls' School Glen Iris.", address: "10-16 Ranfurlie Cres- Glen Iris VIC 3146", state: "VIC", upfrontFee: 900, annualFee: 27138 },
        { id: 31, name: "Camberwell Grammar School, Canterbury.", address: "55 Mont Albert Rd- Canterbury VIC 3126", state: "VIC", upfrontFee: 1330, annualFee: 25600 },
        { id: 32, name: "Scotch College, Hawthorn. ", address: "1 Morrison St- Hawthorn VIC 3122", state: "VIC", upfrontFee: 1600, annualFee: 29912 },
        { id: 33, name: "Melbourne Grammar School, South Yarra.", address: "355 St Kilda Rd- Melbourne VIC 3004", state: "VIC", upfrontFee: 3900, annualFee: 24885 },
        { id: 34, name: "Caulfield Grammar School, St Kilda", address: "217 Glen Eira Road- East St. Kilda- Melbourne- Victoria 3183", state: "VIC", upfrontFee: 2100, annualFee: 23789 },
        { id: 35, name: "Haileybury College, Keysborough.", address: "855 Springvale Road Keysborough VIC 3173", state: "VIC", upfrontFee: 2500, annualFee: 24702 },
        { id: 36, name: "Xavier College, Kew.", address: "135 Barkers Road- Melbourne- Kew- Victoria", state: "VIC", upfrontFee: 945, annualFee: 21957 },
        { id: 37, name: "Trinity Grammar School, Kew.", address: "40 Charles St- Kew- Melbourne Victoria 3101", state: "VIC", upfrontFee: 2360, annualFee: 26349 },
        { id: 38, name: "St Kevin's College, Toorak.", address: "31 Moonga Rd- Toorak VIC 3142", state: "VIC", upfrontFee: 3000, annualFee: 16290 },
        { id: 39, name: "Brighton Grammar School, Brighton", address: "90 Outer Cres- Brighton VIC 3186", state: "VIC", upfrontFee: 2200, annualFee: 25247 },
        { id: 40, name: "Firbank Grammar School, Brighton", address: "51 Outer Crescent- Brighton VIC 3186", state: "VIC", upfrontFee: 1100, annualFee: 24769 },
        { id: 41, name: "St Leonard's College, Brighton East.", address: "163 South Road- Brighton East VIC 3187", state: "VIC", upfrontFee: 1800, annualFee: 23415 }
    ];*/
    /*$scope.schoolObject_QLD = [{ id: 42, name: "Brisbane Grammar School", address: "24 Gregory Terrace- Spring Hill QLD 4000", state: "QLD", upfrontFee: 2550, annualFee: 23000 },
        { id: 43, name: "Brisbane Girls Grammer School", address: "70 Gregory Terrace- Spring Hill QLD 4000", state: "QLD", upfrontFee: 2040, annualFee: 22520 },
        { id: 44, name: "Ormiston College", address: "97 Dundas St W- Ormiston QLD 4160", state: "QLD", upfrontFee: 795, annualFee: 2527 },
        { id: 45, name: "Somerville House", address: "17 Graham St- South Brisbane QLD 4101", state: "QLD", upfrontFee: 1530, annualFee: 18292 },
        { id: 46, name: "Brisbane Boys College", address: "Kensington Terrace- Toowong QLD 4066", state: "QLD", upfrontFee: 1960, annualFee: 18434 },
        { id: 47, name: "St Aidan's Anglican Girls School", address: "11 Ruthven St- Corinda QLD 4075", state: "QLD", upfrontFee: 1300, annualFee: 17272 },
        { id: 48, name: "Anglican Church Grammar School", address: "Oaklands Parade- East Brisbane QLD 4169", state: "QLD", upfrontFee: 1930, annualFee: 18813 },
        { id: 49, name: "Clayfield College", address: "23 Gregory Street- Clayfield QLD 4011", state: "QLD", upfrontFee: 1135, annualFee: 17031 },
        { id: 50, name: "Cannon Hill Anglican College", address: "Junction Rd- Cannon Hill QLD 4170", state: "QLD", upfrontFee: 1250, annualFee: 10386 },
        { id: 51, name: "Sheldon College", address: "Taylor Road- Sheldon- QLD 4157", state: "QLD", upfrontFee: 660, annualFee: 11479 },
        { id: 52, name: "St Margarets Anglican Girls School", address: "11 Petrie St- Ascot QLD 4007", state: "QLD", upfrontFee: 1220, annualFee: 17762 },
        { id: 53, name: "Hillbrook Anglican School", address: "45 Hurdcotte Street Enoggera QLD 4051", state: "QLD", upfrontFee: 1610, annualFee: 11092 },
        { id: 54, name: "st peters lutheran college", address: "66 Harts Rd- Indooroopilly QLD 4068", state: "QLD", upfrontFee: 1100, annualFee: 15806 },
        { id: 55, name: "Moreton Bay College", address: "450 Wondall Rd- Manly West QLD 4179", state: "QLD", upfrontFee: 1100, annualFee: 12532 },
        { id: 56, name: "St Rita's College, Clayfield", address: "41 Enderley Rd- Clayfield QLD 4011", state: "QLD", upfrontFee: 1100, annualFee: 7120 },
        { id: 57, name: "The Southport School", address: "2 Winchester St- Southport QLD 4215", state: "QLD", upfrontFee: 1500, annualFee: 15030 },
        { id: 58, name: "St Joseph's College Gregory Terrace", address: "Gregory Terrace- Brisbane- QLD 4000- Australia", state: "QLD", upfrontFee: 2420, annualFee: 8215 },
        { id: 59, name: "The Lakes College", address: "2 College St- North Lakes QLD 4509", state: "QLD", upfrontFee: 500, annualFee: 8415 },
        { id: 60, name: "Redeemer Lutheran College", address: "745 Rochedale Rd- Rochedale QLD 4123", state: "QLD", upfrontFee: 700, annualFee: 8979 },
        { id: 61, name: "Moreton Bay Boys College", address: "302 Manly Rd- Manly West QLD 4179", state: "QLD", upfrontFee: 1100, annualFee: 11023 }
    ];*/
    /*$scope.schoolObject_SA = [{ id: 62, name: "Wilderness School, Medindie.", address: "30 Hawkers Rd- Medindie SA 5081", state: "SA", upfrontFee: 1050, annualFee: 18888 },
        { id: 63, name: "St Peter's College ", address: "57 Hackney Rd- Hackney SA 5069", state: "SA", upfrontFee: 2600, annualFee: 20520 },
        { id: 64, name: "St Peter's Girls Collegiate Girls' School", address: "Stonyfell Rd- Stonyfell SA 5066", state: "SA", upfrontFee: 970, annualFee: 17285 },
        { id: 65, name: "Walford Anglican School for Girls", address: "316 Unley Rd- Hyde Park SA 5061", state: "SA", upfrontFee: 1095, annualFee: 19301 },
        { id: 66, name: "Prince Alfred College", address: "23 Dequetteville Terrace- Kent Town SA 5067", state: "SA", upfrontFee: 1100, annualFee: 17319 },
        { id: 67, name: "Seymour College", address: "546 Portrush Rd- Glen Osmond SA 5064", state: "SA", upfrontFee: 1050, annualFee: 19679 },
        { id: 68, name: "Pulteney Grammar School", address: "190 South Terrace ADELAIDE SA 5000", state: "SA", upfrontFee: 850, annualFee: 18946 },
        { id: 69, name: "St Aloysius College, Adelaide", address: "53 Wakefield St- Adelaide SA 5000", state: "SA", upfrontFee: 600, annualFee: 7636 },
        { id: 70, name: "St Dominics Priory College", address: "119/139 Molesworth St- North Adelaide SA 5006", state: "SA", upfrontFee: 0, annualFee: 6674 },
        { id: 71, name: "St John's Grammar School", address: "29 Gloucester Ave- Belair SA 5052", state: "SA", upfrontFee: 688, annualFee: 11811 },
        { id: 72, name: "Woodcroft College", address: "143-173 Bains Rd- Morphett Vale SA 5162", state: "SA", upfrontFee: 755, annualFee: 6297 },
        { id: 73, name: "St Ignatious College, Adelaide", address: "2 Manresa Ct- Athelstone SA 5076", state: "SA", upfrontFee: 975, annualFee: 14013 },
        { id: 74, name: "Pedare Christian College", address: "2-30 Surrey Farm Dr- Golden Grove SA 5125", state: "SA", upfrontFee: 150, annualFee: 7502 },
        { id: 75, name: "Westminster School", address: "1-27 Alison Avenue- Marion- South Australia ", state: "SA", upfrontFee: 800, annualFee: 17932 },
        { id: 76, name: "Kings Baptist Grammar School", address: "no address", state: "SA", upfrontFee: 175, annualFee: 0 },
        { id: 77, name: "Scotch College Adelaide", address: "Carruth Road- Torrens Park South Australia 5062", state: "SA", upfrontFee: 1150, annualFee: 19668 },
        { id: 78, name: "Concordia College", address: "45 Cheltenham St- Highgate SA 5063", state: "SA", upfrontFee: 75, annualFee: 8820 },
        { id: 79, name: "Pembroke School", address: "342 The Parade- Kensington Park SA 5068", state: "SA", upfrontFee: 860, annualFee: 19690 },
        { id: 80, name: "Loreto College, Marryatville", address: "316 Portrush Rd- Marryatville SA 5068", state: "SA", upfrontFee: 745, annualFee: 14664 },
        { id: 81, name: "Trinity College, Gawler", address: "Alexander Ave- Evanston South SA 5116", state: "SA", upfrontFee: 540, annualFee: 4622 }
    ];*/
    /*$scope.schoolObject_WA = [{ id: 82, name: "Hale School", address: "160 Hale Rd- Wembley Downs WA 6019", state: "WA", upfrontFee: 8250, annualFee: 21450 },
        { id: 83, name: "Christ Church Grammar School", address: "Queenslea Dr- Claremont WA 6010", state: "WA", upfrontFee: 6700, annualFee: 23088 },
        { id: 84, name: "All Saints College", address: "Ewing Ave.- Bull Creek WA 6149", state: "WA", upfrontFee: 5423, annualFee: 16534 },
        { id: 85, name: "St Mary's Anglican Girls School", address: "75 Elliott Rd- Karrinyup WA 6018", state: "WA", upfrontFee: 5545, annualFee: 18394 },
        { id: 86, name: "St Hilda's Anglican Girls School", address: "26 Bay View Terrace- Mosman Park WA 6012", state: "WA", upfrontFee: 4959, annualFee: 20284 },
        { id: 87, name: "Presbyterian Ladies' College, Perth", address: "14 McNeil St- Peppermint Grove WA 6011", state: "WA", upfrontFee: 4950, annualFee: 20982 },
        { id: 88, name: "Perth College", address: "31 Lawley Crescent- Mount Lawley WA 6050", state: "WA", upfrontFee: 5742, annualFee: 18701 },
        { id: 89, name: "Guildford Grammar School ", address: "11 Terrace Rd- Guildford WA 6055", state: "WA", upfrontFee: 2925, annualFee: 18073 },
        { id: 90, name: "Penrhos College", address: "6 Morrison Street- Como WA 6152", state: "WA", upfrontFee: 5489, annualFee: 19442 },
        { id: 91, name: "Scotch College, Perth", address: "76 Shenton Rd- Swanbourne WA 6010", state: "WA", upfrontFee: 6687, annualFee: 23499 },
        { id: 92, name: "John XXIII College, Perth", address: "Mooro Dr- Mount Claremont WA 6010", state: "WA", upfrontFee: 2110, annualFee: 7710 },
        { id: 93, name: "Santa Maria College", address: "18 Stoneham Rd- Attadale WA 6156", state: "WA", upfrontFee: 1020, annualFee: 10521 },
        { id: 94, name: "Wesley College, Perth", address: "40 Coode St- South Perth WA 6151", state: "WA", upfrontFee: 7276, annualFee: 20001 },
        { id: 95, name: "Methodist Ladies College, Perth", address: "356 Stirling Hwy- Claremont WA 6010", state: "WA", upfrontFee: 5320, annualFee: 21203 },
        { id: 96, name: "St Marks Anglican Community School", address: "St Marks Dr- Hillarys WA 6025", state: "WA", upfrontFee: 2030, annualFee: 7251 },
        { id: 97, name: "Aquinas College, Perth", address: "58 Mount Henry Rd- Salter Point WA 6152", state: "WA", upfrontFee: 2832, annualFee: 14013 },
        { id: 98, name: "Trinity College, Perth", address: "2 Trinity Ave- East Perth WA 6004", state: "WA", upfrontFee: 2243, annualFee: 13602 },
        { id: 99, name: "Sacred Heart College", address: "Hocking Parade- Sorrento WA 6020", state: "WA", upfrontFee: 805, annualFee: 8220 },
        { id: 100, name: "Newman College Perth", address: "216 Empire Ave- Churchlands WA 6018", state: "WA", upfrontFee: 1110, annualFee: 5715 },
        { id: 101, name: "Kingsway Christian College", address: "157 Kingsway- Darch WA 6065", state: "WA", upfrontFee: 1320, annualFee: 7288 }
    ];*/
    /*$scope.schoolObject_ACT = [{ id: 102, name: "Canberra Grammar School", address: "40 Monaro Cres- Red Hill ACT 2603", state: "ACT", upfrontFee: 2975, annualFee: 18753 },
        { id: 103, name: "Radford College", address: "1 College St- Bruce ACT 2617", state: "ACT", upfrontFee: 950, annualFee: 12307 },
        { id: 104, name: "Canberra Girls Grammar School", address: "Melbourne Ave- Deakin ACT 2600", state: "ACT", upfrontFee: 150, annualFee: 16942 },
        { id: 105, name: "Burgmann Anglican School", address: "Gungahlin Dr & The Valley Avenue- Gungahlin ACT 291", state: "ACT", upfrontFee: 875, annualFee: 8413 },
        { id: 106, name: "Brindabella Christian College", address: "136 Brigalow St- Lyneham ACT 2602", state: "ACT", upfrontFee: 700, annualFee: 5874 },
        { id: 107, name: "Marist College", address: "27 Marr St- Pearce ACT 2607", state: "ACT", upfrontFee: 400, annualFee: 8644 },
        { id: 108, name: "Orana Steiner School", address: "Unwin Place- ACT 2611", state: "ACT", upfrontFee: 550, annualFee: 6467 },
        { id: 109, name: "Merici College", address: "Wise St- Braddon ACT 2612", state: "ACT", upfrontFee: 50, annualFee: 6277 },
        { id: 110, name: "Emmaus Christian School", address: "73 Davenport St- Dickson ACT 2602", state: "ACT", upfrontFee: 300, annualFee: 6292 }
    ];*/
    /*$scope.schoolObject_TAS = [{ id: 111, name: "The Friends School, Hobart", address: "23 Commercial Rd- North Hobart TAS 7000", state: "TAS", upfrontFee: 1200, annualFee: 14254 },
        { id: 112, name: "Fahan School", address: "Fisher Avenue- Lower Sandy Bay TAS 7005", state: "TAS", upfrontFee: 2100, annualFee: 12412 },
        { id: 113, name: "St Michael's Collegiate School", address: "218 Macquarie St- Hobart TAS 7000", state: "TAS", upfrontFee: 1110, annualFee: 12908 },
        { id: 114, name: "The Hutchins School", address: "71 Nelson Rd- Sandy Bay TAS 7005", state: "TAS", upfrontFee: 1610, annualFee: 13400 },
        { id: 115, name: "St Mary's College, Hobart", address: "164 Harrington St- Hobart TAS 7000", state: "TAS", upfrontFee: 0, annualFee: 3958 },
        { id: 116, name: "Launceston Chruch Grammar School", address: "36 Button St- Mowbray TAS 7248", state: "TAS", upfrontFee: 100, annualFee: 12900 },
        { id: 117, name: "Launceston Christian School", address: " 452A W Tamar Hwy- Riverside TAS 7250", state: "TAS", upfrontFee: 1300, annualFee: 4802 }
    ];*/

/*    $scope.schoolObjectsShow = $scope.schoolObject_NSW;
    $scope.stateListOb = [{ id: 0, name: "NSW" },
        { id: 1, name: "VIC" },
        { id: 2, name: "QLD" },
        { id: 3, name: "SA" },
        { id: 4, name: "WA" },
        { id: 5, name: "ACT" },
        { id: 6, name: "TAS" }
    ];
    $scope.portfolioListOb = [{ id: 0, name: "Conservative Cautious" },
        { id: 1, name: "Balanced Optimistic" },
        { id: 2, name: "Growth Ambitious" }
    ];

    $scope.infoShow = function(value) {
        if (value) {
            document.getElementsByClassName("information-overlay")[0].style.visibility = "visible";
            document.getElementsByClassName("information-overlay")[0].style.zIndex = "9999";
            document.getElementsByClassName("information-overlay")[0].style.position = "inline-block";
            document.getElementsByClassName("information-overlay")[0].style.height = "" + (document.getElementsByClassName("otrp-calculator")[0].clientHeight - 10) + "px";
        } else {
            document.getElementsByClassName("information-overlay")[0].style.visibility = "hidden";
        }
    }*/
/*
    $scope.oneOpen = true;
    $scope.twoOpen = false;
    $scope.threeOpen = false;

    $scope.personalDetails = {
        firstName: "Dexter",
        lastName: "Payne",
        email: "dexter@gmail.com",
        mobile: 412121212,
        postalCode: 1234
    };*/
    $scope.forms = {};
    $scope.c1Name = privateSchoolObj.firstChild.c1Name;
    $scope.c2Name = privateSchoolObj.secondChild.c2Name;
    $scope.c3Name = privateSchoolObj.thirdChild.c3Name;
    $scope.c4Name = privateSchoolObj.fourthChild.c4Name;
    $scope.c5Name = privateSchoolObj.fifthChild.c5Name;
    $scope.c6Name = privateSchoolObj.sixthChild.c6Name;
    $scope.nameArray = [$scope.c1Name, $scope.c2Name, $scope.c3Name, $scope.c4Name, $scope.c5Name, $scope.c6Name];
    $scope.chartOneOpen = true;
    $scope.alterOption = false;

    $scope.studyingOption1 = false;
    $scope.studyingOption2 = false;
    $scope.studyingOption3 = false;
    $scope.studyingOption4 = false;
    $scope.studyingOption5 = false;
    $scope.studyingOption6 = false;

/*    $scope.indexlevel = 0.04;

    $scope.portAnnualReturn = [privateSchoolObj.spPort];

    var spState = "0",
        spPort = "0",
        school1 = "0",
        school2 = "0",
        school3 = "0",
        school4 = "0",
        school5 = "0",
        school6 = "0";
    var schoolArray = [school1, school2, school3, school4, school5, school6];
    var publicSchol_avgCostArray = [1615.33, 1395, 471.25, 762.5, 950, 357.14, 390];
    $scope.publicSchoolFees = publicSchol_avgCostArray[Number(spState)];
    $scope.showPortfolioOption = false;
       $scope.publicSchoolFees = publicSchol_avgCostArray[privateSchoolObj.spState];*/
 /*   $('.spState').on('change', function() {

        spState = $('.spState option:selected').val();
     
        switch (Number(spState)) {
            case 0:
                $scope.$apply(function() {
                    $scope.schoolObjectsShow = $scope.schoolObject_NSW;
                });
                break;
            case 1:
                $scope.$apply(function() {
                    $scope.schoolObjectsShow = $scope.schoolObject_VIC;
                });
                // $scope.schoolObjectsShow = $scope.schoolObject_VIC;
                break;

            case 2:
                $scope.$apply(function() {

                    $scope.schoolObjectsShow = $scope.schoolObject_QLD;
                });
                break;
            case 3:
                $scope.$apply(function() {

                    $scope.schoolObjectsShow = $scope.schoolObject_SA;
                });
                break;
            case 4:
                $scope.$apply(function() {

                    $scope.schoolObjectsShow = $scope.schoolObject_WA;
                });
                break;
            case 5:
                $scope.$apply(function() {

                    $scope.schoolObjectsShow = $scope.schoolObject_ACT;
                });
                break;
            case 6:
                $scope.$apply(function() {

                    $scope.schoolObjectsShow = $scope.schoolObject_TAS;
                });
                break;
        };
        console.log("sel", $scope.schoolObjectsShow);
        $('.sp1').selectpicker('refresh');
        $('.sp2').selectpicker('refresh');
        $('.sp3').selectpicker('refresh');
        $('.sp4').selectpicker('refresh');
        $('.sp5').selectpicker('refresh');
        $('.sp6').selectpicker('refresh');
        $timeout(0);

    });*/

  /*  $('.sp1').on('refreshed.bs.select', function(e) {
        console.log(e, "refreshed");
        $timeout(0);
    });*/

  /*  $('input:radio[name=portfolioRadio]').change(function() {
        if (this.value == '0') {
            $scope.porfolioChange(0);
        } else if (this.value == '1') {
            $scope.porfolioChange(1);
        } else {
            $scope.porfolioChange(2);
        }

        $timeout(0);

    });*/

/*
    $scope.porfolioChange = function(val) {
        console.log("port", val);
        spPort = val;
        $timeout(0);
    };*/
     schoolArray[0]= privateSchoolObj.firstChild.schoolId1; 
     schoolArray[1]= privateSchoolObj.secondChild.schoolId2;
    schoolArray[2] = privateSchoolObj.thirdChild.schoolId3;
    schoolArray[3] = privateSchoolObj.fourthChild.schoolId4;
    schoolArray[4] = privateSchoolObj.fifthChild.schoolId5;
    schoolArray[5] = privateSchoolObj.sixthChild.schoolId6;
/*    
    $('.sp1').on('change', function() {
        schoolArray[0] = $('.sp1 option:selected').val();
        console.log("schoolArray[0]", schoolArray[0])
            //calculateFinal();
    });

    $('.sp2').on('change', function() {
        schoolArray[1] = $('.sp2 option:selected').val();
        //console.log("schoolArray[1]", schoolArray[1])
        //calculateFinal();
    });

    $('.sp3').on('change', function() {
        schoolArray[2] = $('.sp3 option:selected').val();
        //console.log("schoolArray[2]", schoolArray[2])
        //calculateFinal();
    });

    $('.sp4').on('change', function() {
        schoolArray[3] = $('.sp4 option:selected').val();
        //console.log("schoolArray[3]", schoolArray[3])
        //calculateFinal();
    });

    $('.sp5').on('change', function() {
        schoolArray[4] = $('.sp5 option:selected').val();
        //console.log("schoolArray[4]", schoolArray[4])
        //calculateFinal();
    });

    $('.sp6').on('change', function() {
        schoolArray[5] = $('.sp6 option:selected').val();
        //console.log("schoolArray[5]", schoolArray[5])
        //calculateFinal();
    });*/

    var initDate = new Date();
    $scope.begnYearInvestment = privateSchoolObj.begnYearInvestment;
    $scope.numChildren = privateSchoolObj.numChildren;
   /* $scope.investmentReturn = 5000;*/
    $scope.contStartYear = privateSchoolObj.contStartYear;
    $scope.schoolYear1 = privateSchoolObj.firstChild.schoolYear1;
    $scope.schoolDuration1 = privateSchoolObj.firstChild.schoolDuration1;
    $scope.schoolYear2 = privateSchoolObj.secondChild.schoolYear2;
    $scope.schoolDuration2 = privateSchoolObj.secondChild.schoolDuration2;
    $scope.schoolYear3 = privateSchoolObj.thirdChild.schoolYear3;
    $scope.schoolDuration3 = privateSchoolObj.thirdChild.schoolDuration3;
    $scope.schoolYear4 = privateSchoolObj.fourthChild.schoolYear4;
    $scope.schoolDuration4 = privateSchoolObj.fourthChild.schoolDuration4;
    $scope.schoolYear5 = privateSchoolObj.fifthChild.schoolYear5;
    $scope.schoolDuration5 = privateSchoolObj.fifthChild.schoolDuration5;
    $scope.schoolYear6 = privateSchoolObj.sixthChild.schoolYear6;
    $scope.schoolDuration6 = prvateSchoolObj.sixthChild.schoolDuration6;
    $scope.endYearInvestment = Number($scope.schoolYear2) + Number($scope.schoolDuration2)
/*
    var begnYearInvestmentSlider = document.getElementById("begnYearInvestmentSlider"),
        contStartYearSlider = document.getElementById("contStartYearSlider"),
        numChildrenSlider = document.getElementById("numChildrenSlider"),
        investmentReturnSlider = document.getElementById("investmentReturnSlider"),
        schoolYear1Slider = document.getElementById("schoolYear1Slider"),
        schoolDuration1Slider = document.getElementById("schoolDuration1Slider"),
        schoolYear2Slider = document.getElementById("schoolYear2Slider"),
        schoolDuration2Slider = document.getElementById("schoolDuration2Slider"),
        schoolYear3Slider = document.getElementById("schoolYear3Slider"),
        schoolDuration3Slider = document.getElementById("schoolDuration3Slider"),
        schoolYear4Slider = document.getElementById("schoolYear4Slider"),
        schoolDuration4Slider = document.getElementById("schoolDuration4Slider"),
        schoolYear5Slider = document.getElementById("schoolYear5Slider"),
        schoolDuration5Slider = document.getElementById("schoolDuration5Slider"),
        schoolYear6Slider = document.getElementById("schoolYear6Slider"),
        schoolDuration6Slider = document.getElementById("schoolDuration6Slider");

    var begnYearInvestmentInput = document.getElementById("begnYearInvestmentInput"),
        contStartYearInput = document.getElementById("contStartYearInput"),
        numChildrenInput = document.getElementById("numChildrenInput"),
        investmentReturnInput = document.getElementById("investmentReturnInput"),
        schoolYear1Input = document.getElementById("schoolYear1Input"),
        schoolDuration1Input = document.getElementById("schoolDuration1Input"),
        schoolYear2Input = document.getElementById("schoolYear2Input"),
        schoolDuration2Input = document.getElementById("schoolDuration2Input"),
        schoolYear3Input = document.getElementById("schoolYear3Input"),
        schoolDuration3Input = document.getElementById("schoolDuration3Input"),
        schoolYear4Input = document.getElementById("schoolYear4Input"),
        schoolDuration4Input = document.getElementById("schoolDuration4Input"),
        schoolYear5Input = document.getElementById("schoolYear5Input"),
        schoolDuration5Input = document.getElementById("schoolDuration5Input"),
        schoolYear6Input = document.getElementById("schoolYear6Input"),
        schoolDuration6Input = document.getElementById("schoolDuration6Input");*/
/*
    noUiSlider.create(begnYearInvestmentSlider, {
        start: $scope.begnYearInvestment,
        connect: 'lower',
        range: {
            min: [initDate.getFullYear()],
            max: [$scope.endYearInvestment],
        },
        format: wNumb({
            decimals: 0,
        }),
        step: 1
    });

    noUiSlider.create(contStartYearSlider, {
        start: $scope.contStartYear,
        connect: 'lower',
        range: {
            min: [initDate.getFullYear()],
            max: [$scope.endYearInvestment],
        },
        format: wNumb({
            decimals: 0,
        }),
        step: 1
    });

    noUiSlider.create(numChildrenSlider, {
        start: $scope.numChildren,
        connect: 'lower',
        range: {
            min: [1],
            max: [6]
        },
        step: 1,
        format: wNumb({
            decimals: 0
        })
    });

    noUiSlider.create(investmentReturnSlider, {
        start: $scope.investmentReturn,
        range: {
            min: [1000],
            max: [10000]
        },
        step: 500,
        format: wNumb({
            decimals: 0,
            prefix: '$',
            thousand: ','
        }),
        connect: 'lower'
    });

    noUiSlider.create(schoolYear1Slider, {
        start: $scope.schoolYear1,
        connect: 'lower',
        range: {
            min: [initDate.getFullYear()],
            max: [2050]
        },
        step: 1,
        format: wNumb({
            decimals: 0
        })

    });

    noUiSlider.create(schoolYear2Slider, {
        start: $scope.schoolYear2,
        connect: 'lower',
        range: {
            min: [initDate.getFullYear()],
            max: [2050]
        },
        step: 1,
        format: wNumb({
            decimals: 0
        })

    });

    noUiSlider.create(schoolYear3Slider, {
        start: $scope.schoolYear3,
        connect: 'lower',
        range: {
            min: [initDate.getFullYear()],
            max: [2050]
        },
        step: 1,
        format: wNumb({
            decimals: 0
        })

    });

    noUiSlider.create(schoolYear4Slider, {
        start: $scope.schoolYear4,
        connect: 'lower',
        range: {
            min: [initDate.getFullYear()],
            max: [2050]
        },
        step: 1,
        format: wNumb({
            decimals: 0
        })

    });

    noUiSlider.create(schoolYear5Slider, {
        start: $scope.schoolYear5,
        connect: 'lower',
        range: {
            min: [initDate.getFullYear()],
            max: [2050]
        },
        step: 1,
        format: wNumb({
            decimals: 0
        })

    });

    noUiSlider.create(schoolYear6Slider, {
        start: $scope.schoolYear6,
        connect: 'lower',
        range: {
            min: [initDate.getFullYear()],
            max: [2050]
        },
        step: 1,
        format: wNumb({
            decimals: 0
        })

    });

    noUiSlider.create(schoolDuration1Slider, {
        start: $scope.schoolDuration1,
        connect: 'lower',
        range: {
            min: [1],
            max: [14]
        },
        step: 1,
        format: wNumb({
            decimals: 0
        })

    });

    noUiSlider.create(schoolDuration2Slider, {
        start: $scope.schoolDuration2,
        connect: 'lower',
        range: {
            min: [1],
            max: [14]
        },
        step: 1,
        format: wNumb({
            decimals: 0
        })

    });

    noUiSlider.create(schoolDuration3Slider, {
        start: $scope.schoolDuration3,
        connect: 'lower',
        range: {
            min: [1],
            max: [14]
        },
        step: 1,
        format: wNumb({
            decimals: 0
        })

    });

    noUiSlider.create(schoolDuration4Slider, {
        start: $scope.schoolDuration4,
        connect: 'lower',
        range: {
            min: [1],
            max: [14]
        },
        step: 1,
        format: wNumb({
            decimals: 0
        })

    });

    noUiSlider.create(schoolDuration5Slider, {
        start: $scope.schoolDuration5,
        connect: 'lower',
        range: {
            min: [1],
            max: [14]
        },
        step: 1,
        format: wNumb({
            decimals: 0
        })

    });

    noUiSlider.create(schoolDuration6Slider, {
        start: $scope.schoolDuration6,
        connect: 'lower',
        range: {
            min: [1],
            max: [14]
        },
        step: 1,
        format: wNumb({
            decimals: 0
        })
    });


    begnYearInvestmentSlider.noUiSlider.on('update', function(values, handle) {
        begnYearInvestmentInput.value = values[handle];
        $scope.begnYearInvestment = values[handle];
    });

    begnYearInvestmentSlider.noUiSlider.on('set', function(values, handle) {
        //calculate();
        $timeout(0);
    });

    begnYearInvestmentInput.addEventListener("change", function() {
        begnYearInvestmentSlider.noUiSlider.set(this.value);
    });

    contStartYearSlider.noUiSlider.on('update', function(values, handle) {
        contStartYearInput.value = values[handle];
        $scope.contStartYear = values[handle];
    });
    contStartYearSlider.noUiSlider.on('set', function(values, handle) {
        //calculate();
        $timeout(0);
    });

    contStartYearInput.addEventListener("change", function() {
        contStartYearSlider.noUiSlider.set(this.value);
    });

    numChildrenSlider.noUiSlider.on('update', function(values, handle) {
        numChildrenInput.value = values[handle];
        $scope.numChildren = values[handle];
        changeChildrenInputs(Number($scope.numChildren));
    });
    numChildrenSlider.noUiSlider.on('set', function(values, handle) {
        //calculate();
        $timeout(0);
    });

    numChildrenInput.addEventListener("change", function() {
        numChildrenSlider.noUiSlider.set(numChildrenInput.value);
    });

    function changeChildrenInputs(num) {
        for (var i = 1; i <= num; i++) {
            document.getElementsByClassName("c" + i)[0].style.display = 'block';
            document.getElementsByClassName("h" + i)[0].style.display = 'block';
        }
        for (var i = (num + 1); i <= 6; i++) {
            document.getElementsByClassName("c" + i)[0].style.display = 'none';
            document.getElementsByClassName("h" + i)[0].style.display = 'none';
        }
    }

    investmentReturnSlider.noUiSlider.on('update', function(values, handle) {
        investmentReturnInput.value = values[handle];
        $scope.investmentReturn = values[handle];
    });
    investmentReturnSlider.noUiSlider.on('set', function(values, handle) {
        //calculate();
        $timeout(0);
    });

    investmentReturnInput.addEventListener("change", function() {
        investmentReturnSlider.noUiSlider.set(investmentReturnInput.value);
    });

    schoolYear1Slider.noUiSlider.on('update', function(values, handle) {
        schoolYear1Input.value = values[handle];
        $scope.schoolYear1 = values[handle];
    });
    schoolYear1Slider.noUiSlider.on('set', function(values, handle) {
        tempValue = Number($scope.schoolYear1) + Number($scope.schoolDuration1);
        changeMax(tempValue);
        //calculate();
        $timeout(0);
    });

    schoolYear1Input.addEventListener("change", function() {
        schoolYear1Slider.noUiSlider.set(schoolYear1Input.value);
    });

    schoolYear2Slider.noUiSlider.on('update', function(values, handle) {
        schoolYear2Input.value = values[handle];
        $scope.schoolYear2 = values[handle];
    });
    schoolYear2Slider.noUiSlider.on('set', function(values, handle) {
        tempValue = Number($scope.schoolYear2) + Number($scope.schoolDuration2);
        changeMax(tempValue);
        //calculate();
        $timeout(0);
    });

    schoolYear2Input.addEventListener("change", function() {
        schoolYear2Slider.noUiSlider.set(schoolYear2Input.value);
    });

    schoolYear3Slider.noUiSlider.on('update', function(values, handle) {
        schoolYear3Input.value = values[handle];
        $scope.schoolYear3 = values[handle];
    });
    schoolYear3Slider.noUiSlider.on('set', function(values, handle) {
        tempValue = Number($scope.schoolYear3) + Number($scope.schoolDuration3);
        changeMax(tempValue);
        //calculate();
        $timeout(0);
    });

    schoolYear3Input.addEventListener("change", function() {
        schoolYear3Slider.noUiSlider.set(schoolYear3Input.value);
    });

    schoolYear4Slider.noUiSlider.on('update', function(values, handle) {
        schoolYear4Input.value = values[handle];
        $scope.schoolYear4 = values[handle];
    });
    schoolYear4Slider.noUiSlider.on('set', function(values, handle) {
        tempValue = Number($scope.schoolYear4) + Number($scope.schoolDuration4);
        changeMax(tempValue);
        //calculate();
        $timeout(0);
    });

    schoolYear4Input.addEventListener("change", function() {
        schoolYear4Slider.noUiSlider.set(schoolYear4Input.value);
    });

    schoolYear5Slider.noUiSlider.on('update', function(values, handle) {
        schoolYear5Input.value = values[handle];
        $scope.schoolYear5 = values[handle];
    });
    schoolYear5Slider.noUiSlider.on('set', function(values, handle) {
        tempValue = Number($scope.schoolYear5) + Number($scope.schoolDuration5);
        changeMax(tempValue);
        //calculate();
        $timeout(0);
    });

    schoolYear5Input.addEventListener("change", function() {
        schoolYear5Slider.noUiSlider.set(schoolYear5Input.value);
    });

    schoolYear6Slider.noUiSlider.on('update', function(values, handle) {
        schoolYear6Input.value = values[handle];
        $scope.schoolYear6 = values[handle];
    });
    schoolYear6Slider.noUiSlider.on('set', function(values, handle) {
        tempValue = Number($scope.schoolYear6) + Number($scope.schoolDuration6);
        changeMax(tempValue);
        //calculate();
        $timeout(0);
    });

    schoolYear6Input.addEventListener("change", function() {
        schoolYear6Slider.noUiSlider.set(schoolYear6Input.value);
    });

    schoolDuration1Slider.noUiSlider.on('update', function(values, handle) {
        schoolDuration1Input.value = values[handle];
        $scope.schoolDuration1 = values[handle];
    });
    schoolDuration1Slider.noUiSlider.on('set', function(values, handle) {
        tempValue = Number($scope.schoolYear1) + Number($scope.schoolDuration1);
        changeMax(tempValue);
        //calculate();
        $timeout(0);
    });

    schoolDuration1Input.addEventListener("change", function() {
        schoolDuration1Slider.noUiSlider.set(schoolDuration1Input.value);
    });

    schoolDuration2Slider.noUiSlider.on('update', function(values, handle) {
        schoolDuration2Input.value = values[handle];
        $scope.schoolDuration2 = values[handle];
    });
    schoolDuration2Slider.noUiSlider.on('set', function(values, handle) {
        tempValue = Number($scope.schoolYear2) + Number($scope.schoolDuration2);
        changeMax(tempValue);
        //calculate();
        $timeout(0);
    });

    schoolDuration2Input.addEventListener("change", function() {
        schoolDuration2Slider.noUiSlider.set(schoolDuration2Input.value);
    });

    schoolDuration3Slider.noUiSlider.on('update', function(values, handle) {
        schoolDuration3Input.value = values[handle];
        $scope.schoolDuration3 = values[handle];
    });
    schoolDuration3Slider.noUiSlider.on('set', function(values, handle) {
        tempValue = Number($scope.schoolYear3) + Number($scope.schoolDuration3);
        changeMax(tempValue);
        //calculate();
        $timeout(0);
    });

    schoolDuration3Input.addEventListener("change", function() {
        schoolDuration3Slider.noUiSlider.set(schoolDuration3Input.value);
    });

    schoolDuration4Slider.noUiSlider.on('update', function(values, handle) {
        schoolDuration4Input.value = values[handle];
        $scope.schoolDuration4 = values[handle];
    });
    schoolDuration4Slider.noUiSlider.on('set', function(values, handle) {
        tempValue = Number($scope.schoolYear4) + Number($scope.schoolDuration4);
        changeMax(tempValue);
        //calculate();
        $timeout(0);
    });

    schoolDuration4Input.addEventListener("change", function() {
        schoolDuration4Slider.noUiSlider.set(schoolDuration4Input.value);
    });

    schoolDuration5Slider.noUiSlider.on('update', function(values, handle) {
        schoolDuration5Input.value = values[handle];
        $scope.schoolDuration5 = values[handle];
    });
    schoolDuration5Slider.noUiSlider.on('set', function(values, handle) {
        tempValue = Number($scope.schoolYear5) + Number($scope.schoolDuration5);
        changeMax(tempValue);
        //calculate();
        $timeout(0);
    });

    schoolDuration5Input.addEventListener("change", function() {
        schoolDuration5Slider.noUiSlider.set(schoolDuration5Input.value);
    });

    schoolDuration6Slider.noUiSlider.on('update', function(values, handle) {
        schoolDuration6Input.value = values[handle];
        $scope.schoolDuration6 = values[handle];
    });
    schoolDuration6Slider.noUiSlider.on('set', function(values, handle) {
        tempValue = Number($scope.schoolYear6) + Number($scope.schoolDuration6);
        changeMax(tempValue);
        //calculate();
        $timeout(0);
    });

    schoolDuration6Input.addEventListener("change", function() {
        schoolDuration6Slider.noUiSlider.set(schoolDuration6Input.value);
    });

    $scope.studyingOption1Change = function(studying1) {
        $scope.studyingOption1 = studying1;
        if (studying1) {
            schoolYear1Input.value = $scope.begnYearInvestment;
            schoolYear1Slider.noUiSlider.set(schoolYear1Input.value);
        } else {
            schoolYear1Input.value = Number($scope.begnYearInvestment) + 1;
            schoolYear1Slider.noUiSlider.set(schoolYear1Input.value);
        }
        //calculate();
        $timeout(0);
    }
    $scope.studyingOption2Change = function(studying2) {
        $scope.studyingOption2 = studying2;
        if (studying2) {
            schoolYear2Input.value = $scope.begnYearInvestment;
            schoolYear2Slider.noUiSlider.set(schoolYear2Input.value);
        } else {
            schoolYear2Input.value = Number($scope.begnYearInvestment) + 1;
            schoolYear2Slider.noUiSlider.set(schoolYear2Input.value);
        }
        //calculate();
        $timeout(0);
    }
    $scope.studyingOption3Change = function(studying3) {
        $scope.studyingOption3 = studying3;
        if (studying3) {
            schoolYear3Input.value = $scope.begnYearInvestment;
            schoolYear3Slider.noUiSlider.set(schoolYear3Input.value);
        } else {
            schoolYear3Input.value = Number($scope.begnYearInvestment) + 1;
            schoolYear3Slider.noUiSlider.set(schoolYear3Input.value);
        }
        //calculate();
        $timeout(0);
    }
    $scope.studyingOption4Change = function(studying4) {
        $scope.studyingOption4 = studying4;
        if (studying4) {
            schoolYear4Input.value = $scope.begnYearInvestment;
            schoolYear4Slider.noUiSlider.set(schoolYear4Input.value);
        } else {
            schoolYear4Input.value = Number($scope.begnYearInvestment) + 1;
            schoolYear4Slider.noUiSlider.set(schoolYear4Input.value);
        }
        //calculate();
        $timeout(0);
    }
    $scope.studyingOption5Change = function(studying5) {
        $scope.studyingOption5 = studying5;
        if (studying5) {
            schoolYear5Input.value = $scope.begnYearInvestment;
            schoolYear5Slider.noUiSlider.set(schoolYear5Input.value);
        } else {
            schoolYear5Input.value = Number($scope.begnYearInvestment) + 1;
            schoolYear5Slider.noUiSlider.set(schoolYear5Input.value);
        }
        //calculate();
        $timeout(0);
    }
    $scope.studyingOption6Change = function(studying6) {
        $scope.studyingOption6 = studying6;
        if (studying6) {
            schoolYear6Input.value = $scope.begnYearInvestment;
            schoolYear6Slider.noUiSlider.set(schoolYear6Input.value);
        } else {
            schoolYear6Input.value = Number($scope.begnYearInvestment) + 1;
            schoolYear6Slider.noUiSlider.set(schoolYear6Input.value);
        }
        //calculate();
        $timeout(0);
    }

    function changeMax(tempEndYear) {
        var numChildren = Number($scope.numChildren);
        var schoolYear1 = Number($scope.schoolYear1);
        var schoolDuration1 = Number($scope.schoolDuration1);
        var schoolYear2 = Number($scope.schoolYear2);
        var schoolDuration2 = Number($scope.schoolDuration2);
        var schoolYear3 = Number($scope.schoolYear3);
        var schoolDuration3 = Number($scope.schoolDuration3);
        var schoolYear4 = Number($scope.schoolYear4);
        var schoolDuration4 = Number($scope.schoolDuration4);
        var schoolYear5 = Number($scope.schoolYear5);
        var schoolDuration5 = Number($scope.schoolDuration5);
        var schoolYear6 = Number($scope.schoolYear6);
        var schoolDuration6 = Number($scope.schoolDuration6);
        var childSchoolArray = [schoolYear1, schoolYear2, schoolYear3, schoolYear4, schoolYear5, schoolYear6];
        var childDurationArray = [schoolDuration1, schoolDuration2, schoolDuration3, schoolDuration4, schoolDuration5, schoolDuration6];
        var childGradArray = [$scope.schoolEnd1, $scope.schoolEnd2, $scope.schoolEnd3, $scope.schoolEnd4, $scope.schoolEnd5, $scope.schoolEnd6];

        for (i = 0; i < numChildren; i++) {
            childGradArray[i] = childSchoolArray[i] + childDurationArray[i] - 1;
        }
        $scope.endYearInvestment = childGradArray[0];
        for (i = 1; i < numChildren; i++) {
            $scope.endYearInvestment = $scope.endYearInvestment > childGradArray[i] ? $scope.endYearInvestment : childGradArray[i];
        }



        if (Number(initDate.getFullYear()) == Number($scope.endYearInvestment)) {
            $scope.begnYearInvestment = Number($scope.endYearInvestment);
            $scope.contStartYear = Number($scope.endYearInvestment);
            begnYearInvestmentSlider.setAttribute('disabled', true);
            contStartYearSlider.setAttribute('disabled', true);
        } else {
            begnYearInvestmentSlider.removeAttribute('disabled');
            contStartYearSlider.removeAttribute('disabled');
            begnYearInvestmentSlider.noUiSlider.updateOptions({
                range: {
                    'min': initDate.getFullYear(),
                    'max': $scope.endYearInvestment
                }
            });
            contStartYearSlider.noUiSlider.updateOptions({
                range: {
                    'min': initDate.getFullYear(),
                    'max': $scope.endYearInvestment
                }
            });
        }

    }

    function PV(rate, periods, payment, future, type) {
        var type = (typeof type === 'undefined') ? 0 : type;
        rate = eval(rate);
        periods = eval(periods);
        if (rate === 0) {
            return -payment * periods - future;
        } else {
            return (((1 - Math.pow(1 + rate, periods)) / rate) * payment * (1 + rate * type) - future) / Math.pow(1 + rate, periods);
        }
    }

    function NPV(rate, args) {
        var value = 0;
        for (var j = 0; j < args.length; j++) {
            value += args[j] / Math.pow(1 + rate, j + 1);
        }
        return value;
    }

    function FV(rate, nper, pmt, pv, type) {
        var pow = Math.pow(1 + rate, nper),
            fv;

        pv = pv || 0;
        type = type || 0;

        if (rate) {
            fv = (pmt * (1 + rate * type) * (1 - pow) / rate) - pv * pow;
        } else {
            fv = -1 * (pv + pmt * nper);
        }
        return fv;
    }

    var realRateReturn = 0.0156;
    $scope.majorFeesListObj = [{ id: 0, name: "Major in Commerce" },
        { id: 1, name: "Major in Medical Science" },
        { id: 2, name: "Major in Art" }
    ];

    var majorSelectedArray = [0, 0, 0, 0, 0, 0]
    var publicSchol_avgCostArray = [1615.33, 1395, 471.25, 762.5, 950, 357.14, 390];
    var commerceFeeArray = [10596, 10596, 10597, 10429, 13176, 10596, 10596];
    var medicalScienceFeeArray = [9823, 10596, 9782, 9439.33, 9896, 10596, 10596];
    var artFeeArray = [7511, 6349, 4239.67, 6935.67, 6524, 6349, 6349];
    var majorFeesArray = [commerceFeeArray, medicalScienceFeeArray, artFeeArray];
    var majorSubject;
    var loanValuationRatio = 0.8;
    var avgSchool_AnnualFee;
    var presentValue_PrivateSchoolFeeArray = [];
    var presentValue_PublicSchoolFeeArray = [];
    var savingFeeArray = [];
    var savingAccumulationArray = [];
    var univCostArray = [];
    var projectedUnivFeeArray = [];
    var remainderUnivFeeArray = [];
    var propertyPurchasingPowerArray = [];*/

    
    
    majorSelectedArray[0] = privateSchool.firstChild.major1;
    majorSelectedArray[1] = privateSchool.secondChild.major2;
    majorSelectedArray[2] = privateSchool.thirdChild.major3;
    majorSelectedArray[3] = privateSchool.fourthChild.major4;
    majorSelectedArray[4] = privateSchool.fifthChild.major5;
    majorSelectedArray[5] = privateSchool.sixthChild.major6;
    
    
    
/*    $('.spMajor1').on('change', function() {
        majorSelectedArray[0] = $('.spMajor1 option:selected').val();
        console.log("majorSelectedArray[0]", majorSelectedArray[0]);
        //calculateFinal();
    });
    $('.spMajor2').on('change', function() {
        majorSelectedArray[1] = $('.spMajor2 option:selected').val();
        //console.log("schoolArray[5]", schoolArray[5])
        //calculateFinal();
    });
    $('.spMajor3').on('change', function() {
        majorSelectedArray[2] = $('.spMajor3 option:selected').val();
        //console.log("schoolArray[5]", schoolArray[5])
        //calculateFinal();
    });
    $('.spMajor4').on('change', function() {
        majorSelectedArray[3] = $('.spMajor4 option:selected').val();
        //console.log("schoolArray[5]", schoolArray[5])
        //calculateFinal();
    });
    $('.spMajor5').on('change', function() {
        majorSelectedArray[4] = $('.spMajor5 option:selected').val();
        //console.log("schoolArray[5]", schoolArray[5])
        //calculateFinal();
    });
    $('.spMajor6').on('change', function() {
        majorSelectedArray[5] = $('.spMajor6 option:selected').val();
        //console.log("schoolArray[5]", schoolArray[5])
        //calculateFinal();
    });*/





    $scope.calculate = function(isValid) {

        if (isValid) {

            var begnYearInvestment = Number($scope.begnYearInvestment);
            var numChildren = Number($scope.numChildren);
            var investmentReturn = Number($scope.investmentReturn.replaceAll('$', '').replaceAll(',', ''));
            var contStartYear = Number($scope.contStartYear);
            var schoolYear1 = Number($scope.schoolYear1);
            var schoolDuration1 = Number($scope.schoolDuration1);
            var schoolYear2 = Number($scope.schoolYear2);
            var schoolDuration2 = Number($scope.schoolDuration2);
            var schoolYear3 = Number($scope.schoolYear3);
            var schoolDuration3 = Number($scope.schoolDuration3);
            var schoolYear4 = Number($scope.schoolYear4);
            var schoolDuration4 = Number($scope.schoolDuration4);
            var schoolYear5 = Number($scope.schoolYear5);
            var schoolDuration5 = Number($scope.schoolDuration5);
            var schoolYear6 = Number($scope.schoolYear6);
            var schoolDuration6 = Number($scope.schoolDuration6);
                    
            
            
            studyingOption1 = privateSchool.firstChild.studyingOption1;
            studyingOption2 = privateSchool.secondChild.studyingOption2;
            studyingOption3 = privateSchool.thirdChild.studyingOption3;
            studyingOption4 = privateSchool.fourthChild.studyingOption4;
            studyingOption5 = privateSchool.fifthChild.studyingOption5;
            studyingOption6 = privateSchool.sixthChild.studyingOption6;
            
            
/*            
            var childStudyingArray = [$scope.studyingOption1, $scope.studyingOption2, $scope.studyingOption3, $scope.studyingOption4, $scope.studyingOption5, $scope.studyingOption6];
            var childSchoolArray = [schoolYear1, schoolYear2, schoolYear3, schoolYear4, schoolYear5, schoolYear6];
            var childDurationArray = [schoolDuration1, schoolDuration2, schoolDuration3, schoolDuration4, schoolDuration5, schoolDuration6];
            var childGradArray = [$scope.schoolEnd1, $scope.schoolEnd2, $scope.schoolEnd3, $scope.schoolEnd4, $scope.schoolEnd5, $scope.schoolEnd6];
            var f1Array = [],
                f2Array = [],
                f3Array = [],
                f4Array = [],
                f5Array = [],
                f6Array = [];
            var feeArray = [f1Array, f2Array, f3Array, f4Array, f5Array, f6Array];
            var yearArray = [],
                totalFeeArray = [],
                pInvestArray = [],
                pBalArray = [];
            var oneFeeArray = [],
                annualFeeArray = [];

            for (i = 0; i < numChildren; i++) {
                childGradArray[i] = childSchoolArray[i] + childDurationArray[i] - 1;
                oneFeeArray[i] = $scope.schoolObjects[Number(schoolArray[i])].upfrontFee;
                annualFeeArray[i] = $scope.schoolObjects[Number(schoolArray[i])].annualFee;
            }*/

            //console.log("childStudyingArray", childStudyingArray);
            //console.log("childSchoolArray", childSchoolArray);
            //console.log("childDurationArray", childDurationArray);
            //console.log("childGradArray", childGradArray);

     /*       $scope.endYearInvestment = childGradArray[0];
            for (i = 1; i < numChildren; i++) {
                $scope.endYearInvestment = $scope.endYearInvestment > childGradArray[i] ? $scope.endYearInvestment : childGradArray[i];
            }

            min = begnYearInvestment;
            max = $scope.endYearInvestment;

            diff = max - min;


            for (i = 0; i <= diff; i++) {
                yearArray.push(min + i);
                totalFeeArray.push(0);
            }

            //console.log("yearArray", yearArray);
            //console.log("totalFeeArray", totalFeeArray);

            for (i = 0; i < numChildren; i++) {
                if (childStudyingArray[i] == true) {
                    for (j = 0; j < childDurationArray[i]; j++) {
                        feeArray[i][j] = annualFeeArray[i] * (Math.pow(1 + $scope.indexlevel, yearArray[j] - begnYearInvestment));
                    }
                } else {
                    temp = childSchoolArray[i] - min;
                    feeArray[i][0] = (annualFeeArray[0] + oneFeeArray[0]) * (Math.pow(1 + $scope.indexlevel, temp));
                    for (j = 1; j < childDurationArray[i]; j++) {
                        feeArray[i][j] = annualFeeArray[i] * (Math.pow(1 + $scope.indexlevel, temp + j));
                    }
                }
            }

            //console.log("feeArray", feeArray);


            //console.log("feeArray 1", feeArray[0]);
            //console.log("feeArray 2", feeArray[1]);

            for (i = 0; i < numChildren; i++) {
                temp = childSchoolArray[i] - min;
                for (j = 0; j < feeArray[i].length; j++) {
                    totalFeeArray[temp + j] = totalFeeArray[temp + j] + feeArray[i][j];
                }
            }

            //console.log("totalFeeArray", totalFeeArray);


            pInvestArray[0] = 50000 * (Math.pow(1 + $scope.portAnnualReturn[Number(spPort)], 0.5) - 1) + (Math.pow(50000 * (Math.pow((1 + $scope.portAnnualReturn[Number(spPort)]), 0.5)) + 5000 - totalFeeArray[0], Math.pow((1 + $scope.portAnnualReturn[Number(spPort)]), 0.5) - 1));
            pBalArray[0] = 50000 + 5000 + pInvestArray[0] - totalFeeArray[0];

            for (i = 1; i < yearArray.length; i++) {
                pInvestArray[i] = pBalArray[i - 1] * (Math.pow(1 + $scope.portAnnualReturn[Number(spPort)], 0.5) - 1) + (pBalArray[i - 1] * Math.pow(1 + $scope.portAnnualReturn[Number(spPort)], 0.5) + 5000 - totalFeeArray[i]) * (Math.pow(1 + $scope.portAnnualReturn[Number(spPort)], 0.5) - 1);
                pBalArray[i] = pBalArray[i - 1] + 5000 + pInvestArray[i] - totalFeeArray[i];
            }

            //console.log("pInvestArray", pInvestArray);
            //console.log("pBalArray", pBalArray);


            //From which year your are going to contribute into the portfolio ? 2016 // contStartYear

            childSchoolStart = childSchoolArray[0];
            for (i = 1; i < childSchoolArray.length; i++) {
                childSchoolStart = childSchoolStart > childSchoolArray[i] ? childSchoolArray[i] : childSchoolStart;
            }

            totalSchoolYears = max - childSchoolStart + 1;

            //console.log("childSchoolStart", childSchoolStart);
            //console.log("totalSchoolYears", totalSchoolYears);
            //console.log("contStartYearSlider", contStartYear);


            rateOfReturn = $scope.portAnnualReturn[Number(spPort)];

            expctdPrsntValue = NPV(rateOfReturn, totalFeeArray) * Math.pow(1 + rateOfReturn, contStartYear - begnYearInvestment);

            estmtdAnnualCont = expctdPrsntValue / (Math.abs(PV(rateOfReturn, childSchoolStart + totalSchoolYears - 1 - contStartYear + 1, 1, 0, 0)));*/

            //console.log("rateOfReturn", rateOfReturn);
            //console.log("expctdPrsntValue", expctdPrsntValue);
            //console.log("estmtdAnnualCont", estmtdAnnualCont);




/*
            var q = childSchoolStart + totalSchoolYears - 1 - contStartYear + 1;

            //console.log("q", q);
            var dataYearArray = [];
            var dataContribMoney = [];
            var dataCashFlow = [];
            var dataInvestReturn = [];
            var dataPortBalance = [];

            for (i = 1; i <= q; i++) {
                dataYearArray[i - 1] = contStartYear + i - 1;
                dataContribMoney[i - 1] = estmtdAnnualCont;

                if (yearArray[0] > contStartYear) {
                    dataCashFlow[i - 1] = 0;
                } else {
                    dataCashFlow[i - 1] = totalFeeArray[dataYearArray[i - 1] - yearArray[0]];
                }

                if ((i - 1) == 0) {
                    dataInvestReturn[i - 1] = 0;
                    dataPortBalance[i - 1] = dataContribMoney[i - 1] - dataCashFlow[i - 1] + dataInvestReturn[i - 1];
                } else {
                    dataInvestReturn[i - 1] = dataPortBalance[i - 2] * rateOfReturn;
                    dataPortBalance[i - 1] = dataPortBalance[i - 2] + dataContribMoney[i - 1] - dataCashFlow[i - 1] + dataInvestReturn[i - 1];
                }

            }

            var countFeeArray = [0, 0, 0, 0, 0, 0];
            for (i = 0; i < numChildren; i++) {
                var temp = 0
                for (j = 0; j < feeArray[i].length; j++) {
                    temp = temp + feeArray[i][j];
                }
                countFeeArray[i] = temp;
            }


            for (i = 0; i < numChildren; i++) {
                avgSchool_AnnualFee = publicSchol_avgCostArray[spState];
                presentValue_PrivateSchoolFeeArray[i] = (Math.abs(PV(realRateReturn, childDurationArray[i], annualFeeArray[i], 0, 0))) * (Math.pow((1 + realRateReturn), (childSchoolArray[i] - min))) + (oneFeeArray[i]) * (Math.pow((1 + realRateReturn), (childSchoolArray[i] - min)));
                presentValue_PublicSchoolFeeArray[i] = (Math.abs(PV(realRateReturn, childDurationArray[i], avgSchool_AnnualFee, 0, 0))) * (Math.pow((1 + realRateReturn), (childSchoolArray[i] - min)));
                savingFeeArray[i] = presentValue_PrivateSchoolFeeArray[i] - presentValue_PublicSchoolFeeArray[i];
                savingAccumulationArray[i] = (savingFeeArray[i]) * Math.pow((1 + realRateReturn), (childGradArray[i] - begnYearInvestment))
                univCostArray[i] = majorFeesArray[majorSelectedArray[i]][spState];
                projectedUnivFeeArray[i] = Math.abs(FV(realRateReturn, 3, (univCostArray[i]) * (Math.pow((1 + $scope.indexlevel), (childGradArray[i] - begnYearInvestment)))));
                remainderUnivFeeArray[i] = (savingAccumulationArray[i] * Math.pow((1 + realRateReturn), 3)) - projectedUnivFeeArray[i];
                propertyPurchasingPowerArray[i] = remainderUnivFeeArray[i] / (1 - loanValuationRatio);
            }

            /*console.log("countFeeArray", countFeeArray);
            console.log("avgSchool_AnnualFee", avgSchool_AnnualFee);
            console.log("presentValue_PrivateSchoolFeeArray", presentValue_PrivateSchoolFeeArray);
            console.log("presentValue_PublicSchoolFeeArray", presentValue_PublicSchoolFeeArray);
            console.log("savingFeeArray",savingFeeArray );
            console.log("savingAccumulationArray", savingAccumulationArray);
            console.log("univCostArray", univCostArray);
            console.log("projectedUnivFeeArray", projectedUnivFeeArray);
            console.log("remainderUnivFeeArray", remainderUnivFeeArray);
            console.log("propertyPurchasingPowerArray", propertyPurchasingPowerArray);*/

            //console.log("dataYearArray", dataYearArray);
            //console.log("dataContribMoney", dataContribMoney);
            //console.log("dataCashFlow", dataCashFlow);
            //console.log("dataInvestReturn", dataInvestReturn);
            //console.log("dataPortBalance", dataPortBalance);

            LineChartService.createChart(dataYearArray, dataContribMoney, dataCashFlow, dataInvestReturn, dataPortBalance);
            LineChartService.createChart2(presentValue_PrivateSchoolFeeArray, presentValue_PublicSchoolFeeArray, savingFeeArray, numChildren, $scope.nameArray);
            LineChartService.createChart3(propertyPurchasingPowerArray, remainderUnivFeeArray, projectedUnivFeeArray, numChildren, $scope.nameArray);

        } else {
            $("#myModal").modal('show');
            $("html, body").animate({ scrollTop: 0 }, "slow");
        }

    }*/

    $scope.calculate(true);

    document.getElementById("download").addEventListener("click", function() {
        if ($scope.forms.ttrForm.$valid) {

            var begnYearInvestment = Number($scope.begnYearInvestment);
            var numChildren = Number($scope.numChildren);
            var investmentReturn = Number($scope.investmentReturn.replaceAll('$', '').replaceAll(',', ''));
            var contStartYear = Number($scope.contStartYear);

            var schoolYear1 = Number($scope.schoolYear1);
            var schoolDuration1 = Number($scope.schoolDuration1);

            var schoolYear2 = Number($scope.schoolYear2);
            var schoolDuration2 = Number($scope.schoolDuration2);

            var schoolYear3 = Number($scope.schoolYear3);
            var schoolDuration3 = Number($scope.schoolDuration3);

            var schoolYear4 = Number($scope.schoolYear4);
            var schoolDuration4 = Number($scope.schoolDuration4);

            var schoolYear5 = Number($scope.schoolYear5);
            var schoolDuration5 = Number($scope.schoolDuration5);

            var schoolYear6 = Number($scope.schoolYear6);
            var schoolDuration6 = Number($scope.schoolDuration6);

            var normalDetails = {
                firstName: $scope.personalDetails.firstName,
                lastName: $scope.personalDetails.lastName,
                email: $scope.personalDetails.email,
                mobile: $scope.personalDetails.mobile,
                address: $scope.personalDetails.address,
                postalCode: $scope.personalDetails.postalCode,
                begnYearInvestment: begnYearInvestment,
                spState: $scope.stateListOb[spState].name,
                spStateId: spPort,
                spPort: $scope.portfolioListOb[spPort].name,
                numChildren: numChildren,
                investmentReturn: investmentReturn,
                contStartYear: contStartYear
            }

            //console.log('normalDetails', normalDetails);

            var child1Detail = {
                    c1Name: $scope.c1Name,
                    studyingOption1: $scope.studyingOption1,
                    schoolYear1: schoolYear1,
                    schoolDuration1: schoolDuration1,
                    schoolArray: $scope.schoolObjects[schoolArray[0]].name
                }
                //console.log('child1Detail', child1Detail);

            var child2Detail = {
                    c2Name: $scope.c2Name,
                    studyingOption2: $scope.studyingOption2,
                    schoolYear2: schoolYear2,
                    schoolDuration2: schoolDuration2,
                    schoolArray: $scope.schoolObjects[schoolArray[1]].name
                }
                //console.log('child2Detail', child2Detail);

            var child3Detail = {
                    c3Name: $scope.c3Name,
                    studyingOption3: $scope.studyingOption3,
                    schoolYear3: schoolYear3,
                    schoolDuration3: schoolDuration3,
                    schoolArray: $scope.schoolObjects[schoolArray[2]].name
                }
                //console.log('child3Detail', child3Detail);        

            var child4Detail = {
                    c4Name: $scope.c4Name,
                    studyingOption4: $scope.studyingOption4,
                    schoolYear4: schoolYear4,
                    schoolDuration4: schoolDuration4,
                    schoolArray: $scope.schoolObjects[schoolArray[3]].name
                }
                //console.log('child4Detail', child4Detail);        

            var child5Detail = {
                    c5Name: $scope.c5Name,
                    studyingOption5: $scope.studyingOption5,
                    schoolYear5: schoolYear5,
                    schoolDuration5: schoolDuration5,
                    schoolArray: $scope.schoolObjects[schoolArray[4]].name
                }
                //console.log('child5Detail', child5Detail);        

            var child6Detail = {
                    c6Name: $scope.c6Name,
                    studyingOption6: $scope.studyingOption6,
                    schoolYear6: schoolYear6,
                    schoolDuration6: schoolDuration6,
                    schoolArray: $scope.schoolObjects[schoolArray[5]].name
                }
                //console.log('child6Detail', child6Detail);

            PdfMaker.createChart(normalDetails, child1Detail, child2Detail, child3Detail, child4Detail, child5Detail, child6Detail);
        } else {
            $("#myModal").modal('show');
        }
    });
    /*
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
        });*/

    $scope.chartOneOpen = function(temp) {
        console.log("q", temp);
        switch (temp) {
            case 1:
                $scope.oneOpen = true;
                $scope.twoOpen = false;
                $scope.threeOpen = false;
                $("#containerA").highcharts().reflow();
                $("#containerB").highcharts().reflow();
                document.getElementById("containerA").style.display = "none";
                document.getElementById("containerB").style.display = "none";
                document.getElementById("container").style.display = "block";
                $("#container").highcharts().reflow();
                break;
            case 2:
                $scope.oneOpen = false;
                $scope.twoOpen = true;
                $scope.threeOpen = false;
                $("#container").highcharts().reflow();
                $("#containerB").highcharts().reflow();
                document.getElementById("container").style.display = "none";
                document.getElementById("containerB").style.display = "none";
                document.getElementById("containerA").style.display = "block";
                $("#containerA").highcharts().reflow();
                break;
            case 3:
                $scope.oneOpen = false;
                $scope.twoOpen = false;
                $scope.threeOpen = true;
                $("#container").highcharts().reflow();
                $("#containerA").highcharts().reflow();
                document.getElementById("container").style.display = "none";
                document.getElementById("containerA").style.display = "none";
                document.getElementById("containerB").style.display = "block";
                $("#containerB").highcharts().reflow();
                break;
        }

    }

    $(".print-doc").on("click", printAllCharts);

    function printAllCharts() {
        if ($scope.forms.ttrForm.$valid) {
            var printUpdate = function() {
                $('#container').highcharts().reflow();
                $("#containerA").highcharts().reflow();
                $("#containerB").highcharts().reflow();
            };

            if ($scope.oneOpen) {
                document.getElementById("containerA").style.display = "block";
                document.getElementById("containerB").style.display = "block";

                if (window.matchMedia) {
                    var mediaQueryList = window.matchMedia('print');
                    mediaQueryList.addListener(function(mql) {
                        printUpdate();
                    });
                }
                window.print();
                setTimeout(function() {
                    document.getElementById("containerA").style.display = "none";
                    document.getElementById("containerB").style.display = "none";
                }, 200);
            } else if($scope.twoOpen) {
                document.getElementById("container").style.display = "block";
                document.getElementById("containerB").style.display = "block";

                if (window.matchMedia) {
                    var mediaQueryList = window.matchMedia('print');
                    mediaQueryList.addListener(function(mql) {
                        printUpdate();
                    });
                }
                window.print();
                setTimeout(function() {
                    document.getElementById("container").style.display = "none";
                    document.getElementById("containerB").style.display = "none";
                }, 200);
            }else{
                document.getElementById("containerA").style.display = "block";
                document.getElementById("containerB").style.display = "block";

                if (window.matchMedia) {
                    var mediaQueryList = window.matchMedia('print');
                    mediaQueryList.addListener(function(mql) {
                        printUpdate();
                    });
                }
                window.print();
                setTimeout(function() {
                    document.getElementById("containerA").style.display = "none";
                    document.getElementById("containerB").style.display = "none";
                }, 200);
            }

        } else {
            $("#myModal").modal('show');
            $("html, body").animate({ scrollTop: 0 }, "slow");
        }
    };

    /*$(".print-doc").on("click", function() {
        if ($scope.forms.ttrForm.$valid) {

            var printUpdate = function() {
                $('#container').highcharts().reflow();
            };

            if (window.matchMedia) {
                var mediaQueryList = window.matchMedia('print');
                mediaQueryList.addListener(function(mql) {
                    printUpdate();
                });
            }


            print();
        } else {
            $("#myModal").modal('show');
            $("html, body").animate({ scrollTop: 0 }, "slow");
        }
    })
*/

}]);
