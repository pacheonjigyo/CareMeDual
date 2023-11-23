import * as React from "react";

import { Box, Button, Container, Typography } from "@mui/material";
import { useObserver } from "mobx-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { AppContext } from "../../../stores/index.js";

import SwiperCore, {
  Autoplay,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
} from "swiper";

import { useNavigate } from "react-router-dom";
import "swiper/css/autoplay";
import "swiper/css/keyboard";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/swiper.min.css";
import { Language } from "../../../common/Language.js";
import "../index.css";

SwiperCore.use([Autoplay, Navigation, Pagination, Keyboard, Mousewheel]);

export default function Brand(): JSX.Element {
  const { commonStore } = React.useContext(AppContext);
  const navigate = useNavigate();

  return useObserver(() => (
    <>
      <Box
        sx={{
          bgcolor: "black",
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
            opacity: 0.8,
          }}
        >
          <source src="/video/main-01.mp4" type="video/mp4" />
        </video>
      </Box>

      <Box
        sx={{
          bgcolor: "#FAF7F4",

          width: "100%",
          height: 560,

          display: "flex",
          flexDirection: "column",

          justifyContent: "center",
          alignItems: "center",

          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: -120,
            left: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: commonStore.baseInfo.width,
            height: 737,
          }}
        >
          <Swiper
            spaceBetween={84}
            slidesPerView={1.5}
            centeredSlides={true}
            keyboard={true}
          >
            <SwiperSlide
              style={{
                background: "transparent",
              }}
            >
              <Container
                maxWidth={false}
                sx={{
                  background: `url("/images/slider-01.jpg")`,
                  backgroundSize: "100%",
                  backgroundPosition: "center",
                  boxShadow: "0px 3px 9px #00000029",

                  borderRadius: "1rem",

                  maxWidth: 1200,
                  height: 683,
                }}
              >
                <Box
                  sx={{
                    pl: "56px",
                    pt: "201px",
                    textAlign: "left",

                    color: "#CC4D4D",
                  }}
                >
                  <Typography
                    fontSize={48}
                    fontFamily="PlayfairDisplay"
                    fontWeight={"bold"}
                  >
                    Careme dual
                  </Typography>

                  <Typography fontSize={24}>
                    <Language label="케어미 듀얼" />
                  </Typography>

                  <Typography
                    fontSize={14}
                    sx={{
                      mt: "76px",
                    }}
                  >
                    <Language label="RF+EMS를 결합한 유일무이한 마사지로 문지를 필요 없는 패치형 마사지기기입니다." />
                  </Typography>

                  <Button
                    color="error"
                    variant="outlined"
                    sx={{
                      mt: "54px",

                      width: 160,
                      height: 48,
                      fontSize: 14,
                    }}
                    onClick={() => {
                      navigate("/product/careme/dual");
                    }}
                  >
                    <Language label="자세히 보기" />
                  </Button>
                </Box>
              </Container>
            </SwiperSlide>

            <SwiperSlide
              style={{
                background: "transparent",
              }}
            >
              <Container
                maxWidth={false}
                sx={{
                  background: `url("/images/slider-02.jpg")`,
                  backgroundSize: "100%",
                  backgroundPosition: "center",
                  boxShadow: "0px 3px 9px #00000029",

                  borderRadius: "1rem",

                  maxWidth: 1200,
                  height: 683,
                }}
              >
                <Box
                  sx={{
                    pl: "56px",
                    pt: "201px",
                    textAlign: "left",

                    color: "#196000",
                  }}
                >
                  <Typography
                    fontSize={48}
                    fontFamily="PlayfairDisplay"
                    fontWeight={"bold"}
                  >
                    CELLATIC
                  </Typography>

                  <Typography fontSize={24}>
                    <Language label="셀라틱 고주파" />
                  </Typography>

                  <Typography
                    fontSize={14}
                    sx={{
                      mt: "76px",
                    }}
                  >
                    <Language label="1MHz 고주파가 4mm깊이에 진피층을 자극하여 생체열을 발행시키고 콜라겐 생성 등을 촉진시켜 주름 및 탄력 개선에 도움을 주는 패치형기기입니다." />
                  </Typography>

                  <Button
                    color="warning"
                    variant="outlined"
                    sx={{
                      mt: "54px",

                      width: 160,
                      height: 48,
                      fontSize: 14,
                    }}
                    onClick={() => {
                      navigate("/product/cellatic/high-frequency");
                    }}
                  >
                    <Language label="자세히 보기" />
                  </Button>
                </Box>
              </Container>
            </SwiperSlide>

            <SwiperSlide
              style={{
                background: "transparent",
              }}
            >
              <Container
                maxWidth={false}
                sx={{
                  background: `url("/images/slider-03.jpg")`,
                  backgroundSize: "100%",
                  backgroundPosition: "center",
                  boxShadow: "0px 3px 9px #00000029",

                  borderRadius: "1rem",

                  maxWidth: 1200,
                  height: 683,
                }}
              >
                <Box
                  sx={{
                    pl: "56px",
                    pt: "201px",
                    textAlign: "left",

                    color: "#485770",
                  }}
                >
                  <Typography
                    fontSize={48}
                    fontFamily="PlayfairDisplay"
                    fontWeight={"bold"}
                    sx={{
                      lineHeight: "45px",
                    }}
                  >
                    Ultrasonic
                    <br />
                    wave
                  </Typography>

                  <Typography
                    fontSize={24}
                    sx={{
                      mt: 3,
                    }}
                  >
                    <Language label="셀라틱 초음파" />
                  </Typography>

                  <Typography
                    fontSize={14}
                    sx={{
                      mt: "76px",
                    }}
                  >
                    <Language label="3,10 MHz의 서로 다른 초음파를 교차로 출력시켜 여러 깊이에 자극을 주어 피부개선을 빠르고, 오랫동안 유지시켜 줍니다." />
                  </Typography>

                  <Button
                    color="info"
                    variant="outlined"
                    sx={{
                      mt: "54px",

                      width: 160,
                      height: 48,
                      fontSize: 14,
                    }}
                    onClick={() => {
                      navigate("/product/cellatic/micro-wave");
                    }}
                  >
                    <Language label="자세히 보기" />
                  </Button>
                </Box>
              </Container>
            </SwiperSlide>
          </Swiper>
        </Box>
      </Box>
    </>
  ));
}
