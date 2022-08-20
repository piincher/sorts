"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sorter_1 = require("./Sorter");
const NumberCollection_1 = require("./NumberCollection");
const numberCollection = new NumberCollection_1.NumbersCollection([6, 3, -5, 0]);
const sort = new Sorter_1.Sorter(numberCollection);
sort.sort();
console.log("hid");
console.log("sorct", numberCollection.data);
