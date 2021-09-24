import React from "react";
import styled from "styled-components";
import BackgroundImg from "./Assets/background.jpg";
import BackgroundImg2 from "./Assets/background2.jpg";
import AngleRight from "./Assets/angleRight.svg";
import Fuel from "./Assets/fuel.svg";
import Supermiler from "./Assets/supermiler.jpg"
import SupermilerLogo from "./Assets/supermiler-logo.svg";
import Coins from "./Assets/coins.svg"
import Car from "./Assets/car.svg";
import Car2 from "./Assets/car2.svg";
import licence from "./Assets/licence.svg";
import unlock from "./Assets/unlock.png";
import load from "./Assets/load.svg";
import AppStore from "./Assets/AppStore.svg"
import playstore from "./Assets/playstore.svg"
import quotes from "./Assets/quotes.png"
import reviewBackground from "./Assets/reviewBackground.jpg"
import How from "./Assets/how.svg"
import Twitter from "./Assets/Twitter.svg"
import car3 from "./Assets/car3.svg";
import happy from "./Assets/happy.svg";
import help from "./Assets/help.svg";
import ratings from "./Assets/ratings.svg";
import safety from "./Assets/safety.svg";
import policies from "./Assets/policies.svg";
import speedometer from "./Assets/speedometer.svg";
import steeringwheel from "./Assets/Steeringwheel.svg"
import { Parallax, Background } from "react-parallax";
import Gallery from "./carousel";

const Home = () => {
    return (
        <Container>
            <div>
                <Parallax bgImage={BackgroundImg} >
                    <ParallaxContent style={{ height: 520 }}>
                        <HeroContent>
                            <h1>DRIVE IN A SANITISED ZOOMCAR</h1>
                            <p>Self Drive Car Rental in <span>Bangalore</span></p>
                            <button>Start your wonderful journey
                                <img src={AngleRight} alt="" height="30px" width="30px" className="angleright"></img>
                            </button>
                        </HeroContent>
                    </ParallaxContent>
                </Parallax>
            </div>
            <ServiceContainer>
                <h1>THE ZOOMCAR ADVANTAGE</h1>
                <p>We simplified car rentals, so you can focus on what's important to you.</p>
                <IconContainer>
                    <div>
                        <img src={Fuel} width='30px' height='30px' alt=""></img>
                        <span>Fuel Cost Included</span>
                        <p>Don't worry about mileage! All fuel costs are included. If you refill fuel, we'll pay you back!</p>
                    </div>
                    <div>
                        <img src={Fuel} width='30px' height='30px' alt=""></img>
                        <span>No Hidden Charges</span>
                        <p>Our prices include taxes and insurance.What you see is what you really pay!</p>
                    </div>
                    <div>
                        <img src={Fuel} width='30px' height='30px' alt=""></img>
                        <span>Flexi Pricing Packages</span>
                        <p>One size never fits all! Choose a balance of time and kilometers that works best for you.</p>
                    </div>
                    <div>
                        <img src={Fuel} width='30px' height='30px' alt=""></img>
                        <span>Go Anywhere</span>
                        <p>Our cars have all-India permits. Just remember to pay state tolls and entry taxes.</p>
                    </div>
                    <div>
                        <img src={Fuel} width='30px' height='30px' alt=""></img>
                        <span>24x7 Roadside Assistance</span>
                        <p>We have round-the-clock, pan India partners. Help is never far away from you.</p>
                    </div>
                    <div>
                        <img src={Fuel} width='30px' height='30px' alt=""></img>
                        <span>Damage Insurance</span>
                        <p>All your bookings include damage insurance! Drive safe, but don’t worry!</p>
                    </div>
                </IconContainer>
            </ServiceContainer>
            <SupermilerContainer>
                <Parallax bgImage={Supermiler} bgImageStyle={{ opacity: 0.7 }}>
                    <ParallaxContent style={{ height: 350 }}>
                        <HeroContent>
                            <img src={SupermilerLogo} alt="" width="300px" height="80px "></img>
                            <h4>Premium club which rewards you everytime you drive with us</h4>
                            <h2>-- Supermiler Privileges------</h2>
                        </HeroContent>
                    </ParallaxContent>
                </Parallax>
            </SupermilerContainer>
            <EarnContainer>
                <EarnCard>
                    <img src={Coins} alt=""></img>
                    <p>EARN Z POINTS</p>
                </EarnCard>
                <p>Earn Z-Points for every booking and redeem for additional discount</p>
                <button>LEARN MORE</button>
            </EarnContainer>
            <ServiceContainer>
                <h1>THE ZOOMCAR ADVANTAGE</h1>
                <p>We simplified car rentals, so you can focus on what's important to you.</p>
                <AdvantageContainer className="WorksContainer">
                    <div>
                        <img src={Car} width='70px' height='50px' alt=""></img>
                        <span>Fuel Cost Included</span>
                        <p>Don't worry about mileage! All fuel costs are included. If you refill fuel, we'll pay you back!</p>
                    </div>
                    <div>
                        <img src={licence} width='70px' height='50px' alt=""></img>
                        <span>No Hidden Charges</span>
                        <p>Our prices include taxes and insurance.What you see is what you really pay!</p>
                    </div>
                    <div>
                        <img src={unlock} width='70px' height='50px' alt=""></img>
                        <span>Flexi Pricing Packages</span>
                        <p>One size never fits all! Choose a balance of time and kilometers that works best for you.</p>
                    </div>
                    <div>
                        <img src={Car2} width='70px' height='50px' alt=""></img>
                        <span>Go Anywhere</span>
                        <p>Our cars have all-India permits. Just remember to pay state tolls and entry taxes.</p>
                    </div>
                    <div>
                        <img src={load} width='70px' height='50px' alt=""></img>
                        <span>24x7 Roadside Assistance</span>
                        <p>We have round-the-clock, pan India partners. Help is never far away from you.</p>
                    </div>
                </AdvantageContainer>
                <button>SIGN UP</button>
            </ServiceContainer>
            <Parallax bgImage={BackgroundImg2} bgImageStyle={{ opacity: 0.7 }}>
                <Content style={{ height: 600 }}>
                    <HeroContent>
                        <h1>ZOOM ON THE GO!</h1>
                        <p>Make a booking, unlock your car, and end your reservation all from our app</p>
                        <div>
                            <img src={AppStore} width="140px" height="42px"></img>
                            <img src={playstore} width="140px" height="42px"></img>
                        </div>
                    </HeroContent>
                </Content>
            </Parallax>
            <StatsContainer className="WorksContainer">
                <div>
                    <img src={steeringwheel} width='75px' height='74px' alt=""></img>
                    <span>3,000+</span>
                    <p>Rides Daily</p>
                </div>
                <div>
                    <img src={happy} width='75px' height='75px' alt=""></img>
                    <span>48,00,000+</span>
                    <p>Happy users</p>
                </div>
                <div>
                    <img src={speedometer} width='75px' height='75px' alt=""></img>
                    <span>36,00,00,000+</span>
                    <p>Km Travelled(enough for 470 round trips to the moon!)</p>
                </div>
                <div>
                    <img src={car3} width='75px' height='75px' alt=""></img>
                    <span>6,500+</span>
                    <p>Number of Zoomcars</p>
                </div>
                <div>
                    <img src={ratings} width='75px' height='75px' alt=""></img>
                    <span>Rating 4.7/5.0</span>
                    <p>Rated by 3,00,000+ customers over 10,00,000+ bookings</p>
                </div>
            </StatsContainer>
            <ReviewContainer style={{ backgroundImage: `url(${reviewBackground})` }}>
                <ContentContainer>
                    <img src={quotes} alt=""></img>
                    <p>At the outset, let me thank you for introducing Zoomcar in Bangalore and for giving me an opportunity to use your service. Your customer support was impeccable and vehicle was well-maintained and top-notch.</p>
                    <span>- D. Samuel</span>
                </ContentContainer>

            </ReviewContainer>
            <Gallery />
            <FooterSection>
                <Section>
                    <Card>
                        <img src={How} alt=""></img>
                        <p>How Zoomcar works</p>
                    </Card>
                    <Card>
                        <img src={safety} alt=""></img>
                        <p>How Zoomcar works</p>
                    </Card>
                    <Card>
                        <img src={policies} alt=""></img>
                        <p>How Zoomcar works</p>
                    </Card>
                    <Card>
                        <img src={safety} alt=""></img>
                        <p>How Zoomcar works</p>
                    </Card>
                </Section>
                <FinalContainer>
                    <InnerContainer>
                        <h4>About Us</h4>
                        <div class="final-data">
                            <a>Zoom car blog</a>
                            <a>Zoom car blog</a>
                            <a>Zoom car blog</a>
                            <a>Zoom car blog</a>
                            <a>Zoom car blog</a>
                            <a>Zoom car blog</a>
                            <a>Zoom car blog</a>
                            <a>Zoom car blog</a>
                            <a>Zoom car blog</a>
                            <a>Zoom car blog</a>

                        </div>
                    </InnerContainer>
                    <InnerContainer>
                        <h4>Cities</h4>
                        <div class="final-data">
                            <a>Car rental from bangalore airport</a>
                            <a>Car rental from bangalore airport</a>
                            <a>Car rental from bangalore airport</a>
                            <a>Car rental from bangalore airport</a>
                            <a>Car rental from bangalore airport</a>
                            <a>Car rental from bangalore airport</a>
                            <a>Car rental from bangalore airport</a>
                            <a>Car rental from bangalore airport</a>
                            <a>Car rental from bangalore airport</a>


                        </div>
                    </InnerContainer>

                    <InnerContainer className="AirportServices">
                        <h4>Airport services</h4>
                        <div class="final-data">
                            <a>Car rental from bangalore airport</a>
                            <a>Car rental from bangalore airport</a>
                            <a>Car rental from bangalore airport</a>
                            <a>Car rental from bangalore airport</a>
                            <a>Car rental from bangalore airport</a>
                            <a>Car rental from bangalore airport</a>
                            <a>Car rental from bangalore airport</a>
                            <a>Car rental from bangalore airport</a>
                            <a>Car rental from bangalore airport</a>
                            <a>Car rental from bangalore airport</a>
                            <a>Car rental from bangalore airport</a>
                            <a>Car rental from bangalore airport</a>
                            <a>Car rental from bangalore airport</a>
                            <a>Car rental from bangalore airport</a>
                            <a>Car rental from bangalore airport</a>
                            <a>Car rental from bangalore airport</a>
                            <a>Car rental from bangalore airport</a>
                            <a>Car rental from bangalore airport</a>
                            <a>Car rental from bangalore airport</a>
                            <a>Car rental from bangalore airport</a>
                            <a>Car rental from bangalore airport</a>
                            <a>Car rental from bangalore airport</a>
                            <a>Car rental from bangalore airport</a>
                            <a>Car rental from bangalore airport</a>
                            <a>Car rental from bangalore airport</a>
                            <a>Car rental from bangalore airport</a>
                            <a>Car rental from bangalore airport</a>
                            <a>Car rental from bangalore airport</a>
                            <a>Car rental from bangalore airport</a>
                        </div>
                        <div class="moredetails">
                            <h4>
                                Let's Keep in touch
                            </h4>

                            <p>7th Floor, Tower-B, Diamond District, 150, HAL Airport Road, Kodihalli, Bangalore – 560008</p>
                            <div class="icons">
                                <img src={Twitter} />
                                <img src={Twitter} />
                                <img src={Twitter} />
                                <img src={Twitter} />
                            </div>
                            <p>© Copyright 2017 Zoomcar India Private Ltd. All rights reserved.
                            </p>
                        </div>

                    </InnerContainer>
                </FinalContainer>
            </FooterSection>
            <div class="footer-container">
                <div class="footer-item">
                    <b>LOOKING FOR SELF DRIVE CARS IN BANGALORE?</b>
                    <span>
                        Bangalore being a burgeoning cosmopolitan city is witnessing a shift in culture. With youngsters now being able to establish an equal focus on work and leisure frequent road trips have now become a norm. In addition to this, the added pleasure of a self-driving has given rise in the demand for, self-drive car rentals which has emerged as the answer to many of their prayers.
                    </span>
                </div>

                <div class="footer-item">
                    <b>HOW MUCH DOES IT COST TO RENT A CAR FOR A DAY?</b>
                    <span>
                        If want to rent one out a self-drive car, choose Zoomcar, where you can pick out your self-drive car based on your travelling needs. While small self-drive cars allow you to easily manoeuvre through city traffic, sedans and SUV’s offer more comfort. Affordable prices starting at 60/hr helps you rent a car easily. Whether you want to go on a road trip from Bangalore to Coorg or just need a car to travel within the city the self-drive Zoomcar are your best solution. All Self-drive Zoomcar comes with a limited liability, enabling you to enjoy the comfort of a four-wheeler without having to invest in one, with the added benefit of not having to actually drive it. The Self-drive Zoomcar have even made travel to and from the airport easy. Avoid exorbitantly priced Bangalore airport cabs by choosing to travel in a Zoomcar instead. The Bangalore airport even has a Zoomcar parking lot where you can get a self-drive car rental as soon as you get off your flight, thus eliminating the time taken to look for a cab or hire one.
                    </span>
                </div>

                <div class="footer-item">
                    <b>WHAT STATES ALLOW SELF DRIVING CARS?</b>
                    <span>
                        Drive seamlessly:
                        Our Self-Drive cars come with all India permits, Road-Side Assistance (RSA), vehicle insurance and provision of multiple parking sites across the city.
                        <br></br>
                        <br></br>
                        Book Through the App:
                        No matter how long you need our Self Drive cars for you can conveniently hire a Self-Drive car online in Bangalore through the Zoomcar app.
                        <br></br>
                        <br></br>
                        Array of services:
                        Enjoy tech-enabled booking, tracking and hassle-free payment options too. Make every special occasion memorable by opting to ride in a luxury self-drive car yourself. You could opt for it just for the sheer pleasure and experience too!
                    </span>
                </div>


                <div class="footer-item">
                    <b>STEPS FOR SELF DRIVE CAR BOOKING IN BANGALORE</b>
                    <span>
                        If want to rent one out a self-drive car, choose Zoomcar, where you can pick out your self-drive car based on your travelling needs. While small self-drive cars allow you to easily manoeuvre through city traffic, sedans and SUV’s offer more comfort. Affordable prices starting at 60/hr helps you rent a car easily. Whether you want to go on a road trip from Bangalore to Coorg or just need a car to travel within the city the self-drive Zoomcar are your best solution. All Self-drive Zoomcar comes with a limited liability, enabling you to enjoy the comfort of a four-wheeler without having to invest in one, with the added benefit of not having to actually drive it. The Self-drive Zoomcar have even made travel to and from the airport easy. Avoid exorbitantly priced Bangalore airport cabs by choosing to travel in a Zoomcar instead. The Bangalore airport even has a Zoomcar parking lot where you can get a self-drive car rental as soon as you get off your flight, thus eliminating the time taken to look for a cab or hire one.
                    </span>
                </div>
            </div>

        </Container>

    )
}

const Container = styled.div`
height: calc(100vh - 64px);
.footer-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-gap: 24px;
    background: #eaeaea;
    color: #323a44;
    font-size: 13px;
    padding: 10px 0;
}
.footer-item{
    display: flex;
    flex-direction: column;
    align-items: baseline;
    width: 1000px;
    grid-gap: 10px;
    b{
        font-size: 24px;
    }

    span{
        text-align: left;

    }
}
`
const HeroContent = styled.div`
  h1{
    font-size: 44px;
    color: #fff;
    font-weight: 600;
  }
  h2{
    font-family: "Open Sans",-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif!important;
    font-size: 18px;
    color: #fff;
    font-weight: 100;
    opacity: 1;
}
  h4{
    font-family: "Open Sans",-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif!important;
    font-size: 16px;
    color: #fff;
    font-weight: 500;
    opacity: 1;
}
  p{
    font-size: 18px;
    color: #fff;
    margin: -10px 0 30px 0;
    font-weight: 400;
  }
  button{
    width: 540px;
    height: 60px;
    padding-left: 24px;
    background-color: #fff;
    border-radius: 5px;
    line-height: 60px;
    text-align: left;
    font-size: 18px;
    font-weight: 400;
    position: relative;
    cursor: pointer;
    color: #323a44;
    text-decoration: none;
    border: none;
    font-family: "Open Sans",-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif!important;
  }
  .angleright{
      position: absolute;
      right: 5px;
      top: 13px;
  }
  span{
    text-decoration-line: underline;
    text-decoration-style:dashed;
    text-underline-offset: 7px;
    font-weight: 500;
    letter-spacing: normal;
  }

`
const ParallaxContent = styled.div`
height: 520px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
const ServiceContainer = styled.div`
background-color: #EEEEEE;
margin-top: -1%;
padding-top: 5%;
padding-bottom:5%;
h1{
    font-size: 25px;
    font-weight: 100;
    color: #666666;
    font-family: "Open Sans",-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif!important;
}
span{
    font-family: "Open Sans",-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif!important;
    font-size:18px;
    color: #242423;
    font-weight: bold;
    margin-top: 5px;
}
p{
    color: #666666;
    font-family: "Open Sans",-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif!important;
}
button{
    padding: 10px 52px;
    border: 1px solid #666;
    text-transform: uppercase;
    text-decoration: none;
    color: #323a44;
    border-radius: 3px;
    height: 41px;
}

`
const IconContainer = styled.div`
margin-top: 3%;
margin-bottom: 3%;
display: grid;
grid-gap: 1px;
grid-template-columns: repeat(3,1fr);
width: 920px;
margin-left: auto;
margin-right: auto;
grid-row-gap: 5px;
div{
    width: 270px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    text-align: center;
    padding: 10px;
    background-color: #fff;
    margin-top: 10px;
}

span{
    display:inherit;
    color: #70ad4d;
    font-weight: 400;
    font-size: 18px;
    margin: 0;
}

p{
    text-align: center;
    font-size: 12px;
    font-family: "Open Sans",-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif!important;
}

.WorksContainer{
    display:flex;
    flex-direction: row;
    
    div{
        width: 220px;
    height: 200px;
    padding: 10px;
    border-radius: 8px;
    background-color: #fff;
    -webkit-box-shadow: 0 12px 22px 2px rgb(0 0 0 / 10%);
    box-shadow: 0 12px 22px 2px rgb(0 0 0 / 10%);
    border: 1px solid #eee;
    margin: 0 10px;
    }
}

`

const SupermilerContainer = styled.div`
margin-top: -3%;
.react-parallax{
    background-color: rgba(0,0,0,.7);

}
`
const EarnContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 195px;
    margin-left: auto;
    margin-right: auto;
    margin-top: -63px;
    position: relative;
    margin-bottom: 2%;

    button{
        padding: 10px 52px;
        border: 1px solid #666;
        text-transform: uppercase;
        text-decoration: none;
        color: #323a44;
        border-radius: 3px;
        height: 41px;
    }
    `
const EarnCard = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;   
    width: 195px;
    height: 130px;
    border: 1px solid #eee;
    border-radius: 3px;
    background-color: #fff;
    padding: 0 15px;
    -webkit-box-shadow: 0 20px 20px -10px #eee;
    box-shadow: 0 20px 20px -10px #eee;

    
`
const AdvantageContainer = styled.div`
margin-top: 3%;
margin-bottom: 3%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
width: 100%;
margin-left: auto;
margin-right: auto;
grid-gap: 25px;
padding: 50px 0;
div{
    width: 220px;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 10px;
    background-color: #fff;
    margin-top: 10px;
    box-shadow: 0 12px 22px 2px rgb(0 0 0 / 10%);
}

span{
    display:inherit;
    color: #70ad4d;
    font-weight: 400;
    font-size: 18px;
}

p{
    text-align: center;
    font-size: 12px;
    font-family: "Open Sans",-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif!important;
}

`
const Content = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
height: 600px;
align-items: baseline;
margin-left: 10%;

`
const StatsContainer = styled.div`
margin-top: 3%;
margin-bottom: 3%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
width: 100%;
margin-left: auto;
margin-right: auto;
grid-gap: 25px;
div{
    width: 220px;
    height: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 10px;
    background-color: #fff;
    margin-top: 10px;
}

span{
    display:inherit;
    color: #323A44;
    font-size: 30px;
    font-weight: 600;
}

p{
    text-align: center;
    font-size: 12px;
    font-family: "Open Sans",-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif!important;
}

`
const ReviewContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 100%;
height: 540px;
`
const ContentContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
p{
    color: #fff;
    font-size: 24px;
    text-align: center;
    width: 900px;
    margin-left: auto;
    margin-right: auto;
}
span{
    color: #70ad4d;
    font-weight: 600;
    font-size: 24px;
}
`
const FooterSection = styled.div``
const Section = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
width: 100%;
background-color: #43505C;
`
const Card = styled.div`
background-color: #43505C;
width: 240px;
height: 159px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
&:hover{
    background-color: #2b323b;
    p{
        color: green;
    }
}
p{
    color: #fff;
}`
const FinalContainer = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #33414F;
    color: white;
    .AirportServices{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .icons{
        img{
            width: 30px;
            height: 30px;
        }
    }

`
const InnerContainer = styled.div`
display: flex;
flex-direction: column;
.final-data{
    display: flex;
    grid-gap: 7%;
    width: 1000px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
    margin-left: 3%;
    color: #fff;
    margin-bottom: 2%;
}
}
.moredetails{
    display: flex;
    flex-direction: column;
    align-items: baseline;
    position: left;
    width: 980px;
    border-top: solid 1px white;

}


`

export default Home;