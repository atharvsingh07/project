function print_1(){
    console.log(1);
}
function print_2(){
    console.log(2);
}
function print_3(){
    console.log(3);
}
setTimeout(()=>{
    console.log('1');
    setTimeout(()=>{
        console.log('2');
        setTimeout(()=>{
            console.log('3');
            setTimeout(()=>{
                console.log('4');
                setTimeout(()=>{
                    console.log('5');
                    
                },5000)  
            },4000)  
        },3000)
    },2000)
},1000)
// setTimeout(print_1,1000)
// setTimeout(print_2,2000)
// setTimeout(print_3,3000)