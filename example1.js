var o = {
    f1: function() {
        console.log('hi');
    },
    f2: function() {
        this.f1();
    }
};

o.f2.prototype.f1 = function() {
    console.log('bye');
}

var k = {
    f1: function() {
        console.log('pfff');
    }
}

new o.f2();
o.f2.apply(k);
o.f2();
var x = o.f2;
x();

