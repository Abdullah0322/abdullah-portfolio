import { useState } from "react";
import Switch from "react-switch";
import sharedData from "../../../public/portfolio_shared_data.json";
import { motion, AnimatePresence } from "framer-motion";

const TypingEffect = ({ text }: { text: string }) => {
  const textArray = text.split("");
  const container = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const child = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <div style={{ display: "inline-block" }}>
      <AnimatePresence>
        <motion.div initial="hidden" animate="visible" variants={container}>
          {textArray.map((char, index) => (
            <motion.span key={index} variants={child}>
              {char}
            </motion.span>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export const Header = () => {
  const [checked, setChecked] = useState(false);

  const onThemeSwitchChange = (checked: boolean) => {
    setChecked(checked);
    setTheme();
  };

  const setTheme = () => {
    const dataThemeAttribute = "data-theme";
    const body = document.body;
    const newTheme =
      body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
    body.setAttribute(dataThemeAttribute, newTheme);
  };

  return (
    <header
      id="home"
      style={{ height: window.innerHeight - 140, display: "block" }}
    >
      <div className="row aligner" style={{ height: "100%" }}>
        <div className="col-md-12">
          <div>
            <span
              className="iconify header-icon"
              data-icon="la:laptop-code"
              data-inline="false"
            ></span>
            <br />
            <h1 className="mb-0">
              <TypingEffect text={sharedData?.basic_info?.name} />
            </h1>
            <p className="title-styles">
              <TypingEffect text={sharedData?.basic_info?.title} />
            </p>
            <div className="title-container"></div>
            <Switch
              checked={checked}
              onChange={onThemeSwitchChange}
              offColor="#baaa80"
              onColor="#353535"
              className="react-switch mx-auto"
              width={90}
              height={40}
              uncheckedIcon={
                <span
                  className="iconify"
                  data-icon="twemoji:owl"
                  data-inline="false"
                  style={{
                    display: "block",
                    height: "100%",
                    fontSize: 25,
                    textAlign: "end",
                    marginLeft: "20px",
                    color: "#353239",
                  }}
                ></span>
              }
              checkedIcon={
                <span
                  className="iconify"
                  data-icon="noto-v1:sun-with-face"
                  data-inline="false"
                  style={{
                    display: "block",
                    height: "100%",
                    fontSize: 25,
                    textAlign: "end",
                    marginLeft: "10px",
                    color: "#353239",
                  }}
                ></span>
              }
              id="icon-switch"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
