import ModelDoor from '../model/door';
import Gift from './Gift';

import styles from '../styles/Door.module.css';

interface propsDoor {
    value: ModelDoor
    onChange: (newDoor: ModelDoor) => void
}

export default function Door(props: propsDoor) {
    const door = props.value;
    const selected = door.selected && !door.opened ? styles.selected : '';

    const toggleSelection = () => props.onChange(door.toggleSelection());
    const open = e => {
        e.stopPropagation();
        props.onChange(door.open());
    }

    function renderDoor() {
        return (
            <div className={styles.door}>
                <div className={styles.number}>{door.number}</div>
                <div className={styles.handle} onClick={open}></div>
            </div>
        );
    }

    return (
        <div className={styles.area} onClick={toggleSelection}>
            <div className={`${styles.frame} ${selected}`}>
                {
                    door.closed ? 
                    renderDoor() : door.gift ? <Gift /> : false
                }
            </div>
            <div className={styles.floor}></div>
        </div>
    );
}