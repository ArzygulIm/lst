import { serialize, deserialize } from './serializer.js';

export function testCompression(nums) {
    const original = JSON.stringify(nums);
    const compressed = serialize(nums);
    const restored = deserialize(compressed);

    const ratio = (compressed.length / original.length * 100).toFixed(1);

    const isCorrect = JSON.stringify([...nums].sort((a,b)=>a-b)) === JSON.stringify([...restored].sort((a,b)=>a-b));

    console.log(`Исходные (${nums.length} шт): ${original.length} символов`);
    console.log(`Сжатые: ${compressed.length} символов`);
    console.log(`Коэффициент сжатия: ${ratio}%`);
    console.log(`Корректность: ${isCorrect}`);
    console.log('---');
}