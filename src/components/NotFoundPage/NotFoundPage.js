import React from "react";
import s from "./NotFoundPage.module.css";

const NotFoundPage = () => {
  return (
    <section className={s["not-found"]}>
      <h1 className={s.title}>404 - page not found</h1>
    </section>
  );
};

export default NotFoundPage;
