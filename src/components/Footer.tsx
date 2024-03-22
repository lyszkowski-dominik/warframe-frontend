const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div>
      <footer>
        <p>{`Warframe Data © ${year} Site by Kazeyoshi`}</p>
      </footer>
    </div>
  );
};

export default Footer;
