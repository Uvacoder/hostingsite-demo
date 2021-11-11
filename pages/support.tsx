import { NextPage } from "next";
import About from "../components/About";
import Navigation from "../components/Navigation";
import styles from "../components/styles/Support.module.scss";
import {
  faComments,
  faEnvelopeOpenText,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Divider, Text } from "@mantine/core";
import Footer from "../components/Footer";
const Support: NextPage = () => {
  return (
    <div>
      <Navigation />
      <div className={styles.supportPage}>
        <div className={styles.iconContainers}>
          <FontAwesomeIcon
            icon={faComments}
            className={styles.icons}
            size="9x"
          />
          <Text className={styles.iconTitles}>Chat With Us</Text>
          <Text className={styles.iconDesc}>Available everyday 7am-5pm</Text>
        </div>
        <div className={styles.iconContainers}>
          <FontAwesomeIcon
            icon={faEnvelopeOpenText}
            className={styles.icons}
            size="9x"
          />
          <Text className={styles.iconTitles}>Email Us</Text>
          <Text className={styles.iconDesc}>
            Responds within 1 business day
          </Text>
        </div>
        <div className={styles.iconContainers}>
          <FontAwesomeIcon icon={faPhone} className={styles.icons} size="9x" />
          <Text className={styles.iconTitles}>Call Us</Text>
          <Text className={styles.iconDesc}>+1-800-202-2929</Text>
        </div>
      </div>
      <Divider />
      <Footer />
    </div>
  );
};

export default Support;
