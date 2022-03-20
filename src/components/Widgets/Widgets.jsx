import React from "react";
import classes from "./Widgets.module.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const Widgets = () => {
  const newsArticle = (heading, subtitle) => (
    <div className={classes.article}>
      <div className={classes.articleLeft}>
        <FiberManualRecordIcon />
      </div>

      <div className={classes.articleRight}>
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className={classes.widgets}>
      <div className={classes.header}>
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>

      {newsArticle("I Love Frontend Design!", "Top News - 124,021 readers")}
      {newsArticle("The end of Covid-19?", "42m ago")}
      {newsArticle("Are you having a good day today?", "14h ago • 203 readers")}
      {newsArticle(
        "Chick-fila announces opening of 40 new restaurants in Canada",
        "22h ago • 8492 readers",
      )}
    </div>
  );
};

export default Widgets;
