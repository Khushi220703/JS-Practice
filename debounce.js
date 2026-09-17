function search(w){

    console.log("API Call:", w, new Date().toLocaleTimeString());
} // this function need to be debounced so that it will be called only when action stop.

function debounce(fn,delay){

    let timerId = null;

    return function(...args){ // this is the debounced version of 'search'
        console.log("Function triggered:", args[0]);
        clearTimeout(timerId);

        timerId = setTimeout(()=>{

            fn.apply(this,args) //even if the argugument is array debouncedSearched(['K','h']); it will handle 
        },delay)

    }
}

const debouncedSearched = debounce(search,300);

debouncedSearched('K');
debouncedSearched('Kh');
debouncedSearched('Khu');
debouncedSearched('Khush');
debouncedSearched('Khushbu');

// Both debounce and throttle use closures

