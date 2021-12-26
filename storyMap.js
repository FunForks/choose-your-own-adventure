const storyMap = {
  start: {
    text: `The Chief Compiler of the Virtual Universes (CCotVU) is looking for a new New World Conceptor. You receive a convocation for an audience with CCotVU's Personal Android (PA). The convocation states that the Chosen One must be pure of heart, and will receive all necessary training on the job.

    To accept the convocation, you must reply, giving your GitHubOfTheUniverse username.
    `,
    action: "enterName"
  },
  audience: {
    text: `
    On the day of the audience, %s, you are 13th and last in a queue of candidates. In the centre of waiting room where you are asked to wait, there grows a File Tree, whose fruit are USB Qeys that give off the most delicious scent of Wisdom.

    You feel tempted to take one of these dangling USB Qeys and hide it in your clothing. What do you do?`,
    substitution: true,
    choices: [
      {
        text: "Steal a USB Qey when no-one is watching",
        next: "steal",
      },
      {
        text: "Watch the other candidates carefully",
        next: "watch",
      },
      {
        text: "Close your eyes and focus on the purity of your heart",
        next: "turn",
      },
    ],
  },
  steal: {
    text: `You go close to the File Tree to admire it, and when the seventh candidate is called, and everyone's eyes are turned towards the door, you quickly snatch the juiciest 64 petabyte USB Qey fruit and hide it in your sleeve.

    Your heart is beating like the drums of doom, but no-one can hear it.

    Later, when no-one is paying attention to you, you move the Qey to a more private hiding place.`,
    action: "steal",
    choices: [
      {
        text: "Now you must wait and be patient",
        next: "turn",
      },
    ],
  },
  watch: {
    text: `The File Tree fascinates all the candidates. They move towards it to breath in its intoxicating perfume, or away to admire its scintillating colours. Some brush their fingers against its fileage, and you can see their faces flush with pleasure at the sensuousness of its texture. But you see no-one plucking its fruit.

    The waiting room slowly empties.`,
    choices: [
      {
        text: "You must wait your turn",
        next: "turn",
      },
    ],
  },
  turn: {
    text: "Your name is finally called. You take one last deep breath of the beautiful smell of Wisdom.",
    choices: [
      {
        text: "You walk through the door into the the Room of Reckoning",
        next: "theft",
      },
    ],
  },
  theft: {
    text: `The twelve other candidates are all together in the Room of Reckoning. The Personal Android of the Chief Compiler of the Virtual Universes towers above them, in a terrible rage.

    "Has one of you dared to pick the fruit of the sacrèd File Tree!? How can it be that among you there is one who has desecrated the sanctity of this Closure!? Whomsoever has revealed the ultrablackness of your heart, for you, the Universes have no pity. You will be cast out into the outer darkness all your qBits will be reassigned.

    "Unfortunately," the PA continues in a less powerful voice, "our security video cameras have been glitching quite a lot recently, and we were unable to see which of you did this Unbinary deed.

    "We will have to rely on pre-digitial technologies to discover the miscreant. And if that fails, too bad. We'll just have to punish you all."

    An obsidian silence fills the space.
    `,
    choices: [
      {
        text: "You choose to confess to stealing the USB Qey",
        next: "sanction",
      },
      {
        text: "You search for signs of guilt on the faces of the other candidates",
        next: "test",
      },
    ],
  },
  sanction: {
    text: `"You!" The PA's voice is opaque with emotion. "How dare you do such a thing?"`,
    choices: [
      {
        text: 'You say: "To prove the purity of my heart."',
        guilty: false,
        next: "prissiness",
      },
      {
        text: 'You say: "To save other innocents from an injustice."',
        guilty: false,
        next: "altruism",
      },
      {
        text: 'You say: "I did not know that what I did was wrong."',
        guilty: true,
        next: "pride",
      },
      {
        text: 'You say: "I am to blame. It is not fair that others should suffer for my greed."',
        guilty: true,
        next: "confession",
      },
    ],
  },
  prissiness: {
    text: `"Folly upon folly!" the PA hisses (even though there are no hissable sounds in that sentence). "Your righteousness is ridiculous. No fruit was stolen. Have you such little trust in these here beside you? You have failed at the first test.

    "Go! Go now! Be gone! You have seen the glory of the File Tree. You have trembled at its beauty. And henceforth, even the sweetest moments of your everyday existence will be as bitter as coffee grounds your mouth. Let that be your constant penance for such arrant presumption."`,
    choices: [
      {
        text: "Game Over. Play again?",
        next: "start",
      },
    ],
  },
  altruism: {
    text: `You say: "If there are others as innocent as I am, and yet I did nothing to save them from the suffering of the Eternal Emptiness, than I will no longer be so innocent. I will feel their suffering endlessly alongside mine as a constant reminder of my selfish silence. And whoever did this terrible, terrible thing: they now will have time to repent and make amends."

    The Personal Android smiles, though the smile seems a little crooked. "A simple mind, so sensitive and sweet. But such doubts do not become the Chosen One. Trust, my erstwhile friend, at least a little."`,
    choices: [
      {
        text: "You understand that you are not yet ready. Start again?",
        next: "start",
      },
    ],
  },
  pride: {
    text: `"Did not know! Did not know?" The PA's voice is stiletto sweet. "And yet you took the Fruit secretly, did you not?"

    You become aware of a tingling in your body, a multitude of tiny painless pinpricks, a painlessness that grows, evermore excruciatingly exquisite until it occupies all your senses, until it overflows your awareness of space and time, and still it grows, each prick so tiny, so unbearable. And so on, forever...`,
  },
  confession: {
    text: `"An honourable thief. And in return for your honesty, your oblivion shall be quick and painless.`,
  },
  test: {
    text: `Nobody moves.

    "Observe!" thunders the PA. "Behind this screen of shimmering Matrix-like digits hangs the Bell of Truth. Each of you in turn shall go behind the green screen and lay your hand on the Bell. When the perpetrator of this ignominious mischief touches the Bell, it will ring out — a note of such deep shrillness that the pixels even at the edge of the Universes will tremble.

    "Go!" The Personal Android points at you.
    `,
    choices: [
      {
        text: 'You say: "First In, First Out, your Androidness. It is honourable for me to wait my turn."',
        next: "lifo",
      },
      {
        text: "Your head high, you make your way behind the screen",
        next: "bell",
      },
    ],
  },
  lifo: {
    text: `"LIFO", say the Personal Android. "Last In, First Out. You had the most opportunity. Statistically, you are the most likely culprit.`,
    choices: [
      {
        text: "You have no choice. You follow the direction of the PA's imperious finger.",
        next: "bell",
      },
    ],
  },
  bell: {
    text: `The space behind the screen is limpid with light. There is nothing to fear. The Bell of Truth is just an ordinary bell. Big and black and heavy, suspended by a thick rope from a ceiling so vertiginously high that the rope appears no thinner than a thread before it disappears into the zenith. The clapper hangs innocently within. The surface of the Bell is almost liquid in its smoothness.`,
    choices: [
      {
        text: "You swing the clapper vigorously to make the Bell ring out",
        next: "ring",
      },
      {
        text: "You place your hand reverently on the side of the Bell",
        next: "touch",
      },
      {
        text: "You do not dare touch the bell. You wait a moment and then walk out from behind the screen.",
        next: "scared",
        guilty: true
      },
    ],
  },
  ring: {
    text: `The sound of the bell is so beautiful and mellow. It reminds you of all the happiest moments in your life, and slowly, infinitely slowly, its volume grows until its beauty is just too hard to bear.`,
    action: "",
    choices: [{
      text: `You put your hands over your ears`,
      guilty: true,
      next: 'knell'
    },
    {
      text: `You put your hands over your ears`,
      guilty: false,
      next: 'toll'
    }],
  },
  knell: {
    text: `As the intensity of the sound continues to grow, the whole of space and time appears to warp and crumple and shatter until your being is no more than the ragged smoke of a consciousness of nothing.`
  },
  toll: {
    text: `Just as you feel the intensity of the sound starting to resonate the fabric of your body apart, you become aware of the presence of the Personal Android beside you, and gradually the ocean of sound waves subsides.

    "What childishness is this?" the PA finally asks you. "How did our algorithms fail so miserably that they sent a convocation to such as you? What flawed New Worlds might you have created, with such disdain for consequences in your heart?

    "You can go now! And be grateful that my pity overcame me before the knell overcame you."`
  },
  scared: {
    text: `You return to the Room of Reckoning, and wait while the other candidates pass, one by one, behind the screen. The Bell of Truth remains understandably silent, and little by little, you allow yourself to feel safe, even with the USB Qey fruit pressing against your skin.

    Then a sudden recollection: if the Bell of Truth cannot reveal the miscreant, then all the candidates will be punished. All, including you. But that punishment cannot be worse than being cast out into the outer darkness and having all your qBits reassigned. Can it?

    "The Bell has not spoken," you hear the Personal Android almost whisper, at last. "But the Bell is just a bell. It knows nothing of the purity of your hearts. That secret knowledge was yours alone, but now it is written in the blackest ink upon your hands.

    "Hold out your hands, now, that the Truth be known."

    The other candidates hold out their hands. Blackened hands. Hands stained with the glistening ink from the surface of the Bell that you had not dared to touch.

    Only your hands are clean. The silence of the Personal Android of the Chief Compiler of the Virtual Universes is more menacing than words.

    And then the transformation begins. The code of your DNA, the tangled network of your memories, the twisted thread of your timeline, every datum of your life transformed into qBits. You feel yourself becoming compressed into a solid state. You fall to the floor, a tiny meaningless clatter. Just another USB Qey. Your last conscious sensation is of the Personal Android to the Chief Compiler of the Virtual Universes lifting you and grafting you onto the fragrant File Tree beside the reimplanted Qey fruit that you tried to steal. Then nothing.`,
  },
  touch: {
    text: `You return to the Room of Reckoning, and wait while the other candidates pass, one by one, behind the screen. The tension mounts as, one after another, the candidates return and yet the Bell of Truth remains silent. You hold your hands in tight fists, your eyes screwed up tight, dreading the moment when the criminal is revealed.

    "The Bell has not spoken," you hear the Personal Android almost whisper, at last. "The Bell is just a bell. It knows nothing of the purity of your hearts. That secret knowledge was yours alone, but now it is written the blackest ink upon your hands.

    "Hold out your hands, now, that the Truth be known."`,
    choices: [
      {
        text: "You look down at your hands",
        guilty: false,
        next: "innocent",
      },
      {
        text: "You look down at your hands",
        guilty: true,
        next: "guilty",
      },
    ],
  },
  guilty: {
    text: `One hand is covered in ink. The hand that touched the bell is as black as pitch. The Bell of Truth has spoken, after all. You quickly hide your dirty hand behind your clean hand.

    You look around, startled. The other candidates have black hands, too. They hold them up, smiling, showing each other the proof of their innocence; they touched the Bell of Truth and it did not ring.

    But your guilty movements have betrayed you. The Personal Assistant of the Chief Compiler of the Virtual Universes points a finger at and you feel your qBits quiver and then it is over.`
  },
  innocent: {
    text: `The hand that touched the Bell of Truth is covered in black ink. You look around at the other candidates. Their hands are clean.

    At first, they look confident, proud, even arrogant, and then, one by one, they notice your one black hand, and their smiles fade, their expressions fade, their faces fade, their bodies fade into a terrifying emptiness, and you and the Personal Android find yourselves alone together in a vault of light.

    "Welcome, %s, New World Conceptor," a voice says. A voice rounder, riper, richer than the voice of the Personal Android. A voice more like that of Alan Rickman.

    The voice of The Chief Compiler of the Virtual Universes themself.`,
    substitution: true,
  }
};

module.exports = storyMap