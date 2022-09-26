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
          <h4>{data.name}</h4>
            {
                data.qualifications.map(qualification => {
                    return (
                        <div className="qualification-section">
                          <h4>{qualification.type}</h4>
                            
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
                <h4>Overview of curriculum</h4>
                {data.content?.map(item => {
                  return <p>{item}</p>
                })}
          
          </div>
          
        </StyledCard>
    )
 }

const StyledCard = styled(motion.div)`
    display: grid;
    grid-template-columns: 350px;
    grid-template-rows: auto auto;
    grid-template-areas: "image" "text";
    border-radius: 4px;
    background: #f5f5f5;
    text-align: center;
    //justify-content: flex-start;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    border-radius: 15px;
    border: 0.2rem solid #65617d;
    transition: transform 0.3s ease;
    
    //cursor: pointer;
    //box-shadow: 5px 5px 15px rgba(101, 97, 125, 20);
    /* color: #f5f5f5;
    border-radius: 10px;
    background: transparent; */
    /* &:hover {
      transition: transform 0.3s ease;
      transform: scale(1.05);
    } */
    
    .image-container{
      grid-area: image;
      height: 200px;
      width: 100%;
      position: relative;
      
      img {
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-bottom: 0.25rem solid #65617d;
      }

      .stat {
        position: absolute;
        bottom: 0px;
        right: 1rem;
        transform: translateY(50%);
        display: flex;
        align-items: center;
        justify-content: center;
        //background-color: #65617d;
        background-color: #689ed0;
        background-color: var(--color-light-background);
        color: #1c3b57;
        padding: 0.5rem;
        border-radius: 50%;
        border: 3px solid #65617d;
        width: 45px;
        height: 45px; 
        font-weight: normal;
        font-size: 1.3rem;
      }
      
      .institution-type {        
        position: absolute;
        bottom: 0px;
        left: 1rem;
        transform: translateY(50%);
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #689ed0;
        background-color: var(--color-light-background);
        color: #1c3b57;
        padding: 0.5rem;
        border-radius: 25px;
        border: 3px solid #65617d;
        width: auto;
        height: 45px; 
        font-weight: normal;
        font-size: 1.3rem;
        font-size: 1rem;
      }
    }

    .card-text {
      grid-area: text;
      align-self: flex-start;
      height: 100%;
      color: #1c3b57;
      padding: 1rem;
      
      .qualification-section {
        padding: 0.5rem;
      }
    }
    
    .subject{
      width: 100%;
      display: flex;
      justify-content: space-between;
      .subject-name{}
      .subject-result{}
    }
    /* 
    .card-text p {
      color: grey;
      font-size: 15px;
      font-weight: 300;
    }
    .card-text h2 {
      margin-top: 0px;
      font-size: 22px;
    }
    .card-stats {
      grid-area: stats;
      display: flex;
      justify-content: center;
      border-bottom-left-radius: 15px;
      border-bottom-right-radius: 15px;
      background: #65617d;
    }
    
    
    .certificate {
      min-width: 25vw;
      height: auto;
      cursor: pointer;
      transition: transform 0.6s ease;
      box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.6);
      &:hover {
        transition: transform 0.3s ease;
        transform: scale(1.15);
    }
    .info {
        padding: 1rem;
    }
    .stats {
        border: 1px solid #f5f5f5;
        border-radius: 0px 0px 10px 10px;
          width: 100%;
          height: 7vh;
        }
        .stats:nth-of-type(1) {
          background: #689ed0;
        }
        .stats:nth-of-type(2) {
            background: #65617d;
        }
        .stats:nth-of-type(3) {
          background: #1c3b57;
        }
    } */
`;
    
export default Card;