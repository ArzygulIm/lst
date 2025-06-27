BASE64_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"

def serialize(nums: list[int]) -> str:
    bitset = [0] * 300
    for n in nums:
        if n < 1 or n > 300:
            raise ValueError(f"Invalid number: {n}")
        bitset[n - 1] = 1

    bits = ''.join(map(str, bitset))
    while len(bits) % 6 != 0:
        bits += '0'

    result = ''
    for i in range(0, len(bits), 6):
        chunk = bits[i:i+6]
        val = int(chunk, 2)
        result += BASE64_CHARS[val]

    return result


def deserialize(s: str) -> list[int]:
    bits = ''
    for ch in s:
        val = BASE64_CHARS.find(ch)
        if val == -1:
            raise ValueError(f"Invalid character: {ch}")
        bits += f'{val:06b}'

    result = []
    for i in range(300):
        if bits[i] == '1':
            result.append(i + 1)
    return result