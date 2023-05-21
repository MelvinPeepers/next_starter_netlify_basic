import Image from 'next/image'
import styles from './page.module.css'

export default function Images() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Images
        </p>
        <div>
            <Image
              src="/logo-netlify.svg"
              alt="Netlify Logo"
              className={styles.netlifyLogo}
              width={190}
              height={95}
              priority
            />
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/brooklyn-bridge.jpg"
          alt="Photo of the Brooklyn Bridge"
          width={580}
          height={240}
          priority
        />
      </div>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/goethals-bridge.jpg"
          alt="Photo of the Goethals Bridge in NY"
          width={580}
          height={240}
          priority
        />
      </div>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/verrazzano-narrows-bridge.jpg"
          alt="Photo of the Verrazzano Narrows Bridge between Staten Island and Manhattan"
          width={580}
          height={240}
          priority
        />
      </div>

    </main>
  )
}
