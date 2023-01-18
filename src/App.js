import { useState } from "react";
import cardLogo from "./images/card-logo.svg";
import bgDesktop from "./images/bg-main-desktop.png";
import bgMobile from "./images/bg-main-mobile.png";
import complete from "./images/icon-complete.svg";


export default function App() {

  const [cardholderName, setCardHolderName] = useState("");
  const [cardholderNumber, setCardHolderNumber] = useState("");
  const [cvc, setCvc] = useState("");


  return (
    <>
      <main className="relative">
        <div className="bg-main">
          <picture>
            <source media="(min-width: 1024px)" srcset={bgDesktop} />
            <img src={bgMobile} alt="" />
          </picture>
        </div>
        <section className="absolute top-0 right-5">
          <div className="card-section">
            <article className="back-card mt-10">
              <h2>000</h2>
            </article>
            <article className="front-card p-3 absolute">
              <img src={cardLogo} alt="" />
              <h2>0000 0000 0000 0000</h2>

              <div>
                <ul>
                  <li>Jane Appleseed</li>
                  <li>00/00</li>
                </ul>
              </div>
            </article>
          </div>
        </section>

        <section className="form-section">
          <div>
            <form>
              <div className="cardholder_name">
                <label htmlFor="Cardholder Name">Cardholder Name</label>
                <input 
                  type="text" 
                  name="cardholder_name" 
                  id="cardholder_name" 
                  placeholder="e.g. Jane Appleseed"
                  required
                />
              </div>
              
              <div className="cardholder_number">
                <label htmlFor="cardholder_number">Cardholder Number</label>
                <input 
                  type="text" 
                  name="cardholder_number" 
                  id="cardholder_number" 
                  placeholder="e.g. 1234 5678 9012 3456"
                  maxLength={19}
                  required
                />
              </div>
              
              <div className="two-way">
                <div className="exp_date">
                  <label htmlFor="exp_date">Exp.Date(MM/YY)</label>
                  <input 
                    type="month" 
                    name="exp_date" 
                    id="exp_date" 
                    placeholder="MM/YY"
                    required
                  />
                </div>
                
                <div className="cvc">
                  <label htmlFor="cvc">Cvc</label>
                  <input 
                    type="number" 
                    name="cvc" 
                    id="cvc" 
                    placeholder="e.g. 123"
                    required
                  />
                </div>
              </div>
              <button type="submit" className="btn py-3 shadow">Confirm</button>
            </form>
            <ThankYou />
          </div>
        </section>
      </main>
    </>
  )
}

function ThankYou() {
    return (
        <>
            <img src={complete} alt="" />
            <h1>Thank You!</h1>
            <p>We've added your card details</p>
            <button className="btn">Confirm</button>
        </>
    )
}
