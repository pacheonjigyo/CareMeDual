import * as React from "react";

import { Box } from "@mui/material";
import { useObserver } from "mobx-react";
import Image from "../../../common/Image.js";
import { Manuscript } from "../../../common/Manuscript.js";
import { AppContext } from "../../../stores/index.js";

export default function Hello(): JSX.Element {
  const { commonStore } = React.useContext(AppContext);

  return useObserver(() => (
    <>
      <Box
        sx={{
          bgcolor: "#fff9ec",

          width: commonStore.baseInfo.width,
          height: commonStore.baseInfo.height,

          position: "fixed",

          zIndex: 1000000000,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: "50%",
            top: "50%",

            transform: "translate(-50%, -50%)",

            animation:
              commonStore.loadingStep === 2
                ? "fade-out 1s ease 0s 1 normal forwards"
                : "unset",
          }}
        >
          <Box
            sx={{
              borderTop: 1,
              borderColor: "#E55C5C",

              mb: "6px",
            }}
          ></Box>

          <Box
            sx={{
              display: "flex",
              mb: "6px",
            }}
          >
            {commonStore.loadingText.slice(0, 10).map((v, i) => (
              <>
                <Manuscript
                  value={i}
                  sx={{
                    border:
                      i === 1 || i === 3 || i === 5 || i === 7 ? 1 : "unset",
                    borderTop:
                      i === 0 ||
                      i === 2 ||
                      i === 4 ||
                      i === 6 ||
                      i === 8 ||
                      i === 9
                        ? 1
                        : "auto",
                    borderBottom:
                      i === 0 ||
                      i === 2 ||
                      i === 4 ||
                      i === 6 ||
                      i === 8 ||
                      i === 9
                        ? 1
                        : "auto",
                    borderRight: i === 8 ? 1 : "auto",
                  }}
                >
                  {v === null ? (
                    <Image
                      src="/images/orange.svg"
                      height={commonStore.isDesktop ? 48 : 24}
                    />
                  ) : (
                    v
                  )}
                </Manuscript>
              </>
            ))}
          </Box>

          <Box
            sx={{
              display: "flex",
              mb: "6px",
            }}
          >
            {commonStore.loadingText.slice(10, 20).map((v, i) => (
              <>
                <Manuscript
                  value={10 + i}
                  sx={{
                    border:
                      i === 1 || i === 3 || i === 5 || i === 7 ? 1 : "unset",
                    borderTop:
                      i === 0 ||
                      i === 2 ||
                      i === 4 ||
                      i === 6 ||
                      i === 8 ||
                      i === 9
                        ? 1
                        : "auto",
                    borderBottom:
                      i === 0 ||
                      i === 2 ||
                      i === 4 ||
                      i === 6 ||
                      i === 8 ||
                      i === 9
                        ? 1
                        : "auto",
                    borderRight: i === 8 ? 1 : "auto",
                  }}
                >
                  {v === null ? (
                    <Image
                      src="/images/orange.svg"
                      height={commonStore.isDesktop ? 48 : 24}
                    />
                  ) : (
                    v
                  )}
                </Manuscript>
              </>
            ))}
          </Box>

          <Box
            sx={{
              borderTop: 1,
              borderColor: "#E55C5C",

              mt: "6px",
            }}
          ></Box>
        </Box>
      </Box>
    </>
  ));
}
