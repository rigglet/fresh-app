import { motion } from "framer-motion";
import styled from "styled-components";

const Card = ({ data }) => {
    //console.log(data);  
    return (
      <StyledCard>
        <div className="image-container">
          <img className="card-image" src={data.image} alt="Card educational building" />
          <div className="stat">{data.stats}</div>
          <div className="institution-type">{data.place}</div>
        </div>

        <div className="card-text">
          <h4 className="institution-name">{data.name}</h4>
            
          {
          data.qualifications.map(qualification => {
              return (
                  <div className="qualification-section">
                    <h4 className="qualification-type">{qualification.type}</h4>
                      
                      {qualification.subjects.map(subject => {
                          return (<>
                            <div className="subject">
                              <p className="subject-name">{subject.name}</p>
                              <p className="subject-result">{subject.result}</p>
                            </div>
                          </>)    
                      })}
                  </div>
              )
            })
          }
                
          {data.content.length > 0 && (
            <section className="curriculum">
              <h4>Overview of curriculum</h4>
              {data.content?.map(item => {
                return <p>{item}</p>
              })}
            </section>
          )}
        </div>
          
        </StyledCard>
    )
 }

const StyledCard = styled(motion.div)`
    display: flex;
    flex-direction: column;
    flex: 0 1 350px;
    background: #f5f5f5;
    align-items: flex-start;
    border-radius: 15px;
    border: 0.2rem solid #65617d;
    transition: transform 0.3s ease;
    transform: rotateY(-5deg);
    
    &:hover {
      transition: transform 0.3s ease;
      transform: rotateZ(0deg);
    }
    
    .image-container{
      height: 200px;
      width: 100%;
      position: relative;
      
      img {
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .stat {
        position: absolute;
        bottom: 0px;
        right: 0rem;
        transform: translateY(50%);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.5rem;
        border-radius: 50%;
        width: 45px;
        height: 45px; 
        font-size: 1rem;
        background-color: hsl(248.57142857142858, 12.612612612612612%, 30%);
        color: var(--color-light-text);
        border: 6px solid var(--color-light-text);
        font-weight: lighter;
      }
      
      .institution-type {        
        position: absolute;
        bottom: 0px;
        left: 1rem;
        transform: translateY(50%);
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.25rem 0.5rem;
        border-radius: 25px;
        width: auto;
        height: auto; 
        font-variant: all-small-caps;
        font-size: 1.3rem;
        vertical-align: center;
        background-color: hsl(248.57142857142858, 12.612612612612612%, 30%);
        color: var(--color-light-text);
        border: 6px solid var(--color-light-text);
        font-weight: lighter;
      }
    }

    .card-text {
      width: 100%;
      margin-top: 1rem;
      color: #1c3b57;
      padding: 1rem;
      font-size: 1rem;
      display: flex;
      flex-direction: column;
      row-gap: 0.5rem;
      
      .institution-name{
        background-color: hsl(248.57142857142858, 12.612612612612612%, 43.529411764705884%);
        background-color: hsl(248.57142857142858, 12.612612612612612%, 30%);
        color: var(--color-light-text);
        font-weight: lighter;
        text-align: center;
      };
      .qualification-section {
        .qualification-type {
          font-variant: all-small-caps;
          font-size: 1.3rem;
        }
      }
    }
    .subject{
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
`;
    
export default Card;