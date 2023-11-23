import * as React from "react";

import { Box } from "@mui/material";
import { AppContext } from "../stores/index.js";

export const Manuscript = (props: any) => {
  const { commonStore } = React.useContext(AppContext);

  return (
    <Box
      {...props}
      sx={{
        ...props.sx,

        borderColor: props.sx.borderColor ? props.sx.borderColor : "#E55C5C",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          width: commonStore.isDesktop ? 64 : 30,
          height: commonStore.isDesktop ? 64 : 30,

          fontSize: commonStore.isDesktop ? 48 : 24,
          fontFamily: "agchoijeongho-screen",

          animation:
            commonStore.loadingStep === 0 && props.value > 6
              ? "fade-out 1s ease 3s 1 normal forwards"
              : commonStore.loadingStep === 1 && props.value === 4
              ? "fade-in 1s ease 0s 1 normal forwards"
              : "unset",
        }}
        data-aos={props.value ? "fade-in" : "unset"}
        data-aos-delay={props.value ? props.value * 100 : 0}
      >
        {props.children}
      </Box>
    </Box>
  );
};
