// DO NOT MODIFY THIS FUNCTION SIGNATURE

lastBtn = null;

function show(button_element) {
    /* TAs' photo files are inside the subfolder "photos/"
        - brandon.jpg
        - darryl.jpg
        - nick.jpg
        - yinkit.jpg
    */

    // Fun Facts of TAs
    const facts = {
        "brandon": 
            "Outside of his time at SMU, Brandon plays in the English Premier League, where fans affectionately refer to him as 'Sonny.' Be sure to cheer for him the next time you catch him on TV!",

        "darryl":
            "Well, it's not Darryl's fault he was born handsome! Fans everywhere just can't resist him. If you spot him on campus, don't forget to shout 'Oppa Darryl!'",

        "nick":
            "Nick is a man of many talents and many secrets. As a freelance nuclear physicist for North Korea, the number of weapons of mass destruction he's been involved with... well, let's just say it's off the charts.",

        "yinkit":
            "Once upon a time, a kind-looking woman wandered the streets of Pyongyang, offering free water bottles to unsuspecting residents. Little did they know, the 'water' was actually poison. Now living in secret in Singapore, she once tried to poison her professor's kittens - who, against all odds, miraculously survived."
    }

    // YOUR CODE GOES BELOW

    // What's inside of button_element?
    //  What is its data type?
    //  Does button_element reveal any information about which TA was selected?
    //   Check out the HTML code of the buttons and look at button attributes.
    console.log(button_element.innerText); // Brandon
    console.log(typeof button_element); // object
    console.log(button_element); // <button onclick="show(this)" id="darryl">Darryl</button>
    console.log(button_element.getAttribute('id')); //brandon

    // Task 1 - Fun Fact
    // Now that you know which TA was selected by the user,
    //  how can you retrieve this TA's fun fact?
    // Check out the 'facts' const declared above.
    // What is the data type of this const? Is this an (indexed) Array? or Object?
    // object
    let taName = button_element.getAttribute('id');
    let fact = facts[taName];
    let displayFact = document.getElementById('ta-fun-fact');
    displayFact.innerText = fact;

    // Task 2 - Photo
    // Now that you know which TA was selected by the user,
    //  how do you access the TA's photo? Where is his/her photo?
    // Where in the HTML should this photo be displayed?
    // How can you replace the default photo with this TA's photo?
    let taPhoto = 'photos/' + taName + '.jpg';
    let displayPhoto = document.getElementById('ta-photo');
    displayPhoto.setAttribute('src', taPhoto);

    // Task 3 - Highlighting & Un-highlighting buttons
    // For the selected TA, his/her button should be having a 'yellow' background
    //  and its text color set to 'black'.
    button_element.style.backgroundColor = 'yellow';
    button_element.style.color = 'black';

    // Can shorten it by using siblings, so at least you can only get buttons from that level
    // let btns = document.getElementsByTagName('button');
    // for (btn of btns) {
    //     if (btn !== button_element && btn.style.backgroundColor === 'yellow'){
    //         btn.style.backgroundColor = 'darkblue';
    //         btn.style.color = 'white'
    //     }
    // }

    // OR you can just have a global variable that will store the last button so you can revert the styling back to the old one
    // This is more efficient
    if (lastBtn) {
        lastBtn.style.backgroundColor = 'darkblue';
        lastBtn.style.color = 'white';
    } 
    lastBtn = button_element;
    
}

// Please avoid writing spaghetti code!
// Feel free to add more functions as needed!
// Modularize your logics into bite-sized units where
//   Each 'unit' handles one logic.

