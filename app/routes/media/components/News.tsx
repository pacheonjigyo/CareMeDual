import * as React from "react";

import { Box, Container, Divider, Typography } from "@mui/material";
import { useObserver } from "mobx-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { AppContext } from "../../../stores/index.js";

export default function News(): JSX.Element {
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
              // height: commonStore.isDesktop ? 771 : 2300,

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
                Careme News{" "}
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
              케어미 소식
            </Typography>

            <Typography
              color="text.secondary"
              sx={{
                fontSize: commonStore.isDesktop ? 18 : 14,
              }}
            >
              박람회 참여, 언론보도 등 다양한 매체에서 소개된 케어미듀얼을
              만나보세요!
            </Typography>

            <Divider
              sx={{
                my: 3,
              }}
            />
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
