import React from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import theme from "../../theme/themeConfig";

const AuthLayout = ({ children }: React.PropsWithChildren) => (
  <html lang="en">
    <body>
      <AntdRegistry>
        <ConfigProvider theme={theme}>
          {children} {/* No Layout applied */}
        </ConfigProvider>
      </AntdRegistry>
    </body>
  </html>
);

export default AuthLayout;
