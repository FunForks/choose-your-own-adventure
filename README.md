# The Bell of Truth
Proof of concept of a Choose Your Own Adventure game.

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
  * `<other>` may be used to filter which choices appear, depending on previous choices, which triggered an action.
  
Only `text` is required. If `choices` are missing, the game will end at the current scene.