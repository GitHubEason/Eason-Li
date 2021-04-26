import React from 'react';

import { 
    Col,
    Card
 } from "react-bootstrap";
const ExperienceCard = ({data}) => {
    return ( 
        <Col lg="6">
            <div className="pb-5 text-center">
                <p className="lead">
                    <h2>
                        {data.role}
                    </h2>
                </p>
                    {data.link}
            
                <p>
                    {data.first}
                    <br/>
                    {data.second}
                    <br/>
                    {data.third}
                </p>
                
            </div>
        </Col>
     );
}
 
export default ExperienceCard;