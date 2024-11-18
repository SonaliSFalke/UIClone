import React from 'react';
import amzLogo from '../Images/amz-logo.jpg';
import drillLogo from '../Images/drill-logo.jpg';
import hubLogo from '../Images/hub-logo.jpg';
import netLogo from '../Images/net-logo.jpg';
import notiLogo from '../Images/noti-log.jpg';
import zoomLogo from '../Images/zoom-logo.jpg';

const logos = [
  { name: 'Amazon', url: amzLogo},
  { name: 'Dribbble', url: drillLogo },
  { name: 'HubSpot', url: hubLogo },
  { name: 'Netflix', url: netLogo },
  { name: 'Notion', url: notiLogo },
  { name: 'Zoom', url: zoomLogo },
  { name: 'Amazon', url: amzLogo},
  { name: 'Dribbble', url: drillLogo },
  { name: 'HubSpot', url: hubLogo },
  { name: 'Netflix', url: netLogo },
  { name: 'Notion', url: notiLogo },
  { name: 'Zoom', url: zoomLogo },
  { name: 'Amazon', url: amzLogo},
  { name: 'Dribbble', url: drillLogo },
  { name: 'HubSpot', url: hubLogo },
  { name: 'Netflix', url: netLogo },
  { name: 'Notion', url: notiLogo },
  { name: 'Zoom', url: zoomLogo },
  { name: 'Amazon', url: amzLogo},
  { name: 'Dribbble', url: drillLogo },
  { name: 'HubSpot', url: hubLogo },
  { name: 'Netflix', url: netLogo },
  { name: 'Notion', url: notiLogo },
  { name: 'Zoom', url: zoomLogo }
];

function LogoType() {
  return (
    <div className='container overflow-hidden mx-auto'>
      <div className='logo-img flex justify-center items-center animate-scroll  gap-10 p-10'>
      {logos.map((logo, index) => (
        <img
          key={index}
          src={logo.url}
          alt={logo.name}
          className="h-12 object-contain"
        />
      ))}
      </div>
    </div>
  )
}

export default LogoType
