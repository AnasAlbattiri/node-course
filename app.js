const lod = require('lodash');

const list = [1,[2,[3,[4]]]]

const sortList = lod.flattenDeep(list);

console.log(sortList);
