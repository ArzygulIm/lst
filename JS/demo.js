import { testCompression } from "./tests.js";
console.log("Простейшие:");
testCompression([1]);
testCompression([1, 2, 3]);
testCompression([300]);

console.log("Случайные:");
testCompression([...new Set(Array.from({ length: 50 }, () => Math.floor(Math.random() * 300 + 1)))]);
testCompression([...new Set(Array.from({ length: 100 }, () => Math.floor(Math.random() * 300 + 1)))]);
testCompression([...new Set(Array.from({ length: 500 }, () => Math.floor(Math.random() * 300 + 1)))]);
testCompression([...new Set(Array.from({ length: 1000 }, () => Math.floor(Math.random() * 300 + 1)))]);

console.log("Граничные:");
testCompression(Array.from({ length: 9 }, (_, i) => i + 1)); 
testCompression(Array.from({ length: 90 }, (_, i) => i + 10)); 
testCompression(Array.from({ length: 201 }, (_, i) => i + 100)); 
testCompression(
  Array(300).fill().flatMap((_, i) => [i + 1, i + 1, i + 1]).slice(0, 900)
);