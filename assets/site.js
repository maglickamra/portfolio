// Shared settings for index.html and case.html. Loaded before each page unpacks.
(function () {
  // Projects hidden from the home grid. Their case route redirects home.
  // To restore a project, set its value to false (or delete the line).
  var hidden = {
    'expressive-data': true // TODO(Kamra): add the brief and the dataset, then set this to false.
  };

  // Case page titles, set before first paint. Keep in sync with PROJECTS in case.html.
  var titles = {
    'fridgepeek': 'FridgePeek',
    'digital-twins': 'Human-Centered Digital Twin Support for Industrial Switchgear',
    'domicile-rediscovered': 'Domicile Rediscovered',
    'journey': 'Journey',
    'domicile-augmented': 'Domicile Augmented',
    'expressive-data': 'Expressive Data',
    'skripta': 'SKRIPTA IdeaLab'
  };

  function pageTitle(slug) {
    var t = titles[slug] || titles.fridgepeek;
    return t + ' | Amina-Kamra Maglić';
  }

  window.SITE = { hidden: hidden, titles: titles, pageTitle: pageTitle };
})();
