import Image from "next/image";
import styles from "./style.module.scss";
import {
    InstagramOutlined, PhoneOutlined, MailOutlined, FacebookOutlined
  } from '@ant-design/icons';

const Footer = () => {
  return(
    <div className={styles.footerContainer}>
      <div className={styles.infoContainerOuter}>
        <div className={styles.infoContainerInner}>

          <div className={styles.logo}>
            <Image
              src={"/logoAll.svg"}
              alt="logo"
              objectFit="contain"
              layout="fill"
            />
          </div>

          <div className={styles.phoneSection}>
            <div>    
              <div className={styles.header}>
                CONTACT
              </div>
              <div className={styles.content}>
                <PhoneOutlined style={{marginRight: '5px', fontWeight: '700', fontSize: '18px'}}/>
                0702784918
              </div>
            </div>
          </div>

          <div className={styles.emailSection}>
            <div>              
              <div className={styles.header}>
                EMAIL
              </div>
              <div className={styles.content}>
                <MailOutlined style={{marginRight: '5px', fontWeight: '700', fontSize: '18px'}}/> 
                biuro@artasbygg.com
              </div>
              <div className={styles.contentMobile}>
                <div> <InstagramOutlined style={{marginRight: '5px'}}/>
                  <a href="https://instagram.com/artasbygg?igshid=YmMyMTA2M2Y=" >instagram.com</a>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.socialsSection}>
            <div>    
              <div className={styles.header}>
                FOLLOW US
              </div>
              <div className={styles.content}>
                <div>
                  <InstagramOutlined style={{marginRight: '5px', fontWeight: '700', fontSize: '18px'}}/>
                  <div style={{float: 'right'}}>
                    <a href="https://instagram.com/artasbygg?igshid=YmMyMTA2M2Y=" >instagram.com/artasbygg</a>
                  </div>
                </div>
                <div>
                  <FacebookOutlined style={{marginRight: '5px', fontWeight: '700', fontSize: '18px'}}/>
                  <div style={{float: 'right', paddingBottom: "7px"}}>
                    <a href="https://www.facebook.com/profile.php?id=100087368812278" >facebook.com/artasbygg</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div className={styles.copyRight}>
        © 2022 ARTAS. ALL RIGTHS RESERVED
      </div>

    </div> 
  )}

export default Footer;