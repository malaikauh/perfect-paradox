const textElement = document.getElementById('text');
const character1Element = document.getElementById('character1');
const character2Element = document.getElementById('character2');
const character3Element = document.getElementById('character3');
const character4Element = document.getElementById('character4');
const character5Element = document.getElementById('character5');
const option1Element = document.getElementById('option1');
const option2Element = document.getElementById('option2');
const option3Element = document.getElementById('option2');
const option4Element = document.getElementById('option2');


let currentScene = 0;
let affectionLevel = 0;

const scenes = [
  {
    text: "Welcome to Doki Doki Visual Novel Template!",
    sprite1: "monika_normal.png",
    sprite2: "sayori_normal.png",
    options: [
      { text: 'Sayori, you're so cheerful!', nextScene: 1, affectionChange: 10 },
      { text: 'Monika, you're so responsible!', nextScene: 1, affectionChange: 5 },
    ],
  },
  {
    text: "Sayori blushes and thanks you.",
    sprite1: "monika_normal.png",
    sprite2: "sayori_blush.png",
    options: [
      { text: 'Compliment Sayori more.', nextScene: 2, affectionChange: 5 },
      { text: 'Ask Monika about herself.', nextScene: 3, affectionChange: 10 },
    ],
  },
  {
    text: "Sayori's face lights up as she talks about her interests.",
    sprite1: "monika_normal.png",
    sprite2: "sayori_happy.png",
    options: [
      { text: 'Keep listening to Sayori.', nextScene: 4, affectionChange: 5 },
      { text: 'Ask Monika to join the conversation.', nextScene: 3, affectionChange: 10 },
    ],
  },
  {
    text: "Monika joins the conversation and shares her own hobbies.",
    sprite1: "monika_smile.png",
    sprite2: "sayori_happy.png",
    options: [
      { text: 'Compliment Monika.', nextScene: 5, affectionChange: 5 },
      { text: 'Ask Sayori what she thinks about Monika.', nextScene: 6, affectionChange: 10 },
    ],
  },
  {
    text: "Monika blushes and thanks you.",
    sprite1: "monika_blush.png",
    sprite2: "sayori_happy.png",
    options: [
      { text: 'Flirt with Monika.', nextScene: 7, affectionChange: 10 },
      { text: 'Ask Sayori to spend time with you.', nextScene: 8, affectionChange: 15 },
    ],
  },
  {
    text: "Monika giggles and playfully teases you.",
    sprite1: "monika_happy.png",
    sprite2: "sayori_happy.png",
    options: [
      { text: 'Keep flirting with Monika.', nextScene: 9, affectionChange: 5 },
      { text: 'Ask Sayori on a date.', nextScene: 10, affectionChange: 20 },
    ],
  },
  {
    text: "Sayori gets excited about the date idea.",
    sprite1: "monika_happy.png",
    sprite2: "sayori_excited.png",
    options: [
      { text: 'Go on a date with Sayori.', nextScene: 11, affectionChange: 20 },
      { text: 'Go on a date with Monika.', nextScene: 11, affectionChange: 30 },
    ],
  },
  {
    text: "You and Sayori have a wonderful time on the date.",
    sprite1: "monika_happy.png",
    sprite2: "sayori_date.png",
    options: [
      { text: 'Kiss Sayori.', nextScene: 12, affectionChange: 20 },
      { text: 'Tell Sayori you love her.', nextScene: 13, affectionChange: 50 },
    ],
  },
  {
    text: "Sayori hugs you tightly and confesses her love.",
    sprite1: "monika_happy.png",
    sprite2: "sayori_love.png",
    options: [
      { text: 'Accept Sayori\'s confession.', nextScene: 14, affectionChange: 50 },
      { text: 'Tell Sayori you need time to think.', nextScene: 15, affectionChange: 0 },
    ],
  },
  {
    text: "Sayori smiles and says she'll wait for you.",
    sprite1: "monika_happy.png",
    sprite2: "sayori_smile.png",
    options: [
      { text: 'End the visual novel here.', nextScene: -1 },
    ],
  },
  {
    text: "You and Monika become good friends.",
    sprite1: "monika_friend.png",
    sprite2: "sayori_smile.png",
    options: [
      { text: 'Spend more time with Monika.', nextScene: 16, affectionChange: 20 },
      { text: 'Ask Monika about the Literature Club.', nextScene: 17, affectionChange: 10 },
    ],
  },
  {
    text: "Monika invites you to join the Literature Club.",
    sprite1: "monika_excited.png",
    sprite2: "sayori_smile.png",
    options: [
      { text: 'Join the Literature Club.', nextScene: 18, affectionChange: 30 },
     
