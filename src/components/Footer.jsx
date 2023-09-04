import footerLogo from "../assets/img/North_S_11.png";

const Footer = () => {

  return (
    <>
      <div className="px-1" id="Contacts">
        <div className="flex justify-between items-center">
          <img src={footerLogo} alt="logo" className="h-8" />
          <h4 className="text-primary text-2xl">+48 577 799 234</h4>
        </div>
        <div className="flex justify-between items-center px-1 w-3/6 mx-auto mt-12">
          <div>
            <p className="text-xl">North Service</p>
            <p>Łopuszańska 47</p>
            <p>02-220 Warszawa</p>
            <p>Monday-Friday: 9:00 - 19:00</p>
            <p>Saturday: 9:00 - 16:00</p>
            <p>+48 577 799 234</p>
            <p>northservice33@gmail.com</p>
          </div>
          <div>
            <a href="https://goo.gl/maps/4D8oVNqabanJBFZH9" target="_blanc">
              <h4 className="underline hover:text-primary">See on map</h4>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
