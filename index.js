var Wiki = require('./model/wiki.js');
var wiki = new Wiki("root");
document.write(wiki.getPage("IndexDocument"));
