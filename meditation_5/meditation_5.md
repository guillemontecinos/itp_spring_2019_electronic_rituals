# Meditation 5 - Random number generator
For this meditation I composed a random generator algorithm that performed a variation of the middle square method. The algorithm starts with a seed and executes the following tasks:
1. power seed to 3
2. check if the result of the previous operation hast 10 digits, if not it fits it to 10
3. swipe digits, placing the 5 first digits in the second half of the numer and the last 5 digits in the first half of the number
4. calculate the square root of the swiped number
5. return the result in the range of 0 - 1
6. set the result of step 4 into a 4 digit number