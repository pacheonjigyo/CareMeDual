import * as React from "react";

import { Facebook, Instagram, YouTube } from "@mui/icons-material";
import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import { useObserver } from "mobx-react";
import { Language } from "../../common/Language.js";
import { AppContext } from "../../stores/index.js";

export default function Ending(): JSX.Element {
  const { commonStore } = React.useContext(AppContext);

  return useObserver(() => (
    <>
      <Box
        sx={{
          bgcolor: "#FAF7F4",
          width: "100%",
          height: 300,
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: 88,

            borderBottom: 1,
            borderColor: "divider",
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

                width: "100%",
                height: 88,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                }}
              >
                <Button
                  sx={{
                    fontSize: 16,
                    fontWeight: "bold",
                  }}
                >
                  <Language label="이용약관" />
                </Button>

                <Button
                  sx={{
                    ml: "40px",
                    fontSize: 16,
                    fontWeight: "bold",
                  }}
                >
                  <Language label="개인정보처리방침" />
                </Button>
              </Box>

              <Box
                sx={{
                  display: "flex",
                }}
              >
                <IconButton>
                  <Instagram />
                </IconButton>

                <IconButton>
                  <Facebook />
                </IconButton>

                <IconButton>
                  <YouTube />
                </IconButton>
              </Box>
            </Box>
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
              mt: "32px",

              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",

              width: "100%",
            }}
          >
            <Box>
              <Typography
                fontSize={12}
                color="text.secondary"
                sx={{
                  lineHeight: "24px",
                }}
              >
                <b>대표이사</b>
                &nbsp; 김하영
                <br />
                <b>[하호메디] 케어미</b>
                &nbsp; (우)26462 강원도 원주시 양지로 80 (반곡동 1903-2)
                <br />
                <b>번호</b>
                &nbsp; 070-8151-8673
                <br />
                <b>통신판매업번호</b>
                &nbsp; 제 2019-강원원주-00877호
                <br />
                <b>사업자등록번호</b>
                &nbsp; 114-16-50886
              </Typography>
            </Box>

            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "end",

                height: 120,
              }}
            >
              <img src="/images/logo_horizontal.svg" height={56} />

              <Typography color="text.secondary" fontSize={12}>
                Copyright ⓒ 2023 나를 위한 선택, CAREME — Anyone, Always。 All
                rights reserved.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  ));
}
