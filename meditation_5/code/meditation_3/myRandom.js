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