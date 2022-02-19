import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Slider from "@mui/material/Slider";
import Popover from "@mui/material/Popover";
import InfoIcon from "@mui/icons-material/Info";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#fff",
    },
    secondary: {
      main: "#fff",
    },
    text: {
      primary: "#fff",
      secondary: "#fff",
    },
  },
});

function Trading() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  return (
    <ThemeProvider theme={theme}>
      <Box
        component="form"
        sx={{
          textAlign: "center",
          backdropFilter: "blur(10px)",
          backgroundColor: "#aa4e4e17",
          color: "#fff",
          width: "306px",
          margin: "50px auto",
          padding: "20px",
          "&:before": {
            content: "open-quote",
            opacity: "0.19",
            borderRadius: "11px",
            filter: "blur(50px)",
            backgroundImage:
              "linear-gradient( 97deg, #d100ef -2%, #4700ff 38%, #07a4ff 74%, #00b7ff 104% )",
            position: "absolute",
            width: "100%",
            height: "100%",
            zIndex: "-1",
            left: "0px",
          },
        }}
      >
        <Box
          sx={{
            "& > :not(style)": { m: 0, width: "100%" },
          }}
          noValidate
          error
          autoComplete="off"
        >
          <Typography
            sx={{
              textAlign: "left",
              fontSize: "16px",
              lineHeight: "15px",
              color: "#ffffff66",
              fontWeight: "600",
            }}
            variant="body1"
            gutterBottom
          >
            Amount
          </Typography>
          <TextField
            id="standard-basic"
            label=""
            variant="standard"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Typography
                    sx={{
                      color: "#ffffff66",
                      fontSize: "12px",
                      fontWeight: "600",
                    }}
                  >
                    USDP
                  </Typography>
                </InputAdornment>
              ),
            }}
          />
          <Box
            sx={{
              textAlign: "left",
              display: "flex",
              alignItems: "center",
              alignContent: "center",
            }}
          >
            <AccountBalanceWalletOutlinedIcon
              sx={{
                margin: "6px 0px 0px 4px",
                fontSize: "15px",
                color: "#ffffff66",
              }}
            />
            <Typography
              sx={{
                margin: "6px 0px 0px 4px",
                fontSize: "12px",
                textAlign: "left",
                lineHeight: "15px",
                color: "#dbdbdb",
              }}
              variant="body1"
              gutterBottom
            >
              $ 163,212
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            margin: "30px 0px 0px 0px",
            "& > :not(style)": { m: 0, width: "100%" },
          }}
          noValidate
          autoComplete="off"
        >
          <Typography
            sx={{
              textAlign: "left",
              fontSize: "16px",
              lineHeight: "15px",
              color: "#ffffff66",
              fontWeight: "600",
            }}
            variant="body1"
            gutterBottom
          >
            Amount
          </Typography>
          <TextField
            id="standard-basic"
            label=""
            variant="standard"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <Typography
                    sx={{
                      color: "#ffffff66",
                      fontSize: "12px",
                      fontWeight: "600",
                    }}
                  >
                    ETH
                  </Typography>
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <Box
          sx={{
            margin: "30px 0px 0px 0px",
            "& > :not(style)": { m: 0, width: "100%" },
          }}
          noValidate
          autoComplete="off"
        >
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              textAlign: "left",
              fontSize: "16px",
              lineHeight: "35px",
              color: "#ffffff66",
              fontWeight: "600",
            }}
            variant="body1"
            gutterBottom
          >
            Leverage
            <InfoOutlinedIcon
              sx={{
                marginLeft: "4px",
              }}
              aria-owns={open ? "leverage-popover" : undefined}
              aria-haspopup="true"
              onMouseEnter={(event) => setAnchorEl(event.currentTarget)}
              onMouseLeave={() => setAnchorEl(null)}
            />
            <Popover
              id="leverage-popover"
              sx={{
                pointerEvents: "none",
              }}
              open={open}
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              onClose={() => setAnchorEl(null)}
              disableRestoreFocus
            >
              <Typography sx={{ p: 1 }}>
                Leverage allows you to magnify your position by up to 10X for
                outsized impact.
              </Typography>
            </Popover>
          </Typography>

          <Slider
            aria-label="Temperature"
            defaultValue={0}
            valueLabelDisplay="auto"
            step={1}
            marks
            min={1}
            max={10}
          />

          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              alignContent: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{
                fontSize: "15px",
                textAlign: "left",
                lineHeight: "15px",
                fontWeight: "500",
                color: "#ffffff66",
              }}
              variant="body1"
              gutterBottom
            >
              1x
            </Typography>

            <Typography
              sx={{
                fontSize: "15px",
                textAlign: "left",
                lineHeight: "15px",
                fontWeight: "500",
                color: "#ffffff66",
              }}
              variant="body1"
              gutterBottom
            >
              10x
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            margin: "30px 0px 0px 0px",
            // "& > :not(style)": { m: 0, width: "100%" },
          }}
          noValidate
          autoComplete="off"
        >
          <Typography
            sx={{
              display: "flex",
              alignItems: "center",
              textAlign: "left",
              fontSize: "16px",
              lineHeight: "28px",
              color: "#ffffff66",
              fontWeight: "600",
            }}
            variant="body1"
            gutterBottom
          >
            Slippage Tolerance
            <InfoIcon
              sx={{
                marginLeft: "4px",
              }}
              aria-owns={open ? "leverage-popover" : undefined}
              aria-haspopup="true"
              onMouseEnter={(event) => setAnchorEl(event.currentTarget)}
              onMouseLeave={() => setAnchorEl(null)}
            />
            <Popover
              id="leverage-popover"
              sx={{
                pointerEvents: "none",
              }}
              open={open}
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              onClose={() => setAnchorEl(null)}
              disableRestoreFocus
            >
              <Typography sx={{ p: 1 }}>
                Slippage tolerance is a setting for the amount of price slippage
                you are willing to accept for a trade.
              </Typography>
            </Popover>
          </Typography>

          <Box
            sx={{
              margin: "10px 0px 0px 0px",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
            noValidate
            autoComplete="off"
          >
            <Chip
              sx={{ width: "57px" }}
              variant="outlined"
              label="0.1%"
              clickable
            />
            <Chip
              sx={{ width: "57px" }}
              variant="outlined"
              label="0.5%"
              clickable
            />
            <Chip
              sx={{ width: "57px" }}
              variant="outlined"
              label="1%"
              clickable
            />
            <Box
              sx={{
                margin: "0px 0px 0px 0px",
                padding: "0px 2px",
                border: "1px solid #5d5d60",
                borderRadius: "16px",
                display: "flex",
                flexDirection: "row",
                width: "100px",
              }}
            >
              <TextField
                id="standard-basic"
                label=""
                placeholder="Other"
                variant="standard"
              />
              <Box
                sx={{
                  marginTop: "4px",
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                %
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            margin: "30px 0px 0px 0px",
          }}
          noValidate
          autoComplete="off"
        >
          <Button
            sx={{
              width: "100%",
              backgroundColor: "#7a73fd",
              color: "#fff",
              fontWeight: "600",
              "&:hover": {
                backgroundColor: "#7a73fd",
              },
            }}
            variant="contained"
          >
            Place Market Order
          </Button>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default Trading;
