// vim:set sw=2 ts=2 sts=2 expandtab:
const replace = [
  {
    "name": " un ",
    "replaceWith": " un wati "
  },
  {
    "name": " une ",
    "replaceWith": " une wati "
  },
  {
    "name": " ce ",
    "replaceWith": " ce wati "
  },
  {
    "name": " ces ",
    "replaceWith": " ces watis "
  },
  {
    "name": " les ",
    "replaceWith": " les watis "
  },
  {
    "name": " le ",
    "replaceWith": " le wati "
  },
  {
    "name": " la ",
    "replaceWith": " la wati "
  },
  {
    "name": " mon ",
    "replaceWith": " mon wati "
  },
  {
    "name": " ma ",
    "replaceWith": " ma wati "
  },
  {
    "name": " mes ",
    "replaceWith": " mes watis ",
  },
  {
    "name": " des ",
    "replaceWith": " des watis "
  },
  {
    "name": " vos ",
    "replaceWith": " vos watis "
  },
  {
    "name": " ton ",
    "replaceWith": " ton wati "
  },
  {
    "name": " son ",
    "replaceWith": " son wati "
  },
  {
    "name": " sa ",
    "replaceWith": " sa wati "
  },
  {
    "name": " ses ",
    "replaceWith": " ses watis "
  },
  {
    "name": " c'est ",
    "replaceWith": " c'est wati "
  },
  {
    "name": " du ",
    "replaceWith": " du wati "
  }
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
