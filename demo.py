from tests import test_compression, unique_random

if __name__ == "__main__":
    print("Простейшие:")
    test_compression([1])
    test_compression([1, 2, 3])
    test_compression([300])

    print("Случайные:")
    test_compression(unique_random(50))
    test_compression(unique_random(100))
    test_compression(unique_random(500))
    test_compression(unique_random(1000))

    print("Граничные:")
    test_compression(list(range(1, 10)))
    test_compression(list(range(10, 100)))
    test_compression(list(range(100, 301)))
    test_compression(
        [i for i in range(1, 301) for _ in range(3)][:900]
    )