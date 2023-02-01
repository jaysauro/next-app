import Navbar from "../../components/navbar";

const HeaderLayout = ({ children }) => {
  return (
    <div className="HeaderLayout">
      <Navbar />
      {children}
    </div>
  );
}

export default HeaderLayout;