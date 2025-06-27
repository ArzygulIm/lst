import { testCompression, uniqueRandom } from "./tests";

console.log("Простейшие:");
testCompression([1]);
testCompression([1, 2, 3]);
testCompression([300]);

console.log("Случайные:");
testCompression(uniqueRandom(50));
testCompression(uniqueRandom(100));
testCompression(uniqueRandom(500));
testCompression(uniqueRandom(1000));

console.log("Граничные:");
testCompression(Array.from({ length: 9 }, (_, i) => i + 1)); 
testCompression(Array.from({ length: 90 }, (_, i) => i + 10)); 
testCompression(Array.from({ length: 201 }, (_, i) => i + 100)); 
testCompression(
  Array(300).fill(0).flatMap((_, i) => [i + 1, i + 1, i + 1]).slice(0, 900)
);