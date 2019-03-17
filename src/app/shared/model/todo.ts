export class Todo {

    text: string;
    done: boolean;

    constructor(text: string, done: boolean) {
        this.text = text;
        this.done = done;
    }

    stringify(): string {
        let v = { 'text': this.text, 'done': this.done };
        return JSON.stringify(v);
    }
}
