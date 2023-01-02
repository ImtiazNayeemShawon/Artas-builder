import { Menu, MenuProps } from "antd";
import {
  MailOutlined,
  HomeOutlined,
  SettingOutlined,
  MessageOutlined,
  HeartOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { FC } from "react";
import Link from "next/link";

interface IProps {
  mobile: boolean;
}

interface ISV {
  [key: string]: string;
}
const svEng: ISV = {
  supplay_works: "anlaggningsarbete-stockholm",
};

const MainMenu: FC<IProps> = (props) => {
  const { t } = useTranslation();
  const router = useRouter();

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    console.log(e);
    if (e.key === "contact") {
      router.push({ pathname: "/kontakt" });
    }
  };

  return (
    <Menu
      style={{ width: "100%", textAlign: "right" }}
      onClick={onClick}
      mode={props.mobile ? "inline" : "horizontal"}
      defaultSelectedKeys={["ofert"]}
    >
      <Menu.Item key="realization" icon={<HomeOutlined />}>
        <Link href="/referenser">{t("common:realization")}</Link>
      </Menu.Item>
      <Menu.Item key="testimonials" icon={<MessageOutlined />}>
        <Link href="/omdomen">{t("common:testimonials")}</Link>
      </Menu.Item>
      <Menu.SubMenu
        key="services"
        title={t("common:services")}
        icon={<SettingOutlined />}
      >
        <Menu.Item key="supplay_works">
          <Link href="/anlaggningsarbete-stockholm">
            <a>{t("common:services_Items.supplay_works")}</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link href="/dranering-stockholm">
            <a>{t("common:services_Items.drainage_works")}</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link href="/fasadputs-stockholm">
            <a>{t("common:services_Items.rendering_works")}</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="4">
          <Link href="/husgrund-stockholm">
            <a>{t("common:services_Items.house_foundations")}</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="5">
          <Link href="/hyra-gravmaskin-stockholm">
            <a>{t("common:services_Items.mashines_rental")}</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="10">
          <Link href="/lagenhetsrenovering-stockholm">
            <a>{t("common:services_Items.flat_renovations")}</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="6">
          <Link href="/markarbete-stockholm">
            <a>{t("common:services_Items.groundworks")}</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="7">
          <Link href="/platslagare-stockholm">
            <a>{t("common:services_Items.steel_smith_works")}</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="8">
          <Link href="/takrenovering-stockholm">
            <a>{t("common:services_Items.roof_renovations")}</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="9">
          <Link href="/totalentreprenad-stockholm">
            <a>{t("common:services_Items.general_contractor")}</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="10">
          <Link href="/stenlaggning-stockholm">
            <a>{t("common:services_Items.stone_works")}</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="12">
          <Link href="/tillbyggnad-stockholm">
            <a>{t("common:services_Items.house_extensions")}</a>
          </Link>
        </Menu.Item>
      </Menu.SubMenu>
      <Menu.Item key="contact" icon={<MailOutlined />}>
        {t("common:contact")}
      </Menu.Item>
    </Menu>
  );
};
export default MainMenu;
