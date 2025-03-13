import type { ThemeConfig } from "antd";

const PRIMARY_BG_COLOR = "#009230";
const HEADER_BG_COLOR = "#00ab38";

const theme: ThemeConfig = {
  token: {
    fontSize: 16,
    colorPrimary: PRIMARY_BG_COLOR,
    colorBgLayout: "#f5f5f5",
  },
  components: {
    Layout: {
      headerBg: HEADER_BG_COLOR,
      headerPadding: "0",
    },
    Menu: {
      darkItemBg: HEADER_BG_COLOR,
      colorBgLayout: HEADER_BG_COLOR,
      itemBg: HEADER_BG_COLOR,
      colorText: "000",
    },
    Button: {
      colorBgTextHover: "",
      colorBgTextActive: "",
    },
  },
};

export default theme;
