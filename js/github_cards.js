(function() {
  $(document).ready(function() {


  });
})();

    // Gets the full repo name from the data attribute and
    // fetches the data from the api.
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
        $(_this).find('[data-forks]').text(response.forks);
        $(_this).find('[data-stars]').text(response.stargazers_count);
        $(_this).find('[data-watchers]').text(response.watchers_count);
        $(_this).find('[data-language]').text(response.language);
        $(_this).find('[data-open_issues]').text(response.open_issues);
        $(_this).find('[data-size]').text(response.size);
        $(_this).find('[data-subscribers_count]').text(response.subscribers_count);
        $(_this).find('[data-network_count]').text(response.network_count);
      });
    });


    /*

   
    https://docs.github.com/en/rest/reference/activity#list-repositories-starred-by-the-authenticated-user--code-samples
    
    
    "html_url": "https://github.com/octocat/Hello-World",
    "description": "This your first repo!",

    "name": "Hello-World",
    "full_name": "octocat/Hello-World",

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