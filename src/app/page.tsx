"use client";

import React from "react";
import { Button, Typography, Container } from "@mui/material";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import { styled } from "@mui/system";
import styles from "../styles/NotificationIcon.module.css";

const Card = styled("div")({
  backgroundImage: "linear-gradient(to bottom, #573cbb, #1c142d, #0e0e0d)",
  backgroundColor: "#1A1A1A",
  borderRadius: "10px",
  textAlign: "center",
  padding: "20px",
  width: "100wh",
  height: "100vh",
  maxWidth: "400px",
  border: "1px solid #6200EA",
});

const Title = styled(Typography)({
  color: "#fff",
  marginTop: "10px",
  fontSize: "18px",
});

const Subtitle = styled(Typography)({
  fontWeight: "bold",
  color: "#fff",
  marginTop: "0.2rem",
  fontSize: "14px",
});

const NotificationButton = styled(Button)({
  backgroundColor: "#3b2160",
  border: "0.25rem solid #7f2a9c",
  borderRadius: "0.55rem",
  color: "#fff",
  width: "18rem",
  marginTop: "3rem",
  "&:hover": {
    backgroundColor: "#3b2160",
  },
});

const Home: React.FC = () => {
  const sendNotification = () => {
    if (Notification.permission === "granted") {
      new Notification("Hug × Hug", {
        body: "Lorem ipsum dolor sit amet.",
      });
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification("Hug × Hug", {
            body: "Lorem ipsum dolor sit amet.",
          });
        }
      });
    }
  };

  return (
    <Card>
      <Title variant="h6" style={{ margin: "1rem 5rem", fontSize: "20px" }}>
        Hola!
      </Title>
      {/* <div
        style={{
          height: "11rem",
          width: "11rem",
          borderRadius: "22px",
          position: "absolute",
          top: "10rem",
          left: "7rem",
        }}
      >
        <div className={styles.iconContainer}>
          <div className={styles.borderCircle}></div>
          <div className={styles.icon}>
            <NotificationsActiveIcon
              style={{ fontSize: "80px", color: "#fff" }}
            />
          </div>
        </div>
      </div> */}
      <div
        style={{
          height: "11rem",
          width: "11rem",
          borderRadius: "22px",
          position: "absolute",
          top: "14rem",
          left: "7rem",
        }}
      >
        <div className={styles.iconContainer}>
          <div className={styles.outerBlur}></div>
          <div className={styles.middleLight}></div>
          <div className={styles.innerDark}></div>
          <div className={styles.icon}>
            <NotificationsActiveIcon
              style={{ fontSize: "80px", color: "#fff" }}
            />
          </div>
        </div>
      </div>
      <Subtitle
        variant="body1"
        style={{
          fontSize: "1.1rem",
          marginTop: "33rem",
          fontWeight: "bold",
          display: "block",
        }}
      >
        Lorem Ipsum...
      </Subtitle>
      <Subtitle
        variant="body2"
        style={{
          color: "#d5d5d5",
        }}
      >
        Lorem ipsum dolor sit amet.
      </Subtitle>
      <NotificationButton
        variant="contained"
        onClick={() => sendNotification()}
      >
        Send Notification
      </NotificationButton>
    </Card>
  );
};

export default Home;
