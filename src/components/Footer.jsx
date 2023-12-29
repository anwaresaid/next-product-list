const Footer = () => {
  //get current year
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>© {currentYear} Product Store created by Anwar</p>
    </footer>
  );
};

export default Footer;
