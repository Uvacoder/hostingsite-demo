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
          fontSize: !phoneSize ? "2rem" : "1.5rem",
          fontWeight: 700,
          color: "#2C2E33",
          textAlign: "center",
        }}
      >
        Search For A Domain
      </Text>
      <Input
        styles={{
          root: { width: phoneSize ? "100%" : "50%" },
        }}
        size="md"
        radius="xl"
      ></Input>
      <Button size="md" radius="xl" fullWidth={!phoneSize ? false : true}>
        Search
      </Button>
    </div>
  );
};
export default DomainSearch;
