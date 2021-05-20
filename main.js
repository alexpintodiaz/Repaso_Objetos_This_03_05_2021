const objct = {
    age: 29,
    name: "Alexander Pinto",
    hi: function (){
        return `Hola ${this.name} .cómo estas?`;
    },
};
objct.last = "Pinto";
const ins = Object.create(objct);
ins.name = "Alex";
ins.setName = function (){ objct.name = ins.name };
ins.getName = function (){ return objct.name; };
console.log(objct);
console.log(ins);
console.log(ins.hi());

