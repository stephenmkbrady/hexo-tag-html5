Adding embedded html5 video to hexo

{% html5video %} 
{% asset_path big-buck-bunny_trailer.webm %}
{% endhtml5video %} 

Usage:
With no args, the defaults are used:
width = '100%'
height = '250px'
codec = 'video/webm'

{% html5video %} 
{% asset_path big-buck-bunny_trailer.webm %}
{% endhtml5video %} 

or with args:

{% html5video '100%' '250px' 'video/mp4' %} 
{% asset_path big-buck-bunny_trailer.webm %}
{% endhtml5video %} 

Add hexo-tag-html5 to your _config.yml file including all the other packages you're using. (Once you include one, you will need to include them all, grab the list from you package.json)

Example:
plugins: [hexo-tag-html5, 
          hexo-deployer-git,  
          hexo-server, 
          hexo-generator-index, 
          hexo-generator-archive, 
          hexo-generator-category,
          hexo-generator-json-content,
          hexo-generator-tag,
          hexo-renderer-ejs,
          hexo-renderer-marked,
          hexo-renderer-stylus,
          hexo-tag-bootstrap,
          hexo-tag-fontawesome,
          hexo-tag-leaflet]
