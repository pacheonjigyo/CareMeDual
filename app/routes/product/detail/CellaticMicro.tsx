import * as React from "react";
import SwiperCore, {
  Autoplay,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
} from "swiper";

import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import { useObserver } from "mobx-react";

import "swiper/css/autoplay";
import "swiper/css/keyboard";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/swiper.min.css";
import { SlideScroll } from "../../../common/SlideScroll.js";
import { initToolbarEvent } from "../../../common/ToolbarEvent.js";
import { AppContext } from "../../../stores/index.js";
import Ending from "../../common/Ending.js";

SwiperCore.use([Autoplay, Navigation, Pagination, Keyboard, Mousewheel]);

export default function CellaticMicro(): JSX.Element {
  const theme = useTheme();

  const coverRef = React.useRef(null);
  const scrollRef = React.useRef(null);

  const { commonStore } = React.useContext(AppContext);

  React.useEffect(() => {
    initToolbarEvent(false, coverRef);
  }, []);

  return useObserver(() => (
    <>
      <Box
        sx={{
          bgcolor: "white",

          position: "relative",
        }}
      >
        <Box
          sx={{
            bgcolor: "black",

            height: commonStore.baseInfo.height,

            position: "relative",
          }}
        >
          <Box
            sx={{
              background: `url("/images/slider-03.jpg")`,
              backgroundSize: "100%",
              backgroundPosition: "100% 30%",

              width: commonStore.baseInfo.width,
              height: commonStore.baseInfo.height,
            }}
          ></Box>

          <Box
            sx={{
              position: "absolute",

              left: 0,
              top: 0,

              // transform: "translate(-50%, -50%)",

              pl: "169px",
              pt: "321px",
              textAlign: "left",

              color: "info.main",
            }}
          >
            <Typography
              fontSize={64}
              fontFamily="PlayfairDisplay"
              fontWeight={"bold"}
              sx={{
                lineHeight: "59px",
              }}
            >
              CELLATIC
              <br />
              ultrasonic wave
            </Typography>

            <Typography
              fontSize={24}
              sx={{
                mt: 2,
              }}
            >
              <b>셀라틱</b> 고주파 초음파
            </Typography>
          </Box>

          <Box
            sx={{
              position: "absolute",

              left: "50%",
              bottom: "24px",

              transform: "translate(-50%, 0%)",

              display: "flex",
              flexDirection: "column",

              alignItems: "center",
            }}
          >
            <SlideScroll />
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",

            ml: "240px",

            height: 48,
          }}
        >
          <Typography fontSize={16} fontFamily="Gilroy">
            Product
          </Typography>

          <Typography
            fontSize={20}
            fontFamily="Gilroy"
            sx={{
              mx: "20px",
            }}
          >
            {">"}
          </Typography>

          <Typography fontSize={16} fontFamily="Gilroy">
            Careme dual
          </Typography>
        </Box>

        <Divider />

        <Box
          sx={{
            // height: commonStore.baseInfo.height,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              width: commonStore.baseInfo.width - 972,
            }}
          >
            <Box
              sx={{
                mt: "64px",

                // p: 20,

                textAlign: "center",
              }}
            >
              <img src="/images/cellaticmicro_sketch.svg" height={240} />

              <Typography
                color="info.main"
                sx={{
                  mt: "52px",

                  lineHeight: "42px",
                  letterSpacing: "-0.5px",
                }}
                align="center"
                fontSize={19}
                fontWeight="bold"
              >
                CELLATIC ultrasonic
              </Typography>

              <Typography
                sx={{
                  mt: "25px",

                  lineHeight: "25px",
                  letterSpacing: "-0.5px",
                }}
                align="center"
                fontSize={14}
              >
                3,10 MHz의 서로 다른 초음파를 교차로 출력시켜
                <br />
                여러 깊이에 자극을 주어 피부개선을 빠르고, 오랫동안 유지 시켜
                줍니다.
                <br />
                <br />
                3가지의 다른 초음파를 교차로 출력
                <br />
                (Blue 콜라겐 생성 촉진 / Green 홍조,미백, 보습 / Red 화장품
                유효성분 침투률 확대)
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              height: 155,

              my: "160px",
            }}
          >
            <Box
              sx={{
                width: 300,

                mx: "52px",

                textAlign: "center",
              }}
            >
              <img src="/images/effective.png" height={61} />

              <Typography
                fontSize={17}
                fontWeight="bold"
                sx={{
                  mt: "28px",
                }}
              >
                효과
              </Typography>

              <Typography
                fontSize={14}
                sx={{
                  mt: "19px",
                }}
              >
                3.10MHz 출력으로 빠르고,
                <br />
                오랫동안 효과를 유지
              </Typography>
            </Box>

            <Divider orientation="vertical" />

            <Box
              sx={{
                width: 400,

                mx: "52px",

                textAlign: "center",
              }}
            >
              <img src="/images/convenience.png" height={61} />

              <Typography
                fontSize={17}
                fontWeight="bold"
                sx={{
                  mt: "28px",
                }}
              >
                편의성
              </Typography>

              <Typography
                fontSize={14}
                sx={{
                  mt: "19px",
                }}
              >
                C타입 충전 방식으로 보다 편하게
                <br />
                오래 사용할 수 있습니다.
              </Typography>
            </Box>

            <Divider orientation="vertical" />

            <Box
              sx={{
                width: 300,

                mx: "52px",

                textAlign: "center",
              }}
            >
              <img src="/images/stability.png" height={61} />

              <Typography
                fontSize={17}
                fontWeight="bold"
                sx={{
                  mt: "28px",
                }}
              >
                안정성
              </Typography>

              <Typography
                fontSize={14}
                sx={{
                  mt: "19px",
                }}
              >
                KC,CE,FCC,RoHs 인증완료
                <br />
                초음파젤 피부 저자극 테스트 완료
              </Typography>
            </Box>
          </Box>

          <Grid container spacing={3}>
            <Grid item xs={6}>
              <Box
                sx={{
                  bgcolor: "#F5F5F5",

                  height: 758,

                  position: "relative",

                  display: "flex",
                  flexDirection: "column",

                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",

                    top: -30,
                    right: 30,
                  }}
                >
                  <Typography
                    color="info.main"
                    fontSize={81}
                    fontWeight="bold"
                    fontFamily={"PlayfairDisplay"}
                  >
                    01
                  </Typography>
                </Box>

                <Typography fontSize={19} fontWeight="bold" color="info.main">
                  3MHz - 10MHz 초음파
                </Typography>

                <Typography
                  fontSize={14}
                  sx={{
                    mt: "25px",
                    lineHeight: "25px",
                  }}
                  align="center"
                >
                  CELLATIC ultrasonic은 3, 10 MHz의
                  <br />
                  서로 다른 초음파를 교차로 출력시켜
                  <br />
                  여러 깊이에 자극을 주어 피부개선을 빠르고,
                  <br />
                  오랫동안 유지 시켜 줍니다.
                </Typography>

                <Button
                  variant="outlined"
                  sx={{
                    mt: "59px",

                    width: 160,
                    height: 48,

                    fontSize: 14,
                  }}
                >
                  RF 와 EMS 란?
                </Button>
              </Box>
            </Grid>

            <Grid item xs={6}>
              <Box
                sx={{
                  background: `url("/images/cellaticmicro_detail-01.jpg")`,
                  backgroundPosition: "60% 50%",

                  height: 758,
                }}
              ></Box>
            </Grid>

            <Grid item xs={6}>
              <Box
                sx={{
                  background: `url("/images/cellaticmicro_detail-02.jpg")`,
                  backgroundPosition: "50% 50%",
                  backgroundSize: "100% auto",

                  height: 758,
                }}
              ></Box>
            </Grid>

            <Grid item xs={6}>
              <Box
                sx={{
                  bgcolor: "#F5F5F5",

                  height: 758,

                  position: "relative",

                  display: "flex",
                  flexDirection: "column",

                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",

                    top: -30,
                    left: 30,
                  }}
                >
                  <Typography
                    color="info.main"
                    fontSize={81}
                    fontWeight="bold"
                    fontFamily={"PlayfairDisplay"}
                  >
                    02
                  </Typography>
                </Box>

                <Typography fontSize={19} fontWeight="bold" color="info.main">
                  3가지 효과
                </Typography>

                <Typography
                  fontSize={14}
                  sx={{
                    mt: "25px",
                    lineHeight: "25px",
                  }}
                  align="center"
                >
                  3가지의 다른 초음파를 교차로 출력
                  <br />
                  <br />
                  - Blue 콜라겐 생성 촉진
                  <br />
                  - Green 홍조,미백, 보습
                  <br />- Red 화장품 유효성분 침투률 확대
                </Typography>

                <Button
                  variant="outlined"
                  sx={{
                    mt: "59px",

                    width: 160,
                    height: 48,

                    fontSize: 14,
                  }}
                >
                  자세히 보기
                </Button>
              </Box>
            </Grid>

            <Grid item xs={6}>
              <Box
                sx={{
                  bgcolor: "#F5F5F5",

                  height: 758,

                  position: "relative",

                  display: "flex",
                  flexDirection: "column",

                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",

                    top: -30,
                    right: 30,
                  }}
                >
                  <Typography
                    color="info.main"
                    fontSize={81}
                    fontWeight="bold"
                    fontFamily={"PlayfairDisplay"}
                  >
                    03
                  </Typography>
                </Box>

                <Typography fontSize={19} fontWeight="bold" color="info.main">
                  인증을 통한 안정성
                </Typography>

                <Typography
                  fontSize={14}
                  sx={{
                    mt: "25px",
                    lineHeight: "25px",
                  }}
                  align="center"
                >
                  KC, CE, FCC, RoHS 인증완료
                  <br />
                  초음파젤 피부 저자극 테스트 완료
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={6}>
              <Box
                sx={{
                  background: `url("/images/cellaticmicro_detail-03.jpg")`,
                  backgroundPosition: "80% 50%",
                  backgroundSize: "auto 120%",

                  height: 758,
                }}
              ></Box>
            </Grid>

            <Grid item xs={12}>
              <Box
                sx={{
                  my: "80px",

                  position: "relative",

                  display: "flex",
                  flexDirection: "column",

                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  color="info.main"
                  fontSize={81}
                  fontWeight="bold"
                  fontFamily={"PlayfairDisplay"}
                >
                  04
                </Typography>

                <Typography fontSize={19} fontWeight="bold" color="info.main">
                  직관적인 사용방식과 편리한 충전
                </Typography>

                <Typography
                  fontSize={14}
                  sx={{
                    mt: "25px",
                    lineHeight: "25px",
                  }}
                  align="center"
                >
                  손에 알맞은 사이즈와 C타입 충전 방식으로 보다 편리하고
                  <br />
                  오래 사용할 수 있습니다. ( 4시간 완충 / 최대 4주 사용 가능)
                  <br />
                  고밀도 초음파로 피부에 새로운 탄력을 더하세요.
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Container
            maxWidth={false}
            sx={{
              maxWidth: 1200,

              my: "137px",
            }}
          >
            <Box
              sx={{
                display: "flex",
              }}
            >
              <Box
                sx={{
                  background: `url("/images/cellaticmicro_detail-04.jpg")`,
                  backgroundSize: "100%",

                  borderRadius: "1rem",

                  width: 830,
                  height: 374,
                }}
              ></Box>

              <Box
                sx={{
                  ml: 3,

                  background: `url("/images/cellaticmicro_detail-05.jpg")`,
                  backgroundSize: "auto 100%",
                  backgroundPosition: "50% 0%",

                  borderRadius: "1rem",

                  width: 586,
                  height: 374,
                }}
              ></Box>
            </Box>

            <Box
              sx={{
                mt: 3,

                display: "flex",
              }}
            >
              <Box
                sx={{
                  background: `url("/images/cellaticmicro_detail-06.jpg")`,
                  backgroundSize: "auto 100%",
                  backgroundPosition: "50% 0%",

                  borderRadius: "1rem",

                  width: 586,
                  height: 374,
                }}
              ></Box>

              <Box
                sx={{
                  ml: 3,

                  background: `url("/images/cellaticmicro_detail-07.jpg")`,
                  backgroundSize: "100%",

                  borderRadius: "1rem",

                  width: 830,
                  height: 374,
                }}
              ></Box>
            </Box>
          </Container>
        </Box>

        <Ending />
      </Box>
    </>
  ));
}
