export default class Post {
    constructor(title, image) {
        this.title = title;
        this.date = new Date();
        this.image = image;
    }
    toString () {
        return JSON.stringify({
            title: this.title,
            date: this.date.toJSON,
            image: this.image,
        })
    }
    get upperCaseTitle(){
        return this.title.toUpperCase();
    }
}
