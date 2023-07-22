import styles from './index.module.css';
import downArrow from 'assets/down-arrow.svg';
import realtorLogo from 'assets/realtor-logo.png';
import equalHousing from 'assets/equal-housing.webp';
import surplusAsset from 'assets/surplus.png';
import JR from 'assets/JR.png';
import RT from 'assets/RT.jpg';
import DG from 'assets/DG.jpg';
import AE from 'assets/AE.jpg';
import ET from 'assets/1649097022047.jfif';

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

            
            <div className={styles.teamSection}>

                <div className={styles.container}>

                    <div>

                        <div className={styles.teamHeader}>
                            <p>Meet the Team</p>
                            <div className={styles.teamAccentBar}></div>
                        </div>

                        <div className={styles.row}>

                            <div className={styles.teamCol}>
                                
                                <div className={styles.teamImage} style={{
                                    background: `url(${JR})`,
                                    backgroundSize: "cover"
                                }}></div>

                                <p className={styles.name}>Jacqueline R.</p>
                                <p className={styles.title}>Prinicipal Broker</p>

                            </div>

                            <div className={styles.teamCol}>
                                
                                <div className={styles.teamImage} style={{
                                    background: `url(${RT})`,
                                    backgroundSize: "cover"
                                }}></div>

                                <p className={styles.name}>Raymond T.</p>
                                <p className={styles.title}>Credit Counselor & <br/> Down Payment Specialist</p>

                            </div>

                            <div className={styles.teamCol}>
                                
                                <div className={styles.teamImage} style={{
                                    background: `url(${DG})`,
                                    backgroundSize: "cover"
                                }}></div>

                                <p className={styles.name}>Devany G.</p>
                                <p className={styles.title}>Luxury Homes & <br/> International Relocation</p>

                            </div>

                            <div className={styles.teamCol}>
                                
                                <div className={styles.teamImage} style={{
                                    background: `url(${AE})`,
                                    backgroundSize: "cover"
                                }}></div>

                                <p className={styles.name}>Alisa E.</p>
                                <p className={styles.title}>Customer Service & <br/> Events Coordinator</p>

                            </div>

                            <div className={styles.teamCol}>
                                
                                <div className={styles.teamImage} style={{
                                    background: `url(${ET})`,
                                    backgroundSize: "cover"
                                }}></div>

                                <p className={styles.name}>Elias T.</p>
                                <p className={styles.title}>Web Designer/Developer & <br/> IT Specialist</p>

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

                        <p>Have you lost your home in a foreclosure? Any excess funds acquired from <br/>
                        a tax or mortgage foreclosure sale on your home are legally entitled to you. <br/> <br/>
                        
                        Depending on the laws of the state, the previous property owner has anywhere from <br/>
                        a few months to a few years to claim surplus funds.</p>

                        <div className={styles.contactButton}>
                            <p>LEARN MORE</p>
                        </div>

                    </div>

                </div>

            </div>

            <div className={styles.contactSection}>

                <div className={styles.contactMap}>

                    <div className={styles.map}>

                    </div>

                    <div className={styles.footer}>

                        <p>Superior Advantage Realtors Inc. © 2023</p>

                        <p>478-862-9533</p>

                    </div>
                </div>

                <div className={styles.contactForm}>

                    <div className={styles.container}>

                        <p className={styles.contactHeader}>CONTACT US</p>

                        <p className={styles.contactInfo}>Contact us any time you need professional support or have any questions. </p>

                        <form>

                            <div style={{ display: "flex", width: "100%"}}>

                                <div className={styles.formInput} style={{ width: "50%"}}>
                                    <label>Name</label>
                                    <input placeholder='Name' type='text' />
                                </div>

                                <div className={styles.formInput} style={{ width: "50%"}}>
                                    <label>Email</label>
                                    <input placeholder='Email' type='text' />
                                </div>

                            </div>

                            <div className={styles.formInput}>
                                <label>Message</label>
                                <textarea placeholder='Type something here...' rows={10}></textarea>

                                <button className={styles.contactSubmit} type="submit">SEND</button>
                            </div>



                        </form>


                    </div>

                </div>

            </div>

        </div>
    );
}

export default Home;