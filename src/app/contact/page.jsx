import React from 'react'
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

    </main>
  )
}

export default page
