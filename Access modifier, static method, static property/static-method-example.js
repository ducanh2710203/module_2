class Instructor  {
    constructor({ name, role = "assistant" } = {}) {
        this.role = role;
        this.name = name;
    }
}