// Import React
import React from "react";

// Import Spectacle Core tags
import {
  // Appear,
  // BlockQuote,
  // Cite,
  // CodePane,
  Deck,
  // Fill,
  // Fit,
  Heading,
  Image,
  // Layout,
  Link,
  ListItem,
  List,
  // Markdown,
  // Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import theme from "../themes/formidable/index.js";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("../themes/formidable/index.css");

const images = {
  bg: require("../assets/bg-oss.jpg"),
  logo: require("../assets/logo.svg")
};

preloader(images);

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["slide"]} transitionDuration={500} progress="number">
          <Slide bgImage={images.bg}>
            <Heading size={1} lineHeight={1} textAlign={"left"}>
              Seattle
              Node.js
            </Heading>
            <Text textColor="secondary" textAlign="right">
              31 August 2016
            </Text>
            <Text bold>
              Developing with Node.js, NoSQL, and Angular 2
            </Text>
            <Text>
              Nic Raboy (
              <Link href="https://github.com/nraboy">
                @nraboy
              </Link>)
            </Text>
            <Text textAlign="center" margin="2em auto 0">
              <Link href="https://twitter.com/seattlenode">
                Follow us <strong>@SeattleNode</strong>
              </Link>
            </Text>
          </Slide>
          <Slide bgColor="tertiary">
            <Link href="https://www.formidable.com">
              <Image width="100%" src={images.logo}/>
            </Link>
          </Slide>
          <Slide bgColor="tertiary">
            <Heading size={1}>
              Thank you
            </Heading>
            <Text>
              <Link href="https://generalassemb.ly/seattle"><strong>General Assembly</strong></Link> has graciously agreed to host the event.
            </Text>
            <Text>
              <Link href="https://www.teksystems.com/en"><strong>TEK Systems</strong></Link> has generously volunteered to provide sustenance!
            </Text>
          </Slide>
          <Slide bgColor="tertiary">
            <Heading size={1} textColor="primary">
              Get Involved
            </Heading>
            <List>
              <ListItem>Speakers</ListItem>
              <ListItem>Spaces</ListItem>
              <ListItem>Sponsors</ListItem>
            </List>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
