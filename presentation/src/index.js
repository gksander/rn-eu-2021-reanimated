import React from "react";
import ReactDOM from "react-dom";

import {
  FlexBox,
  Heading,
  SpectacleLogo,
  UnorderedList,
  CodeSpan,
  OrderedList,
  ListItem,
  FullScreen,
  Progress,
  Appear,
  Slide,
  Deck,
  Text,
  Grid,
  Box,
  Image,
  CodePane,
  MarkdownSlide,
  MarkdownSlideSet,
  Notes,
  Markdown,
  indentNormalizer,
} from "spectacle";

const formidableLogo =
  "https://avatars2.githubusercontent.com/u/5078602?s=280&v=4";

const FORMIDABLE_ORANGE = "#f04d21"

// SPECTACLE_CLI_THEME_START
const theme = {
  fonts: {
    header: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
    text: '"Open Sans Condensed", Helvetica, Arial, sans-serif',
  },
  fontSizes: {
    h1: '72px',
    h2: '52px',
    h3: '44px',
    text: '44px',
    monospace: '20px'
  },
  colors: {
    primary: "#222222",
    secondary: '#3a3a3a',
    tertiary: '#f9f7f3',
    red: '#f00'
  },
  space: [8, 12, 24]
};
// SPECTACLE_CLI_THEME_END

// SPECTACLE_CLI_TEMPLATE_START
const template = () => (
  <FlexBox>
    <FlexBox
      justifyContent="space-between"
      position="absolute"
      bottom={0}
      width={1}
    >

      <Box padding="0 1em">
        <FullScreen/>
      </Box>
      <Box padding="1em">
        <Progress color="#222222"/>
      </Box>
    </FlexBox>
    <Box position="absolute" top={0} right={0}>
      <Image src={formidableLogo} width={70}/>
    </Box>
  </FlexBox>
);
// SPECTACLE_CLI_TEMPLATE_END


const Presentation = () => (
  <Deck theme={theme} template={template}>
    {/* Cover */}
    <Slide>
      <Heading fontSize="h1" textAlign="left">Modern Animating in React Native</Heading>
      <Heading fontSize="h2" textAlign="left">
        An Introduction to React Native Reanimated 2
      </Heading>
    </Slide>
    {/* Intro */}
    <Slide>
      <Heading fontSize="h1" textAlign="left">Grant Sander</Heading>
      <Heading fontSize="h2" textAlign="left">Software Engineer @ <span
        style={{color: FORMIDABLE_ORANGE}}>Formidable</span></Heading>
    </Slide>
    {/* Claims */}
    <Slide>
      <Heading fontSize="h1" textAlign="left">Two "Obvious" Claims</Heading>
      <Heading fontSize="h3" textAlign="left">Performance is important.</Heading>
      <Appear stepIndex={1}>
        <Text>Especially true for lower-end devices.</Text>
      </Appear>
      <Heading fontSize="h3" textAlign="left">Animation is important.</Heading>
      <Appear stepIndex={2}>
        <Text>Especially true for mobile apps that are gesture-driven.</Text>
      </Appear>
    </Slide>
    {/* RN Abstraction */}
    <Slide>
      <Heading fontSize="h1" textAlign="left">Let's talk React Native</Heading>
      <Heading fontSize="h2" textAlign="left">It's a great abstraction!</Heading>
      <Text color="red">TODO: Diagram of bridge...</Text>
    </Slide>
    {/* Animation in React Native */}
    <Slide>
      <Heading fontSize="h1" textAlign="left">Animation in React Native</Heading>
      <UnorderedList>
        {appearList([
          "It's important!",
          "We want to declare them in JS with nice APIs.",
          "We want them to execute natively with minimal bridge trips.",
          "RN provides the `Animated` API for this.",
        ])}
      </UnorderedList>
    </Slide>
    {/* Introducing Reanimated */}
    <Slide>
      <Heading fontSize="h1" textAlign="left">Introducing Reanimated</Heading>
      <UnorderedList>
        {appearList([
          "Why?! Better performance, easier to harness.",
          "Simplified JS API/mental model for performant, native animations.",
          'Additional control over animations via "worklets".',
          "Powerful integration with gesture handlers.",
          "👆 MORE POWER."
        ])}
      </UnorderedList>
    </Slide>
    {/* Reanimated Conceptual Overview */}
    <Slide>
      <Heading fontSize="h1" textAlign="left">Reanimated: Conceptual Overview</Heading>
      <UnorderedList>
        {appearList([
          'Execute JS on _main thread_ via "worklets", minimizing bridge trips while writing JS.',
          "Connect to view props/styles via hooks-based API.",
          "React to events on main thread via hooks-based API.",
        ])}
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading fontSize="h1" textAlign="left">Reanimated APIs: "worklets"</Heading>
      <CodePane {...baseCodePaneProps} highlightRanges={[2]}>
        {indentNormalizer(`
      function clamp(x: number, min: number, max: number) {
        "worklet";
        
        if (x < min) return min;
        if (x > max) return max;
        return x;
      }
      `)}
      </CodePane>
    </Slide>
    <Slide>
      <Heading fontSize="h1" textAlign="left">Reanimated APIs: Connecting to Props</Heading>
      <UnorderedList>
        {appearList([
          "`useAnimatedStyle`: create style that's evaluated on main thread.",
          "`useAnimatedProps`: like 👆 but connect to arbitrary view props.",
        ])}
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading fontSize="h1" textAlign="left">Reanimated APIs: Animating Values</Heading>
      <UnorderedList>
        {appearList([
          "`useSharedValue`: create an animated shared value.",
          "`withTiming`/`withSpring`: animate a shared value.",
          "`interpolate`: map a shared value.",
          "`useDerivedValue`: create animated value derived from others.",
        ])}
      </UnorderedList>
    </Slide>
    <Slide>
      <Heading fontSize="h1" textAlign="left">Reanimated APIs: Responding to Gestures</Heading>
      <UnorderedList>
        {appearList([
          "`useAnimatedScrollHandler`: create scroll handler (for scrollables).",
          "`useAnimatedGestureHandler`: create generic gesture handler (use with RNGH).",
        ])}
      </UnorderedList>
    </Slide>
    {/* Where it fits in */}
    <Slide>
      <Heading fontSize="h1" textAlign="left">Day-to-day development: where it fits in</Heading>
      <UnorderedList>
        {appearList([
          "State changes and you'd like to notify the user.",
          "Event occurs and you'd like to notify the user.",
          "Customizing gestures/animations of core RN components.",
          "Taking full control over gestures and animation.",
        ])}
      </UnorderedList>
    </Slide>
  </Deck>
);

/**
 * List with appearing items
 */
const appearList = (items) =>
  items.map((val, i) => (
    <Appear elementNum={i} key={i}>
      <ListItem>
        <Markdown children={val}/>
      </ListItem>
    </Appear>
  ));

const baseCodePaneProps = {
  fontSize: 24,
  language: "ts",
  autoFillHeight: true,
};

ReactDOM.render(<Presentation/>, document.getElementById("root"));
