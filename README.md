# The Bell of Truth
Proof of concept of a Choose Your Own Adventure game.

## Your goal is to rewrite the minified `index.js` file in human-readable code, so that it plays the story as well is it does now  (or better).
<br/>

### Please feel free to replace the Bell of Truth story with an interactive story of your own.

---

## Dependencies
This project uses the readline-sync node module. Before starting
a similar project, you will need to run:

```bash
npm init
nmp i readline-sync
```

Before running this project, you will need to run:

```bash
npm install
```

## Story
The story is stored as an object in `storyMap.js`. The object contains a set of key-value pairs, where the key is a scene name and the value is an object which may have the following entries:

```javascript
{ text: `...`,
  substitute: <undefined | true>,
  action: <string action name>,
  choices: [{
    text:    '...',
    next:    <string key>,
    <other>: <any type>
  }, ...]
}
```

* `text`: This will be displayed in the Terminal.
* `substitute` may be set to `true`, to substitute the name that the hero has chosen for the `%s` token in `text`.
* `action`: If present, this will trigger a function to set a variable. You can use this to indicate if your hero has picked up an item or spoken to a specific character, for instance.
* `choices`: This is a list of the choices available to the hero
  * `text`: Describes the choice
  * `next`: Must be one of the keys of the main object. If the hero makes this choice, this defines which scene will be shown next.
  * `<other>` is optional and may be used to filter which choices appear, depending on previous choices, which triggered an action.

Only `text` is required. If `choices` are missing, the game will end at the current scene.

# Instructions
**Create your own Choose Your Own Adventure game.**

You'll see that `index.js` has been minified, so that you can play the Bell of Truth story, but it will be hard to discover how it runs.

You can rename this file as `min-index.js` and create your own `index.js` file with human-readable code.

## require
You will need the following lines of code:

```javascript
const readlineSync = require('readline-sync');
const storyMap = require('./storyMap);
```

## Functions
You will need to create the following functions:

### `showScene`
Your function should accept a string as an argument. This string should be one of the keys from the `storyMap` object. This key should be "start" at the beginning of the story, "audience" after the player has entered a username, or the value provided by the `next` key in whichever choice the player makes.

### `showChoices`
Your function should accept an array of choice objects. This array may have been filtered to exclude choices that are not appropriate in the current situation, given the player's previous choices.

### `filterChoices`
You can use this function as a callback for the Array `filter` method, to remove choices as described above.

### `perform`
Your function should accept a string such as `"enterName"` or `"steal"`, and set a variable that can be used with `filterChoices`.

## Variables
You will also need to declare these variables:

```javascript
let userName
let guilty
```

## Working with `readline-sync`

The [`readline-sync` module](https://www.npmjs.com/package/readline-sync) allows you to interact with the reader of your story through the Terminal.

This module will be installed automatically if you run `npm install`, after you clone this repository.

### Not Part of the DCI Curriculum

Note that use of `readline-sync` is not part of the DCI curriculum. You will soon be writing JavaScript in a browser, where you will have access to user input from `<input type="text">`, `<select>` and other such elements.

### Text input

You can use the [readlineSync.question](https://www.npmjs.com/package/readline-sync#basic-methods) to obtain a string typed by your reader.

```javascript
userName = readlineSync.question("Enter username: ")
```
Note: leave a blank space after the question itself, so that the input caret will not be right up against the question.

### Choosing from a list
You can use the [`readlineSync.keyInSelect` method ](https://www.npmjs.com/package/readline-sync#utility_methods-keyinselect) to give the reader a choice of options.

Basic usage is like this:
```javascript
index = readlineSync.keyInSelect(items[, query[, options]])
```

The `items` argument must be a list of strings.
The `query` argument can be a string. If not, the default value of 'Choose one from list: ' will be used.
The `options` argument allows you to provide a string that can be used as a description for the CANCEL option `[0]`, and to customize the way the query line appears.

The command will wait for the user to input a single character, and it will return the index of the associated item in the `items` list:

```javascript
const readlineSync = require('readline-sync');
const items = ['Lion', 'Elephant', 'Crocodile'];
let query = 'Which animal?';
let options = { cancel: "None of the above" };
let index = readlineSync.keyInSelect(items, query, options);

if (index >= 0) {
  console.log('Ok, ' + animals[index] + ' goes to your room.')
}
```

In the Terminal window, this would look like this:

```bash
[1] Lion
[2] Elephant
[3] Crocodile
[0] None of the above

Which animal? [1...3 / 0]: 2
Ok, Elephant goes to your room.
```

The following `query` and options will show no query string and the number that the reader enters will not be displayed. If you use these values instead...

```javascript
query = ''
options = {
  cancel: "None of the above",
  hideEchoBack: true,
  mask: ""
}
index = readlineSync.keyInSelect(items, query, options);
```

... this is what you would see in the Terminal window:

```bash
[1] Lion
[2] Elephant
[3] Crocodile
[0] None of the above

Ok, Elephant goes to your room.
```