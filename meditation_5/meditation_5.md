# Meditation 5 - Random number generator
For this meditation I composed a random generator algorithm that performed a variation of the middle square method. The algorithm starts with a seed and executes the following tasks:
1. power seed to 3
2. check if the result of the previous operation hast 10 digits, if not it fits it to 10
3. swipe digits, placing the 5 first digits in the second half of the numer and the last 5 digits in the first half of the number
4. calculate the square root of the swiped number
5. return the result in the range of 0 - 1
6. convert the result of step 4 into a 4 digit number and set it as seed for the next random number

```javascript
let seed = 1234
function myRandom() {
    let digits = 0
    let randomVal = 0
    seed = seed * seed * seed
    seed = seed.toString()
    if(seed.length > 10){
        let delta = seed.length - 10
        seed = seed.substring(delta)
    }
    else{
        while(seed.length < 10){
            seed += '0' + seed
        }
    }
    seed = seed.substring(5) + seed.substring(0,5)
    seed = parseInt(seed)
    seed = Math.sqrt(seed)
    digits = Math.floor(seed).toString().length
    randomVal = seed / Math.pow(10,digits)
    seed /= Math.pow(10,(digits-4))
    seed = Math.floor(seed)
    return randomVal
}
```

The function seems to output normally distributed random values for the first 160 iterations –the first 4 row of the sketch– after what it shows certain periodicity in the distribution. Despite the above, this function doesn't converge to a fixed value so it has a poor but succesful performance.

<p align="center">
  <img src="https://github.com/guillemontecinos/itp_spring_2019_electronic_rituals/blob/master/meditation_5/documentation/random.png" align="middle" width="70%">
</p>