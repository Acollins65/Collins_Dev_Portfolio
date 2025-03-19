import React from "react";
import styles from "./ContactSection.module.css";
import { getImageUrl } from "../../utils";

export const ContactSection = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.head}>
          <h4>Want to reach out?</h4>
        </div>
        <div className={styles.body}>
          <form className={styles.form}>
            <div className={styles.formGroup}>
              <label htmlFor="email">Your Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Write your Email here..."
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Your Message:</label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your Message here..."
                className={styles.textarea}
              ></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </form>
          <div className={styles.contact}>
            <div className={styles.mail}>
              <img src={getImageUrl("Hero/Email.svg")} alt="Email" />
              <div className={styles.profile}>
                <span>Email:</span>
                <span>example@gmail.com</span>
              </div>
            </div>
            <div className={styles.github}>
              <img src={getImageUrl("Hero/Github.svg")} alt="Github" />
              <div className={styles.profile}>
                <span>Github:</span>
                <span>alfredcollins65</span>
              </div>
            </div>
            <div className={styles.LinkedIn}>
              <img src={getImageUrl("Hero/Linkedin.svg")} alt="LinkedIn" />
              <div className={styles.profile}>
                <span>LinkedIn:</span>
                <span>Alfred Collins-Bimpong</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
