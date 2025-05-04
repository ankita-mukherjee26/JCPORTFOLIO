function Palindrome_Number(num)
 {

    if (num < 0) return false;

    let orgNum = num;
    let revNum = 0;

    while (num > 0) 
        {
        let digit = num % 10; // For the last digit
        revNum = revNum * 10 + digit; // The number is reversed
        num = Math.floor(num / 10); // To Remove last digit 
    }

    return orgNum === revNum;
}