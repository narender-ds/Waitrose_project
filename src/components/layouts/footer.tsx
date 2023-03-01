import * as React from "react";
type DataOfProps = {
  c_footerLogo: any;
  c_waitroseHelpAndSupportSection: any;
  c_usefulInformationSection: any;
  c_moreFromUsSection: any;
  c_aboutWaitroseSection: any;
  c_socialIcon: any;
  c_visitOurMobileSiteTitle:any;
  c_footerImage:any;
  c_footerLogoText:any;
  c_copyrightTag:any;
};
const Footer = (props: DataOfProps) => {
  const {
    c_footerLogo,
    c_waitroseHelpAndSupportSection,
    c_usefulInformationSection,
    c_moreFromUsSection,
    c_aboutWaitroseSection,
    c_socialIcon,
    c_visitOurMobileSiteTitle,
    c_footerImage,
    c_footerLogoText,
    c_copyrightTag
  } = props;
  console.log("c_visitOurMobileSiteTitle.followTitle", c_visitOurMobileSiteTitle);
  return (
    <footer
      className="inline-block w-full
    bg-[#F9F9F9]  text-white"
    >
             <h2 className="footerLogoText">{c_footerLogoText}</h2>
      <div className="container px-6 pt-6 flex">
        {/* <img src={c_footerLogo.url} alt="" /> */}
 
        <div className="flex">
          <div className=" grid lg:grid-cols-4 md:grid-cols-2">
            <div className="Footer-navList">
              <h4 style={{ fontWeight: "bold", color: "black" }}>
                {c_waitroseHelpAndSupportSection.title}
              </h4>
              {c_waitroseHelpAndSupportSection?.labelsIcons?.map(
                (item: any) => {
                  return (
                    <>
                      <ul>
                        <li>
                          <div>
                            <a className="" href="#">
                              {item.navigationLinks.label}
                              <img src={item.navigationIcon.url} className="inline"/>
                            </a>
                          </div>
                        </li>
                      </ul>
                    </>
                  );
                }
              )}
            </div>
            <div className="Footer-navList">
              <h4 style={{ fontWeight: "bold", color: "black" }}>
                {" "}
                {c_usefulInformationSection.title}
              </h4>
              {c_usefulInformationSection?.labelsIcons?.map((item: any) => {
                return (
                  <>
                    <ul>
                      <li>
                        <div>
                          <a className="" href="#">
                            {item.navigationLinks.label}
                            <img src={item.navigationIcon.url} className="inline"/>
                          </a>
                        </div>
                      </li>
                    </ul>
                  </>
                );
              })}
            </div>
            <div className="Footer-navList">
              <h4 style={{ fontWeight: "bold", color: "black" }}>
                {c_moreFromUsSection.title}
              </h4>
              {c_moreFromUsSection?.labelsIcons?.map((item: any) => {
                return (
                  <>
                    <ul>
                      <li>
                        <div>
                          <a className="" href="#">
                            {item.navigationLinks.label}
                            <img src={item.navigationIcon.url} className="inline"/>
                          </a>
                        </div>
                      </li>
                    </ul>
                  </>
                );
              })}
            </div>
            <div className="Footer-navList">
              <h4 style={{ fontWeight: "bold", color: "black" }}>
                {c_aboutWaitroseSection.title}
              </h4>
              {c_aboutWaitroseSection?.labelsIcons?.map((item: any) => {
                return (
                  <>
                    <ul>
                      <li>
                        <div>
                          <a className="" href="#">
                            {item.navigationLinks.label}
                            <img src={item.navigationIcon.url} className="inline"/>
                           
                          </a>
                        </div>
                      </li>
                    </ul>
                  </>
                );
              })}
            </div>
                  </div>
        <div className="flex">
          <div className="socialIcondiv">
            <p className="socialIconp"> {c_socialIcon.followTitle}</p>
            <ul className="socialiconUl ">
              <li >
                <a
                  data-cy="social-links"
                  target="_blank"
                  rel="noreferrer"
                  href="#"
                  aria-label="Visit our Twitter page"
                >
                  <span aria-hidden="true">
                    {c_socialIcon.iconImage.map((item: any) => {
                      return (
                        <>
                          <img className="socialIcons" src={item.url} />
                        </>
                      );
                    })}{" "}
                  </span>
                </a>
              </li>
            </ul>
            <p className="socialIconp">{c_visitOurMobileSiteTitle}</p>
          </div>
        </div>
        <div>
        <img src={c_footerImage.url} alt="" />
        </div>
      </div>
      </div>
   <p className="copyright">{c_copyrightTag}</p> 
      {/* </div > */}
    </footer>
  );
};

export default Footer;
