    var endZoneA = setInterval(function() {

        if (buttonZoneA == createButtonZA) {
            clearInterval(endZoneA);
        }
        zoneA.append("<button class='cbtn' onClick='clickOn()' value=" + buttonZoneA + " class='zoomItem'  style='font-size:50%; width:100%;height:9%;'> " + 'boundary' + buttonZoneA + "</button");
        var newListA = $('#zone-A');
        newListA.fadeIn();
        var colorEnd = setInterval(function() {
            newListA.css('color', 'black');
            clearInterval(colorEnd);
        }, 0);
        buttonZoneA = buttonZoneA + 1;

    }, 0);