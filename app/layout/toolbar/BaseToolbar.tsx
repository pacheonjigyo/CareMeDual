import * as React from "react";

import { useObserver } from "mobx-react";
import { AppContext } from "../../stores/index.js";

import {
  AppBar,
  AppBarProps,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { initToolbarEvent } from "../../common/ToolbarEvent.js";

export function BaseToolbar(props: AppToolbarProps): JSX.Element {
  const { commonStore } = React.useContext(AppContext);
  const { sx, ...other } = props;

  const navigate = useNavigate();

  const elRef: any = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    initToolbarEvent(true, elRef);
    // commonStore.setHeaderElem(elRef);
  });

  return useObserver(() => (
    <Box
      sx={{
        bgcolor: "transparent",

        // borderBottom: 1,
        // borderColor: "divider",
      }}
    >
      {/* <Drawer
        anchor={"top"}
        open={commonStore.drawerAppState}
        onClose={() => {
          commonStore.setDrawerAppState(false);
        }}
      >
        <Box
          sx={{
            width: commonStore.baseInfo.width,
          }}
          role="presentation"
        >
          <List
            sx={{
              p: 1,
            }}
          >
            <ListItem key={"language"} disablePadding>
              <Select
                value={commonStore.appInfo.language}
                fullWidth
                onChange={(e) => {
                  commonStore.setAppInfo({
                    ...commonStore.appInfo,

                    language: e.target.value,
                  });
                }}
              >
                <MenuItem value="en">
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    English
                  </Box>
                </MenuItem>
                <MenuItem value="ko">
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    한국어
                  </Box>
                </MenuItem>
              </Select>
            </ListItem>

            <Divider sx={{ my: 1 }} />

            <ListItem key={"home"} disablePadding>
              <ListItemButton href="/" component={NavLink}>
                <ListItemText primary={"HOME"} />
              </ListItemButton>
            </ListItem>

            <Divider sx={{ my: 1 }} />

            <ListItem key={"work"} disablePadding>
              <ListItemButton href="/branding/artwork" component={NavLink}>
                <ListItemText primary={"WORK"} />
              </ListItemButton>
            </ListItem>

            <ListItem key={"information"} disablePadding>
              <ListItemButton href="/info" component={NavLink}>
                <ListItemText primary={"INFO"} />
              </ListItemButton>
            </ListItem>

            <ListItem key={"about"} disablePadding>
              <ListItemButton href="/about" component={NavLink}>
                <ListItemText primary={"ABOUT"} />
              </ListItemButton>
            </ListItem>

            <Divider sx={{ my: 1 }} />

            <ListItem key={"login"} disablePadding>
              <ListItemButton href="/login/user" component={NavLink}>
                <ListItemText
                  primary={wordList["로그인"][commonStore.appInfo.language]}
                />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer> */}

      <AppBar
        ref={elRef}
        sx={{
          bgcolor: "transparent",
          boxShadow: "none",

          height: 88,
        }}
        style={{
          animation: "entrance 0.5s ease 0s 1 normal forwards",
        }}
      >
        <Container
          maxWidth={false}
          sx={{
            maxWidth: "1200px",
          }}
        >
          <Grid container>
            <Grid item xs={4}>
              <Box
                sx={{
                  height: 88,

                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img
                  src="/images/logo_horizontal.svg"
                  height={56}
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    elRef.current.style.animation =
                      "entrance 0.5s ease 0s 1 normal forwards";

                    navigate("/");
                  }}
                />
              </Box>
            </Grid>

            <Grid item xs={8}>
              <Box
                sx={{
                  height: 88,

                  display: "flex",
                  alignItems: "center",
                  justifyContent: "right",
                }}
              >
                <Button
                  sx={{
                    ml: "40px",
                    width: 57,
                  }}
                  onClick={() => {
                    elRef.current.style.animation =
                      "entrance 0.5s ease 0s 1 normal forwards";

                    navigate("/home");
                  }}
                >
                  <Typography fontSize={16} fontFamily={"Gilroy"}>
                    Home
                  </Typography>
                </Button>

                <Button
                  sx={{
                    ml: "40px",
                    width: 57,
                  }}
                  onClick={() => {
                    elRef.current.style.animation =
                      "entrance 0.5s ease 0s 1 normal forwards";

                    navigate("/brand");
                  }}
                >
                  <Typography fontSize={16} fontFamily={"Gilroy"}>
                    Brand
                  </Typography>
                </Button>

                <Button
                  sx={{
                    ml: "40px",
                    width: 57,
                  }}
                  onClick={() => {
                    elRef.current.style.animation =
                      "entrance 0.5s ease 0s 1 normal forwards";

                    navigate("/product");
                  }}
                >
                  <Typography fontSize={16} fontFamily={"Gilroy"}>
                    Product
                  </Typography>
                </Button>

                <Button
                  sx={{
                    ml: "40px",
                    width: 57,
                  }}
                  onClick={() => {
                    window.open("https://smartstore.naver.com/hahomedi86");
                  }}
                >
                  <Typography fontSize={16} fontFamily={"Gilroy"}>
                    Shop
                  </Typography>
                </Button>

                {/* <Button
                  sx={{
                    ml: "40px",
                    width: 57,
                  }}
                  onClick={() => {
                    elRef.current.style.animation =
                      "entrance 0.5s ease 0s 1 normal forwards";

                    navigate("/media");
                  }}
                >
                  <Typography fontSize={16} fontFamily={"Gilroy"}>
                    Media
                  </Typography>
                </Button> */}

                <Box
                  sx={{
                    height: 37,
                  }}
                >
                  <Divider
                    orientation="vertical"
                    sx={{
                      mx: "40px",
                    }}
                  />
                </Box>

                <Select
                  defaultValue={"default"}
                  sx={{
                    width: 130,
                    fontSize: 16,
                    fontFamily: "Gilroy",
                  }}
                  onChange={(e: any) => {
                    if (!e.target.value) {
                      return;
                    }

                    commonStore.setLanguage(e.target.value);
                  }}
                >
                  <MenuItem value="default">Language</MenuItem>
                  <MenuItem value="ko">한국어</MenuItem>
                  <MenuItem value="en">English</MenuItem>
                  <MenuItem value="zh-CN">汉语</MenuItem>
                </Select>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </AppBar>
    </Box>
  ));
}

type AppToolbarProps = Omit<AppBarProps, "children">;
