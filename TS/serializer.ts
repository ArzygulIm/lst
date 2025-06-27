const base64chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

export function serialize(nums: number[]): string {
    const bitset = new Array(300).fill(0);
    for (const n of nums) {
        if (n < 1 || n > 300) throw new Error(`Invalid number: ${n}`);
        bitset[n - 1] = 1;
    }

    let bits = bitset.join('');
    while (bits.length % 6 !== 0) bits += '0';

    let result = '';
    for (let i = 0; i < bits.length; i += 6) {
        const chunk = bits.slice(i, i + 6);
        const val = parseInt(chunk, 2);
        result += base64chars[val];
    }

    return result;
}

export function deserialize(str: string): number[] {
    let bits = '';
    for (const ch of str) {
        const val = base64chars.indexOf(ch);
        if (val === -1) throw new Error(`Invalid character: ${ch}`);
        bits += val.toString(2).padStart(6, '0');
    }

    const result: number[] = [];
    for (let i = 0; i < 300; i++) {
        if (bits[i] === '1') result.push(i + 1);
    }

    return result;
}