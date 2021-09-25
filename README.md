Adding embedded html5 video to hexo
<pre>
Steps to use:
1. Install hexo and create a blog called "blog": hexo init blog
2. Create a folder called "vid" inside source the source folder.
|->blog 
|   |
|   |->source
        |-> vid
        |-> _posts
3. Install via npm: npm install hexo-tag-html5video
4. Inside blog/_config.yml file add the following line:
plugin:[hexo-tag-html5video]
5. Download and save the video from https://github.com/phisonk/lab4/blob/master/big-buck-bunny_trailer.webm
6. Move the webm to the vid folder you created in source->vid
7. Add the following text to your page:
{% html5video 50% 200px video/webm %} /vid/big-buck-bunny_trailer.webm {% endhtml5video %}
or
{% html5video %} vid/big-buck-bunny_trailer.webm {% endhtml5video %}
8. hexo generate
9. hexo server
10. Goto http://localhost:4000 in browser.
<pre>
