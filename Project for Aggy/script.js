var items = [
  {
    "text": "Ive never met somebody so kind.",
    "author": "Peach"
  },
  {
    "text": "You know exactly how to cheer me up.",
    "author": "Peach"
  },
  {
    "text": "You're honest with me in a way that no one else is.",
    "author": "Peach"
  },
  {
    "text": "Spending time with you feels so special.",
    "author": "Peach"
  },
  {
    "text": "You make me laugh, I like that",
    "author": "Peach"
  },
  {
    "text": "You believe in me even when i dont believe in myself.",
    "author": "Peach"
  },
  {
    "text": "I could talk to you all day and still find everything so interesting.",
    "author": "Peach"
  },
  {
    "text": "You make the rain feel calming again.",
    "author": "Peach"
  },
  {
    "text": "You're so cute and tiny ;-;.",
    "author": "Peach"
  },
  {
    "text": "Castles and Picnics, i dont need to say anything else.",
    "author": "Peach"
  },
  {
    "text": "I didnt know people could get so beautiful.",
    "author": "Peach"
  },
  {
    "text": "You make me feel comfortable, and confident.",
    "author": "Peach"
  },
  {
    "text": "You bring out the drive that I thought I had lost.",
    "author": "Peach"
  },
  {
    "text": "You promised to make me empanadas.",
    "author": "Peach"
  },
  {
    "text": "You know when I'm not okay and you look out for me.",
    "author": "Peach"
  },
  {
    "text": "You have my back even when I dont realise I need the help.",
    "author": "Peach"
  },
  {
    "text": "You offered to help me code.",
    "author": "Peach"
  },
  {
    "text": "I could laugh with you all day.",
    "author": "Peach"
  },
  {
    "text": "You are the most fierce vegan warrior.",
    "author": "Peach"
  },
  {
    "text": "You face so much hardship with so much bravery.",
    "author": "Peach"
  },
  {
    "text": "You make me feel appreciated.",
    "author": "Peach"
  },
]

function changeReasonAndAuthor() {
  var randInd = Math.floor(Math.random()*items.length);
  var item = items[randInd];
  console.log(item.text)
  var reason = document.querySelector ('.reason')
  var author = document.querySelector ('.author')
  reason.textContent = item.text
  author.textContent = item.author
}
