//Appends scripts in order given when document is ready


    function writeScriptTags(){
    let scripts = ['seeds.js', 'index.js', 'tweetObj.js', 'config.js']

    scripts.forEach(function(script){
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = script;
    $("head").append(s);
  })
  }

writeScriptTags();
