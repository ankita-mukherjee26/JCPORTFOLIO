function revString(string) 
{
    let rev = '';
    for (let i = string.len-1; i >= 0; i--)
         {
        rev += string[i];
    }
    return rev;
}
