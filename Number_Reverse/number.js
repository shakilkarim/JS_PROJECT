
// function numberReverse (n) {
    
//     if(n == 0) return;
//     let num = n % 10;
//     numberReverse(n / 10);
//     console.log(num);
// }   

// let val = 34;
//  const re = numberReverse(val);


function NumberRevers(val){
        
        let rem,reversNumber = 0;
        while(val > 0){
            rem = val % 10;
           reversNumber = reversNumber * 10 + rem;
           val = (val / 10);
        }

      return reversNumber;
}
let val = 1000;
let result = NumberRevers(val);
console.log(result);