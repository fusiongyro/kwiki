class Wiki {
    constructor(directory) {
        this.directory = directory;
    }

    getPage(title) {
        return Wiki.convertWikiText(`Reading ${title} from ${this.directory}`);
    }

    writePage(title, content) {
        return `Writing ${title} to ${this.directory} with ${content.length} bytes`;
    }

    static convertWikiText(text) {
        return text.replace(/(([A-Z][a-z0-9_]*){2,})/, "<a href=\"$&\">$&</a>");
    }
}

module.exports = Wiki;