import * as React from "react";
import { Tabs, Tab, Box } from "@mui/material";
import TabPanel, { a11yProps } from "./TabPanel";

export default function TabHeaderNav({ tabItem, noExit }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange}>
          {tabItem.map((t) => (
            <Tab key={t.index} label={t.label} {...a11yProps(t.index)} />
          ))}
        </Tabs>
      </Box>
      {tabItem.map((t) => (
        <TabPanel key={t.index} value={value} index={t.index}>
          {t.component}
        </TabPanel>
      ))}
    </Box>
  );
}
