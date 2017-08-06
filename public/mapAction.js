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
                check: checkedToNum
            });

    });
}
// var dbRefCheckStart = 1;
// var dbRefCheckEnd = 150;

// var endBox1 = setInterval(function () {
//     if (dbRefCheckStart == dbRefCheckEnd) {
//         clearInterval(endBox1);

//     }
//     var textCheck = "check" + dbRefCheckStart + "";
//     var attendeesRef = firebase.database().ref("usersdata/data/" + dbRefCheckStart + "")
//    var ttt = attendeesRef.orderByChild("usersdata").once('value', function (snapshot) {
        
//         if (snapshot.val().check == 1) {     
//                     $("#check1").prop("checked", true);
//                     $("#check2").prop("checked", true);
//         }
//         console.log(snapshot.key + " |check: " + snapshot.val().check + " |setBound: " + snapshot.val().setBound)
//     });


//     // console.log("element:" + dbRefCheckStart+ " textCheck " +textCheck)
//     dbRefCheckStart = dbRefCheckStart + 1;
// })






// var lock = 150;

// for (var i = 0; i < lock.length; i++) {
//     var element = lock[i];



//     var numPerple = dbRef.ref(`usersdata/data/${element}`);
//     var numPerples = numPerple.on('value', function(snapshot) {
//         console.log("Data:" + snapshot.val());
//         var snap = snapshot.val()
//     });
// }