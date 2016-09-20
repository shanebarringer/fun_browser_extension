function searchForDrumpf(node, cb) {
    cb(node);
    node = node.firstChild;

    while (node) {
        searchForDrumpf(node, cb);
        node = node.nextSibling;
    }
}

function countInstances(instance, text) {
  if (text === "Trump") {
    return (instance.match(/Trump/g) || []).length;
  } else {
    return (instance.match(/Donald Trump/g) || []).length;
  }
}

searchForDrumpf(document.body, function (node) {
  var drumpf = new RegExp('trump', 'i', 'g')
  var donaldDrumpf = new RegExp('donald trump', 'i', 'g')
  var truths = ["Short-Fingered Vulgarian","The White Kanye", "Agent Orange", "Tangerine Tornado", "Darth Hater", "The Clown Prince of Politics", "Narcissistic Human Airhorn", "Rabble-Rousing Demagogue", "Venom-Drenched Regurgitated Slimy Orange Hairball", "the GOP's unhinged front-runner", "The Xenophobic Sweet Potato", "Drumpf", "The GOP's Orange Flag of Defeat", "The Anti-Immigration Toupee'd Dorito", "Tiny Fists of Rage", "The Xenophobic Bass Fish"]

  if (node.nodeType === 3) {
    if ( node.textContent.includes("Donald Trump") || node.textContent.includes("The Donald")){
      var count = countInstances(node.textContent, "Donald")
      for (var i = 0; i < count; i++){
        node.nodeValue = node.nodeValue.replace(donaldDrumpf, truths[parseInt(Math.random() * truths.length)])
      }
    }
    else if (node.textContent.includes("Trump")){
      var count = countInstances(node.textContent, "Trump")
      var truth = truths[parseInt(Math.random() * truths.length)]
      for (var i = 0; i < count; i++){
        node.nodeValue = node.nodeValue.replace(drumpf, truth)
      }
    }
  }
});
