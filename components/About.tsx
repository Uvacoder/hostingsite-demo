import { Text, Title } from "@mantine/core";
import styles from "./styles/About.module.scss";
const About = () => {
  return (
    <div className={styles.background}>
      <div className={styles.section1}>
        <div style={{ width: "50%" }}>
          <lottie-player
            autoplay
            loop
            mode="normal"
            src="https://assets5.lottiefiles.com/packages/lf20_01jwptn4.json"
          ></lottie-player>
        </div>
        <div className={styles.sectionContainers}>
          <Text className={styles.paragraphTitles}>
            Our hosting services come with beautiful templates
          </Text>
          <Text className={styles.paragraphs}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet
            dignissim lacus, a volutpat neque rutrum a. Nullam eu ullamcorper
            metus. Aenean blandit urna in lorem vulputate pharetra. Ut eget
            varius leo, a mattis nisl. Cras vitae enim cursus, aliquam urna in,
            semper enim. In leo ante, egestas quis diam ut, scelerisque iaculis
            augue. In egestas augue ut libero vestibulum hendrerit. Aenean
            imperdiet vitae est feugiat blandit. Fusce ullamcorper velit id
            dictum maximus. Sed nibh est, pretium a tincidunt ut, hendrerit at
            dolor.
          </Text>
        </div>
      </div>
      <div className={styles.section2}>
        <div className={styles.sectionContainers}>
          <Text className={styles.paragraphTitles}>
            We work hard to keep your website running
          </Text>
          <Text className={styles.paragraphs}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet
            dignissim lacus, a volutpat neque rutrum a. Nullam eu ullamcorper
            metus. Aenean blandit urna in lorem vulputate pharetra. Ut eget
            varius leo, a mattis nisl. Cras vitae enim cursus, aliquam urna in,
            semper enim. In leo ante, egestas quis diam ut, scelerisque iaculis
            augue. In egestas augue ut libero vestibulum hendrerit. Aenean
            imperdiet vitae est feugiat blandit. Fusce ullamcorper velit id
            dictum maximus. Sed nibh est, pretium a tincidunt ut, hendrerit at
            dolor.
          </Text>
        </div>
        <div style={{ width: "50%" }}>
          <lottie-player
            autoplay
            loop
            mode="normal"
            src="https://assets9.lottiefiles.com/packages/lf20_8npfopm5.json"
            style={{ transform: "scale(1.25)" }}
          ></lottie-player>
        </div>
      </div>
      <div className={styles.section3}>
        <div style={{ width: "50%" }}>
          <lottie-player
            autoplay
            loop
            mode="normal"
            src="https://assets4.lottiefiles.com/packages/lf20_nevegy1o.json"
            style={{ transform: "scale(1.25)" }}
          ></lottie-player>
        </div>
        <div className={styles.sectionContainers}>
          <Text className={styles.paragraphTitles}>
            Create responsive and modern wbsites
          </Text>
          <Text className={styles.paragraphs}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In aliquet
            dignissim lacus, a volutpat neque rutrum a. Nullam eu ullamcorper
            metus. Aenean blandit urna in lorem vulputate pharetra. Ut eget
            varius leo, a mattis nisl. Cras vitae enim cursus, aliquam urna in,
            semper enim. In leo ante, egestas quis diam ut, scelerisque iaculis
            augue. In egestas augue ut libero vestibulum hendrerit. Aenean
            imperdiet vitae est feugiat blandit. Fusce ullamcorper velit id
            dictum maximus. Sed nibh est, pretium a tincidunt ut, hendrerit at
            dolor.
          </Text>
        </div>
      </div>
    </div>
  );
};

export default About;
