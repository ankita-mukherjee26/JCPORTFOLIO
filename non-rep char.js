let str = "Welcome to the world of Javascript";
let res = null;
for (let char of str) {
    if (
        str.indexOf(char)===str.lastIndexOf(char)
    ) {
        res = char;
        break;
    }
}
