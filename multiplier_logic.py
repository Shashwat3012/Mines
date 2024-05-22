# As of now the logic is broken, should be changed as it is giving very high payouts at the end 

def generate_multipliers(num_mines, num_gems, initial_multiplier, increment, target_expected_value=0.99):
    total_tiles = num_mines + num_gems
    probability_gem = num_gems / total_tiles
    
    multipliers = []
    current_multiplier = initial_multiplier
    expected_value = 1
    
    while len(multipliers) < num_gems:
        expected_value_step = (probability_gem * current_multiplier + (1 - probability_gem) * 0)
        expected_value *= expected_value_step
        multipliers.append(current_multiplier)
        
        # Adjust the multiplier incrementally to maintain an overall target expected value
        current_multiplier += increment
    
    # Adjust the last multiplier to fine-tune the expected value to the target
    adjustment_factor = target_expected_value / expected_value
    multipliers[-1] *= adjustment_factor
    
    return multipliers

def generate_all_multipliers(max_mines, max_gems, initial_multiplier=1.03, increment=0.05, target_expected_value=0.99):
    all_multipliers = {}
    for mines in range(1, max_mines + 1):
        gems = max_gems - mines
        if gems > 0:
            multipliers = generate_multipliers(mines, gems, initial_multiplier, increment, target_expected_value)
            all_multipliers[f'{mines} mine(s), {gems} gem(s)'] = multipliers
    return all_multipliers

# Example usage
max_mines = 24
max_gems = 24
multipliers_dict = generate_all_multipliers(max_mines, max_gems)

# Print the generated multipliers
for key, value in multipliers_dict.items():
    print(f"{key}: {value}")
