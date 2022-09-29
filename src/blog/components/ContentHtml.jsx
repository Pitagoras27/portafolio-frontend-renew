import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

import { generateId } from "../../helpers";

const useStyles = makeStyles({
  aligmentElements: {
    margin: '20px 0 !important'
  }
})

const variant = {
  'p': 'body1'
}

export const ContentHtml = ({ content }) => {
  const classes = useStyles();
  const htmlElements = {
    "h4": ({ type, node }) => (
      <Typography
        key={generateId()}
        variant={type}
        component={type}
        children={node}
        className={classes.aligmentElements}
      />
    ),
    "nested": ({ node, parent }) => {
      console.log(variant[parent])
      return (
        <Typography
          dangerouslySetInnerHTML={{ __html: node }}
          key={generateId()}
          variant={variant[parent]}
          component={parent}
          className={classes.aligmentElements}
        />
      )
    }
  }
  
  const createHtml = (item) => {
    let html = item;
    const { type } = item
  
    if (Array.isArray(item.node)) {
      html = Object.assign({}, {...item.node[0], parent: type});
      const nested = parser([ html ])
      return nested
    }
  
    const element = htmlElements[type];
    return element(item)
  }
  
  const parser = (collection) => collection.map(createHtml)

  return (
    <>
      {
        parser(content)
      }
    </>
  )
}

