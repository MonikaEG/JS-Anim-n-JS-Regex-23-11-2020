'use strict';

let poem = `Once upon a midnight dreary, while I pondered, weak and weary,
        Over many a quaint and curious volume of forgotten lore—
        While I nodded, nearly napping, suddenly there came a tapping,
        As of some one gently rapping, rapping at my chamber door.
        “’Tis some visitor,” I muttered, “tapping at my chamber door—
            Only this and nothing more.”

    Ah, distinctly I remember it was in the bleak December;
    And each separate dying ember wrought its ghost upon the floor.
    Eagerly I wished the morrow;—vainly I had sought to borrow
    From my books surcease of sorrow—sorrow for the lost Lenore—
    For the rare and radiant maiden whom the angels name Lenore—
            Nameless here for evermore.

    And the silken, sad, uncertain rustling of each purple curtain
    Thrilled me—filled me with fantastic terrors never felt before;
    So that now, to still the beating of my heart, I stood repeating
    “’Tis some visitor entreating entrance at my chamber door—
    Some late visitor entreating entrance at my chamber door;—
            This it is and nothing more.`;

let howMany = poem.split(/\s/); // Splits the poem array(?) into words through spaces in order to count them.

console.log(`There are ${howMany.length} words in the text.`);

document.getElementById("display").innerHTML = poem.toString(); // Prints the poem on the webpage.
document.getElementById("display2").innerHTML = `Word count: ${howMany.length}`; // Prints the word count on the webpage.

// Poem used: 3 verses of "The Raven" by Edgar Allan Poe