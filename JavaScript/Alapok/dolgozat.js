
//isTriangle
function isTriangle(a,b,c)
{
  if(a <= 0 || b <= 0 || c <= 0){
       return false;
  } else if(((a + b) > c) && ((c + b) > a) && ((c + a) > b)) {
    return true;
  } else {
    return false;
  }
}
console.log(isTriangle(1, 2, 2));
console.log(isTriangle(7, 2, 2));

//Number to digit tiers
function createArrayOfTiers(num) {
    const answer = [];
    const str = num.toString();
    let result = '';
  
    for (let i = 0; i < str.length; ++i) {
      result += str[i];
      answer.push(result);
    }
  
    return answer;
  }

//Time convert
function timeConvert(num) { 
    if(num < 0){
        return `00:00`;
    }
    let hours = Math.floor(num / 60);
    let minutes = num - hours * 60;
    if(hours < 10){
        if(minutes < 10){
            return `0${hours}:0${minutes}`;
        }
        return `0${hours}:${minutes}`;
    }
    else {
        return `${hours}:${minutes}`;
    }
}
console.log(timeConvert(78));

//Credit Card Mask
function maskify(cc) {
    cc = cc.split("");
    for(var i = 0; i < cc.length - 4; i++){
      cc[i] = "#";
    }
    cc = cc.join("");
    return cc;
    }
console.log(maskify("4556364607935616"));
