// WELCOME TO THE PART 3 OF THE JAVASCRIPT PROGRAMMING TUTORIALS
// IN THIS PART WE WILL SEE HOW TO. USE window.prompt() method IN JAVASCRIPT
// SO KINDLY WATCH THE VIDEO TILL END TO GET FULL KNOWLEDGE OF THE CONCEPT
// SO LETS GET STARTED 
// window.prompt() method allows us to get input from a user
// there can be many cases on a website where you would like the user to input something
// FOR EXAPMLE YOU MAY WANT TO ASK THE PERSON HIS NAME, AGE, ETC. 
// prompt() method can easily help in such a case. 
// let's see an example 
// syntax of window.prompt() is as shown 
// prompt(text to be displayed, [default]);
// text: THIS IS THE TEXT THAT YOU WANT TO DISPLAY IN POPUP OR DIALOG BOX
// DEFAULT: THIS WILL CONTAIN A DEFAULT VALUE FOR THE INPUT FIELD. IT WILL BE DEFAULT VALUE FOR THE INPUT TEXT
// DEFAULT PORTION IS OPTIONAL IN NATURE
// SO NOTE THAT YOU CAN USE prompt() in short rather THAN window.prompt(). THE REASON IS SAME AS GIVEN IN LAST VIDEO
// SO LETS SEE AN EXAMPLE 
// IN THIS EXAMPLE WE ASK THE AGE OF PERSON AND THEN WE DISPLAY WHETHER HE IS ELIGIBLE TO VOTE OR NOT


var age_input = prompt(" INPUT YOUR AGE!");
// this will display a dialog box with shown text 
// and will get age of the user
// now if we want to print this age also use console.log() for it
console.log(age_input);
// lets run this 
//so this inputs the age and prints it to console
// so like this we can easily get the input through window.prompt()
// now lets move to next part we have to print whether a person is eligible to vote or not 
// so if person has age equal to or more than 18 he is eligible otherwise not
// so lets implement if staement for it
if(age_input>=18) {
  console.log("YES, YOU ARE ELIGIBLE TO VOTE");
  }
  else {
    console.log("SORRY YOU ARE NOT ELIGIBLE TO VOTE ");
  }
// SO THE AGE THAT WE WILL GET THROUGH PROMPT() WILL GO TO IF CONDITION AND THE SHOWN CODE WILL BE IMPLEMENTED
// SO LETS RUN IT
// SO IT RAN SUCCESFULLY 
// SO LIKE THIS YOU CAN IMPLEMENT MANY DESIRED OPERATIONS BY GETTING USER INPUT
// IN SOME CASES YOU CAN IMPLEMENT SWITCH STATEMENTS TOO, IF YOU WANT TO ACT ACCORDING TO USER'S INPUT
// SO IN SHORT PROMPT() HELPS TO GET USER INOUT EASILY
/* NOTE: IN PROMPT() IF THE USER CLICKS OK BUTTON THE INPUT VALUE IS RETURNED
 OTHERWISE IT RETURNS null
 ALSO NOTE THAT RETURN VALUE OF PROMPT() METHOD IS ALWAYS A STRING. IF THE USER CLICKS CANCEL BUTTON 
 THEN THE RETURN TYPE IS NULL. IF THE USER CLICKS OK WITHOUT TYPING ANYTHING THEN THE RETURN TYPE IS EMPTY STRING 
 ALSO NOTE THAT WHEN THE PROMPT() DIALOG IS DISPLAYED, THE USER IS PREVENTED FROM ACCESS OF OTHER ELEMENTS AND PARTS OF
 THE PAGE. THIS IS BECAUSE THE DIALOG BOXES ARE PRIOR AND MODAL WINDOWS AT THAT TIME ON THE WEBPAGE 

SO I HOPE YOU MUST HAVE UNDERSTOOD THE TOPIC, SO IF YOU LIKE IT, PLEASE LIKE SHARE AND SUBSCRIBE OUR CHANNEL BRAINTOON
FOR MORE UPCOMING VIDEOS. THANK YOU :D */