let decreaseBtn =document.querySelector('.decreaseBtn');
let resetBtn =document.querySelector('.resetBtn');
let increaseBtn =document.querySelector('.increaseBtn');
let count=0;
//decrease button
decreaseBtn.addEventListener('click', function(){
count-=1;
document.querySelector('.zero').innerHTML=count;
document.querySelector('.decrease-count').style.color='red';
});
//reset button
resetBtn.addEventListener('click', function(){
    count=0;
    document.querySelector('.zero').innerHTML=count;
    document.querySelector('.zero').style.color='black';
});
//increase button
increaseBtn.addEventListener('click', function(){
    count+=1;
    document.querySelector('.zero').innerHTML='+' + count ;
});