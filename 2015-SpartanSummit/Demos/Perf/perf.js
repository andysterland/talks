$(window).ready(function () {
    $("#go").click(function () {
        performance.mark("ExampleScenario-Begin");
        $(".box").each(function (index, item) {

            var newTop = Math.random() * $(window).height() - $(item).width();
            var newLeft = Math.random() * $(window).width() - $(item).height();

            var newColorRed = Math.floor(Math.random() * 255);
            var newColorBlue = Math.floor(Math.random() * 255);
            var newColorGreen = Math.floor(Math.random() * 255);

            var newColorString = "rgb( " + newColorRed + ", " + newColorBlue + ", " + newColorGreen + ")";

            $(item).css({
                "top": newTop,
                "left": newLeft,
                "background-color": newColorString
            });
         });   
         performance.mark("ExampleScenario-End"); 
         performance.measure("Draw random boxes", "ExampleScenario-Begin", "ExampleScenario-End");
    });
});