let count = 0;
const value =  document.getElementById("value");

const decrease =()=>{
    count--;
    value.textContent = count;
}

const increase =()=>{
    count++;
    value.textContent = count;
}

const reset =()=>{
    count = 0;
    value.textContent = count;
}