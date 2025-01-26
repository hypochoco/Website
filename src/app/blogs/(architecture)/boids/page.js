import styles from '../../blogs.module.css'
import Image from 'next/image'
export default function Blog(){return(<div className={styles.blog}><div className={styles.body}><div className={styles.title}><h2 className={styles.title__text}>Boids</h2><p className={styles.title__info}>by Daniel Cho | Jan. 9, 2025</p></div><p>something something something...</p><div><Image src='/blogs/architecture/boids.webp' alt='final boids rendering' width={0} height={0} sizes='100vw' style={{ width: '100%', height: 'auto', marginTop: '1em' }} /><p className={styles.caption}>final boids rendering</p></div></div></div>)}