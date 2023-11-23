import * as React from "react";

import { Box, Container, Divider, Typography } from "@mui/material";
import { useObserver } from "mobx-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Language } from "../../../common/Language.js";
import { AppContext } from "../../../stores/index.js";

export default function Posting(): JSX.Element {
  const { commonStore } = React.useContext(AppContext);

  return useObserver(() => (
    <>
      <Box
        sx={{
          bgcolor: "#F8ECE0",

          width: "100%",
          // height: commonStore.baseInfo.height,

          display: "flex",
          flexDirection: "column",

          // justifyContent: "left",
          alignItems: "start",

          position: "relative",

          pb: "154px",
        }}
      >
        <Container
          maxWidth={false}
          sx={{
            maxWidth: 1200,
          }}
        >
          <Box
            sx={{
              width: "100%",

              // textAlign: "center",

              position: "relative",
            }}
          >
            <Box
              sx={{
                mt: "186px",

                display: "flex",
                alignItems: "baseline",
              }}
            >
              <Typography
                sx={{
                  fontSize: 48,
                  fontFamily: "PlayfairDisplay",
                  fontWeight: 800,
                }}
              >
                Careme Post{" "}
              </Typography>

              <Box
                sx={{
                  ml: "5px",

                  width: 11,
                  height: 11,

                  borderRadius: "50%",

                  bgcolor: "#CC4D4D",
                }}
              ></Box>
            </Box>

            <Typography
              sx={{
                fontSize: 24,
              }}
            >
              <Language label="케어미 포스팅" />
            </Typography>

            <Divider
              sx={{
                my: "50px",
              }}
            />
          </Box>
        </Container>

        <Swiper
          spaceBetween={0}
          slidesPerView={5}
          centeredSlides={true}
          initialSlide={1}
          keyboard={true}
        >
          {new Array(10).fill(null).map((v, i) => (
            <SwiperSlide
              key={i}
              style={{
                background: "transparent",
              }}
            >
              <Box
                sx={{
                  bgcolor: "white",
                  borderRadius: "1rem",

                  width: 371,
                  height: 371,
                }}
              ></Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </>
  ));
}
