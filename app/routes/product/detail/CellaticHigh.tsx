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
import { Language } from "../../../common/Language.js";
import { SlideScroll } from "../../../common/SlideScroll.js";
import { initToolbarEvent } from "../../../common/ToolbarEvent.js";
import { AppContext } from "../../../stores/index.js";
import Ending from "../../common/Ending.js";

SwiperCore.use([Autoplay, Navigation, Pagination, Keyboard, Mousewheel]);

export default function CellaticHigh(): JSX.Element {
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

            left: 0,
            top: 0,
          }}
        >
          <Box
            sx={{
              background: `url("/images/slider-02.jpg")`,
              backgroundSize: "100%",
              backgroundPosition: "100% 50%",

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

              color: "success.main",
            }}
          >
            <Typography
              fontSize={64}
              fontFamily="PlayfairDisplay"
              fontWeight={"bold"}
            >
              CAREME Dual
            </Typography>

            <Typography fontSize={24}>
              <Language label="케어미 듀얼" /> 고주파 EMS 마사지기
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
            fontSize={16}
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
              <img src="/images/cellatichigh_sketch.svg" height={240} />

              <Typography
                color="success.main"
                sx={{
                  mt: "41px",

                  lineHeight: "33px",
                  letterSpacing: "-0.5px",
                }}
                align="center"
                fontSize={19}
                fontWeight="bold"
              >
                Cellatic
              </Typography>

              <Typography
                sx={{
                  mt: "37px",

                  lineHeight: "33px",
                  letterSpacing: "-0.5px",
                }}
                align="center"
                fontSize={14}
              >
                1MHz 고주파 피부 속 4mm깊이에 있는 진피층에 자극을 주어
                <br />
                생체열을 발생시켜 콜라겐 생성 및 혈액순환 등에 도움을 주는
                패치형 기기입니다.
                <br />
                <br />
                염화은 필름을 사용하며 피부 저자극 테스트를 통과, 하이드로겔
                패치를 활용하여
                <br />내 피부를 위해 안전하게 이용하세요.
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              // alignItems: "center",

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
                  mt: "36px",
                }}
              >
                효과
              </Typography>

              <Typography
                fontSize={14}
                sx={{
                  mt: "24px",
                }}
              >
                1MHz 고주파를 피부 진피층에 전달,
                <br />
                주름 및 탄력 개선에 도움.
                <br />
                피부 임상 시험 진행 완료.
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
                  mt: "36px",
                }}
              >
                편의성
              </Typography>

              <Typography
                fontSize={14}
                sx={{
                  mt: "24px",
                }}
              >
                붙이는 패치타입 제품으로 사용동작 없이
                <br />
                쉽고, 편리하게 관리하세요.
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
                  mt: "36px",
                }}
              >
                안정성
              </Typography>

              <Typography
                fontSize={14}
                sx={{
                  mt: "24px",
                }}
              >
                피부 임상 시험 진행 완료
                <br />
                피부 저자극 테스트 통과
                <br />
                하이드로겔 사용
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
                    color="success.main"
                    fontSize={81}
                    fontWeight="bold"
                    fontFamily={"PlayfairDisplay"}
                  >
                    01
                  </Typography>
                </Box>

                <Typography
                  fontSize={19}
                  fontWeight="bold"
                  color="success.main"
                >
                  1MHz 고주파
                </Typography>

                <Typography
                  fontSize={14}
                  sx={{
                    mt: "25px",
                    lineHeight: "25px",
                  }}
                  align="center"
                >
                  셀라틱 CELLATIC은 1MHz 고주파가 피부 속
                  <br />
                  4mm깊이에 진피층을 자극하여 생체열을 발행시키고
                  <br />
                  콜라겐 생성 등을 촉진시켜 주름 및 탄력 개선에 도움을 줍니다.
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
                  background: `url("/images/cellatichigh_detail-01.jpg")`,
                  backgroundPosition: "50% 50%",
                  backgroundSize: "auto 100%",

                  height: 758,
                }}
              ></Box>
            </Grid>

            <Grid item xs={6}>
              <Box
                sx={{
                  background: `url("/images/cellatichigh_detail-02.jpg")`,
                  backgroundPosition: "50% 0%",
                  backgroundSize: "auto 100%",

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
                    color="success.main"
                    fontSize={81}
                    fontWeight="bold"
                    fontFamily={"PlayfairDisplay"}
                  >
                    02
                  </Typography>
                </Box>

                <Typography
                  fontSize={19}
                  fontWeight="bold"
                  color="success.main"
                >
                  RF와 하이드로겔 패치
                </Typography>

                <Typography
                  fontSize={14}
                  sx={{
                    mt: "25px",
                    lineHeight: "25px",
                  }}
                  align="center"
                >
                  셀라틱 CELLATIC의 패치는 RF와 하이드로겔 패치를 결합하여
                  <br />
                  쉽고 편하게 문지를 필요 없이 피부관리가 필요한 곳에 지그시
                  붙여 주세요.
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
                    color="success.main"
                    fontSize={81}
                    fontWeight="bold"
                    fontFamily={"PlayfairDisplay"}
                  >
                    03
                  </Typography>
                </Box>

                <Typography
                  fontSize={19}
                  fontWeight="bold"
                  color="success.main"
                >
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
                  KC, CE, FCC 안전인증 완료
                  <br />
                  하이드로겔 피부 저자극 테스트 완료
                  <br />
                  제네바 발명 전시회 금상,
                  <br />
                  서울 발명전시회 은상 수상
                  <br />
                  <br />
                  안전하게 하루 1번 5분으로 새로움을 더하세요.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={6}>
              <Box
                sx={{
                  background: `url("/images/cellatichigh_detail-03.jpg")`,
                  backgroundPosition: "50% 50%",
                  backgroundSize: "auto 100%",

                  height: 758,
                }}
              ></Box>
            </Grid>

            <Grid item xs={12}>
              <Box
                sx={{
                  my: "100px",

                  position: "relative",

                  display: "flex",
                  flexDirection: "column",

                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography
                  color="success.main"
                  fontSize={81}
                  fontWeight="bold"
                  fontFamily={"PlayfairDisplay"}
                >
                  04
                </Typography>

                <Typography
                  fontSize={19}
                  fontWeight="bold"
                  color="success.main"
                  sx={{
                    mt: 3,
                  }}
                >
                  직관적인 사용방식과 디자인
                </Typography>

                <Typography
                  fontSize={14}
                  sx={{
                    mt: "25px",
                    lineHeight: "25px",
                  }}
                  align="center"
                >
                  5단계 레벨 조절을 터치로 누구나 쉽고 편하게 사용할 수 있으며,
                  <br />
                  작고 컴팩트한 디자인으로 어느 공간에 어울리도록 제작
                  되었습니다.
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
                  background: `url("/images/cellatichigh_detail-04.jpg")`,
                  backgroundSize: "100%",

                  borderRadius: "1rem",

                  width: 830,
                  height: 374,
                }}
              ></Box>

              <Box
                sx={{
                  ml: 3,

                  background: `url("/images/cellatichigh_detail-05.jpg")`,
                  backgroundSize: "auto 100%",

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
                  background: `url("/images/cellatichigh_detail-06.jpg")`,
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

                  background: `url("/images/cellatichigh_detail-07.jpg")`,
                  backgroundSize: "100%",
                  backgroundPosition: "0% 50%",

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
