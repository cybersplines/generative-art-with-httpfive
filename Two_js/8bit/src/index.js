import Two from "two.js";
import * as utils  from "../../utils.js"
const params = {
  width: 1000,
  height: 1000,
};
const elem = document.getElementById("bit");
const two = new Two(params).appendTo(elem);

const width = 10;
const height = 100;
const r = 150;

const numOfShapes = 50;
const shapes = [];

for (let index = 0; index < numOfShapes; index++) {
  const angle = (utils.fullRotation * index) / numOfShapes;
  const y = r * Math.sin(angle);
  const x = r * Math.cos(angle);
  const shape = two.makeRectangle(x, y, width, height);
  shape.fill = "#f1bc31";
  shape.rotate = 0.25 * Math.PI;
  shape.noStroke();
  shapes.push(shape);
}

const group = two.makeGroup(shapes);

let scaling = "grow";
let scaler = 1;
const incrementor = 0.00005;
two.bind("update", () => {
  shapes.forEach((shape) => {
    scaling == "grow"? scaler += incrementor : scaler -= incrementor;

    if (scaler > 2.5) {scaling = "shrink"} else if (scaler < 0.01) scaling = "grow";

    group.translation.set(500, 500);
    group.rotation += 0.0005;
    shape.rotation += 0.005;
    shape.scale = scaler;
  });
});

two.play();
