import React from 'react';
import './Videos.css'
import {VideoItems} from '../../Helpers/Helpers'
import {Row, Col} from 'react-bootstrap'

function Videos({VideoList}) { 
  
  return (
      <div className="collections"> 
          
            <Row>
            {VideoItems.map((obj, key) => {
                return (
                  <Col md={3} sm={4} lg={3} xs={12} xl={2} >
                <div className="vid">
                    <video controls>
                      <source src={obj.VideoList} ></source>
                    </video>
                  </div>
              </Col>
                 );
                })}
            </Row>
            
          

      </div> 
  )
}

export default Videos;
