import React from 'react'
import '../Courses/Courses.css'
import Rubb from '../Assets/Rubb.jpg' 

const Rubber = () => {
  return (
    <div>
        <div className="c">
    <div className="c-wrap">
      <div className="c-header">
        <h1 className="h1">Rubber Engineering</h1>
      </div>
      <div className="c-container">
        <img src={Rubb} alt="Rubber" className="c-image" />
        <div className="c-info">
          <h2>What is Rubber Engineering?</h2>
          <p>
            The branch of engineering that deals with the processing of
            latex, natural rubber or synthetic rubber to transform them into
            useful products is known as Rubber Technology. This subject of
            study includes the types of rubbers, their properties and
            descriptions of formulation of rubber compounds. This career is
            yet to gain popularity in India but is still a lucrative career
            choice.
          </p>

          <h2>What does an Rubber Engineer do?</h2>

          <p>
            Roles and responsibilities of rubber engineer:
            <ul>
              <li>
              Supports the production launch of tooling and processes for new rubber materials and products.
              </li>
              <li>
              Engineer's equipment, tooling, and process specifications.
              </li>
              <li>
              Works on rubber moulding process parameters to identify root cause of production issues, provides corrective actions and process control plan.
              </li>
              <li>
              Develop documented processes for new production parts for the rubber moulding processes and related assembly equipment and cost reduction projects.
              </li>
              <li>
              Lead and support pre-production trial activities by developing counter measures for problem areas and cost reduction projects.
              </li>
              <li>
              Specify and/or direct fabrication of equipment used in rubber direct processing and/or assembly operations (i.e. end-of-arm-tooling, fixtures, jigs etc).
              </li>
            </ul>
          </p>

          <h2>Job Opportunities for Rubber Engineers</h2>
          <p>
            {" "}
            Students of Rubber Technology are generally absorbed in tyre
            companies like Apollo Tyres Ltd, Jayashree Polymers group etc.
            Industries like those making waterproof wares also employ
            specialists in this field. Public sector undertakings including
            Gas Authority of India Limited and Haldia Petrochemicals also
            hire trained rubber technologists. International tyre companies
            are also recruiting trained professionals from India.{" "}
          </p>

          <h2>Popular Companies that hire Rubber Engineers</h2>
          <p>
            <ul>
              <li>Recex</li>
              <li>Dynamic Rubbers Private Limited (Vikalp)</li>
              <li>TVS Motor Company </li>
              <li>Bosch Rexrothk</li>
              <li>Rekrut India Pvt Ltd</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  </div>
  </div>
  )
}

export default Rubber