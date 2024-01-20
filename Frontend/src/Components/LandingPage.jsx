import React from "react";

function LandingPage() {
  return (
    <section className="home-page" id="home">
      <div class="container-fluid">
        <div class="title-page row">
          <div class="col-lg-6 col-md-12 col-sm-12 content">
            <h1>Divyang Banking Services</h1>
            <p>
              Specially designed for differently abled people struggling to
              navigate through banking services
            </p>
            <a href="Signup" class="btn-start btn-register">
              Get Started
            </a>
          </div>

          <div class="col-lg-6 col-md-12 col-sm-12 content-img">
            <img
              style={{ width: 400, height: 400, }}
              class="img-fluid bg-intro"
              src="/images/banklogo.png"
              alt=""
            />
            {/* <img
              style={{ width: 100, height: 100, left: 110, bottom:15 }}
              class="img-fluid bg-intro"
              src="/images/voice2.png"
              alt=""
            /> */}
            <img
              style={{ width: '100px', height: '100px',  left: 10, bottom : 20}}
              class="img-fluid bg-intro"
              src="/images/voice3.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default LandingPage;
