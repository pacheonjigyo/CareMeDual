import * as React from "react";

import { Box, Grid, Typography } from "@mui/material";
import { useObserver } from "mobx-react";
import { AppContext } from "../../../stores/index.js";

import { Knob } from "../../../common/Knob.js";
import { Language } from "../../../common/Language.js";
import "./knob.css";

export default function Special(): JSX.Element {
  const slider1Ref: any = React.useRef(null);
  const slider2Ref: any = React.useRef(null);
  const slider3Ref: any = React.useRef(null);
  const slider4Ref: any = React.useRef(null);

  const { commonStore } = React.useContext(AppContext);

  const [value1, setValue1] = React.useState(1);
  const [value2, setValue2] = React.useState(1);

  return useObserver(() => (
    <>
      <Box
        sx={{
          width: "100%",
          // height: commonStore.baseInfo.height,

          display: "flex",
          flexDirection: "column",

          justifyContent: "center",
          alignItems: "center",

          position: "relative",
        }}
      >
        <Box
          sx={{
            width: "100%",
            // height: commonStore.isDesktop ? 771 : 2300,

            textAlign: "center",

            display: "flex",
            flexDirection: "column",
            alignItems: "center",

            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "relative",

              width: 154,
              height: 30,

              mt: "186px",
            }}
          >
            <Box
              sx={{
                position: "absolute",

                left: 70,
                top: 0,

                width: 11,
                height: 11,

                borderRadius: "50%",

                bgcolor: "#CC4D4D",
              }}
            ></Box>

            <Box
              sx={{
                position: "absolute",

                left: 0,
                top: 8,

                width: 11,
                height: 11,

                borderRadius: "50%",

                bgcolor: "#535353",
              }}
            ></Box>

            <Box
              sx={{
                position: "absolute",

                left: 140,
                top: 8,

                width: 11,
                height: 11,

                borderRadius: "50%",

                bgcolor: "#535353",
              }}
            ></Box>
          </Box>

          <Typography
            sx={{
              fontSize: 48,
              fontFamily: "PlayfairDisplay",
              fontWeight: 800,
            }}
          >
            Careme dual
          </Typography>

          <Typography
            sx={{
              mb: "63px",

              fontSize: 24,
            }}
          >
            <Language label="케어미 듀얼" />
          </Typography>

          <Typography
            color="text.secondary"
            sx={{
              fontSize: 14,
            }}
          >
            <Language label="케어미 듀얼의 다이얼을 돌려보며, 사용법을 익혀 보세요!" />
          </Typography>
        </Box>

        <Box
          sx={{
            mt: "550px",

            position: "relative",

            width: 626,
            height: 600,

            zIndex: 1,
          }}
        >
          <Box
            sx={{
              position: "absolute",

              left: "50%",
              top: -550,

              transform: "translate(-50%, 0%)",

              mt: "95px",

              width: 1200,
            }}
          >
            <Grid container spacing={10}>
              <Grid item xs={6}>
                <Box
                  ref={slider1Ref}
                  sx={{
                    borderRadius: "18px",
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      height: 588,

                      background: `url("/images/special-01.jpg")`,
                      backgroundSize: "auto 100%",
                      backgroundPosition: "100%",

                      borderRadius: "18px",

                      boxShadow: `0px 0px ${(value1 - 1) * 20}px red`,

                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  ></Box>
                </Box>
              </Grid>

              <Grid item xs={6}>
                <Box
                  ref={slider2Ref}
                  sx={{
                    borderRadius: "18px",
                  }}
                >
                  <Box
                    sx={{
                      width: "100%",
                      height: 588,

                      background: `url("/images/special-03.jpg")`,
                      backgroundSize: "auto 100%",
                      borderRadius: "18px",

                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",

                      animation:
                        value2 > 1
                          ? `skew-x-shaking ${0.5 / value2}s infinite`
                          : "",

                      position: "relative",
                    }}
                  ></Box>
                </Box>
              </Grid>
            </Grid>

            {/* <Box
              sx={{
                display: "flex",
              }}
            >
              <Box
                ref={slider2Ref}
                onAnimationEnd={() => {
                  slider2Ref.current.classList.remove("slider-2");
                }}
              >
                <Box
                  sx={{
                    ml: 3,

                    width: 468,
                    height: 366,

                    background: `url("/images/special-0${
                      ((Math.abs(value1) + 3) % 4) + 1
                    }.jpg")`,
                    backgroundSize: "150%",
                    backgroundPosition: "50% 100%",

                    borderRadius: "18px",

                    opacity: 0.3,
                  }}
                ></Box>
              </Box>
            </Box>

            <Box
              sx={{
                mt: 3,

                display: "flex",
              }}
            >
              <Box
                ref={slider3Ref}
                onAnimationEnd={() => {
                  slider3Ref.current.classList.remove("slider-3");
                }}
              >
                <Box
                  sx={{
                    width: 468,
                    height: 160,

                    background: `url("/images/special-0${
                      ((Math.abs(value1) + 1) % 4) + 1
                    }.jpg")`,
                    backgroundSize: "100%",

                    borderRadius: "18px",

                    opacity: 0.3,
                  }}
                ></Box>
              </Box>

              <Box
                ref={slider4Ref}
                onAnimationEnd={() => {
                  slider4Ref.current.classList.remove("slider-4");
                }}
              >
                <Box
                  sx={{
                    ml: 3,

                    bgcolor: "black",

                    width: 664,
                    height: 160,

                    background: `url("/images/special-0${
                      ((Math.abs(value1) + 2) % 4) + 1
                    }.jpg")`,
                    backgroundSize: "120%",
                    backgroundPosition: "50% 70%",

                    borderRadius: "18px",

                    opacity: 0.3,
                  }}
                ></Box>
              </Box>
            </Box> */}
          </Box>

          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,

              background: "#E4D1CA",
              borderRadius: "51px 44px 0px 0px",

              width: 626,
              height: 120,
            }}
          ></Box>

          <Box
            sx={{
              background:
                "transparent linear-gradient(90deg, #9E7056 0%, #FFFFFF 28%, #9E7056 53%, #FFFFFF 77%, #9E7056 100%) 0% 0% no-repeat padding-box",

              borderTopLeftRadius: 4,
              borderTopRightRadius: 4,

              position: "absolute",

              top: -5,
              right: 100,

              width: 75,
              height: 15,
            }}
          ></Box>

          <Box
            sx={{
              boxShadow: "0px 50px 50px #00000066",

              width: 626,
              height: 410,

              left: 0,
              top: 18,

              position: "absolute",

              background: "#D4BAAD",
              borderRadius: "37px",

              p: "18px",
            }}
          ></Box>

          <Box
            sx={{
              position: "absolute",

              background: "#E4D1CA",
              border: "2px solid #535353",
              borderRadius: "22px",
              boxShadow: "2px 2px 4px #00000066",

              width: 580,
              height: 375,

              top: 36,
              left: 23,

              zIndex: 2,
            }}
          >
            <Box
              sx={{
                position: "absolute",

                top: 120,
                left: 210,

                width: 271,

                transform: "translate(-50%, 0%)",
              }}
            >
              <Knob
                size={120}
                numTicks={5}
                degrees={110}
                min={1}
                max={6}
                value={value1}
                color={true}
                onChange={(newValue) => {
                  console.log(newValue);

                  setValue1(newValue);

                  if (newValue > 1) {
                    slider1Ref.current.classList.add("slider-1");
                  } else {
                    slider1Ref.current.classList.remove("slider-1");
                  }
                }}
              />
            </Box>

            <Box
              sx={{
                position: "absolute",

                top: 250,
                left: 240,

                width: 271,

                transform: "translate(-50%, 0%)",
              }}
            >
              <Typography
                fontSize={13}
                sx={{
                  mt: "41px",
                }}
              >
                High Frequency
              </Typography>
            </Box>

            <Box
              sx={{
                position: "absolute",

                top: 120,
                right: 100,

                width: 271,

                transform: "translate(50%, 0%)",
              }}
            >
              <Knob
                size={120}
                numTicks={5}
                degrees={110}
                min={1}
                max={6}
                value={value2}
                color={true}
                onChange={(newValue) => {
                  console.log(newValue);

                  setValue2(newValue);

                  if (newValue > 1) {
                    slider2Ref.current.classList.add("slider-2");
                  } else {
                    slider2Ref.current.classList.remove("slider-2");
                  }
                }}
              />
            </Box>

            <Box
              sx={{
                position: "absolute",

                top: 250,
                right: 150,

                width: 271,

                transform: "translate(50%, 0%)",
              }}
            >
              <Typography
                fontSize={13}
                sx={{
                  mt: "41px",
                }}
                align="center"
              >
                Low Frequency
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            background: `url("/images/background-01.jpg")`,
            backgroundSize: "100%",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",

            width: "100%",
            height: 480,

            zIndex: 2,

            display: "flex",
            justifyContent: "right",
          }}
        >
          <Box
            sx={{
              mt: "188px",
              mr: "218px",

              color: "white",
            }}
          >
            <Typography
              fontSize={48}
              fontWeight="bold"
              fontFamily="PlayfairDisplay"
            >
              Anyone, Always
            </Typography>

            <Typography fontSize={24}>
              <Language label="CAREME의 약속입니다." />
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  ));
}
