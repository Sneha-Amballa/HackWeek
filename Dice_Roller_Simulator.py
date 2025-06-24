import random
import time

def roll_die():
    input("Press Enter to roll the die...")
    print("Rolling the die...")
    for i in range(3, 0, -1):
        print(f"{i}...")
        time.sleep(0.5)
    result = random.randint(1, 6)
    print(f"\nYou rolled a {result}!")

roll_die()
