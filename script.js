function palindrome( str ) {

    let before = str;

    /** split function  splits the given string  into characters.
    reverse function  reverse the splited charactersas and joins the string by join method 
    */
    let after = str.split(/\W/).reverse().join();

    /**if the given string and reversed string are equal then it returns true otherwise returns false */

    if(before  == after) {

    return true;

    }

    else {

      return false;

      }
  }
  /**function call by giving string as argument */
  
  palindrome("eye");

  function getOutput() {


    document.getElementById("output").innerText = palindrome("eye") ;
  }