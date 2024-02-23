import '../styles/globals.css';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import Header from '@/components/Header/header.jsx';
import Footer from '@/components/Footer/footer.jsx';
import FloatingButtonInfo from '@/components/public/FloatingButton/FloatingButton';

export const metadata = {
    title: "ValoVision",
    description: "Placeholder text"
}

const RootLayout = ({children}) => {
    return (
        <html lang="en">
          <body>
            <FloatingButtonInfo title="FAQ" />
            <Header />
            <AntdRegistry>{children}</AntdRegistry>
            <Footer />
          </body>
        </html>
      );
}

export default RootLayout