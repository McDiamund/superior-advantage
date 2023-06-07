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
                    
                </div>

            </div>

        </div>
    );
}

export default Home;