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

function Home() {
  const scrollDown = () => {
    var i = 10;
    var int = setInterval(function () {
      window.scrollBy(0, i);
      i += 10;
      if (i >= 140) clearInterval(int);
    }, 20);
  };

  return (
    <div className={styles.homeContainer}>
      <div className={styles.heroContainer}>
        <div className={styles.heroTitleContainer}>
          <div className={styles.heroTitleCard}>
            <p className={styles.heroTitle}>
              A <span className={styles.heroUnderline}>Superior</span> level of{" "}
              <br /> Service, Knowledge, <br /> and Innovation.
            </p>
            <div className={styles.heroAccentBar}></div>
            <div className={styles.heroButtons}>
              <a href="/sellers">
                <div className={styles.heroButtonSecondary}>
                  <p>SELL A HOME</p>
                </div>
              </a>
              <a href="/buyers">
                <div className={styles.heroButtonPrimary}>
                  <p>BUY A HOME</p>
                </div>
              </a>
            </div>
          </div>
          <div style={{ flexGrow: 1 }} />
          <div className={styles.actions}>
            <div className={styles.downArrow} onClick={scrollDown}>
              <img src={downArrow} />
            </div>

            <div className={styles.badges}>
              <div className={styles.badge}>
                <img src={realtorLogo} width={50} />
              </div>

              <div className={styles.badge}>
                <img src={equalHousing} width={60} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.heroImage}></div>
      </div>

      <div className={styles.aboutContainer}>
        <div className={styles.textBackground}>
          <div className={styles.aboutContent}>
            <p>
              We proudly service all of Georgia from Metropolitan Altana,
              Houston, Bibb, Peach county and more. We are here to help. <br />
              Our services includes buying and selling homes, HUD assistance,
              REO assistance and we are also Short Sale Specialists.
            </p>

            <div className={styles.aboutInfo}>
              <p>SOUTH GEORGIA | 478-862-9533</p>
              <p>EMAIL | officemanager@superioradvantage-re.com</p>
              <p>ATLANTA REGION | 404-421-4560</p>
            </div>

            <a href="#contactForm">
              <div className={styles.contactButton}>
                <p>CONTACT US</p>
              </div>
            </a>
          </div>
        </div>
      </div>

      <div className={styles.testimonialsContainer}>
        <div className={styles.testimonialsGrid}>
          <div className={styles.testimonialOne}>
            <div className={styles.testimonialOneView}>
              <h1 className={styles.testimonialOneHeader}>THOMAS</h1>

              <span className={styles.testimonialOneContent}>
                I was really needing to sell my home and received a flyer they had sent in the mail. After the first time talking to Jacqueline, I knew that she would be the right person to list my home with. Jacqueline and Superior Advantage Realtors made the paperwork process very easy and were very attentative to my needs as a seller. I could always get in touch with her about any questions that I had and she did an excellent job with getting my home listed and SOLD. Superior Advantage worked extremely hard with showing my home to potential buyers and with other realtors. They made selling my home very easy and free of stress. I would highly recommend Jacqueline and Superior Advantage Realtors to anyone selling or buying a home.
              </span>
            </div>

            <p className={styles.testimonialOneTitle}>THOMAS</p>
          </div>

          <div className={styles.testimonialThree}>
            <div className={styles.testimonialThreeView}>
              <h1 className={styles.testimonialThreeHeader}>K & W</h1>

              <span className={styles.testimonialThreeContent}>
                To you and the rest of Superior Advantage Realtors we say thank you again for helping us close this chapter and alleviating boat laods of stress so that we can move on. <br/> YOU ARE INCREDIBLE!!!!!
              </span>
            </div>

            <p className={styles.testimonialThreeTitle}>K & W</p>
          </div>

          <div className={styles.testimonialTwo}>
            <div className={styles.testimonialTwoView}>
              <h1 className={styles.testimonialTwoHeader}>STEVEN</h1>

              <span className={styles.testimonialTwoContent}>
                Jacqueline answered all my emails throughout the process, most of the time within the same hour but for sure the same day. I would highly recommend Superior Advantage Realtors' Services and would be most open to speaking to you in person should you like information.
              </span>
            </div>

            <p className={styles.testimonialTwoTitle}>STEVEN</p>
          </div>

        </div>

        <div className={styles.testimonialContent}>
          <div className={styles.content}>
            <p className={styles.tcHeader}>You're in good company.</p>
            <p className={styles.tcSubHeading}>
              HERE ARE WORDS FROM OUR CLIENTS
            </p>
            <div className={styles.tcAccentImage}></div>
          </div>
          <div className={styles.tooltip}>
            <p>CLICK TO SEE</p>
          </div>
        </div>
      </div>

      <div className={styles.teamSection}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.teamHeader}>
              <p>Meet the Team</p>
              <div className={styles.teamAccentBar}></div>
            </div>

            <div className={styles.row}>
              <div className={styles.teamCol}>
                <div
                  className={styles.teamImage}
                  style={{
                    background: `url(${JR})`,
                    backgroundSize: "cover",
                  }}
                ></div>

                <p className={styles.name}>Jacqueline R.</p>
                <p className={styles.title}>Prinicipal Broker</p>
              </div>

              <div className={styles.teamCol}>
                <div
                  className={styles.teamImage}
                  style={{
                    background: `url(${RT})`,
                    backgroundSize: "cover",
                  }}
                ></div>

                <p className={styles.name}>Raymond T.</p>
                <p className={styles.title}>
                  Credit Counselor & <br /> Down Payment Specialist
                </p>
              </div>

              <div className={styles.teamCol}>
                <div
                  className={styles.teamImage}
                  style={{
                    background: `url(${DG})`,
                    backgroundSize: "cover",
                  }}
                ></div>

                <p className={styles.name}>Devany G.</p>
                <p className={styles.title}>
                  Luxury Homes & <br /> International Relocation
                </p>
              </div>

              <div className={styles.teamCol}>
                <div
                  className={styles.teamImage}
                  style={{
                    background: `url(${AE})`,
                    backgroundSize: "cover",
                  }}
                ></div>

                <p className={styles.name}>Alisa E.</p>
                <p className={styles.title}>
                  Customer Service & <br /> Events Coordinator
                </p>
              </div>

              <div className={styles.teamCol}>
                <div
                  className={styles.teamImage}
                  style={{
                    background: `url(${ET})`,
                    backgroundSize: "cover",
                  }}
                ></div>

                <p className={styles.name}>Elias T.</p>
                <p className={styles.title}>
                  Web Designer/Developer & <br /> IT Specialist
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.surplusSection}>
        <div className={styles.container}>
          <div className={styles.heroText}>
            <img src={surplusAsset} />
          </div>

          <div className={styles.details}>
            <p>You may be entitled to surplus funds.</p>

            <p>
              Have you lost your home in a foreclosure? Any excess funds
              acquired from <br />
              a tax or mortgage foreclosure sale on your home are legally
              entitled to you. <br /> <br />
              Depending on the laws of the state, the previous property owner
              has anywhere from <br />a few months to a few years to claim
              surplus funds.
            </p>
            
            <a href="/surplus">
              <div className={styles.contactButton}>
                <p>LEARN MORE</p>
              </div>
            </a>
          </div>
        </div>
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

        <div className={styles.contactForm} id="contactForm">
          <div className={styles.container}>
            <p className={styles.contactHeader}>CONTACT US</p>

            <p className={styles.contactInfo}>
              Contact us any time you need professional support or have any
              questions.{" "}
            </p>

            <form action="https://api.web3forms.com/submit" method="POST">

                <input type="hidden" name="access_key" value="f77eccf9-04cf-457e-bc51-3b4d7f7601eb" />

              <div className={styles.formRow}>
                <div className={styles.formInput} style={{ width: "50%" }}>
                  <label>Name</label>
                  <input placeholder="Name" type="text" required/>
                </div>

                <div className={styles.formInput} style={{ width: "50%" }}>
                  <label>Email</label>
                  <input placeholder="Email" type="text" required/>
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

export default Home;
