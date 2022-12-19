let str = document.getElementById("msg").value
function palindrome( str ) {
 

    let beforeReverse = str;

    /** split function  splits the given string  into characters.
    reverse function  reverse the splited charactersas and joins the string by join method 
    */

    let afterReverse = str.replace(/[\W_]/g, '').toLowerCase().split(/\W/).reverse().join();

    /**if the given string and reversed string are equal then it returns true otherwise returns false */
    if(beforeReverse === afterReverse) {

    return `${beforeReverse} is a palindrome`;

    }

    else {

      return `${beforeReverse}  is not a palindrome`;

      }
    }
  
  
 const value = palindrome(str);


  /**function call by giving string as argument */
  
  //palindrome("eye");

  function getOutput() {


    document.getElementById("output").innerText = value ;
  }