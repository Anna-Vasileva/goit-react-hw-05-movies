import { error, Stack, defaults } from "@pnotify/core";
import s from "./Message.module.css";
// import "@pnotify/core/dist/BrightTheme.css";
import "@pnotify/core/dist/Material.css";
defaults.styling = "material";
// defaults.icons = "material";

const myError = (text) => {
  error({
    text: text,
    type: "error",

    delay: 500,
    sticker: false,
    closer: false,
    addClass: `${s.error}`,
  });
};

export default myError;
