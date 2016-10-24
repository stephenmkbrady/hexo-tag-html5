var fs = require('hexo-fs');
var pathFn = require('path');

hexo.extend.tag.register('html5video', function(args, content){
  var filename = content;  
  var width = args[0] || '100%',
      height = args[1] || '250px',
      codec = args[2] || 'video/webm';
     
  return "<video width=" + "'" + width + "'" + " height=" + "'" + height + "'" + " controls>" + "<source src=" + "'" + filename + "'" + " type=" + codec +">"+" Your browser does not support the webm tag."+"</video>";
}, {ends: true});
