function createArrayOfTiers(num) {
    let ered_s = "" + num;
    let ered = "";
    let tomb = [];
    for (let i = 0; i < ered_s.length; i++) {

       ered += ered_s[i];
       tomb.push(ered)
    }
    return tomb;
}
