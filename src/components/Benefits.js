import { assetPrefix } from "@/lib/assetPrefix";
import Image from 'next/image';
import Link from 'next/link';

export default function Benefits() {
  return (
    <div className="section-full p-t20 p-b30 twm-we-pro-service-wrap" style={{marginBottom:'50px'}}>
      <div className="container">
        {/* TITLE START */}
        <div className="section-head center wt-small-separator-outer">
          <div className="wt-small-separator site-text-primary">
            <i className="bi bi-house"></i>
          </div>
          <h2 className="wt-title">Certificates</h2>
        </div>
        {/* TITLE END */}
        
        <div className="section-content">
          <div className="service-icon-box-wrap">
            <div className="row">
              {/* LEFT COLUMN - TWO LOGOS */}
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="row">
                  {/* Logo 1 - JSRS */}
                  <div className="col-lg-12 col-md-12 col-sm-6 m-b30">
                    <div className="service-icon-box-two">
                      <div className="service-media" style={{ maxWidth: '300px', margin: '0 auto' }}>
                        <img 
                          src={`${assetPrefix}/images/services/10.png`} 
                          alt="JSRS Certified Supplier Logo" 
                          style={{ width: '100%', height: 'auto', display: 'block' }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Logo 2 - Riyada */}
                  <div className="col-lg-12 col-md-12 col-sm-6 m-b30">
                    <div className="service-icon-box-two">
                      <div className="service-media" style={{ maxWidth: '300px', margin: '0 auto' }}>
                        <img 
                          src={`${assetPrefix}/images/services/12.png`} 
                          alt="Riyada SMEs Development Authority Logo"
                          style={{ width: '100%', height: 'auto', display: 'block' }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT COLUMN - ISO CERTIFICATE (SINGLE) */}
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="m-b30">
                  <div className="service-icon-box-two">
                    <div className="service-media" style={{ maxWidth: '350px', margin: '0 auto' }}>
                      <img 
                        src={`${assetPrefix}/images/services/11.png`} 
                        alt="ISO 9001:2015 Quality Management System Certificate"
                        style={{ width: '100%', height: 'auto', display: 'block' }}
                      />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}