import { Box, Typography } from "@mui/material";

export function SlideScroll() {
  return (
    <>
      <Box
        sx={{
          width: "44px",
          height: "65px",
          border: "2px solid white",
          borderRadius: "28px",

          position: "relative",

          animation: "scroll-rising 3s infinite",
        }}
      >
        <Box
          sx={{
            position: "absolute",

            left: "50%",
            top: "14px",

            width: "8px",
            height: "8px",
            background: "white",
            borderRadius: "50%",

            transform: "translate(-50%, -50%)",
          }}
        ></Box>
      </Box>

      <Typography
        color="white"
        sx={{
          my: "12px",
          letterSpacing: "2.64px",

          // animation: "scroll-rising 5s infinite",
        }}
      >
        S c r o ll
      </Typography>
    </>
  );
}
