import * as React from "react";

import { Box, Container, Typography } from "@mui/material";
import { useObserver } from "mobx-react";
import { Swiper, SwiperSlide } from "swiper/react";
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

          pb: "193px",
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
                mt: "233px",

                display: "flex",
                alignItems: "baseline",
              }}
            >
              <Typography
                sx={{
                  fontSize: commonStore.isDesktop ? 60 : 24,
                  fontFamily: "PlayfairDisplay",
                  fontWeight: 800,
                }}
              >
                Careme Post{" "}
              </Typography>

              <Box
                sx={{
                  ml: "7px",

                  width: 14,
                  height: 14,

                  borderRadius: "50%",

                  bgcolor: "#CC4D4D",
                }}
              ></Box>
            </Box>

            <Typography
              sx={{
                mb: "63px",

                fontSize: commonStore.isDesktop ? 30 : 14,
              }}
            >
              케어미 포스팅
            </Typography>
          </Box>
        </Container>

        <Swiper
          spaceBetween={84}
          slidesPerView={4}
          centeredSlides={true}
          initialSlide={1}
          autoplay={{
            delay: 5000,
            disableOnInteraction: true,
          }}
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

                  width: 464,
                  height: 464,
                }}
              ></Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </>
  ));
}
