import json
import random
from serializer import serialize, deserialize

def test_compression(nums: list[int]) -> None:
    original_json = json.dumps(nums)
    compressed = serialize(nums)
    restored = deserialize(compressed)

    ratio = len(compressed) / len(original_json) * 100
    correct = sorted(nums) == sorted(restored)

    print(f"Исходные ({len(nums)} шт): {len(original_json)} символов")
    print(f"Сжатые: {len(compressed)} символов")
    print(f"Коэффициент сжатия: {ratio:.1f}%")
    print(f"Корректность: {correct}")
    print('---')


def unique_random(n: int) -> list[int]:
    return random.sample(range(1, 301), min(n, 300))
