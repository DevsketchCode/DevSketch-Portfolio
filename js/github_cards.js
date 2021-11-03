(function() {
  $(document).ready(function() {
    gitUser = "DevsketchCode";

    // The repos must be public in order for the information to be provided from github
    createGithubCard(gitUser, "l8_PawperingVetClinicCRM", "<i class='fa fa-paw' aria-hidden='true'></i> Pawpering Vet Clinic CRM" );
    createGithubCard(gitUser, "DevSketch-Portfolio", "My Portfolio" );
    createGithubCard(gitUser, "ASPNET_ReStore_WebStore", "ReStore" );
    createGithubCard(gitUser, "ASPNET_ForceFitness", "ForceFitness" );
    
    loadGithubCardData();
  });
})();

function createGithubCard(gitUser, repo, projectName) {
  projectDiv = $('#projects');
  url = "https://github.com/" + gitUser + "/" + repo;
  repo = gitUser + "/" + repo;

  githubCard = projectDiv.append('\
  <div class="github-cards">\
  <a href="' + url + '" class="github-card" data-github="' + repo + '" target="_blank">\
    <h3>' + projectName + '</h3>\
    <p class="github-repo">\
      <span class="github-card__meta">\
        <i class="fa fa-github githubColor" aria-hidden="true"></i>\
        Repository: \
        <span data-name></span>\
      </span>\
    </p>\
    <p>\
      <span class="github-card__meta">\
        Description: \
        <span data-description></span>\
      </span>\
    </p>\
    <span class="github-card__meta">\
      <i class="fa fa-link mediumIcon" aria-hidden="true"></i>\
      <span data-html_url></span>\
    </span><br> \
    <span class="github-card__meta"  title="stars">\
      <i class="fa fa-star" aria-hidden="true"></i>\
      <span data-stars></span>\
    </span>\
    <span class="github-card__meta" title="watchers">\
      <i class="fa fa-eye" aria-hidden="true"></i>\
      <span data-watchers></span>\
    </span>\
    <span class="github-card__meta" title="# of subscribers">\
      <i class="fa fa-user-plus" aria-hidden="true"></i>\
      <span data-subscribers_count></span>\
    </span>  \
    <span class="github-card__meta" title="forks">\
      <i class="fa fa-code-fork" aria-hidden="true"></i>\
      <span data-forks></span>\
    </span>\
    <span class="github-card__meta" title="# of forks">\
      # of forks: \
      <i class="fa fa-code-fork" aria-hidden="true"></i>\
      <span data-forks_count></span>\
    </span>\
    <span class="github-card__meta" style="display: none">\
      open issues: \
      <i class="fa fa-code-fork" aria-hidden="true"></i>\
      <span data-open_issues></span>\
    </span>   \
    <span class="github-card__meta" title="# of networks">\
      <i class="fa fa-sitemap mediumIcon" aria-hidden="true"></i>\
      <span data-network_count></span>\
    </span>  \
    <span class="github-card__meta" title="size">\
      <i class="fa fa-database mediumIcon" aria-hidden="true"></i>\
      <span data-size></span>\
    </span>  \
    <span class="github-card__meta" title="languages used">\
      <span data-list-of-language> \
      ' + // list of languages is populated here from the loadGithubCardData function 
      '</span> \
    </span>  \
  </a> \
  </div> \
');
};

function loadGithubCardData() {
      // Gets the full repo name from the data attribute and
    // fetches the data from the api.
    //https://docs.github.com/en/rest/reference/activity#list-repositories-starred-by-the-authenticated-user--code-samples
    $('[data-github]').each(function () {
      var _this = this;
      var repo = $(_this).data('github')
    
      fetch('https://api.github.com/repos/' + repo).then(function (response) {
        return response.json();
      }).then(function (response) {
        // Retrieve repo details;
        $(_this).find('[data-name]').text(response.name);
        $(_this).find('[data-fullname]').text(response.full_name);
        $(_this).find('[data-html_url]').text(response.html_url);
        $(_this).find('[data-description]').text(response.description);

        // only show if they have a value
        (response.forks == 0) ? $(_this).find('[data-forks]').parent().hide() : $(_this).find('[data-forks]').text(response.forks);
        (response.forks_count == 0) ? $(_this).find('[data-forks_count]').parent().hide() : $(_this).find('[data-forks_count]').text(response.forks_count);
        (response.stargazers_count == 0) ? $(_this).find('[data-stars]').parent().hide() : $(_this).find('[data-stars]').text(response.stargazers_count);
        (response.watchers_count == 0) ? $(_this).find('[data-watchers]').parent().hide() : $(_this).find('[data-watchers]').text(response.watchers_count);
        
        // The first or primary language (this only shows one language)
        // leaving this in case you want to display the main language of the repo instead of the list
        // You will need to add the span data in the html above if you add this back
        //$(_this).find('[data-language]').text(response.language);
        
        // create a string of all of the languages that are used in the repo
        jQuery.getJSON(response.languages_url, function(data) {
          languageList = "";
          jQuery.each(data, function(index) {
            // generate the html for each list of languages including it's color coded icon
            languageList += $(_this).find('[data-list-of-language]').append('\
              <i class="fa fa-circle smallerIcon githubColor-' + (index.replace(/\s|\./g, '')).replace(/\#/g, 'Sharp') + '" aria-hidden="true"></i> \
              <span class="github-languages" data-languages>' + index + '</span>');
            (data.length > 1) ? languageList += ", " : "";
          });
        });

        // This you may not want to show, so the style of the element above is display none, that way you can use this if you want, else comment out if not
        //(response.open_issues == 0) ? $(_this).find('[data-open_issues]').parent().hide() : $(_this).find('[data-open_issues]').text(response.open_issues).parent().show();
        $(_this).find('[data-size]').text((response.size/1024).toFixed(2) + 'MB');
        
        // only show if they have a value
        (response.subscribers_count == 0) ? $(_this).find('[data-subscribers_count]').parent().hide() : $(_this).find('[data-subscribers_count]').text(response.subscribers_count);
        (response.network_count == 0) ? $(_this).find('[data-network_count]').parent().hide() : $(_this).find('[data-network_count]').text(response.network_count);
      });
    });
}


    /*

   

    
    
    "html_url": "https://github.com/octocat/Hello-World",
    "description": "This your first repo!",

    "name": "Hello-World",
    "full_name": "octocat/Hello-World",
    "languages_url",
    "language": null,
    "forks_count": 9,
    "stargazers_count": 80,
    "watchers_count": 80,
    "size": 108,
    "default_branch": "master",
    "open_issues_count": 0,
    "subscribers_count": 42,
    "network_count": 0,
    "forks": 1,
    "open_issues": 1,
    "watchers": 1
    */