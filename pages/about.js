import styles from '@/styles/About.module.css'
import data from '../data/employee.json'
import { useState } from 'react'
import Text from '@/components/Text'
import Link from 'next/link'
export default function About() {

    console.log(data);
    const [information, setInformation] = useState([...data])
    return (
        <>
            <h1>Minecraft Institute of Technology</h1>
            <div className={styles.nav}>
                <Link href="/">Home</Link>
                <Link href="about">About</Link>
            </div>

            <main className={styles.about}>

                {
                    information && information.map((info, index) => {
                        if (info.employer.toLowerCase() === "minecraft") {
                            return (
                                <Text key={index} name={info.name} />
                            )

                        }
                    })
                }


            </main>
        </>
    )
}