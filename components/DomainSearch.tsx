import { Button, Text, Input } from "@mantine/core";
import { useForceUpdate, useMediaQuery } from "@mantine/hooks";
import { useEffect, useState } from "react";
import styles from "./styles/DomainSearch.module.scss";
const DomainSearch = () => {
  const phoneSize = useMediaQuery("(max-width: 600px)");

  return (
    <div
      className={styles.searchContainers}
      style={{
        gap: "5%",
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          fontWeight: 700,
          color: "#2C2E33",
          textAlign: "center",
        }}
        className={styles.domainTitle}
      >
        Search For A Domain
      </Text>
      <Input size="md" radius="xl" className={styles.input}></Input>
      <Button className={styles.theButton} size="md" radius="xl">
        Search
      </Button>
    </div>
  );
};
export default DomainSearch;
