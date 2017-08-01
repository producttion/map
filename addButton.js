$(document).ready(function () {
  var box1 = $('#box1');
  var box2 = $('#box2');
  var box3 = $('#box3');
  var box4 = $('#box4');
  var box5 = $('#box5');
  var box6 = $('#box6');
  var box7 = $('#box7');
  var box8 = $('#box8');
  var box9 = $('#box9');
  var box10 = $('#box10');
  var box11 = $('#box11');
  var box12 = $('#box12');
  var box13 = $('#box13');
  var box14 = $('#box14');

  var addBox1 = 1;
  var addBox2 = 19;
  var addBox3 = 37;
  var addBox4 = 55;
  var addBox5 = 63;
  var addBox6 = 72;
  var addBox7 = 73;
  var addBox8 = 76;
  var addBox9 = 79;
  var addBox10 = 97;
  var addBox11 = 115;
  var addBox12 = 133;
  var addBox13 = 0;
  var addBox14 = 0;


  var createBox1 = 18;
  var createBox2 = 36;
  var createBox3 = 54;
  var createBox4 = 62;
  var createBox5 = 71;
  var createBox6 = 72;
  var createBox7 = 75;
  var createBox8 = 78;
  var createBox9 = 96;
  var createBox10 = 114;
  var createBox11 = 132;
  var createBox12 = 150;
  var createBox13 = 0;
  var createBox14 = 0;

  // Box1
  $(document).ready(function () {
    var endBox1 = setInterval(function () {
      if (addBox1 == createBox1) {
        clearInterval(endBox1);
      }
      box1.append("<label  onClick='clickCheck()'  class='button' value=" + addBox1 + " for=" + 'check' + addBox1 + " style='width:100%;height:27.8px;'><input id=" + 'check' + addBox1 + " value=" + 'check' + addBox1 + " type='checkbox' style='width:100%;height:25px;'></label >");
      var newList = $('#box1');
      newList.fadeIn();
      var colorEnd = setInterval(function () {
        newList.css('color', 'black');
        clearInterval(colorEnd);
      }, 0);
      addBox1 = addBox1 + 1;

    }, 0)

    // Box2
    var endBox2 = setInterval(function () {
      if (addBox2 == createBox2) {
        clearInterval(endBox2);
      }
      box2.append("<label  onClick='clickCheck()'  class='button' value=" + addBox2 + " for=" + 'check' + addBox2 + " style='width:100%;height:27.8px;'><input id=" + 'check' + addBox2 + " value=" + 'check' + addBox2 + " type='checkbox' style='width:100%;height:25px;'></label >");
      var newList = $('#box2');
      newList.fadeIn();
      var colorEnd = setInterval(function () {
        newList.css('color', 'black');
        clearInterval(colorEnd);
      }, 0);
      addBox2 = addBox2 + 1;

    }, 0);

    // Box3
    var endBox3 = setInterval(function () {
      if (addBox3 == createBox3) {
        clearInterval(endBox3);
      }
      box3.append("<label  onClick='clickCheck()'  class='button' value=" + addBox3 + " for=" + 'check' + addBox3 + " style='width:100%;height:27.8px;'><input id=" + 'check' + addBox3 + " value=" + 'check' + addBox3 + " type='checkbox' style='width:100%;height:25px;'></label >");
      var newList = $('#box3');
      newList.fadeIn();
      var colorEnd = setInterval(function () {
        newList.css('color', 'black');
        clearInterval(colorEnd);
      }, 0);
      addBox3 = addBox3 + 1;

    }, 0);

     // Box4
    var endBox4 = setInterval(function () {
      if (addBox4 == createBox4) {
        clearInterval(endBox4);
      }
      box4.append("<label  onClick='clickCheck()'  class='button' value=" + addBox4 + " for=" + 'check' + addBox4 + " style='width:27.8px;height:100%;'><input id=" + 'check' + addBox4 + " value=" + 'check' + addBox4 + " type='checkbox' style='width:25px;height:100%;'></label >");
      var newList = $('#box4');
      newList.fadeIn();
      var colorEnd = setInterval(function () {
        newList.css('color', 'black');
        clearInterval(colorEnd);
      }, 0);
      addBox4 = addBox4 + 1;

    }, 0);

    // Box5
    var endBox5 = setInterval(function () {
      if (addBox5 == createBox5) {
        clearInterval(endBox5);
      }
      box5.append("<label  onClick='clickCheck()'  class='button' value=" + addBox5 + " for=" + 'check' + addBox5 + " style='width:100%;height:27.8px;'><input id=" + 'check' + addBox5 + " value=" + 'check' + addBox5 + " type='checkbox' style='width:100%;height:25px;float:left;'></label >");
      var newList = $('#box5');
      newList.fadeIn();
      var colorEnd = setInterval(function () {
        newList.css('color', 'black');
        clearInterval(colorEnd);
      }, 0);
      addBox5 = addBox5 + 1;

    }, 0);

        // Box6
    var endBox6 = setInterval(function () {
      if (addBox6 == createBox6) {
        clearInterval(endBox6);
      }
      box6.append("<label  onClick='clickCheck()'  class='button' value=" + addBox6 + " for=" + 'check' + addBox6 + " style='width:27.8px;height:100%;'><input id=" + 'check' + addBox6 + " value=" + 'check' + addBox6 + " type='checkbox' style='width:25px;height:100%;float:left;'></label >");
      var newList = $('#box6');
      newList.fadeIn();
      var colorEnd = setInterval(function () {
        newList.css('color', 'black');
        clearInterval(colorEnd);
      }, 0);
      addBox6 = addBox6 + 1;

    }, 0);

            // Box7
    var endBox7 = setInterval(function () {
      if (addBox7 == createBox7) {
        clearInterval(endBox7);
      }
      box7.append("<label  onClick='clickCheck()'  class='button' value=" + addBox7 + " for=" + 'check' + addBox7 + " style='width:27.8px;height:100%;'><input id=" + 'check' + addBox7 + " value=" + 'check' + addBox7 + " type='checkbox' style='width:25px;height:100%;float:left;'></label >");
      var newList = $('#box7');
      newList.fadeIn();
      var colorEnd = setInterval(function () {
        newList.css('color', 'black');
        clearInterval(colorEnd);
      }, 0);
      addBox7 = addBox7 + 1;

    }, 0);



     // Box8
    var endBox8 = setInterval(function () {
      if (addBox8 == createBox8) {
        clearInterval(endBox8);
      }
      box8.append("<label  onClick='clickCheck()'  class='button' value=" + addBox8 + " for=" + 'check' + addBox8 + " style='width:27.7px;height:100%;'><input id=" + 'check' + addBox8 + " value=" + 'check' + addBox8 + " type='checkbox' style='width:25px;height:100%;float:left;'></label >");
      var newList = $('#box8');
      newList.fadeIn();
      var colorEnd = setInterval(function () {
        newList.css('color', 'black');
        clearInterval(colorEnd);
      }, 0);
      addBox8 = addBox8 + 1;

    }, 0);


    // Box9
    var endBox9 = setInterval(function () {
      if (addBox9 == createBox9) {
        clearInterval(endBox9);
      }
      box9.append("<label  onClick='clickCheck()'  class='button' value=" + addBox9 + " for=" + 'check' + addBox9 + " style='width:27.7px;height:100%;'><input id=" + 'check' + addBox9 + " value=" + 'check' + addBox9 + " type='checkbox' style='width:25px;height:100%;float:left;'></label >");
      var newList = $('#box9');
      newList.fadeIn();
      var colorEnd = setInterval(function () {
        newList.css('color', 'black');
        clearInterval(colorEnd);
      }, 0);
      addBox9 = addBox9 + 1;

    }, 0);

    // Box10
    var endBox10 = setInterval(function () {
      if (addBox10 == createBox10) {
        clearInterval(endBox10);
      }
      box10.append("<label  onClick='clickCheck()'  class='button' value=" + addBox10 + " for=" + 'check' + addBox10 + " style='width:27.7px;height:100%;'><input id=" + 'check' + addBox10 + " value=" + 'check' + addBox10 + " type='checkbox' style='width:25px;height:100%;float:left;'></label >");
      var newList = $('#box10');
      newList.fadeIn();
      var colorEnd = setInterval(function () {
        newList.css('color', 'black');
        clearInterval(colorEnd);
      }, 0);
      addBox10 = addBox10 + 1;

    }, 0);

     // Box11
    var endBox11 = setInterval(function () {
      if (addBox11 == createBox11) {
        clearInterval(endBox11);
      }
      box11.append("<label  onClick='clickCheck()'  class='button' value=" + addBox11 + " for=" + 'check' + addBox11 + " style='width:27.7px;height:100%;'><input id=" + 'check' + addBox11 + " value=" + 'check' + addBox11 + " type='checkbox' style='width:25px;height:100%;float:left;'></label >");
      var newList = $('#box11');
      newList.fadeIn();
      var colorEnd = setInterval(function () {
        newList.css('color', 'black');
        clearInterval(colorEnd);
      }, 0);
      addBox11 = addBox11 + 1;

    }, 0);


    // Box12
    var endBox12 = setInterval(function () {
      if (addBox12 == createBox12) {
        clearInterval(endBox12);
      }
      box12.append("<label  onClick='clickCheck()'  class='button' value=" + addBox12 + " for=" + 'check' + addBox12 + " style='width:27.7px;height:100%;'><input id=" + 'check' + addBox12 + " value=" + 'check' + addBox12 + " type='checkbox' style='width:25px;height:100%;float:left;'></label >");
      var newList = $('#box12');
      newList.fadeIn();
      var colorEnd = setInterval(function () {
        newList.css('color', 'black');
        clearInterval(colorEnd);
      }, 0);
      addBox12 = addBox12 + 1;

    }, 0);

  });
});