import React , { useState} from "react";

const ProvideSection = () => {

  const [b1,setB1] = useState("red");
  const [b2,setB2] = useState("pink");
  const [b3,setB3] = useState("pink");
  const [b4,setB4] = useState("pink");

  const changeBorder=(x)=>{

    if(x===1)
    {
      if(b1==="red")
          setB1("pink");
      else
          setB1("red");

      setB2("pink");
      setB3("pink");
      setB4("pink");
    }
    else if(x===2)
    {
      if(b2==="red")
          setB2("pink");
      else
          setB2("red");

      setB1("pink");
      setB3("pink");
      setB4("pink");
    }
    else if(x===3)
    {
      if(b3==="red")
          setB3("pink");
      else
          setB3("red");

      setB2("pink");
      setB1("pink");
      setB4("pink");
    }
    else if(x===4)
    {
      if(b4==="red")
          setB4("pink");
      else
          setB4("red");

      setB2("pink");
      setB3("pink");
      setB1("pink");
    }

  }
  return (
    <>
    <section className="d-flex align-items-center justify-content-between pb-5">

    <section className="d-flex flex-column align-items-center w-50">
        <h1 className="py-5 fw-bolder">What We Provide?</h1>
      <div className="accordion w-75 m-auto"  id="accordionExample">
        <div className="accordion-item py-3" style={{border:"0px",borderLeft:`2px solid ${b1}`}} onClick={()=>changeBorder(1)}>
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Lorem ipsum dolor sit amet
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit
              amet, consectetur
            </div>
          </div>
        </div>
        <div className="accordion-item py-3" style={{border:"0px",borderLeft:`2px solid ${b2}`}} onClick={()=>changeBorder(2)}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Lorem ipsum dolor sit amet
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit
              amet, consectetur
            </div>
          </div>
        </div>
        <div className="accordion-item py-3" style={{border:"0px",borderLeft:`2px solid ${b3}`}} onClick={()=>changeBorder(3)}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Lorem ipsum dolor sit amet
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit
              amet, consectetur
            </div>
          </div>
        </div>
        <div className="accordion-item py-3" style={{border:"0px",borderLeft:`2px solid ${b4}`}} onClick={()=>changeBorder(4)}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              Lorem ipsum dolor sit amet
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit
              amet, consectetur
            </div>
          </div>
        </div>
      </div>
      </section>

      <section id="ProvideSection2" className="">
        {/* <img src="./images/ProvideImg1.svg" alt="ProvideImg1" id="ProvideImg1"/>
        <img src="./images/ProvideImg2.svg" alt="ProvideImg2" id="ProvideImg2"/> */}
        <img src="./images/ProvideImg.png" alt="ProvideImg" id="ProvideImg"/>
      </section>
      </section>
    </>
  );
};

export default ProvideSection;
