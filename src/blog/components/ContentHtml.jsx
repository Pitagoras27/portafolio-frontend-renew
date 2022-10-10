import { Box, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

import { generateId } from "../../helpers";

const useStyles = makeStyles(( theme ) => (
  {
    aligmentElements: {
      margin: '20px 0 !important'
    },
    codeFragment: {
      display: 'flex',
      justifyContent: 'center',
      '& code': {
        padding: '16px',
        backgroundColor:"#292d3e",
        color: "#ffffff",
        borderRadius: '5px'
      }
    },
    container: {
      '& li': {
        marginBottom: '15px'
      },
      '& blockquote': {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        fontWeight: '700',
        '& span': {
          fontWeight: '500',
          fontStyle: 'italic',
        }
      },
      '& img': {
        display: 'flex',
        margin: '35px auto',
        maxWidth: '100%',
        height: 'auto'
      },
      '& a': {
        textDecoration: 'none',
        fontWeight: '700',
        color: "#0375b8"
      },
      '& h4': {
        [theme.breakpoints.up('xs')]: {
          fontSize: '1.725rem;'
        },
        [theme.breakpoints.up('md')]: {
          fontSize: '2.025rem;'
        }
      }
    },
    quoteContainer: {
      display: 'flex',
      justifyContent: 'column'
    }
  })
)

const variant = {
  'p': 'body1'
}

export const ContentHtml = ({ content }) => {
  const classes = useStyles();
  const htmlElements = {
    "h4": ({ type, node }) => {
      return (
      <div key={generateId()}>
        <Box sx={{ mt: 5 }} />
        <Typography
          variant={type}
          component={type}
          children={node}
          id={node}
          className={classes.aligmentElements}
        />
      </div>
    )},
    "p": ({ node }) => (
      <Typography
        key={generateId()}
        paragraph
        children={node}
        className={classes.aligmentElements}
      />
    ),
    "code": ({ node }) => <div className={classes.codeFragment} key={generateId()}><code>{ node }</code></div>,
    "img": ({ node }) => (
      <Grid container key={generateId()}>
        <Grid item xs={12}>
          <img src={node} alt="code image" />
        </Grid>
      </Grid>
    ),
    "nested": ({ node, parent }) => {
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
    <div className={classes.container}>
      {
        parser(content)
      }
    </div>
  )
}

