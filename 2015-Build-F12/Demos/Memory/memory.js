(function init() {
    window.addEventListener("DOMContentLoaded", function onDOMContentLoaded() {
        var leak = document.getElementById("leak");
        leak.addEventListener("click", function leak_click() {
            

        });

        var take = document.getElementById("take");
        take.addEventListener("click", function take_click() {
            
            console.takeHeapSnapshot();

        });
    });
})();