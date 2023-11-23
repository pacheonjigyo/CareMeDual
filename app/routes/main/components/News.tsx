import * as React from "react";

import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { useObserver } from "mobx-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Language } from "../../../common/Language.js";
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
        <Box
          sx={{
            position: "absolute",

            top: 0,
            left: "50%",

            transform: "translate(-50%, -50%)",

            width: commonStore.baseInfo.width,
          }}
        >
          <Container
            maxWidth={false}
            sx={{
              mt: "49px",

              maxWidth: 1200,

              textAlign: "center",
            }}
          >
            <Grid container spacing={"13px"}>
              <Grid item xs={3}>
                <Box
                  sx={{
                    height: 277,

                    borderRadius: "1rem",
                    bgcolor: "black",
                  }}
                ></Box>
              </Grid>

              <Grid item xs={3}>
                <Box
                  sx={{
                    height: 277,

                    borderRadius: "1rem",
                    bgcolor: "black",
                  }}
                ></Box>
              </Grid>

              <Grid item xs={3}>
                <Box
                  sx={{
                    height: 277,

                    borderRadius: "1rem",
                    bgcolor: "black",
                  }}
                ></Box>
              </Grid>

              <Grid item xs={3}>
                <Box
                  sx={{
                    height: 277,

                    borderRadius: "1rem",
                    bgcolor: "black",
                  }}
                ></Box>
              </Grid>
            </Grid>

            <Button
              variant="outlined"
              sx={{
                mt: "40px",

                width: 160,
                height: 48,

                fontSize: 14,
              }}
            >
              <Language label="더 보기" />
            </Button>
          </Container>
        </Box>

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
                mt: "437px",

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
                Careme News{" "}
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
                mb: "50px",

                fontSize: 24,
              }}
            >
              <Language label="케어미 소식" />
            </Typography>

            <Typography
              color="text.secondary"
              sx={{
                fontSize: 14,
              }}
            >
              <Language label="박람회 참여, 언론보도 등 다양한 매체에서 소개된 케어미듀얼을 만나보세요!" />
            </Typography>

            <Divider
              sx={{
                my: 3,
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
