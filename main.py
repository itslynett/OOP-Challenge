from pet import Pet

def main():
    pet = Pet("Fluffy")

    pet.get_status()
    pet.eat()
    pet.sleep()
    pet.play()
    pet.get_status()

    # Bonus
    pet.train("roll over")
    pet.train("fetch")
    pet.show_tricks()

if __name__ == "__main__":
    main()
