import React from 'react'
import Image from 'next/image'
import styles from '../page.module.css'

const page = () => {
  return (
    <main className={styles.main}>
        <div>
            <h1>
            Contact
            </h1>

        <div>

        </div>
            <form classname="form-contact" name="contact" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />
                <p>
                    <label>Your Name: <input type="text" name="name" /></label>
                </p>
                <p>
                    <label>Your Email: <input type="email" name="email" /></label>
                </p>
                <p>
                    <label>Message: <textarea name="message"></textarea></label>
                </p>
                <p>
                    <button type="submit">Send</button>
                </p>
            </form>
        </div>

        <div>
            <a
            href="https://docs.netlify.com/forms/setup/"
            target="_blank"
            rel="noopener noreferrer"
            >
            <h2>
            Code used to make the above HTML form
            </h2>
            <p>Netlify Docs on forms</p>
            <p>Make sure you have the html that is in the red retangle, or you will receive an 404 on submit.</p>
            </a>
        </div>
        <div>
        <Image
          src="/code.png"
          alt="code from Netlify for forms"
          width={840}
          height={420}
          priority
        />
      </div>

    </main>
  )
}

export default page
