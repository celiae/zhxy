import * as React from "react";
import { Tabs, Tab, Box, Button, Chip, Grid } from "@mui/material";
import TabPanel, { a11yProps } from "./TabPanel";
import { useNavigate } from "react-router-dom";

export default function TabHeaderNav({ tabItem, noExit }) {
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {tabItem.map((t) => (
            <Tab key={t.index} label={t.label} {...a11yProps(t.index)} />
          ))}
        </Tabs>
      </Box>
      <Grid container mt={1} spacing={3} justifyContent={""}>
        <Grid item>
          <Button
            onClick={() => {
              setValue((value + 1) % tabItem.length);
            }}
            variant="outlined"
          >
            下一个
          </Button>
        </Grid>
        {noExit ? (
          <></>
        ) : (
          <Grid item>
            <Button
              onClick={() => {
                navigate(-1);
              }}
              variant="outlined"
              color="error"
            >
              不保存退出
            </Button>
          </Grid>
        )}
      </Grid>
      {tabItem.map((t) => (
        <TabPanel key={t.index} value={value} index={t.index}>
          {t.component}
        </TabPanel>
      ))}
    </Box>
  );
}
