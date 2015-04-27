var __extends = this.__extends || function (d, b) {
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Animal = (function () {
    function Animal(name) {
        this.name = name;
    }
    Animal.prototype.move = function (meters) {
        console.log(this.name + " moved " + meters + "m.");
    };
    return Animal;
})();
var Snake = (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        _super.call(this, name);
    }
    Snake.prototype.move = function () {
        console.log("Slithering...");
        _super.prototype.move.call(this, 5);
    };
    return Snake;
})(Animal);
var Horse = (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        _super.call(this, name);
    }
    Horse.prototype.move = function () {
        console.log("Galloping...");
        _super.prototype.move.call(this, 45);
    };
    return Horse;
})(Animal);
(function () {
    document.addEventListener("DOMContentLoaded", function () {
        var hiFromTs = document.getElementById("hiFromTs");
        hiFromTs.addEventListener("click", function () {
            var sam = new Snake("Sammy the Python");
            var tom = new Horse("Tommy the Palomino");
            sam.move();
            tom.move(34);
        });
    });
})();
//# sourceMappingURL=simple.js.map
