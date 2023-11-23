import * as React from "react";

import { Box, Typography } from "@mui/material";
import { useObserver } from "mobx-react";
import { Language } from "../../../common/Language.js";
import { AppContext } from "../../../stores/index.js";

export default function Reviews(): JSX.Element {
  const { commonStore } = React.useContext(AppContext);

  return useObserver(() => (
    <>
      <Box
        sx={{
          width: "100%",
          // height: commonStore.baseInfo.height,

          display: "flex",
          flexDirection: "column",

          justifyContent: "center",
          alignItems: "center",

          position: "relative",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: 616,

            textAlign: "center",

            display: "flex",
            flexDirection: "column",
            alignItems: "center",

            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "relative",

              width: 154,
              height: 30,

              mt: "186px",
            }}
          >
            <Box
              sx={{
                position: "absolute",

                left: 70,
                top: 0,

                width: 11,
                height: 11,

                borderRadius: "50%",

                bgcolor: "#CC4D4D",
              }}
            ></Box>

            <Box
              sx={{
                position: "absolute",

                left: 0,
                top: 8,

                width: 11,
                height: 11,

                borderRadius: "50%",

                bgcolor: "#535353",
              }}
            ></Box>

            <Box
              sx={{
                position: "absolute",

                left: 140,
                top: 8,

                width: 11,
                height: 11,

                borderRadius: "50%",

                bgcolor: "#535353",
              }}
            ></Box>
          </Box>

          <Typography
            sx={{
              fontSize: 48,
              fontFamily: "PlayfairDisplay",
              fontWeight: 800,
            }}
          >
            Reviews
          </Typography>

          <Typography
            sx={{
              mb: "50px",

              fontSize: 24,
            }}
          >
            <Language label="제품 리뷰" />
          </Typography>

          <Typography
            color="text.secondary"
            sx={{
              fontSize: 14,
            }}
          >
            <Language label="고객님들의 소중한 리뷰를 하나하나 생각하며 성장하도록 하겠습니다!" />
          </Typography>
        </Box>
      </Box>
    </>
  ));
}
