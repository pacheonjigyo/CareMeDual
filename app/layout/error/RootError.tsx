import * as React from "react";
import Image from "../../common/Image.js";

import { Box, Container, Link, Typography } from "@mui/material";
import { useObserver } from "mobx-react";
import { useRouteError } from "react-router-dom";
import { initEnvironment } from "../../common/Environment.js";
import { Link as NavLink } from "../../common/Link.js";
import { AppContext } from "../../stores/index.js";

export function RootError(): JSX.Element {
  const { commonStore } = React.useContext(AppContext);

  const err = useRouteError() as RouteError;

  React.useEffect(() => {
    initEnvironment(commonStore);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return useObserver(() => (
    <>
      <Box
        sx={{
          position: "relative",
          width: commonStore.baseInfo.width,
          height: commonStore.baseInfo.height,
        }}
      >
        <Container
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
          maxWidth="sm"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Link
            color="inherit"
            underline="none"
            href="/"
            component={NavLink}
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Image
              src={"/images/logo.svg"}
              style={{ height: 66 }}
              alt="CAREME로고"
            />
          </Link>
          <Typography
            sx={{
              mt: "24px",
              mb: "8px",
              fontSize: "2em",
              fontWeight: 300,
              "& strong": { fontWeight: 400 },
            }}
            variant="h1"
            align="center"
          >
            접근 할 수 없어요.
          </Typography>
          <Typography>
            ({err.status || 500} {err.statusText ?? err.message})
          </Typography>
        </Container>
      </Box>
    </>
  ));
}

type RouteError = Error & { status?: number; statusText?: string };
