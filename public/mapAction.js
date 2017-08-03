// Initialize Firebase
var config = {
    apiKey: "AIzaSyBiWyIcR3Jv5xgG5lCKhkTlt6d8MYHmNqs",
    authDomain: "production-636ab.firebaseapp.com",
    databaseURL: "https://production-636ab.firebaseio.com",
    projectId: "production-636ab",
    storageBucket: "production-636ab.appspot.com",
    messagingSenderId: "87472810879"
};
firebase.initializeApp(config);

var dbRef = firebase.database().ref()



var checkVal = 0

function clickCheck() {
    $('.button').click(function() {
        var set$Checked = $('input', this).is(":checked");
        console.log(set$Checked);
        var setChecked = $('input', this).attr("value");
        console.log(setChecked);
        // var setBound = $(this).text();
        // console.log(setBound);
        var setValue = $(this).attr("value");
        console.log(setValue);
        dbRef.child(`usersdata/data${setValue}`)
            .set({
                setBound: setValue,
                [setChecked]: set$Checked
            });
    });
}


// var lock = 150;

// for (var i = 0; i < lock.length; i++) {
//     var element = lock[i];



//     var numPerple = dbRef.ref(`usersdata/data${element}`);
//     var numPerples = numPerple.on('value', function(snapshot) {
//         console.log("Data:" + snapshot.val());
//         var snap = snapshot.val()
//     });
// }