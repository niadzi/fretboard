/**
What’s in a good test failure bug report?
------------------------------------------
What were you testing?
What should it do?
What was the output (actual behavior)?
What was the expected output (expected behavior)?
 */


/* 
I want to : click on any note on the fretboard to set it as the root
// click on note - what is triggered. ? note.onclick
get the clicked note, set it as the root
*/
QUnit.test( "Set Note as root", function( assert ) {
  //var guitar = new Guitar();
  assert.ok( Guitar.getNote('E',3) == "G", 
            "getNote(\'E\',3)->G" );
  assert.ok( guitar.getNote('B',6) == "F", 
            "getNote(\'B\',6)->F" );
  assert.ok( guitar.getNote('G',3) == "A#", 
            "getNote(\'G\',3)->G" );                                      
});


QUnit.test( "getNote(string, fretNumber)", function( assert ) {
  //var guitar = new Guitar();
  assert.ok( Guitar.getNote('E',3) == "G", 
            "getNote(\'E\',3)->G" );
  assert.ok( guitar.getNote('B',6) == "F", 
            "getNote(\'B\',6)->F" );
  assert.ok( guitar.getNote('G',3) == "A#", 
            "getNote(\'G\',3)->G" );                                      
});




/* add colour names */
