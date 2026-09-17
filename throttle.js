
function scrolling(v){

    console.log("user scrolled with: ", v);
}

function throttle(fn,delay){


    let isWaiting = false;

    return function(...args){

        if(isWaiting) return;

         isWaiting = true; // lock the scroll till delay

        setTimeout(()=>{

           
            fn.apply(this,args);
            isWaiting = false; // unlock it after the interval
        }, delay)
    }
}

const throttleScrolling = throttle(scrolling,300);

throttleScrolling('1');
throttleScrolling('2');
throttleScrolling('3');
throttleScrolling('4');
throttleScrolling('5');
throttleScrolling('6');
throttleScrolling('7');

// Both debounce and throttle use closures