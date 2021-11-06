import { Text } from "@mantine/core";
import { Input } from "@nextui-org/react";
import styles from "./styles/DomainSearch.module.scss";
const DomainSearch = () => {
  return (
    <div className={styles.searchContainer}>
      <Text style={{ fontSize: "2rem", fontWeight: 700, color: "#2C2E33" }}>
        Search For A Domain
      </Text>
      <Input
        labelPlaceholder="Domain"
        width="40%"
        height="50px"
        shadow={false}
      ></Input>
    </div>
  );
};
export default DomainSearch;
