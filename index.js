/**
 * Proof of concept of a Choose Your Own Adventure game.
 *
 * This project uses the readline-sync node module. Before starting
 * a similar project, you will need to run:
 *
 *   npm init
 *   nmp i readline-sync
 *
 * Before running this project, you will need to run:
 *
 *   npm install
 */

const readlineSync = require("readline-sync");



// Read the story from a separate file
const storyMap = require('./storyMap')



// Variable that are set during the game
let userName = "${username}" // will be overwritten by reader
let guilty = false; // may become true, depending on reader's choices



/**
 * The checkIfGuilty function is used to filter the choices
 * available to the reader, depending on what choices the reader
 * made before.
 *
 * @param {object} choice
 *                 An object that may or may not have a property
 *                 named `guilty`, whose value (if it exists)
 *                 will be either `true` or `false`.
 *
 * @returns {boolean}, calculated as:
 * choice.guilty
 * —————————————\    undefined |   true   |  false
 * guilty        \ ––––––––––––––––––––––––––––––––
 *          true  |    true        true      false
 *         false  |    true       false       true
 */
const checkIfGuilty = choice => (
  choice.guilty === undefined || choice.guilty === guilty
)



/**
 * showScene prints out a description of the current scene, and then
 * optionally:
 *
 *  + Performs a given action, such as "enterName" or "steal"
 *  + Lists possible actions
 *
 * @param {string} key
 *                 Determines which scene should be shown
 */
function showScene(key) {
  const sceneData = storyMap[key];
  // sceneData has a format like:
  // { text: `...`,
  //   action: <"enterName" | "steal" | undefined>,
  //   substitute: <undefined | true>,
  //   choices: [{
  //     text:  '...',
  //     next:   <string key>,
  //     guilty: <undefined | true | false>
  //   }, ...]
  // }
  // Only text is always present

  // Substitute userName for %s in the final scene.
  // See the following links for details on how substitution
  // works with console.log()
  // https://nodejs.org/api/console.html#consolelogdata-args
  // https://developer.mozilla.org/en-US/docs/Web/API/console#using_string_substitutions
  const substitution = sceneData.substitution
                     ? userName
                     : ""
  console.log(sceneData.text, substitution);

  if (sceneData.action) {
    perform(sceneData.action);
  }

  if (sceneData.choices) {
    // Use HARD-CODED filter function to remove inappropriate choices
    const choices = sceneData.choices.filter(checkIfGuilty)
    showPrompt(choices);
  }

  // If there are no choices, the game ends.
}



/**
 * showPrompt shows a list of action choices, plus the option to quit.
 *
 * @param {object} choices will be an array with the format:
 *                 [{
 *                     text:  '...',
 *                     next:   <string key>,
 *                     guilty: <undefined | true | false>
 *                   }
 *                 , ...
 *                 ]
 */
function showPrompt(choices) {
  // Prepare options for readlineSync
  const options = {
    cancel: "Quit",
    hideEchoBack: true,
    mask: ""
  }
  let choiceTexts = choices
    .map((choice) => choice.text)
    .filter( text => !!text )

  if (!choiceTexts.length) {
    return process.exit()
  }


  // For details of the keyInSelect method, see:
  // https://www.npmjs.com/package/readline-sync#utility_methods-keyinselect
  const index = readlineSync.keyInSelect(choiceTexts, '', options);

  if (index < 0) {
    console.log("Thanks for reading!");
    process.exit();
  } else {
    showScene(choices[index].next);
  }
}



/**
 * perform is used to alter global variable values: userName and guilty
 * @param {*} action
 * @returns
 */
function perform(action) {
  switch (action) {
    case "enterName":
      const question = "Enter username\n(or press Ctrl-C to exit): "

      // For details of the question method, see:
      // https://www.npmjs.com/package/readline-sync#basic-methods
      userName = readlineSync.question(question) || "${username}"
      return showScene("audience")

    case "steal":
      return (guilty = true);
  }
}



// Start the game
showScene("start");
