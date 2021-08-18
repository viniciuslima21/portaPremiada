import ModelDoor from '../model/door';

export function createDoors(qtd: number, doorWithGift: number): ModelDoor[] {
    return Array.from({ length: qtd }, (_, i) => {
        const num = i + 1;
        const gift = num === doorWithGift;
        return new ModelDoor(num, gift)
    })
}

export function refreshDoors(doors: ModelDoor[], modifiedDoor: ModelDoor): ModelDoor[] {
    return doors.map(currentDoor => {
        const sameModified = currentDoor.number === modifiedDoor.number;

        if (sameModified) {
            return modifiedDoor;
        } else {
            return modifiedDoor.opened ? currentDoor : currentDoor.unselect();
        }
    })
}