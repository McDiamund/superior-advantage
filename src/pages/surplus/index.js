import styles from "./index.module.css";
import states from 'states-us';

function Surplus() {
  const scrollDown = () => {
    var i = 10;
    var int = setInterval(function () {
      window.scrollBy(0, i);
      i += 10;
      if (i >= 200) clearInterval(int);
    }, 20);
  };

  return (
    <div className={styles.homeContainer}>
      <div className={styles.heroContainer}>
        <div className={styles.heroTitleContainer}>
          <div className={styles.heroTitleCard}>
            <p className={styles.heroTitle}>
              "You may be <span className={styles.heroUnderline}>ENTITLED</span> to
              surplus funds. <br />
            </p>
            <div className={styles.heroAccentBar}></div>
            <p className={styles.heroSubTitle}>
              Don't leave money on the table! Contact Superior Advantage Real Estate Recovery, to recover your surplus funds.
            </p>
          </div>
          <div style={{ flexGrow: 1 }} />
        </div>
        <div className={styles.heroImage}></div>
      </div>

      <div className={styles.aboutContainer}>
        <h1>SURPLUS FUNDS ASSISTANCE</h1>
      </div>

      <div className={styles.pageContent}>
        <p>
          "<b>Surplus funds, also known as excess funds, overages, or excess proceeds,</b> are left over funds that may be claimed by a homeowner when a foreclosed property is sold at auction for more than what was owed in mortgage payments or property taxes. 
          <br/><br/>
          At times, some homeowners are not able to keep up with mortgage payments or pay the back taxes owed on their property. 

          When this happens, homeowners can lose their homes in what is called a tax sale, sheriff's sale, or a mortgage foreclosure sale, which is a public auction where foreclosed properties are sold to the highest bidder in order to pay off the debt.  
          <br/><br/>
          <b>Sometimes a foreclosure sale generates more money than required to pay off the debt, resulting in excess funds.</b>
          <br/><br/>
          Any excess funds from a tax or mortgage foreclosure sale are subject to <b>priority claims</b>. This means that those persons/parties with a superior right may recover the funds. 

          Excess funds may be claimed by the person who owned the property at the time of the foreclosure sale, the owner of each security deed that affects the property, or any other party that has a lien or recorded equity interest in the property at the time of the sale.
          <br/><br/>
          The lender or the county cannot legally keep any money exceeding what was owed to them unless the overage funds remain unclaimed for a certain amount of time.

          Depending on the laws of the state, the previous property owner has anywhere from a few months to a few years to claim surplus funds. However, if the money remains unclaimed for too long, the funds become the property of the county or the lender.

          In Georgia, claimants have up to 5 years after a tax sale to claim overages before the funds are paid to the state."
          <br/><br/>
          <b>- E. Albert Law</b>
          <br/><br/>
          Contact Superior Advantage Real Estate Recovery, we help former property owners recover surplus funds.
        </p>

        <br/>

        <h2 style={{ fontSize: "20px"}}><b>To claim any surplus funds you might have, contact us below!</b></h2>
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

            <form action="https://api.web3forms.com/submit" method="POST" style={{marginBottom: "20px"}}>
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

              <div style={{ display: "flex", width: "100%" }}>
                <div className={styles.formInput} style={{ width: "50%" }}>
                  <label>Address</label>
                  <input name="address" placeholder="123 Main St." type="text" required />
                </div>

                <div className={styles.formInput} style={{ width: "50%" }}>
                  <label>State</label>
                  <select name="state" placeholder="State" required>
                    <option value="" disabled selected>State</option>
                    {states.map((x, index) => (
                      <option key={index} value={x.abbreviation}>
                        {x.name}
                      </option>
                      ))}
                  </select>
                  {/* <input type="email" name="state" placeholder="State" required /> */}
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

export default Surplus;
