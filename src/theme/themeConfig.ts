import type { ThemeConfig } from "antd";
import { Sarabun } from "next/font/google";

const inter = Sarabun({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const PRIMARY_BG_COLOR = "#009230";
const HEADER_BG_COLOR = "#00ab38";
const BASE_BG_COLOR = "#f5f5f5";

const theme: ThemeConfig = {
  token: {
    fontSize: 16,
    colorPrimary: PRIMARY_BG_COLOR,
    colorBgLayout: BASE_BG_COLOR,
    fontFamily: inter.style.fontFamily,
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
