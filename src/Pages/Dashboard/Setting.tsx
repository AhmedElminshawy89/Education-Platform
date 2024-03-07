import {
  Tabs ,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
} from "@chakra-ui/react";
import { SetStateAction, useState } from "react";
import AddAds from "./AddAds";
import AddAdmin from "./AddAdmin";
import Admins from "./Admins";
import Ads from "./Ads";
const Setting = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (index: SetStateAction<number>) => {
    setTabIndex(index);
  };
  return (
    <Tabs  onChange={handleTabChange} index={tabIndex}  position="relative" variant="unstyled" isLazy>
      <TabList>
        <Tab onClick={()=>setTabIndex(0)}>Add ads</Tab>
        <Tab onClick={()=>setTabIndex(1)}>Add Admin</Tab>
        <Tab onClick={()=>setTabIndex(2)}>Admins</Tab>
        <Tab onClick={()=>setTabIndex(3)}>Ads</Tab>
      </TabList>
      <TabIndicator mt="-1.5px" height="2px" bg="blue.500" borderRadius="1px" />
      <TabPanels>
        <TabPanel>
          <AddAds/>
        </TabPanel>
        <TabPanel>
          <AddAdmin/>
        </TabPanel>
        <TabPanel>
          <Admins/>
        </TabPanel>
        <TabPanel>
          <Ads/>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default Setting;
