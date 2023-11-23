import * as React from "react";

import { Box } from "@mui/material";
import { useObserver } from "mobx-react";
import { AppContext } from "../../../stores/index.js";

import { SlideScroll } from "../../../common/SlideScroll.js";
import { initToolbarEvent } from "../../../common/ToolbarEvent.js";

export default function Intro(): JSX.Element {
  const { commonStore } = React.useContext(AppContext);
  const coverRef = React.useRef(null);

  React.useEffect(() => {
    initToolbarEvent(false, coverRef);
  }, []);

  return useObserver(() => (
    <>
      <Box
        ref={coverRef}
        sx={{
          bgcolor: "black",

          height: commonStore.baseInfo.height,

          position: "absolute",

          left: 0,
          top: 0,

          zIndex: 2,
        }}
      >
        <video
          autoPlay={true}
          muted
          loop={true}
          width={commonStore.baseInfo.width}
          height={commonStore.baseInfo.height}
          style={{
            objectFit: "cover",
          }}
        >
          <source src="/video/main-01.mp4" type="video/mp4" />
        </video>
      </Box>

      <Box
        sx={{
          position: "fixed",

          left: "50%",
          bottom: "24px",

          transform: "translate(-50%, 0%)",

          display: "flex",
          flexDirection: "column",

          alignItems: "center",

          zIndex: 10,
        }}
      >
        <SlideScroll />
      </Box>
    </>
  ));
}
