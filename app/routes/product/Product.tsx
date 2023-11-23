import * as React from "react";
import SwiperCore, {
  Autoplay,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
} from "swiper";

import { Box, Button, Container, Typography } from "@mui/material";
import { useObserver } from "mobx-react";

import "swiper/css/autoplay";
import "swiper/css/keyboard";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/swiper.min.css";

import { ArrowBackIosNew, ArrowForwardIos } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { AppContext } from "../../stores/index.js";
import "./index.css";

SwiperCore.use([Autoplay, Navigation, Pagination, Keyboard, Mousewheel]);

export default function Product(): JSX.Element {
  const { commonStore } = React.useContext(AppContext);
  const navigate = useNavigate();

  return useObserver(() => (
    <>
      <Box
        className="hideScroll"
        sx={{
          height: commonStore.baseInfo.height,
          overflowY: "auto",

          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",

            top: "50%",
            left: 100,

            transform: "translateY(-50%)",

            zIndex: 10,
          }}
        >
          <Box
            sx={{
              width: 10,
              height: 10,

              bgcolor:
                commonStore.swiper?.activeIndex === 0
                  ? "error.main"
                  : commonStore.swiper?.activeIndex === 1
                  ? "success.main"
                  : commonStore.swiper?.activeIndex === 2
                  ? "info.main"
                  : "black",

              opacity:
                commonStore.swiper?.activeIndex === 0
                  ? 1
                  : commonStore.swiper?.activeIndex === 1
                  ? 0.5
                  : commonStore.swiper?.activeIndex === 2
                  ? 0.5
                  : 1,

              borderRadius: "50%",

              cursor: "pointer",
            }}
            onClick={() => {
              commonStore.swiper?.slideTo(0);
            }}
          ></Box>

          <Box
            sx={{
              mt: 3,

              width: 10,
              height: 10,

              bgcolor:
                commonStore.swiper?.activeIndex === 0
                  ? "error.main"
                  : commonStore.swiper?.activeIndex === 1
                  ? "success.main"
                  : commonStore.swiper?.activeIndex === 2
                  ? "info.main"
                  : "black",

              opacity:
                commonStore.swiper?.activeIndex === 0
                  ? 0.5
                  : commonStore.swiper?.activeIndex === 1
                  ? 1
                  : commonStore.swiper?.activeIndex === 2
                  ? 0.5
                  : 1,

              borderRadius: "50%",

              cursor: "pointer",
            }}
            onClick={() => {
              commonStore.swiper?.slideTo(1);
            }}
          ></Box>

          <Box
            sx={{
              mt: 3,

              width: 10,
              height: 10,

              bgcolor:
                commonStore.swiperPeopleIndex === 0
                  ? "error.main"
                  : commonStore.swiperPeopleIndex === 1
                  ? "success.main"
                  : commonStore.swiperPeopleIndex === 2
                  ? "info.main"
                  : "black",

              opacity:
                commonStore.swiperPeopleIndex === 0
                  ? 0.5
                  : commonStore.swiperPeopleIndex === 1
                  ? 0.5
                  : commonStore.swiperPeopleIndex === 2
                  ? 1
                  : 1,

              borderRadius: "50%",

              cursor: "pointer",
            }}
            onClick={() => {
              commonStore.swiper?.slideTo(2);
            }}
          ></Box>
        </Box>

        <Box
          sx={{
            bgcolor: "white",
            position: "relative",

            width: commonStore.baseInfo.width,
            height: commonStore.baseInfo.height,

            display: "flex",
          }}
        >
          <Box
            sx={{
              width: "100%",
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
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",

                  height: commonStore.baseInfo.height,
                }}
              >
                <Box
                  sx={{
                    textAlign: "left",

                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",

                    height: 650,
                  }}
                >
                  {commonStore.swiperPeopleIndex === 0 ? (
                    <>
                      <Box>
                        <Typography
                          fontSize={64}
                          color="#CC4D4D"
                          align="left"
                          fontFamily={"PlayfairDisplay"}
                          fontWeight="bold"
                          sx={{
                            lineHeight: "74px",
                          }}
                        >
                          CAREME
                          <br />
                          Dual
                        </Typography>

                        <Typography
                          color="#CC4D4D"
                          fontSize={24}
                          sx={{
                            mt: 1,
                          }}
                        >
                          <b>케어미 듀얼</b> 고주파 EMS 마사지기
                        </Typography>
                      </Box>
                    </>
                  ) : null}

                  {commonStore.swiperPeopleIndex === 1 ? (
                    <>
                      <Box>
                        <Typography
                          fontSize={64}
                          color="#50716E"
                          align="left"
                          fontFamily={"PlayfairDisplay"}
                          fontWeight="bold"
                          sx={{
                            lineHeight: "74px",
                          }}
                        >
                          CELLATIC
                        </Typography>

                        <Typography
                          color="#50716E"
                          fontSize={24}
                          sx={{
                            mt: 1,
                          }}
                        >
                          <b>셀라틱</b> 고주파 마사지
                        </Typography>
                      </Box>
                    </>
                  ) : null}

                  {commonStore.swiperPeopleIndex === 2 ? (
                    <>
                      <Box>
                        <Typography
                          fontSize={64}
                          color="#485770"
                          align="left"
                          fontFamily={"PlayfairDisplay"}
                          fontWeight="bold"
                          sx={{
                            lineHeight: "59px",
                          }}
                        >
                          CELLATIC
                          <br />
                          ultrasonic wave
                        </Typography>

                        <Typography
                          color="#485770"
                          fontSize={24}
                          sx={{
                            mt: 1,
                          }}
                        >
                          셀라틱 초음파
                        </Typography>
                      </Box>
                    </>
                  ) : null}

                  <Box>
                    {commonStore.swiperPeopleIndex === 0 ? (
                      <>
                        <Typography
                          color="#CC4D4D"
                          fontSize={14}
                          sx={{
                            mt: "96px",
                          }}
                        >
                          RF+EMS를 결합한 유일무이한 마사지로
                          <br />
                          문지를 필요 없는 패치형 마사지기기입니다.
                        </Typography>
                      </>
                    ) : commonStore.swiperPeopleIndex === 1 ? (
                      <>
                        <Typography
                          color="#50716E"
                          fontSize={14}
                          sx={{
                            mt: "96px",
                          }}
                        >
                          1MHz 고주파 피부 속 4mm깊이에 있는 진피층에 자극을
                          주어 생체열을
                          <br />
                          발생시켜 콜라겐 생성 및 혈액순환 등에 도움을 주는
                          패치형 기기입니다.
                        </Typography>
                      </>
                    ) : commonStore.swiperPeopleIndex === 2 ? (
                      <>
                        <Typography
                          color="#485770"
                          fontSize={14}
                          sx={{
                            mt: "96px",
                          }}
                        >
                          3,10 MHz의 서로 다른 초음파를 교차로 출력시켜 여러
                          깊이에
                          <br />
                          자극을 주어 피부개선을 빠르고, 오랫동안 유지시켜
                          줍니다.
                        </Typography>
                      </>
                    ) : null}

                    <Button
                      color={
                        commonStore.swiperPeopleIndex === 0
                          ? "error"
                          : commonStore.swiperPeopleIndex === 1
                          ? "success"
                          : commonStore.swiperPeopleIndex === 2
                          ? "info"
                          : "primary"
                      }
                      variant="outlined"
                      sx={{
                        mt: "57px",

                        fontSize: 14,

                        width: 160,
                        height: 48,
                      }}
                      onClick={() => {
                        if (commonStore.swiperPeopleIndex === 0) {
                          navigate("/product/careme/dual");
                        } else if (commonStore.swiperPeopleIndex === 1) {
                          navigate("/product/cellatic/high-frequency");
                        } else if (commonStore.swiperPeopleIndex === 2) {
                          navigate("/product/cellatic/micro-wave");
                        }
                      }}
                    >
                      자세히 보기
                    </Button>

                    <Box
                      sx={{
                        display: "flex",

                        mt: "67px",
                      }}
                    >
                      <Box
                        sx={{
                          display: "flex",
                        }}
                      >
                        <Button
                          color={
                            commonStore.swiperPeopleIndex === 0
                              ? "error"
                              : commonStore.swiperPeopleIndex === 1
                              ? "success"
                              : commonStore.swiperPeopleIndex === 2
                              ? "info"
                              : "primary"
                          }
                          variant={
                            commonStore.swiperPeopleIndex === 0
                              ? "outlined"
                              : "contained"
                          }
                          sx={{
                            p: 0,

                            minWidth: 33,
                            height: 33,

                            borderRadius: 0,
                          }}
                          onClick={() => {
                            commonStore.swiper.slideTo(
                              commonStore.swiperPeopleIndex - 1,
                            );
                          }}
                        >
                          <ArrowBackIosNew sx={{ fontSize: 14 }} />
                        </Button>

                        <Button
                          color={
                            commonStore.swiperPeopleIndex === 0
                              ? "error"
                              : commonStore.swiperPeopleIndex === 1
                              ? "success"
                              : commonStore.swiperPeopleIndex === 2
                              ? "info"
                              : "primary"
                          }
                          variant={
                            commonStore.swiperPeopleIndex === 2
                              ? "outlined"
                              : "contained"
                          }
                          sx={{
                            ml: "5px",

                            p: 0,

                            minWidth: 33,
                            height: 33,

                            borderRadius: 0,
                          }}
                          onClick={() => {
                            commonStore.swiper.slideTo(
                              commonStore.swiperPeopleIndex + 1,
                            );
                          }}
                        >
                          <ArrowForwardIos sx={{ fontSize: 14 }} />
                        </Button>
                      </Box>
                    </Box>
                  </Box>
                </Box>

                <Box
                  sx={{
                    textAlign: "right",

                    zIndex: 1,

                    height: 650,

                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    // alignItems: "center",
                  }}
                >
                  {commonStore.swiperPeopleIndex === 0 ? (
                    <Typography
                      color="#CC4D4D"
                      fontSize={48}
                      fontFamily="PlayfairDisplay"
                    >
                      01/<span style={{ opacity: 0.4 }}>03</span>
                    </Typography>
                  ) : null}

                  {commonStore.swiperPeopleIndex === 1 ? (
                    <Typography
                      color="#50716E"
                      fontSize={48}
                      fontFamily="PlayfairDisplay"
                    >
                      02/<span style={{ opacity: 0.4 }}>03</span>
                    </Typography>
                  ) : null}

                  {commonStore.swiperPeopleIndex === 2 ? (
                    <Typography
                      color="#485770"
                      fontSize={48}
                      fontFamily="PlayfairDisplay"
                    >
                      03/<span style={{ opacity: 0.4 }}>03</span>
                    </Typography>
                  ) : null}

                  <Box
                    sx={{
                      width: 700,
                      height: 550,
                    }}
                  >
                    <Swiper
                      autoplay={{
                        delay: 5000,
                        // disableOnInteraction: true,
                      }}
                      slidesPerView={1}
                      spaceBetween={0}
                      speed={1000}
                      // direction={"vertical"}
                      centeredSlides={true}
                      loopedSlides={true}
                      keyboard={true}
                      mousewheel={true}
                      scrollbar={{ draggable: true }}
                      // initialSlide={1}
                      onSwiper={(e) => {
                        commonStore.setSwiper(e);
                      }}
                      onSlideChange={(e) => {
                        commonStore.setSwiperPeopleIndex(e.activeIndex);
                      }}
                    >
                      <SwiperSlide
                        style={{
                          background: "transparent",
                        }}
                      >
                        <Box
                          sx={{
                            width: 700,
                            height: 550,

                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <Box
                            sx={{
                              background: `url("/images/product-01.png")`,
                              backgroundSize: "1600px auto",
                              backgroundPosition: "30% 60%",

                              width: 700,
                              height: 550,
                            }}
                          ></Box>
                        </Box>
                      </SwiperSlide>

                      <SwiperSlide
                        style={{
                          background: "transparent",
                        }}
                      >
                        <Box
                          sx={{
                            width: 700,
                            height: 550,

                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <Box
                            sx={{
                              background: `url("/images/product-02.png")`,
                              backgroundSize: "800px auto",
                              backgroundPosition: "40% 60%",

                              width: 560,
                              height: 440,
                            }}
                          ></Box>
                        </Box>
                      </SwiperSlide>

                      <SwiperSlide
                        style={{
                          background: "transparent",
                        }}
                      >
                        <Box
                          sx={{
                            width: 700,
                            height: 550,

                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          <Box
                            sx={{
                              background: `url("/images/product-03.png")`,
                              backgroundSize: "100%",
                              backgroundPosition: "40% 60%",

                              width: 120,
                              height: 440,

                              rotate: "-20deg",
                            }}
                          ></Box>
                        </Box>
                      </SwiperSlide>
                    </Swiper>
                  </Box>

                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "right",
                    }}
                  >
                    <Typography
                      color={
                        commonStore.swiperPeopleIndex === 0
                          ? "error.main"
                          : commonStore.swiperPeopleIndex === 1
                          ? "success.main"
                          : commonStore.swiperPeopleIndex === 2
                          ? "info.main"
                          : "black"
                      }
                      fontSize={17}
                      fontWeight="bold"
                      fontFamily={"PlayfairDisplay"}
                      sx={{
                        ml: "45px",
                      }}
                    >
                      {commonStore.swiperPeopleIndex === 0
                        ? "CAREME Dual"
                        : commonStore.swiperPeopleIndex === 1
                        ? "CELLATIC"
                        : commonStore.swiperPeopleIndex === 2
                        ? "CELLATIC ultrasonic wave"
                        : "-"}
                    </Typography>

                    <Box
                      sx={{
                        ml: 5,

                        width: commonStore.swiperPeopleIndex === 0 ? 16 : 48,
                        height: commonStore.swiperPeopleIndex === 0 ? 16 : 0,

                        borderRadius:
                          commonStore.swiperPeopleIndex === 0 ? "50%" : 8,
                        border: 2,
                        borderColor:
                          commonStore.swiperPeopleIndex === 0
                            ? "error.main"
                            : commonStore.swiperPeopleIndex === 1
                            ? "success.main"
                            : commonStore.swiperPeopleIndex === 2
                            ? "info.main"
                            : "black",

                        cursor: "pointer",
                      }}
                      onClick={() => {
                        commonStore.swiper.slideTo(0);
                      }}
                    ></Box>

                    <Box
                      sx={{
                        ml: "17px",
                        width: commonStore.swiperPeopleIndex === 1 ? 16 : 48,
                        height: commonStore.swiperPeopleIndex === 1 ? 16 : 0,

                        border: 2,

                        borderColor:
                          commonStore.swiperPeopleIndex === 0
                            ? "error.main"
                            : commonStore.swiperPeopleIndex === 1
                            ? "success.main"
                            : commonStore.swiperPeopleIndex === 2
                            ? "info.main"
                            : "black",
                        borderRadius: "1rem",

                        cursor: "pointer",
                      }}
                      onClick={() => {
                        commonStore.swiper.slideTo(1);
                      }}
                    ></Box>

                    <Box
                      sx={{
                        ml: "17px",
                        width: commonStore.swiperPeopleIndex === 2 ? 16 : 48,
                        height: commonStore.swiperPeopleIndex === 2 ? 16 : 0,

                        borderRadius:
                          commonStore.swiperPeopleIndex === 2 ? "50%" : 8,
                        border: 2,

                        borderColor:
                          commonStore.swiperPeopleIndex === 0
                            ? "error.main"
                            : commonStore.swiperPeopleIndex === 1
                            ? "success.main"
                            : commonStore.swiperPeopleIndex === 2
                            ? "info.main"
                            : "black",

                        cursor: "pointer",
                      }}
                      onClick={() => {
                        commonStore.swiper.slideTo(2);
                      }}
                    ></Box>
                  </Box>
                </Box>
              </Box>
            </Container>
          </Box>
        </Box>
      </Box>
    </>
  ));
}
