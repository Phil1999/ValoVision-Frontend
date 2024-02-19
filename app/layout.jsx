import { Inter } from "next/font/google";
import '../styles/globals.css';
import { AntdRegistry } from '@ant-design/nextjs-registry';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "ValoVision",
    description: "Placeholder text"
}

const RootLayout = ({children}) => {
    return (
        <html lang="en">
          <body className={inter.className}>
            <AntdRegistry>{children}</AntdRegistry>
          </body>
        </html>
      );
}

export default RootLayout