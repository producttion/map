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
  var addBox2 = 15;
  var addBox3 = 29;
  var addBox4 = 21;
  var addBox5 = 23;
  var addBox6 = 33;
  var addBox7 = 37;
  var addBox8 = 0;
  var addBox9 = 0;
  var addBox10 = 0;
  var addBox11 = 0;
  var addBox12 = 0;
  var addBox13 = 0;
  var addBox14 = 0;


  var createBox1 = 14;
  var createBox2 = 28;
  var createBox3 = 42;
  var createBox4 = 22;
  var createBox5 = 32;
  var createBox6 = 36;
  var createBox7 = 44;
  var createBox8 = 0;
  var createBox9 = 0;
  var createBox10 = 0;
  var createBox11 = 0;
  var createBox12 = 0;
  var createBox13 = 0;
  var createBox14 = 0;

  // Box1
  $(document).ready(function () {
    var endBox1 = setInterval(function () {
      if (addBox1 == createBox1) {
        clearInterval(endBox1);
      }
      box1.append("<label  onClick='clickCheck()'  class='button' value=" + addBox1 + " for=" + 'check' + addBox1 + " style='width:100%;height:36px;'><input id=" + 'check' + addBox1 + " value=" + 'check' + addBox1 + " type='checkbox' style='width:100%;height:34px;'></label >");
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
      box2.append("<label  onClick='clickCheck()'  class='button' value=" + addBox2 + " for=" + 'check' + addBox2 + " style='width:100%;height:36px;'><input id=" + 'check' + addBox2 + " value=" + 'check' + addBox2 + " type='checkbox' style='width:100%;height:34px;'></label >");
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
      box3.append("<label  onClick='clickCheck()'  class='button' value=" + addBox3 + " for=" + 'check' + addBox3 + " style='width:100%;height:36px;'><input id=" + 'check' + addBox3 + " value=" + 'check' + addBox3 + " type='checkbox' style='width:100%;height:34px;'></label >");
      var newList = $('#box3');
      newList.fadeIn();
      var colorEnd = setInterval(function () {
        newList.css('color', 'black');
        clearInterval(colorEnd);
      }, 0);
      addBox3 = addBox3 + 1;

    }, 0);


  });
});