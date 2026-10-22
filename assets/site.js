// Shared settings for index.html and case.html. Loaded before each page unpacks.
(function () {
  // Projects hidden from the home grid. Their case route redirects home.
  // To restore a project, set its value to false (or delete the line).
  var hidden = {
    'expressive-data': true // TODO(Kamra): add the brief and the dataset, then set this to false.
  };

  window.SITE = { hidden: hidden };
})();
