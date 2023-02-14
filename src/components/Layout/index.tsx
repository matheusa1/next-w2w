import { ReactElement } from "react";
import Header from "../Header";

// import { Container } from './styles';

interface LayoutProps {
  children: ReactElement;
}

const Layout = ({ children }: LayoutProps): ReactElement => {
  return (
    <div className="max-w-screen overflow-x-hidden">
      <Header />
      <main className="bg-green-500">{children}</main>
    </div>
  );
};

export default Layout;
