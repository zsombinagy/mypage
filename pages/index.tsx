import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.sass'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.name_container}>
        <div className={styles.image}><img src="/profile.jpg" alt="hello" /></div>
        <div className={styles.name}> Zsombor Nagy</div>        
      </div>
      <div className={styles.knowledge}>HTML - CSS - Typscript - React</div>
      <div className={styles.about_me}> I am a 18 year old high school student from Hungary. I started programming 2 years ago. Of course I still have a lot to learn, but I think with hard work everything is available. </div>
      <div className={styles.contact_with_me}>
        <div className={styles.social_media}>
          <ul>
            <li><Link href="https://www.facebook.com/zsombi.nagy.92" ><img src="facebook-brands.svg" alt="facebook" /></Link></li>
            <li><Link href="https://github.com/zsombinagy" ><img src="github-square-brands.svg" alt="github" /></Link></li>
            <li><Link href="https://www.instagram.com/zsombi.nagy/" ><img src="instagram-square-brands.svg" alt="instagram" /></Link></li>
            <li><Link href="https://twitter.com/Zsombor27173863" ><img src="twitter-square-brands.svg" alt="twitter" /></Link></li>
          </ul>
        </div>
        <div className={styles.contact}> zsombinagy.14@gmail.com <br /> +36 30 374 6341</div>
      </div>
    </div>
  )
}

export default Home
