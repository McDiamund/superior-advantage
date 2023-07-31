import styles from "./index.module.css";
import downArrow from "assets/down-arrow.svg";
import realtorLogo from "assets/realtor-logo.png";
import equalHousing from "assets/equal-housing.webp";
import surplusAsset from "assets/surplus.png";
import JR from "assets/JR.png";
import RT from "assets/RT.jpg";
import DG from "assets/DG.jpg";
import AE from "assets/AE.jpg";
import ET from "assets/1649097022047.jfif";

function Sellers() {
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
      {/* 
      <div className={styles.pageContent}>
        <p style={{ textAlign: "center" }}>
          <br />
          <b style={{ fontSize: "20px" }}>Welcome Homebuyer</b> <br /> <br />
          At Superior Advantage Realtors, we love what we do! We're dedicated to
          helping you successfully navigate the home buying process. Today's
          housing market is constantly changing, and offers many new challenges
          and obstacles that can easily discourage hopeful home buyers. Our
          Agents & Representatives are skilled, knowledgeable, accessible and
          qualified to give you Superior Service. Let's get started!!
          <br />
          <br />
          <b style={{ fontSize: "20px" }}>First Step</b> <br /> <br />
          Let’s Get You Pre-Qualified. We’ll need you to call the Bank of
          America Call Center. The loan officer will review your credit status,
          with you, and let you know if you are currently a strong candidate for
          a home purchase, or a buyer who may need a little more assistance with
          credit history building or repair. The number is{" "}
          <b>1-800-900-9000.</b> Make sure to ask the loan officer for your 3
          credit scores, before hanging up. You may also consult your local
          lender. Then call us immediately with the information she/he gives you
          <br />
          <br />
          <b style={{ fontSize: "20px" }}>Second Step</b> <br /> <br />
          Congratulations, you’re pre-qualified, and ready to start house
          hunting! Or maybe not. If the loan officer is unable to give you a
          prequalification, and in fact, says there are a few credit issues you
          may need to resolve, no worries. Be ready to call this number. One
          call will get you all 3 copies of your credit report. The agencies are
          Equifax, Experian and Transunion. Remain on the line until you’ve
          successfully followed the prompts to receive all three reports. The
          number is <b>1-877-322-8228</b>. It’s available for use anytime, 7 days a
          week. Your reports arrive in 5-10 working days, once you receive them,
          give us a call.
          <br />
          <br />
          <b style={{ fontSize: "20px" }}>Third Step</b> <br /> <br />
          You’re Ready to Sit Down With Us… You’ve received your credit reports
          and you have a definite direction that just needs some fine tuning.
          Our well trained Resource Facilitator is ready to help you get where
          you need to go! The Facilitator will review your reports, offer
          suggestions on how you can build credit and help you implement dispute
          tactics that may remove credit entries that have been wrongfully
          placed on your report and are hindering your progress. The
          Facilitator’s goal is to help you improve your credit score so that
          you will be able to make your purchase.
          <br />
          <br />
          <b style={{ fontSize: "20px" }}>Fourth Step</b> <br /> <br />
          You Are Finally A Qualified Buyer. You’ve worked with our Resource
          Facilitator and are now a credit worthy buyer. It’s time to go House
          Hunting! The Facilitator will help you select the right lender. We use
          authorized lenders who have demonstrated a particular expertise in the
          areas of Down Payment assistance, USDA (100%) loans, as well as State
          and County funds that may be available to our borrowers. Next, we’ll
          refer you to one of our knowledgeable Real Estate Agents who will be
          happy to assist you with your home purchase. Our Realtors(R) are
          licensed in the State Of Georgia and are certified in the areas of
          Short Sales, Foreclosures, Residential Sales and New Home
          Construction. Their goal is to find you the best deal, while providing
          you with Outstanding Representation throughout your home buying
          process.
          <br />
          <br />
          <hr />
          <br />
          <br />
          <b style={{ fontSize: "20px" }}>
            DOWN PAYMENT ASSISTANCE IS BACK, ALIVE & WELL
          </b>{" "}
          <br /> <br />
          There is so much misinformation about the existence and availability
          of down payment assistance. The truth is, if you’re making a home
          purchase, you may qualify for down payment assistance. There are
          Federal, State and Local sources that are designed specifically to
          assist you with your down payment needs. If you are one of those
          buyers who believes that down payment assistance (DPA) is a resource
          that is only available to buyers with low incomes, think again! Many
          of the federal programs have NO maximum income limits. Other
          Non-Federal programs also have NO maximum income limits, and it does
          not matter where your dream home is located, within the state. One
          widely used assistance program allows income limits of up to $81,000
          per year. Please speak with your Realtor and Lender about down payment
          assistance. Receiving DPA really could help you make a desired home
          purchase a reality and allow you to hold on to your reserves that may
          come in handy after you have purchased your new home.
        </p>

        <br />
      </div> */}

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
                value="f77eccf9-04cf-457e-bc51-3b4d7f7601eb"
              />

              <div style={{ display: "flex", width: "100%" }}>
                <div className={styles.formInput} style={{ width: "50%" }}>
                  <label>Name</label>
                  <input placeholder="Name" type="text" required />
                </div>

                <div className={styles.formInput} style={{ width: "50%" }}>
                  <label>Email</label>
                  <input placeholder="Email" type="text" required />
                </div>
              </div>

              <div className={styles.formInput}>
                <label>Message</label>
                <textarea
                  placeholder="Type something here..."
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
