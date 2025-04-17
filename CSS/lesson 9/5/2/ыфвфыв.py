total_sum = 0
count = 0

while count < 10:
    num = int(input())
    
    if num == 0:
        break

    if num % 6 == 0 and num % 10 == 4:
        total_sum += num
    
    count += 1

print(total_sum)