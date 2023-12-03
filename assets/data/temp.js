const fs = require("fs");
const data0 = require("./colors_hsv_0.json");
const data1 = require("./colors_hsv_1.json");
const data2 = require("./colors_hsv_2.json");
const data3 = require("./colors_hsv_3.json");

const result = [...data0, ...data1, ...data2, ...data3];

fs.writeFileSync("./colors_min.json", JSON.stringify(result));
