import { Box, Container, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";

const Account = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const changeTab = (e, newTab) => {
    setSelectedTab(newTab);
  };

  return (
    <Container>
      <Typography variant="h6" color="primary" sx={{ mb: 2 }}>
        Account settings
      </Typography>
      <Box
        sx={{
          display: "flex",
          bgcolor: "Menu",
          border: "1px solid rgba(0, 0, 0, 0.12)",
          borderRadius: 1,
        }}
      >
        <Tabs
          orientation="vertical"
          value={selectedTab}
          onChange={changeTab}
          sx={{ width: 150 }}
        >
          <Tab label="Account" index={0} />
          <Tab label="Broker settings" index={1} disabled />
          <Tab label="Password" index={1} />
        </Tabs>
        <TabPanel value={selectedTab} index={0}>
          Account
        </TabPanel>
        <TabPanel value={selectedTab} index={1}>
          Password
        </TabPanel>
      </Box>
    </Container>
  );
};

export default Account;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Box role="tabpanel" hidden={value !== index} sx={{ p: 1 }} {...other}>
      {value === index && <Box>{children}</Box>}
    </Box>
  );
}
