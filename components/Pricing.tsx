import { Title, Text, Divider, Card, Badge, List, Button } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import styles from "./styles/Pricing.module.scss";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Pricing = () => {
  const phoneSize = useMediaQuery("(max-width: 600px");
  // const [card1ref, inView] = useInView();
  // const [card2ref, inView] = useInView();
  // const [card3ref, inView] = useInView();
  return (
    <div className={styles.pricePage}>
      <div className={styles.titleDiv}>
        <Text
          style={{
            color: "#ff877f",
            fontWeight: 700,
            textAlign: "left",
          }}
          className={styles.aboutTitle}
        >
          Simple, straight forward pricing for all team sizes.
        </Text>
        <Text
          style={{
            color: "#FFFF",
            fontWeight: 400,
            textAlign: "left",
            width: "75%",
          }}
          className={styles.aboutBio}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sapien
          magna, tincidunt luctus metus pulvinar, pulvinar venenatis urna.
        </Text>
      </div>
      <div className={styles.priceBoxes}>
        {/* Card1 */}
        <motion.div className={`${styles.card}`}>
          <Title order={3} style={{ fontWeight: 400, color: "#ff877f" }}>
            Hobby
          </Title>
          <div
            style={{
              display: "flex",
              alignItems: "end",
            }}
          >
            <Title style={{ fontWeight: 700, color: "#FFF" }}>$5</Title>
            <Text style={{ fontWeight: 400, color: "#FFF" }}>/month</Text>
          </div>
          <Text style={{ color: "#C1C2C5" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <List
            spacing="md"
            size="xl"
            center
            icon={<FontAwesomeIcon icon={faCheck} size="xs" color="#ff877f" />}
            style={{ marginTop: "10%", color: "white", fontSize: "1em" }}
          >
            <List.Item>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </List.Item>
            <List.Item>
              Donec et nisi gravida, convallis dolor vitae, eleifend dui.
            </List.Item>
            <List.Item>Aliquam varius lorem ut ullamcorper pretium.</List.Item>
          </List>
          <Button style={{ backgroundColor: "#ff877f", marginTop: "auto" }}>
            Join Now
          </Button>
        </motion.div>
        {/* Card2 */}
        <div
          className={`${styles.card}`}
          style={{ border: "#ff877f solid 3px" }}
        >
          <div style={{ position: "relative" }} className={styles.badge}>
            <Badge
              style={{
                backgroundColor: "#ff877f",
                color: "white",
                position: "absolute",
                fontWeight: 500,
              }}
              size="xl"
            >
              MOST POPULAR
            </Badge>
          </div>

          <Title order={3} style={{ fontWeight: 400, color: "#ff877f" }}>
            Startup
          </Title>
          <div
            style={{
              display: "flex",
              alignItems: "end",
            }}
          >
            <Title style={{ fontWeight: 700, color: "#ff877f" }}>$30</Title>
            <Text style={{ fontWeight: 400, color: "#ff877f" }}>/month</Text>
          </div>
          <Text style={{ color: "#C1C2C5" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <List
            spacing="md"
            size="xl"
            center
            icon={<FontAwesomeIcon icon={faCheck} size="xs" color="#ff877f" />}
            style={{ marginTop: "10%", color: "white", fontSize: "1em" }}
          >
            <List.Item>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </List.Item>
            <List.Item>
              Donec et nisi gravida, convallis dolor vitae, eleifend dui.
            </List.Item>
            <List.Item>Aliquam varius lorem ut ullamcorper pretium.</List.Item>
          </List>
          <Button style={{ backgroundColor: "#ff877f", marginTop: "auto" }}>
            Join Now
          </Button>
        </div>
        {/* Card3 */}
        <div className={`${styles.card}`}>
          <Title order={3} style={{ fontWeight: 400, color: "#ff877f" }}>
            Enterprise
          </Title>
          <div
            style={{
              display: "flex",
              alignItems: "end",
            }}
          >
            <Title style={{ fontWeight: 700, color: "#FFF" }}>$50</Title>
            <Text style={{ fontWeight: 400, color: "#FFF" }}>/month</Text>
          </div>
          <Text style={{ color: "#C1C2C5" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <List
            spacing="md"
            size="xl"
            center
            icon={<FontAwesomeIcon icon={faCheck} size="xs" color="#ff877f" />}
            style={{ marginTop: "10%", color: "white", fontSize: "1em" }}
          >
            <List.Item>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </List.Item>
            <List.Item>
              Donec et nisi gravida, convallis dolor vitae, eleifend dui.
            </List.Item>
            <List.Item>Aliquam varius lorem ut ullamcorper pretium.</List.Item>
          </List>
          <Button style={{ backgroundColor: "#ff877f", marginTop: "auto" }}>
            Join Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
