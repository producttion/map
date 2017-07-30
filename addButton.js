$(document).ready(function () {
  var zone1 = $('#zone1');
  var zone2 = $('#zone2');
  var zone3 = $('#zone3');

  var addZone1 = 1;
  var addZone2 = 11;
  var addZone3 = 15;

  var createZone1 = 10;
  var createZone2 = 14;
  var createZone3 = 20;

  // Zone1
  $(document).ready(function () {
    var endZone1 = setInterval(function () {
      if (addZone1 == createZone1) {
        clearInterval(endZone1);
      }
      zone1.append("<label  onClick='clickCheck()'  class='button' value="+addZone1+" for="+'check'+addZone1+" style='width:100%;height:30px;'>"+'a'+addZone1+"<input id="+'check'+addZone1+" value="+'check'+addZone1+" type='checkbox' style='width:30%;height:21.25px;float:right;'></label >");
      var newList = $('#zone2');
      newList.fadeIn();
      var colorEnd = setInterval(function () {
        newList.css('color', 'black');
        clearInterval(colorEnd);
      }, 0);
      addZone1 = addZone1 + 1;

    }, 0)

    // Zone2
    var endZone2 = setInterval(function () {
      if (addZone2 == createZone2) {
        clearInterval(endZone2);
      }
      zone2.append('<a class="button" style="width:100%;height:30px;">' + addZone2 + '<input type="checkbox" style="width:30%;height:21.25px;float:right;"></a>');
      var newList = $('#zone2');
      newList.fadeIn();
      var colorEnd = setInterval(function () {
        newList.css('color', 'black');
        clearInterval(colorEnd);
      }, 0);
      addZone2 = addZone2 + 1;

    }, 0);
  });
});