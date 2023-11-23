import * as React from "react";
import SwiperCore, {
  Autoplay,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
} from "swiper";

import { Box, Button, Typography } from "@mui/material";
import { useObserver } from "mobx-react";

import "swiper/css/autoplay";
import "swiper/css/keyboard";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/swiper.min.css";

import { AppContext } from "../../stores/index.js";
import Ending from "../common/Ending.js";
import Brand from "./components/Brand.js";
import Hello from "./components/Hello.js";
import Intro from "./components/Intro.js";
import News from "./components/News.js";
import Posting from "./components/Posting.js";
import Reviews from "./components/Reviews.js";
import Special from "./components/Special.js";
import "./index.css";

SwiperCore.use([Autoplay, Navigation, Pagination, Keyboard, Mousewheel]);

export default function Main(): JSX.Element {
  const { commonStore } = React.useContext(AppContext);

  return useObserver(() => (
    <>
      <Box
        sx={{
          bgcolor: "white",

          position: "relative",
        }}
      >
        {commonStore.loadingStep < 3 ? (
          <Hello />
        ) : (
          <>
            <Intro />
            <Brand />
            <Special />
            <Reviews />
            <News />
            <Posting />
            <Ending />
          </>
        )}
      </Box>

      <Button
        variant="contained"
        color="inherit"
        id="custom-button"
        sx={{
          position: "fixed",
          borderRadius: "1rem",

          right: 24,
          bottom: 24,

          p: 2,

          zIndex: 99999,
        }}
      >
        <img src="/images/whatsapp.png" />

        <Typography
          sx={{
            color: "#25d366",
            fontWeight: "bold",

            ml: 1,
          }}
        >
          WhatsApp
        </Typography>
      </Button>
    </>
  ));
}
