import React from "react";
import Typography from "@mui/material/Typography";
import { Box, Button, Card } from "@mui/material";
import "./MUICard.css";


interface IMUICard {setShowBackSide:any, selectedRating:any, setSelectedRating:any}  


export default function MUICard(props:IMUICard) {
    


  const handleRatingUpdate = (newRating: number) => {
    props.setSelectedRating(newRating);
  };
  
  return (
    
    <Box 
      sx={{
        minWidth: 275,
        width: "330px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
      }}
    >
      <Card
        variant="outlined"
        sx={{ bgcolor: "#242424", padding: "20px", borderRadius: "10px" }}
      >
        <React.Fragment>
          <Button sx={{ borderRadius: "100%" }}>
            <svg width="17" height="16" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m9.067.43 1.99 4.031c.112.228.33.386.58.422l4.45.647a.772.772 0 0 1 .427 1.316l-3.22 3.138a.773.773 0 0 0-.222.683l.76 4.431a.772.772 0 0 1-1.12.813l-3.98-2.092a.773.773 0 0 0-.718 0l-3.98 2.092a.772.772 0 0 1-1.119-.813l.76-4.431a.77.77 0 0 0-.222-.683L.233 6.846A.772.772 0 0 1 .661 5.53l4.449-.647a.772.772 0 0 0 .58-.422L7.68.43a.774.774 0 0 1 1.387 0Z"
                fill="#FC7614"
              />
            </svg>
          </Button>
          <br />
          <Typography
            variant="h5"
            sx={{ color: "#FCFBF4", marginTop: "15px", fontWeight: 600 }}
          >
            How did we do?
          </Typography>
          <Typography
            variant="body2"
            sx={{ marginTop: "10px", color: "#FCFBF4" }}
          >
            Please let us know how we did with your request. All feedback is
            appreciated to help us improve our offering!
          </Typography>
          <Box>
            <form
              className="form"
              onSubmit={(e) => {
                e.preventDefault();
                props.setShowBackSide(true)
              }}
            >
              <div className="ratings-container">
                <button type="button"
                  className={`numbers-btn ${
                    props.selectedRating === 1 ? "selected-rating" : ""
                  }`}
                  onClick={() => handleRatingUpdate(1)}
                >
                  1
                </button>
                <button type="button"
                  className={`numbers-btn ${
                    props.selectedRating === 2 ? "selected-rating" : ""
                  }`}
                  onClick={() => handleRatingUpdate(2)}
                >
                  2
                </button>
                <button type="button"
                  className={`numbers-btn ${
                    props.selectedRating === 3 ? "selected-rating" : ""
                  }`}
                  onClick={() => handleRatingUpdate(3)}
                >
                  3
                </button>
                <button type= "button"
                  className={`numbers-btn ${
                   props.selectedRating === 4 ? "selected-rating" : ""
                  }`}
                  onClick={() => handleRatingUpdate(4)}
                >
                  4
                </button>
                <button type="button"
                  className={`numbers-btn ${
                    props.selectedRating === 5 ? "selected-rating" : ""
                  }`}
                  onClick={() => handleRatingUpdate(5)}
                >
                  5
                </button>
              </div>
              <button className="submit-btn" type="submit">SUBMIT</button>
            </form>
          </Box>
        </React.Fragment>
      </Card>
    </Box>
  );
}
