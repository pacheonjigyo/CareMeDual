import * as React from "react";
import SwiperCore, {
  Autoplay,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
} from "swiper";

import { Box, Container, Divider, Typography, useTheme } from "@mui/material";
import { useObserver } from "mobx-react";

import "swiper/css/autoplay";
import "swiper/css/keyboard";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/swiper.min.css";

import { ParallaxText } from "../../common/AutoScroll.js";
import { SlideScroll } from "../../common/SlideScroll.js";
import { AppContext } from "../../stores/index.js";
import Ending from "../common/Ending.js";
import "./index.css";

SwiperCore.use([Autoplay, Navigation, Pagination, Keyboard, Mousewheel]);

export default function Brand(): JSX.Element {
  const theme = useTheme();

  const coverRef = React.useRef(null);
  const scrollRef = React.useRef(null);

  const { commonStore } = React.useContext(AppContext);

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
              background: `url("/images/brand_main.jpg")`,

              width: commonStore.baseInfo.width,
              height: commonStore.baseInfo.height,
            }}
          ></Box>

          <Box
            sx={{
              position: "absolute",

              left: "50%",
              top: "50%",

              transform: "translate(-50%, -50%)",
            }}
          >
            <Typography
              color="white"
              fontSize={96}
              fontWeight="bold"
              fontFamily="PlayfairDisplay"
              sx={{
                opacity: 0.7,
              }}
            >
              Anyone, Always
            </Typography>
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
            }}
          >
            <SlideScroll />
          </Box>
        </Box>

        <Box
          sx={{
            height: commonStore.baseInfo.height,

            display: "flex",
            justifyContent: "space-between",
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
                p: 20,

                textAlign: "center",
              }}
            >
              <img src="/images/logo_vertical.svg" height={160} />

              <Typography
                sx={{
                  mt: "90px",

                  lineHeight: "42px",
                  letterSpacing: "-0.5px",
                }}
                align="left"
                fontSize={16}
              >
                제조사의 시점이 아닌 소비자의 입장에서 효과, 안전성, 편의성을
                고려하여 제품 개발에서 부터 모든 과정을 진행하고 있습니다.
                하이드로겔과 고주파 등의 전기자극을 이용한 제품들은 기술특허
                4건과 국내외 안전인증, 제네바 발명전시회, 서울 발명전시회에서
                입상을 통해 기술력을 인정 받고 있습니다.
                <br />
                <br />
                누구나 사용할 수 있고, 언제나 사용할 수 있는 제품.
                <br />
                삶에 가까운 곳에 두고 사용될 제품을 만들겠습니다.
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              background: `url("/images/caremedual-01.jpg")`,
              backgroundPosition: "50% 80%",
              width: 972,
            }}
          ></Box>
        </Box>

        <Box
          sx={{
            height: 700,

            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography fontSize={24} fontWeight="bold" align="center">
            {'"'}나를 위한 제품 케어미 CAREME, 평범한 일상에서
            <br />
            지친 나를 위한 순간들에 케어미가 도움이 되었으면 좋겠습니다.{'"'}
          </Typography>
        </Box>

        <Box
          sx={{
            height: 571,

            display: "flex",
            flexDirection: "column",

            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",

              width: 1000,
            }}
          >
            <img src="/images/caremedual_sketch.svg" height={200} />
            <img src="/images/cellatichigh_sketch.svg" height={200} />
            <img src="/images/cellaticmicro_sketch.svg" height={200} />
          </Box>

          <Box
            sx={{
              width: 1200,
            }}
          >
            <Typography
              color="text.secondary"
              fontSize={160}
              fontWeight={"bold"}
              fontFamily="PlayfairDisplay"
              sx={{
                opacity: 0.3,
              }}
            >
              Anyone, Always
            </Typography>

            <Box
              sx={{
                mt: 5,

                display: "flex",
                justifyContent: "center",
                alignItems: "center",

                height: 230,
              }}
            >
              <Box
                sx={{
                  width: 320,
                  textAlign: "center",
                }}
              >
                <img src="/images/effective.png" height={67} />
                <br />
                <Typography
                  fontSize={17}
                  fontWeight="bold"
                  sx={{
                    mt: "28px",
                  }}
                >
                  효과
                </Typography>
                <br />
                <Typography
                  fontSize={14}
                  sx={{
                    mt: "19px",
                  }}
                >
                  고주파와 저주파를 출력하여
                  <br />
                  원하는 부분에 이상적인 효과를 이룸
                </Typography>
              </Box>

              <Box
                sx={{
                  height: 120,
                }}
              >
                <Divider orientation="vertical" />
              </Box>

              <Box
                sx={{
                  width: 420,
                  textAlign: "center",
                }}
              >
                <img src="/images/convenience.png" height={67} />
                <br />
                <Typography
                  fontSize={17}
                  fontWeight="bold"
                  sx={{
                    mt: "28px",
                  }}
                >
                  편의성
                </Typography>
                <br />
                <Typography
                  fontSize={14}
                  sx={{
                    mt: "19px",
                  }}
                >
                  실용적인 오브제형 디자인과
                  <br />
                  누구나 사용하기 편한 직관적인 디자인
                </Typography>
              </Box>

              <Box
                sx={{
                  height: 120,
                }}
              >
                <Divider orientation="vertical" />
              </Box>

              <Box
                sx={{
                  width: 320,
                  textAlign: "center",
                }}
              >
                <img src="/images/stability.png" height={67} />
                <br />
                <Typography
                  fontSize={17}
                  fontWeight="bold"
                  sx={{
                    mt: "28px",
                  }}
                >
                  안정성
                </Typography>
                <br />
                <Typography
                  fontSize={14}
                  sx={{
                    mt: "19px",
                  }}
                >
                  여러 수상과 특허를 통한
                  <br />
                  검증받은 생각과 제품
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            my: 24,
          }}
        >
          <Container
            maxWidth={false}
            sx={{
              maxWidth: 1200,

              position: "relative",
            }}
          >
            <Box
              sx={{
                display: "flex",
              }}
            >
              <Box
                sx={{
                  bgcolor: "black",

                  width: "50%",
                  height: 320,

                  borderRadius: "1rem",

                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    background: `url("/images/brand_keyword-01.jpg")`,
                    backgroundSize: "100%",

                    borderRadius: "1rem",

                    opacity: 0.5,

                    width: "100%",
                    height: 320,
                  }}
                ></Box>

                <Box
                  sx={{
                    position: "absolute",

                    left: 0,
                    top: 0,

                    width: "100%",
                    height: 320,

                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",

                    color: "white",
                  }}
                >
                  <Typography fontSize={32} fontWeight="bold">
                    고객만족
                  </Typography>

                  <Typography
                    fontSize={17}
                    align="center"
                    sx={{
                      mt: "5px",
                    }}
                  >
                    직관적이고 컴팩트한 디자인
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  ml: "19px",

                  bgcolor: "black",

                  width: "50%",
                  height: 320,

                  borderRadius: "1rem",

                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    background: `url("/images/brand_keyword-02.jpg")`,
                    backgroundSize: "100%",

                    borderRadius: "1rem",

                    opacity: 0.5,

                    width: "100%",
                    height: 320,
                  }}
                ></Box>

                <Box
                  sx={{
                    position: "absolute",

                    left: 0,
                    top: 0,

                    width: "100%",
                    height: 320,

                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",

                    color: "white",
                  }}
                >
                  <Typography fontSize={32} fontWeight="bold">
                    성장하는 기업
                  </Typography>

                  <Typography
                    fontSize={17}
                    align="center"
                    sx={{
                      mt: "5px",
                    }}
                  >
                    열정적인 기업
                    <br />
                    소통을 통해 상품 가치 성장
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box
              sx={{
                mt: 3,
                display: "flex",
              }}
            >
              <Box
                sx={{
                  bgcolor: "black",

                  width: "50%",
                  height: 320,

                  borderRadius: "1rem",

                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    background: `url("/images/brand_keyword-03.jpg")`,
                    backgroundSize: "100%",

                    borderRadius: "1rem",

                    opacity: 0.5,

                    width: "100%",
                    height: 320,
                  }}
                ></Box>

                <Box
                  sx={{
                    position: "absolute",

                    left: 0,
                    top: 0,

                    width: "100%",
                    height: 320,

                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",

                    color: "white",
                  }}
                >
                  <Typography fontSize={32} fontWeight="bold">
                    품질보증
                  </Typography>

                  <Typography
                    fontSize={17}
                    align="center"
                    sx={{
                      mt: "5px",
                    }}
                  >
                    검증받은 우리의 생각과 제품
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  ml: "19px",

                  bgcolor: "black",

                  width: "50%",
                  height: 320,

                  borderRadius: "1rem",

                  position: "relative",
                }}
              >
                <Box
                  sx={{
                    background: `url("/images/brand_keyword-04.jpg")`,
                    backgroundSize: "100%",

                    borderRadius: "1rem",

                    opacity: 0.5,

                    width: "100%",
                    height: 320,
                  }}
                ></Box>

                <Box
                  sx={{
                    position: "absolute",

                    left: 0,
                    top: 0,

                    width: "100%",
                    height: 320,

                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",

                    color: "white",
                  }}
                >
                  <Typography fontSize={32} fontWeight="bold">
                    특허 및 수상
                  </Typography>

                  <Typography
                    fontSize={17}
                    align="center"
                    sx={{
                      mt: "5px",
                    }}
                  >
                    입상과 특허를 통해 인정받은 기술력
                  </Typography>
                </Box>
              </Box>
            </Box>

            <Box
              sx={{
                position: "absolute",

                left: "50%",
                top: "50%",

                bgcolor: "white",

                borderRadius: "50%",

                width: 320,
                height: 320,

                transform: "translate(-50%, -50%)",
              }}
            >
              <Box
                sx={{
                  background: `url("/images/earth.png")`,
                  backgroundPosition: "50% 50%",
                  backgroundSize: "100%",

                  height: 320,

                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img src="/images/logo_vertical.svg" height={190} />
              </Box>
            </Box>
          </Container>
        </Box>

        <Box
          sx={{
            bgcolor: "white",

            p: 7,
          }}
        >
          <section ref={scrollRef}>
            <ParallaxText
              baseVelocity={-1}
              direction={1}
              endOffset={-49.5}
              length={2}
              scrollRef={scrollRef}
            >
              {new Array(11).fill(null).map((v, i) => {
                return (
                  <>
                    <Box
                      key={i + 1}
                      sx={{
                        background: `url("/images/certification/${i + 1}.jpg")`,
                        backgroundSize: "100%",

                        borderRadius: "18px",
                        boxShadow: `3px 3px 4px #00000029`,

                        width: 176,
                        height: 240,

                        mr: "34px",
                      }}
                    ></Box>
                  </>
                );
              })}
            </ParallaxText>
          </section>
        </Box>

        <Ending />
      </Box>
    </>
  ));
}
