const Header = () => <h2>Header Component</h2>;
const Footer = () => <h2>Footer Component</h2>;

const Layout = ({ children }) => (
  <div>
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;
