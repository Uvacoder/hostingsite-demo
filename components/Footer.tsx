import styles from "./styles/Footer.module.scss";
import { Button, Input, Text, Title } from "@mantine/core";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebook,
  faInstagram,
  faGooglePlus,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footerContainerL}>
        <Title style={{ color: "white" }}>Newsletter</Title>
        <Text style={{ color: "white" }}>
          Sign up for the news letter to recieve special promotions, adverts,
          and giveaways!
        </Text>
        <div style={{ display: "flex" }}>
          <Input
            style={{ width: "80%" }}
            icon={<FontAwesomeIcon icon={faEnvelope} />}
            placeholder="Your Email"
          ></Input>
          <Button style={{ backgroundColor: "#ff877f" }} radius="xs">
            Sign Up
          </Button>
        </div>
      </div>
      <div className={styles.footerContainerR}>
        <div className={styles.followContainer}>
          <Title order={2} style={{ color: "white" }}>
            Follow us On:
          </Title>
          <div className={styles.iconContainer}>
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faGooglePlus} />
          </div>
          <div style={{ display: "flex" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Title order={2} style={{ color: "white" }}>
                Address:
              </Title>
              <Text style={{ color: "white", width: "80%" }}>
                1600 Pennsylvania Avenue NW, Washington, DC 20500
              </Text>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Title order={2} style={{ color: "white" }}>
                Contact:
              </Title>
              <Text style={{ color: "white" }}>+1-800-202-292</Text>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
