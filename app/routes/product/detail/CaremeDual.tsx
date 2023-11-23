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

export default function CaremeDual(): JSX.Element {
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
          }}
        >
          <Box
            sx={{
              background: `url("/images/slider-01.jpg")`,
              backgroundSize: "100%",
              backgroundPosition: "100% 70%",

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

              color: "#CC4D4D",
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

            height: 60,
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
              <img src="/images/caremedual_sketch.svg" height={240} />

              <Typography
                color="error"
                sx={{
                  mt: "52px",

                  lineHeight: "42px",
                  letterSpacing: "-0.5px",
                }}
                align="center"
                fontSize={17}
                fontWeight="bold"
              >
                CAREME Dual.
              </Typography>

              <Typography
                sx={{
                  mt: "47px",

                  lineHeight: "33px",
                  letterSpacing: "-0.5px",
                }}
                align="center"
                fontSize={14}
              >
                RF(Radio Frequency)와 EMS(Electrical Muscle Stimulation)를
                <br />
                높은 전도율과 접착력이 높은 하이드로겔을 결합한 제품으로
                <br />
                <b>
                  RF+EMS를 결합한 유일무이한 마사기로 문지를 필요 없는 패치형
                  마사지기기
                </b>
                입니다.
                <br />
                진피층과 근육층에 동시에 자극을 주어 심부열과 전기자극을 일으켜
                <b>체내 조직</b>
                <br />
                <b>온도 상승, 혈류량 증가, 근육 수축/이완</b> 등에 도움을 주는
                제품입니다.
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              height: 124,

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
                  mt: "27px",
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
                고주파와 저주파를 동시에 출력하여
                <br />
                혈액순환과 근육 마사지에 도움을 줍니다.
              </Typography>
            </Box>

            <Divider orientation="vertical" />

            <Box
              sx={{
                width: 400,

                mx: "32px",

                textAlign: "center",
              }}
            >
              <img src="/images/convenience.png" height={61} />

              <Typography
                fontSize={17}
                fontWeight="bold"
                sx={{
                  mt: "27px",
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
                붙이는 패치타입 제품으로 사용동작 없이
                <br />
                쉽고, 편리하게 관리하세요.
              </Typography>
            </Box>

            <Divider orientation="vertical" />

            <Box
              sx={{
                width: 240,

                mx: "41px",

                textAlign: "center",
              }}
            >
              <img src="/images/stability.png" height={61} />

              <Typography
                fontSize={17}
                fontWeight="bold"
                sx={{
                  mt: "26px",
                }}
              >
                안정성
              </Typography>

              <Typography
                fontSize={14}
                sx={{
                  mt: "17px",
                }}
              >
                안전인증 5건 취득,
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

                    top: -24,
                    right: 24,
                  }}
                >
                  <Typography
                    color="error"
                    fontSize={81}
                    fontWeight="bold"
                    fontFamily={"PlayfairDisplay"}
                  >
                    01
                  </Typography>
                </Box>

                <Typography fontSize={19} fontWeight="bold" color="error">
                  RF + EMS 동시 출력
                </Typography>

                <Typography
                  fontSize={14}
                  sx={{
                    mt: "32px",
                    lineHeight: "25px",
                  }}
                  align="center"
                >
                  케어미 듀얼 CAREME dual은 RF와 EMS를 이용하여,
                  <br />
                  진피층과 근육층에 동시에 자극을 주어 심부열과 전기 자극을
                  <br />
                  발생시켜 근육이완과 혈액 순환 촉진 등에 도움을 줍니다.
                </Typography>

                <Button
                  variant="outlined"
                  sx={{
                    mt: "58px",

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
                  background: `url("/images/caremedual_detail-01.jpg")`,
                  backgroundPosition: "0% 50%",

                  height: 758,
                }}
              ></Box>
            </Grid>

            <Grid item xs={6}>
              <Box
                sx={{
                  background: `url("/images/caremedual_detail-02.jpg")`,
                  backgroundPosition: "50% 0%",

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
                    color="error"
                    fontSize={81}
                    fontWeight="bold"
                    fontFamily={"PlayfairDisplay"}
                  >
                    02
                  </Typography>
                </Box>

                <Typography fontSize={19} fontWeight="bold" color="error">
                  문지르지 않는 편리함
                </Typography>

                <Typography
                  fontSize={14}
                  sx={{
                    mt: "25px",
                    lineHeight: "25px",
                  }}
                  align="center"
                >
                  CAREME dual의 패치는 전도율이 높은 염화은 필름과 접착력이
                  <br />
                  높은 하이드로겔을 사용하여 RF와 EMS를 피부에 안전하게
                  전달하며,
                  <br />
                  피부 저자극 테스트 또한 통과하였습니다.
                </Typography>

                <Button
                  variant="outlined"
                  sx={{
                    mt: "58px",

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
                    color="error"
                    fontSize={81}
                    fontWeight="bold"
                    fontFamily={"PlayfairDisplay"}
                  >
                    03
                  </Typography>
                </Box>

                <Typography fontSize={18} fontWeight="bold" color="error">
                  직관적인 사용방식
                </Typography>

                <Typography
                  fontSize={14}
                  sx={{
                    mt: "25px",
                    lineHeight: "25px",
                  }}
                  align="center"
                >
                  좌우 다이얼은 따로 조작이 가능해서 RF 고주파와 EMS 저주파 두
                  가지를 동시에
                  <br />
                  마사지할 수도 있으며, 컨디션이나 용도에 따라서 따로따로
                  작동하게 할 수도 있습니다.
                </Typography>

                <Typography
                  fontSize={14}
                  color="text.secondary"
                  sx={{
                    mt: "40px",
                  }}
                  align="center"
                >
                  다이얼을 돌려 단계별 강도 조절!
                  <br />
                  좌 RF고주파 High Frequency / 우 EMS저주파 Low Frequency
                  <br />
                  <br />
                  *완충시 2시간 이상 사용 가능 (사용환경에 따라 상이할 수 있음)
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={6}>
              <Box
                sx={{
                  background: `url("/images/caremedual_detail-03.jpg")`,
                  backgroundPosition: "50% 50%",

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
                  color="error"
                  fontSize={81}
                  fontWeight="bold"
                  fontFamily={"PlayfairDisplay"}
                >
                  04
                </Typography>

                <Typography fontSize={19} fontWeight="bold" color="error">
                  오브제형 디자인
                </Typography>

                <Typography
                  fontSize={14}
                  sx={{
                    mt: "25px",
                    lineHeight: "25px",
                  }}
                  align="center"
                >
                  일상 속 가까이 두고 써야하기에
                  <br />
                  어느 공간에나 잘 어울리는 디자인은 물론 언제 어디서든 쉽게
                  <br />
                  사용할 수 있는 간편한 휴대성 까지,
                  <br />
                  하루 한 번 7분!
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Container
            maxWidth={false}
            sx={{
              maxWidth: 1200,

              my: "136px",
            }}
          >
            <Box
              sx={{
                display: "flex",
              }}
            >
              <Box
                sx={{
                  background: `url("/images/caremedual_detail-04.jpg")`,
                  backgroundSize: "100%",

                  borderRadius: "1rem",

                  width: 660,
                  height: 374,
                }}
              ></Box>

              <Box
                sx={{
                  ml: 2,

                  background: `url("/images/caremedual_detail-05.jpg")`,
                  backgroundSize: "100%",

                  borderRadius: "1rem",

                  width: 468,
                  height: 374,
                }}
              ></Box>
            </Box>

            <Box
              sx={{
                mt: 2,

                display: "flex",
              }}
            >
              <Box
                sx={{
                  background: `url("/images/caremedual_detail-06.jpg")`,
                  backgroundSize: "100%",

                  borderRadius: "1rem",

                  width: 468,
                  height: 374,
                }}
              ></Box>

              <Box
                sx={{
                  ml: 2,

                  background: `url("/images/caremedual_detail-07.jpg")`,
                  backgroundSize: "100%",

                  borderRadius: "1rem",

                  width: 660,
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
