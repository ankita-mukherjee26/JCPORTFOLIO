function checkAnagram(a,b) 
{

       // same length cannot be Anagram
    if (a.length!== b.length)
         {
        return false;
    }
       // Functions to rearrange the string
    let string1= a.split('').sort().join('');
    let string2 = b.split('').sort().join('');

    let result = (string1 === string2);
    return result;
}
