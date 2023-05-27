import React, { useRef } from "react";
import { Box, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { ChatHeader } from "../../components/Chat";
import { SimpleBarStyle } from "../../components/Scrollbar";
import useResponsive from "../../hooks/useResponsive";
import { Chat_History } from "../../data";
import { TextMsg, Timeline } from "../../sections/Dashboard/Conversation";

const Conversation = ({ isMobile, menu }) => {
  return (
    <Box>
      <Stack spacing={3}>
        {Chat_History.map((el, idx) => {
          switch (el.type) {
            case "divider":
              return (
                // Timeline
                <Timeline key={idx} el={el} />
              );
            case "msg":
              switch (el.subtype) {
                default:
                  return (
                    // Text Message
                    <TextMsg key={idx} el={el} menu={menu} />
                  );
              }
            default:
              return <></>;
          }
        })}
      </Stack>
    </Box>
  );
};

const ChatComponent = () => {
  const isMobile = useResponsive("between", "md", "xs", "sm");
  const theme = useTheme();
  const messageListRef = useRef(null);
  return (
    <Stack
      height={"100%"}
      maxHeight={"100vh"}
      width={isMobile ? "100vw" : "auto"}
    >
      <ChatHeader />
      <Box>
        <SimpleBarStyle timeout={500} clickOnTrack={false}>
          <Conversation menu={true} isMobile={isMobile} />
        </SimpleBarStyle>
      </Box>
    </Stack>
  );
};

export default ChatComponent;

export { Conversation };
