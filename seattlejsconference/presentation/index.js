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
import theme from "../themes/seattlejs/index.js";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");
require("../themes/seattlejs/index.css");
// Best way to include fonts rite
require("../fonts/worksans.css");
require("../fonts/biorhyme.css");
require("../fonts/silkscreen.css");

const images = {
  logo: require("../assets/logo-seattlejsconference.svg"),
  logoFormidable: require("../assets/logo-formidable.svg")
};

preloader(images);

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["slide"]} transitionDuration={500} progress="number">
          <Slide>
            <Image width="100%" src={images.logo}/>
            <Text textAlign="center" textFont="monospace">
              10-11 August 2017
            </Text>
            <Text textAlign="center" margin="2em auto 0">
              <Link href="https://twitter.com/seattlejs">
                Follow us <strong>@SeattleJS</strong>
              </Link>
            </Text>
            <Text textAlign="center">
              <Link href="https://twitter.com/hashtag/SeattleJSConf?src=hash">
                #SeattleJSConf
              </Link>
            </Text>
          </Slide>
          <Slide>
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
          <Slide>
            <Link href="https://www.formidable.com">
              <Image width="100%" src={images.logoFormidable}/>
            </Link>
          </Slide>
          <Slide>
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
