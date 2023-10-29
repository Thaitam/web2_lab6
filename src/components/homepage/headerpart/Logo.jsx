import React from "react";

const Logo = () => {
  const urlLogo = 'https://images.glints.com/unsafe/glints-dashboard.s3.amazonaws.com/company-logo/14f148d28df88bc5dbbabbfbb1332792.png'
  return (
    <div>
      <img src={urlLogo} alt="logo" className="h-16"/>
    </div>
  );
};

export default Logo;
