import styles from "./index.module.css";

function Sellers() {

  return (
    <div className={styles.homeContainer}>
      <div className={styles.heroContainer}>
        <div className={styles.heroTitleContainer}>
          <div className={styles.heroTitleCard}>
            <p className={styles.heroTitle}>
              Are you <span className={styles.heroUnderline}>SERIOUS</span>{" "}
              about selling your home?
              <br />
            </p>
            <div className={styles.heroAccentBar}></div>
            <p className={styles.heroSubTitle}>
              We work aggressively towards getting you the most money for your
              home with the least amount of hassle to you.
            </p>
          </div>
          <div style={{ flexGrow: 1 }} />
        </div>
        <div className={styles.heroImage}></div>
      </div>

      <div className={styles.aboutContainer}>
        <h1>SELLERS</h1>
      </div>

      <div className={styles.contentContainer}>
        <div className={styles.cell}>
          <p className={styles.cellNumber}>SELLERS</p> <br />
          <p className={styles.cellHeader}>
            <b>Pillars To Help Sell Your Home</b>
          </p>

          <br />

          Selling your home shouldn’t be a stressful ordeal. Making the smart move of choosing a REALTOR® is your first step to ensuring that your investment in your home pays off. Our services and experience allow you to focus on your move while we manage your home sale from our initial consultation to the closing of your transaction, and beyond. We pride ourselves on repeat business and hope you’ll come to understand why.
        </div>
        <div className={styles.cell}>
          <p className={styles.cellNumber}>1.</p> <br />
          <p className={styles.cellHeader}>
            <b>Pricing</b>
          </p>{" "}
          <br />
          Your home must be priced correctly the 1st Time. Maximum compensation for  our Sellers is the 1st priority. Your home will be priced strategically. Your Realtor will stay informed about all changes & trends affecting your home’s market position.
        </div>
        <div className={styles.cell}>
          <p className={styles.cellNumber}>2.</p> <br />
          <p className={styles.cellHeader}>
            <b>Staging</b>
          </p>{" "}
          <br />
          Accentuate the positive, but shine a less brilliant light on features that are not so favorable to prospective buyers. We assist you with property staging recommendations. We want Buyer prospects to know what’s great about owning your home!
        </div>
        <div className={styles.cell}>
          <p className={styles.cellNumber}>3.</p> <br />
          <p className={styles.cellHeader}>
            <b>Optimize Internet Exposure.</b>
          </p>{" "}
          <br />
          A picture is worth more than a thousand words. We saturate the internet & social media with photos, photos and more photos. We also syndicate a personalized property video customized just for your home.
        </div>
        <div className={styles.cell}>
          <p className={styles.cellNumber}>4.</p> <br />
          <p className={styles.cellHeader}>
            <b>Marketing Aggressively.</b>
          </p>{" "}
          <br />
          Email, Direct Mail, Messaging, Property Brochures, door knocking & interacting with targeted Buyers to make sure that prospects are aware that your home is for sale, and ready to be purchased.
        </div>

        <div className={styles.cell}>

        <p className={styles.cellNumber}>5.</p> <br />
          <p className={styles.cellHeader}>
            <b>Good Communication is Key.</b>
          </p>{" "}
          <br />

          You’ll always stay in direct contact with your Agent from start to finish and even beyond the closing date if you should need further assistance or clarification.
        
          <br /><br />

          Your agent will also provide you with a weekly progress report so that you’re never left in the dark about your home sale.  Feel free to call our agents using their personal cell phone numbers. Being accessible to our Home Sellers and Buyers is of paramount importance to us.
        
        </div>
      </div>

      <div className={styles.pageContent}>
        <br />
        <p style={{ textAlign: "center" }}>
          <b>SELL YOUR HOME WITH US TODAY</b>
        </p>{" "}
        <br />
        <p style={{ textAlign: "center" }}>
        As a responsible Home Seller, you’ll need to know what is owed to your mortgage lender, at the time of the sale, providing you do not own your home outright. You’ll also need to ascertain if there are any additional liens that have to be satisfied as a condition of your home sale.  Fortunately, you’ll be able to work with your Realtor to determine what your home is currently worth.  Your Realtor will perform a comprehensive, comparative market analysis to determine the fair market value of your property.  This analysis will be reviewed weekly to ensure that your home is positioned correctly on the market.
        
        <br /><br />
        
        Note: A Short Sale is a transaction that completes a sale, when you owe your mortgage lender MORE than what your home is worth, according to fair market value.  If you believe you may need a Short Sale, we’re Short Sale Specialists. contact us for more information.
        
        </p>

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
                value="536ca047-89c1-4886-acd7-12d2c997d279"
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

export default Sellers;
