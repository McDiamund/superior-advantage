import styles from "./index.module.css";

function QWR() {

  return (
    <div className={styles.homeContainer}>
      <div className={styles.heroContainer}>
        <div className={styles.heroTitleContainer}>
          <div className={styles.heroTitleCard}>
            <p className={styles.heroTitle}>
              "I'm <span className={styles.heroUnderline}>NOT</span> ready to
              leave my home right now. <br />
            </p>
            <div className={styles.heroAccentBar}></div>
            <p className={styles.heroSubTitle}>
              I need a solution that may buy me at least 2 to 6 months more to
              stay in my home.
            </p>
          </div>
          <div style={{ flexGrow: 1 }} />
        </div>
        <div className={styles.heroImage}></div>
      </div>

      <div className={styles.aboutContainer}>
        <h1>QWR (Qualified Written Request)</h1>
      </div>

      <div className={styles.pageContent}>
        <p>
          <b>"I need time to continue negotiating with my lender, time to examine
          more options available to me and I just have too much stuff to get out
          of the house in such a short time.”</b> <br/><br/> A Qualified Written Request
          Letter, QWR, may be a good fit for your situation. Under the laws of
          RESPA, Real Estate Settlement & Procedures Act, all homeowners are
          entitled to specific documentation Associated with their home loan and
          closing transaction. A QWR is a demand letter that is sent to your
          servicer. <br/><br/> A QWR letter demands that your lender sends you every piece
          of documentation associated with your loan since the loan was
          originated. Your Lender has 20 days to provide you, via mail, with
          this information. It may get you more time to stay in your home, and
          often times the submission of a qualified request letter encourages
          your lender to be more willing to re-examine your terms and requests.
          There is no guarantee, it's strictly up to your lender whether or not
          they agree to postpone your foreclosure, however, <b> it has worked 98% of
          the time it was used by our clients. </b> <br/><br/>  We are not attorneys, and we do
          not give legal advice, we simply provide a service that our clients
          have told us has worked for them.
        </p>

        <br/>

        <h2 style={{ fontSize: "20px"}}><b>To order a QWR from us, contact us below!</b></h2>
      </div>

      <div className={styles.contactSection}>
        <div className={styles.contactMap}>
          <div className={styles.map}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d840.7128033741053!2d-84.23850503035216!3d32.556815928721086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f3a04f5d3f8dcb%3A0x943de4792342616e!2s2%20W%20Main%20St%2C%20Butler%2C%20GA%2031006!5e0!3m2!1sen!2sus!4v1690772593645!5m2!1sen!2sus"
              width="100%"
              height="100%"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          <div className={styles.footer}>
            <p>Superior Advantage Realtors Inc. © 2023</p>

            <p>478-862-9533</p>
          </div>
        </div>

        <div className={styles.contactForm}>
          <div className={styles.container}>
            <p className={styles.contactHeader}>CONTACT US</p>

            <p className={styles.contactInfo}>
              Contact us any time you need professional support or have any
              questions.{" "}
            </p>

            <form action="https://api.web3forms.com/submit" method="POST">
              <input
                type="hidden"
                name="access_key"
                value="536ca047-89c1-4886-acd7-12d2c997d279
                "
              />

              <div style={{ display: "flex", width: "100%" }}>
                <div className={styles.formInput} style={{ width: "50%" }}>
                  <label>Name</label>
                  <input name="name" placeholder="Name" type="text" required />
                </div>

                <div className={styles.formInput} style={{ width: "50%" }}>
                  <label>Email</label>
                  <input type="email" name="email" placeholder="Email" required />
                </div>
              </div>

              <div className={styles.formInput}>
                <label>Message</label>
                <textarea
                  placeholder="Type something here..."
                  name="message"
                  rows={10}
                  required
                ></textarea>

                <button className={styles.contactSubmit} type="submit">
                  SEND
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QWR;
