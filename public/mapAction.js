// Initialize Firebase
var config = {
    apiKey: "AIzaSyBEQeGpK8vz53WgoXaeP_EHBCJ8c_MaFhc",
    authDomain: "appjongtaladth.firebaseapp.com",
    databaseURL: "https://appjongtaladth.firebaseio.com",
    projectId: "appjongtaladth",
    storageBucket: "",
    messagingSenderId: "530710859012"
};
firebase.initializeApp(config);


var dbRef = firebase.database().ref()



var checkVal = 0
var checkedToNum = 0;
function clickCheck() {
    $('.button').click(function () {
        var set$Checked = $('input', this).is(":checked");
        console.log(set$Checked);
        var setChecked = $('input', this).attr("value");
        console.log(setChecked);
        if (set$Checked == true) {
            $('input', this).checked = true;
            checkedToNum = 1;
        } else if (set$Checked == false) {
            checkedToNum = 0;
        }
        // var setBound = $(this).text();
        // console.log(setBound);
        var setValue = $(this).attr("value");
        console.log(setValue);
        dbRef.child(`usersdata/data/${setValue}`)
            .set({
                setBound: setValue,
                [setChecked]: checkedToNum
            });

    });
}
var dbRefCheckStart = 1;
var dbRefCheckEnd = 150;
var textCheck = 0;
var num = 0;
var test = 0;
var tes = "";

var endBox1 = setInterval(function () {
    if (dbRefCheckStart == dbRefCheckEnd) {
        clearInterval(endBox1);

    }
    // var text = firebase.database().ref(""+'chack'+dbRefCheckStart+"");
    var attendeesRef = firebase.database().ref("usersdata/data/" + dbRefCheckStart + "")
        .once('value', function (snapshot) {



            if (snapshot.val().check1 == 1) {
                $("#check1").prop("checked", true);
            } else if (snapshot.val().check1 == 0) {
                $("#check1").prop("checked", false);
            } else if (snapshot.val().check2 == 1) {
                $("#check2").prop("checked", true);
            } else if (snapshot.val().check2 == 0) {
                $("#check2").prop("checked", false);
            } else if (snapshot.val().check3 == 1) {
                $("#check3").prop("checked", true);
            } else if (snapshot.val().check3 == 0) {
                $("#check3").prop("checked", false);
            } else if (snapshot.val().check4 == 1) {
                $("#check4").prop("checked", true);
            } else if (snapshot.val().check4 == 0) {
                $("#check4").prop("checked", false);
            } else if (snapshot.val().check5 == 1) {
                $("#check5").prop("checked", true);
            } else if (snapshot.val().check5 == 0) {
                $("#check5").prop("checked", false);
            } else if (snapshot.val().check6 == 1) {
                $("#check6").prop("checked", true);
            } else if (snapshot.val().check6 == 0) {
                $("#check6").prop("checked", false);
            } else if (snapshot.val().check7 == 1) {
                $("#check7").prop("checked", true);
            } else if (snapshot.val().check7 == 0) {
                $("#check7").prop("checked", false);
            } else if (snapshot.val().check8 == 1) {
                $("#check8").prop("checked", true);
            } else if (snapshot.val().check8 == 0) {
                $("#check8").prop("checked", false);
            } else if (snapshot.val().check9 == 1) {
                $("#check9").prop("checked", true);
            } else if (snapshot.val().check9 == 0) {
                $("#check9").prop("checked", false);
            } else if (snapshot.val().check10 == 1) {
                $("#check10").prop("checked", true);
            } else if (snapshot.val().check10 == 0) {
                $("#check10").prop("checked", false);
            } else if (snapshot.val().check11 == 1) {
                $("#check11").prop("checked", true);
            } else if (snapshot.val().check11 == 0) {
                $("#check11").prop("checked", false);
            } else if (snapshot.val().check12 == 1) {
                $("#check12").prop("checked", true);
            } else if (snapshot.val().check12 == 0) {
                $("#check12").prop("checked", false);
            } else if (snapshot.val().check13 == 1) {
                $("#check13").prop("checked", true);
            } else if (snapshot.val().check13 == 0) {
                $("#check13").prop("checked", false);
            } else if (snapshot.val().check14 == 1) {
                $("#check14").prop("checked", true);
            } else if (snapshot.val().check14 == 0) {
                $("#check14").prop("checked", false);
            } else if (snapshot.val().check15 == 1) {
                $("#check15").prop("checked", true);
            } else if (snapshot.val().check15 == 0) {
                $("#check15").prop("checked", false);
            } else if (snapshot.val().check16 == 1) {
                $("#check16").prop("checked", true);
            } else if (snapshot.val().check16 == 0) {
                $("#check16").prop("checked", false);
            } else if (snapshot.val().check17 == 1) {
                $("#check17").prop("checked", true);
            } else if (snapshot.val().check17 == 0) {
                $("#check17").prop("checked", false);
            } else if (snapshot.val().check18 == 1) {
                $("#check18").prop("checked", true);
            } else if (snapshot.val().check18 == 0) {
                $("#check18").prop("checked", false);
            } else if (snapshot.val().check19 == 1) {
                $("#check19").prop("checked", true);
            } else if (snapshot.val().check19 == 0) {
                $("#check19").prop("checked", false);
            } else if (snapshot.val().check30 == 1) {
                $("#check30").prop("checked", true);
            } else if (snapshot.val().check30 == 0) {
                $("#check30").prop("checked", false);
            } else if (snapshot.val().check31 == 1) {
                $("#check31").prop("checked", true);
            } else if (snapshot.val().check31 == 0) {
                $("#check31").prop("checked", false);
            } else if (snapshot.val().check32 == 1) {
                $("#check32").prop("checked", true);
            } else if (snapshot.val().check32 == 0) {
                $("#check32").prop("checked", false);
            } else if (snapshot.val().check33 == 1) {
                $("#check33").prop("checked", true);
            } else if (snapshot.val().check33 == 0) {
                $("#check33").prop("checked", false);
            } else if (snapshot.val().check34 == 1) {
                $("#check34").prop("checked", true);
            } else if (snapshot.val().check34 == 0) {
                $("#check34").prop("checked", false);
            } else if (snapshot.val().check35 == 1) {
                $("#check35").prop("checked", true);
            } else if (snapshot.val().check35 == 0) {
                $("#check35").prop("checked", false);
            } else if (snapshot.val().check36 == 1) {
                $("#check36").prop("checked", true);
            } else if (snapshot.val().check36 == 0) {
                $("#check36").prop("checked", false);
            } else if (snapshot.val().check37 == 1) {
                $("#check37").prop("checked", true);
            } else if (snapshot.val().check37 == 0) {
                $("#check37").prop("checked", false);
            } else if (snapshot.val().check38 == 1) {
                $("#check38").prop("checked", true);
            } else if (snapshot.val().check38 == 0) {
                $("#check38").prop("checked", false);
            } else if (snapshot.val().check39 == 1) {
                $("#check39").prop("checked", true);
            } else if (snapshot.val().check39 == 0) {
                $("#check39").prop("checked", false);
            } else if (snapshot.val().check40 == 1) {
                $("#check40").prop("checked", true);
            } else if (snapshot.val().check40 == 0) {
                $("#check40").prop("checked", false);
            } else if (snapshot.val().check41 == 1) {
                $("#check41").prop("checked", true);
            } else if (snapshot.val().check41 == 0) {
                $("#check41").prop("checked", false);
            } else if (snapshot.val().check42 == 1) {
                $("#check42").prop("checked", true);
            } else if (snapshot.val().check42 == 0) {
                $("#check42").prop("checked", false);
            } else if (snapshot.val().check43 == 1) {
                $("#check43").prop("checked", true);
            } else if (snapshot.val().check43 == 0) {
                $("#check43").prop("checked", false);
            } else if (snapshot.val().check44 == 1) {
                $("#check44").prop("checked", true);
            } else if (snapshot.val().check44 == 0) {
                $("#check44").prop("checked", false);
            } else if (snapshot.val().check45 == 1) {
                $("#check45").prop("checked", true);
            } else if (snapshot.val().check45 == 0) {
                $("#check45").prop("checked", false);
            } else if (snapshot.val().check46 == 1) {
                $("#check46").prop("checked", true);
            } else if (snapshot.val().check46 == 0) {
                $("#check46").prop("checked", false);
            } else if (snapshot.val().check47 == 1) {
                $("#check47").prop("checked", true);
            } else if (snapshot.val().check47 == 0) {
                $("#check47").prop("checked", false);
            } else if (snapshot.val().check48 == 1) {
                $("#check48").prop("checked", true);
            } else if (snapshot.val().check48 == 0) {
                $("#check48").prop("checked", false);
            } else if (snapshot.val().check49 == 1) {
                $("#check49").prop("checked", true);
            } else if (snapshot.val().check49 == 0) {
                $("#check49").prop("checked", false);
            } else if (snapshot.val().check50 == 1) {
                $("#check50").prop("checked", true);
            } else if (snapshot.val().check50 == 0) {
                $("#check50").prop("checked", false);
            } else if (snapshot.val().check51 == 1) {
                $("#check51").prop("checked", true);
            } else if (snapshot.val().check51 == 0) {
                $("#check51").prop("checked", false);
            } else if (snapshot.val().check52 == 1) {
                $("#check52").prop("checked", true);
            } else if (snapshot.val().check52 == 0) {
                $("#check52").prop("checked", false);
            } else if (snapshot.val().check53 == 1) {
                $("#check53").prop("checked", true);
            } else if (snapshot.val().check53 == 0) {
                $("#check53").prop("checked", false);
            } else if (snapshot.val().check54 == 1) {
                $("#check54").prop("checked", true);
            } else if (snapshot.val().check54 == 0) {
                $("#check54").prop("checked", false);
            } else if (snapshot.val().check55 == 1) {
                $("#check55").prop("checked", true);
            } else if (snapshot.val().check55 == 0) {
                $("#check55").prop("checked", false);
            } else if (snapshot.val().check56 == 1) {
                $("#check56").prop("checked", true);
            } else if (snapshot.val().check56 == 0) {
                $("#check56").prop("checked", false);
            } else if (snapshot.val().check57 == 1) {
                $("#check57").prop("checked", true);
            } else if (snapshot.val().check57 == 0) {
                $("#check57").prop("checked", false);
            } else if (snapshot.val().check58 == 1) {
                $("#check58").prop("checked", true);
            } else if (snapshot.val().check58 == 0) {
                $("#check58").prop("checked", false);
            } else if (snapshot.val().check59 == 1) {
                $("#check59").prop("checked", true);
            } else if (snapshot.val().check59 == 0) {
                $("#check59").prop("checked", false);
            } else if (snapshot.val().check60 == 1) {
                $("#check60").prop("checked", true);
            } else if (snapshot.val().check60 == 0) {
                $("#check60").prop("checked", false);
            } else if (snapshot.val().check61 == 1) {
                $("#check61").prop("checked", true);
            } else if (snapshot.val().check61 == 0) {
                $("#check61").prop("checked", false);
            } else if (snapshot.val().check62 == 1) {
                $("#check62").prop("checked", true);
            } else if (snapshot.val().check62 == 0) {
                $("#check62").prop("checked", false);
            } else if (snapshot.val().check63 == 1) {
                $("#check63").prop("checked", true);
            } else if (snapshot.val().check63 == 0) {
                $("#check63").prop("checked", false);
            } else if (snapshot.val().check64 == 1) {
                $("#check64").prop("checked", true);
            } else if (snapshot.val().check64 == 0) {
                $("#check64").prop("checked", false);
            } else if (snapshot.val().check65 == 1) {
                $("#check65").prop("checked", true);
            } else if (snapshot.val().check65 == 0) {
                $("#check65").prop("checked", false);
            } else if (snapshot.val().check66 == 1) {
                $("#check66").prop("checked", true);
            } else if (snapshot.val().check66 == 0) {
                $("#check66").prop("checked", false);
            } else if (snapshot.val().check67 == 1) {
                $("#check67").prop("checked", true);
            } else if (snapshot.val().check67 == 0) {
                $("#check67").prop("checked", false);
            } else if (snapshot.val().check68 == 1) {
                $("#check68").prop("checked", true);
            } else if (snapshot.val().check68 == 0) {
                $("#check68").prop("checked", false);
            } else if (snapshot.val().check69 == 1) {
                $("#check69").prop("checked", true);
            } else if (snapshot.val().check69 == 0) {
                $("#check69").prop("checked", false);
            } else if (snapshot.val().check70 == 1) {
                $("#check70").prop("checked", true);
            } else if (snapshot.val().check70 == 0) {
                $("#check70").prop("checked", false);
            } else if (snapshot.val().check71 == 1) {
                $("#check71").prop("checked", true);
            } else if (snapshot.val().check71 == 0) {
                $("#check71").prop("checked", false);
            } else if (snapshot.val().check72 == 1) {
                $("#check72").prop("checked", true);
            } else if (snapshot.val().check72 == 0) {
                $("#check72").prop("checked", false);
            } else if (snapshot.val().check73 == 1) {
                $("#check73").prop("checked", true);
            } else if (snapshot.val().check73 == 0) {
                $("#check73").prop("checked", false);
            } else if (snapshot.val().check74 == 1) {
                $("#check74").prop("checked", true);
            } else if (snapshot.val().check74 == 0) {
                $("#check74").prop("checked", false);
            } else if (snapshot.val().check75 == 1) {
                $("#check75").prop("checked", true);
            } else if (snapshot.val().check75 == 0) {
                $("#check75").prop("checked", false);
            } else if (snapshot.val().check76 == 1) {
                $("#check76").prop("checked", true);
            } else if (snapshot.val().check76 == 0) {
                $("#check76").prop("checked", false);
            } else if (snapshot.val().check77 == 1) {
                $("#check77").prop("checked", true);
            } else if (snapshot.val().check77 == 0) {
                $("#check77").prop("checked", false);
            } else if (snapshot.val().check78 == 1) {
                $("#check78").prop("checked", true);
            } else if (snapshot.val().check78 == 0) {
                $("#check78").prop("checked", false);
            } else if (snapshot.val().check79 == 1) {
                $("#check79").prop("checked", true);
            } else if (snapshot.val().check79 == 0) {
                $("#check79").prop("checked", false);
            } else if (snapshot.val().check80 == 1) {
                $("#check80").prop("checked", true);
            } else if (snapshot.val().check80 == 0) {
                $("#check80").prop("checked", false);
            } else if (snapshot.val().check81 == 1) {
                $("#check81").prop("checked", true);
            } else if (snapshot.val().check81 == 0) {
                $("#check81").prop("checked", false);
            } else if (snapshot.val().check82 == 1) {
                $("#check82").prop("checked", true);
            } else if (snapshot.val().check82 == 0) {
                $("#check82").prop("checked", false);
            } else if (snapshot.val().check83 == 1) {
                $("#check83").prop("checked", true);
            } else if (snapshot.val().check83 == 0) {
                $("#check83").prop("checked", false);
            } else if (snapshot.val().check84 == 1) {
                $("#check84").prop("checked", true);
            } else if (snapshot.val().check84 == 0) {
                $("#check84").prop("checked", false);
            } else if (snapshot.val().check85 == 1) {
                $("#check85").prop("checked", true);
            } else if (snapshot.val().check85 == 0) {
                $("#check85").prop("checked", false);
            } else if (snapshot.val().check86 == 1) {
                $("#check86").prop("checked", true);
            } else if (snapshot.val().check86 == 0) {
                $("#check86").prop("checked", false);
            } else if (snapshot.val().check87 == 1) {
                $("#check87").prop("checked", true);
            } else if (snapshot.val().check87 == 0) {
                $("#check87").prop("checked", false);
            } else if (snapshot.val().check88 == 1) {
                $("#check88").prop("checked", true);
            } else if (snapshot.val().check88 == 0) {
                $("#check88").prop("checked", false);
            } else if (snapshot.val().check89 == 1) {
                $("#check89").prop("checked", true);
            } else if (snapshot.val().check89 == 0) {
                $("#check89").prop("checked", false);
            } else if (snapshot.val().check90 == 1) {
                $("#check90").prop("checked", true);
            } else if (snapshot.val().check90 == 0) {
                $("#check90").prop("checked", false);
            } else if (snapshot.val().check91 == 1) {
                $("#check91").prop("checked", true);
            } else if (snapshot.val().check91 == 0) {
                $("#check91").prop("checked", false);
            } else if (snapshot.val().check92 == 1) {
                $("#check92").prop("checked", true);
            } else if (snapshot.val().check92 == 0) {
                $("#check92").prop("checked", false);
            } else if (snapshot.val().check93 == 1) {
                $("#check93").prop("checked", true);
            } else if (snapshot.val().check93 == 0) {
                $("#check93").prop("checked", false);
            } else if (snapshot.val().check94 == 1) {
                $("#check94").prop("checked", true);
            } else if (snapshot.val().check94 == 0) {
                $("#check94").prop("checked", false);
            } else if (snapshot.val().check95 == 1) {
                $("#check95").prop("checked", true);
            } else if (snapshot.val().check95 == 0) {
                $("#check95").prop("checked", false);
            } else if (snapshot.val().check96 == 1) {
                $("#check96").prop("checked", true);
            } else if (snapshot.val().check96 == 0) {
                $("#check96").prop("checked", false);
            } else if (snapshot.val().check97 == 1) {
                $("#check97").prop("checked", true);
            } else if (snapshot.val().check97 == 0) {
                $("#check97").prop("checked", false);
            } else if (snapshot.val().check98 == 1) {
                $("#check98").prop("checked", true);
            } else if (snapshot.val().check98 == 0) {
                $("#check98").prop("checked", false);
            } else if (snapshot.val().check99 == 1) {
                $("#check99").prop("checked", true);
            } else if (snapshot.val().check99 == 0) {
                $("#check99").prop("checked", false);
            } else if (snapshot.val().check100 == 1) {
                $("#check100").prop("checked", true);
            } else if (snapshot.val().check100 == 0) {
                $("#check100").prop("checked", false);
            } else if (snapshot.val().check101 == 1) {
                $("#check101").prop("checked", true);
            } else if (snapshot.val().check101 == 0) {
                $("#check101").prop("checked", false);
            } else if (snapshot.val().check102 == 1) {
                $("#check102").prop("checked", true);
            } else if (snapshot.val().check102 == 0) {
                $("#check102").prop("checked", false);
            } else if (snapshot.val().check103 == 1) {
                $("#check103").prop("checked", true);
            } else if (snapshot.val().check103 == 0) {
                $("#check103").prop("checked", false);
            } else if (snapshot.val().check104 == 1) {
                $("#check104").prop("checked", true);
            } else if (snapshot.val().check104 == 0) {
                $("#check104").prop("checked", false);
            } else if (snapshot.val().check105 == 1) {
                $("#check105").prop("checked", true);
            } else if (snapshot.val().check105 == 0) {
                $("#check105").prop("checked", false);
            } else if (snapshot.val().check106 == 1) {
                $("#check106").prop("checked", true);
            } else if (snapshot.val().check106 == 0) {
                $("#check106").prop("checked", false);
            } else if (snapshot.val().check107 == 1) {
                $("#check107").prop("checked", true);
            } else if (snapshot.val().check107 == 0) {
                $("#check107").prop("checked", false);
            } else if (snapshot.val().check108 == 1) {
                $("#check108").prop("checked", true);
            } else if (snapshot.val().check108 == 0) {
                $("#check108").prop("checked", false);
            } else if (snapshot.val().check109 == 1) {
                $("#check109").prop("checked", true);
            } else if (snapshot.val().check109 == 0) {
                $("#check109").prop("checked", false);
            } else if (snapshot.val().check110 == 1) {
                $("#check110").prop("checked", true);
            } else if (snapshot.val().check110 == 0) {
                $("#check110").prop("checked", false);
            } else if (snapshot.val().check111 == 1) {
                $("#check111").prop("checked", true);
            } else if (snapshot.val().check111 == 0) {
                $("#check111").prop("checked", false);
            } else if (snapshot.val().check112 == 1) {
                $("#check112").prop("checked", true);
            } else if (snapshot.val().check112 == 0) {
                $("#check112").prop("checked", false);
            } else if (snapshot.val().check113 == 1) {
                $("#check113").prop("checked", true);
            } else if (snapshot.val().check113 == 0) {
                $("#check113").prop("checked", false);
            } else if (snapshot.val().check114 == 1) {
                $("#check114").prop("checked", true);
            } else if (snapshot.val().check114 == 0) {
                $("#check114").prop("checked", false);
            } else if (snapshot.val().check115 == 1) {
                $("#check115").prop("checked", true);
            } else if (snapshot.val().check115 == 0) {
                $("#check115").prop("checked", false);
            } else if (snapshot.val().check116 == 1) {
                $("#check116").prop("checked", true);
            } else if (snapshot.val().check116 == 0) {
                $("#check116").prop("checked", false);
            } else if (snapshot.val().check117 == 1) {
                $("#check117").prop("checked", true);
            } else if (snapshot.val().check117 == 0) {
                $("#check117").prop("checked", false);
            } else if (snapshot.val().check118 == 1) {
                $("#check118").prop("checked", true);
            } else if (snapshot.val().check118 == 0) {
                $("#check118").prop("checked", false);
            } else if (snapshot.val().check119 == 1) {
                $("#check119").prop("checked", true);
            } else if (snapshot.val().check119 == 0) {
                $("#check119").prop("checked", false);
            } else if (snapshot.val().check130 == 1) {
                $("#check130").prop("checked", true);
            } else if (snapshot.val().check130 == 0) {
                $("#check130").prop("checked", false);
            } else if (snapshot.val().check131 == 1) {
                $("#check131").prop("checked", true);
            } else if (snapshot.val().check131 == 0) {
                $("#check131").prop("checked", false);
            } else if (snapshot.val().check132 == 1) {
                $("#check132").prop("checked", true);
            } else if (snapshot.val().check132 == 0) {
                $("#check132").prop("checked", false);
            } else if (snapshot.val().check133 == 1) {
                $("#check133").prop("checked", true);
            } else if (snapshot.val().check133 == 0) {
                $("#check133").prop("checked", false);
            } else if (snapshot.val().check134 == 1) {
                $("#check134").prop("checked", true);
            } else if (snapshot.val().check134 == 0) {
                $("#check134").prop("checked", false);
            } else if (snapshot.val().check135 == 1) {
                $("#check135").prop("checked", true);
            } else if (snapshot.val().check135 == 0) {
                $("#check135").prop("checked", false);
            } else if (snapshot.val().check136 == 1) {
                $("#check136").prop("checked", true);
            } else if (snapshot.val().check136 == 0) {
                $("#check136").prop("checked", false);
            } else if (snapshot.val().check137 == 1) {
                $("#check137").prop("checked", true);
            } else if (snapshot.val().check137 == 0) {
                $("#check137").prop("checked", false);
            } else if (snapshot.val().check138 == 1) {
                $("#check138").prop("checked", true);
            } else if (snapshot.val().check138 == 0) {
                $("#check138").prop("checked", false);
            } else if (snapshot.val().check139 == 1) {
                $("#check139").prop("checked", true);
            } else if (snapshot.val().check139 == 0) {
                $("#check139").prop("checked", false);
            } else if (snapshot.val().check140 == 1) {
                $("#check140").prop("checked", true);
            } else if (snapshot.val().check140 == 0) {
                $("#check140").prop("checked", false);
            } else if (snapshot.val().check141 == 1) {
                $("#check141").prop("checked", true);
            } else if (snapshot.val().check141 == 0) {
                $("#check141").prop("checked", false);
            } else if (snapshot.val().check142 == 1) {
                $("#check142").prop("checked", true);
            } else if (snapshot.val().check142 == 0) {
                $("#check142").prop("checked", false);
            } else if (snapshot.val().check143 == 1) {
                $("#check143").prop("checked", true);
            } else if (snapshot.val().check143 == 0) {
                $("#check143").prop("checked", false);
            } else if (snapshot.val().check144 == 1) {
                $("#check144").prop("checked", true);
            } else if (snapshot.val().check144 == 0) {
                $("#check144").prop("checked", false);
            } else if (snapshot.val().check145 == 1) {
                $("#check145").prop("checked", true);
            } else if (snapshot.val().check145 == 0) {
                $("#check145").prop("checked", false);
            } else if (snapshot.val().check146 == 1) {
                $("#check146").prop("checked", true);
            } else if (snapshot.val().check146 == 0) {
                $("#check146").prop("checked", false);
            } else if (snapshot.val().check147 == 1) {
                $("#check147").prop("checked", true);
            } else if (snapshot.val().check147 == 0) {
                $("#check147").prop("checked", false);
            } else if (snapshot.val().check148 == 1) {
                $("#check148").prop("checked", true);
            } else if (snapshot.val().check148 == 0) {
                $("#check148").prop("checked", false);
            } else if (snapshot.val().check149 == 1) {
                $("#check149").prop("checked", true);
            } else if (snapshot.val().check149 == 0) {
                $("#check149").prop("checked", false);
            } else if (snapshot.val().check150 == 1) {
                $("#check150").prop("checked", true);
            } else if (snapshot.val().check150 == 0) {
                $("#check150").prop("checked", false);
            }



            console.log(snapshot.key + " |check: " + snapshot.val().setChecked + " |setBound: " + snapshot.val().setBound + " |checkText: " + tes)
        });



    // console.log("element:" + dbRefCheckStart+ " textCheck " +textCheck)

    dbRefCheckStart = dbRefCheckStart + 1;


})






// var lock = 150;

// for (var i = 0; i < lock.length; i++) {
//     var element = lock[i];



//     var numPerple = dbRef.ref(`usersdata/data/${element}`);
//     var numPerples = numPerple.on('value', function(snapshot) {
//         console.log("Data:" + snapshot.val());
//         var snap = snapshot.val()
//     });
// }