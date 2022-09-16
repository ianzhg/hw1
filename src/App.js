import { React, useState } from "react";
import { Component } from "react";
import { Container, List, Fab} from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Add } from '@mui/icons-material';
import Book from "./components/Book";

const useStyles = makeStyles({
  fab: {
    position: 'absolute',
    bottom: "2rem",
    right: "2rem",
  }
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [
        {
          title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut.",
        },
        {
          title: "Cras bibendum libero eu viverra tristique.",
        },
        {
          title: "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
        },
      ],
    };
  }

  render() {
    const {books} = this.state;
    return (
      <Container>
        <List>
          {books.map((book, index) => {
            return <Book book={book} key={index}/>
          })}
        </List>
        <Fab aria-label={"Add"} className={classes.fab}>
          <Add />
        </Fab>
      </Container>
    );
  }
}

export default withStyles(styles)(App);
