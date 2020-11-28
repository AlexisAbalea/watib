// vim:set sw=2 ts=2 sts=2 expandtab:
const replace = [
  // définis
  {"name": " le ", "replaceWith": " le wati "},
  {"name": " la ", "replaceWith": " la wati "},
  {"name": " les ", "replaceWith": " les watis "},

  {"name": "Le ", "replaceWith": "Le wati "},
  {"name": "La ", "replaceWith": "La wati "},
  {"name": "Les ", "replaceWith": "Les watis "},
  // indéfinis
  {"name": " un ", "replaceWith": " un wati "},
  {"name": " une ", "replaceWith": " une wati "},
  {"name": " des ", "replaceWith": " des watis "},

  {"name": "Un ", "replaceWith": "Un wati "},
  {"name": "Une ", "replaceWith": "Une wati "},
  {"name": "Des ", "replaceWith": "Des watis "},
  // possessifs
  {"name": " mon ", "replaceWith": " mon wati "},
  {"name": " ma ", "replaceWith": " ma wati "},
  {"name": " mes ", "replaceWith": " mes watis "},
  {"name": " ton ", "replaceWith": " ton wati "},
  {"name": " ta ", "replaceWith": " ta wati "},
  {"name": " tes ", "replaceWith": " tes watis "},
  {"name": " son ", "replaceWith": " son wati "},
  { "name": " sa ", "replaceWith": " sa wati "},
  {"name": " ses ", "replaceWith": " ses watis "},
  {"name": " notre ", "replaceWith": " notre wati "},
  {"name": " nos ", "replaceWith": " nos watis "},
  {"name": " votre ", "replaceWith": " votre wati "},
  {"name": " vos ", "replaceWith": " vos watis "},
  {"name": " leur ", "replaceWith": " leur watis "},
  {"name": " leurs ", "replaceWith": " leurs watis "},

  {"name": "Mon ", "replaceWith": "Mon wati "},
  {"name": "Ma ", "replaceWith": "Ma wati "},
  {"name": "Mes ", "replaceWith": "Mes watis "},
  {"name": "Ton ", "replaceWith": "Ton wati "},
  {"name": "Ta ", "replaceWith": "Ta wati "},
  {"name": "Tes ", "replaceWith": "Tes watis "},
  {"name": "Son ", "replaceWith": "Son wati "},
  {"name": "Sa ", "replaceWith": "Sa wati "},
  {"name": "Ses ", "replaceWith": "Ses watis "},
  {"name": "Notre ", "replaceWith": "Notre wati "},
  {"name": "Nos ", "replaceWith": "Nos watis "},
  {"name": "Votre ", "replaceWith": "Votre wati "},
  {"name": "Vos ", "replaceWith": "Vos watis "},
  {"name": "Leur ", "replaceWith": "Leur watis "},
  {"name": "Leurs ", "replaceWith": "Leurs watis "},
  // démonstratifs
  {"name": " ce ", "replaceWith": " ce wati "},
  {"name": " cette ", "replaceWith": " cette wati "},
  {"name": " cet ", "replaceWith": " cet wati "},
  {"name": " ces ", "replaceWith": " ces watis "},

  {"name": "Ce ", "replaceWith": "Ce wati "},
  {"name": "Cette ", "replaceWith": "Cette wati "},
  {"name": "Cet ", "replaceWith": "Cet wati "},
  {"name": "Ces ", "replaceWith": "Ces watis "},
  // autres
  {"name": " c'est ", "replaceWith": " c'est wati "},
  {"name": " du ", "replaceWith": " du wati "},

  {"name": "C'est ", "replaceWith": "C'est wati "},
  {"name": "Du ", "replaceWith": "Du wati "},
];
/* For copy/paste
  {
    "name": "",
    "replaceWith": ""
  },
*/

// Create arrya of regexps with all above elements
const rExps = []
replace.forEach((element) => {
  rExps.push([new RegExp(element["name"]), element["replaceWith"]])
})

var textNode;
let walk = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null, false);

// Replace in title
rExps.forEach(function (rExp) {
  document.title = document.title.replace(rExp[0], rExp[1]);
});

while (textNode = walk.nextNode()) {
  rExps.forEach(function (rExp) {
    textNode.nodeValue = textNode.nodeValue.replace(rExp[0], rExp[1]);
  });
}
