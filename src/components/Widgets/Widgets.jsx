import React from 'react'
import classes from './Widgets.module.css'
import InfoIcon from '@mui/icons-material/Info'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'

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
  )
  
  return (
    <div className={classes.widgets}>
      <div className={classes.header}>
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>

      {newsArticle("Josh The Coder made this.", "Top News - 9999 readers")}
      {newsArticle("Mask Mandates Coming to an End.", "3h ago • 3993 readers")}
      {newsArticle("Are you having a good day today?", "14h ago • 203 readers")}
      {newsArticle("Chick-fila announces opening of 40 new restaurants in Canada", "22h ago • 8492 readers")}
    </div>
  )
}

export default Widgets