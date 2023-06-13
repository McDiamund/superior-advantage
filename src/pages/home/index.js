import styles from './index.module.css';
import downArrow from 'assets/down-arrow.svg';
import realtorLogo from 'assets/realtor-logo.png';
import equalHousing from 'assets/equal-housing.webp';

function Home() {

    const scrollDown = () => {
        var i = 10;
        var int = setInterval(function() {
            window.scrollBy(0, i);
            i += 10;
            if (i >= 200) clearInterval(int);
        }, 20);
    }
    
    return(
        <div className={styles.homeContainer}>

            <div className={styles.heroContainer}>
                <div className={styles.heroTitleContainer}>
                    <div className={styles.heroTitleCard}>
                        <p className={styles.heroTitle}>A <span className={styles.heroUnderline}>Superior</span> level of <br/> Service, Knowledge, <br/> and Innovation.</p>
                        <div className={styles.heroAccentBar}></div>
                        <div className={styles.heroButtons}>
                            <div className={styles.heroButtonSecondary}>
                                <p>SELL A HOME</p>
                            </div>
                            <div className={styles.heroButtonPrimary}>
                                <p>BUY A HOME</p>
                            </div>
                        </div>
                    </div>
                    <div style={{ flexGrow: 1 }} />
                    <div className={styles.actions}>

                        <div className={styles.downArrow} onClick={scrollDown}>
                            <img src={downArrow} />
                        </div>

                        <div className={styles.badges}>

                            <div className={styles.badge}>
                                <img src={realtorLogo} width={50}/>
                            </div>

                            <div className={styles.badge}>
                                <img src={equalHousing} width={60}/>
                            </div>

                        </div>
                    </div>
                </div>
                <div className={styles.heroImage}></div>
            </div>

            <div className={styles.aboutContainer}>

                <div className={styles.textBackground}>

                    <div className={styles.aboutContent}>
                        
                        <p>We proudly service all of Georgia from Metropolitan Altana, Houston, Bibb, Peach county and more. We are here to help. <br/>
                        Our services includes buying and selling homes, HUD assistance, REO assistance and we are also Short Sale Specialists.</p>

                        <div className={styles.aboutInfo}>
                            <p>SOUTH GEORGIA | 478-862-9533</p>
                            <p>EMAIL | officemanager@superioradvantage-re.com</p>
                            <p>ATLANTA REGION | 404-421-4560</p>
                        </div>

                        <div className={styles.contactButton}>
                            <p>CONTACT US</p>
                        </div>

                    </div>
                    
                </div>

            </div>

            <div className={styles.testimonialsContainer}>

                <div className={styles.testimonialsGrid}>

                    <div className={styles.testimonialOne}>
                        <p>K & W</p>
                    </div>

                    <div className={styles.testimonialTwo}>
                        <p>STEVEN</p>
                    </div>

                    <div className={styles.testimonialThree}>
                        <p>THOMAS</p>
                    </div>

                </div>

                <div className={styles.testimonialContent}>
                    <div className={styles.content}>
                        <p className={styles.tcHeader}>You're in good company.</p>
                        <p className={styles.tcSubHeading}>HERE ARE WORDS FROM OUR CLIENTS</p>
                        <div className={styles.tcAccentImage}></div>
                    </div>
                    <div className={styles.tooltip}>
                        <p>HOVER TO SEE</p>
                    </div>
                </div>

            </div>

        </div>
    );
}

export default Home;