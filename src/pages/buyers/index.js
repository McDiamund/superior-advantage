import styles from "./index.module.css";

function Buyers() {


  return (
    <div className={styles.homeContainer}>
      <div className={styles.heroContainer}>
        <div className={styles.heroTitleContainer}>
          <div className={styles.heroTitleCard}>
            <p className={styles.heroTitle}>
              Are you <span className={styles.heroUnderline}>SERIOUS</span>{" "}
              about buying a home?
              <br />
            </p>
            <div className={styles.heroAccentBar}></div>
            <p className={styles.heroSubTitle}>
              If you're ready to be a homeowner, we're ready to help.
            </p>
          </div>
          <div style={{ flexGrow: 1 }} />
        </div>
        <div className={styles.heroImage}></div>
      </div>

      <div className={styles.aboutContainer}>
        <h1>BUYERS</h1>
      </div>

      <div className={styles.contentContainer}>
        <div className={styles.cell}>

          <p className={styles.cellNumber}>BUYERS</p> <br/>

          <p className={styles.cellHeader}><b>Welcome Home Buyer!</b></p> <br/>

          At Superior Advantage Realtors, we love what we do! We're dedicated to helping you successfully navigate the home buying process. Today's housing market is constantly changing, and offers many new challenges and obstacles that can easily discourage hopeful home buyers. Our Agents & Representatives are skilled, knowledgeable, accessible and qualified to give you Superior Service. Let's get started!!
        </div>
        <div className={styles.cell}>
          <p className={styles.cellNumber}>1.</p> <br/>

          <p className={styles.cellHeader}><b>First Step</b></p> <br/>

          Let's Get You Pre-Qualified.
          We'll need you to call the Bank of America Call Center. The loan officer will review your credit status, with you, and let you know if you are currently a strong candidate for a home purchase, or a buyer who may need a little more
          assistance with credit history building or repair.
          The number is 1-800-900-9000. Make sure to ask
          the loan officer for your 3 credit scores, before
          hanging up. You may also consult your local lender. Then call us immediately with the
          information they give you

        </div>
        <div className={styles.cell}>

          <p className={styles.cellNumber}>2.</p> <br/>

          <p className={styles.cellHeader}><b>Second Step</b></p> <br/>

          Congratulations, you're pre-qualified, and
        ready to start house hunting! Or maybe not. If the loan officer is unable to give you a prequalification, and in fact, says there are a few credit issues you may need to resolve, no worries. Be ready to call this number. One call will get you all 3 copies of your credit report. The agencies are Equifax, Experian and Transunion. Remain on the line until you've successfully followed the prompts to receive all three reports. The number is 1-877-322-8228. It's available for use anytime, 7 days a week. Your reports arrive in 5-10 working days, once you receive them, give us a call.

        </div>
        <div className={styles.cell}>

          <p className={styles.cellNumber}>3.</p> <br/>

          <p className={styles.cellHeader}><b>Third Step</b></p> <br/>

            You're Ready to Sit Down With Us…
            You've received your credit reports and you have a definite direction that just needs some fine tuning.
            Our well trained Resource Facilitator is ready to help you get where you need to go! The Facilitator will review your reports, offer suggestions on how you can build credit and help you implement dispute tactics that may remove credit entries that have been wrongfully placed on your report and are hindering your progress. The Facilitator's goal is to help you improve your credit score so that you will be able to make your purchase.

        </div>
        <div className={styles.cell}>

          <p className={styles.cellNumber}>4.</p> <br/>

          <p className={styles.cellHeader}><b>Fourth Step</b></p> <br/>

            You Are Finally A Qualified Buyer.
            You've worked with our Resource Facilitator and are
            now a credit worthy buyer. It's time to go House Hunting!
            The Facilitator will help you select the right lender. We use authorized lenders who have demonstrated a particular expertise in the areas of Down Payment assistance, USDA (100%) loans, as well as State and County funds that may be available to our borrowers. Next, we'll refer you to one of our knowledgeable Real Estate Agents who will be happy to assist you with your home purchase. Our Realtors(R) are licensed in the State Of Georgia and are certified in the areas of Short Sales, Foreclosures, Residential Sales and New Home Construction. Their goal is to find you the best deal, while providing you with Outstanding Representation throughout your home buying process.


        </div>

        <div className={styles.cell}></div>

      </div>
      
      <div className={styles.pageContent}>

        <br/>

        <p style={{ textAlign: "center"}}><b>DOWN PAYMENT ASSISTANCE IS BACK, ALIVE & WELL</b></p> <br/>

    
        <p style={{ textAlign: "center"}}>There is so much misinformation about the existence and availability of down payment assistance. The truth is, if you’re making a home purchase, you may qualify for down payment assistance. There are Federal, State and Local sources that are designed specifically to assist you with your down payment needs. <br/> <br/> If you are one of those buyers who believes that down payment assistance (DPA) is a resource that is only available to buyers with low incomes, think again! Many of the federal programs have NO maximum income limits. <br/><br /> Other Non-Federal programs also have NO maximum income limits, and it does not matter where your dream home is located, within the state. One widely used assistance program allows income limits of up to $81,000 per year. Please speak with your Realtor and Lender about down payment assistance. Receiving DPA really could help you make a desired home purchase a reality and allow you to hold on to your reserves that may come in handy after you have purchased your new home.
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

export default Buyers;
