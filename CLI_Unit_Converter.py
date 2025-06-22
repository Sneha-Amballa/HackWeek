import argparse

def main():
    parser = argparse.ArgumentParser(description="Simple CLI Temperature Converter")

    parser.add_argument("value", type=float, help="Temperature value to convert")
    parser.add_argument("scale", choices=["C", "F"], help="Target scale: C or F")

    args = parser.parse_args()

    if args.scale == "F":
        result = (args.value * 9 / 5) + 32
        print(f"{args.value}°C = {result:.2f}°F")
    else:
        result = (args.value - 32) * 5 / 9
        print(f"{args.value}°F = {result:.2f}°C")

if __name__ == "__main__":
    main()