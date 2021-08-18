import { useState } from 'react';
import Gift from './Gift';
import Link from 'next/link';

import styles from '../styles/Start.module.css';

interface StartProps {
    title: string
}

export default function Start(props: StartProps) {
    const [doors, setDoors] = useState(5);
    const [gift, setGift] = useState(1);

    return (
        <div className={styles.background}>
            <div className={styles.cardFrame}>
                <div className={styles.card}>
                    {/* Decoração com presentes */}
                    <div className={styles.giftOne}>
                        <Gift></Gift>
                    </div>
                    <div className={styles.giftTwo}>
                        <Gift></Gift>
                    </div>
                    {/* Card */}
                    <div className={styles.cardContent}>
                        <h1 className={styles.text}>{props.title}</h1>
                        <p className={styles.text}>
                            Escolha a quantidade de portas e em qual porta o presente deve aparecer. 
                            Use o modo <i>tela cheia</i>(F11) para melhor experiência.
                        </p>
                        <div className={styles.controls}>
                            {/* Quantidade de portas */}
                            <div className={styles.control}>
                                <h3>Quantidade de portas</h3>
                                <input className={styles.input} type="number" value={doors} readOnly />
                                <div>
                                    <div 
                                        className={styles.up} 
                                        onClick={() => setDoors(doors + 1)}>
                                        +
                                    </div>
                                    <div 
                                        className={styles.down} 
                                        onClick={() => doors >= 1 && gift < doors ? setDoors(doors - 1) : false}>
                                        -
                                    </div>
                                </div>
                            </div>
                            {/* Presente */}
                            <div className={styles.control}>
                                <h3>Porta com presente</h3>
                                <input className={styles.input} type="number" value={gift} readOnly />
                                <div>
                                    <div 
                                        className={styles.up} 
                                        onClick={() => gift > 0 && gift < doors ? setGift(gift + 1) : false}>
                                        +
                                    </div>
                                    <div 
                                        className={styles.down} 
                                        onClick={() => gift > 1 && gift <= doors ? setGift(gift - 1) : false}>
                                        -
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Botões */}
                        <Link href={`/game/${doors}/${gift}`}>
                            <button className={styles.normal}>Porta escolhida</button>
                        </Link>
                        <Link href={`/game/${doors}/random`}>
                            <button className={styles.random}>Porta aleatória</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}