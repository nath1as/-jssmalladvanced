var template1 = 'The ${adjective} brown ${noun} ${adverb} ' +
                '${verb} the ${adjective} yellow ' +
                '${noun}, who ${adverb} ${verb} his ' +
                '${noun} and looks around.';

var template2 = "The ${noun} ${verb} the ${noun}'s ${noun}.";

function madlibs(template) {
  var REPLACEMENT_TEXTS = {
    adjective: ['quick', 'lazy', 'sleepy', 'noisy', 'hungry'],
    noun: ['fox', 'dog', 'head', 'leg', 'tail'],
    verb: ['jumps', 'lifts', 'bites', 'licks', 'pats'],
    adverb: ['easily', 'lazily', 'noisily', 'excitedly'],
  };

  function replaceText(match) {
    var key = match.replace(/[^a-z]/g, '');
    var index = Math.floor(Math.random() * REPLACEMENT_TEXTS[key].length);
    return REPLACEMENT_TEXTS[key][index];
  }

  return template.replace(/\${[a-z]+}/g, replaceText);
}


console.log(
  madlibs(template1),
  // The "sleepy" brown "cat" "noisily"
  // "licks" the "sleepy" yellow
  // "dog", who "lazily" "licks" his
  // "tail" and looks around.

  madlibs(template1),
  // The "hungry" brown "cat" "lazily"
  // "licks" the "noisy" yellow
  // "dog", who "lazily" "licks" his
  // "leg" and looks around.

  madlibs(template2),      // The "fox" "bites" the "dog"'s "tail".

  madlibs(template2),      // The "cat" "pats" the "cat
);
