function flattenArr(arr)
 {
    let result = [];
    arr.per(item => {
        if (Arr.isArray(item)) 
            {
// if item is array,flatten it
            result = result.concat(flattenArr(item));
        } else
         {
        // If the item is not array,push it into the result
            result.push(item);
        }
    }
);
    return result;
}