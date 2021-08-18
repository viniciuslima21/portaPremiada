import { useEffect, useState } from 'react';
import Door from '../../../components/Door';
import { createDoors, refreshDoors } from '../../../functions/doors';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';

import styles from '../../../styles/Game.module.css';

export default function Game() {
    const router = useRouter();
    const [doors, setDoors] = useState([]);

    function getRouter() {
        let qtdDoors = +router.query.doors > 0 ? +router.query.doors : 5;
        let random = Math.floor(Math.random() * qtdDoors) + 1;
        let hasGift = router.query.gift == "random" ? random : 
        +router.query.gift > 0 && +router.query.gift <= qtdDoors ? +router.query.gift : random;

        const finalRouter = {
            'qtdDoors': qtdDoors,
            'hasGift': hasGift
        }

        return finalRouter;
    }

    useEffect(() => {
        const rout = getRouter();

        setDoors(createDoors(rout['qtdDoors'], rout['hasGift']));
    }, [router?.query])
    
    function restartGame() {
        const rout = getRouter();

        setDoors(createDoors(rout['qtdDoors'], rout['hasGift']));
    }

    function renderDoors() {
        return doors.map(door => {
            return <Door key={door.number} value={door} onChange={newDoor => setDoors(refreshDoors(doors, newDoor))} />
        })
    }

    return (
        <div>
            <Head>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="shortcut icon" href="../../favicon.png" type="image/x-icon" />
                <title>Porta premiada</title>
            </Head>
            <div id={styles.game} >
                <div className={styles.doors} >
                    {renderDoors()}
                </div>
                <div className={styles.buttons} >
                    <button className={styles.restart} onClick={() => restartGame()}>Reiniciar jogo</button>
                    
                    <Link href="/">
                        <button className={styles.backToLobby} >Voltar para o lobby</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}