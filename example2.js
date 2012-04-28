var object = {
  name: "simple object out here"
};

var anotherObject = {
  object: { name: "simple object in here" },
  p1: this.object.name,
  f1: function () {
    return this.object.name;
  }
};

console.log(anotherObject.p1);
console.log(anotherObject.f1());

