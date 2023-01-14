import Image from "next/image";
import MainMenu from "./menu";
import { MenuOutlined } from "@ant-design/icons";
import styles from "./style.module.scss";
import { ArrowDownOutlined } from "@ant-design/icons";
import {  Popover } from "antd";
import { Button,  Space } from "antd";
import React, { FC, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import useTranslation from "next-translate/useTranslation";
import clsx from "clsx";

interface IProps {
  sticky: boolean
}

const Header : FC<IProps> = ({sticky}) => {
  let router = useRouter();
  const { t } = useTranslation();

  const [mobile, setMobile] = useState<boolean>();
  const [logoMobile, setLogoMobile] = useState<boolean>();

  useEffect(() => {
    if (window.innerWidth < 990) {
      setMobile(true);
    } else {
      setMobile(false);
    }
    if (window.innerWidth < 1252) {
      setLogoMobile(true);
    } else {
      setLogoMobile(false);
    }

    function handleResize() {
      if (window.innerWidth < 990) {
        setMobile(true);
      } else {
        setMobile(false);
      }
      if (window.innerWidth < 1252) {
        setLogoMobile(true);
      } else {
        setLogoMobile(false);
      }
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={sticky ? styles.stickyHeader : styles.Header}>
      <div className={styles.HeaderContainer}>
        <div className={styles.logoSticky } 
         onClick={()=>{ router.push({ pathname: '/' })}}
          >
          <Image
            src={logoMobile ? "/logoAll.svg" : "/logo.svg"}
            alt="logo"
            objectFit="contain"
            layout="fill"
            onClick={()=>{ router.push({ pathname: '/' })}}
            style={{cursor: "pointer"}}
          />
        </div>

        {!logoMobile && (
          <div className={styles.logoTextSticky} onClick={()=>{ router.push({ pathname: '/' })}}
          >
            <Image
              src="/logo_text.svg"
              alt="logo"
              objectFit="contain"
              layout="fill"
              onClick={()=>{ router.push({ pathname: '/' })}}
              style={{cursor: "pointer"}}
            />
          </div>
        )}
        <div className={styles.content}>
          {mobile && (
            <Popover
              placement="bottom"
              content={<MainMenu mobile={true} />}
              trigger="click"
            >
              <div className={styles.menuMobile}>
                <div>Menu</div>
                <MenuOutlined />
              </div>
            </Popover>
          )}
          {!mobile && <MainMenu mobile={false} />}
        </div>
        <div className={styles.language}>
          <Popover
            placement="bottom"
            title={t("common:lang")}
            content={
              <div style={{backgroundColor: 'white', alignItems: 'center'}}>
                {router?.locales?.map((locale) => (
                  <li key={locale}  style={{color: 'black', textAlign: 'center', width: "100%"}}>
                    <Link href={router.asPath} locale={locale}>
                      <a style={{color: 'grey'}}>{locale === "sv" ? t("common:sv") : t("common:en")}</a>
                    </Link>
                  </li>
                ))}
              </div>
            }
            trigger="click"
          >
            <Button
              style={{
                backgroundColor: "rgba(0,0,0,0)",
                border: "none",
                marginBottom: "8px",
              }}
            >
              <Space>
                <Image
                  src={router.locale === "en" ? "/engflag.svg" : "/sweflag.svg"}
                  alt="lang"
                  width={60}
                  height={60}
                />
                <ArrowDownOutlined style={{ marginBottom: "10px" }} />
              </Space>
            </Button>
          </Popover>
        </div>
      </div>
    </div>
  );
};

export { Header };
