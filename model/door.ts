export default class ModelDoor {
    #number: number
    #gift: boolean
    #selected: boolean
    #opened: boolean

    constructor(number: number, gift = false, selected = false, opened = false) {
        this.#number = number;
        this.#gift = gift;
        this.#selected = selected;
        this.#opened = opened;
    }

    get number() {
        return this.#number;
    }

    get gift() {
        return this.#gift;
    }
    
    get selected() {
        return this.#selected;
    }
    
    get opened() {
        return this.#opened;
    }
    
    get closed() {
        return !this.opened;
    }

    unselect() {
        const selected = false;
        return new ModelDoor(this.number, this.gift, selected, this.opened);
    }

    toggleSelection() {
        const selected = !this.selected;
        return new ModelDoor(this.number, this.gift, selected, this.opened);
    }
    
    open() {
        const open = true;
        return new ModelDoor(this.number, this.gift, this.selected, open);
    }
}