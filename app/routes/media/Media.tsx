import * as React from "react";
import SwiperCore, {
  Autoplay,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
} from "swiper";

import { Box } from "@mui/material";
import { useObserver } from "mobx-react";

import "swiper/css/autoplay";
import "swiper/css/keyboard";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/swiper.min.css";

import { AppContext } from "../../stores/index.js";
import Ending from "../common/Ending.js";
import "./index.css";

SwiperCore.use([Autoplay, Navigation, Pagination, Keyboard, Mousewheel]);

export default function Media(): JSX.Element {
  const { commonStore } = React.useContext(AppContext);

  return useObserver(() => (
    <>
      <Box
        sx={{
          bgcolor: "white",

          height: commonStore.baseInfo.height,
        }}
      ></Box>

      <Ending />
    </>
  ));
}
