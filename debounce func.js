function debounce(func,delay) 
{
    let timeoutId;
    return function(args) 
    {
        const context = this;
        // Clearing the previous timeout
        clearTimeout(timeoutId);
        // Setting a new timeout
        timeoutId = setTimeout(() =>
             {
            func.apply(context,args);
             },
         delay);
    };
}