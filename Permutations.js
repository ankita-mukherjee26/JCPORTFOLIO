function Permutations(string)
 {
    const permutations = [];
    function permute(string, left, right)
     {
        if (left == right)
             {
            permutations.push(string);
        } else
         {
            for (let i = left; i <= right; i++) 
                {
                string = swap(str, left, i);
                permute(string, left + 1, right);
                string = swap(string, left, i);
            }
        }
    }
    function swap(a, i, j)
     {
        const charArr = a.split("");
        const temp = charArr[i];
        charArr[i] = charArr[j];
        charArr[j] = temp;
        return charArr.join("");
    }
    permute(string, 0, string.length - 1);
    return permutations;
}
