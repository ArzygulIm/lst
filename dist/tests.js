"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testCompression = testCompression;
exports.uniqueRandom = uniqueRandom;
const serializer_1 = require("./serializer");
function testCompression(nums) {
    const original = JSON.stringify(nums);
    const compressed = (0, serializer_1.serialize)(nums);
    const restored = (0, serializer_1.deserialize)(compressed);
    const ratio = (compressed.length / original.length * 100).toFixed(1);
    const isCorrect = JSON.stringify([...nums].sort((a, b) => a - b)) === JSON.stringify([...restored].sort((a, b) => a - b));
    console.log(`Исходные (${nums.length} шт): ${original.length} символов`);
    console.log(`Сжатые: ${compressed.length} символов`);
    console.log(`Коэффициент сжатия: ${ratio}%`);
    console.log(`Корректность: ${isCorrect}`);
    console.log('---');
}
function uniqueRandom(length) {
    const set = new Set();
    while (set.size < length) {
        set.add(Math.floor(Math.random() * 300) + 1);
    }
    return Array.from(set);
}
