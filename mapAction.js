

// Initialize Firebase
var config = {
    apiKey: "AIzaSyB6bQk1TDpCH3ylmFL3HHbqMjqMapiLZpU",
    authDomain: "test-c5a03.firebaseapp.com",
    databaseURL: "https://test-c5a03.firebaseio.com",
    projectId: "test-c5a03",
    storageBucket: "test-c5a03.appspot.com",
    messagingSenderId: "919585579120"
};
firebase.initializeApp(config);

var dbRef = firebase.database().ref()



var checkVal = 0

function clickCheck() {
    $('.button').click(function () {
        var set$Checked = $('input', this).is(":checked");
        console.log(set$Checked);
        var setChecked = $('input', this).attr("value");
        console.log(setChecked);
        var setBound = $(this).text();
        console.log(setBound);
        var setValue = $(this).attr("value");
        console.log(setValue);
        dbRef.child(`users/data${setValue}`)
            .set({
                [setBound]: setValue,
                [setChecked]: set$Checked
            });
      
    });
}

//   setInterval(function () {
            // var getBound = $('.button', this).text();
            // var getChecked = $('input', this).attr("value");
            // var test = firebase.database().ref(`users/data/a1/a1`)
            //     .on('value', function (snapshot) {
            //         var snap = snapshot.val();
            //         var num0 = 0;
            //         console.log('firebase:' + snap)
            //     })
            // console.log('getBound:')
        // })