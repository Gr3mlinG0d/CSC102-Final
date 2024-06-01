  const string = prompt("Enter a Potential Palindrome");

 function checkPalindrome(string) {
     const stringValue = string.split ('');
     console.log(stringValue);

     const reverseStringValues = stringValue.reverse();
     console.log(reverseStringValues);

     const joinedString = reverseStringValues.join('');
     console.log(joinedString);

     if(string == joinedString){
         console.log("It is a palindrome!");
     }
     else{
         console.log("It is not a palindrome");
     }
 }

checkPalindrome(string);