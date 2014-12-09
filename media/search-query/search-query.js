



<!DOCTYPE html>
<html lang="en" class="">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    
    
    <title>search-query/search-query.js at master · ryanzec/search-query</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="ryanzec/search-query" name="twitter:title" /><meta content="search-query - A mini search language based of off SQL (using http://zaach.github.io/jison/ to generator the language parser) to provide a query like language that can be applied to searching function" name="twitter:description" /><meta content="https://avatars1.githubusercontent.com/u/444206?v=3&amp;s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars1.githubusercontent.com/u/444206?v=3&amp;s=400" property="og:image" /><meta content="ryanzec/search-query" property="og:title" /><meta content="https://github.com/ryanzec/search-query" property="og:url" /><meta content="search-query - A mini search language based of off SQL (using http://zaach.github.io/jison/ to generator the language parser) to provide a query like language that can be applied to searching functionality." property="og:description" />

      <meta name="browser-stats-url" content="/_stats">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035">
    <link rel="xhr-socket" href="/_sockets">
    <meta name="pjax-timeout" content="1000">
    <link rel="sudo-modal" href="/sessions/sudo_modal">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="81FC8B77:141B:7981AC:54871BAC" name="octolytics-dimension-request_id" /><meta content="4399180" name="octolytics-actor-id" /><meta content="DanRamage" name="octolytics-actor-login" /><meta content="346b7d0441646532eb29615da3dcfe5047f2926fef7118da8cc2a01381d64afe" name="octolytics-actor-hash" />
    
    <meta content="Rails, view, blob#show" name="analytics-event" />

    
    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">


    <meta content="authenticity_token" name="csrf-param" />
<meta content="eZn/e6EIOn9J0C0bzqnLdN7FouUYu4bOoT7GnITF+3XSHoDeYnqQu2dPPU9H7FN48z6W71X5sNFS+ZeLCTIsOg==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-c9fdbad0c87f1f4c02644b0ecdac619db571d441faefbcba3c880df37251f0b0.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://assets-cdn.github.com/assets/github2-ee4170e0122d252766e3edc8c97b6cc6ae381c974013b5047ed5ad8895c56fe0.css" media="all" rel="stylesheet" type="text/css" />
    
    


    <meta http-equiv="x-pjax-version" content="876c38d0b7388d6809e6d1a573682b6f">

      
  <meta name="description" content="search-query - A mini search language based of off SQL (using http://zaach.github.io/jison/ to generator the language parser) to provide a query like language that can be applied to searching functionality.">
  <meta name="go-import" content="github.com/ryanzec/search-query git https://github.com/ryanzec/search-query.git">

  <meta content="444206" name="octolytics-dimension-user_id" /><meta content="ryanzec" name="octolytics-dimension-user_login" /><meta content="18420411" name="octolytics-dimension-repository_id" /><meta content="ryanzec/search-query" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="18420411" name="octolytics-dimension-repository_network_root_id" /><meta content="ryanzec/search-query" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/ryanzec/search-query/commits/master.atom" rel="alternate" title="Recent Commits to search-query:master" type="application/atom+xml">

  </head>


  <body class="logged_in  env-production macintosh vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" ga-data-click="Header, go to dashboard, icon:logo">
  <span class="mega-octicon octicon-mark-github"></span>
</a>


      <div class="site-search repo-scope js-site-search" role="search">
          <form accept-charset="UTF-8" action="/ryanzec/search-query/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/ryanzec/search-query/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <input type="text"
    class="js-site-search-field is-clearable"
    data-hotkey="s"
    name="q"
    placeholder="Search"
    data-global-scope-placeholder="Search GitHub"
    data-repo-scope-placeholder="Search"
    tabindex="1"
    autocapitalize="off">
  <div class="scope-badge">This repository</div>
</form>
      </div>
      <ul class="header-nav left" role="navigation">
        <li class="header-nav-item explore">
          <a class="header-nav-link" href="/explore" data-ga-click="Header, go to explore, text:explore">Explore</a>
        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/blog" data-ga-click="Header, go to blog, text:blog">Blog</a>
          </li>
        <li class="header-nav-item">
          <a class="header-nav-link" href="https://help.github.com" data-ga-click="Header, go to help, text:help">Help</a>
        </li>
      </ul>

    
<ul class="header-nav user-nav right" id="user-links">
  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name" href="/DanRamage" data-ga-click="Header, go to profile, text:username">
      <img alt="DanRamage" class="avatar" data-user="4399180" height="20" src="https://avatars3.githubusercontent.com/u/4399180?v=3&amp;s=40" width="20" />
      <span class="css-truncate">
        <span class="css-truncate-target">DanRamage</span>
      </span>
    </a>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link js-menu-target tooltipped tooltipped-s" href="#" aria-label="Create new..." data-ga-click="Header, create new, icon:add">
      <span class="octicon octicon-plus"></span>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      
<ul class="dropdown-menu">
  <li>
    <a href="/new"><span class="octicon octicon-repo"></span> New repository</a>
  </li>
  <li>
    <a href="/organizations/new"><span class="octicon octicon-organization"></span> New organization</a>
  </li>


    <li class="dropdown-divider"></li>
    <li class="dropdown-header">
      <span title="ryanzec/search-query">This repository</span>
    </li>
      <li>
        <a href="/ryanzec/search-query/issues/new"><span class="octicon octicon-issue-opened"></span> New issue</a>
      </li>
</ul>

    </div>
  </li>

  <li class="header-nav-item">
        <a href="/notifications" aria-label="You have unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s" data-ga-click="Header, go to notifications, icon:unread" data-hotkey="g n">
        <span class="mail-status unread"></span>
        <span class="octicon octicon-inbox"></span>
</a>
  </li>

  <li class="header-nav-item">
    <a class="header-nav-link tooltipped tooltipped-s" href="/settings/profile" id="account_settings" aria-label="Settings" data-ga-click="Header, go to settings, icon:settings">
      <span class="octicon octicon-gear"></span>
    </a>
  </li>

  <li class="header-nav-item">
    <form accept-charset="UTF-8" action="/logout" class="logout-form" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="jvsNmovUUcEwaXHoLLgGGWYuUWdY1wIzNycdwwT3VKMiFPhKChmdYhOOkmgfUxEINehfot5Zpu+qjj/dkFz0mQ==" /></div>
      <button class="header-nav-link sign-out-button tooltipped tooltipped-s" aria-label="Sign out" data-ga-click="Header, sign out, icon:logout">
        <span class="octicon octicon-sign-out"></span>
      </button>
</form>  </li>

</ul>


    
  </div>
</div>

      

        


      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        
<ul class="pagehead-actions">

    <li class="subscription">
      <form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="XR4kcJ8LZeowOK41kB6YfHED7ENSnRqQ7VOwW27Yye+0Om5FPtNemBd94AryT9NJ2LdCCqiI1DORew7deLcoNQ==" /></div>  <input id="repository_id" name="repository_id" type="hidden" value="18420411" />

    <div class="select-menu js-menu-container js-select-menu">
      <a class="social-count js-social-count" href="/ryanzec/search-query/watchers">
        1
      </a>
      <a href="/ryanzec/search-query/subscription"
        class="minibutton select-menu-button with-count js-menu-target" role="button" tabindex="0" aria-haspopup="true">
        <span class="js-select-button">
          <span class="octicon octicon-eye"></span>
          Watch
        </span>
      </a>

      <div class="select-menu-modal-holder">
        <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
          <div class="select-menu-header">
            <span class="select-menu-title">Notifications</span>
            <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
          </div> <!-- /.select-menu-header -->

          <div class="select-menu-list js-navigation-container" role="menu">

            <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input checked="checked" id="do_included" name="do" type="radio" value="included" />
                <h4>Not watching</h4>
                <span class="description">Be notified when participating or @mentioned.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye"></span>
                  Watch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_subscribed" name="do" type="radio" value="subscribed" />
                <h4>Watching</h4>
                <span class="description">Be notified of all conversations.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-eye"></span>
                  Unwatch
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

            <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <div class="select-menu-item-text">
                <input id="do_ignore" name="do" type="radio" value="ignore" />
                <h4>Ignoring</h4>
                <span class="description">Never be notified.</span>
                <span class="js-select-button-text hidden-select-button-text">
                  <span class="octicon octicon-mute"></span>
                  Stop ignoring
                </span>
              </div>
            </div> <!-- /.select-menu-item -->

          </div> <!-- /.select-menu-list -->

        </div> <!-- /.select-menu-modal -->
      </div> <!-- /.select-menu-modal-holder -->
    </div> <!-- /.select-menu -->

</form>
    </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container ">

    <form accept-charset="UTF-8" action="/ryanzec/search-query/unstar" class="js-toggler-form starred js-unstar-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="hUD7v3kC2JJ9JwzHNhV9GYL77rVFIJxGuCc7VJSIHU8owj309kbpNfy+gddzYQR6ulFmOZFxxkLrANJBxO6wlA==" /></div>
      <button
        class="minibutton with-count js-toggler-target star-button"
        aria-label="Unstar this repository" title="Unstar ryanzec/search-query">
        <span class="octicon octicon-star"></span>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/ryanzec/search-query/stargazers">
          0
        </a>
</form>
    <form accept-charset="UTF-8" action="/ryanzec/search-query/star" class="js-toggler-form unstarred js-star-button" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="gWuuU93cwFQJsNmWVZy1/uUIWOp48XWDysY8dmAHfI/HpEuwGX2ZxW6bcU5Y4Lb9HFUGPsfL/nk3A6O+lFTXDA==" /></div>
      <button
        class="minibutton with-count js-toggler-target star-button"
        aria-label="Star this repository" title="Star ryanzec/search-query">
        <span class="octicon octicon-star"></span>
        Star
      </button>
        <a class="social-count js-social-count" href="/ryanzec/search-query/stargazers">
          0
        </a>
</form>  </div>

  </li>


        <li>
          <a href="/ryanzec/search-query/fork" class="minibutton with-count js-toggler-target fork-button tooltipped-n" title="Fork your own copy of ryanzec/search-query to your account" aria-label="Fork your own copy of ryanzec/search-query to your account" rel="facebox nofollow">
            <span class="octicon octicon-repo-forked"></span>
            Fork
          </a>
          <a href="/ryanzec/search-query/network" class="social-count">0</a>
        </li>

</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="mega-octicon octicon-repo"></span>
          <span class="author"><a href="/ryanzec" class="url fn" itemprop="url" rel="author"><span itemprop="title">ryanzec</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/ryanzec/search-query" class="js-current-repository" data-pjax="#js-repo-pjax-container">search-query</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            
<nav class="sunken-menu repo-nav js-repo-nav js-sidenav-container-pjax js-octicon-loaders"
     role="navigation"
     data-pjax="#js-repo-pjax-container"
     data-issue-count-url="/ryanzec/search-query/issues/counts">
  <ul class="sunken-menu-group">
    <li class="tooltipped tooltipped-w" aria-label="Code">
      <a href="/ryanzec/search-query" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /ryanzec/search-query">
        <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Issues">
        <a href="/ryanzec/search-query/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /ryanzec/search-query/issues">
          <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
          <span class="js-issue-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

    <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
      <a href="/ryanzec/search-query/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g p" data-selected-links="repo_pulls /ryanzec/search-query/pulls">
          <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
          <span class="js-pull-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>


      <li class="tooltipped tooltipped-w" aria-label="Wiki">
        <a href="/ryanzec/search-query/wiki" aria-label="Wiki" class="js-selected-navigation-item sunken-menu-item" data-hotkey="g w" data-selected-links="repo_wiki /ryanzec/search-query/wiki">
          <span class="octicon octicon-book"></span> <span class="full-word">Wiki</span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
  </ul>
  <div class="sunken-menu-separator"></div>
  <ul class="sunken-menu-group">

    <li class="tooltipped tooltipped-w" aria-label="Pulse">
      <a href="/ryanzec/search-query/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-selected-links="pulse /ryanzec/search-query/pulse">
        <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

    <li class="tooltipped tooltipped-w" aria-label="Graphs">
      <a href="/ryanzec/search-query/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-selected-links="repo_graphs repo_contributors /ryanzec/search-query/graphs">
        <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>
  </ul>


</nav>

              <div class="only-with-full-nav">
                
  
<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><span class="text-emphasized">HTTPS</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/ryanzec/search-query.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="ssh"
  data-url="/users/set_protocol?protocol_selector=ssh&amp;protocol_type=clone">
  <h3><span class="text-emphasized">SSH</span> clone URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="git@github.com:ryanzec/search-query.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><span class="text-emphasized">Subversion</span> checkout URL</h3>
  <div class="input-group js-zeroclipboard-container">
    <input type="text" class="input-mini input-monospace js-url-field js-zeroclipboard-target"
           value="https://github.com/ryanzec/search-query" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>



<p class="clone-options">You can clone with
  <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>, <a href="#" class="js-clone-selector" data-protocol="ssh">SSH</a>, or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</p>

  <a href="http://mac.github.com" data-url="github-mac://openRepo/https://github.com/ryanzec/search-query" class="minibutton sidebar-button js-conduit-rewrite-url" title="Save ryanzec/search-query to your computer and use it in GitHub Desktop." aria-label="Save ryanzec/search-query to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>


                <a href="/ryanzec/search-query/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download the contents of ryanzec/search-query as a zip file"
                   title="Download the contents of ryanzec/search-query as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          

<a href="/ryanzec/search-query/blob/075440a2311846f313de41aa30f1343573aa247d/search-query.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:f08f467cbad025755b97b8167f517d90 -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu js-menu-container js-select-menu left">
  <span class="minibutton select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    title="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/ryanzec/search-query/blob/master/search-query.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/ryanzec/search-query/tree/0.2.0/search-query.js"
                 data-name="0.2.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.2.0">0.2.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/ryanzec/search-query/tree/0.1.0/search-query.js"
                 data-name="0.1.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="0.1.0">0.1.0</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="button-group right">
    <a href="/ryanzec/search-query/find/master"
          class="js-show-file-finder minibutton empty-icon tooltipped tooltipped-s"
          data-pjax
          data-hotkey="t"
          aria-label="Quickly jump between files">
      <span class="octicon octicon-list-unordered"></span>
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
  </div>

  <div class="breadcrumb js-zeroclipboard-target">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/ryanzec/search-query" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">search-query</span></a></span></span><span class="separator">/</span><strong class="final-path">search-query.js</strong>
  </div>
</div>


  <div class="commit file-history-tease">
    <div class="file-history-tease-header">
        <img alt="ryanzec" class="avatar" data-user="444206" height="24" src="https://avatars0.githubusercontent.com/u/444206?v=3&amp;s=48" width="24" />
        <span class="author"><a href="/ryanzec" rel="author">ryanzec</a></span>
        <time datetime="2014-04-27T09:30:40Z" is="relative-time">Apr 27, 2014</time>
        <div class="commit-title">
            <a href="/ryanzec/search-query/commit/075440a2311846f313de41aa30f1343573aa247d" class="message" data-pjax="true" title="added tokenization functionality in order to better support auto complete">added tokenization functionality in order to better support auto comp…</a>
        </div>
    </div>

    <div class="participation">
      <p class="quickstat">
        <a href="#blob_contributors_box" rel="facebox">
          <strong>1</strong>
           contributor
        </a>
      </p>
      
    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="ryanzec" data-user="444206" height="24" src="https://avatars0.githubusercontent.com/u/444206?v=3&amp;s=48" width="24" />
            <a href="/ryanzec">ryanzec</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
          <span>1022 lines (935 sloc)</span>
          <span class="meta-divider"></span>
        <span>59.835 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
          <a href="/ryanzec/search-query/raw/master/search-query.js" class="minibutton " id="raw-url">Raw</a>
            <a href="/ryanzec/search-query/blame/master/search-query.js" class="minibutton js-update-url-with-hash">Blame</a>
          <a href="/ryanzec/search-query/commits/master/search-query.js" class="minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->

          <a class="octicon-button tooltipped tooltipped-nw js-conduit-openfile-check"
             href="http://mac.github.com"
             data-url="github-mac://openRepo/https://github.com/ryanzec/search-query?branch=master&amp;filepath=search-query.js"
             aria-label="Open this file in GitHub for Mac"
             data-failed-title="Your version of GitHub for Mac is too old to open this file. Try checking for updates.">
              <span class="octicon octicon-device-desktop"></span>
          </a>

              <a class="octicon-button tooltipped tooltipped-n js-update-url-with-hash"
                 aria-label="Clicking this button will fork this project so you can edit the file"
                 href="/ryanzec/search-query/edit/master/search-query.js"
                 data-method="post" rel="nofollow"><span class="octicon octicon-pencil"></span></a>

            <a class="octicon-button danger tooltipped tooltipped-s"
               href="/ryanzec/search-query/delete/master/search-query.js"
               aria-label="Fork this project and delete file"
               data-method="post" data-test-id="delete-blob-file" rel="nofollow">
          <span class="octicon octicon-trashcan"></span>
        </a>
      </div><!-- /.actions -->
    </div>
    

  <div class="blob-wrapper data type-javascript">
      <table class="highlight tab-size-8 js-file-line-container">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code js-file-line"><span class="pl-s">var</span> SearchQuery <span class="pl-k">=</span> (<span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code js-file-line">  <span class="pl-c">/* parser generated by jison 0.4.13 */</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code js-file-line">  <span class="pl-s">var</span> parser <span class="pl-k">=</span> (<span class="pl-st">function</span>(){</td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code js-file-line">    <span class="pl-s">var</span> parser <span class="pl-k">=</span> {trace<span class="pl-k">:</span> <span class="pl-st">function</span> <span class="pl-en">trace</span>(){},</td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code js-file-line">      yy<span class="pl-k">:</span> {},</td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code js-file-line">      symbols_<span class="pl-k">:</span> {<span class="pl-s1"><span class="pl-pds">&quot;</span>error<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">2</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>main<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">3</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>expression<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">4</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>orderBy<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">5</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>EOF<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">6</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>ORDER_BY<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">7</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>orderByCommaList<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">8</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>orderValue<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">9</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>IDENTIFIER<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">10</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>orderWay<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">11</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>ASC<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">12</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>DESC<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">13</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>COMMA<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">14</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>condition<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">15</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>expressionConnector<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">16</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>LOGICAL_AND<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">17</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>LOGICAL_OR<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">18</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>comparison<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">19</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>value<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">20</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>IN<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">21</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>LPAREN<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">22</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>commaList<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">23</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>RPAREN<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">24</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>LOGICAL_NOT<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">25</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>IS<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">26</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>NULL<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">27</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>BETWEEN<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">28</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>STRING<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">29</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>NUMERIC<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">30</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>TRUE<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">31</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>FALSE<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">32</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>CMP_EQUALS<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">33</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>CMP_NOTEQUALS<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">34</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>CMP_NOTEQUALS_BASIC<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">35</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>CMP_GREATER<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">36</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>CMP_GREATEROREQUAL<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">37</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>CMP_LESS<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">38</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>CMP_LESSOREQUAL<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">39</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>LIKE<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">40</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>$accept<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">0</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>$end<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">1</span>},</td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code js-file-line">      terminals_<span class="pl-k">:</span> {<span class="pl-c1">2</span><span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>error<span class="pl-pds">&quot;</span></span>,<span class="pl-c1">6</span><span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>EOF<span class="pl-pds">&quot;</span></span>,<span class="pl-c1">7</span><span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>ORDER_BY<span class="pl-pds">&quot;</span></span>,<span class="pl-c1">10</span><span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>IDENTIFIER<span class="pl-pds">&quot;</span></span>,<span class="pl-c1">12</span><span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>ASC<span class="pl-pds">&quot;</span></span>,<span class="pl-c1">13</span><span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>DESC<span class="pl-pds">&quot;</span></span>,<span class="pl-c1">14</span><span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>COMMA<span class="pl-pds">&quot;</span></span>,<span class="pl-c1">17</span><span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>LOGICAL_AND<span class="pl-pds">&quot;</span></span>,<span class="pl-c1">18</span><span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>LOGICAL_OR<span class="pl-pds">&quot;</span></span>,<span class="pl-c1">21</span><span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>IN<span class="pl-pds">&quot;</span></span>,<span class="pl-c1">22</span><span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>LPAREN<span class="pl-pds">&quot;</span></span>,<span class="pl-c1">24</span><span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>RPAREN<span class="pl-pds">&quot;</span></span>,<span class="pl-c1">25</span><span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>LOGICAL_NOT<span class="pl-pds">&quot;</span></span>,<span class="pl-c1">26</span><span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>IS<span class="pl-pds">&quot;</span></span>,<span class="pl-c1">27</span><span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>NULL<span class="pl-pds">&quot;</span></span>,<span class="pl-c1">28</span><span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>BETWEEN<span class="pl-pds">&quot;</span></span>,<span class="pl-c1">29</span><span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>STRING<span class="pl-pds">&quot;</span></span>,<span class="pl-c1">30</span><span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>NUMERIC<span class="pl-pds">&quot;</span></span>,<span class="pl-c1">31</span><span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>TRUE<span class="pl-pds">&quot;</span></span>,<span class="pl-c1">32</span><span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>FALSE<span class="pl-pds">&quot;</span></span>,<span class="pl-c1">33</span><span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>CMP_EQUALS<span class="pl-pds">&quot;</span></span>,<span class="pl-c1">34</span><span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>CMP_NOTEQUALS<span class="pl-pds">&quot;</span></span>,<span class="pl-c1">35</span><span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>CMP_NOTEQUALS_BASIC<span class="pl-pds">&quot;</span></span>,<span class="pl-c1">36</span><span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>CMP_GREATER<span class="pl-pds">&quot;</span></span>,<span class="pl-c1">37</span><span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>CMP_GREATEROREQUAL<span class="pl-pds">&quot;</span></span>,<span class="pl-c1">38</span><span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>CMP_LESS<span class="pl-pds">&quot;</span></span>,<span class="pl-c1">39</span><span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>CMP_LESSOREQUAL<span class="pl-pds">&quot;</span></span>,<span class="pl-c1">40</span><span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>LIKE<span class="pl-pds">&quot;</span></span>},</td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code js-file-line">      productions_<span class="pl-k">:</span> [<span class="pl-c1">0</span>,[<span class="pl-c1">3</span>,<span class="pl-c1">3</span>],[<span class="pl-c1">5</span>,<span class="pl-c1">0</span>],[<span class="pl-c1">5</span>,<span class="pl-c1">2</span>],[<span class="pl-c1">9</span>,<span class="pl-c1">2</span>],[<span class="pl-c1">11</span>,<span class="pl-c1">0</span>],[<span class="pl-c1">11</span>,<span class="pl-c1">1</span>],[<span class="pl-c1">11</span>,<span class="pl-c1">1</span>],[<span class="pl-c1">8</span>,<span class="pl-c1">3</span>],[<span class="pl-c1">8</span>,<span class="pl-c1">1</span>],[<span class="pl-c1">4</span>,<span class="pl-c1">1</span>],[<span class="pl-c1">4</span>,<span class="pl-c1">3</span>],[<span class="pl-c1">16</span>,<span class="pl-c1">1</span>],[<span class="pl-c1">16</span>,<span class="pl-c1">1</span>],[<span class="pl-c1">15</span>,<span class="pl-c1">3</span>],[<span class="pl-c1">15</span>,<span class="pl-c1">5</span>],[<span class="pl-c1">15</span>,<span class="pl-c1">6</span>],[<span class="pl-c1">15</span>,<span class="pl-c1">3</span>],[<span class="pl-c1">15</span>,<span class="pl-c1">4</span>],[<span class="pl-c1">15</span>,<span class="pl-c1">5</span>],[<span class="pl-c1">15</span>,<span class="pl-c1">6</span>],[<span class="pl-c1">15</span>,<span class="pl-c1">3</span>],[<span class="pl-c1">23</span>,<span class="pl-c1">3</span>],[<span class="pl-c1">23</span>,<span class="pl-c1">1</span>],[<span class="pl-c1">20</span>,<span class="pl-c1">1</span>],[<span class="pl-c1">20</span>,<span class="pl-c1">1</span>],[<span class="pl-c1">20</span>,<span class="pl-c1">1</span>],[<span class="pl-c1">20</span>,<span class="pl-c1">1</span>],[<span class="pl-c1">20</span>,<span class="pl-c1">1</span>],[<span class="pl-c1">19</span>,<span class="pl-c1">1</span>],[<span class="pl-c1">19</span>,<span class="pl-c1">1</span>],[<span class="pl-c1">19</span>,<span class="pl-c1">1</span>],[<span class="pl-c1">19</span>,<span class="pl-c1">1</span>],[<span class="pl-c1">19</span>,<span class="pl-c1">1</span>],[<span class="pl-c1">19</span>,<span class="pl-c1">1</span>],[<span class="pl-c1">19</span>,<span class="pl-c1">1</span>],[<span class="pl-c1">19</span>,<span class="pl-c1">1</span>],[<span class="pl-c1">19</span>,<span class="pl-c1">2</span>]],</td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code js-file-line">      performAction<span class="pl-k">:</span> <span class="pl-st">function</span> <span class="pl-en">anonymous</span>(<span class="pl-vpf">yytext</span>, <span class="pl-vpf">yyleng</span>, <span class="pl-vpf">yylineno</span>, <span class="pl-vpf">yy</span>, <span class="pl-vpf">yystate</span> /* action[1] */, <span class="pl-vpf">$$</span> /* vstack */, <span class="pl-vpf">_$</span> /* lstack */</td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code js-file-line">                                        /**/) {</td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code js-file-line">        <span class="pl-c">/* this == yyval */</span></td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code js-file-line">        <span class="pl-s">var</span> $<span class="pl-c1">0</span> <span class="pl-k">=</span> $$.<span class="pl-sc">length</span> <span class="pl-k">-</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code js-file-line">        <span class="pl-k">switch</span> (yystate) {</td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">1</span><span class="pl-k">:</span> <span class="pl-k">return</span> {search<span class="pl-k">:</span> $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">2</span>], order<span class="pl-k">:</span> $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">1</span>]};</td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">2</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">3</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> $$[$<span class="pl-c1">0</span>];</td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">4</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> {field<span class="pl-k">:</span> $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">1</span>], way<span class="pl-k">:</span> $$[$<span class="pl-c1">0</span>]};</td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">5</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>asc<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">6</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>asc<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">7</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>desc<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">8</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">2</span>]; $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">2</span>].<span class="pl-s3">push</span>($$[$<span class="pl-c1">0</span>]);</td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">9</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> [$$[$<span class="pl-c1">0</span>]];</td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">10</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> [$$[$<span class="pl-c1">0</span>]];</td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">11</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">2</span>]; $$[$<span class="pl-c1">0</span>].connector<span class="pl-k">=</span>$$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">1</span>]; $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">2</span>].<span class="pl-s3">push</span>($$[$<span class="pl-c1">0</span>]);</td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">12</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>and<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">13</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>or<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">14</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> {field<span class="pl-k">:</span> $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">2</span>], comparison<span class="pl-k">:</span> $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">1</span>], value<span class="pl-k">:</span> $$[$<span class="pl-c1">0</span>]};</td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">15</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> {field<span class="pl-k">:</span> $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">4</span>], comparison<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>in<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">1</span>]};</td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">16</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> {field<span class="pl-k">:</span> $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">5</span>], comparison<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>not in<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">1</span>]};</td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">17</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> {field<span class="pl-k">:</span> $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">2</span>], comparison<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>is<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> <span class="pl-c1">null</span>};</td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">18</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> {field<span class="pl-k">:</span> $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">3</span>], comparison<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>is not<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> <span class="pl-c1">null</span>};</td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">19</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> {field<span class="pl-k">:</span> $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">4</span>], comparison<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>between<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> [$$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">2</span>], $$[$<span class="pl-c1">0</span>]]};</td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">20</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> {field<span class="pl-k">:</span> $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">5</span>], comparison<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>not between<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> [$$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">2</span>], $$[$<span class="pl-c1">0</span>]]};</td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">21</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> {items<span class="pl-k">:</span> $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">1</span>]};</td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">22</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">2</span>]; $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">2</span>].<span class="pl-s3">push</span>($$[$<span class="pl-c1">0</span>]);</td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">23</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> [$$[$<span class="pl-c1">0</span>]];</td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">24</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> yytext.<span class="pl-s3">substr</span>(<span class="pl-c1">1</span>, yytext.<span class="pl-sc">length</span> <span class="pl-k">-</span> <span class="pl-c1">2</span>)</td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">25</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> <span class="pl-s3">Number</span>(yytext)</td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">26</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> <span class="pl-c1">true</span></td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">27</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> <span class="pl-c1">false</span></td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">28</span><span class="pl-k">:</span><span class="pl-v">this</span>.$ <span class="pl-k">=</span> yytext;</td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">29</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> $$[$<span class="pl-c1">0</span>];</td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">30</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> $$[$<span class="pl-c1">0</span>];</td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">31</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> $$[$<span class="pl-c1">0</span>];</td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">32</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> $$[$<span class="pl-c1">0</span>];</td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">33</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> $$[$<span class="pl-c1">0</span>];</td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">34</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> $$[$<span class="pl-c1">0</span>];</td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">35</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> $$[$<span class="pl-c1">0</span>];</td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">36</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>like<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">37</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>not like<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code js-file-line">      },</td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code js-file-line">      table: [{3:1,4:2,10:[1,4],15:3,22:[1,5]},{1:[3]},{5:6,6:[2,2],7:[1,8],16:7,17:[1,9],18:[1,10]},{6:[2,10],7:[2,10],17:[2,10],18:[2,10],24:[2,10]},{19:11,21:[1,12],25:[1,13],26:[1,14],28:[1,15],33:[1,16],34:[1,17],35:[1,18],36:[1,19],37:[1,20],38:[1,21],39:[1,22],40:[1,23]},{4:24,10:[1,4],15:3,22:[1,5]},{6:[1,25]},{10:[1,4],15:26,22:[1,5]},{8:27,9:28,10:[1,29]},{10:[2,12],22:[2,12]},{10:[2,13],22:[2,13]},{10:[1,35],20:30,29:[1,31],30:[1,32],31:[1,33],32:[1,34]},{22:[1,36]},{21:[1,37],28:[1,38],40:[1,39]},{25:[1,41],27:[1,40]},{10:[1,35],20:42,29:[1,31],30:[1,32],31:[1,33],32:[1,34]},{10:[2,29],29:[2,29],30:[2,29],31:[2,29],32:[2,29]},{10:[2,30],29:[2,30],30:[2,30],31:[2,30],32:[2,30]},{10:[2,31],29:[2,31],30:[2,31],31:[2,31],32:[2,31]},{10:[2,32],29:[2,32],30:[2,32],31:[2,32],32:[2,32]},{10:[2,33],29:[2,33],30:[2,33],31:[2,33],32:[2,33]},{10:[2,34],29:[2,34],30:[2,34],31:[2,34],32:[2,34]},{10:[2,35],29:[2,35],30:[2,35],31:[2,35],32:[2,35]},{10:[2,36],29:[2,36],30:[2,36],31:[2,36],32:[2,36]},{16:7,17:[1,9],18:[1,10],24:[1,43]},{1:[2,1]},{6:[2,11],7:[2,11],17:[2,11],18:[2,11],24:[2,11]},{6:[2,3],14:[1,44]},{6:[2,9],14:[2,9]},{6:[2,5],11:45,12:[1,46],13:[1,47],14:[2,5]},{6:[2,14],7:[2,14],17:[2,14],18:[2,14],24:[2,14]},{6:[2,24],7:[2,24],14:[2,24],17:[2,24],18:[2,24],24:[2,24]},{6:[2,25],7:[2,25],14:[2,25],17:[2,25],18:[2,25],24:[2,25]},{6:[2,26],7:[2,26],14:[2,26],17:[2,26],18:[2,26],24:[2,26]},{6:[2,27],7:[2,27],14:[2,27],17:[2,27],18:[2,27],24:[2,27]},{6:[2,28],7:[2,28],14:[2,28],17:[2,28],18:[2,28],24:[2,28]},{10:[1,35],20:49,23:48,29:[1,31],30:[1,32],31:[1,33],32:[1,34]},{22:[1,50]},{10:[1,35],20:51,29:[1,31],30:[1,32],31:[1,33],32:[1,34]},{10:[2,37],29:[2,37],30:[2,37],31:[2,37],32:[2,37]},{6:[2,17],7:[2,17],17:[2,17],18:[2,17],24:[2,17]},{27:[1,52]},{17:[1,53]},{6:[2,21],7:[2,21],17:[2,21],18:[2,21],24:[2,21]},{9:54,10:[1,29]},{6:[2,4],14:[2,4]},{6:[2,6],14:[2,6]},{6:[2,7],14:[2,7]},{14:[1,56],24:[1,55]},{14:[2,23],24:[2,23]},{10:[1,35],20:49,23:57,29:[1,31],30:[1,32],31:[1,33],32:[1,34]},{17:[1,58]},{6:[2,18],7:[2,18],17:[2,18],18:[2,18],24:[2,18]},{10:[1,35],20:59,29:[1,31],30:[1,32],31:[1,33],32:[1,34]},{6:[2,8],14:[2,8]},{6:[2,15],7:[2,15],17:[2,15],18:[2,15],24:[2,15]},{10:[1,35],20:60,29:[1,31],30:[1,32],31:[1,33],32:[1,34]},{14:[1,56],24:[1,61]},{10:[1,35],20:62,29:[1,31],30:[1,32],31:[1,33],32:[1,34]},{6:[2,19],7:[2,19],17:[2,19],18:[2,19],24:[2,19]},{14:[2,22],24:[2,22]},{6:[2,16],7:[2,16],17:[2,16],18:[2,16],24:[2,16]},{6:[2,20],7:[2,20],17:[2,20],18:[2,20],24:[2,20]}],</td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code js-file-line">      defaultActions<span class="pl-k">:</span> {<span class="pl-c1">25</span><span class="pl-k">:</span>[<span class="pl-c1">2</span>,<span class="pl-c1">1</span>]},</td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code js-file-line">      parseError<span class="pl-k">:</span> <span class="pl-st">function</span> <span class="pl-en">parseError</span>(<span class="pl-vpf">str</span>,<span class="pl-vpf">hash</span>){<span class="pl-k">if</span>(hash.recoverable){<span class="pl-v">this</span>.trace(str)}<span class="pl-k">else</span>{<span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-en">Error</span>(str)}},</td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code js-file-line">      parse<span class="pl-k">:</span> <span class="pl-st">function</span> <span class="pl-en">parse</span>(<span class="pl-vpf">input</span>) {</td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code js-file-line">        <span class="pl-s">var</span> self <span class="pl-k">=</span> <span class="pl-v">this</span>, stack <span class="pl-k">=</span> [<span class="pl-c1">0</span>], vstack <span class="pl-k">=</span> [<span class="pl-c1">null</span>], lstack <span class="pl-k">=</span> [], table <span class="pl-k">=</span> <span class="pl-v">this</span>.table, yytext <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>, yylineno <span class="pl-k">=</span> <span class="pl-c1">0</span>, yyleng <span class="pl-k">=</span> <span class="pl-c1">0</span>, recovering <span class="pl-k">=</span> <span class="pl-c1">0</span>, TERROR <span class="pl-k">=</span> <span class="pl-c1">2</span>, EOF <span class="pl-k">=</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code js-file-line">        <span class="pl-s">var</span> args <span class="pl-k">=</span> lstack.slice.<span class="pl-s3">call</span>(arguments, <span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code js-file-line">        <span class="pl-v">this</span>.lexer.setInput(input);</td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code js-file-line">        <span class="pl-v">this</span>.lexer.yy <span class="pl-k">=</span> <span class="pl-v">this</span>.yy;</td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code js-file-line">        <span class="pl-v">this</span>.yy.lexer <span class="pl-k">=</span> <span class="pl-v">this</span>.lexer;</td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code js-file-line">        <span class="pl-v">this</span>.yy.parser <span class="pl-k">=</span> <span class="pl-v">this</span>;</td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code js-file-line">        <span class="pl-k">if</span> (<span class="pl-k">typeof</span> <span class="pl-v">this</span>.lexer.yylloc <span class="pl-k">==</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code js-file-line">          <span class="pl-v">this</span>.lexer.yylloc <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code js-file-line">        <span class="pl-s">var</span> yyloc <span class="pl-k">=</span> <span class="pl-v">this</span>.lexer.yylloc;</td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code js-file-line">        lstack.<span class="pl-s3">push</span>(yyloc);</td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code js-file-line">        <span class="pl-s">var</span> ranges <span class="pl-k">=</span> <span class="pl-v">this</span>.lexer.<span class="pl-sc">options</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-v">this</span>.lexer.<span class="pl-sc">options</span>.ranges;</td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code js-file-line">        <span class="pl-k">if</span> (<span class="pl-k">typeof</span> <span class="pl-v">this</span>.yy.parseError <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>function<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code js-file-line">          <span class="pl-v">this</span>.parseError <span class="pl-k">=</span> <span class="pl-v">this</span>.yy.parseError;</td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code js-file-line">        } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code js-file-line">          <span class="pl-v">this</span>.parseError <span class="pl-k">=</span> <span class="pl-s3">Object</span>.getPrototypeOf(<span class="pl-v">this</span>).parseError;</td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code js-file-line">        <span class="pl-st">function</span> <span class="pl-en">popStack</span>(<span class="pl-vpf">n</span>) {</td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code js-file-line">          stack.<span class="pl-sc">length</span> <span class="pl-k">=</span> stack.<span class="pl-sc">length</span> <span class="pl-k">-</span> <span class="pl-c1">2</span> <span class="pl-k">*</span> n;</td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code js-file-line">          vstack.<span class="pl-sc">length</span> <span class="pl-k">=</span> vstack.<span class="pl-sc">length</span> <span class="pl-k">-</span> n;</td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code js-file-line">          lstack.<span class="pl-sc">length</span> <span class="pl-k">=</span> lstack.<span class="pl-sc">length</span> <span class="pl-k">-</span> n;</td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code js-file-line">        <span class="pl-st">function</span> <span class="pl-en">lex</span>() {</td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code js-file-line">          <span class="pl-s">var</span> token;</td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code js-file-line">          token <span class="pl-k">=</span> self.lexer.lex() <span class="pl-k">||</span> EOF;</td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code js-file-line">          <span class="pl-k">if</span> (<span class="pl-k">typeof</span> token <span class="pl-k">!==</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>number<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code js-file-line">            token <span class="pl-k">=</span> self.symbols_[token] <span class="pl-k">||</span> token;</td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code js-file-line">          <span class="pl-k">return</span> token;</td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code js-file-line">        <span class="pl-s">var</span> symbol, preErrorSymbol, state, action, a, r, yyval <span class="pl-k">=</span> {}, p, len, newState, expected;</td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code js-file-line">        <span class="pl-k">while</span> (<span class="pl-c1">true</span>) {</td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code js-file-line">          state <span class="pl-k">=</span> stack[stack.<span class="pl-sc">length</span> <span class="pl-k">-</span> <span class="pl-c1">1</span>];</td>
      </tr>
      <tr>
        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-code js-file-line">          <span class="pl-k">if</span> (<span class="pl-v">this</span>.defaultActions[state]) {</td>
      </tr>
      <tr>
        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-code js-file-line">            action <span class="pl-k">=</span> <span class="pl-v">this</span>.defaultActions[state];</td>
      </tr>
      <tr>
        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-code js-file-line">          } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-code js-file-line">            <span class="pl-k">if</span> (symbol <span class="pl-k">===</span> <span class="pl-c1">null</span> <span class="pl-k">||</span> <span class="pl-k">typeof</span> symbol <span class="pl-k">==</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-code js-file-line">              symbol <span class="pl-k">=</span> lex();</td>
      </tr>
      <tr>
        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-code js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-code js-file-line">            action <span class="pl-k">=</span> table[state] <span class="pl-k">&amp;&amp;</span> table[state][symbol];</td>
      </tr>
      <tr>
        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-code js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-code js-file-line">          <span class="pl-k">if</span> (<span class="pl-k">typeof</span> action <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span> <span class="pl-k">||</span> <span class="pl-k">!</span>action.<span class="pl-sc">length</span> <span class="pl-k">||</span> <span class="pl-k">!</span>action[<span class="pl-c1">0</span>]) {</td>
      </tr>
      <tr>
        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-code js-file-line">            <span class="pl-s">var</span> errStr <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-code js-file-line">            expected <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-code js-file-line">            <span class="pl-k">for</span> (p <span class="pl-k">in</span> table[state]) {</td>
      </tr>
      <tr>
        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-code js-file-line">              <span class="pl-k">if</span> (<span class="pl-v">this</span>.terminals_[p] <span class="pl-k">&amp;&amp;</span> p <span class="pl-k">&gt;</span> TERROR) {</td>
      </tr>
      <tr>
        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-code js-file-line">                expected.<span class="pl-s3">push</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-cce">\&#39;</span><span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-v">this</span>.terminals_[p] <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-cce">\&#39;</span><span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-code js-file-line">              }</td>
      </tr>
      <tr>
        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-code js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-code js-file-line">            <span class="pl-k">if</span> (<span class="pl-v">this</span>.lexer.showPosition) {</td>
      </tr>
      <tr>
        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-code js-file-line">              errStr <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>Parse error on line <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> (yylineno <span class="pl-k">+</span> <span class="pl-c1">1</span>) <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>:<span class="pl-cce">\n</span><span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-v">this</span>.lexer.showPosition() <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-cce">\n</span>Expecting <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> expected.<span class="pl-s3">join</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>, <span class="pl-pds">&#39;</span></span>) <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>, got <span class="pl-cce">\&#39;</span><span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> (<span class="pl-v">this</span>.terminals_[symbol] <span class="pl-k">||</span> symbol) <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-cce">\&#39;</span><span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-code js-file-line">            } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-code js-file-line">              errStr <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>Parse error on line <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> (yylineno <span class="pl-k">+</span> <span class="pl-c1">1</span>) <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>: Unexpected <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> (symbol <span class="pl-k">==</span> EOF <span class="pl-k">?</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>end of input<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-cce">\&#39;</span><span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> (<span class="pl-v">this</span>.terminals_[symbol] <span class="pl-k">||</span> symbol) <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-cce">\&#39;</span><span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-code js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-code js-file-line">            <span class="pl-v">this</span>.parseError(errStr, {</td>
      </tr>
      <tr>
        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-code js-file-line">              text<span class="pl-k">:</span> <span class="pl-v">this</span>.lexer.match,</td>
      </tr>
      <tr>
        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-code js-file-line">              token<span class="pl-k">:</span> <span class="pl-v">this</span>.terminals_[symbol] <span class="pl-k">||</span> symbol,</td>
      </tr>
      <tr>
        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-code js-file-line">              line<span class="pl-k">:</span> <span class="pl-v">this</span>.lexer.yylineno,</td>
      </tr>
      <tr>
        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-code js-file-line">              loc<span class="pl-k">:</span> yyloc,</td>
      </tr>
      <tr>
        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-code js-file-line">              expected<span class="pl-k">:</span> expected</td>
      </tr>
      <tr>
        <td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-code js-file-line">            });</td>
      </tr>
      <tr>
        <td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-code js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-code js-file-line">          <span class="pl-k">if</span> (action[<span class="pl-c1">0</span>] <span class="pl-k">instanceof</span> <span class="pl-s3">Array</span> <span class="pl-k">&amp;&amp;</span> action.<span class="pl-sc">length</span> <span class="pl-k">&gt;</span> <span class="pl-c1">1</span>) {</td>
      </tr>
      <tr>
        <td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-code js-file-line">            <span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-en">Error</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>Parse Error: multiple actions possible at state: <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> state <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>, token: <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> symbol);</td>
      </tr>
      <tr>
        <td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-code js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-code js-file-line">          <span class="pl-k">switch</span> (action[<span class="pl-c1">0</span>]) {</td>
      </tr>
      <tr>
        <td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-code js-file-line">            <span class="pl-k">case</span> <span class="pl-c1">1</span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-code js-file-line">              stack.<span class="pl-s3">push</span>(symbol);</td>
      </tr>
      <tr>
        <td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-code js-file-line">              vstack.<span class="pl-s3">push</span>(<span class="pl-v">this</span>.lexer.yytext);</td>
      </tr>
      <tr>
        <td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-code js-file-line">              lstack.<span class="pl-s3">push</span>(<span class="pl-v">this</span>.lexer.yylloc);</td>
      </tr>
      <tr>
        <td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-code js-file-line">              stack.<span class="pl-s3">push</span>(action[<span class="pl-c1">1</span>]);</td>
      </tr>
      <tr>
        <td id="L166" class="blob-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-code js-file-line">              symbol <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L167" class="blob-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-code js-file-line">              <span class="pl-k">if</span> (<span class="pl-k">!</span>preErrorSymbol) {</td>
      </tr>
      <tr>
        <td id="L168" class="blob-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-code js-file-line">                yyleng <span class="pl-k">=</span> <span class="pl-v">this</span>.lexer.yyleng;</td>
      </tr>
      <tr>
        <td id="L169" class="blob-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-code js-file-line">                yytext <span class="pl-k">=</span> <span class="pl-v">this</span>.lexer.yytext;</td>
      </tr>
      <tr>
        <td id="L170" class="blob-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-code js-file-line">                yylineno <span class="pl-k">=</span> <span class="pl-v">this</span>.lexer.yylineno;</td>
      </tr>
      <tr>
        <td id="L171" class="blob-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-code js-file-line">                yyloc <span class="pl-k">=</span> <span class="pl-v">this</span>.lexer.yylloc;</td>
      </tr>
      <tr>
        <td id="L172" class="blob-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-code js-file-line">                <span class="pl-k">if</span> (recovering <span class="pl-k">&gt;</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L173" class="blob-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-code js-file-line">                  recovering<span class="pl-k">--</span>;</td>
      </tr>
      <tr>
        <td id="L174" class="blob-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-code js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L175" class="blob-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-code js-file-line">              } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L176" class="blob-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-code js-file-line">                symbol <span class="pl-k">=</span> preErrorSymbol;</td>
      </tr>
      <tr>
        <td id="L177" class="blob-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-code js-file-line">                preErrorSymbol <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L178" class="blob-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-code js-file-line">              }</td>
      </tr>
      <tr>
        <td id="L179" class="blob-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-code js-file-line">              <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L180" class="blob-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-code js-file-line">            <span class="pl-k">case</span> <span class="pl-c1">2</span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L181" class="blob-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-code js-file-line">              len <span class="pl-k">=</span> <span class="pl-v">this</span>.productions_[action[<span class="pl-c1">1</span>]][<span class="pl-c1">1</span>];</td>
      </tr>
      <tr>
        <td id="L182" class="blob-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-code js-file-line">              yyval.$ <span class="pl-k">=</span> vstack[vstack.<span class="pl-sc">length</span> <span class="pl-k">-</span> len];</td>
      </tr>
      <tr>
        <td id="L183" class="blob-num js-line-number" data-line-number="183"></td>
        <td id="LC183" class="blob-code js-file-line">              yyval._$ <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L184" class="blob-num js-line-number" data-line-number="184"></td>
        <td id="LC184" class="blob-code js-file-line">                first_line<span class="pl-k">:</span> lstack[lstack.<span class="pl-sc">length</span> <span class="pl-k">-</span> (len <span class="pl-k">||</span> <span class="pl-c1">1</span>)].first_line,</td>
      </tr>
      <tr>
        <td id="L185" class="blob-num js-line-number" data-line-number="185"></td>
        <td id="LC185" class="blob-code js-file-line">                last_line<span class="pl-k">:</span> lstack[lstack.<span class="pl-sc">length</span> <span class="pl-k">-</span> <span class="pl-c1">1</span>].last_line,</td>
      </tr>
      <tr>
        <td id="L186" class="blob-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-code js-file-line">                first_column<span class="pl-k">:</span> lstack[lstack.<span class="pl-sc">length</span> <span class="pl-k">-</span> (len <span class="pl-k">||</span> <span class="pl-c1">1</span>)].first_column,</td>
      </tr>
      <tr>
        <td id="L187" class="blob-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-code js-file-line">                last_column<span class="pl-k">:</span> lstack[lstack.<span class="pl-sc">length</span> <span class="pl-k">-</span> <span class="pl-c1">1</span>].last_column</td>
      </tr>
      <tr>
        <td id="L188" class="blob-num js-line-number" data-line-number="188"></td>
        <td id="LC188" class="blob-code js-file-line">              };</td>
      </tr>
      <tr>
        <td id="L189" class="blob-num js-line-number" data-line-number="189"></td>
        <td id="LC189" class="blob-code js-file-line">              <span class="pl-k">if</span> (ranges) {</td>
      </tr>
      <tr>
        <td id="L190" class="blob-num js-line-number" data-line-number="190"></td>
        <td id="LC190" class="blob-code js-file-line">                yyval._$.range <span class="pl-k">=</span> [</td>
      </tr>
      <tr>
        <td id="L191" class="blob-num js-line-number" data-line-number="191"></td>
        <td id="LC191" class="blob-code js-file-line">                  lstack[lstack.<span class="pl-sc">length</span> <span class="pl-k">-</span> (len <span class="pl-k">||</span> <span class="pl-c1">1</span>)].range[<span class="pl-c1">0</span>],</td>
      </tr>
      <tr>
        <td id="L192" class="blob-num js-line-number" data-line-number="192"></td>
        <td id="LC192" class="blob-code js-file-line">                  lstack[lstack.<span class="pl-sc">length</span> <span class="pl-k">-</span> <span class="pl-c1">1</span>].range[<span class="pl-c1">1</span>]</td>
      </tr>
      <tr>
        <td id="L193" class="blob-num js-line-number" data-line-number="193"></td>
        <td id="LC193" class="blob-code js-file-line">                ];</td>
      </tr>
      <tr>
        <td id="L194" class="blob-num js-line-number" data-line-number="194"></td>
        <td id="LC194" class="blob-code js-file-line">              }</td>
      </tr>
      <tr>
        <td id="L195" class="blob-num js-line-number" data-line-number="195"></td>
        <td id="LC195" class="blob-code js-file-line">              r <span class="pl-k">=</span> <span class="pl-v">this</span>.performAction.<span class="pl-s3">apply</span>(yyval, [</td>
      </tr>
      <tr>
        <td id="L196" class="blob-num js-line-number" data-line-number="196"></td>
        <td id="LC196" class="blob-code js-file-line">                yytext,</td>
      </tr>
      <tr>
        <td id="L197" class="blob-num js-line-number" data-line-number="197"></td>
        <td id="LC197" class="blob-code js-file-line">                yyleng,</td>
      </tr>
      <tr>
        <td id="L198" class="blob-num js-line-number" data-line-number="198"></td>
        <td id="LC198" class="blob-code js-file-line">                yylineno,</td>
      </tr>
      <tr>
        <td id="L199" class="blob-num js-line-number" data-line-number="199"></td>
        <td id="LC199" class="blob-code js-file-line">                <span class="pl-v">this</span>.yy,</td>
      </tr>
      <tr>
        <td id="L200" class="blob-num js-line-number" data-line-number="200"></td>
        <td id="LC200" class="blob-code js-file-line">                action[<span class="pl-c1">1</span>],</td>
      </tr>
      <tr>
        <td id="L201" class="blob-num js-line-number" data-line-number="201"></td>
        <td id="LC201" class="blob-code js-file-line">                vstack,</td>
      </tr>
      <tr>
        <td id="L202" class="blob-num js-line-number" data-line-number="202"></td>
        <td id="LC202" class="blob-code js-file-line">                lstack</td>
      </tr>
      <tr>
        <td id="L203" class="blob-num js-line-number" data-line-number="203"></td>
        <td id="LC203" class="blob-code js-file-line">              ].<span class="pl-s3">concat</span>(args));</td>
      </tr>
      <tr>
        <td id="L204" class="blob-num js-line-number" data-line-number="204"></td>
        <td id="LC204" class="blob-code js-file-line">              <span class="pl-k">if</span> (<span class="pl-k">typeof</span> r <span class="pl-k">!==</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L205" class="blob-num js-line-number" data-line-number="205"></td>
        <td id="LC205" class="blob-code js-file-line">                <span class="pl-k">return</span> r;</td>
      </tr>
      <tr>
        <td id="L206" class="blob-num js-line-number" data-line-number="206"></td>
        <td id="LC206" class="blob-code js-file-line">              }</td>
      </tr>
      <tr>
        <td id="L207" class="blob-num js-line-number" data-line-number="207"></td>
        <td id="LC207" class="blob-code js-file-line">              <span class="pl-k">if</span> (len) {</td>
      </tr>
      <tr>
        <td id="L208" class="blob-num js-line-number" data-line-number="208"></td>
        <td id="LC208" class="blob-code js-file-line">                stack <span class="pl-k">=</span> stack.<span class="pl-s3">slice</span>(<span class="pl-c1">0</span>, <span class="pl-k">-</span><span class="pl-c1">1</span> <span class="pl-k">*</span> len <span class="pl-k">*</span> <span class="pl-c1">2</span>);</td>
      </tr>
      <tr>
        <td id="L209" class="blob-num js-line-number" data-line-number="209"></td>
        <td id="LC209" class="blob-code js-file-line">                vstack <span class="pl-k">=</span> vstack.<span class="pl-s3">slice</span>(<span class="pl-c1">0</span>, <span class="pl-k">-</span><span class="pl-c1">1</span> <span class="pl-k">*</span> len);</td>
      </tr>
      <tr>
        <td id="L210" class="blob-num js-line-number" data-line-number="210"></td>
        <td id="LC210" class="blob-code js-file-line">                lstack <span class="pl-k">=</span> lstack.<span class="pl-s3">slice</span>(<span class="pl-c1">0</span>, <span class="pl-k">-</span><span class="pl-c1">1</span> <span class="pl-k">*</span> len);</td>
      </tr>
      <tr>
        <td id="L211" class="blob-num js-line-number" data-line-number="211"></td>
        <td id="LC211" class="blob-code js-file-line">              }</td>
      </tr>
      <tr>
        <td id="L212" class="blob-num js-line-number" data-line-number="212"></td>
        <td id="LC212" class="blob-code js-file-line">              stack.<span class="pl-s3">push</span>(<span class="pl-v">this</span>.productions_[action[<span class="pl-c1">1</span>]][<span class="pl-c1">0</span>]);</td>
      </tr>
      <tr>
        <td id="L213" class="blob-num js-line-number" data-line-number="213"></td>
        <td id="LC213" class="blob-code js-file-line">              vstack.<span class="pl-s3">push</span>(yyval.$);</td>
      </tr>
      <tr>
        <td id="L214" class="blob-num js-line-number" data-line-number="214"></td>
        <td id="LC214" class="blob-code js-file-line">              lstack.<span class="pl-s3">push</span>(yyval._$);</td>
      </tr>
      <tr>
        <td id="L215" class="blob-num js-line-number" data-line-number="215"></td>
        <td id="LC215" class="blob-code js-file-line">              newState <span class="pl-k">=</span> table[stack[stack.<span class="pl-sc">length</span> <span class="pl-k">-</span> <span class="pl-c1">2</span>]][stack[stack.<span class="pl-sc">length</span> <span class="pl-k">-</span> <span class="pl-c1">1</span>]];</td>
      </tr>
      <tr>
        <td id="L216" class="blob-num js-line-number" data-line-number="216"></td>
        <td id="LC216" class="blob-code js-file-line">              stack.<span class="pl-s3">push</span>(newState);</td>
      </tr>
      <tr>
        <td id="L217" class="blob-num js-line-number" data-line-number="217"></td>
        <td id="LC217" class="blob-code js-file-line">              <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L218" class="blob-num js-line-number" data-line-number="218"></td>
        <td id="LC218" class="blob-code js-file-line">            <span class="pl-k">case</span> <span class="pl-c1">3</span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L219" class="blob-num js-line-number" data-line-number="219"></td>
        <td id="LC219" class="blob-code js-file-line">              <span class="pl-k">return</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L220" class="blob-num js-line-number" data-line-number="220"></td>
        <td id="LC220" class="blob-code js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L221" class="blob-num js-line-number" data-line-number="221"></td>
        <td id="LC221" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L222" class="blob-num js-line-number" data-line-number="222"></td>
        <td id="LC222" class="blob-code js-file-line">        <span class="pl-k">return</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L223" class="blob-num js-line-number" data-line-number="223"></td>
        <td id="LC223" class="blob-code js-file-line">      }};</td>
      </tr>
      <tr>
        <td id="L224" class="blob-num js-line-number" data-line-number="224"></td>
        <td id="LC224" class="blob-code js-file-line">    <span class="pl-c">/* generated by jison-lex 0.2.1 */</span></td>
      </tr>
      <tr>
        <td id="L225" class="blob-num js-line-number" data-line-number="225"></td>
        <td id="LC225" class="blob-code js-file-line">    <span class="pl-s">var</span> lexer <span class="pl-k">=</span> (<span class="pl-st">function</span>(){</td>
      </tr>
      <tr>
        <td id="L226" class="blob-num js-line-number" data-line-number="226"></td>
        <td id="LC226" class="blob-code js-file-line">      <span class="pl-s">var</span> lexer <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L227" class="blob-num js-line-number" data-line-number="227"></td>
        <td id="LC227" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L228" class="blob-num js-line-number" data-line-number="228"></td>
        <td id="LC228" class="blob-code js-file-line">        EOF<span class="pl-k">:</span><span class="pl-c1">1</span>,</td>
      </tr>
      <tr>
        <td id="L229" class="blob-num js-line-number" data-line-number="229"></td>
        <td id="LC229" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L230" class="blob-num js-line-number" data-line-number="230"></td>
        <td id="LC230" class="blob-code js-file-line">        parseError<span class="pl-k">:</span><span class="pl-st">function</span> <span class="pl-en">parseError</span>(<span class="pl-vpf">str</span>,<span class="pl-vpf">hash</span>){<span class="pl-k">if</span>(<span class="pl-v">this</span>.yy.parser){<span class="pl-v">this</span>.yy.parser.parseError(str,hash)}<span class="pl-k">else</span>{<span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-en">Error</span>(str)}},</td>
      </tr>
      <tr>
        <td id="L231" class="blob-num js-line-number" data-line-number="231"></td>
        <td id="LC231" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L232" class="blob-num js-line-number" data-line-number="232"></td>
        <td id="LC232" class="blob-code js-file-line"><span class="pl-c">// resets the lexer, sets new input</span></td>
      </tr>
      <tr>
        <td id="L233" class="blob-num js-line-number" data-line-number="233"></td>
        <td id="LC233" class="blob-code js-file-line">        <span class="pl-en">setInput</span>:<span class="pl-st">function</span> (<span class="pl-vpf">input</span>){<span class="pl-v">this</span>._input<span class="pl-k">=</span>input;<span class="pl-v">this</span>._more<span class="pl-k">=</span><span class="pl-v">this</span>._backtrack<span class="pl-k">=</span><span class="pl-v">this</span>.done<span class="pl-k">=</span><span class="pl-c1">false</span>;<span class="pl-v">this</span>.yylineno<span class="pl-k">=</span><span class="pl-v">this</span>.yyleng<span class="pl-k">=</span><span class="pl-c1">0</span>;<span class="pl-v">this</span>.yytext<span class="pl-k">=</span><span class="pl-v">this</span>.matched<span class="pl-k">=</span><span class="pl-v">this</span>.match<span class="pl-k">=</span><span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;<span class="pl-v">this</span>.conditionStack<span class="pl-k">=</span>[<span class="pl-s1"><span class="pl-pds">&quot;</span>INITIAL<span class="pl-pds">&quot;</span></span>];<span class="pl-v">this</span>.yylloc<span class="pl-k">=</span>{first_line<span class="pl-k">:</span><span class="pl-c1">1</span>,first_column<span class="pl-k">:</span><span class="pl-c1">0</span>,last_line<span class="pl-k">:</span><span class="pl-c1">1</span>,last_column<span class="pl-k">:</span><span class="pl-c1">0</span>};<span class="pl-k">if</span>(<span class="pl-v">this</span>.<span class="pl-sc">options</span>.ranges){<span class="pl-v">this</span>.yylloc.range<span class="pl-k">=</span>[<span class="pl-c1">0</span>,<span class="pl-c1">0</span>]}<span class="pl-v">this</span>.offset<span class="pl-k">=</span><span class="pl-c1">0</span>;<span class="pl-k">return</span> <span class="pl-v">this</span>},</td>
      </tr>
      <tr>
        <td id="L234" class="blob-num js-line-number" data-line-number="234"></td>
        <td id="LC234" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L235" class="blob-num js-line-number" data-line-number="235"></td>
        <td id="LC235" class="blob-code js-file-line"><span class="pl-c">// consumes and returns one char from the input</span></td>
      </tr>
      <tr>
        <td id="L236" class="blob-num js-line-number" data-line-number="236"></td>
        <td id="LC236" class="blob-code js-file-line">        <span class="pl-en">input</span>:<span class="pl-st">function</span> (){<span class="pl-s">var</span> ch<span class="pl-k">=</span><span class="pl-v">this</span>._input[<span class="pl-c1">0</span>];<span class="pl-v">this</span>.yytext<span class="pl-k">+=</span>ch;<span class="pl-v">this</span>.yyleng<span class="pl-k">++</span>;<span class="pl-v">this</span>.offset<span class="pl-k">++</span>;<span class="pl-v">this</span>.match<span class="pl-k">+=</span>ch;<span class="pl-v">this</span>.matched<span class="pl-k">+=</span>ch;<span class="pl-s">var</span> lines<span class="pl-k">=</span>ch.<span class="pl-s3">match</span>(<span class="pl-sr"><span class="pl-pds">/</span>(?:<span class="pl-cce">\r\n</span><span class="pl-k">?</span><span class="pl-k">|</span><span class="pl-cce">\n</span>)<span class="pl-c1">.</span><span class="pl-k">*</span><span class="pl-pds">/</span>g</span>);<span class="pl-k">if</span>(lines){<span class="pl-v">this</span>.yylineno<span class="pl-k">++</span>;<span class="pl-v">this</span>.yylloc.last_line<span class="pl-k">++</span>}<span class="pl-k">else</span>{<span class="pl-v">this</span>.yylloc.last_column<span class="pl-k">++</span>}<span class="pl-k">if</span>(<span class="pl-v">this</span>.<span class="pl-sc">options</span>.ranges){<span class="pl-v">this</span>.yylloc.range[<span class="pl-c1">1</span>]<span class="pl-k">++</span>}<span class="pl-v">this</span>._input<span class="pl-k">=</span><span class="pl-v">this</span>._input.<span class="pl-s3">slice</span>(<span class="pl-c1">1</span>);<span class="pl-k">return</span> ch},</td>
      </tr>
      <tr>
        <td id="L237" class="blob-num js-line-number" data-line-number="237"></td>
        <td id="LC237" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L238" class="blob-num js-line-number" data-line-number="238"></td>
        <td id="LC238" class="blob-code js-file-line"><span class="pl-c">// unshifts one char (or a string) into the input</span></td>
      </tr>
      <tr>
        <td id="L239" class="blob-num js-line-number" data-line-number="239"></td>
        <td id="LC239" class="blob-code js-file-line">        <span class="pl-en">unput</span>:<span class="pl-st">function</span> (<span class="pl-vpf">ch</span>){<span class="pl-s">var</span> len<span class="pl-k">=</span>ch.<span class="pl-sc">length</span>;<span class="pl-s">var</span> lines<span class="pl-k">=</span>ch.<span class="pl-s3">split</span>(<span class="pl-sr"><span class="pl-pds">/</span>(?:<span class="pl-cce">\r\n</span><span class="pl-k">?</span><span class="pl-k">|</span><span class="pl-cce">\n</span>)<span class="pl-pds">/</span>g</span>);<span class="pl-v">this</span>._input<span class="pl-k">=</span>ch<span class="pl-k">+</span><span class="pl-v">this</span>._input;<span class="pl-v">this</span>.yytext<span class="pl-k">=</span><span class="pl-v">this</span>.yytext.<span class="pl-s3">substr</span>(<span class="pl-c1">0</span>,<span class="pl-v">this</span>.yytext.<span class="pl-sc">length</span><span class="pl-k">-</span>len<span class="pl-k">-</span><span class="pl-c1">1</span>);<span class="pl-v">this</span>.offset<span class="pl-k">-=</span>len;<span class="pl-s">var</span> oldLines<span class="pl-k">=</span><span class="pl-v">this</span>.match.<span class="pl-s3">split</span>(<span class="pl-sr"><span class="pl-pds">/</span>(?:<span class="pl-cce">\r\n</span><span class="pl-k">?</span><span class="pl-k">|</span><span class="pl-cce">\n</span>)<span class="pl-pds">/</span>g</span>);<span class="pl-v">this</span>.match<span class="pl-k">=</span><span class="pl-v">this</span>.match.<span class="pl-s3">substr</span>(<span class="pl-c1">0</span>,<span class="pl-v">this</span>.match.<span class="pl-sc">length</span><span class="pl-k">-</span><span class="pl-c1">1</span>);<span class="pl-v">this</span>.matched<span class="pl-k">=</span><span class="pl-v">this</span>.matched.<span class="pl-s3">substr</span>(<span class="pl-c1">0</span>,<span class="pl-v">this</span>.matched.<span class="pl-sc">length</span><span class="pl-k">-</span><span class="pl-c1">1</span>);<span class="pl-k">if</span>(lines.<span class="pl-sc">length</span><span class="pl-k">-</span><span class="pl-c1">1</span>){<span class="pl-v">this</span>.yylineno<span class="pl-k">-=</span>lines.<span class="pl-sc">length</span><span class="pl-k">-</span><span class="pl-c1">1</span>}<span class="pl-s">var</span> r<span class="pl-k">=</span><span class="pl-v">this</span>.yylloc.range;<span class="pl-v">this</span>.yylloc<span class="pl-k">=</span>{first_line<span class="pl-k">:</span><span class="pl-v">this</span>.yylloc.first_line,last_line<span class="pl-k">:</span><span class="pl-v">this</span>.yylineno<span class="pl-k">+</span><span class="pl-c1">1</span>,first_column<span class="pl-k">:</span><span class="pl-v">this</span>.yylloc.first_column,last_column<span class="pl-k">:</span>lines<span class="pl-k">?</span>(lines.<span class="pl-sc">length</span><span class="pl-k">===</span>oldLines.<span class="pl-sc">length</span><span class="pl-k">?</span><span class="pl-v">this</span>.yylloc.first_column<span class="pl-k">:</span><span class="pl-c1">0</span>)<span class="pl-k">+</span>oldLines[oldLines.<span class="pl-sc">length</span><span class="pl-k">-</span>lines.<span class="pl-sc">length</span>].<span class="pl-sc">length</span><span class="pl-k">-</span>lines[<span class="pl-c1">0</span>].<span class="pl-sc">length</span><span class="pl-k">:</span><span class="pl-v">this</span>.yylloc.first_column<span class="pl-k">-</span>len};<span class="pl-k">if</span>(<span class="pl-v">this</span>.<span class="pl-sc">options</span>.ranges){<span class="pl-v">this</span>.yylloc.range<span class="pl-k">=</span>[r[<span class="pl-c1">0</span>],r[<span class="pl-c1">0</span>]<span class="pl-k">+</span><span class="pl-v">this</span>.yyleng<span class="pl-k">-</span>len]}<span class="pl-v">this</span>.yyleng<span class="pl-k">=</span><span class="pl-v">this</span>.yytext.<span class="pl-sc">length</span>;<span class="pl-k">return</span> <span class="pl-v">this</span>},</td>
      </tr>
      <tr>
        <td id="L240" class="blob-num js-line-number" data-line-number="240"></td>
        <td id="LC240" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L241" class="blob-num js-line-number" data-line-number="241"></td>
        <td id="LC241" class="blob-code js-file-line"><span class="pl-c">// When called from action, caches matched text and appends it on next action</span></td>
      </tr>
      <tr>
        <td id="L242" class="blob-num js-line-number" data-line-number="242"></td>
        <td id="LC242" class="blob-code js-file-line">        <span class="pl-en">more</span>:<span class="pl-st">function</span> (){<span class="pl-v">this</span>._more<span class="pl-k">=</span><span class="pl-c1">true</span>;<span class="pl-k">return</span> <span class="pl-v">this</span>},</td>
      </tr>
      <tr>
        <td id="L243" class="blob-num js-line-number" data-line-number="243"></td>
        <td id="LC243" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L244" class="blob-num js-line-number" data-line-number="244"></td>
        <td id="LC244" class="blob-code js-file-line"><span class="pl-c">// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.</span></td>
      </tr>
      <tr>
        <td id="L245" class="blob-num js-line-number" data-line-number="245"></td>
        <td id="LC245" class="blob-code js-file-line">        <span class="pl-en">reject</span>:<span class="pl-st">function</span> (){<span class="pl-k">if</span>(<span class="pl-v">this</span>.<span class="pl-sc">options</span>.backtrack_lexer){<span class="pl-v">this</span>._backtrack<span class="pl-k">=</span><span class="pl-c1">true</span>}<span class="pl-k">else</span>{<span class="pl-k">return</span> <span class="pl-v">this</span>.parseError(<span class="pl-s1"><span class="pl-pds">&quot;</span>Lexical error on line <span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>(<span class="pl-v">this</span>.yylineno<span class="pl-k">+</span><span class="pl-c1">1</span>)<span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&quot;</span>. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).<span class="pl-cce">\n</span><span class="pl-pds">&quot;</span></span><span class="pl-k">+</span><span class="pl-v">this</span>.showPosition(),{text<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>,token<span class="pl-k">:</span><span class="pl-c1">null</span>,line<span class="pl-k">:</span><span class="pl-v">this</span>.yylineno})}<span class="pl-k">return</span> <span class="pl-v">this</span>},</td>
      </tr>
      <tr>
        <td id="L246" class="blob-num js-line-number" data-line-number="246"></td>
        <td id="LC246" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L247" class="blob-num js-line-number" data-line-number="247"></td>
        <td id="LC247" class="blob-code js-file-line"><span class="pl-c">// retain first n characters of the match</span></td>
      </tr>
      <tr>
        <td id="L248" class="blob-num js-line-number" data-line-number="248"></td>
        <td id="LC248" class="blob-code js-file-line">        <span class="pl-en">less</span>:<span class="pl-st">function</span> (<span class="pl-vpf">n</span>){<span class="pl-v">this</span>.unput(<span class="pl-v">this</span>.match.<span class="pl-s3">slice</span>(n))},</td>
      </tr>
      <tr>
        <td id="L249" class="blob-num js-line-number" data-line-number="249"></td>
        <td id="LC249" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L250" class="blob-num js-line-number" data-line-number="250"></td>
        <td id="LC250" class="blob-code js-file-line"><span class="pl-c">// displays already matched input, i.e. for error messages</span></td>
      </tr>
      <tr>
        <td id="L251" class="blob-num js-line-number" data-line-number="251"></td>
        <td id="LC251" class="blob-code js-file-line">        <span class="pl-en">pastInput</span>:<span class="pl-st">function</span> (){<span class="pl-s">var</span> past<span class="pl-k">=</span><span class="pl-v">this</span>.matched.<span class="pl-s3">substr</span>(<span class="pl-c1">0</span>,<span class="pl-v">this</span>.matched.<span class="pl-sc">length</span><span class="pl-k">-</span><span class="pl-v">this</span>.match.<span class="pl-sc">length</span>);<span class="pl-k">return</span>(past.<span class="pl-sc">length</span><span class="pl-k">&gt;</span><span class="pl-c1">20</span><span class="pl-k">?</span><span class="pl-s1"><span class="pl-pds">&quot;</span>...<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>)<span class="pl-k">+</span>past.<span class="pl-s3">substr</span>(<span class="pl-k">-</span><span class="pl-c1">20</span>).<span class="pl-s3">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-cce">\n</span><span class="pl-pds">/</span>g</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>)},</td>
      </tr>
      <tr>
        <td id="L252" class="blob-num js-line-number" data-line-number="252"></td>
        <td id="LC252" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L253" class="blob-num js-line-number" data-line-number="253"></td>
        <td id="LC253" class="blob-code js-file-line"><span class="pl-c">// displays upcoming input, i.e. for error messages</span></td>
      </tr>
      <tr>
        <td id="L254" class="blob-num js-line-number" data-line-number="254"></td>
        <td id="LC254" class="blob-code js-file-line">        <span class="pl-en">upcomingInput</span>:<span class="pl-st">function</span> (){<span class="pl-s">var</span> next<span class="pl-k">=</span><span class="pl-v">this</span>.match;<span class="pl-k">if</span>(next.<span class="pl-sc">length</span><span class="pl-k">&lt;</span><span class="pl-c1">20</span>){next<span class="pl-k">+=</span><span class="pl-v">this</span>._input.<span class="pl-s3">substr</span>(<span class="pl-c1">0</span>,<span class="pl-c1">20</span><span class="pl-k">-</span>next.<span class="pl-sc">length</span>)}<span class="pl-k">return</span>(next.<span class="pl-s3">substr</span>(<span class="pl-c1">0</span>,<span class="pl-c1">20</span>)<span class="pl-k">+</span>(next.<span class="pl-sc">length</span><span class="pl-k">&gt;</span><span class="pl-c1">20</span><span class="pl-k">?</span><span class="pl-s1"><span class="pl-pds">&quot;</span>...<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>)).<span class="pl-s3">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-cce">\n</span><span class="pl-pds">/</span>g</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>)},</td>
      </tr>
      <tr>
        <td id="L255" class="blob-num js-line-number" data-line-number="255"></td>
        <td id="LC255" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L256" class="blob-num js-line-number" data-line-number="256"></td>
        <td id="LC256" class="blob-code js-file-line"><span class="pl-c">// displays the character position where the lexing error occurred, i.e. for error messages</span></td>
      </tr>
      <tr>
        <td id="L257" class="blob-num js-line-number" data-line-number="257"></td>
        <td id="LC257" class="blob-code js-file-line">        <span class="pl-en">showPosition</span>:<span class="pl-st">function</span> (){<span class="pl-s">var</span> pre<span class="pl-k">=</span><span class="pl-v">this</span>.pastInput();<span class="pl-s">var</span> c<span class="pl-k">=</span><span class="pl-k">new</span> <span class="pl-en">Array</span>(pre.<span class="pl-sc">length</span><span class="pl-k">+</span><span class="pl-c1">1</span>).<span class="pl-s3">join</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>-<span class="pl-pds">&quot;</span></span>);<span class="pl-k">return</span> pre<span class="pl-k">+</span><span class="pl-v">this</span>.upcomingInput()<span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-cce">\n</span><span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>c<span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&quot;</span>^<span class="pl-pds">&quot;</span></span>},</td>
      </tr>
      <tr>
        <td id="L258" class="blob-num js-line-number" data-line-number="258"></td>
        <td id="LC258" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L259" class="blob-num js-line-number" data-line-number="259"></td>
        <td id="LC259" class="blob-code js-file-line"><span class="pl-c">// test the lexed token: return FALSE when not a match, otherwise return token</span></td>
      </tr>
      <tr>
        <td id="L260" class="blob-num js-line-number" data-line-number="260"></td>
        <td id="LC260" class="blob-code js-file-line">        test_match:function (match,indexed_rule){var token,lines,backup;if(this.options.backtrack_lexer){backup={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done};if(this.options.ranges){backup.yylloc.range=this.yylloc.range.slice(0)}}lines=match[0].match(/(?:\r\n?|\n).*/g);if(lines){this.yylineno+=lines.length}this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:lines?lines[lines.length-1].length-lines[lines.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+match[0].length};this.yytext+=match[0];this.match+=match[0];this.matches=match;this.yyleng=this.yytext.length;if(this.options.ranges){this.yylloc.range=[this.offset,this.offset+=this.yyleng]}this._more=false;this._backtrack=false;this._input=this._input.slice(match[0].length);this.matched+=match[0];token=this.performAction.call(this,this.yy,this,indexed_rule,this.conditionStack[this.conditionStack.length-1]);if(this.done&amp;&amp;this._input){this.done=false}if(token){return token}else if(this._backtrack){for(var k in backup){this[k]=backup[k]}return false}return false},</td>
      </tr>
      <tr>
        <td id="L261" class="blob-num js-line-number" data-line-number="261"></td>
        <td id="LC261" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L262" class="blob-num js-line-number" data-line-number="262"></td>
        <td id="LC262" class="blob-code js-file-line"><span class="pl-c">// return next match in input</span></td>
      </tr>
      <tr>
        <td id="L263" class="blob-num js-line-number" data-line-number="263"></td>
        <td id="LC263" class="blob-code js-file-line">        <span class="pl-en">next</span>:<span class="pl-st">function</span> (){<span class="pl-k">if</span>(<span class="pl-v">this</span>.done){<span class="pl-k">return</span> <span class="pl-v">this</span>.EOF}<span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-v">this</span>._input){<span class="pl-v">this</span>.done<span class="pl-k">=</span><span class="pl-c1">true</span>}<span class="pl-s">var</span> token,match,tempMatch,index;<span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-v">this</span>._more){<span class="pl-v">this</span>.yytext<span class="pl-k">=</span><span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;<span class="pl-v">this</span>.match<span class="pl-k">=</span><span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>}<span class="pl-s">var</span> rules<span class="pl-k">=</span><span class="pl-v">this</span>._currentRules();<span class="pl-k">for</span>(<span class="pl-s">var</span> i<span class="pl-k">=</span><span class="pl-c1">0</span>;i<span class="pl-k">&lt;</span>rules.<span class="pl-sc">length</span>;i<span class="pl-k">++</span>){tempMatch<span class="pl-k">=</span><span class="pl-v">this</span>._input.<span class="pl-s3">match</span>(<span class="pl-v">this</span>.<span class="pl-sc">rules</span>[rules[i]]);<span class="pl-k">if</span>(tempMatch<span class="pl-k">&amp;&amp;</span>(<span class="pl-k">!</span>match<span class="pl-k">||</span>tempMatch[<span class="pl-c1">0</span>].<span class="pl-sc">length</span><span class="pl-k">&gt;</span>match[<span class="pl-c1">0</span>].<span class="pl-sc">length</span>)){match<span class="pl-k">=</span>tempMatch;index<span class="pl-k">=</span>i;<span class="pl-k">if</span>(<span class="pl-v">this</span>.<span class="pl-sc">options</span>.backtrack_lexer){token<span class="pl-k">=</span><span class="pl-v">this</span>.test_match(tempMatch,rules[i]);<span class="pl-k">if</span>(token<span class="pl-k">!==</span><span class="pl-c1">false</span>){<span class="pl-k">return</span> token}<span class="pl-k">else</span> <span class="pl-k">if</span>(<span class="pl-v">this</span>._backtrack){match<span class="pl-k">=</span><span class="pl-c1">false</span>;<span class="pl-k">continue</span>}<span class="pl-k">else</span>{<span class="pl-k">return</span> <span class="pl-c1">false</span>}}<span class="pl-k">else</span> <span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-v">this</span>.<span class="pl-sc">options</span>.flex){<span class="pl-k">break</span>}}}<span class="pl-k">if</span>(match){token<span class="pl-k">=</span><span class="pl-v">this</span>.test_match(match,rules[index]);<span class="pl-k">if</span>(token<span class="pl-k">!==</span><span class="pl-c1">false</span>){<span class="pl-k">return</span> token}<span class="pl-k">return</span> <span class="pl-c1">false</span>}<span class="pl-k">if</span>(<span class="pl-v">this</span>._input<span class="pl-k">===</span><span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>){<span class="pl-k">return</span> <span class="pl-v">this</span>.EOF}<span class="pl-k">else</span>{<span class="pl-k">return</span> <span class="pl-v">this</span>.parseError(<span class="pl-s1"><span class="pl-pds">&quot;</span>Lexical error on line <span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>(<span class="pl-v">this</span>.yylineno<span class="pl-k">+</span><span class="pl-c1">1</span>)<span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&quot;</span>. Unrecognized text.<span class="pl-cce">\n</span><span class="pl-pds">&quot;</span></span><span class="pl-k">+</span><span class="pl-v">this</span>.showPosition(),{text<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>,token<span class="pl-k">:</span><span class="pl-c1">null</span>,line<span class="pl-k">:</span><span class="pl-v">this</span>.yylineno})}},</td>
      </tr>
      <tr>
        <td id="L264" class="blob-num js-line-number" data-line-number="264"></td>
        <td id="LC264" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L265" class="blob-num js-line-number" data-line-number="265"></td>
        <td id="LC265" class="blob-code js-file-line"><span class="pl-c">// return next match that has a token</span></td>
      </tr>
      <tr>
        <td id="L266" class="blob-num js-line-number" data-line-number="266"></td>
        <td id="LC266" class="blob-code js-file-line">        lex<span class="pl-k">:</span><span class="pl-st">function</span> <span class="pl-en">lex</span>(){<span class="pl-s">var</span> r<span class="pl-k">=</span><span class="pl-v">this</span>.<span class="pl-sc">next</span>();<span class="pl-k">if</span>(r){<span class="pl-k">return</span> r}<span class="pl-k">else</span>{<span class="pl-k">return</span> <span class="pl-v">this</span>.lex()}},</td>
      </tr>
      <tr>
        <td id="L267" class="blob-num js-line-number" data-line-number="267"></td>
        <td id="LC267" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L268" class="blob-num js-line-number" data-line-number="268"></td>
        <td id="LC268" class="blob-code js-file-line"><span class="pl-c">// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)</span></td>
      </tr>
      <tr>
        <td id="L269" class="blob-num js-line-number" data-line-number="269"></td>
        <td id="LC269" class="blob-code js-file-line">        begin<span class="pl-k">:</span><span class="pl-st">function</span> <span class="pl-en">begin</span>(<span class="pl-vpf">condition</span>){<span class="pl-v">this</span>.conditionStack.<span class="pl-s3">push</span>(condition)},</td>
      </tr>
      <tr>
        <td id="L270" class="blob-num js-line-number" data-line-number="270"></td>
        <td id="LC270" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L271" class="blob-num js-line-number" data-line-number="271"></td>
        <td id="LC271" class="blob-code js-file-line"><span class="pl-c">// pop the previously active lexer condition state off the condition stack</span></td>
      </tr>
      <tr>
        <td id="L272" class="blob-num js-line-number" data-line-number="272"></td>
        <td id="LC272" class="blob-code js-file-line">        popState<span class="pl-k">:</span><span class="pl-st">function</span> <span class="pl-en">popState</span>(){<span class="pl-s">var</span> n<span class="pl-k">=</span><span class="pl-v">this</span>.conditionStack.<span class="pl-sc">length</span><span class="pl-k">-</span><span class="pl-c1">1</span>;<span class="pl-k">if</span>(n<span class="pl-k">&gt;</span><span class="pl-c1">0</span>){<span class="pl-k">return</span> <span class="pl-v">this</span>.conditionStack.<span class="pl-s3">pop</span>()}<span class="pl-k">else</span>{<span class="pl-k">return</span> <span class="pl-v">this</span>.conditionStack[<span class="pl-c1">0</span>]}},</td>
      </tr>
      <tr>
        <td id="L273" class="blob-num js-line-number" data-line-number="273"></td>
        <td id="LC273" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L274" class="blob-num js-line-number" data-line-number="274"></td>
        <td id="LC274" class="blob-code js-file-line"><span class="pl-c">// produce the lexer rule set which is active for the currently active lexer condition state</span></td>
      </tr>
      <tr>
        <td id="L275" class="blob-num js-line-number" data-line-number="275"></td>
        <td id="LC275" class="blob-code js-file-line">        _currentRules<span class="pl-k">:</span><span class="pl-st">function</span> <span class="pl-en">_currentRules</span>(){<span class="pl-k">if</span>(<span class="pl-v">this</span>.conditionStack.<span class="pl-sc">length</span><span class="pl-k">&amp;&amp;</span><span class="pl-v">this</span>.conditionStack[<span class="pl-v">this</span>.conditionStack.<span class="pl-sc">length</span><span class="pl-k">-</span><span class="pl-c1">1</span>]){<span class="pl-k">return</span> <span class="pl-v">this</span>.conditions[<span class="pl-v">this</span>.conditionStack[<span class="pl-v">this</span>.conditionStack.<span class="pl-sc">length</span><span class="pl-k">-</span><span class="pl-c1">1</span>]].<span class="pl-sc">rules</span>}<span class="pl-k">else</span>{<span class="pl-k">return</span> <span class="pl-v">this</span>.conditions[<span class="pl-s1"><span class="pl-pds">&quot;</span>INITIAL<span class="pl-pds">&quot;</span></span>].<span class="pl-sc">rules</span>}},</td>
      </tr>
      <tr>
        <td id="L276" class="blob-num js-line-number" data-line-number="276"></td>
        <td id="LC276" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L277" class="blob-num js-line-number" data-line-number="277"></td>
        <td id="LC277" class="blob-code js-file-line"><span class="pl-c">// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available</span></td>
      </tr>
      <tr>
        <td id="L278" class="blob-num js-line-number" data-line-number="278"></td>
        <td id="LC278" class="blob-code js-file-line">        topState<span class="pl-k">:</span><span class="pl-st">function</span> <span class="pl-en">topState</span>(<span class="pl-vpf">n</span>){n<span class="pl-k">=</span><span class="pl-v">this</span>.conditionStack.<span class="pl-sc">length</span><span class="pl-k">-</span><span class="pl-c1">1</span><span class="pl-k">-</span><span class="pl-s3">Math</span>.<span class="pl-s3">abs</span>(n<span class="pl-k">||</span><span class="pl-c1">0</span>);<span class="pl-k">if</span>(n<span class="pl-k">&gt;=</span><span class="pl-c1">0</span>){<span class="pl-k">return</span> <span class="pl-v">this</span>.conditionStack[n]}<span class="pl-k">else</span>{<span class="pl-k">return</span><span class="pl-s1"><span class="pl-pds">&quot;</span>INITIAL<span class="pl-pds">&quot;</span></span>}},</td>
      </tr>
      <tr>
        <td id="L279" class="blob-num js-line-number" data-line-number="279"></td>
        <td id="LC279" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L280" class="blob-num js-line-number" data-line-number="280"></td>
        <td id="LC280" class="blob-code js-file-line"><span class="pl-c">// alias for begin(condition)</span></td>
      </tr>
      <tr>
        <td id="L281" class="blob-num js-line-number" data-line-number="281"></td>
        <td id="LC281" class="blob-code js-file-line">        pushState<span class="pl-k">:</span><span class="pl-st">function</span> <span class="pl-en">pushState</span>(<span class="pl-vpf">condition</span>){<span class="pl-v">this</span>.begin(condition)},</td>
      </tr>
      <tr>
        <td id="L282" class="blob-num js-line-number" data-line-number="282"></td>
        <td id="LC282" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L283" class="blob-num js-line-number" data-line-number="283"></td>
        <td id="LC283" class="blob-code js-file-line"><span class="pl-c">// return the number of states currently on the stack</span></td>
      </tr>
      <tr>
        <td id="L284" class="blob-num js-line-number" data-line-number="284"></td>
        <td id="LC284" class="blob-code js-file-line">        stateStackSize<span class="pl-k">:</span><span class="pl-st">function</span> <span class="pl-en">stateStackSize</span>(){<span class="pl-k">return</span> <span class="pl-v">this</span>.conditionStack.<span class="pl-sc">length</span>},</td>
      </tr>
      <tr>
        <td id="L285" class="blob-num js-line-number" data-line-number="285"></td>
        <td id="LC285" class="blob-code js-file-line">        options<span class="pl-k">:</span> {<span class="pl-s1"><span class="pl-pds">&quot;</span>case-insensitive<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">true</span>},</td>
      </tr>
      <tr>
        <td id="L286" class="blob-num js-line-number" data-line-number="286"></td>
        <td id="LC286" class="blob-code js-file-line">        performAction<span class="pl-k">:</span> <span class="pl-st">function</span> <span class="pl-en">anonymous</span>(<span class="pl-vpf">yy</span>,<span class="pl-vpf">yy_</span>,<span class="pl-vpf">$avoiding_name_collisions</span>,<span class="pl-vpf">YY_START</span></td>
      </tr>
      <tr>
        <td id="L287" class="blob-num js-line-number" data-line-number="287"></td>
        <td id="LC287" class="blob-code js-file-line">                                          /**/) {</td>
      </tr>
      <tr>
        <td id="L288" class="blob-num js-line-number" data-line-number="288"></td>
        <td id="LC288" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L289" class="blob-num js-line-number" data-line-number="289"></td>
        <td id="LC289" class="blob-code js-file-line">          <span class="pl-s">var</span> YYSTATE<span class="pl-k">=</span>YY_START;</td>
      </tr>
      <tr>
        <td id="L290" class="blob-num js-line-number" data-line-number="290"></td>
        <td id="LC290" class="blob-code js-file-line">          <span class="pl-k">switch</span>($avoiding_name_collisions) {</td>
      </tr>
      <tr>
        <td id="L291" class="blob-num js-line-number" data-line-number="291"></td>
        <td id="LC291" class="blob-code js-file-line">            <span class="pl-k">case</span> <span class="pl-c1">0</span><span class="pl-k">:</span><span class="pl-c">/* skip whitespace */</span></td>
      </tr>
      <tr>
        <td id="L292" class="blob-num js-line-number" data-line-number="292"></td>
        <td id="LC292" class="blob-code js-file-line">              <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L293" class="blob-num js-line-number" data-line-number="293"></td>
        <td id="LC293" class="blob-code js-file-line">            <span class="pl-k">case</span> <span class="pl-c1">1</span><span class="pl-k">:</span><span class="pl-k">return</span> <span class="pl-c1">28</span></td>
      </tr>
      <tr>
        <td id="L294" class="blob-num js-line-number" data-line-number="294"></td>
        <td id="LC294" class="blob-code js-file-line">              <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L295" class="blob-num js-line-number" data-line-number="295"></td>
        <td id="LC295" class="blob-code js-file-line">            <span class="pl-k">case</span> <span class="pl-c1">2</span><span class="pl-k">:</span><span class="pl-k">return</span> <span class="pl-c1">7</span></td>
      </tr>
      <tr>
        <td id="L296" class="blob-num js-line-number" data-line-number="296"></td>
        <td id="LC296" class="blob-code js-file-line">              <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L297" class="blob-num js-line-number" data-line-number="297"></td>
        <td id="LC297" class="blob-code js-file-line">            <span class="pl-k">case</span> <span class="pl-c1">3</span><span class="pl-k">:</span><span class="pl-k">return</span> <span class="pl-c1">14</span></td>
      </tr>
      <tr>
        <td id="L298" class="blob-num js-line-number" data-line-number="298"></td>
        <td id="LC298" class="blob-code js-file-line">              <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L299" class="blob-num js-line-number" data-line-number="299"></td>
        <td id="LC299" class="blob-code js-file-line">            <span class="pl-k">case</span> <span class="pl-c1">4</span><span class="pl-k">:</span><span class="pl-k">return</span> <span class="pl-c1">33</span></td>
      </tr>
      <tr>
        <td id="L300" class="blob-num js-line-number" data-line-number="300"></td>
        <td id="LC300" class="blob-code js-file-line">              <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L301" class="blob-num js-line-number" data-line-number="301"></td>
        <td id="LC301" class="blob-code js-file-line">            <span class="pl-k">case</span> <span class="pl-c1">5</span><span class="pl-k">:</span><span class="pl-k">return</span> <span class="pl-c1">34</span></td>
      </tr>
      <tr>
        <td id="L302" class="blob-num js-line-number" data-line-number="302"></td>
        <td id="LC302" class="blob-code js-file-line">              <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L303" class="blob-num js-line-number" data-line-number="303"></td>
        <td id="LC303" class="blob-code js-file-line">            <span class="pl-k">case</span> <span class="pl-c1">6</span><span class="pl-k">:</span><span class="pl-k">return</span> <span class="pl-c1">37</span></td>
      </tr>
      <tr>
        <td id="L304" class="blob-num js-line-number" data-line-number="304"></td>
        <td id="LC304" class="blob-code js-file-line">              <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L305" class="blob-num js-line-number" data-line-number="305"></td>
        <td id="LC305" class="blob-code js-file-line">            <span class="pl-k">case</span> <span class="pl-c1">7</span><span class="pl-k">:</span><span class="pl-k">return</span> <span class="pl-c1">36</span></td>
      </tr>
      <tr>
        <td id="L306" class="blob-num js-line-number" data-line-number="306"></td>
        <td id="LC306" class="blob-code js-file-line">              <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L307" class="blob-num js-line-number" data-line-number="307"></td>
        <td id="LC307" class="blob-code js-file-line">            <span class="pl-k">case</span> <span class="pl-c1">8</span><span class="pl-k">:</span><span class="pl-k">return</span> <span class="pl-c1">39</span></td>
      </tr>
      <tr>
        <td id="L308" class="blob-num js-line-number" data-line-number="308"></td>
        <td id="LC308" class="blob-code js-file-line">              <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L309" class="blob-num js-line-number" data-line-number="309"></td>
        <td id="LC309" class="blob-code js-file-line">            <span class="pl-k">case</span> <span class="pl-c1">9</span><span class="pl-k">:</span><span class="pl-k">return</span> <span class="pl-c1">38</span></td>
      </tr>
      <tr>
        <td id="L310" class="blob-num js-line-number" data-line-number="310"></td>
        <td id="LC310" class="blob-code js-file-line">              <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L311" class="blob-num js-line-number" data-line-number="311"></td>
        <td id="LC311" class="blob-code js-file-line">            <span class="pl-k">case</span> <span class="pl-c1">10</span><span class="pl-k">:</span><span class="pl-k">return</span> <span class="pl-c1">22</span></td>
      </tr>
      <tr>
        <td id="L312" class="blob-num js-line-number" data-line-number="312"></td>
        <td id="LC312" class="blob-code js-file-line">              <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L313" class="blob-num js-line-number" data-line-number="313"></td>
        <td id="LC313" class="blob-code js-file-line">            <span class="pl-k">case</span> <span class="pl-c1">11</span><span class="pl-k">:</span><span class="pl-k">return</span> <span class="pl-c1">24</span></td>
      </tr>
      <tr>
        <td id="L314" class="blob-num js-line-number" data-line-number="314"></td>
        <td id="LC314" class="blob-code js-file-line">              <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L315" class="blob-num js-line-number" data-line-number="315"></td>
        <td id="LC315" class="blob-code js-file-line">            <span class="pl-k">case</span> <span class="pl-c1">12</span><span class="pl-k">:</span><span class="pl-k">return</span> <span class="pl-c1">26</span></td>
      </tr>
      <tr>
        <td id="L316" class="blob-num js-line-number" data-line-number="316"></td>
        <td id="LC316" class="blob-code js-file-line">              <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L317" class="blob-num js-line-number" data-line-number="317"></td>
        <td id="LC317" class="blob-code js-file-line">            <span class="pl-k">case</span> <span class="pl-c1">13</span><span class="pl-k">:</span><span class="pl-k">return</span> <span class="pl-c1">21</span></td>
      </tr>
      <tr>
        <td id="L318" class="blob-num js-line-number" data-line-number="318"></td>
        <td id="LC318" class="blob-code js-file-line">              <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L319" class="blob-num js-line-number" data-line-number="319"></td>
        <td id="LC319" class="blob-code js-file-line">            <span class="pl-k">case</span> <span class="pl-c1">14</span><span class="pl-k">:</span><span class="pl-k">return</span> <span class="pl-c1">17</span></td>
      </tr>
      <tr>
        <td id="L320" class="blob-num js-line-number" data-line-number="320"></td>
        <td id="LC320" class="blob-code js-file-line">              <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L321" class="blob-num js-line-number" data-line-number="321"></td>
        <td id="LC321" class="blob-code js-file-line">            <span class="pl-k">case</span> <span class="pl-c1">15</span><span class="pl-k">:</span><span class="pl-k">return</span> <span class="pl-c1">18</span></td>
      </tr>
      <tr>
        <td id="L322" class="blob-num js-line-number" data-line-number="322"></td>
        <td id="LC322" class="blob-code js-file-line">              <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L323" class="blob-num js-line-number" data-line-number="323"></td>
        <td id="LC323" class="blob-code js-file-line">            <span class="pl-k">case</span> <span class="pl-c1">16</span><span class="pl-k">:</span><span class="pl-k">return</span> <span class="pl-c1">25</span></td>
      </tr>
      <tr>
        <td id="L324" class="blob-num js-line-number" data-line-number="324"></td>
        <td id="LC324" class="blob-code js-file-line">              <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L325" class="blob-num js-line-number" data-line-number="325"></td>
        <td id="LC325" class="blob-code js-file-line">            <span class="pl-k">case</span> <span class="pl-c1">17</span><span class="pl-k">:</span><span class="pl-k">return</span> <span class="pl-c1">40</span></td>
      </tr>
      <tr>
        <td id="L326" class="blob-num js-line-number" data-line-number="326"></td>
        <td id="LC326" class="blob-code js-file-line">              <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L327" class="blob-num js-line-number" data-line-number="327"></td>
        <td id="LC327" class="blob-code js-file-line">            <span class="pl-k">case</span> <span class="pl-c1">18</span><span class="pl-k">:</span><span class="pl-k">return</span> <span class="pl-c1">12</span></td>
      </tr>
      <tr>
        <td id="L328" class="blob-num js-line-number" data-line-number="328"></td>
        <td id="LC328" class="blob-code js-file-line">              <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L329" class="blob-num js-line-number" data-line-number="329"></td>
        <td id="LC329" class="blob-code js-file-line">            <span class="pl-k">case</span> <span class="pl-c1">19</span><span class="pl-k">:</span><span class="pl-k">return</span> <span class="pl-c1">13</span></td>
      </tr>
      <tr>
        <td id="L330" class="blob-num js-line-number" data-line-number="330"></td>
        <td id="LC330" class="blob-code js-file-line">              <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L331" class="blob-num js-line-number" data-line-number="331"></td>
        <td id="LC331" class="blob-code js-file-line">            <span class="pl-k">case</span> <span class="pl-c1">20</span><span class="pl-k">:</span><span class="pl-k">return</span> <span class="pl-c1">29</span></td>
      </tr>
      <tr>
        <td id="L332" class="blob-num js-line-number" data-line-number="332"></td>
        <td id="LC332" class="blob-code js-file-line">              <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L333" class="blob-num js-line-number" data-line-number="333"></td>
        <td id="LC333" class="blob-code js-file-line">            <span class="pl-k">case</span> <span class="pl-c1">21</span><span class="pl-k">:</span><span class="pl-k">return</span> <span class="pl-c1">27</span></td>
      </tr>
      <tr>
        <td id="L334" class="blob-num js-line-number" data-line-number="334"></td>
        <td id="LC334" class="blob-code js-file-line">              <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L335" class="blob-num js-line-number" data-line-number="335"></td>
        <td id="LC335" class="blob-code js-file-line">            <span class="pl-k">case</span> <span class="pl-c1">22</span><span class="pl-k">:</span><span class="pl-k">return</span> <span class="pl-c1">31</span></td>
      </tr>
      <tr>
        <td id="L336" class="blob-num js-line-number" data-line-number="336"></td>
        <td id="LC336" class="blob-code js-file-line">              <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L337" class="blob-num js-line-number" data-line-number="337"></td>
        <td id="LC337" class="blob-code js-file-line">            <span class="pl-k">case</span> <span class="pl-c1">23</span><span class="pl-k">:</span><span class="pl-k">return</span> <span class="pl-c1">32</span></td>
      </tr>
      <tr>
        <td id="L338" class="blob-num js-line-number" data-line-number="338"></td>
        <td id="LC338" class="blob-code js-file-line">              <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L339" class="blob-num js-line-number" data-line-number="339"></td>
        <td id="LC339" class="blob-code js-file-line">            <span class="pl-k">case</span> <span class="pl-c1">24</span><span class="pl-k">:</span><span class="pl-k">return</span> <span class="pl-c1">30</span></td>
      </tr>
      <tr>
        <td id="L340" class="blob-num js-line-number" data-line-number="340"></td>
        <td id="LC340" class="blob-code js-file-line">              <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L341" class="blob-num js-line-number" data-line-number="341"></td>
        <td id="LC341" class="blob-code js-file-line">            <span class="pl-k">case</span> <span class="pl-c1">25</span><span class="pl-k">:</span><span class="pl-k">return</span> <span class="pl-c1">10</span></td>
      </tr>
      <tr>
        <td id="L342" class="blob-num js-line-number" data-line-number="342"></td>
        <td id="LC342" class="blob-code js-file-line">              <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L343" class="blob-num js-line-number" data-line-number="343"></td>
        <td id="LC343" class="blob-code js-file-line">            <span class="pl-k">case</span> <span class="pl-c1">26</span><span class="pl-k">:</span><span class="pl-k">return</span> <span class="pl-c1">6</span></td>
      </tr>
      <tr>
        <td id="L344" class="blob-num js-line-number" data-line-number="344"></td>
        <td id="LC344" class="blob-code js-file-line">              <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L345" class="blob-num js-line-number" data-line-number="345"></td>
        <td id="LC345" class="blob-code js-file-line">            <span class="pl-k">case</span> <span class="pl-c1">27</span><span class="pl-k">:</span><span class="pl-k">return</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>INVALID<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L346" class="blob-num js-line-number" data-line-number="346"></td>
        <td id="LC346" class="blob-code js-file-line">              <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L347" class="blob-num js-line-number" data-line-number="347"></td>
        <td id="LC347" class="blob-code js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L348" class="blob-num js-line-number" data-line-number="348"></td>
        <td id="LC348" class="blob-code js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L349" class="blob-num js-line-number" data-line-number="349"></td>
        <td id="LC349" class="blob-code js-file-line">        rules<span class="pl-k">:</span> [<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>(?:<span class="pl-c1">\s</span><span class="pl-k">+</span>)<span class="pl-pds">/</span>i</span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>(?:BETWEEN<span class="pl-k">\b</span>)<span class="pl-pds">/</span>i</span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>(?:ORDER BY<span class="pl-k">\b</span>)<span class="pl-pds">/</span>i</span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>(?:,)<span class="pl-pds">/</span>i</span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>(?:=)<span class="pl-pds">/</span>i</span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>(?:!=)<span class="pl-pds">/</span>i</span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>(?:&gt;=)<span class="pl-pds">/</span>i</span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>(?:&gt;)<span class="pl-pds">/</span>i</span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>(?:&lt;=)<span class="pl-pds">/</span>i</span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>(?:&lt;)<span class="pl-pds">/</span>i</span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>(?:<span class="pl-cce">\(</span>)<span class="pl-pds">/</span>i</span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>(?:<span class="pl-cce">\)</span>)<span class="pl-pds">/</span>i</span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>(?:IS<span class="pl-k">\b</span>)<span class="pl-pds">/</span>i</span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>(?:IN<span class="pl-k">\b</span>)<span class="pl-pds">/</span>i</span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>(?:AND<span class="pl-k">\b</span>)<span class="pl-pds">/</span>i</span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>(?:OR<span class="pl-k">\b</span>)<span class="pl-pds">/</span>i</span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>(?:NOT<span class="pl-k">\b</span>)<span class="pl-pds">/</span>i</span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>(?:LIKE<span class="pl-k">\b</span>)<span class="pl-pds">/</span>i</span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>(?:ASC<span class="pl-k">\b</span>)<span class="pl-pds">/</span>i</span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>(?:DESC<span class="pl-k">\b</span>)<span class="pl-pds">/</span>i</span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>(?:<span class="pl-c1">[&#39;]</span>(<span class="pl-cce">\\</span><span class="pl-c1">.</span><span class="pl-k">|</span><span class="pl-c1">[<span class="pl-k">^</span>&#39;]</span>)<span class="pl-k">*</span><span class="pl-c1">[&#39;]</span>)<span class="pl-pds">/</span>i</span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>(?:NULL<span class="pl-k">\b</span>)<span class="pl-pds">/</span>i</span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>(?:true<span class="pl-k">\b</span>)<span class="pl-pds">/</span>i</span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>(?:false<span class="pl-k">\b</span>)<span class="pl-pds">/</span>i</span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>(?:<span class="pl-c1">[<span class="pl-c1">0-9</span>]</span><span class="pl-k">+</span>(<span class="pl-cce">\.</span><span class="pl-c1">[<span class="pl-c1">0-9</span>]</span><span class="pl-k">+</span>)<span class="pl-k">?</span>)<span class="pl-pds">/</span>i</span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>(?:<span class="pl-c1">[<span class="pl-c1">a-zA-Z</span>_][<span class="pl-c1">a-zA-Z0-9</span>_]</span><span class="pl-k">*</span>)<span class="pl-pds">/</span>i</span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>(?:<span class="pl-k">$</span>)<span class="pl-pds">/</span>i</span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>(?:<span class="pl-c1">.</span>)<span class="pl-pds">/</span>i</span>],</td>
      </tr>
      <tr>
        <td id="L350" class="blob-num js-line-number" data-line-number="350"></td>
        <td id="LC350" class="blob-code js-file-line">        conditions<span class="pl-k">:</span> {<span class="pl-s1"><span class="pl-pds">&quot;</span>INITIAL<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>{<span class="pl-s1"><span class="pl-pds">&quot;</span>rules<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>[<span class="pl-c1">0</span>,<span class="pl-c1">1</span>,<span class="pl-c1">2</span>,<span class="pl-c1">3</span>,<span class="pl-c1">4</span>,<span class="pl-c1">5</span>,<span class="pl-c1">6</span>,<span class="pl-c1">7</span>,<span class="pl-c1">8</span>,<span class="pl-c1">9</span>,<span class="pl-c1">10</span>,<span class="pl-c1">11</span>,<span class="pl-c1">12</span>,<span class="pl-c1">13</span>,<span class="pl-c1">14</span>,<span class="pl-c1">15</span>,<span class="pl-c1">16</span>,<span class="pl-c1">17</span>,<span class="pl-c1">18</span>,<span class="pl-c1">19</span>,<span class="pl-c1">20</span>,<span class="pl-c1">21</span>,<span class="pl-c1">22</span>,<span class="pl-c1">23</span>,<span class="pl-c1">24</span>,<span class="pl-c1">25</span>,<span class="pl-c1">26</span>,<span class="pl-c1">27</span>],<span class="pl-s1"><span class="pl-pds">&quot;</span>inclusive<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">true</span>}}</td>
      </tr>
      <tr>
        <td id="L351" class="blob-num js-line-number" data-line-number="351"></td>
        <td id="LC351" class="blob-code js-file-line">      };</td>
      </tr>
      <tr>
        <td id="L352" class="blob-num js-line-number" data-line-number="352"></td>
        <td id="LC352" class="blob-code js-file-line">      <span class="pl-k">return</span> lexer;</td>
      </tr>
      <tr>
        <td id="L353" class="blob-num js-line-number" data-line-number="353"></td>
        <td id="LC353" class="blob-code js-file-line">    })();</td>
      </tr>
      <tr>
        <td id="L354" class="blob-num js-line-number" data-line-number="354"></td>
        <td id="LC354" class="blob-code js-file-line">    parser.lexer <span class="pl-k">=</span> lexer;</td>
      </tr>
      <tr>
        <td id="L355" class="blob-num js-line-number" data-line-number="355"></td>
        <td id="LC355" class="blob-code js-file-line">    <span class="pl-st">function</span> <span class="pl-en">Parser</span> () {</td>
      </tr>
      <tr>
        <td id="L356" class="blob-num js-line-number" data-line-number="356"></td>
        <td id="LC356" class="blob-code js-file-line">      <span class="pl-v">this</span>.yy <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L357" class="blob-num js-line-number" data-line-number="357"></td>
        <td id="LC357" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L358" class="blob-num js-line-number" data-line-number="358"></td>
        <td id="LC358" class="blob-code js-file-line">    <span class="pl-s3">Parser</span>.<span class="pl-sc">prototype</span> <span class="pl-k">=</span> parser;parser.Parser <span class="pl-k">=</span> Parser;</td>
      </tr>
      <tr>
        <td id="L359" class="blob-num js-line-number" data-line-number="359"></td>
        <td id="LC359" class="blob-code js-file-line">    <span class="pl-k">return</span> <span class="pl-k">new</span> <span class="pl-en">Parser</span>;</td>
      </tr>
      <tr>
        <td id="L360" class="blob-num js-line-number" data-line-number="360"></td>
        <td id="LC360" class="blob-code js-file-line">  })();</td>
      </tr>
      <tr>
        <td id="L361" class="blob-num js-line-number" data-line-number="361"></td>
        <td id="LC361" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L362" class="blob-num js-line-number" data-line-number="362"></td>
        <td id="LC362" class="blob-code js-file-line">  <span class="pl-c">/* parser generated by jison 0.4.13 */</span></td>
      </tr>
      <tr>
        <td id="L363" class="blob-num js-line-number" data-line-number="363"></td>
        <td id="LC363" class="blob-code js-file-line">  <span class="pl-s">var</span> tokenizer <span class="pl-k">=</span> (<span class="pl-st">function</span>(){</td>
      </tr>
      <tr>
        <td id="L364" class="blob-num js-line-number" data-line-number="364"></td>
        <td id="LC364" class="blob-code js-file-line">    <span class="pl-s">var</span> parser <span class="pl-k">=</span> {trace<span class="pl-k">:</span> <span class="pl-st">function</span> <span class="pl-en">trace</span>(){},</td>
      </tr>
      <tr>
        <td id="L365" class="blob-num js-line-number" data-line-number="365"></td>
        <td id="LC365" class="blob-code js-file-line">      yy<span class="pl-k">:</span> {},</td>
      </tr>
      <tr>
        <td id="L366" class="blob-num js-line-number" data-line-number="366"></td>
        <td id="LC366" class="blob-code js-file-line">      symbols_<span class="pl-k">:</span> {<span class="pl-s1"><span class="pl-pds">&quot;</span>error<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">2</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>main<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">3</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>expression<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">4</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>EOF<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">5</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>orderValue<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">6</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>IDENTIFIER<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">7</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>orderWay<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">8</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>ASC<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">9</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>DESC<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">10</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>orderByCommaList<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">11</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>COMMA<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">12</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>condition<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">13</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>connector<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">14</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>ORDER_BY<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">15</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>LOGICAL_AND<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">16</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>LOGICAL_OR<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">17</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>comparison<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">18</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>value<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">19</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>IN<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">20</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>LPAREN<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">21</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>commaList<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">22</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>RPAREN<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">23</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>LOGICAL_NOT<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">24</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>IS<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">25</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>NULL<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">26</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>BETWEEN<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">27</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>incompleteComparison<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">28</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>incompleteValue<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">29</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>STRING<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">30</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>NUMERIC<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">31</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>TRUE<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">32</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>FALSE<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">33</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>INCOMPLETE_STRING<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">34</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>INCOMPLETE_CMP_NOTEQUALS<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">35</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>CMP_EQUALS<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">36</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>CMP_NOTEQUALS<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">37</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>CMP_NOTEQUALS_BASIC<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">38</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>CMP_GREATER<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">39</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>CMP_GREATEROREQUAL<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">40</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>CMP_LESS<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">41</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>CMP_LESSOREQUAL<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">42</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>LIKE<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">43</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>$accept<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">0</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span>$end<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">1</span>},</td>
      </tr>
      <tr>
        <td id="L367" class="blob-num js-line-number" data-line-number="367"></td>
        <td id="LC367" class="blob-code js-file-line">      terminals_<span class="pl-k">:</span> {<span class="pl-c1">2</span><span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>error<span class="pl-pds">&quot;</span></span>,<span class="pl-c1">5</span><span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>EOF<span class="pl-pds">&quot;</span></span>,<span class="pl-c1">7</span><span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>IDENTIFIER<span class="pl-pds">&quot;</span></span>,<span class="pl-c1">9</span><span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>ASC<span class="pl-pds">&quot;</span></span>,<span class="pl-c1">10</span><span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>DESC<span class="pl-pds">&quot;</span></span>,<span class="pl-c1">12</span><span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>COMMA<span class="pl-pds">&quot;</span></span>,<span class="pl-c1">15</span><span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>ORDER_BY<span class="pl-pds">&quot;</span></span>,<span class="pl-c1">16</span><span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>LOGICAL_AND<span class="pl-pds">&quot;</span></span>,<span class="pl-c1">17</span><span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>LOGICAL_OR<span class="pl-pds">&quot;</span></span>,<span class="pl-c1">20</span><span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>IN<span class="pl-pds">&quot;</span></span>,<span class="pl-c1">21</span><span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>LPAREN<span class="pl-pds">&quot;</span></span>,<span class="pl-c1">23</span><span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>RPAREN<span class="pl-pds">&quot;</span></span>,<span class="pl-c1">24</span><span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>LOGICAL_NOT<span class="pl-pds">&quot;</span></span>,<span class="pl-c1">25</span><span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>IS<span class="pl-pds">&quot;</span></span>,<span class="pl-c1">26</span><span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>NULL<span class="pl-pds">&quot;</span></span>,<span class="pl-c1">27</span><span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>BETWEEN<span class="pl-pds">&quot;</span></span>,<span class="pl-c1">30</span><span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>STRING<span class="pl-pds">&quot;</span></span>,<span class="pl-c1">31</span><span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>NUMERIC<span class="pl-pds">&quot;</span></span>,<span class="pl-c1">32</span><span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>TRUE<span class="pl-pds">&quot;</span></span>,<span class="pl-c1">33</span><span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>FALSE<span class="pl-pds">&quot;</span></span>,<span class="pl-c1">34</span><span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>INCOMPLETE_STRING<span class="pl-pds">&quot;</span></span>,<span class="pl-c1">35</span><span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>INCOMPLETE_CMP_NOTEQUALS<span class="pl-pds">&quot;</span></span>,<span class="pl-c1">36</span><span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>CMP_EQUALS<span class="pl-pds">&quot;</span></span>,<span class="pl-c1">37</span><span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>CMP_NOTEQUALS<span class="pl-pds">&quot;</span></span>,<span class="pl-c1">38</span><span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>CMP_NOTEQUALS_BASIC<span class="pl-pds">&quot;</span></span>,<span class="pl-c1">39</span><span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>CMP_GREATER<span class="pl-pds">&quot;</span></span>,<span class="pl-c1">40</span><span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>CMP_GREATEROREQUAL<span class="pl-pds">&quot;</span></span>,<span class="pl-c1">41</span><span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>CMP_LESS<span class="pl-pds">&quot;</span></span>,<span class="pl-c1">42</span><span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>CMP_LESSOREQUAL<span class="pl-pds">&quot;</span></span>,<span class="pl-c1">43</span><span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span>LIKE<span class="pl-pds">&quot;</span></span>},</td>
      </tr>
      <tr>
        <td id="L368" class="blob-num js-line-number" data-line-number="368"></td>
        <td id="LC368" class="blob-code js-file-line">      productions_<span class="pl-k">:</span> [<span class="pl-c1">0</span>,[<span class="pl-c1">3</span>,<span class="pl-c1">2</span>],[<span class="pl-c1">6</span>,<span class="pl-c1">1</span>],[<span class="pl-c1">6</span>,<span class="pl-c1">2</span>],[<span class="pl-c1">8</span>,<span class="pl-c1">1</span>],[<span class="pl-c1">8</span>,<span class="pl-c1">1</span>],[<span class="pl-c1">11</span>,<span class="pl-c1">1</span>],[<span class="pl-c1">11</span>,<span class="pl-c1">2</span>],[<span class="pl-c1">11</span>,<span class="pl-c1">3</span>],[<span class="pl-c1">4</span>,<span class="pl-c1">1</span>],[<span class="pl-c1">4</span>,<span class="pl-c1">2</span>],[<span class="pl-c1">4</span>,<span class="pl-c1">3</span>],[<span class="pl-c1">4</span>,<span class="pl-c1">2</span>],[<span class="pl-c1">4</span>,<span class="pl-c1">3</span>],[<span class="pl-c1">14</span>,<span class="pl-c1">1</span>],[<span class="pl-c1">14</span>,<span class="pl-c1">1</span>],[<span class="pl-c1">14</span>,<span class="pl-c1">1</span>],[<span class="pl-c1">13</span>,<span class="pl-c1">1</span>],[<span class="pl-c1">13</span>,<span class="pl-c1">2</span>],[<span class="pl-c1">13</span>,<span class="pl-c1">3</span>],[<span class="pl-c1">13</span>,<span class="pl-c1">5</span>],[<span class="pl-c1">13</span>,<span class="pl-c1">6</span>],[<span class="pl-c1">13</span>,<span class="pl-c1">3</span>],[<span class="pl-c1">13</span>,<span class="pl-c1">4</span>],[<span class="pl-c1">13</span>,<span class="pl-c1">5</span>],[<span class="pl-c1">13</span>,<span class="pl-c1">6</span>],[<span class="pl-c1">13</span>,<span class="pl-c1">2</span>],[<span class="pl-c1">13</span>,<span class="pl-c1">2</span>],[<span class="pl-c1">13</span>,<span class="pl-c1">2</span>],[<span class="pl-c1">13</span>,<span class="pl-c1">3</span>],[<span class="pl-c1">13</span>,<span class="pl-c1">3</span>],[<span class="pl-c1">13</span>,<span class="pl-c1">4</span>],[<span class="pl-c1">13</span>,<span class="pl-c1">5</span>],[<span class="pl-c1">13</span>,<span class="pl-c1">2</span>],[<span class="pl-c1">13</span>,<span class="pl-c1">3</span>],[<span class="pl-c1">13</span>,<span class="pl-c1">3</span>],[<span class="pl-c1">13</span>,<span class="pl-c1">4</span>],[<span class="pl-c1">13</span>,<span class="pl-c1">2</span>],[<span class="pl-c1">13</span>,<span class="pl-c1">3</span>],[<span class="pl-c1">13</span>,<span class="pl-c1">4</span>],[<span class="pl-c1">13</span>,<span class="pl-c1">2</span>],[<span class="pl-c1">13</span>,<span class="pl-c1">3</span>],[<span class="pl-c1">13</span>,<span class="pl-c1">3</span>],[<span class="pl-c1">13</span>,<span class="pl-c1">4</span>],[<span class="pl-c1">13</span>,<span class="pl-c1">4</span>],[<span class="pl-c1">13</span>,<span class="pl-c1">3</span>],[<span class="pl-c1">13</span>,<span class="pl-c1">4</span>],[<span class="pl-c1">13</span>,<span class="pl-c1">4</span>],[<span class="pl-c1">13</span>,<span class="pl-c1">5</span>],[<span class="pl-c1">13</span>,<span class="pl-c1">5</span>],[<span class="pl-c1">13</span>,<span class="pl-c1">3</span>],[<span class="pl-c1">13</span>,<span class="pl-c1">5</span>],[<span class="pl-c1">13</span>,<span class="pl-c1">6</span>],[<span class="pl-c1">13</span>,<span class="pl-c1">1</span>],[<span class="pl-c1">13</span>,<span class="pl-c1">2</span>],[<span class="pl-c1">13</span>,<span class="pl-c1">3</span>],[<span class="pl-c1">22</span>,<span class="pl-c1">1</span>],[<span class="pl-c1">22</span>,<span class="pl-c1">1</span>],[<span class="pl-c1">22</span>,<span class="pl-c1">2</span>],[<span class="pl-c1">22</span>,<span class="pl-c1">3</span>],[<span class="pl-c1">22</span>,<span class="pl-c1">3</span>],[<span class="pl-c1">19</span>,<span class="pl-c1">1</span>],[<span class="pl-c1">19</span>,<span class="pl-c1">1</span>],[<span class="pl-c1">19</span>,<span class="pl-c1">1</span>],[<span class="pl-c1">19</span>,<span class="pl-c1">1</span>],[<span class="pl-c1">19</span>,<span class="pl-c1">1</span>],[<span class="pl-c1">29</span>,<span class="pl-c1">1</span>],[<span class="pl-c1">28</span>,<span class="pl-c1">1</span>],[<span class="pl-c1">18</span>,<span class="pl-c1">1</span>],[<span class="pl-c1">18</span>,<span class="pl-c1">1</span>],[<span class="pl-c1">18</span>,<span class="pl-c1">1</span>],[<span class="pl-c1">18</span>,<span class="pl-c1">1</span>],[<span class="pl-c1">18</span>,<span class="pl-c1">1</span>],[<span class="pl-c1">18</span>,<span class="pl-c1">1</span>],[<span class="pl-c1">18</span>,<span class="pl-c1">1</span>],[<span class="pl-c1">18</span>,<span class="pl-c1">1</span>],[<span class="pl-c1">18</span>,<span class="pl-c1">2</span>]],</td>
      </tr>
      <tr>
        <td id="L369" class="blob-num js-line-number" data-line-number="369"></td>
        <td id="LC369" class="blob-code js-file-line">      performAction<span class="pl-k">:</span> <span class="pl-st">function</span> <span class="pl-en">anonymous</span>(<span class="pl-vpf">yytext</span>, <span class="pl-vpf">yyleng</span>, <span class="pl-vpf">yylineno</span>, <span class="pl-vpf">yy</span>, <span class="pl-vpf">yystate</span> /* action[1] */, <span class="pl-vpf">$$</span> /* vstack */, <span class="pl-vpf">_$</span> /* lstack */</td>
      </tr>
      <tr>
        <td id="L370" class="blob-num js-line-number" data-line-number="370"></td>
        <td id="LC370" class="blob-code js-file-line">      /**/) {</td>
      </tr>
      <tr>
        <td id="L371" class="blob-num js-line-number" data-line-number="371"></td>
        <td id="LC371" class="blob-code js-file-line">        <span class="pl-c">/* this == yyval */</span></td>
      </tr>
      <tr>
        <td id="L372" class="blob-num js-line-number" data-line-number="372"></td>
        <td id="LC372" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L373" class="blob-num js-line-number" data-line-number="373"></td>
        <td id="LC373" class="blob-code js-file-line">        <span class="pl-s">var</span> $<span class="pl-c1">0</span> <span class="pl-k">=</span> $$.<span class="pl-sc">length</span> <span class="pl-k">-</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L374" class="blob-num js-line-number" data-line-number="374"></td>
        <td id="LC374" class="blob-code js-file-line">        <span class="pl-k">switch</span> (yystate) {</td>
      </tr>
      <tr>
        <td id="L375" class="blob-num js-line-number" data-line-number="375"></td>
        <td id="LC375" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">1</span><span class="pl-k">:</span> <span class="pl-k">return</span> $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">1</span>];</td>
      </tr>
      <tr>
        <td id="L376" class="blob-num js-line-number" data-line-number="376"></td>
        <td id="LC376" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L377" class="blob-num js-line-number" data-line-number="377"></td>
        <td id="LC377" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">2</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> [{type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>orderByIdentifier<span class="pl-pds">&#39;</span></span>, <span class="pl-s1"><span class="pl-pds">&#39;</span>value<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> $$[$<span class="pl-c1">0</span>]}];</td>
      </tr>
      <tr>
        <td id="L378" class="blob-num js-line-number" data-line-number="378"></td>
        <td id="LC378" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L379" class="blob-num js-line-number" data-line-number="379"></td>
        <td id="LC379" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">3</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> [{type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>orderByIdentifier<span class="pl-pds">&#39;</span></span>, <span class="pl-s1"><span class="pl-pds">&#39;</span>value<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">1</span>]}, $$[$<span class="pl-c1">0</span>]];</td>
      </tr>
      <tr>
        <td id="L380" class="blob-num js-line-number" data-line-number="380"></td>
        <td id="LC380" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L381" class="blob-num js-line-number" data-line-number="381"></td>
        <td id="LC381" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">4</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> {type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>orderByWay<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>asc<span class="pl-pds">&#39;</span></span>};</td>
      </tr>
      <tr>
        <td id="L382" class="blob-num js-line-number" data-line-number="382"></td>
        <td id="LC382" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L383" class="blob-num js-line-number" data-line-number="383"></td>
        <td id="LC383" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">5</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> {type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>orderByWay<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>desc<span class="pl-pds">&#39;</span></span>};</td>
      </tr>
      <tr>
        <td id="L384" class="blob-num js-line-number" data-line-number="384"></td>
        <td id="LC384" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L385" class="blob-num js-line-number" data-line-number="385"></td>
        <td id="LC385" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">6</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> $$[$<span class="pl-c1">0</span>];</td>
      </tr>
      <tr>
        <td id="L386" class="blob-num js-line-number" data-line-number="386"></td>
        <td id="LC386" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L387" class="blob-num js-line-number" data-line-number="387"></td>
        <td id="LC387" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">7</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">1</span>];</td>
      </tr>
      <tr>
        <td id="L388" class="blob-num js-line-number" data-line-number="388"></td>
        <td id="LC388" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L389" class="blob-num js-line-number" data-line-number="389"></td>
        <td id="LC389" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">8</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">2</span>]; $$[$<span class="pl-c1">0</span>].forEach(<span class="pl-st">function</span>(<span class="pl-vpf">token</span>){$$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">2</span>].<span class="pl-s3">push</span>(token);});</td>
      </tr>
      <tr>
        <td id="L390" class="blob-num js-line-number" data-line-number="390"></td>
        <td id="LC390" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L391" class="blob-num js-line-number" data-line-number="391"></td>
        <td id="LC391" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">9</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> $$[$<span class="pl-c1">0</span>];</td>
      </tr>
      <tr>
        <td id="L392" class="blob-num js-line-number" data-line-number="392"></td>
        <td id="LC392" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L393" class="blob-num js-line-number" data-line-number="393"></td>
        <td id="LC393" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">10</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">1</span>]; $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">1</span>].<span class="pl-s3">push</span>($$[$<span class="pl-c1">0</span>]);</td>
      </tr>
      <tr>
        <td id="L394" class="blob-num js-line-number" data-line-number="394"></td>
        <td id="LC394" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L395" class="blob-num js-line-number" data-line-number="395"></td>
        <td id="LC395" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">11</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">2</span>]; $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">2</span>].<span class="pl-s3">push</span>($$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">1</span>]); $$[$<span class="pl-c1">0</span>].forEach(<span class="pl-st">function</span>(<span class="pl-vpf">token</span>){$$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">2</span>].<span class="pl-s3">push</span>(token);});</td>
      </tr>
      <tr>
        <td id="L396" class="blob-num js-line-number" data-line-number="396"></td>
        <td id="LC396" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L397" class="blob-num js-line-number" data-line-number="397"></td>
        <td id="LC397" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">12</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">1</span>]; $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">1</span>].<span class="pl-s3">push</span>({type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>orderBy<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>order by<span class="pl-pds">&#39;</span></span>});</td>
      </tr>
      <tr>
        <td id="L398" class="blob-num js-line-number" data-line-number="398"></td>
        <td id="LC398" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L399" class="blob-num js-line-number" data-line-number="399"></td>
        <td id="LC399" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">13</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">2</span>]; $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">2</span>].<span class="pl-s3">push</span>({type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>orderBy<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>order by<span class="pl-pds">&#39;</span></span>}); $$[$<span class="pl-c1">0</span>].forEach(<span class="pl-st">function</span>(<span class="pl-vpf">token</span>){$$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">2</span>].<span class="pl-s3">push</span>(token);});</td>
      </tr>
      <tr>
        <td id="L400" class="blob-num js-line-number" data-line-number="400"></td>
        <td id="LC400" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L401" class="blob-num js-line-number" data-line-number="401"></td>
        <td id="LC401" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">14</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> {type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>connector<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>and<span class="pl-pds">&#39;</span></span>};</td>
      </tr>
      <tr>
        <td id="L402" class="blob-num js-line-number" data-line-number="402"></td>
        <td id="LC402" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L403" class="blob-num js-line-number" data-line-number="403"></td>
        <td id="LC403" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">15</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> {type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>connector<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>or<span class="pl-pds">&#39;</span></span>};</td>
      </tr>
      <tr>
        <td id="L404" class="blob-num js-line-number" data-line-number="404"></td>
        <td id="LC404" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L405" class="blob-num js-line-number" data-line-number="405"></td>
        <td id="LC405" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">16</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> {type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>unknown<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> $$[$<span class="pl-c1">0</span>]};</td>
      </tr>
      <tr>
        <td id="L406" class="blob-num js-line-number" data-line-number="406"></td>
        <td id="LC406" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L407" class="blob-num js-line-number" data-line-number="407"></td>
        <td id="LC407" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">17</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> [{type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>identifier<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> $$[$<span class="pl-c1">0</span>]}];</td>
      </tr>
      <tr>
        <td id="L408" class="blob-num js-line-number" data-line-number="408"></td>
        <td id="LC408" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L409" class="blob-num js-line-number" data-line-number="409"></td>
        <td id="LC409" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">18</span><span class="pl-k">:</span>  <span class="pl-v">this</span>.$ <span class="pl-k">=</span> [{type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>identifier<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">1</span>]}, {type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>comparison<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> $$[$<span class="pl-c1">0</span>]}];</td>
      </tr>
      <tr>
        <td id="L410" class="blob-num js-line-number" data-line-number="410"></td>
        <td id="LC410" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L411" class="blob-num js-line-number" data-line-number="411"></td>
        <td id="LC411" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">19</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> [{type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>identifier<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">2</span>]}, {type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>comparison<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">1</span>]}, {type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>value<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> $$[$<span class="pl-c1">0</span>]}];</td>
      </tr>
      <tr>
        <td id="L412" class="blob-num js-line-number" data-line-number="412"></td>
        <td id="LC412" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L413" class="blob-num js-line-number" data-line-number="413"></td>
        <td id="LC413" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">20</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> [{type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>identifier<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">4</span>]}, {type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>comparison<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>in<span class="pl-pds">&#39;</span></span>}, $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">1</span>]];</td>
      </tr>
      <tr>
        <td id="L414" class="blob-num js-line-number" data-line-number="414"></td>
        <td id="LC414" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L415" class="blob-num js-line-number" data-line-number="415"></td>
        <td id="LC415" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">21</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> [{type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>identifier<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">5</span>]}, {type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>comparison<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>not in<span class="pl-pds">&#39;</span></span>}, $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">1</span>]];</td>
      </tr>
      <tr>
        <td id="L416" class="blob-num js-line-number" data-line-number="416"></td>
        <td id="LC416" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L417" class="blob-num js-line-number" data-line-number="417"></td>
        <td id="LC417" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">22</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> [{type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>identifier<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">2</span>]}, {type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>comparison<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>is<span class="pl-pds">&#39;</span></span>}, {type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>value<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> <span class="pl-c1">null</span>}];</td>
      </tr>
      <tr>
        <td id="L418" class="blob-num js-line-number" data-line-number="418"></td>
        <td id="LC418" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L419" class="blob-num js-line-number" data-line-number="419"></td>
        <td id="LC419" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">23</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> [{type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>identifier<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">3</span>]}, {type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>comparison<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>is not<span class="pl-pds">&#39;</span></span>}, {type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>value<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> <span class="pl-c1">null</span>}];</td>
      </tr>
      <tr>
        <td id="L420" class="blob-num js-line-number" data-line-number="420"></td>
        <td id="LC420" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L421" class="blob-num js-line-number" data-line-number="421"></td>
        <td id="LC421" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">24</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> [{type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>identifier<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">4</span>]}, {type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>comparison<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>between<span class="pl-pds">&#39;</span></span>}, {type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>value<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> [$$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">2</span>], $$[$<span class="pl-c1">0</span>]]}];</td>
      </tr>
      <tr>
        <td id="L422" class="blob-num js-line-number" data-line-number="422"></td>
        <td id="LC422" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L423" class="blob-num js-line-number" data-line-number="423"></td>
        <td id="LC423" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">25</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> [{type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>identifier<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">5</span>]}, {type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>comparison<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>not between<span class="pl-pds">&#39;</span></span>}, {type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>value<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> [$$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">2</span>], $$[$<span class="pl-c1">0</span>]]}];</td>
      </tr>
      <tr>
        <td id="L424" class="blob-num js-line-number" data-line-number="424"></td>
        <td id="LC424" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L425" class="blob-num js-line-number" data-line-number="425"></td>
        <td id="LC425" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">26</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> [{type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>identifier<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">1</span>]}, {type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>unknown<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> $$[$<span class="pl-c1">0</span>]}];</td>
      </tr>
      <tr>
        <td id="L426" class="blob-num js-line-number" data-line-number="426"></td>
        <td id="LC426" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L427" class="blob-num js-line-number" data-line-number="427"></td>
        <td id="LC427" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">27</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> [{type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>identifier<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">1</span>]}, {type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>unknown<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> $$[$<span class="pl-c1">0</span>]}];</td>
      </tr>
      <tr>
        <td id="L428" class="blob-num js-line-number" data-line-number="428"></td>
        <td id="LC428" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L429" class="blob-num js-line-number" data-line-number="429"></td>
        <td id="LC429" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">28</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> [{type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>identifier<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">1</span>]}, {type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>unknown<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> $$[$<span class="pl-c1">0</span>]}];</td>
      </tr>
      <tr>
        <td id="L430" class="blob-num js-line-number" data-line-number="430"></td>
        <td id="LC430" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L431" class="blob-num js-line-number" data-line-number="431"></td>
        <td id="LC431" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">29</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> [{type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>identifier<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">2</span>]}, {type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>unknown<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">1</span>] <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> $$[$<span class="pl-c1">0</span>]}];</td>
      </tr>
      <tr>
        <td id="L432" class="blob-num js-line-number" data-line-number="432"></td>
        <td id="LC432" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L433" class="blob-num js-line-number" data-line-number="433"></td>
        <td id="LC433" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">30</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> [{type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>identifier<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">2</span>]}, {type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>comparison<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">1</span>] <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> $$[$<span class="pl-c1">0</span>]}];</td>
      </tr>
      <tr>
        <td id="L434" class="blob-num js-line-number" data-line-number="434"></td>
        <td id="LC434" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L435" class="blob-num js-line-number" data-line-number="435"></td>
        <td id="LC435" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">31</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> [{type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>identifier<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">3</span>]}, {type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>comparison<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">2</span>] <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">1</span>]}, {type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>unknown<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> []}];</td>
      </tr>
      <tr>
        <td id="L436" class="blob-num js-line-number" data-line-number="436"></td>
        <td id="LC436" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L437" class="blob-num js-line-number" data-line-number="437"></td>
        <td id="LC437" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">32</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> [{type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>identifier<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">4</span>]}, {type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>comparison<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">3</span>] <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">2</span>]}, $$[$<span class="pl-c1">0</span>]]; $$[$<span class="pl-c1">0</span>].<span class="pl-sc">type</span> <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>unknown<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L438" class="blob-num js-line-number" data-line-number="438"></td>
        <td id="LC438" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L439" class="blob-num js-line-number" data-line-number="439"></td>
        <td id="LC439" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">33</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> [{type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>identifier<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">1</span>]}, {type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>unknown<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> $$[$<span class="pl-c1">0</span>]}];</td>
      </tr>
      <tr>
        <td id="L440" class="blob-num js-line-number" data-line-number="440"></td>
        <td id="LC440" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L441" class="blob-num js-line-number" data-line-number="441"></td>
        <td id="LC441" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">34</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> [{type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>identifier<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">2</span>]}, {type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>unknown<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">1</span>] <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> $$[$<span class="pl-c1">0</span>]}];</td>
      </tr>
      <tr>
        <td id="L442" class="blob-num js-line-number" data-line-number="442"></td>
        <td id="LC442" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L443" class="blob-num js-line-number" data-line-number="443"></td>
        <td id="LC443" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">35</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> [{type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>identifier<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">2</span>]}, {type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>unknown<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">1</span>] <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> $$[$<span class="pl-c1">0</span>]}];</td>
      </tr>
      <tr>
        <td id="L444" class="blob-num js-line-number" data-line-number="444"></td>
        <td id="LC444" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L445" class="blob-num js-line-number" data-line-number="445"></td>
        <td id="LC445" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">36</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> [{type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>identifier<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">3</span>]}, {type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>unknown<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">2</span>] <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">1</span>] <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> $$[$<span class="pl-c1">0</span>]}];</td>
      </tr>
      <tr>
        <td id="L446" class="blob-num js-line-number" data-line-number="446"></td>
        <td id="LC446" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L447" class="blob-num js-line-number" data-line-number="447"></td>
        <td id="LC447" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">37</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> [{type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>identifier<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">1</span>]}, {type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>comparison<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> $$[$<span class="pl-c1">0</span>]}];</td>
      </tr>
      <tr>
        <td id="L448" class="blob-num js-line-number" data-line-number="448"></td>
        <td id="LC448" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L449" class="blob-num js-line-number" data-line-number="449"></td>
        <td id="LC449" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">38</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> [{type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>identifier<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">2</span>]}, {type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>comparison<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">1</span>]}, {type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>unknown<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> []}];</td>
      </tr>
      <tr>
        <td id="L450" class="blob-num js-line-number" data-line-number="450"></td>
        <td id="LC450" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L451" class="blob-num js-line-number" data-line-number="451"></td>
        <td id="LC451" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">39</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> [{type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>identifier<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">3</span>]}, {type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>comparison<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">2</span>]}, $$[$<span class="pl-c1">0</span>]]; $$[$<span class="pl-c1">0</span>].<span class="pl-sc">type</span> <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>unknown<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L452" class="blob-num js-line-number" data-line-number="452"></td>
        <td id="LC452" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L453" class="blob-num js-line-number" data-line-number="453"></td>
        <td id="LC453" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">40</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> [{type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>identifier<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">1</span>]}, {type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>comparison<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> $$[$<span class="pl-c1">0</span>]}, {type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>unknown<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> []}];</td>
      </tr>
      <tr>
        <td id="L454" class="blob-num js-line-number" data-line-number="454"></td>
        <td id="LC454" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L455" class="blob-num js-line-number" data-line-number="455"></td>
        <td id="LC455" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">41</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> [{type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>identifier<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">2</span>]}, {type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>comparison<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">1</span>]}, {type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>unknown<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> [$$[$<span class="pl-c1">0</span>]]}];</td>
      </tr>
      <tr>
        <td id="L456" class="blob-num js-line-number" data-line-number="456"></td>
        <td id="LC456" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L457" class="blob-num js-line-number" data-line-number="457"></td>
        <td id="LC457" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">42</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> [{type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>identifier<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">2</span>]}, {type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>comparison<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">1</span>]}, {type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>unknown<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> [$$[$<span class="pl-c1">0</span>]]}];</td>
      </tr>
      <tr>
        <td id="L458" class="blob-num js-line-number" data-line-number="458"></td>
        <td id="LC458" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L459" class="blob-num js-line-number" data-line-number="459"></td>
        <td id="LC459" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">43</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> [{type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>identifier<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">3</span>]}, {type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>comparison<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">2</span>]}, {type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>unknown<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> [$$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">1</span>]]}];</td>
      </tr>
      <tr>
        <td id="L460" class="blob-num js-line-number" data-line-number="460"></td>
        <td id="LC460" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L461" class="blob-num js-line-number" data-line-number="461"></td>
        <td id="LC461" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">44</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> [{type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>identifier<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">3</span>]}, {type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>comparison<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">2</span>]}, {type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>unknown<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> [$$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">1</span>],<span class="pl-c1">null</span>]}];</td>
      </tr>
      <tr>
        <td id="L462" class="blob-num js-line-number" data-line-number="462"></td>
        <td id="LC462" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L463" class="blob-num js-line-number" data-line-number="463"></td>
        <td id="LC463" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">45</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> [{type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>identifier<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">2</span>]}, {type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>comparison<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">1</span>] <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> $$[$<span class="pl-c1">0</span>]}, {type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>unknown<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> []}];</td>
      </tr>
      <tr>
        <td id="L464" class="blob-num js-line-number" data-line-number="464"></td>
        <td id="LC464" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L465" class="blob-num js-line-number" data-line-number="465"></td>
        <td id="LC465" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">46</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> [{type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>identifier<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">3</span>]}, {type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>comparison<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">2</span>] <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">1</span>]}, {type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>unknown<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> [$$[$<span class="pl-c1">0</span>]]}];</td>
      </tr>
      <tr>
        <td id="L466" class="blob-num js-line-number" data-line-number="466"></td>
        <td id="LC466" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L467" class="blob-num js-line-number" data-line-number="467"></td>
        <td id="LC467" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">47</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> [{type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>identifier<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">3</span>]}, {type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>comparison<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">2</span>] <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">1</span>]}, {type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>unknown<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> [$$[$<span class="pl-c1">0</span>]]}];</td>
      </tr>
      <tr>
        <td id="L468" class="blob-num js-line-number" data-line-number="468"></td>
        <td id="LC468" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L469" class="blob-num js-line-number" data-line-number="469"></td>
        <td id="LC469" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">48</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> [{type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>identifier<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">4</span>]}, {type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>comparison<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">3</span>] <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">2</span>]}, {type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>unknown<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> [$$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">1</span>]]}];</td>
      </tr>
      <tr>
        <td id="L470" class="blob-num js-line-number" data-line-number="470"></td>
        <td id="LC470" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L471" class="blob-num js-line-number" data-line-number="471"></td>
        <td id="LC471" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">49</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> [{type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>identifier<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">4</span>]}, {type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>comparison<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">3</span>] <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">2</span>]}, {type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>unknown<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> [$$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">1</span>],<span class="pl-c1">null</span>]}];</td>
      </tr>
      <tr>
        <td id="L472" class="blob-num js-line-number" data-line-number="472"></td>
        <td id="LC472" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L473" class="blob-num js-line-number" data-line-number="473"></td>
        <td id="LC473" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">50</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> [{type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>identifier<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">2</span>]}, {type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>comparison<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">1</span>]}, {type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>unknown<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> $$[$<span class="pl-c1">0</span>]}];</td>
      </tr>
      <tr>
        <td id="L474" class="blob-num js-line-number" data-line-number="474"></td>
        <td id="LC474" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L475" class="blob-num js-line-number" data-line-number="475"></td>
        <td id="LC475" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">51</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> [{type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>identifier<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">4</span>]}, {type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>comparison<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>between<span class="pl-pds">&#39;</span></span>}, {type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>unknown<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> [$$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">2</span>], $$[$<span class="pl-c1">0</span>]]}];</td>
      </tr>
      <tr>
        <td id="L476" class="blob-num js-line-number" data-line-number="476"></td>
        <td id="LC476" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L477" class="blob-num js-line-number" data-line-number="477"></td>
        <td id="LC477" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">52</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> [{type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>identifier<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">5</span>]}, {type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>comparison<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>not between<span class="pl-pds">&#39;</span></span>}, {type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>unknown<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> [$$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">2</span>], $$[$<span class="pl-c1">0</span>]]}];</td>
      </tr>
      <tr>
        <td id="L478" class="blob-num js-line-number" data-line-number="478"></td>
        <td id="LC478" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L479" class="blob-num js-line-number" data-line-number="479"></td>
        <td id="LC479" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">53</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> [{type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>identifier<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>}];</td>
      </tr>
      <tr>
        <td id="L480" class="blob-num js-line-number" data-line-number="480"></td>
        <td id="LC480" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L481" class="blob-num js-line-number" data-line-number="481"></td>
        <td id="LC481" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">54</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> $$[$<span class="pl-c1">0</span>];</td>
      </tr>
      <tr>
        <td id="L482" class="blob-num js-line-number" data-line-number="482"></td>
        <td id="LC482" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L483" class="blob-num js-line-number" data-line-number="483"></td>
        <td id="LC483" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">55</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">1</span>]</td>
      </tr>
      <tr>
        <td id="L484" class="blob-num js-line-number" data-line-number="484"></td>
        <td id="LC484" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L485" class="blob-num js-line-number" data-line-number="485"></td>
        <td id="LC485" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">56</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> {type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>value<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> [$$[$<span class="pl-c1">0</span>]]};</td>
      </tr>
      <tr>
        <td id="L486" class="blob-num js-line-number" data-line-number="486"></td>
        <td id="LC486" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L487" class="blob-num js-line-number" data-line-number="487"></td>
        <td id="LC487" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">57</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> {type<span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>unknown<span class="pl-pds">&#39;</span></span>, value<span class="pl-k">:</span> [$$[$<span class="pl-c1">0</span>]]};</td>
      </tr>
      <tr>
        <td id="L488" class="blob-num js-line-number" data-line-number="488"></td>
        <td id="LC488" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L489" class="blob-num js-line-number" data-line-number="489"></td>
        <td id="LC489" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">58</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">1</span>]; $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">1</span>].<span class="pl-sc">value</span>.<span class="pl-s3">push</span>(<span class="pl-c1">null</span>);</td>
      </tr>
      <tr>
        <td id="L490" class="blob-num js-line-number" data-line-number="490"></td>
        <td id="LC490" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L491" class="blob-num js-line-number" data-line-number="491"></td>
        <td id="LC491" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">59</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">2</span>]; $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">2</span>].<span class="pl-sc">value</span>.<span class="pl-s3">push</span>($$[$<span class="pl-c1">0</span>]);</td>
      </tr>
      <tr>
        <td id="L492" class="blob-num js-line-number" data-line-number="492"></td>
        <td id="LC492" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L493" class="blob-num js-line-number" data-line-number="493"></td>
        <td id="LC493" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">60</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">2</span>]; $$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">2</span>].<span class="pl-sc">value</span>.<span class="pl-s3">push</span>($$[$<span class="pl-c1">0</span>]);$$[$<span class="pl-c1">0</span><span class="pl-k">-</span><span class="pl-c1">2</span>].<span class="pl-sc">type</span> <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>unknown<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L494" class="blob-num js-line-number" data-line-number="494"></td>
        <td id="LC494" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L495" class="blob-num js-line-number" data-line-number="495"></td>
        <td id="LC495" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">61</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> yytext.<span class="pl-s3">substr</span>(<span class="pl-c1">1</span>, yytext.<span class="pl-sc">length</span> <span class="pl-k">-</span> <span class="pl-c1">2</span>)</td>
      </tr>
      <tr>
        <td id="L496" class="blob-num js-line-number" data-line-number="496"></td>
        <td id="LC496" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L497" class="blob-num js-line-number" data-line-number="497"></td>
        <td id="LC497" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">62</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> <span class="pl-s3">Number</span>(yytext)</td>
      </tr>
      <tr>
        <td id="L498" class="blob-num js-line-number" data-line-number="498"></td>
        <td id="LC498" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L499" class="blob-num js-line-number" data-line-number="499"></td>
        <td id="LC499" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">63</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> <span class="pl-c1">true</span></td>
      </tr>
      <tr>
        <td id="L500" class="blob-num js-line-number" data-line-number="500"></td>
        <td id="LC500" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L501" class="blob-num js-line-number" data-line-number="501"></td>
        <td id="LC501" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">64</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> <span class="pl-c1">false</span></td>
      </tr>
      <tr>
        <td id="L502" class="blob-num js-line-number" data-line-number="502"></td>
        <td id="LC502" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L503" class="blob-num js-line-number" data-line-number="503"></td>
        <td id="LC503" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">65</span><span class="pl-k">:</span><span class="pl-v">this</span>.$ <span class="pl-k">=</span> yytext;</td>
      </tr>
      <tr>
        <td id="L504" class="blob-num js-line-number" data-line-number="504"></td>
        <td id="LC504" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L505" class="blob-num js-line-number" data-line-number="505"></td>
        <td id="LC505" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">66</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> yytext.<span class="pl-s3">substr</span>(<span class="pl-c1">1</span>, yytext.<span class="pl-sc">length</span> <span class="pl-k">-</span> <span class="pl-c1">1</span>)</td>
      </tr>
      <tr>
        <td id="L506" class="blob-num js-line-number" data-line-number="506"></td>
        <td id="LC506" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L507" class="blob-num js-line-number" data-line-number="507"></td>
        <td id="LC507" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">67</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>!<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L508" class="blob-num js-line-number" data-line-number="508"></td>
        <td id="LC508" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L509" class="blob-num js-line-number" data-line-number="509"></td>
        <td id="LC509" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">68</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> $$[$<span class="pl-c1">0</span>];</td>
      </tr>
      <tr>
        <td id="L510" class="blob-num js-line-number" data-line-number="510"></td>
        <td id="LC510" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L511" class="blob-num js-line-number" data-line-number="511"></td>
        <td id="LC511" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">69</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> $$[$<span class="pl-c1">0</span>];</td>
      </tr>
      <tr>
        <td id="L512" class="blob-num js-line-number" data-line-number="512"></td>
        <td id="LC512" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L513" class="blob-num js-line-number" data-line-number="513"></td>
        <td id="LC513" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">70</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> $$[$<span class="pl-c1">0</span>];</td>
      </tr>
      <tr>
        <td id="L514" class="blob-num js-line-number" data-line-number="514"></td>
        <td id="LC514" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L515" class="blob-num js-line-number" data-line-number="515"></td>
        <td id="LC515" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">71</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> $$[$<span class="pl-c1">0</span>];</td>
      </tr>
      <tr>
        <td id="L516" class="blob-num js-line-number" data-line-number="516"></td>
        <td id="LC516" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L517" class="blob-num js-line-number" data-line-number="517"></td>
        <td id="LC517" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">72</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> $$[$<span class="pl-c1">0</span>];</td>
      </tr>
      <tr>
        <td id="L518" class="blob-num js-line-number" data-line-number="518"></td>
        <td id="LC518" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L519" class="blob-num js-line-number" data-line-number="519"></td>
        <td id="LC519" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">73</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> $$[$<span class="pl-c1">0</span>];</td>
      </tr>
      <tr>
        <td id="L520" class="blob-num js-line-number" data-line-number="520"></td>
        <td id="LC520" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L521" class="blob-num js-line-number" data-line-number="521"></td>
        <td id="LC521" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">74</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> $$[$<span class="pl-c1">0</span>];</td>
      </tr>
      <tr>
        <td id="L522" class="blob-num js-line-number" data-line-number="522"></td>
        <td id="LC522" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L523" class="blob-num js-line-number" data-line-number="523"></td>
        <td id="LC523" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">75</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>like<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L524" class="blob-num js-line-number" data-line-number="524"></td>
        <td id="LC524" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L525" class="blob-num js-line-number" data-line-number="525"></td>
        <td id="LC525" class="blob-code js-file-line">          <span class="pl-k">case</span> <span class="pl-c1">76</span><span class="pl-k">:</span> <span class="pl-v">this</span>.$ <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>not like<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L526" class="blob-num js-line-number" data-line-number="526"></td>
        <td id="LC526" class="blob-code js-file-line">            <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L527" class="blob-num js-line-number" data-line-number="527"></td>
        <td id="LC527" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L528" class="blob-num js-line-number" data-line-number="528"></td>
        <td id="LC528" class="blob-code js-file-line">      },</td>
      </tr>
      <tr>
        <td id="L529" class="blob-num js-line-number" data-line-number="529"></td>
        <td id="LC529" class="blob-code js-file-line">      table: [{3:1,4:2,7:[1,4],13:3,21:[1,5]},{1:[3]},{5:[1,6],7:[1,11],14:7,15:[1,8],16:[1,9],17:[1,10]},{5:[2,9],7:[2,9],15:[2,9],16:[2,9],17:[2,9],23:[2,9]},{5:[2,17],7:[1,18],15:[2,17],16:[2,17],17:[2,17],18:12,20:[1,13],23:[2,17],24:[1,14],25:[1,15],27:[1,16],28:17,35:[1,27],36:[1,19],37:[1,20],38:[1,21],39:[1,22],40:[1,23],41:[1,24],42:[1,25],43:[1,26]},{4:28,5:[2,53],7:[1,4],13:3,15:[2,53],16:[2,53],17:[2,53],21:[1,5],23:[2,53]},{1:[2,1]},{5:[2,10],7:[1,4],13:29,15:[2,10],16:[2,10],17:[2,10],21:[1,5],23:[2,10]},{5:[2,12],6:31,7:[1,32],11:30,15:[2,12],16:[2,12],17:[2,12],23:[2,12]},{5:[2,14],7:[2,14],15:[2,14],16:[2,14],17:[2,14],21:[2,14],23:[2,14]},{5:[2,15],7:[2,15],15:[2,15],16:[2,15],17:[2,15],21:[2,15],23:[2,15]},{5:[2,16],7:[2,16],15:[2,16],16:[2,16],17:[2,16],21:[2,16],23:[2,16]},{5:[2,18],7:[1,39],15:[2,18],16:[2,18],17:[2,18],19:33,23:[2,18],29:34,30:[1,35],31:[1,36],32:[1,37],33:[1,38],34:[1,40]},{5:[2,37],7:[2,37],15:[2,37],16:[2,37],17:[2,37],21:[1,41],23:[2,37]},{5:[2,28],7:[1,44],15:[2,28],16:[2,28],17:[2,28],20:[1,42],23:[2,28],27:[1,43],43:[1,45]},{5:[2,33],7:[1,48],15:[2,33],16:[2,33],17:[2,33],23:[2,33],24:[1,47],26:[1,46]},{5:[2,40],7:[1,39],15:[2,40],16:[2,40],17:[2,40],19:49,23:[2,40],29:50,30:[1,35],31:[1,36],32:[1,37],33:[1,38],34:[1,40]},{5:[2,26],7:[2,26],15:[2,26],16:[2,26],17:[2,26],23:[2,26]},{5:[2,27],7:[2,27],15:[2,27],16:[2,27],17:[2,27],23:[2,27]},{5:[2,68],7:[2,68],15:[2,68],16:[2,68],17:[2,68],23:[2,68],30:[2,68],31:[2,68],32:[2,68],33:[2,68],34:[2,68]},{5:[2,69],7:[2,69],15:[2,69],16:[2,69],17:[2,69],23:[2,69],30:[2,69],31:[2,69],32:[2,69],33:[2,69],34:[2,69]},{5:[2,70],7:[2,70],15:[2,70],16:[2,70],17:[2,70],23:[2,70],30:[2,70],31:[2,70],32:[2,70],33:[2,70],34:[2,70]},{5:[2,71],7:[2,71],15:[2,71],16:[2,71],17:[2,71],23:[2,71],30:[2,71],31:[2,71],32:[2,71],33:[2,71],34:[2,71]},{5:[2,72],7:[2,72],15:[2,72],16:[2,72],17:[2,72],23:[2,72],30:[2,72],31:[2,72],32:[2,72],33:[2,72],34:[2,72]},{5:[2,73],7:[2,73],15:[2,73],16:[2,73],17:[2,73],23:[2,73],30:[2,73],31:[2,73],32:[2,73],33:[2,73],34:[2,73]},{5:[2,74],7:[2,74],15:[2,74],16:[2,74],17:[2,74],23:[2,74],30:[2,74],31:[2,74],32:[2,74],33:[2,74],34:[2,74]},{5:[2,75],7:[2,75],15:[2,75],16:[2,75],17:[2,75],23:[2,75],30:[2,75],31:[2,75],32:[2,75],33:[2,75],34:[2,75]},{5:[2,67],7:[2,67],15:[2,67],16:[2,67],17:[2,67],23:[2,67]},{5:[2,54],7:[1,11],14:7,15:[1,8],16:[1,9],17:[1,10],23:[1,51]},{5:[2,11],7:[2,11],15:[2,11],16:[2,11],17:[2,11],23:[2,11]},{5:[2,13],7:[2,13],12:[1,52],15:[2,13],16:[2,13],17:[2,13],23:[2,13]},{5:[2,6],7:[2,6],12:[2,6],15:[2,6],16:[2,6],17:[2,6],23:[2,6]},{5:[2,2],7:[2,2],8:53,9:[1,54],10:[1,55],12:[2,2],15:[2,2],16:[2,2],17:[2,2],23:[2,2]},{5:[2,19],7:[2,19],15:[2,19],16:[2,19],17:[2,19],23:[2,19]},{5:[2,50],7:[2,50],15:[2,50],16:[2,50],17:[2,50],23:[2,50]},{5:[2,61],7:[2,61],12:[2,61],15:[2,61],16:[2,61],17:[2,61],23:[2,61]},{5:[2,62],7:[2,62],12:[2,62],15:[2,62],16:[2,62],17:[2,62],23:[2,62]},{5:[2,63],7:[2,63],12:[2,63],15:[2,63],16:[2,63],17:[2,63],23:[2,63]},{5:[2,64],7:[2,64],12:[2,64],15:[2,64],16:[2,64],17:[2,64],23:[2,64]},{5:[2,65],7:[2,65],12:[2,65],15:[2,65],16:[2,65],17:[2,65],23:[2,65]},{5:[2,66],7:[2,66],12:[2,66],15:[2,66],16:[2,66],17:[2,66],23:[2,66]},{5:[2,38],7:[1,39],15:[2,38],16:[2,38],17:[2,38],19:57,22:56,23:[2,38],29:58,30:[1,35],31:[1,36],32:[1,37],33:[1,38],34:[1,40]},{5:[2,30],7:[2,30],15:[2,30],16:[2,30],17:[2,30],21:[1,59],23:[2,30]},{5:[2,45],7:[1,39],15:[2,45],16:[2,45],17:[2,45],19:60,23:[2,45],29:61,30:[1,35],31:[1,36],32:[1,37],33:[1,38],34:[1,40]},{5:[2,29],7:[2,29],15:[2,29],16:[2,29],17:[2,29],23:[2,29]},{5:[2,76],7:[2,76],15:[2,76],16:[2,76],17:[2,76],23:[2,76],30:[2,76],31:[2,76],32:[2,76],33:[2,76],34:[2,76]},{5:[2,22],7:[2,22],15:[2,22],16:[2,22],17:[2,22],23:[2,22]},{5:[2,35],7:[1,63],15:[2,35],16:[2,35],17:[2,35],23:[2,35],26:[1,62]},{5:[2,34],7:[2,34],15:[2,34],16:[2,34],17:[2,34],23:[2,34]},{5:[2,41],7:[1,65],15:[2,41],16:[1,64],17:[2,41],23:[2,41]},{5:[2,42],7:[2,42],15:[2,42],16:[2,42],17:[2,42],23:[2,42]},{5:[2,55],7:[2,55],15:[2,55],16:[2,55],17:[2,55],23:[2,55]},{5:[2,7],6:66,7:[1,32],12:[2,7],15:[2,7],16:[2,7],17:[2,7],23:[2,7]},{5:[2,3],7:[2,3],12:[2,3],15:[2,3],16:[2,3],17:[2,3],23:[2,3]},{5:[2,4],7:[2,4],12:[2,4],15:[2,4],16:[2,4],17:[2,4],23:[2,4]},{5:[2,5],7:[2,5],12:[2,5],15:[2,5],16:[2,5],17:[2,5],23:[2,5]},{5:[2,39],7:[2,39],12:[1,68],15:[2,39],16:[2,39],17:[2,39],23:[1,67]},{5:[2,56],7:[2,56],12:[2,56],15:[2,56],16:[2,56],17:[2,56],23:[2,56]},{5:[2,57],7:[2,57],12:[2,57],15:[2,57],16:[2,57],17:[2,57],23:[2,57]},{5:[2,31],7:[1,39],15:[2,31],16:[2,31],17:[2,31],19:57,22:69,23:[2,31],29:58,30:[1,35],31:[1,36],32:[1,37],33:[1,38],34:[1,40]},{5:[2,46],7:[1,71],15:[2,46],16:[1,70],17:[2,46],23:[2,46]},{5:[2,47],7:[2,47],15:[2,47],16:[2,47],17:[2,47],23:[2,47]},{5:[2,23],7:[2,23],15:[2,23],16:[2,23],17:[2,23],23:[2,23]},{5:[2,36],7:[2,36],15:[2,36],16:[2,36],17:[2,36],23:[2,36]},{5:[2,44],7:[1,39],15:[2,44],16:[2,44],17:[2,44],19:72,23:[2,44],29:73,30:[1,35],31:[1,36],32:[1,37],33:[1,38],34:[1,40]},{5:[2,43],7:[2,43],15:[2,43],16:[2,43],17:[2,43],23:[2,43]},{5:[2,8],7:[2,8],12:[2,8],15:[2,8],16:[2,8],17:[2,8],23:[2,8]},{5:[2,20],7:[2,20],15:[2,20],16:[2,20],17:[2,20],23:[2,20]},{5:[2,58],7:[1,39],12:[2,58],15:[2,58],16:[2,58],17:[2,58],19:74,23:[2,58],29:75,30:[1,35],31:[1,36],32:[1,37],33:[1,38],34:[1,40]},{5:[2,32],7:[2,32],12:[1,68],15:[2,32],16:[2,32],17:[2,32],23:[1,76]},{5:[2,49],7:[1,39],15:[2,49],16:[2,49],17:[2,49],19:77,23:[2,49],29:78,30:[1,35],31:[1,36],32:[1,37],33:[1,38],34:[1,40]},{5:[2,48],7:[2,48],15:[2,48],16:[2,48],17:[2,48],23:[2,48]},{5:[2,24],7:[2,24],15:[2,24],16:[2,24],17:[2,24],23:[2,24]},{5:[2,51],7:[2,51],15:[2,51],16:[2,51],17:[2,51],23:[2,51]},{5:[2,59],7:[2,59],12:[2,59],15:[2,59],16:[2,59],17:[2,59],23:[2,59]},{5:[2,60],7:[2,60],12:[2,60],15:[2,60],16:[2,60],17:[2,60],23:[2,60]},{5:[2,21],7:[2,21],15:[2,21],16:[2,21],17:[2,21],23:[2,21]},{5:[2,25],7:[2,25],15:[2,25],16:[2,25],17:[2,25],23:[2,25]},{5:[2,52],7:[2,52],15:[2,52],16:[2,52],17:[2,52],23:[2,52]}],</td>
      </tr>
      <tr>
        <td id="L530" class="blob-num js-line-number" data-line-number="530"></td>
        <td id="LC530" class="blob-code js-file-line">      defaultActions<span class="pl-k">:</span> {<span class="pl-c1">6</span><span class="pl-k">:</span>[<span class="pl-c1">2</span>,<span class="pl-c1">1</span>]},</td>
      </tr>
      <tr>
        <td id="L531" class="blob-num js-line-number" data-line-number="531"></td>
        <td id="LC531" class="blob-code js-file-line">      parseError<span class="pl-k">:</span> <span class="pl-st">function</span> <span class="pl-en">parseError</span>(<span class="pl-vpf">str</span>,<span class="pl-vpf">hash</span>){<span class="pl-k">if</span>(hash.recoverable){<span class="pl-v">this</span>.trace(str)}<span class="pl-k">else</span>{<span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-en">Error</span>(str)}},</td>
      </tr>
      <tr>
        <td id="L532" class="blob-num js-line-number" data-line-number="532"></td>
        <td id="LC532" class="blob-code js-file-line">      parse<span class="pl-k">:</span> <span class="pl-st">function</span> <span class="pl-en">parse</span>(<span class="pl-vpf">input</span>) {</td>
      </tr>
      <tr>
        <td id="L533" class="blob-num js-line-number" data-line-number="533"></td>
        <td id="LC533" class="blob-code js-file-line">        <span class="pl-s">var</span> self <span class="pl-k">=</span> <span class="pl-v">this</span>, stack <span class="pl-k">=</span> [<span class="pl-c1">0</span>], vstack <span class="pl-k">=</span> [<span class="pl-c1">null</span>], lstack <span class="pl-k">=</span> [], table <span class="pl-k">=</span> <span class="pl-v">this</span>.table, yytext <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>, yylineno <span class="pl-k">=</span> <span class="pl-c1">0</span>, yyleng <span class="pl-k">=</span> <span class="pl-c1">0</span>, recovering <span class="pl-k">=</span> <span class="pl-c1">0</span>, TERROR <span class="pl-k">=</span> <span class="pl-c1">2</span>, EOF <span class="pl-k">=</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L534" class="blob-num js-line-number" data-line-number="534"></td>
        <td id="LC534" class="blob-code js-file-line">        <span class="pl-s">var</span> args <span class="pl-k">=</span> lstack.slice.<span class="pl-s3">call</span>(arguments, <span class="pl-c1">1</span>);</td>
      </tr>
      <tr>
        <td id="L535" class="blob-num js-line-number" data-line-number="535"></td>
        <td id="LC535" class="blob-code js-file-line">        <span class="pl-v">this</span>.lexer.setInput(input);</td>
      </tr>
      <tr>
        <td id="L536" class="blob-num js-line-number" data-line-number="536"></td>
        <td id="LC536" class="blob-code js-file-line">        <span class="pl-v">this</span>.lexer.yy <span class="pl-k">=</span> <span class="pl-v">this</span>.yy;</td>
      </tr>
      <tr>
        <td id="L537" class="blob-num js-line-number" data-line-number="537"></td>
        <td id="LC537" class="blob-code js-file-line">        <span class="pl-v">this</span>.yy.lexer <span class="pl-k">=</span> <span class="pl-v">this</span>.lexer;</td>
      </tr>
      <tr>
        <td id="L538" class="blob-num js-line-number" data-line-number="538"></td>
        <td id="LC538" class="blob-code js-file-line">        <span class="pl-v">this</span>.yy.parser <span class="pl-k">=</span> <span class="pl-v">this</span>;</td>
      </tr>
      <tr>
        <td id="L539" class="blob-num js-line-number" data-line-number="539"></td>
        <td id="LC539" class="blob-code js-file-line">        <span class="pl-k">if</span> (<span class="pl-k">typeof</span> <span class="pl-v">this</span>.lexer.yylloc <span class="pl-k">==</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L540" class="blob-num js-line-number" data-line-number="540"></td>
        <td id="LC540" class="blob-code js-file-line">          <span class="pl-v">this</span>.lexer.yylloc <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L541" class="blob-num js-line-number" data-line-number="541"></td>
        <td id="LC541" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L542" class="blob-num js-line-number" data-line-number="542"></td>
        <td id="LC542" class="blob-code js-file-line">        <span class="pl-s">var</span> yyloc <span class="pl-k">=</span> <span class="pl-v">this</span>.lexer.yylloc;</td>
      </tr>
      <tr>
        <td id="L543" class="blob-num js-line-number" data-line-number="543"></td>
        <td id="LC543" class="blob-code js-file-line">        lstack.<span class="pl-s3">push</span>(yyloc);</td>
      </tr>
      <tr>
        <td id="L544" class="blob-num js-line-number" data-line-number="544"></td>
        <td id="LC544" class="blob-code js-file-line">        <span class="pl-s">var</span> ranges <span class="pl-k">=</span> <span class="pl-v">this</span>.lexer.<span class="pl-sc">options</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-v">this</span>.lexer.<span class="pl-sc">options</span>.ranges;</td>
      </tr>
      <tr>
        <td id="L545" class="blob-num js-line-number" data-line-number="545"></td>
        <td id="LC545" class="blob-code js-file-line">        <span class="pl-k">if</span> (<span class="pl-k">typeof</span> <span class="pl-v">this</span>.yy.parseError <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>function<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L546" class="blob-num js-line-number" data-line-number="546"></td>
        <td id="LC546" class="blob-code js-file-line">          <span class="pl-v">this</span>.parseError <span class="pl-k">=</span> <span class="pl-v">this</span>.yy.parseError;</td>
      </tr>
      <tr>
        <td id="L547" class="blob-num js-line-number" data-line-number="547"></td>
        <td id="LC547" class="blob-code js-file-line">        } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L548" class="blob-num js-line-number" data-line-number="548"></td>
        <td id="LC548" class="blob-code js-file-line">          <span class="pl-v">this</span>.parseError <span class="pl-k">=</span> <span class="pl-s3">Object</span>.getPrototypeOf(<span class="pl-v">this</span>).parseError;</td>
      </tr>
      <tr>
        <td id="L549" class="blob-num js-line-number" data-line-number="549"></td>
        <td id="LC549" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L550" class="blob-num js-line-number" data-line-number="550"></td>
        <td id="LC550" class="blob-code js-file-line">        <span class="pl-st">function</span> <span class="pl-en">popStack</span>(<span class="pl-vpf">n</span>) {</td>
      </tr>
      <tr>
        <td id="L551" class="blob-num js-line-number" data-line-number="551"></td>
        <td id="LC551" class="blob-code js-file-line">          stack.<span class="pl-sc">length</span> <span class="pl-k">=</span> stack.<span class="pl-sc">length</span> <span class="pl-k">-</span> <span class="pl-c1">2</span> <span class="pl-k">*</span> n;</td>
      </tr>
      <tr>
        <td id="L552" class="blob-num js-line-number" data-line-number="552"></td>
        <td id="LC552" class="blob-code js-file-line">          vstack.<span class="pl-sc">length</span> <span class="pl-k">=</span> vstack.<span class="pl-sc">length</span> <span class="pl-k">-</span> n;</td>
      </tr>
      <tr>
        <td id="L553" class="blob-num js-line-number" data-line-number="553"></td>
        <td id="LC553" class="blob-code js-file-line">          lstack.<span class="pl-sc">length</span> <span class="pl-k">=</span> lstack.<span class="pl-sc">length</span> <span class="pl-k">-</span> n;</td>
      </tr>
      <tr>
        <td id="L554" class="blob-num js-line-number" data-line-number="554"></td>
        <td id="LC554" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L555" class="blob-num js-line-number" data-line-number="555"></td>
        <td id="LC555" class="blob-code js-file-line">        <span class="pl-st">function</span> <span class="pl-en">lex</span>() {</td>
      </tr>
      <tr>
        <td id="L556" class="blob-num js-line-number" data-line-number="556"></td>
        <td id="LC556" class="blob-code js-file-line">          <span class="pl-s">var</span> token;</td>
      </tr>
      <tr>
        <td id="L557" class="blob-num js-line-number" data-line-number="557"></td>
        <td id="LC557" class="blob-code js-file-line">          token <span class="pl-k">=</span> self.lexer.lex() <span class="pl-k">||</span> EOF;</td>
      </tr>
      <tr>
        <td id="L558" class="blob-num js-line-number" data-line-number="558"></td>
        <td id="LC558" class="blob-code js-file-line">          <span class="pl-k">if</span> (<span class="pl-k">typeof</span> token <span class="pl-k">!==</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>number<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L559" class="blob-num js-line-number" data-line-number="559"></td>
        <td id="LC559" class="blob-code js-file-line">            token <span class="pl-k">=</span> self.symbols_[token] <span class="pl-k">||</span> token;</td>
      </tr>
      <tr>
        <td id="L560" class="blob-num js-line-number" data-line-number="560"></td>
        <td id="LC560" class="blob-code js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L561" class="blob-num js-line-number" data-line-number="561"></td>
        <td id="LC561" class="blob-code js-file-line">          <span class="pl-k">return</span> token;</td>
      </tr>
      <tr>
        <td id="L562" class="blob-num js-line-number" data-line-number="562"></td>
        <td id="LC562" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L563" class="blob-num js-line-number" data-line-number="563"></td>
        <td id="LC563" class="blob-code js-file-line">        <span class="pl-s">var</span> symbol, preErrorSymbol, state, action, a, r, yyval <span class="pl-k">=</span> {}, p, len, newState, expected;</td>
      </tr>
      <tr>
        <td id="L564" class="blob-num js-line-number" data-line-number="564"></td>
        <td id="LC564" class="blob-code js-file-line">        <span class="pl-k">while</span> (<span class="pl-c1">true</span>) {</td>
      </tr>
      <tr>
        <td id="L565" class="blob-num js-line-number" data-line-number="565"></td>
        <td id="LC565" class="blob-code js-file-line">          state <span class="pl-k">=</span> stack[stack.<span class="pl-sc">length</span> <span class="pl-k">-</span> <span class="pl-c1">1</span>];</td>
      </tr>
      <tr>
        <td id="L566" class="blob-num js-line-number" data-line-number="566"></td>
        <td id="LC566" class="blob-code js-file-line">          <span class="pl-k">if</span> (<span class="pl-v">this</span>.defaultActions[state]) {</td>
      </tr>
      <tr>
        <td id="L567" class="blob-num js-line-number" data-line-number="567"></td>
        <td id="LC567" class="blob-code js-file-line">            action <span class="pl-k">=</span> <span class="pl-v">this</span>.defaultActions[state];</td>
      </tr>
      <tr>
        <td id="L568" class="blob-num js-line-number" data-line-number="568"></td>
        <td id="LC568" class="blob-code js-file-line">          } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L569" class="blob-num js-line-number" data-line-number="569"></td>
        <td id="LC569" class="blob-code js-file-line">            <span class="pl-k">if</span> (symbol <span class="pl-k">===</span> <span class="pl-c1">null</span> <span class="pl-k">||</span> <span class="pl-k">typeof</span> symbol <span class="pl-k">==</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L570" class="blob-num js-line-number" data-line-number="570"></td>
        <td id="LC570" class="blob-code js-file-line">              symbol <span class="pl-k">=</span> lex();</td>
      </tr>
      <tr>
        <td id="L571" class="blob-num js-line-number" data-line-number="571"></td>
        <td id="LC571" class="blob-code js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L572" class="blob-num js-line-number" data-line-number="572"></td>
        <td id="LC572" class="blob-code js-file-line">            action <span class="pl-k">=</span> table[state] <span class="pl-k">&amp;&amp;</span> table[state][symbol];</td>
      </tr>
      <tr>
        <td id="L573" class="blob-num js-line-number" data-line-number="573"></td>
        <td id="LC573" class="blob-code js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L574" class="blob-num js-line-number" data-line-number="574"></td>
        <td id="LC574" class="blob-code js-file-line">          <span class="pl-k">if</span> (<span class="pl-k">typeof</span> action <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span> <span class="pl-k">||</span> <span class="pl-k">!</span>action.<span class="pl-sc">length</span> <span class="pl-k">||</span> <span class="pl-k">!</span>action[<span class="pl-c1">0</span>]) {</td>
      </tr>
      <tr>
        <td id="L575" class="blob-num js-line-number" data-line-number="575"></td>
        <td id="LC575" class="blob-code js-file-line">            <span class="pl-s">var</span> errStr <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L576" class="blob-num js-line-number" data-line-number="576"></td>
        <td id="LC576" class="blob-code js-file-line">            expected <span class="pl-k">=</span> [];</td>
      </tr>
      <tr>
        <td id="L577" class="blob-num js-line-number" data-line-number="577"></td>
        <td id="LC577" class="blob-code js-file-line">            <span class="pl-k">for</span> (p <span class="pl-k">in</span> table[state]) {</td>
      </tr>
      <tr>
        <td id="L578" class="blob-num js-line-number" data-line-number="578"></td>
        <td id="LC578" class="blob-code js-file-line">              <span class="pl-k">if</span> (<span class="pl-v">this</span>.terminals_[p] <span class="pl-k">&amp;&amp;</span> p <span class="pl-k">&gt;</span> TERROR) {</td>
      </tr>
      <tr>
        <td id="L579" class="blob-num js-line-number" data-line-number="579"></td>
        <td id="LC579" class="blob-code js-file-line">                expected.<span class="pl-s3">push</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-cce">\&#39;</span><span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-v">this</span>.terminals_[p] <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-cce">\&#39;</span><span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L580" class="blob-num js-line-number" data-line-number="580"></td>
        <td id="LC580" class="blob-code js-file-line">              }</td>
      </tr>
      <tr>
        <td id="L581" class="blob-num js-line-number" data-line-number="581"></td>
        <td id="LC581" class="blob-code js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L582" class="blob-num js-line-number" data-line-number="582"></td>
        <td id="LC582" class="blob-code js-file-line">            <span class="pl-k">if</span> (<span class="pl-v">this</span>.lexer.showPosition) {</td>
      </tr>
      <tr>
        <td id="L583" class="blob-num js-line-number" data-line-number="583"></td>
        <td id="LC583" class="blob-code js-file-line">              errStr <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>Parse error on line <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> (yylineno <span class="pl-k">+</span> <span class="pl-c1">1</span>) <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>:<span class="pl-cce">\n</span><span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-v">this</span>.lexer.showPosition() <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-cce">\n</span>Expecting <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> expected.<span class="pl-s3">join</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>, <span class="pl-pds">&#39;</span></span>) <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>, got <span class="pl-cce">\&#39;</span><span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> (<span class="pl-v">this</span>.terminals_[symbol] <span class="pl-k">||</span> symbol) <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-cce">\&#39;</span><span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L584" class="blob-num js-line-number" data-line-number="584"></td>
        <td id="LC584" class="blob-code js-file-line">            } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L585" class="blob-num js-line-number" data-line-number="585"></td>
        <td id="LC585" class="blob-code js-file-line">              errStr <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>Parse error on line <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> (yylineno <span class="pl-k">+</span> <span class="pl-c1">1</span>) <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>: Unexpected <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> (symbol <span class="pl-k">==</span> EOF <span class="pl-k">?</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>end of input<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-cce">\&#39;</span><span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> (<span class="pl-v">this</span>.terminals_[symbol] <span class="pl-k">||</span> symbol) <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-cce">\&#39;</span><span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L586" class="blob-num js-line-number" data-line-number="586"></td>
        <td id="LC586" class="blob-code js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L587" class="blob-num js-line-number" data-line-number="587"></td>
        <td id="LC587" class="blob-code js-file-line">            <span class="pl-v">this</span>.parseError(errStr, {</td>
      </tr>
      <tr>
        <td id="L588" class="blob-num js-line-number" data-line-number="588"></td>
        <td id="LC588" class="blob-code js-file-line">              text<span class="pl-k">:</span> <span class="pl-v">this</span>.lexer.match,</td>
      </tr>
      <tr>
        <td id="L589" class="blob-num js-line-number" data-line-number="589"></td>
        <td id="LC589" class="blob-code js-file-line">              token<span class="pl-k">:</span> <span class="pl-v">this</span>.terminals_[symbol] <span class="pl-k">||</span> symbol,</td>
      </tr>
      <tr>
        <td id="L590" class="blob-num js-line-number" data-line-number="590"></td>
        <td id="LC590" class="blob-code js-file-line">              line<span class="pl-k">:</span> <span class="pl-v">this</span>.lexer.yylineno,</td>
      </tr>
      <tr>
        <td id="L591" class="blob-num js-line-number" data-line-number="591"></td>
        <td id="LC591" class="blob-code js-file-line">              loc<span class="pl-k">:</span> yyloc,</td>
      </tr>
      <tr>
        <td id="L592" class="blob-num js-line-number" data-line-number="592"></td>
        <td id="LC592" class="blob-code js-file-line">              expected<span class="pl-k">:</span> expected</td>
      </tr>
      <tr>
        <td id="L593" class="blob-num js-line-number" data-line-number="593"></td>
        <td id="LC593" class="blob-code js-file-line">            });</td>
      </tr>
      <tr>
        <td id="L594" class="blob-num js-line-number" data-line-number="594"></td>
        <td id="LC594" class="blob-code js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L595" class="blob-num js-line-number" data-line-number="595"></td>
        <td id="LC595" class="blob-code js-file-line">          <span class="pl-k">if</span> (action[<span class="pl-c1">0</span>] <span class="pl-k">instanceof</span> <span class="pl-s3">Array</span> <span class="pl-k">&amp;&amp;</span> action.<span class="pl-sc">length</span> <span class="pl-k">&gt;</span> <span class="pl-c1">1</span>) {</td>
      </tr>
      <tr>
        <td id="L596" class="blob-num js-line-number" data-line-number="596"></td>
        <td id="LC596" class="blob-code js-file-line">            <span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-en">Error</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>Parse Error: multiple actions possible at state: <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> state <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>, token: <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> symbol);</td>
      </tr>
      <tr>
        <td id="L597" class="blob-num js-line-number" data-line-number="597"></td>
        <td id="LC597" class="blob-code js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L598" class="blob-num js-line-number" data-line-number="598"></td>
        <td id="LC598" class="blob-code js-file-line">          <span class="pl-k">switch</span> (action[<span class="pl-c1">0</span>]) {</td>
      </tr>
      <tr>
        <td id="L599" class="blob-num js-line-number" data-line-number="599"></td>
        <td id="LC599" class="blob-code js-file-line">            <span class="pl-k">case</span> <span class="pl-c1">1</span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L600" class="blob-num js-line-number" data-line-number="600"></td>
        <td id="LC600" class="blob-code js-file-line">              stack.<span class="pl-s3">push</span>(symbol);</td>
      </tr>
      <tr>
        <td id="L601" class="blob-num js-line-number" data-line-number="601"></td>
        <td id="LC601" class="blob-code js-file-line">              vstack.<span class="pl-s3">push</span>(<span class="pl-v">this</span>.lexer.yytext);</td>
      </tr>
      <tr>
        <td id="L602" class="blob-num js-line-number" data-line-number="602"></td>
        <td id="LC602" class="blob-code js-file-line">              lstack.<span class="pl-s3">push</span>(<span class="pl-v">this</span>.lexer.yylloc);</td>
      </tr>
      <tr>
        <td id="L603" class="blob-num js-line-number" data-line-number="603"></td>
        <td id="LC603" class="blob-code js-file-line">              stack.<span class="pl-s3">push</span>(action[<span class="pl-c1">1</span>]);</td>
      </tr>
      <tr>
        <td id="L604" class="blob-num js-line-number" data-line-number="604"></td>
        <td id="LC604" class="blob-code js-file-line">              symbol <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L605" class="blob-num js-line-number" data-line-number="605"></td>
        <td id="LC605" class="blob-code js-file-line">              <span class="pl-k">if</span> (<span class="pl-k">!</span>preErrorSymbol) {</td>
      </tr>
      <tr>
        <td id="L606" class="blob-num js-line-number" data-line-number="606"></td>
        <td id="LC606" class="blob-code js-file-line">                yyleng <span class="pl-k">=</span> <span class="pl-v">this</span>.lexer.yyleng;</td>
      </tr>
      <tr>
        <td id="L607" class="blob-num js-line-number" data-line-number="607"></td>
        <td id="LC607" class="blob-code js-file-line">                yytext <span class="pl-k">=</span> <span class="pl-v">this</span>.lexer.yytext;</td>
      </tr>
      <tr>
        <td id="L608" class="blob-num js-line-number" data-line-number="608"></td>
        <td id="LC608" class="blob-code js-file-line">                yylineno <span class="pl-k">=</span> <span class="pl-v">this</span>.lexer.yylineno;</td>
      </tr>
      <tr>
        <td id="L609" class="blob-num js-line-number" data-line-number="609"></td>
        <td id="LC609" class="blob-code js-file-line">                yyloc <span class="pl-k">=</span> <span class="pl-v">this</span>.lexer.yylloc;</td>
      </tr>
      <tr>
        <td id="L610" class="blob-num js-line-number" data-line-number="610"></td>
        <td id="LC610" class="blob-code js-file-line">                <span class="pl-k">if</span> (recovering <span class="pl-k">&gt;</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L611" class="blob-num js-line-number" data-line-number="611"></td>
        <td id="LC611" class="blob-code js-file-line">                  recovering<span class="pl-k">--</span>;</td>
      </tr>
      <tr>
        <td id="L612" class="blob-num js-line-number" data-line-number="612"></td>
        <td id="LC612" class="blob-code js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L613" class="blob-num js-line-number" data-line-number="613"></td>
        <td id="LC613" class="blob-code js-file-line">              } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L614" class="blob-num js-line-number" data-line-number="614"></td>
        <td id="LC614" class="blob-code js-file-line">                symbol <span class="pl-k">=</span> preErrorSymbol;</td>
      </tr>
      <tr>
        <td id="L615" class="blob-num js-line-number" data-line-number="615"></td>
        <td id="LC615" class="blob-code js-file-line">                preErrorSymbol <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L616" class="blob-num js-line-number" data-line-number="616"></td>
        <td id="LC616" class="blob-code js-file-line">              }</td>
      </tr>
      <tr>
        <td id="L617" class="blob-num js-line-number" data-line-number="617"></td>
        <td id="LC617" class="blob-code js-file-line">              <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L618" class="blob-num js-line-number" data-line-number="618"></td>
        <td id="LC618" class="blob-code js-file-line">            <span class="pl-k">case</span> <span class="pl-c1">2</span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L619" class="blob-num js-line-number" data-line-number="619"></td>
        <td id="LC619" class="blob-code js-file-line">              len <span class="pl-k">=</span> <span class="pl-v">this</span>.productions_[action[<span class="pl-c1">1</span>]][<span class="pl-c1">1</span>];</td>
      </tr>
      <tr>
        <td id="L620" class="blob-num js-line-number" data-line-number="620"></td>
        <td id="LC620" class="blob-code js-file-line">              yyval.$ <span class="pl-k">=</span> vstack[vstack.<span class="pl-sc">length</span> <span class="pl-k">-</span> len];</td>
      </tr>
      <tr>
        <td id="L621" class="blob-num js-line-number" data-line-number="621"></td>
        <td id="LC621" class="blob-code js-file-line">              yyval._$ <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L622" class="blob-num js-line-number" data-line-number="622"></td>
        <td id="LC622" class="blob-code js-file-line">                first_line<span class="pl-k">:</span> lstack[lstack.<span class="pl-sc">length</span> <span class="pl-k">-</span> (len <span class="pl-k">||</span> <span class="pl-c1">1</span>)].first_line,</td>
      </tr>
      <tr>
        <td id="L623" class="blob-num js-line-number" data-line-number="623"></td>
        <td id="LC623" class="blob-code js-file-line">                last_line<span class="pl-k">:</span> lstack[lstack.<span class="pl-sc">length</span> <span class="pl-k">-</span> <span class="pl-c1">1</span>].last_line,</td>
      </tr>
      <tr>
        <td id="L624" class="blob-num js-line-number" data-line-number="624"></td>
        <td id="LC624" class="blob-code js-file-line">                first_column<span class="pl-k">:</span> lstack[lstack.<span class="pl-sc">length</span> <span class="pl-k">-</span> (len <span class="pl-k">||</span> <span class="pl-c1">1</span>)].first_column,</td>
      </tr>
      <tr>
        <td id="L625" class="blob-num js-line-number" data-line-number="625"></td>
        <td id="LC625" class="blob-code js-file-line">                last_column<span class="pl-k">:</span> lstack[lstack.<span class="pl-sc">length</span> <span class="pl-k">-</span> <span class="pl-c1">1</span>].last_column</td>
      </tr>
      <tr>
        <td id="L626" class="blob-num js-line-number" data-line-number="626"></td>
        <td id="LC626" class="blob-code js-file-line">              };</td>
      </tr>
      <tr>
        <td id="L627" class="blob-num js-line-number" data-line-number="627"></td>
        <td id="LC627" class="blob-code js-file-line">              <span class="pl-k">if</span> (ranges) {</td>
      </tr>
      <tr>
        <td id="L628" class="blob-num js-line-number" data-line-number="628"></td>
        <td id="LC628" class="blob-code js-file-line">                yyval._$.range <span class="pl-k">=</span> [</td>
      </tr>
      <tr>
        <td id="L629" class="blob-num js-line-number" data-line-number="629"></td>
        <td id="LC629" class="blob-code js-file-line">                  lstack[lstack.<span class="pl-sc">length</span> <span class="pl-k">-</span> (len <span class="pl-k">||</span> <span class="pl-c1">1</span>)].range[<span class="pl-c1">0</span>],</td>
      </tr>
      <tr>
        <td id="L630" class="blob-num js-line-number" data-line-number="630"></td>
        <td id="LC630" class="blob-code js-file-line">                  lstack[lstack.<span class="pl-sc">length</span> <span class="pl-k">-</span> <span class="pl-c1">1</span>].range[<span class="pl-c1">1</span>]</td>
      </tr>
      <tr>
        <td id="L631" class="blob-num js-line-number" data-line-number="631"></td>
        <td id="LC631" class="blob-code js-file-line">                ];</td>
      </tr>
      <tr>
        <td id="L632" class="blob-num js-line-number" data-line-number="632"></td>
        <td id="LC632" class="blob-code js-file-line">              }</td>
      </tr>
      <tr>
        <td id="L633" class="blob-num js-line-number" data-line-number="633"></td>
        <td id="LC633" class="blob-code js-file-line">              r <span class="pl-k">=</span> <span class="pl-v">this</span>.performAction.<span class="pl-s3">apply</span>(yyval, [</td>
      </tr>
      <tr>
        <td id="L634" class="blob-num js-line-number" data-line-number="634"></td>
        <td id="LC634" class="blob-code js-file-line">                yytext,</td>
      </tr>
      <tr>
        <td id="L635" class="blob-num js-line-number" data-line-number="635"></td>
        <td id="LC635" class="blob-code js-file-line">                yyleng,</td>
      </tr>
      <tr>
        <td id="L636" class="blob-num js-line-number" data-line-number="636"></td>
        <td id="LC636" class="blob-code js-file-line">                yylineno,</td>
      </tr>
      <tr>
        <td id="L637" class="blob-num js-line-number" data-line-number="637"></td>
        <td id="LC637" class="blob-code js-file-line">                <span class="pl-v">this</span>.yy,</td>
      </tr>
      <tr>
        <td id="L638" class="blob-num js-line-number" data-line-number="638"></td>
        <td id="LC638" class="blob-code js-file-line">                action[<span class="pl-c1">1</span>],</td>
      </tr>
      <tr>
        <td id="L639" class="blob-num js-line-number" data-line-number="639"></td>
        <td id="LC639" class="blob-code js-file-line">                vstack,</td>
      </tr>
      <tr>
        <td id="L640" class="blob-num js-line-number" data-line-number="640"></td>
        <td id="LC640" class="blob-code js-file-line">                lstack</td>
      </tr>
      <tr>
        <td id="L641" class="blob-num js-line-number" data-line-number="641"></td>
        <td id="LC641" class="blob-code js-file-line">              ].<span class="pl-s3">concat</span>(args));</td>
      </tr>
      <tr>
        <td id="L642" class="blob-num js-line-number" data-line-number="642"></td>
        <td id="LC642" class="blob-code js-file-line">              <span class="pl-k">if</span> (<span class="pl-k">typeof</span> r <span class="pl-k">!==</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>undefined<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L643" class="blob-num js-line-number" data-line-number="643"></td>
        <td id="LC643" class="blob-code js-file-line">                <span class="pl-k">return</span> r;</td>
      </tr>
      <tr>
        <td id="L644" class="blob-num js-line-number" data-line-number="644"></td>
        <td id="LC644" class="blob-code js-file-line">              }</td>
      </tr>
      <tr>
        <td id="L645" class="blob-num js-line-number" data-line-number="645"></td>
        <td id="LC645" class="blob-code js-file-line">              <span class="pl-k">if</span> (len) {</td>
      </tr>
      <tr>
        <td id="L646" class="blob-num js-line-number" data-line-number="646"></td>
        <td id="LC646" class="blob-code js-file-line">                stack <span class="pl-k">=</span> stack.<span class="pl-s3">slice</span>(<span class="pl-c1">0</span>, <span class="pl-k">-</span><span class="pl-c1">1</span> <span class="pl-k">*</span> len <span class="pl-k">*</span> <span class="pl-c1">2</span>);</td>
      </tr>
      <tr>
        <td id="L647" class="blob-num js-line-number" data-line-number="647"></td>
        <td id="LC647" class="blob-code js-file-line">                vstack <span class="pl-k">=</span> vstack.<span class="pl-s3">slice</span>(<span class="pl-c1">0</span>, <span class="pl-k">-</span><span class="pl-c1">1</span> <span class="pl-k">*</span> len);</td>
      </tr>
      <tr>
        <td id="L648" class="blob-num js-line-number" data-line-number="648"></td>
        <td id="LC648" class="blob-code js-file-line">                lstack <span class="pl-k">=</span> lstack.<span class="pl-s3">slice</span>(<span class="pl-c1">0</span>, <span class="pl-k">-</span><span class="pl-c1">1</span> <span class="pl-k">*</span> len);</td>
      </tr>
      <tr>
        <td id="L649" class="blob-num js-line-number" data-line-number="649"></td>
        <td id="LC649" class="blob-code js-file-line">              }</td>
      </tr>
      <tr>
        <td id="L650" class="blob-num js-line-number" data-line-number="650"></td>
        <td id="LC650" class="blob-code js-file-line">              stack.<span class="pl-s3">push</span>(<span class="pl-v">this</span>.productions_[action[<span class="pl-c1">1</span>]][<span class="pl-c1">0</span>]);</td>
      </tr>
      <tr>
        <td id="L651" class="blob-num js-line-number" data-line-number="651"></td>
        <td id="LC651" class="blob-code js-file-line">              vstack.<span class="pl-s3">push</span>(yyval.$);</td>
      </tr>
      <tr>
        <td id="L652" class="blob-num js-line-number" data-line-number="652"></td>
        <td id="LC652" class="blob-code js-file-line">              lstack.<span class="pl-s3">push</span>(yyval._$);</td>
      </tr>
      <tr>
        <td id="L653" class="blob-num js-line-number" data-line-number="653"></td>
        <td id="LC653" class="blob-code js-file-line">              newState <span class="pl-k">=</span> table[stack[stack.<span class="pl-sc">length</span> <span class="pl-k">-</span> <span class="pl-c1">2</span>]][stack[stack.<span class="pl-sc">length</span> <span class="pl-k">-</span> <span class="pl-c1">1</span>]];</td>
      </tr>
      <tr>
        <td id="L654" class="blob-num js-line-number" data-line-number="654"></td>
        <td id="LC654" class="blob-code js-file-line">              stack.<span class="pl-s3">push</span>(newState);</td>
      </tr>
      <tr>
        <td id="L655" class="blob-num js-line-number" data-line-number="655"></td>
        <td id="LC655" class="blob-code js-file-line">              <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L656" class="blob-num js-line-number" data-line-number="656"></td>
        <td id="LC656" class="blob-code js-file-line">            <span class="pl-k">case</span> <span class="pl-c1">3</span><span class="pl-k">:</span></td>
      </tr>
      <tr>
        <td id="L657" class="blob-num js-line-number" data-line-number="657"></td>
        <td id="LC657" class="blob-code js-file-line">              <span class="pl-k">return</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L658" class="blob-num js-line-number" data-line-number="658"></td>
        <td id="LC658" class="blob-code js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L659" class="blob-num js-line-number" data-line-number="659"></td>
        <td id="LC659" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L660" class="blob-num js-line-number" data-line-number="660"></td>
        <td id="LC660" class="blob-code js-file-line">        <span class="pl-k">return</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L661" class="blob-num js-line-number" data-line-number="661"></td>
        <td id="LC661" class="blob-code js-file-line">      }};</td>
      </tr>
      <tr>
        <td id="L662" class="blob-num js-line-number" data-line-number="662"></td>
        <td id="LC662" class="blob-code js-file-line">    <span class="pl-c">/* generated by jison-lex 0.2.1 */</span></td>
      </tr>
      <tr>
        <td id="L663" class="blob-num js-line-number" data-line-number="663"></td>
        <td id="LC663" class="blob-code js-file-line">    <span class="pl-s">var</span> lexer <span class="pl-k">=</span> (<span class="pl-st">function</span>(){</td>
      </tr>
      <tr>
        <td id="L664" class="blob-num js-line-number" data-line-number="664"></td>
        <td id="LC664" class="blob-code js-file-line">      <span class="pl-s">var</span> lexer <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L665" class="blob-num js-line-number" data-line-number="665"></td>
        <td id="LC665" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L666" class="blob-num js-line-number" data-line-number="666"></td>
        <td id="LC666" class="blob-code js-file-line">        EOF<span class="pl-k">:</span><span class="pl-c1">1</span>,</td>
      </tr>
      <tr>
        <td id="L667" class="blob-num js-line-number" data-line-number="667"></td>
        <td id="LC667" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L668" class="blob-num js-line-number" data-line-number="668"></td>
        <td id="LC668" class="blob-code js-file-line">        parseError<span class="pl-k">:</span><span class="pl-st">function</span> <span class="pl-en">parseError</span>(<span class="pl-vpf">str</span>,<span class="pl-vpf">hash</span>){<span class="pl-k">if</span>(<span class="pl-v">this</span>.yy.parser){<span class="pl-v">this</span>.yy.parser.parseError(str,hash)}<span class="pl-k">else</span>{<span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-en">Error</span>(str)}},</td>
      </tr>
      <tr>
        <td id="L669" class="blob-num js-line-number" data-line-number="669"></td>
        <td id="LC669" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L670" class="blob-num js-line-number" data-line-number="670"></td>
        <td id="LC670" class="blob-code js-file-line">        <span class="pl-c">// resets the lexer, sets new input</span></td>
      </tr>
      <tr>
        <td id="L671" class="blob-num js-line-number" data-line-number="671"></td>
        <td id="LC671" class="blob-code js-file-line">        <span class="pl-en">setInput</span>:<span class="pl-st">function</span> (<span class="pl-vpf">input</span>){<span class="pl-v">this</span>._input<span class="pl-k">=</span>input;<span class="pl-v">this</span>._more<span class="pl-k">=</span><span class="pl-v">this</span>._backtrack<span class="pl-k">=</span><span class="pl-v">this</span>.done<span class="pl-k">=</span><span class="pl-c1">false</span>;<span class="pl-v">this</span>.yylineno<span class="pl-k">=</span><span class="pl-v">this</span>.yyleng<span class="pl-k">=</span><span class="pl-c1">0</span>;<span class="pl-v">this</span>.yytext<span class="pl-k">=</span><span class="pl-v">this</span>.matched<span class="pl-k">=</span><span class="pl-v">this</span>.match<span class="pl-k">=</span><span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;<span class="pl-v">this</span>.conditionStack<span class="pl-k">=</span>[<span class="pl-s1"><span class="pl-pds">&quot;</span>INITIAL<span class="pl-pds">&quot;</span></span>];<span class="pl-v">this</span>.yylloc<span class="pl-k">=</span>{first_line<span class="pl-k">:</span><span class="pl-c1">1</span>,first_column<span class="pl-k">:</span><span class="pl-c1">0</span>,last_line<span class="pl-k">:</span><span class="pl-c1">1</span>,last_column<span class="pl-k">:</span><span class="pl-c1">0</span>};<span class="pl-k">if</span>(<span class="pl-v">this</span>.<span class="pl-sc">options</span>.ranges){<span class="pl-v">this</span>.yylloc.range<span class="pl-k">=</span>[<span class="pl-c1">0</span>,<span class="pl-c1">0</span>]}<span class="pl-v">this</span>.offset<span class="pl-k">=</span><span class="pl-c1">0</span>;<span class="pl-k">return</span> <span class="pl-v">this</span>},</td>
      </tr>
      <tr>
        <td id="L672" class="blob-num js-line-number" data-line-number="672"></td>
        <td id="LC672" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L673" class="blob-num js-line-number" data-line-number="673"></td>
        <td id="LC673" class="blob-code js-file-line">        <span class="pl-c">// consumes and returns one char from the input</span></td>
      </tr>
      <tr>
        <td id="L674" class="blob-num js-line-number" data-line-number="674"></td>
        <td id="LC674" class="blob-code js-file-line">        <span class="pl-en">input</span>:<span class="pl-st">function</span> (){<span class="pl-s">var</span> ch<span class="pl-k">=</span><span class="pl-v">this</span>._input[<span class="pl-c1">0</span>];<span class="pl-v">this</span>.yytext<span class="pl-k">+=</span>ch;<span class="pl-v">this</span>.yyleng<span class="pl-k">++</span>;<span class="pl-v">this</span>.offset<span class="pl-k">++</span>;<span class="pl-v">this</span>.match<span class="pl-k">+=</span>ch;<span class="pl-v">this</span>.matched<span class="pl-k">+=</span>ch;<span class="pl-s">var</span> lines<span class="pl-k">=</span>ch.<span class="pl-s3">match</span>(<span class="pl-sr"><span class="pl-pds">/</span>(?:<span class="pl-cce">\r\n</span><span class="pl-k">?</span><span class="pl-k">|</span><span class="pl-cce">\n</span>)<span class="pl-c1">.</span><span class="pl-k">*</span><span class="pl-pds">/</span>g</span>);<span class="pl-k">if</span>(lines){<span class="pl-v">this</span>.yylineno<span class="pl-k">++</span>;<span class="pl-v">this</span>.yylloc.last_line<span class="pl-k">++</span>}<span class="pl-k">else</span>{<span class="pl-v">this</span>.yylloc.last_column<span class="pl-k">++</span>}<span class="pl-k">if</span>(<span class="pl-v">this</span>.<span class="pl-sc">options</span>.ranges){<span class="pl-v">this</span>.yylloc.range[<span class="pl-c1">1</span>]<span class="pl-k">++</span>}<span class="pl-v">this</span>._input<span class="pl-k">=</span><span class="pl-v">this</span>._input.<span class="pl-s3">slice</span>(<span class="pl-c1">1</span>);<span class="pl-k">return</span> ch},</td>
      </tr>
      <tr>
        <td id="L675" class="blob-num js-line-number" data-line-number="675"></td>
        <td id="LC675" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L676" class="blob-num js-line-number" data-line-number="676"></td>
        <td id="LC676" class="blob-code js-file-line">        <span class="pl-c">// unshifts one char (or a string) into the input</span></td>
      </tr>
      <tr>
        <td id="L677" class="blob-num js-line-number" data-line-number="677"></td>
        <td id="LC677" class="blob-code js-file-line">        <span class="pl-en">unput</span>:<span class="pl-st">function</span> (<span class="pl-vpf">ch</span>){<span class="pl-s">var</span> len<span class="pl-k">=</span>ch.<span class="pl-sc">length</span>;<span class="pl-s">var</span> lines<span class="pl-k">=</span>ch.<span class="pl-s3">split</span>(<span class="pl-sr"><span class="pl-pds">/</span>(?:<span class="pl-cce">\r\n</span><span class="pl-k">?</span><span class="pl-k">|</span><span class="pl-cce">\n</span>)<span class="pl-pds">/</span>g</span>);<span class="pl-v">this</span>._input<span class="pl-k">=</span>ch<span class="pl-k">+</span><span class="pl-v">this</span>._input;<span class="pl-v">this</span>.yytext<span class="pl-k">=</span><span class="pl-v">this</span>.yytext.<span class="pl-s3">substr</span>(<span class="pl-c1">0</span>,<span class="pl-v">this</span>.yytext.<span class="pl-sc">length</span><span class="pl-k">-</span>len<span class="pl-k">-</span><span class="pl-c1">1</span>);<span class="pl-v">this</span>.offset<span class="pl-k">-=</span>len;<span class="pl-s">var</span> oldLines<span class="pl-k">=</span><span class="pl-v">this</span>.match.<span class="pl-s3">split</span>(<span class="pl-sr"><span class="pl-pds">/</span>(?:<span class="pl-cce">\r\n</span><span class="pl-k">?</span><span class="pl-k">|</span><span class="pl-cce">\n</span>)<span class="pl-pds">/</span>g</span>);<span class="pl-v">this</span>.match<span class="pl-k">=</span><span class="pl-v">this</span>.match.<span class="pl-s3">substr</span>(<span class="pl-c1">0</span>,<span class="pl-v">this</span>.match.<span class="pl-sc">length</span><span class="pl-k">-</span><span class="pl-c1">1</span>);<span class="pl-v">this</span>.matched<span class="pl-k">=</span><span class="pl-v">this</span>.matched.<span class="pl-s3">substr</span>(<span class="pl-c1">0</span>,<span class="pl-v">this</span>.matched.<span class="pl-sc">length</span><span class="pl-k">-</span><span class="pl-c1">1</span>);<span class="pl-k">if</span>(lines.<span class="pl-sc">length</span><span class="pl-k">-</span><span class="pl-c1">1</span>){<span class="pl-v">this</span>.yylineno<span class="pl-k">-=</span>lines.<span class="pl-sc">length</span><span class="pl-k">-</span><span class="pl-c1">1</span>}<span class="pl-s">var</span> r<span class="pl-k">=</span><span class="pl-v">this</span>.yylloc.range;<span class="pl-v">this</span>.yylloc<span class="pl-k">=</span>{first_line<span class="pl-k">:</span><span class="pl-v">this</span>.yylloc.first_line,last_line<span class="pl-k">:</span><span class="pl-v">this</span>.yylineno<span class="pl-k">+</span><span class="pl-c1">1</span>,first_column<span class="pl-k">:</span><span class="pl-v">this</span>.yylloc.first_column,last_column<span class="pl-k">:</span>lines<span class="pl-k">?</span>(lines.<span class="pl-sc">length</span><span class="pl-k">===</span>oldLines.<span class="pl-sc">length</span><span class="pl-k">?</span><span class="pl-v">this</span>.yylloc.first_column<span class="pl-k">:</span><span class="pl-c1">0</span>)<span class="pl-k">+</span>oldLines[oldLines.<span class="pl-sc">length</span><span class="pl-k">-</span>lines.<span class="pl-sc">length</span>].<span class="pl-sc">length</span><span class="pl-k">-</span>lines[<span class="pl-c1">0</span>].<span class="pl-sc">length</span><span class="pl-k">:</span><span class="pl-v">this</span>.yylloc.first_column<span class="pl-k">-</span>len};<span class="pl-k">if</span>(<span class="pl-v">this</span>.<span class="pl-sc">options</span>.ranges){<span class="pl-v">this</span>.yylloc.range<span class="pl-k">=</span>[r[<span class="pl-c1">0</span>],r[<span class="pl-c1">0</span>]<span class="pl-k">+</span><span class="pl-v">this</span>.yyleng<span class="pl-k">-</span>len]}<span class="pl-v">this</span>.yyleng<span class="pl-k">=</span><span class="pl-v">this</span>.yytext.<span class="pl-sc">length</span>;<span class="pl-k">return</span> <span class="pl-v">this</span>},</td>
      </tr>
      <tr>
        <td id="L678" class="blob-num js-line-number" data-line-number="678"></td>
        <td id="LC678" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L679" class="blob-num js-line-number" data-line-number="679"></td>
        <td id="LC679" class="blob-code js-file-line">        <span class="pl-c">// When called from action, caches matched text and appends it on next action</span></td>
      </tr>
      <tr>
        <td id="L680" class="blob-num js-line-number" data-line-number="680"></td>
        <td id="LC680" class="blob-code js-file-line">        <span class="pl-en">more</span>:<span class="pl-st">function</span> (){<span class="pl-v">this</span>._more<span class="pl-k">=</span><span class="pl-c1">true</span>;<span class="pl-k">return</span> <span class="pl-v">this</span>},</td>
      </tr>
      <tr>
        <td id="L681" class="blob-num js-line-number" data-line-number="681"></td>
        <td id="LC681" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L682" class="blob-num js-line-number" data-line-number="682"></td>
        <td id="LC682" class="blob-code js-file-line">        <span class="pl-c">// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.</span></td>
      </tr>
      <tr>
        <td id="L683" class="blob-num js-line-number" data-line-number="683"></td>
        <td id="LC683" class="blob-code js-file-line">        <span class="pl-en">reject</span>:<span class="pl-st">function</span> (){<span class="pl-k">if</span>(<span class="pl-v">this</span>.<span class="pl-sc">options</span>.backtrack_lexer){<span class="pl-v">this</span>._backtrack<span class="pl-k">=</span><span class="pl-c1">true</span>}<span class="pl-k">else</span>{<span class="pl-k">return</span> <span class="pl-v">this</span>.parseError(<span class="pl-s1"><span class="pl-pds">&quot;</span>Lexical error on line <span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>(<span class="pl-v">this</span>.yylineno<span class="pl-k">+</span><span class="pl-c1">1</span>)<span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&quot;</span>. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).<span class="pl-cce">\n</span><span class="pl-pds">&quot;</span></span><span class="pl-k">+</span><span class="pl-v">this</span>.showPosition(),{text<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>,token<span class="pl-k">:</span><span class="pl-c1">null</span>,line<span class="pl-k">:</span><span class="pl-v">this</span>.yylineno})}<span class="pl-k">return</span> <span class="pl-v">this</span>},</td>
      </tr>
      <tr>
        <td id="L684" class="blob-num js-line-number" data-line-number="684"></td>
        <td id="LC684" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L685" class="blob-num js-line-number" data-line-number="685"></td>
        <td id="LC685" class="blob-code js-file-line">        <span class="pl-c">// retain first n characters of the match</span></td>
      </tr>
      <tr>
        <td id="L686" class="blob-num js-line-number" data-line-number="686"></td>
        <td id="LC686" class="blob-code js-file-line">        <span class="pl-en">less</span>:<span class="pl-st">function</span> (<span class="pl-vpf">n</span>){<span class="pl-v">this</span>.unput(<span class="pl-v">this</span>.match.<span class="pl-s3">slice</span>(n))},</td>
      </tr>
      <tr>
        <td id="L687" class="blob-num js-line-number" data-line-number="687"></td>
        <td id="LC687" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L688" class="blob-num js-line-number" data-line-number="688"></td>
        <td id="LC688" class="blob-code js-file-line">        <span class="pl-c">// displays already matched input, i.e. for error messages</span></td>
      </tr>
      <tr>
        <td id="L689" class="blob-num js-line-number" data-line-number="689"></td>
        <td id="LC689" class="blob-code js-file-line">        <span class="pl-en">pastInput</span>:<span class="pl-st">function</span> (){<span class="pl-s">var</span> past<span class="pl-k">=</span><span class="pl-v">this</span>.matched.<span class="pl-s3">substr</span>(<span class="pl-c1">0</span>,<span class="pl-v">this</span>.matched.<span class="pl-sc">length</span><span class="pl-k">-</span><span class="pl-v">this</span>.match.<span class="pl-sc">length</span>);<span class="pl-k">return</span>(past.<span class="pl-sc">length</span><span class="pl-k">&gt;</span><span class="pl-c1">20</span><span class="pl-k">?</span><span class="pl-s1"><span class="pl-pds">&quot;</span>...<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>)<span class="pl-k">+</span>past.<span class="pl-s3">substr</span>(<span class="pl-k">-</span><span class="pl-c1">20</span>).<span class="pl-s3">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-cce">\n</span><span class="pl-pds">/</span>g</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>)},</td>
      </tr>
      <tr>
        <td id="L690" class="blob-num js-line-number" data-line-number="690"></td>
        <td id="LC690" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L691" class="blob-num js-line-number" data-line-number="691"></td>
        <td id="LC691" class="blob-code js-file-line">        <span class="pl-c">// displays upcoming input, i.e. for error messages</span></td>
      </tr>
      <tr>
        <td id="L692" class="blob-num js-line-number" data-line-number="692"></td>
        <td id="LC692" class="blob-code js-file-line">        <span class="pl-en">upcomingInput</span>:<span class="pl-st">function</span> (){<span class="pl-s">var</span> next<span class="pl-k">=</span><span class="pl-v">this</span>.match;<span class="pl-k">if</span>(next.<span class="pl-sc">length</span><span class="pl-k">&lt;</span><span class="pl-c1">20</span>){next<span class="pl-k">+=</span><span class="pl-v">this</span>._input.<span class="pl-s3">substr</span>(<span class="pl-c1">0</span>,<span class="pl-c1">20</span><span class="pl-k">-</span>next.<span class="pl-sc">length</span>)}<span class="pl-k">return</span>(next.<span class="pl-s3">substr</span>(<span class="pl-c1">0</span>,<span class="pl-c1">20</span>)<span class="pl-k">+</span>(next.<span class="pl-sc">length</span><span class="pl-k">&gt;</span><span class="pl-c1">20</span><span class="pl-k">?</span><span class="pl-s1"><span class="pl-pds">&quot;</span>...<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>)).<span class="pl-s3">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-cce">\n</span><span class="pl-pds">/</span>g</span>,<span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>)},</td>
      </tr>
      <tr>
        <td id="L693" class="blob-num js-line-number" data-line-number="693"></td>
        <td id="LC693" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L694" class="blob-num js-line-number" data-line-number="694"></td>
        <td id="LC694" class="blob-code js-file-line">        <span class="pl-c">// displays the character position where the lexing error occurred, i.e. for error messages</span></td>
      </tr>
      <tr>
        <td id="L695" class="blob-num js-line-number" data-line-number="695"></td>
        <td id="LC695" class="blob-code js-file-line">        <span class="pl-en">showPosition</span>:<span class="pl-st">function</span> (){<span class="pl-s">var</span> pre<span class="pl-k">=</span><span class="pl-v">this</span>.pastInput();<span class="pl-s">var</span> c<span class="pl-k">=</span><span class="pl-k">new</span> <span class="pl-en">Array</span>(pre.<span class="pl-sc">length</span><span class="pl-k">+</span><span class="pl-c1">1</span>).<span class="pl-s3">join</span>(<span class="pl-s1"><span class="pl-pds">&quot;</span>-<span class="pl-pds">&quot;</span></span>);<span class="pl-k">return</span> pre<span class="pl-k">+</span><span class="pl-v">this</span>.upcomingInput()<span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-cce">\n</span><span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>c<span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&quot;</span>^<span class="pl-pds">&quot;</span></span>},</td>
      </tr>
      <tr>
        <td id="L696" class="blob-num js-line-number" data-line-number="696"></td>
        <td id="LC696" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L697" class="blob-num js-line-number" data-line-number="697"></td>
        <td id="LC697" class="blob-code js-file-line">        <span class="pl-c">// test the lexed token: return FALSE when not a match, otherwise return token</span></td>
      </tr>
      <tr>
        <td id="L698" class="blob-num js-line-number" data-line-number="698"></td>
        <td id="LC698" class="blob-code js-file-line">        test_match:function (match,indexed_rule){var token,lines,backup;if(this.options.backtrack_lexer){backup={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done};if(this.options.ranges){backup.yylloc.range=this.yylloc.range.slice(0)}}lines=match[0].match(/(?:\r\n?|\n).*/g);if(lines){this.yylineno+=lines.length}this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:lines?lines[lines.length-1].length-lines[lines.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+match[0].length};this.yytext+=match[0];this.match+=match[0];this.matches=match;this.yyleng=this.yytext.length;if(this.options.ranges){this.yylloc.range=[this.offset,this.offset+=this.yyleng]}this._more=false;this._backtrack=false;this._input=this._input.slice(match[0].length);this.matched+=match[0];token=this.performAction.call(this,this.yy,this,indexed_rule,this.conditionStack[this.conditionStack.length-1]);if(this.done&amp;&amp;this._input){this.done=false}if(token){return token}else if(this._backtrack){for(var k in backup){this[k]=backup[k]}return false}return false},</td>
      </tr>
      <tr>
        <td id="L699" class="blob-num js-line-number" data-line-number="699"></td>
        <td id="LC699" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L700" class="blob-num js-line-number" data-line-number="700"></td>
        <td id="LC700" class="blob-code js-file-line">        <span class="pl-c">// return next match in input</span></td>
      </tr>
      <tr>
        <td id="L701" class="blob-num js-line-number" data-line-number="701"></td>
        <td id="LC701" class="blob-code js-file-line">        <span class="pl-en">next</span>:<span class="pl-st">function</span> (){<span class="pl-k">if</span>(<span class="pl-v">this</span>.done){<span class="pl-k">return</span> <span class="pl-v">this</span>.EOF}<span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-v">this</span>._input){<span class="pl-v">this</span>.done<span class="pl-k">=</span><span class="pl-c1">true</span>}<span class="pl-s">var</span> token,match,tempMatch,index;<span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-v">this</span>._more){<span class="pl-v">this</span>.yytext<span class="pl-k">=</span><span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>;<span class="pl-v">this</span>.match<span class="pl-k">=</span><span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>}<span class="pl-s">var</span> rules<span class="pl-k">=</span><span class="pl-v">this</span>._currentRules();<span class="pl-k">for</span>(<span class="pl-s">var</span> i<span class="pl-k">=</span><span class="pl-c1">0</span>;i<span class="pl-k">&lt;</span>rules.<span class="pl-sc">length</span>;i<span class="pl-k">++</span>){tempMatch<span class="pl-k">=</span><span class="pl-v">this</span>._input.<span class="pl-s3">match</span>(<span class="pl-v">this</span>.<span class="pl-sc">rules</span>[rules[i]]);<span class="pl-k">if</span>(tempMatch<span class="pl-k">&amp;&amp;</span>(<span class="pl-k">!</span>match<span class="pl-k">||</span>tempMatch[<span class="pl-c1">0</span>].<span class="pl-sc">length</span><span class="pl-k">&gt;</span>match[<span class="pl-c1">0</span>].<span class="pl-sc">length</span>)){match<span class="pl-k">=</span>tempMatch;index<span class="pl-k">=</span>i;<span class="pl-k">if</span>(<span class="pl-v">this</span>.<span class="pl-sc">options</span>.backtrack_lexer){token<span class="pl-k">=</span><span class="pl-v">this</span>.test_match(tempMatch,rules[i]);<span class="pl-k">if</span>(token<span class="pl-k">!==</span><span class="pl-c1">false</span>){<span class="pl-k">return</span> token}<span class="pl-k">else</span> <span class="pl-k">if</span>(<span class="pl-v">this</span>._backtrack){match<span class="pl-k">=</span><span class="pl-c1">false</span>;<span class="pl-k">continue</span>}<span class="pl-k">else</span>{<span class="pl-k">return</span> <span class="pl-c1">false</span>}}<span class="pl-k">else</span> <span class="pl-k">if</span>(<span class="pl-k">!</span><span class="pl-v">this</span>.<span class="pl-sc">options</span>.flex){<span class="pl-k">break</span>}}}<span class="pl-k">if</span>(match){token<span class="pl-k">=</span><span class="pl-v">this</span>.test_match(match,rules[index]);<span class="pl-k">if</span>(token<span class="pl-k">!==</span><span class="pl-c1">false</span>){<span class="pl-k">return</span> token}<span class="pl-k">return</span> <span class="pl-c1">false</span>}<span class="pl-k">if</span>(<span class="pl-v">this</span>._input<span class="pl-k">===</span><span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>){<span class="pl-k">return</span> <span class="pl-v">this</span>.EOF}<span class="pl-k">else</span>{<span class="pl-k">return</span> <span class="pl-v">this</span>.parseError(<span class="pl-s1"><span class="pl-pds">&quot;</span>Lexical error on line <span class="pl-pds">&quot;</span></span><span class="pl-k">+</span>(<span class="pl-v">this</span>.yylineno<span class="pl-k">+</span><span class="pl-c1">1</span>)<span class="pl-k">+</span><span class="pl-s1"><span class="pl-pds">&quot;</span>. Unrecognized text.<span class="pl-cce">\n</span><span class="pl-pds">&quot;</span></span><span class="pl-k">+</span><span class="pl-v">this</span>.showPosition(),{text<span class="pl-k">:</span><span class="pl-s1"><span class="pl-pds">&quot;</span><span class="pl-pds">&quot;</span></span>,token<span class="pl-k">:</span><span class="pl-c1">null</span>,line<span class="pl-k">:</span><span class="pl-v">this</span>.yylineno})}},</td>
      </tr>
      <tr>
        <td id="L702" class="blob-num js-line-number" data-line-number="702"></td>
        <td id="LC702" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L703" class="blob-num js-line-number" data-line-number="703"></td>
        <td id="LC703" class="blob-code js-file-line">        <span class="pl-c">// return next match that has a token</span></td>
      </tr>
      <tr>
        <td id="L704" class="blob-num js-line-number" data-line-number="704"></td>
        <td id="LC704" class="blob-code js-file-line">        lex<span class="pl-k">:</span><span class="pl-st">function</span> <span class="pl-en">lex</span>(){<span class="pl-s">var</span> r<span class="pl-k">=</span><span class="pl-v">this</span>.<span class="pl-sc">next</span>();<span class="pl-k">if</span>(r){<span class="pl-k">return</span> r}<span class="pl-k">else</span>{<span class="pl-k">return</span> <span class="pl-v">this</span>.lex()}},</td>
      </tr>
      <tr>
        <td id="L705" class="blob-num js-line-number" data-line-number="705"></td>
        <td id="LC705" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L706" class="blob-num js-line-number" data-line-number="706"></td>
        <td id="LC706" class="blob-code js-file-line">        <span class="pl-c">// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)</span></td>
      </tr>
      <tr>
        <td id="L707" class="blob-num js-line-number" data-line-number="707"></td>
        <td id="LC707" class="blob-code js-file-line">        begin<span class="pl-k">:</span><span class="pl-st">function</span> <span class="pl-en">begin</span>(<span class="pl-vpf">condition</span>){<span class="pl-v">this</span>.conditionStack.<span class="pl-s3">push</span>(condition)},</td>
      </tr>
      <tr>
        <td id="L708" class="blob-num js-line-number" data-line-number="708"></td>
        <td id="LC708" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L709" class="blob-num js-line-number" data-line-number="709"></td>
        <td id="LC709" class="blob-code js-file-line">        <span class="pl-c">// pop the previously active lexer condition state off the condition stack</span></td>
      </tr>
      <tr>
        <td id="L710" class="blob-num js-line-number" data-line-number="710"></td>
        <td id="LC710" class="blob-code js-file-line">        popState<span class="pl-k">:</span><span class="pl-st">function</span> <span class="pl-en">popState</span>(){<span class="pl-s">var</span> n<span class="pl-k">=</span><span class="pl-v">this</span>.conditionStack.<span class="pl-sc">length</span><span class="pl-k">-</span><span class="pl-c1">1</span>;<span class="pl-k">if</span>(n<span class="pl-k">&gt;</span><span class="pl-c1">0</span>){<span class="pl-k">return</span> <span class="pl-v">this</span>.conditionStack.<span class="pl-s3">pop</span>()}<span class="pl-k">else</span>{<span class="pl-k">return</span> <span class="pl-v">this</span>.conditionStack[<span class="pl-c1">0</span>]}},</td>
      </tr>
      <tr>
        <td id="L711" class="blob-num js-line-number" data-line-number="711"></td>
        <td id="LC711" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L712" class="blob-num js-line-number" data-line-number="712"></td>
        <td id="LC712" class="blob-code js-file-line">        <span class="pl-c">// produce the lexer rule set which is active for the currently active lexer condition state</span></td>
      </tr>
      <tr>
        <td id="L713" class="blob-num js-line-number" data-line-number="713"></td>
        <td id="LC713" class="blob-code js-file-line">        _currentRules<span class="pl-k">:</span><span class="pl-st">function</span> <span class="pl-en">_currentRules</span>(){<span class="pl-k">if</span>(<span class="pl-v">this</span>.conditionStack.<span class="pl-sc">length</span><span class="pl-k">&amp;&amp;</span><span class="pl-v">this</span>.conditionStack[<span class="pl-v">this</span>.conditionStack.<span class="pl-sc">length</span><span class="pl-k">-</span><span class="pl-c1">1</span>]){<span class="pl-k">return</span> <span class="pl-v">this</span>.conditions[<span class="pl-v">this</span>.conditionStack[<span class="pl-v">this</span>.conditionStack.<span class="pl-sc">length</span><span class="pl-k">-</span><span class="pl-c1">1</span>]].<span class="pl-sc">rules</span>}<span class="pl-k">else</span>{<span class="pl-k">return</span> <span class="pl-v">this</span>.conditions[<span class="pl-s1"><span class="pl-pds">&quot;</span>INITIAL<span class="pl-pds">&quot;</span></span>].<span class="pl-sc">rules</span>}},</td>
      </tr>
      <tr>
        <td id="L714" class="blob-num js-line-number" data-line-number="714"></td>
        <td id="LC714" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L715" class="blob-num js-line-number" data-line-number="715"></td>
        <td id="LC715" class="blob-code js-file-line">        <span class="pl-c">// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available</span></td>
      </tr>
      <tr>
        <td id="L716" class="blob-num js-line-number" data-line-number="716"></td>
        <td id="LC716" class="blob-code js-file-line">        topState<span class="pl-k">:</span><span class="pl-st">function</span> <span class="pl-en">topState</span>(<span class="pl-vpf">n</span>){n<span class="pl-k">=</span><span class="pl-v">this</span>.conditionStack.<span class="pl-sc">length</span><span class="pl-k">-</span><span class="pl-c1">1</span><span class="pl-k">-</span><span class="pl-s3">Math</span>.<span class="pl-s3">abs</span>(n<span class="pl-k">||</span><span class="pl-c1">0</span>);<span class="pl-k">if</span>(n<span class="pl-k">&gt;=</span><span class="pl-c1">0</span>){<span class="pl-k">return</span> <span class="pl-v">this</span>.conditionStack[n]}<span class="pl-k">else</span>{<span class="pl-k">return</span><span class="pl-s1"><span class="pl-pds">&quot;</span>INITIAL<span class="pl-pds">&quot;</span></span>}},</td>
      </tr>
      <tr>
        <td id="L717" class="blob-num js-line-number" data-line-number="717"></td>
        <td id="LC717" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L718" class="blob-num js-line-number" data-line-number="718"></td>
        <td id="LC718" class="blob-code js-file-line">        <span class="pl-c">// alias for begin(condition)</span></td>
      </tr>
      <tr>
        <td id="L719" class="blob-num js-line-number" data-line-number="719"></td>
        <td id="LC719" class="blob-code js-file-line">        pushState<span class="pl-k">:</span><span class="pl-st">function</span> <span class="pl-en">pushState</span>(<span class="pl-vpf">condition</span>){<span class="pl-v">this</span>.begin(condition)},</td>
      </tr>
      <tr>
        <td id="L720" class="blob-num js-line-number" data-line-number="720"></td>
        <td id="LC720" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L721" class="blob-num js-line-number" data-line-number="721"></td>
        <td id="LC721" class="blob-code js-file-line">        <span class="pl-c">// return the number of states currently on the stack</span></td>
      </tr>
      <tr>
        <td id="L722" class="blob-num js-line-number" data-line-number="722"></td>
        <td id="LC722" class="blob-code js-file-line">        stateStackSize<span class="pl-k">:</span><span class="pl-st">function</span> <span class="pl-en">stateStackSize</span>(){<span class="pl-k">return</span> <span class="pl-v">this</span>.conditionStack.<span class="pl-sc">length</span>},</td>
      </tr>
      <tr>
        <td id="L723" class="blob-num js-line-number" data-line-number="723"></td>
        <td id="LC723" class="blob-code js-file-line">        options<span class="pl-k">:</span> {<span class="pl-s1"><span class="pl-pds">&quot;</span>case-insensitive<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">true</span>},</td>
      </tr>
      <tr>
        <td id="L724" class="blob-num js-line-number" data-line-number="724"></td>
        <td id="LC724" class="blob-code js-file-line">        performAction<span class="pl-k">:</span> <span class="pl-st">function</span> <span class="pl-en">anonymous</span>(<span class="pl-vpf">yy</span>,<span class="pl-vpf">yy_</span>,<span class="pl-vpf">$avoiding_name_collisions</span>,<span class="pl-vpf">YY_START</span></td>
      </tr>
      <tr>
        <td id="L725" class="blob-num js-line-number" data-line-number="725"></td>
        <td id="LC725" class="blob-code js-file-line">        /**/) {</td>
      </tr>
      <tr>
        <td id="L726" class="blob-num js-line-number" data-line-number="726"></td>
        <td id="LC726" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L727" class="blob-num js-line-number" data-line-number="727"></td>
        <td id="LC727" class="blob-code js-file-line">          <span class="pl-s">var</span> YYSTATE<span class="pl-k">=</span>YY_START;</td>
      </tr>
      <tr>
        <td id="L728" class="blob-num js-line-number" data-line-number="728"></td>
        <td id="LC728" class="blob-code js-file-line">          <span class="pl-k">switch</span>($avoiding_name_collisions) {</td>
      </tr>
      <tr>
        <td id="L729" class="blob-num js-line-number" data-line-number="729"></td>
        <td id="LC729" class="blob-code js-file-line">            <span class="pl-k">case</span> <span class="pl-c1">0</span><span class="pl-k">:</span><span class="pl-c">/* skip whitespace */</span></td>
      </tr>
      <tr>
        <td id="L730" class="blob-num js-line-number" data-line-number="730"></td>
        <td id="LC730" class="blob-code js-file-line">              <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L731" class="blob-num js-line-number" data-line-number="731"></td>
        <td id="LC731" class="blob-code js-file-line">            <span class="pl-k">case</span> <span class="pl-c1">1</span><span class="pl-k">:</span><span class="pl-k">return</span> <span class="pl-c1">27</span></td>
      </tr>
      <tr>
        <td id="L732" class="blob-num js-line-number" data-line-number="732"></td>
        <td id="LC732" class="blob-code js-file-line">              <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L733" class="blob-num js-line-number" data-line-number="733"></td>
        <td id="LC733" class="blob-code js-file-line">            <span class="pl-k">case</span> <span class="pl-c1">2</span><span class="pl-k">:</span><span class="pl-k">return</span> <span class="pl-c1">15</span></td>
      </tr>
      <tr>
        <td id="L734" class="blob-num js-line-number" data-line-number="734"></td>
        <td id="LC734" class="blob-code js-file-line">              <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L735" class="blob-num js-line-number" data-line-number="735"></td>
        <td id="LC735" class="blob-code js-file-line">            <span class="pl-k">case</span> <span class="pl-c1">3</span><span class="pl-k">:</span><span class="pl-k">return</span> <span class="pl-c1">12</span></td>
      </tr>
      <tr>
        <td id="L736" class="blob-num js-line-number" data-line-number="736"></td>
        <td id="LC736" class="blob-code js-file-line">              <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L737" class="blob-num js-line-number" data-line-number="737"></td>
        <td id="LC737" class="blob-code js-file-line">            <span class="pl-k">case</span> <span class="pl-c1">4</span><span class="pl-k">:</span><span class="pl-k">return</span> <span class="pl-c1">36</span></td>
      </tr>
      <tr>
        <td id="L738" class="blob-num js-line-number" data-line-number="738"></td>
        <td id="LC738" class="blob-code js-file-line">              <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L739" class="blob-num js-line-number" data-line-number="739"></td>
        <td id="LC739" class="blob-code js-file-line">            <span class="pl-k">case</span> <span class="pl-c1">5</span><span class="pl-k">:</span><span class="pl-k">return</span> <span class="pl-c1">37</span></td>
      </tr>
      <tr>
        <td id="L740" class="blob-num js-line-number" data-line-number="740"></td>
        <td id="LC740" class="blob-code js-file-line">              <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L741" class="blob-num js-line-number" data-line-number="741"></td>
        <td id="LC741" class="blob-code js-file-line">            <span class="pl-k">case</span> <span class="pl-c1">6</span><span class="pl-k">:</span><span class="pl-k">return</span> <span class="pl-c1">40</span></td>
      </tr>
      <tr>
        <td id="L742" class="blob-num js-line-number" data-line-number="742"></td>
        <td id="LC742" class="blob-code js-file-line">              <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L743" class="blob-num js-line-number" data-line-number="743"></td>
        <td id="LC743" class="blob-code js-file-line">            <span class="pl-k">case</span> <span class="pl-c1">7</span><span class="pl-k">:</span><span class="pl-k">return</span> <span class="pl-c1">39</span></td>
      </tr>
      <tr>
        <td id="L744" class="blob-num js-line-number" data-line-number="744"></td>
        <td id="LC744" class="blob-code js-file-line">              <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L745" class="blob-num js-line-number" data-line-number="745"></td>
        <td id="LC745" class="blob-code js-file-line">            <span class="pl-k">case</span> <span class="pl-c1">8</span><span class="pl-k">:</span><span class="pl-k">return</span> <span class="pl-c1">42</span></td>
      </tr>
      <tr>
        <td id="L746" class="blob-num js-line-number" data-line-number="746"></td>
        <td id="LC746" class="blob-code js-file-line">              <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L747" class="blob-num js-line-number" data-line-number="747"></td>
        <td id="LC747" class="blob-code js-file-line">            <span class="pl-k">case</span> <span class="pl-c1">9</span><span class="pl-k">:</span><span class="pl-k">return</span> <span class="pl-c1">41</span></td>
      </tr>
      <tr>
        <td id="L748" class="blob-num js-line-number" data-line-number="748"></td>
        <td id="LC748" class="blob-code js-file-line">              <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L749" class="blob-num js-line-number" data-line-number="749"></td>
        <td id="LC749" class="blob-code js-file-line">            <span class="pl-k">case</span> <span class="pl-c1">10</span><span class="pl-k">:</span><span class="pl-k">return</span> <span class="pl-c1">35</span></td>
      </tr>
      <tr>
        <td id="L750" class="blob-num js-line-number" data-line-number="750"></td>
        <td id="LC750" class="blob-code js-file-line">              <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L751" class="blob-num js-line-number" data-line-number="751"></td>
        <td id="LC751" class="blob-code js-file-line">            <span class="pl-k">case</span> <span class="pl-c1">11</span><span class="pl-k">:</span><span class="pl-k">return</span> <span class="pl-c1">21</span></td>
      </tr>
      <tr>
        <td id="L752" class="blob-num js-line-number" data-line-number="752"></td>
        <td id="LC752" class="blob-code js-file-line">              <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L753" class="blob-num js-line-number" data-line-number="753"></td>
        <td id="LC753" class="blob-code js-file-line">            <span class="pl-k">case</span> <span class="pl-c1">12</span><span class="pl-k">:</span><span class="pl-k">return</span> <span class="pl-c1">23</span></td>
      </tr>
      <tr>
        <td id="L754" class="blob-num js-line-number" data-line-number="754"></td>
        <td id="LC754" class="blob-code js-file-line">              <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L755" class="blob-num js-line-number" data-line-number="755"></td>
        <td id="LC755" class="blob-code js-file-line">            <span class="pl-k">case</span> <span class="pl-c1">13</span><span class="pl-k">:</span><span class="pl-k">return</span> <span class="pl-c1">25</span></td>
      </tr>
      <tr>
        <td id="L756" class="blob-num js-line-number" data-line-number="756"></td>
        <td id="LC756" class="blob-code js-file-line">              <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L757" class="blob-num js-line-number" data-line-number="757"></td>
        <td id="LC757" class="blob-code js-file-line">            <span class="pl-k">case</span> <span class="pl-c1">14</span><span class="pl-k">:</span><span class="pl-k">return</span> <span class="pl-c1">20</span></td>
      </tr>
      <tr>
        <td id="L758" class="blob-num js-line-number" data-line-number="758"></td>
        <td id="LC758" class="blob-code js-file-line">              <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L759" class="blob-num js-line-number" data-line-number="759"></td>
        <td id="LC759" class="blob-code js-file-line">            <span class="pl-k">case</span> <span class="pl-c1">15</span><span class="pl-k">:</span><span class="pl-k">return</span> <span class="pl-c1">16</span></td>
      </tr>
      <tr>
        <td id="L760" class="blob-num js-line-number" data-line-number="760"></td>
        <td id="LC760" class="blob-code js-file-line">              <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L761" class="blob-num js-line-number" data-line-number="761"></td>
        <td id="LC761" class="blob-code js-file-line">            <span class="pl-k">case</span> <span class="pl-c1">16</span><span class="pl-k">:</span><span class="pl-k">return</span> <span class="pl-c1">17</span></td>
      </tr>
      <tr>
        <td id="L762" class="blob-num js-line-number" data-line-number="762"></td>
        <td id="LC762" class="blob-code js-file-line">              <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L763" class="blob-num js-line-number" data-line-number="763"></td>
        <td id="LC763" class="blob-code js-file-line">            <span class="pl-k">case</span> <span class="pl-c1">17</span><span class="pl-k">:</span><span class="pl-k">return</span> <span class="pl-c1">24</span></td>
      </tr>
      <tr>
        <td id="L764" class="blob-num js-line-number" data-line-number="764"></td>
        <td id="LC764" class="blob-code js-file-line">              <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L765" class="blob-num js-line-number" data-line-number="765"></td>
        <td id="LC765" class="blob-code js-file-line">            <span class="pl-k">case</span> <span class="pl-c1">18</span><span class="pl-k">:</span><span class="pl-k">return</span> <span class="pl-c1">43</span></td>
      </tr>
      <tr>
        <td id="L766" class="blob-num js-line-number" data-line-number="766"></td>
        <td id="LC766" class="blob-code js-file-line">              <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L767" class="blob-num js-line-number" data-line-number="767"></td>
        <td id="LC767" class="blob-code js-file-line">            <span class="pl-k">case</span> <span class="pl-c1">19</span><span class="pl-k">:</span><span class="pl-k">return</span> <span class="pl-c1">9</span></td>
      </tr>
      <tr>
        <td id="L768" class="blob-num js-line-number" data-line-number="768"></td>
        <td id="LC768" class="blob-code js-file-line">              <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L769" class="blob-num js-line-number" data-line-number="769"></td>
        <td id="LC769" class="blob-code js-file-line">            <span class="pl-k">case</span> <span class="pl-c1">20</span><span class="pl-k">:</span><span class="pl-k">return</span> <span class="pl-c1">10</span></td>
      </tr>
      <tr>
        <td id="L770" class="blob-num js-line-number" data-line-number="770"></td>
        <td id="LC770" class="blob-code js-file-line">              <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L771" class="blob-num js-line-number" data-line-number="771"></td>
        <td id="LC771" class="blob-code js-file-line">            <span class="pl-k">case</span> <span class="pl-c1">21</span><span class="pl-k">:</span><span class="pl-k">return</span> <span class="pl-c1">30</span></td>
      </tr>
      <tr>
        <td id="L772" class="blob-num js-line-number" data-line-number="772"></td>
        <td id="LC772" class="blob-code js-file-line">              <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L773" class="blob-num js-line-number" data-line-number="773"></td>
        <td id="LC773" class="blob-code js-file-line">            <span class="pl-k">case</span> <span class="pl-c1">22</span><span class="pl-k">:</span><span class="pl-k">return</span> <span class="pl-c1">34</span></td>
      </tr>
      <tr>
        <td id="L774" class="blob-num js-line-number" data-line-number="774"></td>
        <td id="LC774" class="blob-code js-file-line">              <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L775" class="blob-num js-line-number" data-line-number="775"></td>
        <td id="LC775" class="blob-code js-file-line">            <span class="pl-k">case</span> <span class="pl-c1">23</span><span class="pl-k">:</span><span class="pl-k">return</span> <span class="pl-c1">26</span></td>
      </tr>
      <tr>
        <td id="L776" class="blob-num js-line-number" data-line-number="776"></td>
        <td id="LC776" class="blob-code js-file-line">              <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L777" class="blob-num js-line-number" data-line-number="777"></td>
        <td id="LC777" class="blob-code js-file-line">            <span class="pl-k">case</span> <span class="pl-c1">24</span><span class="pl-k">:</span><span class="pl-k">return</span> <span class="pl-c1">32</span></td>
      </tr>
      <tr>
        <td id="L778" class="blob-num js-line-number" data-line-number="778"></td>
        <td id="LC778" class="blob-code js-file-line">              <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L779" class="blob-num js-line-number" data-line-number="779"></td>
        <td id="LC779" class="blob-code js-file-line">            <span class="pl-k">case</span> <span class="pl-c1">25</span><span class="pl-k">:</span><span class="pl-k">return</span> <span class="pl-c1">33</span></td>
      </tr>
      <tr>
        <td id="L780" class="blob-num js-line-number" data-line-number="780"></td>
        <td id="LC780" class="blob-code js-file-line">              <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L781" class="blob-num js-line-number" data-line-number="781"></td>
        <td id="LC781" class="blob-code js-file-line">            <span class="pl-k">case</span> <span class="pl-c1">26</span><span class="pl-k">:</span><span class="pl-k">return</span> <span class="pl-c1">31</span></td>
      </tr>
      <tr>
        <td id="L782" class="blob-num js-line-number" data-line-number="782"></td>
        <td id="LC782" class="blob-code js-file-line">              <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L783" class="blob-num js-line-number" data-line-number="783"></td>
        <td id="LC783" class="blob-code js-file-line">            <span class="pl-k">case</span> <span class="pl-c1">27</span><span class="pl-k">:</span><span class="pl-k">return</span> <span class="pl-c1">7</span></td>
      </tr>
      <tr>
        <td id="L784" class="blob-num js-line-number" data-line-number="784"></td>
        <td id="LC784" class="blob-code js-file-line">              <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L785" class="blob-num js-line-number" data-line-number="785"></td>
        <td id="LC785" class="blob-code js-file-line">            <span class="pl-k">case</span> <span class="pl-c1">28</span><span class="pl-k">:</span><span class="pl-k">return</span> <span class="pl-c1">5</span></td>
      </tr>
      <tr>
        <td id="L786" class="blob-num js-line-number" data-line-number="786"></td>
        <td id="LC786" class="blob-code js-file-line">              <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L787" class="blob-num js-line-number" data-line-number="787"></td>
        <td id="LC787" class="blob-code js-file-line">            <span class="pl-k">case</span> <span class="pl-c1">29</span><span class="pl-k">:</span><span class="pl-k">return</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>INVALID<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L788" class="blob-num js-line-number" data-line-number="788"></td>
        <td id="LC788" class="blob-code js-file-line">              <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L789" class="blob-num js-line-number" data-line-number="789"></td>
        <td id="LC789" class="blob-code js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L790" class="blob-num js-line-number" data-line-number="790"></td>
        <td id="LC790" class="blob-code js-file-line">        },</td>
      </tr>
      <tr>
        <td id="L791" class="blob-num js-line-number" data-line-number="791"></td>
        <td id="LC791" class="blob-code js-file-line">        rules<span class="pl-k">:</span> [<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>(?:<span class="pl-c1">\s</span><span class="pl-k">+</span>)<span class="pl-pds">/</span>i</span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>(?:BETWEEN<span class="pl-k">\b</span>)<span class="pl-pds">/</span>i</span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>(?:ORDER BY<span class="pl-k">\b</span>)<span class="pl-pds">/</span>i</span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>(?:,)<span class="pl-pds">/</span>i</span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>(?:=)<span class="pl-pds">/</span>i</span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>(?:!=)<span class="pl-pds">/</span>i</span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>(?:&gt;=)<span class="pl-pds">/</span>i</span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>(?:&gt;)<span class="pl-pds">/</span>i</span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>(?:&lt;=)<span class="pl-pds">/</span>i</span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>(?:&lt;)<span class="pl-pds">/</span>i</span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>(?:!)<span class="pl-pds">/</span>i</span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>(?:<span class="pl-cce">\(</span>)<span class="pl-pds">/</span>i</span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>(?:<span class="pl-cce">\)</span>)<span class="pl-pds">/</span>i</span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>(?:IS<span class="pl-k">\b</span>)<span class="pl-pds">/</span>i</span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>(?:IN<span class="pl-k">\b</span>)<span class="pl-pds">/</span>i</span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>(?:AND<span class="pl-k">\b</span>)<span class="pl-pds">/</span>i</span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>(?:OR<span class="pl-k">\b</span>)<span class="pl-pds">/</span>i</span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>(?:NOT<span class="pl-k">\b</span>)<span class="pl-pds">/</span>i</span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>(?:LIKE<span class="pl-k">\b</span>)<span class="pl-pds">/</span>i</span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>(?:ASC<span class="pl-k">\b</span>)<span class="pl-pds">/</span>i</span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>(?:DESC<span class="pl-k">\b</span>)<span class="pl-pds">/</span>i</span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>(?:<span class="pl-c1">[&#39;]</span>(<span class="pl-cce">\\</span><span class="pl-c1">.</span><span class="pl-k">|</span><span class="pl-c1">[<span class="pl-k">^</span>&#39;]</span>)<span class="pl-k">*</span><span class="pl-c1">[&#39;]</span>)<span class="pl-pds">/</span>i</span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>(?:<span class="pl-c1">[&#39;]</span>(<span class="pl-cce">\\</span><span class="pl-c1">.</span><span class="pl-k">|</span><span class="pl-c1">[<span class="pl-k">^</span>&#39;]</span>)<span class="pl-k">*</span>)<span class="pl-pds">/</span>i</span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>(?:NULL<span class="pl-k">\b</span>)<span class="pl-pds">/</span>i</span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>(?:true<span class="pl-k">\b</span>)<span class="pl-pds">/</span>i</span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>(?:false<span class="pl-k">\b</span>)<span class="pl-pds">/</span>i</span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>(?:<span class="pl-c1">[<span class="pl-c1">0-9</span>]</span><span class="pl-k">+</span>(<span class="pl-cce">\.</span><span class="pl-c1">[<span class="pl-c1">0-9</span>]</span><span class="pl-k">+</span>)<span class="pl-k">?</span>)<span class="pl-pds">/</span>i</span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>(?:<span class="pl-c1">[<span class="pl-c1">a-zA-Z</span>_][<span class="pl-c1">a-zA-Z0-9</span>_]</span><span class="pl-k">*</span>)<span class="pl-pds">/</span>i</span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>(?:<span class="pl-k">$</span>)<span class="pl-pds">/</span>i</span>,<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>(?:<span class="pl-c1">.</span>)<span class="pl-pds">/</span>i</span>],</td>
      </tr>
      <tr>
        <td id="L792" class="blob-num js-line-number" data-line-number="792"></td>
        <td id="LC792" class="blob-code js-file-line">        conditions<span class="pl-k">:</span> {<span class="pl-s1"><span class="pl-pds">&quot;</span>INITIAL<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>{<span class="pl-s1"><span class="pl-pds">&quot;</span>rules<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span>[<span class="pl-c1">0</span>,<span class="pl-c1">1</span>,<span class="pl-c1">2</span>,<span class="pl-c1">3</span>,<span class="pl-c1">4</span>,<span class="pl-c1">5</span>,<span class="pl-c1">6</span>,<span class="pl-c1">7</span>,<span class="pl-c1">8</span>,<span class="pl-c1">9</span>,<span class="pl-c1">10</span>,<span class="pl-c1">11</span>,<span class="pl-c1">12</span>,<span class="pl-c1">13</span>,<span class="pl-c1">14</span>,<span class="pl-c1">15</span>,<span class="pl-c1">16</span>,<span class="pl-c1">17</span>,<span class="pl-c1">18</span>,<span class="pl-c1">19</span>,<span class="pl-c1">20</span>,<span class="pl-c1">21</span>,<span class="pl-c1">22</span>,<span class="pl-c1">23</span>,<span class="pl-c1">24</span>,<span class="pl-c1">25</span>,<span class="pl-c1">26</span>,<span class="pl-c1">27</span>,<span class="pl-c1">28</span>,<span class="pl-c1">29</span>],<span class="pl-s1"><span class="pl-pds">&quot;</span>inclusive<span class="pl-pds">&quot;</span></span><span class="pl-k">:</span><span class="pl-c1">true</span>}}</td>
      </tr>
      <tr>
        <td id="L793" class="blob-num js-line-number" data-line-number="793"></td>
        <td id="LC793" class="blob-code js-file-line">      };</td>
      </tr>
      <tr>
        <td id="L794" class="blob-num js-line-number" data-line-number="794"></td>
        <td id="LC794" class="blob-code js-file-line">      <span class="pl-k">return</span> lexer;</td>
      </tr>
      <tr>
        <td id="L795" class="blob-num js-line-number" data-line-number="795"></td>
        <td id="LC795" class="blob-code js-file-line">    })();</td>
      </tr>
      <tr>
        <td id="L796" class="blob-num js-line-number" data-line-number="796"></td>
        <td id="LC796" class="blob-code js-file-line">    parser.lexer <span class="pl-k">=</span> lexer;</td>
      </tr>
      <tr>
        <td id="L797" class="blob-num js-line-number" data-line-number="797"></td>
        <td id="LC797" class="blob-code js-file-line">    <span class="pl-st">function</span> <span class="pl-en">Parser</span> () {</td>
      </tr>
      <tr>
        <td id="L798" class="blob-num js-line-number" data-line-number="798"></td>
        <td id="LC798" class="blob-code js-file-line">      <span class="pl-v">this</span>.yy <span class="pl-k">=</span> {};</td>
      </tr>
      <tr>
        <td id="L799" class="blob-num js-line-number" data-line-number="799"></td>
        <td id="LC799" class="blob-code js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L800" class="blob-num js-line-number" data-line-number="800"></td>
        <td id="LC800" class="blob-code js-file-line">    <span class="pl-s3">Parser</span>.<span class="pl-sc">prototype</span> <span class="pl-k">=</span> parser;parser.Parser <span class="pl-k">=</span> Parser;</td>
      </tr>
      <tr>
        <td id="L801" class="blob-num js-line-number" data-line-number="801"></td>
        <td id="LC801" class="blob-code js-file-line">    <span class="pl-k">return</span> <span class="pl-k">new</span> <span class="pl-en">Parser</span>;</td>
      </tr>
      <tr>
        <td id="L802" class="blob-num js-line-number" data-line-number="802"></td>
        <td id="LC802" class="blob-code js-file-line">  })();</td>
      </tr>
      <tr>
        <td id="L803" class="blob-num js-line-number" data-line-number="803"></td>
        <td id="LC803" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L804" class="blob-num js-line-number" data-line-number="804"></td>
        <td id="LC804" class="blob-code js-file-line">  <span class="pl-k">return</span> <span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L805" class="blob-num js-line-number" data-line-number="805"></td>
        <td id="LC805" class="blob-code js-file-line">    <span class="pl-s3">this</span>.<span class="pl-en">parse</span> <span class="pl-k">=</span> <span class="pl-st">function</span>(<span class="pl-vpf">query</span>) {</td>
      </tr>
      <tr>
        <td id="L806" class="blob-num js-line-number" data-line-number="806"></td>
        <td id="LC806" class="blob-code js-file-line">      <span class="pl-k">return</span> parser.<span class="pl-s3">parse</span>(query);</td>
      </tr>
      <tr>
        <td id="L807" class="blob-num js-line-number" data-line-number="807"></td>
        <td id="LC807" class="blob-code js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L808" class="blob-num js-line-number" data-line-number="808"></td>
        <td id="LC808" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L809" class="blob-num js-line-number" data-line-number="809"></td>
        <td id="LC809" class="blob-code js-file-line">    <span class="pl-s3">this</span>.<span class="pl-en">compile</span> <span class="pl-k">=</span> <span class="pl-st">function</span>(<span class="pl-vpf">queryJson</span>) {</td>
      </tr>
      <tr>
        <td id="L810" class="blob-num js-line-number" data-line-number="810"></td>
        <td id="LC810" class="blob-code js-file-line">      <span class="pl-s">var</span> <span class="pl-en">processSearchItem</span> <span class="pl-k">=</span> <span class="pl-st">function</span>(<span class="pl-vpf">searchItem</span>) {</td>
      </tr>
      <tr>
        <td id="L811" class="blob-num js-line-number" data-line-number="811"></td>
        <td id="LC811" class="blob-code js-file-line">        <span class="pl-s">var</span> searchItemQuery <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L812" class="blob-num js-line-number" data-line-number="812"></td>
        <td id="LC812" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L813" class="blob-num js-line-number" data-line-number="813"></td>
        <td id="LC813" class="blob-code js-file-line">        <span class="pl-k">if</span>(searchItem.connector) {</td>
      </tr>
      <tr>
        <td id="L814" class="blob-num js-line-number" data-line-number="814"></td>
        <td id="LC814" class="blob-code js-file-line">          searchItemQuery <span class="pl-k">+=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> searchItem.connector <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L815" class="blob-num js-line-number" data-line-number="815"></td>
        <td id="LC815" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L816" class="blob-num js-line-number" data-line-number="816"></td>
        <td id="LC816" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L817" class="blob-num js-line-number" data-line-number="817"></td>
        <td id="LC817" class="blob-code js-file-line">        <span class="pl-k">if</span>(searchItem.items) {</td>
      </tr>
      <tr>
        <td id="L818" class="blob-num js-line-number" data-line-number="818"></td>
        <td id="LC818" class="blob-code js-file-line">          searchItemQuery <span class="pl-k">+=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>(<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L819" class="blob-num js-line-number" data-line-number="819"></td>
        <td id="LC819" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L820" class="blob-num js-line-number" data-line-number="820"></td>
        <td id="LC820" class="blob-code js-file-line">          _.forEach(searchItem.items, <span class="pl-st">function</span>(<span class="pl-vpf">innerSearchItem</span>) {</td>
      </tr>
      <tr>
        <td id="L821" class="blob-num js-line-number" data-line-number="821"></td>
        <td id="LC821" class="blob-code js-file-line">            searchItemQuery <span class="pl-k">+=</span> processSearchItem(innerSearchItem);</td>
      </tr>
      <tr>
        <td id="L822" class="blob-num js-line-number" data-line-number="822"></td>
        <td id="LC822" class="blob-code js-file-line">          });</td>
      </tr>
      <tr>
        <td id="L823" class="blob-num js-line-number" data-line-number="823"></td>
        <td id="LC823" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L824" class="blob-num js-line-number" data-line-number="824"></td>
        <td id="LC824" class="blob-code js-file-line">          searchItemQuery <span class="pl-k">+=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>)<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L825" class="blob-num js-line-number" data-line-number="825"></td>
        <td id="LC825" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L826" class="blob-num js-line-number" data-line-number="826"></td>
        <td id="LC826" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L827" class="blob-num js-line-number" data-line-number="827"></td>
        <td id="LC827" class="blob-code js-file-line">        <span class="pl-k">if</span>(searchItem.field) {</td>
      </tr>
      <tr>
        <td id="L828" class="blob-num js-line-number" data-line-number="828"></td>
        <td id="LC828" class="blob-code js-file-line">          searchItemQuery <span class="pl-k">+=</span> searchItem.field <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> searchItem.comparison;</td>
      </tr>
      <tr>
        <td id="L829" class="blob-num js-line-number" data-line-number="829"></td>
        <td id="LC829" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L830" class="blob-num js-line-number" data-line-number="830"></td>
        <td id="LC830" class="blob-code js-file-line">          <span class="pl-k">if</span>(_.isArray(searchItem.<span class="pl-sc">value</span>)) {</td>
      </tr>
      <tr>
        <td id="L831" class="blob-num js-line-number" data-line-number="831"></td>
        <td id="LC831" class="blob-code js-file-line">            <span class="pl-k">if</span>(searchItem.comparison <span class="pl-k">==</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>between<span class="pl-pds">&#39;</span></span> <span class="pl-k">||</span> searchItem.comparison <span class="pl-k">==</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>not between<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L832" class="blob-num js-line-number" data-line-number="832"></td>
        <td id="LC832" class="blob-code js-file-line">              <span class="pl-k">if</span>(_.isString(searchItem.<span class="pl-sc">value</span>[<span class="pl-c1">0</span>])) {</td>
      </tr>
      <tr>
        <td id="L833" class="blob-num js-line-number" data-line-number="833"></td>
        <td id="LC833" class="blob-code js-file-line">                searchItemQuery <span class="pl-k">+=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span> &#39;<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> searchItem.<span class="pl-sc">value</span>[<span class="pl-c1">0</span>] <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>&#39; and &#39;<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> searchItem.<span class="pl-sc">value</span>[<span class="pl-c1">1</span>] <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>&#39;<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L834" class="blob-num js-line-number" data-line-number="834"></td>
        <td id="LC834" class="blob-code js-file-line">              } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L835" class="blob-num js-line-number" data-line-number="835"></td>
        <td id="LC835" class="blob-code js-file-line">                searchItemQuery <span class="pl-k">+=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> searchItem.<span class="pl-sc">value</span>[<span class="pl-c1">0</span>] <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span> and <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> searchItem.<span class="pl-sc">value</span>[<span class="pl-c1">1</span>];</td>
      </tr>
      <tr>
        <td id="L836" class="blob-num js-line-number" data-line-number="836"></td>
        <td id="LC836" class="blob-code js-file-line">              }</td>
      </tr>
      <tr>
        <td id="L837" class="blob-num js-line-number" data-line-number="837"></td>
        <td id="LC837" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L838" class="blob-num js-line-number" data-line-number="838"></td>
        <td id="LC838" class="blob-code js-file-line">            } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L839" class="blob-num js-line-number" data-line-number="839"></td>
        <td id="LC839" class="blob-code js-file-line">              searchItemQuery <span class="pl-k">+=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>(<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L840" class="blob-num js-line-number" data-line-number="840"></td>
        <td id="LC840" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L841" class="blob-num js-line-number" data-line-number="841"></td>
        <td id="LC841" class="blob-code js-file-line">              _.forEach(searchItem.<span class="pl-sc">value</span>, <span class="pl-st">function</span>(<span class="pl-vpf">value</span>, <span class="pl-vpf">key</span>) {</td>
      </tr>
      <tr>
        <td id="L842" class="blob-num js-line-number" data-line-number="842"></td>
        <td id="LC842" class="blob-code js-file-line">                <span class="pl-k">if</span>(key <span class="pl-k">&gt;</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L843" class="blob-num js-line-number" data-line-number="843"></td>
        <td id="LC843" class="blob-code js-file-line">                  searchItemQuery <span class="pl-k">+=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>, <span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L844" class="blob-num js-line-number" data-line-number="844"></td>
        <td id="LC844" class="blob-code js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L845" class="blob-num js-line-number" data-line-number="845"></td>
        <td id="LC845" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L846" class="blob-num js-line-number" data-line-number="846"></td>
        <td id="LC846" class="blob-code js-file-line">                <span class="pl-k">if</span>(_.isString(value)) {</td>
      </tr>
      <tr>
        <td id="L847" class="blob-num js-line-number" data-line-number="847"></td>
        <td id="LC847" class="blob-code js-file-line">                  searchItemQuery <span class="pl-k">+=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>&#39;<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> value <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>&#39;<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L848" class="blob-num js-line-number" data-line-number="848"></td>
        <td id="LC848" class="blob-code js-file-line">                } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L849" class="blob-num js-line-number" data-line-number="849"></td>
        <td id="LC849" class="blob-code js-file-line">                  searchItemQuery <span class="pl-k">+=</span> value;</td>
      </tr>
      <tr>
        <td id="L850" class="blob-num js-line-number" data-line-number="850"></td>
        <td id="LC850" class="blob-code js-file-line">                }</td>
      </tr>
      <tr>
        <td id="L851" class="blob-num js-line-number" data-line-number="851"></td>
        <td id="LC851" class="blob-code js-file-line">              });</td>
      </tr>
      <tr>
        <td id="L852" class="blob-num js-line-number" data-line-number="852"></td>
        <td id="LC852" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L853" class="blob-num js-line-number" data-line-number="853"></td>
        <td id="LC853" class="blob-code js-file-line">              searchItemQuery <span class="pl-k">+=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>)<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L854" class="blob-num js-line-number" data-line-number="854"></td>
        <td id="LC854" class="blob-code js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L855" class="blob-num js-line-number" data-line-number="855"></td>
        <td id="LC855" class="blob-code js-file-line">          } <span class="pl-k">else</span> <span class="pl-k">if</span>(_.isString(searchItem.<span class="pl-sc">value</span>)) {</td>
      </tr>
      <tr>
        <td id="L856" class="blob-num js-line-number" data-line-number="856"></td>
        <td id="LC856" class="blob-code js-file-line">            searchItemQuery <span class="pl-k">+=</span> <span class="pl-s1"><span class="pl-pds">&quot;</span> &#39;<span class="pl-pds">&quot;</span></span> <span class="pl-k">+</span> searchItem.<span class="pl-sc">value</span> <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&quot;</span>&#39;<span class="pl-pds">&quot;</span></span>;</td>
      </tr>
      <tr>
        <td id="L857" class="blob-num js-line-number" data-line-number="857"></td>
        <td id="LC857" class="blob-code js-file-line">          } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L858" class="blob-num js-line-number" data-line-number="858"></td>
        <td id="LC858" class="blob-code js-file-line">            searchItemQuery <span class="pl-k">+=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> searchItem.<span class="pl-sc">value</span>;</td>
      </tr>
      <tr>
        <td id="L859" class="blob-num js-line-number" data-line-number="859"></td>
        <td id="LC859" class="blob-code js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L860" class="blob-num js-line-number" data-line-number="860"></td>
        <td id="LC860" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L861" class="blob-num js-line-number" data-line-number="861"></td>
        <td id="LC861" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L862" class="blob-num js-line-number" data-line-number="862"></td>
        <td id="LC862" class="blob-code js-file-line">        <span class="pl-k">return</span> searchItemQuery;</td>
      </tr>
      <tr>
        <td id="L863" class="blob-num js-line-number" data-line-number="863"></td>
        <td id="LC863" class="blob-code js-file-line">      };</td>
      </tr>
      <tr>
        <td id="L864" class="blob-num js-line-number" data-line-number="864"></td>
        <td id="LC864" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L865" class="blob-num js-line-number" data-line-number="865"></td>
        <td id="LC865" class="blob-code js-file-line">      <span class="pl-s">var</span> query <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L866" class="blob-num js-line-number" data-line-number="866"></td>
        <td id="LC866" class="blob-code js-file-line">      <span class="pl-s">var</span> order <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L867" class="blob-num js-line-number" data-line-number="867"></td>
        <td id="LC867" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L868" class="blob-num js-line-number" data-line-number="868"></td>
        <td id="LC868" class="blob-code js-file-line">      <span class="pl-k">if</span>(_.isArray(queryJson.order)) {</td>
      </tr>
      <tr>
        <td id="L869" class="blob-num js-line-number" data-line-number="869"></td>
        <td id="LC869" class="blob-code js-file-line">        order <span class="pl-k">=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>order by<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L870" class="blob-num js-line-number" data-line-number="870"></td>
        <td id="LC870" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L871" class="blob-num js-line-number" data-line-number="871"></td>
        <td id="LC871" class="blob-code js-file-line">        <span class="pl-k">if</span>(<span class="pl-k">!</span>_.isArray(queryJson.search)) {</td>
      </tr>
      <tr>
        <td id="L872" class="blob-num js-line-number" data-line-number="872"></td>
        <td id="LC872" class="blob-code js-file-line">          <span class="pl-k">throw</span> <span class="pl-k">new</span> <span class="pl-en">Error</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>You must provide search criteria to compile a search query string<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L873" class="blob-num js-line-number" data-line-number="873"></td>
        <td id="LC873" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L874" class="blob-num js-line-number" data-line-number="874"></td>
        <td id="LC874" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L875" class="blob-num js-line-number" data-line-number="875"></td>
        <td id="LC875" class="blob-code js-file-line">        _.forEach(queryJson.search, <span class="pl-st">function</span>(<span class="pl-vpf">searchItem</span>) {</td>
      </tr>
      <tr>
        <td id="L876" class="blob-num js-line-number" data-line-number="876"></td>
        <td id="LC876" class="blob-code js-file-line">          query <span class="pl-k">+=</span> processSearchItem(searchItem);</td>
      </tr>
      <tr>
        <td id="L877" class="blob-num js-line-number" data-line-number="877"></td>
        <td id="LC877" class="blob-code js-file-line">        });</td>
      </tr>
      <tr>
        <td id="L878" class="blob-num js-line-number" data-line-number="878"></td>
        <td id="LC878" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L879" class="blob-num js-line-number" data-line-number="879"></td>
        <td id="LC879" class="blob-code js-file-line">        _.forEach(queryJson.order, <span class="pl-st">function</span>(<span class="pl-vpf">orderItem</span>, <span class="pl-vpf">key</span>) {</td>
      </tr>
      <tr>
        <td id="L880" class="blob-num js-line-number" data-line-number="880"></td>
        <td id="LC880" class="blob-code js-file-line">          <span class="pl-k">if</span>(key <span class="pl-k">&gt;</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L881" class="blob-num js-line-number" data-line-number="881"></td>
        <td id="LC881" class="blob-code js-file-line">            order <span class="pl-k">+=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>,<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L882" class="blob-num js-line-number" data-line-number="882"></td>
        <td id="LC882" class="blob-code js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L883" class="blob-num js-line-number" data-line-number="883"></td>
        <td id="LC883" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L884" class="blob-num js-line-number" data-line-number="884"></td>
        <td id="LC884" class="blob-code js-file-line">          order <span class="pl-k">+=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> orderItem.field <span class="pl-k">+</span> <span class="pl-s1"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> orderItem.way;</td>
      </tr>
      <tr>
        <td id="L885" class="blob-num js-line-number" data-line-number="885"></td>
        <td id="LC885" class="blob-code js-file-line">        });</td>
      </tr>
      <tr>
        <td id="L886" class="blob-num js-line-number" data-line-number="886"></td>
        <td id="LC886" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L887" class="blob-num js-line-number" data-line-number="887"></td>
        <td id="LC887" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L888" class="blob-num js-line-number" data-line-number="888"></td>
        <td id="LC888" class="blob-code js-file-line">      <span class="pl-k">if</span>(order.<span class="pl-sc">length</span> <span class="pl-k">&gt;</span> <span class="pl-c1">0</span>) {</td>
      </tr>
      <tr>
        <td id="L889" class="blob-num js-line-number" data-line-number="889"></td>
        <td id="LC889" class="blob-code js-file-line">        query <span class="pl-k">+=</span> <span class="pl-s1"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> order;</td>
      </tr>
      <tr>
        <td id="L890" class="blob-num js-line-number" data-line-number="890"></td>
        <td id="LC890" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L891" class="blob-num js-line-number" data-line-number="891"></td>
        <td id="LC891" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L892" class="blob-num js-line-number" data-line-number="892"></td>
        <td id="LC892" class="blob-code js-file-line">      <span class="pl-k">return</span> query;</td>
      </tr>
      <tr>
        <td id="L893" class="blob-num js-line-number" data-line-number="893"></td>
        <td id="LC893" class="blob-code js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L894" class="blob-num js-line-number" data-line-number="894"></td>
        <td id="LC894" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L895" class="blob-num js-line-number" data-line-number="895"></td>
        <td id="LC895" class="blob-code js-file-line">    <span class="pl-s">var</span> <span class="pl-en">getParseErrorObject</span> <span class="pl-k">=</span> <span class="pl-st">function</span>(<span class="pl-vpf">exception</span>) {</td>
      </tr>
      <tr>
        <td id="L896" class="blob-num js-line-number" data-line-number="896"></td>
        <td id="LC896" class="blob-code js-file-line">      <span class="pl-s">var</span> exceptionParts <span class="pl-k">=</span> exception.message.<span class="pl-s3">split</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span><span class="pl-cce">\n</span><span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L897" class="blob-num js-line-number" data-line-number="897"></td>
        <td id="LC897" class="blob-code js-file-line">      <span class="pl-k">return</span> {</td>
      </tr>
      <tr>
        <td id="L898" class="blob-num js-line-number" data-line-number="898"></td>
        <td id="LC898" class="blob-code js-file-line">        lineNumber<span class="pl-k">:</span> <span class="pl-s3">parseInt</span>(exceptionParts[<span class="pl-c1">0</span>].<span class="pl-s3">split</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span> line <span class="pl-pds">&#39;</span></span>)[<span class="pl-c1">1</span>]),</td>
      </tr>
      <tr>
        <td id="L899" class="blob-num js-line-number" data-line-number="899"></td>
        <td id="LC899" class="blob-code js-file-line">        characterNumber<span class="pl-k">:</span> exceptionParts[<span class="pl-c1">2</span>].<span class="pl-sc">length</span>,</td>
      </tr>
      <tr>
        <td id="L900" class="blob-num js-line-number" data-line-number="900"></td>
        <td id="LC900" class="blob-code js-file-line">        queryLocation<span class="pl-k">:</span> exceptionParts[<span class="pl-c1">1</span>],</td>
      </tr>
      <tr>
        <td id="L901" class="blob-num js-line-number" data-line-number="901"></td>
        <td id="LC901" class="blob-code js-file-line">        queryIndicator<span class="pl-k">:</span> exceptionParts[<span class="pl-c1">2</span>],</td>
      </tr>
      <tr>
        <td id="L902" class="blob-num js-line-number" data-line-number="902"></td>
        <td id="LC902" class="blob-code js-file-line">        error<span class="pl-k">:</span> exceptionParts[<span class="pl-c1">3</span>]</td>
      </tr>
      <tr>
        <td id="L903" class="blob-num js-line-number" data-line-number="903"></td>
        <td id="LC903" class="blob-code js-file-line">      };</td>
      </tr>
      <tr>
        <td id="L904" class="blob-num js-line-number" data-line-number="904"></td>
        <td id="LC904" class="blob-code js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L905" class="blob-num js-line-number" data-line-number="905"></td>
        <td id="LC905" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L906" class="blob-num js-line-number" data-line-number="906"></td>
        <td id="LC906" class="blob-code js-file-line">    <span class="pl-s3">this</span>.<span class="pl-en">validate</span> <span class="pl-k">=</span> <span class="pl-st">function</span>(<span class="pl-vpf">query</span>) {</td>
      </tr>
      <tr>
        <td id="L907" class="blob-num js-line-number" data-line-number="907"></td>
        <td id="LC907" class="blob-code js-file-line">      <span class="pl-k">try</span> {</td>
      </tr>
      <tr>
        <td id="L908" class="blob-num js-line-number" data-line-number="908"></td>
        <td id="LC908" class="blob-code js-file-line">        <span class="pl-v">this</span>.<span class="pl-s3">parse</span>(query);</td>
      </tr>
      <tr>
        <td id="L909" class="blob-num js-line-number" data-line-number="909"></td>
        <td id="LC909" class="blob-code js-file-line">      } <span class="pl-k">catch</span>(exception) {</td>
      </tr>
      <tr>
        <td id="L910" class="blob-num js-line-number" data-line-number="910"></td>
        <td id="LC910" class="blob-code js-file-line">        <span class="pl-k">return</span> getParseErrorObject(exception);</td>
      </tr>
      <tr>
        <td id="L911" class="blob-num js-line-number" data-line-number="911"></td>
        <td id="LC911" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L912" class="blob-num js-line-number" data-line-number="912"></td>
        <td id="LC912" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L913" class="blob-num js-line-number" data-line-number="913"></td>
        <td id="LC913" class="blob-code js-file-line">      <span class="pl-k">return</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L914" class="blob-num js-line-number" data-line-number="914"></td>
        <td id="LC914" class="blob-code js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L915" class="blob-num js-line-number" data-line-number="915"></td>
        <td id="LC915" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L916" class="blob-num js-line-number" data-line-number="916"></td>
        <td id="LC916" class="blob-code js-file-line">    <span class="pl-s3">this</span>.<span class="pl-en">getLastKnownTokenType</span> <span class="pl-k">=</span> <span class="pl-st">function</span>(<span class="pl-vpf">query</span>) {</td>
      </tr>
      <tr>
        <td id="L917" class="blob-num js-line-number" data-line-number="917"></td>
        <td id="LC917" class="blob-code js-file-line">      <span class="pl-s">var</span> <span class="pl-en">lastCharacterIsSpace</span> <span class="pl-k">=</span> <span class="pl-st">function</span>() {</td>
      </tr>
      <tr>
        <td id="L918" class="blob-num js-line-number" data-line-number="918"></td>
        <td id="LC918" class="blob-code js-file-line">        <span class="pl-k">return</span> query.<span class="pl-s3">substr</span>(query.<span class="pl-sc">length</span> <span class="pl-k">-</span> <span class="pl-c1">1</span>, <span class="pl-c1">1</span>) <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&#39;</span> <span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L919" class="blob-num js-line-number" data-line-number="919"></td>
        <td id="LC919" class="blob-code js-file-line">      };</td>
      </tr>
      <tr>
        <td id="L920" class="blob-num js-line-number" data-line-number="920"></td>
        <td id="LC920" class="blob-code js-file-line">      <span class="pl-s">var</span> <span class="pl-en">currentTokenComplete</span> <span class="pl-k">=</span> <span class="pl-st">function</span>(<span class="pl-vpf">token</span>, <span class="pl-vpf">precedingToken</span>) {</td>
      </tr>
      <tr>
        <td id="L921" class="blob-num js-line-number" data-line-number="921"></td>
        <td id="LC921" class="blob-code js-file-line">        <span class="pl-s">var</span> endsWithSpace <span class="pl-k">=</span> lastCharacterIsSpace();</td>
      </tr>
      <tr>
        <td id="L922" class="blob-num js-line-number" data-line-number="922"></td>
        <td id="LC922" class="blob-code js-file-line">        <span class="pl-k">if</span>(precedingToken.<span class="pl-sc">type</span> <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>comparison<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> precedingToken.<span class="pl-sc">value</span>.<span class="pl-s3">indexOf</span>(<span class="pl-s1"><span class="pl-pds">&#39;</span>between<span class="pl-pds">&#39;</span></span>) <span class="pl-k">!==</span> <span class="pl-k">-</span><span class="pl-c1">1</span>) {</td>
      </tr>
      <tr>
        <td id="L923" class="blob-num js-line-number" data-line-number="923"></td>
        <td id="LC923" class="blob-code js-file-line">          <span class="pl-k">if</span>(_.isArray(token.<span class="pl-sc">value</span>) <span class="pl-k">&amp;&amp;</span> token.<span class="pl-sc">value</span>.<span class="pl-sc">length</span> <span class="pl-k">===</span> <span class="pl-c1">2</span> <span class="pl-k">&amp;&amp;</span> token.<span class="pl-sc">value</span>[<span class="pl-c1">1</span>] <span class="pl-k">!==</span> <span class="pl-c1">null</span> <span class="pl-k">&amp;&amp;</span> endsWithSpace <span class="pl-k">===</span> <span class="pl-c1">true</span>) {</td>
      </tr>
      <tr>
        <td id="L924" class="blob-num js-line-number" data-line-number="924"></td>
        <td id="LC924" class="blob-code js-file-line">            <span class="pl-k">return</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L925" class="blob-num js-line-number" data-line-number="925"></td>
        <td id="LC925" class="blob-code js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L926" class="blob-num js-line-number" data-line-number="926"></td>
        <td id="LC926" class="blob-code js-file-line">        } <span class="pl-k">else</span> <span class="pl-k">if</span>(token.<span class="pl-sc">type</span> <span class="pl-k">!==</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>unknown<span class="pl-pds">&#39;</span></span> <span class="pl-k">&amp;&amp;</span> endsWithSpace <span class="pl-k">===</span> <span class="pl-c1">true</span>) {</td>
      </tr>
      <tr>
        <td id="L927" class="blob-num js-line-number" data-line-number="927"></td>
        <td id="LC927" class="blob-code js-file-line">          <span class="pl-k">return</span> <span class="pl-c1">true</span>;</td>
      </tr>
      <tr>
        <td id="L928" class="blob-num js-line-number" data-line-number="928"></td>
        <td id="LC928" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L929" class="blob-num js-line-number" data-line-number="929"></td>
        <td id="LC929" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L930" class="blob-num js-line-number" data-line-number="930"></td>
        <td id="LC930" class="blob-code js-file-line">        <span class="pl-k">return</span> <span class="pl-c1">false</span>;</td>
      </tr>
      <tr>
        <td id="L931" class="blob-num js-line-number" data-line-number="931"></td>
        <td id="LC931" class="blob-code js-file-line">      };</td>
      </tr>
      <tr>
        <td id="L932" class="blob-num js-line-number" data-line-number="932"></td>
        <td id="LC932" class="blob-code js-file-line">      <span class="pl-s">var</span> lastKnownTokenType;</td>
      </tr>
      <tr>
        <td id="L933" class="blob-num js-line-number" data-line-number="933"></td>
        <td id="LC933" class="blob-code js-file-line">      <span class="pl-s">var</span> tokens <span class="pl-k">=</span> <span class="pl-v">this</span>.getTokenList(query);</td>
      </tr>
      <tr>
        <td id="L934" class="blob-num js-line-number" data-line-number="934"></td>
        <td id="LC934" class="blob-code js-file-line">      <span class="pl-c">//var lastCharacter = query.substr(query.length - 1, 1);</span></td>
      </tr>
      <tr>
        <td id="L935" class="blob-num js-line-number" data-line-number="935"></td>
        <td id="LC935" class="blob-code js-file-line">      <span class="pl-s">var</span> returnIndex <span class="pl-k">=</span> tokens.<span class="pl-sc">length</span> <span class="pl-k">-</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L936" class="blob-num js-line-number" data-line-number="936"></td>
        <td id="LC936" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L937" class="blob-num js-line-number" data-line-number="937"></td>
        <td id="LC937" class="blob-code js-file-line">      <span class="pl-k">if</span>(tokens.<span class="pl-sc">length</span> <span class="pl-k">&gt;</span> <span class="pl-c1">1</span> <span class="pl-k">||</span> lastCharacterIsSpace()) {</td>
      </tr>
      <tr>
        <td id="L938" class="blob-num js-line-number" data-line-number="938"></td>
        <td id="LC938" class="blob-code js-file-line">        <span class="pl-k">if</span>((tokens.<span class="pl-sc">length</span> <span class="pl-k">&lt;</span> <span class="pl-c1">2</span> <span class="pl-k">&amp;&amp;</span> lastCharacterIsSpace() <span class="pl-k">!==</span> <span class="pl-c1">true</span>) <span class="pl-k">||</span> (tokens.<span class="pl-sc">length</span> <span class="pl-k">&gt;</span> <span class="pl-c1">1</span> <span class="pl-k">&amp;&amp;</span> currentTokenComplete(tokens[returnIndex], tokens[returnIndex <span class="pl-k">-</span> <span class="pl-c1">1</span>]) <span class="pl-k">!==</span> <span class="pl-c1">true</span>)) {</td>
      </tr>
      <tr>
        <td id="L939" class="blob-num js-line-number" data-line-number="939"></td>
        <td id="LC939" class="blob-code js-file-line">          returnIndex <span class="pl-k">-=</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L940" class="blob-num js-line-number" data-line-number="940"></td>
        <td id="LC940" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L941" class="blob-num js-line-number" data-line-number="941"></td>
        <td id="LC941" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L942" class="blob-num js-line-number" data-line-number="942"></td>
        <td id="LC942" class="blob-code js-file-line">        <span class="pl-k">if</span>(tokens[returnIndex]) {</td>
      </tr>
      <tr>
        <td id="L943" class="blob-num js-line-number" data-line-number="943"></td>
        <td id="LC943" class="blob-code js-file-line">          lastKnownTokenType <span class="pl-k">=</span> tokens[returnIndex].<span class="pl-sc">type</span>;</td>
      </tr>
      <tr>
        <td id="L944" class="blob-num js-line-number" data-line-number="944"></td>
        <td id="LC944" class="blob-code js-file-line">        } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L945" class="blob-num js-line-number" data-line-number="945"></td>
        <td id="LC945" class="blob-code js-file-line">          lastKnownTokenType <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L946" class="blob-num js-line-number" data-line-number="946"></td>
        <td id="LC946" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L947" class="blob-num js-line-number" data-line-number="947"></td>
        <td id="LC947" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L948" class="blob-num js-line-number" data-line-number="948"></td>
        <td id="LC948" class="blob-code js-file-line">        <span class="pl-k">while</span>(lastKnownTokenType <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>unknown<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L949" class="blob-num js-line-number" data-line-number="949"></td>
        <td id="LC949" class="blob-code js-file-line">          returnIndex <span class="pl-k">-=</span> <span class="pl-c1">1</span>;</td>
      </tr>
      <tr>
        <td id="L950" class="blob-num js-line-number" data-line-number="950"></td>
        <td id="LC950" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L951" class="blob-num js-line-number" data-line-number="951"></td>
        <td id="LC951" class="blob-code js-file-line">          <span class="pl-k">if</span>(tokens[returnIndex]) {</td>
      </tr>
      <tr>
        <td id="L952" class="blob-num js-line-number" data-line-number="952"></td>
        <td id="LC952" class="blob-code js-file-line">            lastKnownTokenType <span class="pl-k">=</span> tokens[returnIndex].<span class="pl-sc">type</span>;</td>
      </tr>
      <tr>
        <td id="L953" class="blob-num js-line-number" data-line-number="953"></td>
        <td id="LC953" class="blob-code js-file-line">          } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L954" class="blob-num js-line-number" data-line-number="954"></td>
        <td id="LC954" class="blob-code js-file-line">            lastKnownTokenType <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L955" class="blob-num js-line-number" data-line-number="955"></td>
        <td id="LC955" class="blob-code js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L956" class="blob-num js-line-number" data-line-number="956"></td>
        <td id="LC956" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L957" class="blob-num js-line-number" data-line-number="957"></td>
        <td id="LC957" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L958" class="blob-num js-line-number" data-line-number="958"></td>
        <td id="LC958" class="blob-code js-file-line">        <span class="pl-k">if</span>(lastKnownTokenType <span class="pl-k">===</span> <span class="pl-s1"><span class="pl-pds">&#39;</span>unknown<span class="pl-pds">&#39;</span></span>) {</td>
      </tr>
      <tr>
        <td id="L959" class="blob-num js-line-number" data-line-number="959"></td>
        <td id="LC959" class="blob-code js-file-line">          lastKnownTokenType <span class="pl-k">=</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L960" class="blob-num js-line-number" data-line-number="960"></td>
        <td id="LC960" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L961" class="blob-num js-line-number" data-line-number="961"></td>
        <td id="LC961" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L962" class="blob-num js-line-number" data-line-number="962"></td>
        <td id="LC962" class="blob-code js-file-line">        <span class="pl-k">return</span> lastKnownTokenType;</td>
      </tr>
      <tr>
        <td id="L963" class="blob-num js-line-number" data-line-number="963"></td>
        <td id="LC963" class="blob-code js-file-line">      } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L964" class="blob-num js-line-number" data-line-number="964"></td>
        <td id="LC964" class="blob-code js-file-line">        <span class="pl-k">return</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L965" class="blob-num js-line-number" data-line-number="965"></td>
        <td id="LC965" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L966" class="blob-num js-line-number" data-line-number="966"></td>
        <td id="LC966" class="blob-code js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L967" class="blob-num js-line-number" data-line-number="967"></td>
        <td id="LC967" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L968" class="blob-num js-line-number" data-line-number="968"></td>
        <td id="LC968" class="blob-code js-file-line">    <span class="pl-s3">this</span>.<span class="pl-en">getTokenList</span> <span class="pl-k">=</span> <span class="pl-st">function</span>(<span class="pl-vpf">query</span>) {</td>
      </tr>
      <tr>
        <td id="L969" class="blob-num js-line-number" data-line-number="969"></td>
        <td id="LC969" class="blob-code js-file-line">      <span class="pl-k">try</span> {</td>
      </tr>
      <tr>
        <td id="L970" class="blob-num js-line-number" data-line-number="970"></td>
        <td id="LC970" class="blob-code js-file-line">        <span class="pl-k">if</span>(<span class="pl-k">!</span>query) {</td>
      </tr>
      <tr>
        <td id="L971" class="blob-num js-line-number" data-line-number="971"></td>
        <td id="LC971" class="blob-code js-file-line">          <span class="pl-k">return</span> [];</td>
      </tr>
      <tr>
        <td id="L972" class="blob-num js-line-number" data-line-number="972"></td>
        <td id="LC972" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L973" class="blob-num js-line-number" data-line-number="973"></td>
        <td id="LC973" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L974" class="blob-num js-line-number" data-line-number="974"></td>
        <td id="LC974" class="blob-code js-file-line">        <span class="pl-k">return</span> tokenizer.<span class="pl-s3">parse</span>(query);</td>
      </tr>
      <tr>
        <td id="L975" class="blob-num js-line-number" data-line-number="975"></td>
        <td id="LC975" class="blob-code js-file-line">      } <span class="pl-k">catch</span>(exception) {</td>
      </tr>
      <tr>
        <td id="L976" class="blob-num js-line-number" data-line-number="976"></td>
        <td id="LC976" class="blob-code js-file-line">        <span class="pl-k">try</span> {</td>
      </tr>
      <tr>
        <td id="L977" class="blob-num js-line-number" data-line-number="977"></td>
        <td id="LC977" class="blob-code js-file-line">          <span class="pl-s">var</span> errorObject <span class="pl-k">=</span> getParseErrorObject(exception);</td>
      </tr>
      <tr>
        <td id="L978" class="blob-num js-line-number" data-line-number="978"></td>
        <td id="LC978" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L979" class="blob-num js-line-number" data-line-number="979"></td>
        <td id="LC979" class="blob-code js-file-line">          <span class="pl-k">return</span> tokenizer.<span class="pl-s3">parse</span>(query.<span class="pl-s3">substr</span>(<span class="pl-c1">0</span>, ((errorObject.lineNumber <span class="pl-k">-</span> <span class="pl-c1">1</span>) <span class="pl-k">+</span> errorObject.characterNumber) <span class="pl-k">-</span> <span class="pl-c1">1</span>));</td>
      </tr>
      <tr>
        <td id="L980" class="blob-num js-line-number" data-line-number="980"></td>
        <td id="LC980" class="blob-code js-file-line">        } <span class="pl-k">catch</span>(exception) {</td>
      </tr>
      <tr>
        <td id="L981" class="blob-num js-line-number" data-line-number="981"></td>
        <td id="LC981" class="blob-code js-file-line">          <span class="pl-k">return</span> [];</td>
      </tr>
      <tr>
        <td id="L982" class="blob-num js-line-number" data-line-number="982"></td>
        <td id="LC982" class="blob-code js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L983" class="blob-num js-line-number" data-line-number="983"></td>
        <td id="LC983" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L984" class="blob-num js-line-number" data-line-number="984"></td>
        <td id="LC984" class="blob-code js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L985" class="blob-num js-line-number" data-line-number="985"></td>
        <td id="LC985" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L986" class="blob-num js-line-number" data-line-number="986"></td>
        <td id="LC986" class="blob-code js-file-line">    <span class="pl-s3">this</span>.<span class="pl-en">getLastTokenByType</span> <span class="pl-k">=</span> <span class="pl-st">function</span>(<span class="pl-vpf">query</span>, <span class="pl-vpf">types</span>) {</td>
      </tr>
      <tr>
        <td id="L987" class="blob-num js-line-number" data-line-number="987"></td>
        <td id="LC987" class="blob-code js-file-line">      <span class="pl-s">var</span> countDown;</td>
      </tr>
      <tr>
        <td id="L988" class="blob-num js-line-number" data-line-number="988"></td>
        <td id="LC988" class="blob-code js-file-line">      <span class="pl-s">var</span> lastInstanceOfType;</td>
      </tr>
      <tr>
        <td id="L989" class="blob-num js-line-number" data-line-number="989"></td>
        <td id="LC989" class="blob-code js-file-line">      <span class="pl-s">var</span> tokenList <span class="pl-k">=</span> <span class="pl-v">this</span>.getTokenList(query);</td>
      </tr>
      <tr>
        <td id="L990" class="blob-num js-line-number" data-line-number="990"></td>
        <td id="LC990" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L991" class="blob-num js-line-number" data-line-number="991"></td>
        <td id="LC991" class="blob-code js-file-line">      <span class="pl-k">if</span>(<span class="pl-k">!</span>_.isArray(types)) {</td>
      </tr>
      <tr>
        <td id="L992" class="blob-num js-line-number" data-line-number="992"></td>
        <td id="LC992" class="blob-code js-file-line">        types <span class="pl-k">=</span> [types];</td>
      </tr>
      <tr>
        <td id="L993" class="blob-num js-line-number" data-line-number="993"></td>
        <td id="LC993" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L994" class="blob-num js-line-number" data-line-number="994"></td>
        <td id="LC994" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L995" class="blob-num js-line-number" data-line-number="995"></td>
        <td id="LC995" class="blob-code js-file-line">      types.forEach(<span class="pl-st">function</span>(<span class="pl-vpf">type</span>) {</td>
      </tr>
      <tr>
        <td id="L996" class="blob-num js-line-number" data-line-number="996"></td>
        <td id="LC996" class="blob-code js-file-line">          <span class="pl-k">if</span>(lastInstanceOfType <span class="pl-k">===</span> <span class="pl-c1">undefined</span>) {</td>
      </tr>
      <tr>
        <td id="L997" class="blob-num js-line-number" data-line-number="997"></td>
        <td id="LC997" class="blob-code js-file-line">              <span class="pl-k">for</span>(countDown <span class="pl-k">=</span> tokenList.<span class="pl-sc">length</span> <span class="pl-k">-</span> <span class="pl-c1">1</span>; countDown <span class="pl-k">&gt;=</span> <span class="pl-c1">0</span>; countDown <span class="pl-k">-=</span> <span class="pl-c1">1</span>) {</td>
      </tr>
      <tr>
        <td id="L998" class="blob-num js-line-number" data-line-number="998"></td>
        <td id="LC998" class="blob-code js-file-line">                  <span class="pl-k">if</span>(tokenList[countDown].<span class="pl-sc">type</span> <span class="pl-k">===</span> type) {</td>
      </tr>
      <tr>
        <td id="L999" class="blob-num js-line-number" data-line-number="999"></td>
        <td id="LC999" class="blob-code js-file-line">                      lastInstanceOfType <span class="pl-k">=</span> tokenList[countDown];</td>
      </tr>
      <tr>
        <td id="L1000" class="blob-num js-line-number" data-line-number="1000"></td>
        <td id="LC1000" class="blob-code js-file-line">                      <span class="pl-k">break</span>;</td>
      </tr>
      <tr>
        <td id="L1001" class="blob-num js-line-number" data-line-number="1001"></td>
        <td id="LC1001" class="blob-code js-file-line">                  }</td>
      </tr>
      <tr>
        <td id="L1002" class="blob-num js-line-number" data-line-number="1002"></td>
        <td id="LC1002" class="blob-code js-file-line">              }</td>
      </tr>
      <tr>
        <td id="L1003" class="blob-num js-line-number" data-line-number="1003"></td>
        <td id="LC1003" class="blob-code js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L1004" class="blob-num js-line-number" data-line-number="1004"></td>
        <td id="LC1004" class="blob-code js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L1005" class="blob-num js-line-number" data-line-number="1005"></td>
        <td id="LC1005" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1006" class="blob-num js-line-number" data-line-number="1006"></td>
        <td id="LC1006" class="blob-code js-file-line">      <span class="pl-k">return</span> lastInstanceOfType;</td>
      </tr>
      <tr>
        <td id="L1007" class="blob-num js-line-number" data-line-number="1007"></td>
        <td id="LC1007" class="blob-code js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L1008" class="blob-num js-line-number" data-line-number="1008"></td>
        <td id="LC1008" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1009" class="blob-num js-line-number" data-line-number="1009"></td>
        <td id="LC1009" class="blob-code js-file-line">    <span class="pl-s3">this</span>.<span class="pl-en">getPreviousTokenByIndex</span> <span class="pl-k">=</span> <span class="pl-st">function</span>(<span class="pl-vpf">query</span>, <span class="pl-vpf">index</span>) {</td>
      </tr>
      <tr>
        <td id="L1010" class="blob-num js-line-number" data-line-number="1010"></td>
        <td id="LC1010" class="blob-code js-file-line">      <span class="pl-s">var</span> tokenList <span class="pl-k">=</span> <span class="pl-v">this</span>.getTokenList(query);</td>
      </tr>
      <tr>
        <td id="L1011" class="blob-num js-line-number" data-line-number="1011"></td>
        <td id="LC1011" class="blob-code js-file-line">      index <span class="pl-k">=</span> tokenList.<span class="pl-sc">length</span> <span class="pl-k">-</span> (<span class="pl-c1">1</span> <span class="pl-k">+</span> index);</td>
      </tr>
      <tr>
        <td id="L1012" class="blob-num js-line-number" data-line-number="1012"></td>
        <td id="LC1012" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1013" class="blob-num js-line-number" data-line-number="1013"></td>
        <td id="LC1013" class="blob-code js-file-line">      <span class="pl-k">if</span>(tokenList[index]) {</td>
      </tr>
      <tr>
        <td id="L1014" class="blob-num js-line-number" data-line-number="1014"></td>
        <td id="LC1014" class="blob-code js-file-line">        <span class="pl-k">return</span> tokenList[index];</td>
      </tr>
      <tr>
        <td id="L1015" class="blob-num js-line-number" data-line-number="1015"></td>
        <td id="LC1015" class="blob-code js-file-line">      } <span class="pl-k">else</span> {</td>
      </tr>
      <tr>
        <td id="L1016" class="blob-num js-line-number" data-line-number="1016"></td>
        <td id="LC1016" class="blob-code js-file-line">        <span class="pl-k">return</span> <span class="pl-c1">null</span>;</td>
      </tr>
      <tr>
        <td id="L1017" class="blob-num js-line-number" data-line-number="1017"></td>
        <td id="LC1017" class="blob-code js-file-line">      }</td>
      </tr>
      <tr>
        <td id="L1018" class="blob-num js-line-number" data-line-number="1018"></td>
        <td id="LC1018" class="blob-code js-file-line">    };</td>
      </tr>
      <tr>
        <td id="L1019" class="blob-num js-line-number" data-line-number="1019"></td>
        <td id="LC1019" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L1020" class="blob-num js-line-number" data-line-number="1020"></td>
        <td id="LC1020" class="blob-code js-file-line">    <span class="pl-k">return</span> <span class="pl-v">this</span>;</td>
      </tr>
      <tr>
        <td id="L1021" class="blob-num js-line-number" data-line-number="1021"></td>
        <td id="LC1021" class="blob-code js-file-line">  };</td>
      </tr>
      <tr>
        <td id="L1022" class="blob-num js-line-number" data-line-number="1022"></td>
        <td id="LC1022" class="blob-code js-file-line">}());</td>
      </tr>
</table>

  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="https://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.09661s from github-fe139-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-suggester-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents" placeholder=""></textarea>
      <div class="suggester-container">
        <div class="suggester fullscreen-suggester js-suggester js-navigation-container"></div>
      </div>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x flash-close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-153d6254b838872c8db73c8bd92905913f6f5b2164b7e40e5292286bd5a39403.js" type="text/javascript"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-341533e826e8eda6352720e2a6edded2591cc74f9a9a250fc1f9f2ded364ebee.js" type="text/javascript"></script>
      
      
  </body>
</html>

