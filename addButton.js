$(document).ready(function () {
  var box1 = $('#box1');
  var box2 = $('#box2');
  var box3 = $('#box3');
  var box4 = $('#box4');
  var box5 = $('#box5');
  var box6 = $('#box6');

  var addBox1 = 1;
  var addBox2 = 11;
  var addBox3 = 15;
  var addBox4 = 21;
  var addBox5 = 23;
  var addBox6 = 33;


  var createBox1 = 10;
  var createBox2 = 14;
  var createBox3 = 20;
  var createBox4 = 22;
  var createBox5 = 32;
  var createBox6 = 36;

  // Box1
  $(document).ready(function () {
    var endBox1 = setInterval(function () {
      if (addBox1 == createBox1) {
        clearInterval(endBox1);
      }
      box1.append("<label  onClick='clickCheck()'  class='button' value="+addBox1+" for="+'check'+addBox1+" style='width:100%;height:30px;'>"+addBox1+"<input id="+'check'+addBox1+" value="+'check'+addBox1+" type='checkbox' style='width:30%;height:21.25px;float:right;'></label >");
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
      box2.append("<label  onClick='clickCheck()'  class='button' value="+addBox2+" for="+'check'+addBox2+" style='width:100%;height:30px;'>"+addBox2+"<input id="+'check'+addBox2+" value="+'check'+addBox2+" type='checkbox' style='width:30%;height:21.25px;float:right;'></label >");
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
      box3.append("<label  onClick='clickCheck()'  class='button' value="+addBox3+" for="+'check'+addBox3+" style='width:100%;height:30px;'>"+addBox3+"<input id="+'check'+addBox3+" value="+'check'+addBox3+" type='checkbox' style='width:30%;height:21.25px;float:right;'></label >");
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
      box4.append("<label  onClick='clickCheck()'  class='button' value="+addBox4+" for="+'check'+addBox4+" style='width:100%;height:30px;'>"+addBox4+"<input id="+'check'+addBox4+" value="+'check'+addBox4+" type='checkbox' style='width:30%;height:21.25px;float:right;'></label >");
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
      box5.append("<label  onClick='clickCheck()'  class='button' value="+addBox5+" for="+'check'+addBox5+" style='width:100%;height:30px;'>"+addBox5+"<input id="+'check'+addBox5+" value="+'check'+addBox5+" type='checkbox' style='width:30%;height:21.25px;float:right;'></label >");
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
      box6.append("<label  onClick='clickCheck()'  class='button' value="+addBox6+" for="+'check'+addBox6+" style='width:100%;height:30px;'>"+addBox6+"<input id="+'check'+addBox6+" value="+'check'+addBox6+" type='checkbox' style='width:30%;height:21.25px;float:right;'></label >");
      var newList = $('#box6');
      newList.fadeIn();
      var colorEnd = setInterval(function () {
        newList.css('color', 'black');
        clearInterval(colorEnd);
      }, 0);
      addBox6 = addBox6 + 1;

    }, 0);
  });
});