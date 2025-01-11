import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import Papa from 'papaparse';
import axios from 'axios';
import ReactDOM from 'react-dom';
import $ from 'jquery'; 


// Screen 1- Welcome Screen
const Screen1 = ({ onButtonClick, online }) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black',
      width: '100%',
      height: '100vh',
      padding: '5%',
      boxSizing: 'border-box',
    }}
  >
    <Typography 
      align="center" 
      variant="h4"
      sx={{
        color: "white",
        marginBottom: '5vh',
        fontSize: {xs: '1.5rem', sm: '2rem', md: '2.5rem'},
      }}
    >
      Welcome! <br />
      Before beginning the experiment, please read the instructions carefully. <br />
      Press Continue to read instructions.
    </Typography>
    <Button
      onClick={onButtonClick}
      sx={{
        border: '2px solid white',
        backgroundColor: 'gray',
        color: 'white',
        padding: '10px 20px',
        fontSize: {xs: '0.8rem', sm: '1rem'},
        '&:hover': {
          backgroundColor: 'darkgray',
        },
      }}
    >
      Continue
    </Button>
  </Box>
);


// Screen 2- Congruent Stimulus + P and Q Buttons
const Screen2 = ({ onButtonClick, online }) => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'black',
      width: '100vw',
      height: '100vh',
      position: 'relative',
      border: 'none',
    }}
  >

    <Button
      sx={{
        position: 'absolute',
        top: '20px',
        left: '20px',
        border: '2px solid white',
        height: '150px',
        width: '170px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography sx={{ fontSize: '50px', color: 'white' }}>Q</Typography>
      <img 
        src="happy_face.png"
        alt="happy face"
        style={{
          width: '50px',
          height: '50px',
          marginTop: '10px'
        }}
      />
    </Button>


    <Button
      sx={{
        position: 'absolute',
        top: '20px',
        right: '20px',
        border: '2px solid white',
        height: '150px',
        width: '170px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography sx={{ fontSize: '50px', color: 'white' }}>P</Typography>
      <img 
        src="angry_face.png"
        alt="angry face"
        style={{
          width: '50px',
          height: '50px',
          marginTop: '10px'
        }}
      />
    </Button>

    {/* Container in Center */}
    <Container
      maxWidth="md"
      sx={{
        border: '2px solid black',
        backgroundColor: 'black',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '60vh',
        paddingBottom: '40px',
      }}
      style={{ marginTop: '120px', marginBottom: '10px' }}
    >
      {/* images in a horizontal row */}
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '20px' }}>
        {[...Array(5)].map((_, index) => (
          <img
            key={index}
            src="/WM09_AC.bmp"
            alt="Face"
            style={{
              width: '150px',
              height: '150px',
            }}
          />
        ))}
      </Box>

     
      <Typography
        sx={{
          color: 'white',
          fontSize: '20px',
          textAlign: 'center',
          fontWeight: 'bold',
          marginTop: '40px',
        }}
      >
        A set of five faces will be shown in the center of the screen.<br />
        Your task will be to indicate the direction of the MIDDLE face.<br />
        To submit your answer, press one of the following keys: <br />
        Q if the MIDDLE face is pointing to the LEFT <br />
        P if the MIDDLE face is pointing to the RIGHT.<br />
        Press Continue to read further instruction.
      </Typography>

     
      <Button
        onClick={onButtonClick}
        sx={{
          border: '2px solid white',
          backgroundColor: 'grey',
          marginTop: '20px',
        }}
        style={{
          height: '50px',
          width: '100px',
        }}
      >
        <Typography style={{ color: 'white' }}>Continue</Typography>
      </Button>
    </Container>
  </Box>
);


// Screen 3- Incongruent Stimulus
const Screen3 = ({ onButtonClick }) => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'black',
      width: '100vw',
      height: '100vh',
      position: 'relative',
      border: 'none',
    }}
  >
    {/* Left Button */}
    <Button
      sx={{
        position: 'absolute',
        top: '20px',
        left: '20px',
        border: '2px solid white',
        height: '150px',
        width: '170px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography sx={{ fontSize: '50px', color: 'white' }}>Q</Typography>
      <img 
        src="happy_face.png"
        alt="happy face"
        style={{
          width: '50px',
          height: '50px',
          marginTop: '10px'
        }}
      />
    </Button>

    {/* Right Button */}
    <Button
      sx={{
        position: 'absolute',
        top: '20px',
        right: '20px',
        border: '2px solid white',
        height: '150px',
        width: '170px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography sx={{ fontSize: '50px', color: 'white' }}>P</Typography>
      <img 
        src="angry_face.png"
        alt="angry face"
        style={{
          width: '50px',
          height: '50px',
          marginTop: '10px'
        }}
      />
    </Button>

    {/* Centered Container */}
    <Container
      maxWidth="md"
      sx={{
        border: '2px solid black',
        backgroundColor: 'black',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        height: '60vh',
        paddingBottom: '40px',
      }}
      style={{ marginTop: '120px', marginBottom: '10px' }}
    >
      {/* Images in a horizontal row */}
      <Box sx={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '20px' }}>
        {[...Array(2)].map((_, index) => (
          <img
            key={`AC-${index}`} // Ensure unique keys
            src="/WM09_AC.bmp" // Left images
            alt="Face"
            style={{
              width: '150px',
              height: '150px',
            }}
          />
        ))}
        
        <img
          key="HC" // Ensure unique key for middle image
          src="/WM09_HC.bmp" // Middle image
          alt="Middle Face"
          style={{
            width: '150px',
            height: '150px',
          }}
        />

        {[...Array(2)].map((_, index) => (
          <img
            key={`AC2-${index}`} // Ensure unique keys
            src="/WM09_AC.bmp" // Right images
            alt="Face"
            style={{
              width: '150px',
              height: '150px',
            }}
          />
        ))}
      </Box>

      {/* Instruction text */}
      <Typography
        sx={{
          color: 'white',
          fontSize: '20px',
          textAlign: 'center',
          fontWeight: 'bold',
          marginTop: '40px',
        }}
      >
        Sometimes the surrounding arrows will point in the opposite direction than the arrow in the middle. <br />
        Only pay attention to the MIDDLE arrow!<br />
        Press Continue to read further instruction.
      </Typography>

      {/* Continue Button */}
      <Button
        onClick={onButtonClick}
        sx={{
          border: '2px solid white',
          backgroundColor: 'grey',
          marginTop: '20px',
        }}
        style={{
          height: '50px',
          width: '100px',
        }}
      >
        <Typography style={{ color: 'white' }}>Continue</Typography>
      </Button>
    </Container>
  </Box>
);

//Screen 4 - Example
const Screen4 = ({ onButtonClick, online }) => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'black',
      width: '100vw',
      height: '100vh',
      border: 'none',
    }}
  >
    <Container
      maxWidth="md"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        position: 'relative',
        border: '2px solid black',
        backgroundColor: 'black',
        pt: 2,
        pb: 2,
      }}
    >
      <Box sx={{ position: 'relative', height: '120px' }}>
        <Button
          sx={{
            border: '2px solid white',
            height: { xs: '100px', sm: '120px', md: '150px' },
            width: { xs: '120px', sm: '140px', md: '170px' },
            position: 'absolute',
            top: '5%',
            left: {xs: '5%', sm: '7%', md: '0%'},
            transform: {
              xs: 'none',
              sm: 'translateX(-10%)',
              md: 'translateX(-75%)'
            },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '10px'
          }}
        >
          <Typography sx={{ fontSize: { xs: '30px', sm: '40px', md: '50px' }, color: 'white', lineHeight: 1 }}>
            Q
          </Typography>
          <img 
          src="happy_face.png"
          alt="happy face"
          style={{
            width: '50px',
            height: '50px',
            marginTop: '10px'
          }}
          />
        </Button>

        <Button
          sx={{
            border: '2px solid white',
            height: { xs: '100px', sm: '120px', md: '150px' },
            width: { xs: '120px', sm: '140px', md: '170px' },
            position: 'absolute',
            top: '5%',
            right: {xs: '5%', sm: '7%', md: '0%'},
            transform: {
              xs: 'none',
              sm: 'translateX(10%)',
              md: 'translateX(75%)'
            },
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '10px'
          }}
        >
          <Typography sx={{ fontSize: { xs: '30px', sm: '40px', md: '50px' }, color: 'white', lineHeight: 1 }}>
            P
          </Typography>
          <img 
            src="angry_face.png"
            alt="angry face"
            style={{
              width: '50px',
              height: '50px',
              marginTop: '10px'
            }}
          />
        </Button>
      </Box>

      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-around', mt: 2 }}>
        <Typography
          sx={{
            color: "white",
            fontSize: { xs: "16px", sm: "20px", md: "24px" },
            textAlign: 'center',
          }}
        >
          In the example below, the left [Q]-key is correct:
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 2
          }}
        >
          {Array(5).fill(null).map((_, index) => (
            <img
              key={index}
              src="/WM09_AC.bmp"
              alt="Left arrow"
              style={{
                width: '50px',
                height: '50px',
                transform: 'rotate(0deg)'
              }}
            />
          ))}
        </Box>
        <Typography
          sx={{
            color: "white",
            fontSize: { xs: "16px", sm: "20px", md: "24px" },
            textAlign: 'center',
          }}
        >
          since the middle arrow is pointing to the left.
        </Typography>
        <Typography
          sx={{
            color: "white",
            fontSize: { xs: "16px", sm: "20px", md: "24px" },
            textAlign: 'center',
          }}
        >
          In the example below, the right [P]-key is correct:
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 2
          }}
        >
          {[...Array(5)].map((_, index) => (
            <img
              key={index}
              src={index === 2 ? "/WM09_HC.bmp" : "/WM09_AC.bmp"}
              alt={index === 2 ? "Right arrow" : "Left arrow"}
              style={{
                width: '50px',
                height: '50px',
                transform: index === 2 ? 'rotate(0deg)' : 'rotate(0deg)' 
              }}
            />
          ))}
        </Box>
        <Typography
          sx={{
            color: "white",
            fontSize: { xs: "16px", sm: "20px", md: "24px" },
            textAlign: 'center',
          }}
        >
          since the middle arrow is pointing to the right.
        </Typography>
        <Typography
          sx={{
            color: "white",
            fontSize: { xs: "16px", sm: "20px", md: "24px" },
            textAlign: 'center',
          }}
        >
          Press Continue for further instruction.
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mt: 2,
        }}
      >
        <Button
          onClick={onButtonClick}
          sx={{
            border: '2px solid white',
            backgroundColor: 'grey',
            color: 'white',
            height: '50px',
            width: '100px',
          }}
        >
          Continue
        </Button>
      </Box>
    </Container>
  </Box>
);

//Begin Practice Round
const Screen5 = ({ onButtonClick, online }) => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black',
      width: '100vw',
      height: '100vh',
      overflow: 'auto',
    }}
  >
    <Container
      maxWidth="md"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        maxHeight: '100vh',
        position: 'relative',
        border: '2px solid black',
        backgroundColor: 'black',
        pt: { xs: 10, sm: 12, md: 4 },
        pb: 2,
        px: { xs: 2, sm: 3, md: 4 },
      }}
    >
      <Button
        sx={{
          border: '2px solid white',
          height: { xs: '100px', sm: '120px', md: '150px' },
          width: { xs: '120px', sm: '140px', md: '170px' },
          position: 'absolute',
          top: { xs: '2%', sm: '3%', md: '5%' },
          left: { xs: '5%', sm: '7%', md: '0%' },
          transform: {
            xs: 'none',
            sm: 'translateX(-10%)',
            md: 'translateX(-75%)'
          },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '10px'
        }}
      >
        <Typography sx={{ fontSize: { xs: '30px', sm: '40px', md: '50px' }, color: 'white',  lineHeight: 1 }}>
          Q
        </Typography>
        <img 
            src="happy_face.png"
            alt="happy face"
            style={{
              width: '50px',
              height: '50px',
              marginTop: '10px'
            }}
          />
      </Button>

      <Button
        sx={{
          border: '2px solid white',
          height: { xs: '100px', sm: '120px', md: '150px' },
          width: { xs: '120px', sm: '140px', md: '170px' },
          position: 'absolute',
          top: { xs: '2%', sm: '3%', md: '5%' },
          right: { xs: '5%', sm: '7%', md: '0%' },
          transform: {
            xs: 'none',
            sm: 'translateX(10%)',
            md: 'translateX(75%)'
          },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '10px'
        }}
      >
        <Typography sx={{ fontSize: { xs: '30px', sm: '40px', md: '50px' }, color: 'white',  lineHeight: 1 }}>
          P
        </Typography>
        <img 
            src="angry_face.png"
            alt="angry face"
            style={{
              width: '50px',
              height: '50px',
              marginTop: '10px'
            }}
          />
      </Button>

      <Box sx={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        mt: { xs: 16, sm: 20, md: 16 },
        mb: { xs: 2, sm: 3, md: 4 },
      }}>
        <Typography
          sx={{
            color: "white",
            fontSize: { xs: "20px", sm: "25px", md: "30px" },
            textAlign: 'center'
          }}
        >
          You will now be given a chance to practice before the test begins. <br />
          Remember: <br />
          {'\u00A0\u00A0\u00A0\u00A0'}Keep focusing on the fixation point in the center of the screen and answer as quickly as possible but avoid mistakes. <br />
          {'\u00A0\u00A0\u00A0\u00A0'}Place your index fingers on the [Q] and [P] keys. <br />
          Press Start to begin the Practice Block.
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          mt: 'auto',
          mb: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Button
          onClick={onButtonClick}
          sx={{
            border: '2px solid white',
            backgroundColor: 'grey',
            color: 'white',
            height: '50px',
            width: '100px',
          }}
        >
          Continue
        </Button>
      </Box>
    </Container>
  </Box>
);

//Flanker Task- Screen 1 P and Q/ Screen 6 overall
const Screen6 = ({ onButtonClick }) => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'black',
      width: '100vw',
      height: '100vh',
      border: 'none',
    }}
  >
    <Container
      maxWidth="md"
      sx={{
        border: '2px solid black',
        backgroundColor: 'black',
        height: '60vh',
        display: 'flex', 
        justifyContent: 'space-around', 
      }}
      style={{ marginTop: '120px', marginBottom: '10px' }}
    >
      <Button
        sx={{
          border: '2px solid white',
          justifyContent: 'center',
        }}
        style={{
          height: '300px',
          width: '200px',
          alignItems: 'center',
          marginTop: '30px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        <Typography sx={{ fontSize: '100px', color: 'white' }}>
          Q
        </Typography>
        <img 
          src="happy_face.png"
          alt="happy face"
          style={{
            width: '50px',
            height: '50px',
            marginTop: '10px'
          }}
        />
      </Button>
      <Button
        sx={{
          border: '2px solid white',
          justifyContent: 'center',
        }}
        style={{
          height: '300px',
          width: '210px',
          alignItems: 'center',
          marginTop: '30px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        }}
      >
        <Typography sx={{ fontSize: '100px', color: 'white' }}>
          P
        </Typography>
        <img 
          src="angry_face.png"
          alt="angry face"
          style={{
            width: '50px',
            height: '50px',
            marginTop: '10px'
          }}
        />
      </Button>
    </Container>
  </Box>
);

//Flanker Screen 2- Cross(Screen 7)
const Screen7 = ({ onButtonClick }) => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'black',
      width: '100vw',
      height: '100vh',
      border: 'none',
    }}
  >
    <Container
      maxWidth="md"
      sx={{
        border: '2px solid black',
        backgroundColor: 'black',
        justifyContent: 'center',
        height: '60vh',
      }}
      style={{ marginTop: '120px', marginBottom: '10px' }}
    >
      <Typography
        sx={{ fontSize: '200px', color: 'white', justifyContent: 'center' }}
        style={{
          alignItems: 'center',
          marginRight: '100px',
          marginLeft: '350px',
          marginTop: '50px',
        }}
      >
        +
      </Typography>

    </Container>
  </Box>
);

// Flanker Screen 3- Blank(Screen 8)
const Screen8 = ({ onButtonClick }) => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'black',
      width: '100vw',
      height: '100vh',
      border: 'none',
    }}
  >
    <Container
      maxWidth="md"
      sx={{
        border: '2px solid black',
        backgroundColor: 'black',
        justifyContent: 'center',
        height: '60vh',
      }}
      style={{ marginTop: '120px', marginBottom: '10px' }}
    >

    </Container>
  </Box>
);

//Flanker Task- Arrows Screen 9
const Screen9 = ({ onButtonClick, value, onChange, currentPattern1, tooSlow }) => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      backgroundColor: 'black',
      width: '100vw',
      height: '100vh',
      border: 'none',
      overflow: 'auto',
    }}
  >
    <Container
      maxWidth="md"
      sx={{
        border: '2px solid black',
        backgroundColor: 'black',
        height: '60vh',
        position: 'relative',
        marginTop: '120px',
        marginBottom: '10px',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: { xs: '10px', sm: '15px', md: '20px' },
        }}
      >
        {Array.isArray(currentPattern1) && currentPattern1.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`Pattern element ${index + 1}`}
            style={{
              width: 'auto',
              height: 'auto',
              maxHeight: '150px',
              transform: 'rotate(0deg)',
              '@media (max-width:600px)': {
                maxHeight: '80px',
              },
              '@media (min-width:601px) and (max-width:960px)': {
                maxHeight: '120px',
              },
            }}
          />
        ))}
      </Box>
      
      {tooSlow && (
        <Typography
          sx={{
            fontSize: { xs: '24px', sm: '36px', md: '50px' },
            color: 'red',
            textAlign: 'center',
            position: 'absolute',
            bottom: '20%',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
        >
          Too Slow! Press Space to continue.
        </Typography>
      )}
    </Container>
  </Box>
);

//Screen 10- Experiment Begins
const Screen10 = ({ onStartClick, onPracticeMoreClick, online }) => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black',
      width: '100vw',
      height: '100vh',
      overflow: 'auto',
    }}
  >
    <Container
      maxWidth="md"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        maxHeight: '100vh',
        position: 'relative',
        border: '2px solid black',
        backgroundColor: 'black',
        pt: { xs: 10, sm: 12, md: 4 },
        pb: 2,
        px: { xs: 2, sm: 3, md: 4 },
      }}
    >
      {/* Q and P buttons remain unchanged */}
      <Button
        sx={{
          border: '2px solid white',
          height: { xs: '100px', sm: '120px', md: '150px' },
          width: { xs: '120px', sm: '140px', md: '170px' },
          position: 'absolute',
          top: { xs: '2%', sm: '3%', md: '5%' },
          left: { xs: '5%', sm: '7%', md: '0%' },
          transform: {
            xs: 'none',
            sm: 'translateX(-10%)',
            md: 'translateX(-75%)'
          },
        }}
      >
        <Typography sx={{ fontSize: { xs: '30px', sm: '40px', md: '50px' }, color: 'white' }}>
          Q
          <br />
          &lt;
        </Typography>
      </Button>

      <Button
        sx={{
          border: '2px solid white',
          height: { xs: '100px', sm: '120px', md: '150px' },
          width: { xs: '120px', sm: '140px', md: '170px' },
          position: 'absolute',
          top: { xs: '2%', sm: '3%', md: '5%' },
          right: { xs: '5%', sm: '7%', md: '0%' },
          transform: {
            xs: 'none',
            sm: 'translateX(10%)',
            md: 'translateX(75%)'
          },
        }}
      >
        <Typography sx={{ fontSize: { xs: '30px', sm: '40px', md: '50px' }, color: 'white' }}>
          P
          <br />
          &gt;
        </Typography>
      </Button>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1,
          mt: { xs: 16, sm: 20, md: 16 },
          mb: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Typography
          sx={{
            color: 'white',
            fontSize: { xs: '18px', sm: '22px', md: '26px' }, // Increased font sizes
            textAlign: 'center',
            fontWeight: 'bold',
            mb: { xs: 3, sm: 4, md: 5 }, // Increased bottom margin
            maxWidth: '90%', // Ensure text doesn't get too wide on larger screens
          }}
        >
          The experiment will now begin.
          <br />
          Press Start to begin the Experiment Block.
          <br />
          If you would like additional practice, press Practice More.
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            gap: { xs: 2, sm: 3 },
            mt: { xs: 2, sm: 3 },
          }}
        >
          <Button
            onClick={onStartClick}
            sx={{
              border: '2px solid white',
              backgroundColor: 'grey',
              color: 'white',
              height: '50px',
              width: { xs: '80%', sm: '150px' },
              fontSize: { xs: '16px', sm: '18px' }, // Slightly increased font size
            }}
          >
            Start
          </Button>
          <Button
            onClick={onPracticeMoreClick}
            sx={{
              border: '2px solid white',
              backgroundColor: 'grey',
              color: 'white',
              height: '50px',
              width: { xs: '80%', sm: '150px' },
              fontSize: { xs: '16px', sm: '18px' }, // Slightly increased font size
            }}
          >
            Practice More
          </Button>
        </Box>
      </Box>
    </Container>
  </Box>
);

//Screen 11
const Screen11 = ({ onButtonClick, value, onChange, online, PID }) => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'black',
      width: '100vw',
      height: '100vh',
      border: 'none',
      overflow: 'auto',
    }}
  >
    <Container
      maxWidth="md"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        border: '2px solid black',
        backgroundColor: 'black',
        height: '100%',
        width: '100%',
        padding: { xs: 2, sm: 3, md: 4 },
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: '48px', sm: '72px', md: '100px' },
          color: 'white',
          textAlign: 'center',
          mb: { xs: 3, sm: 4, md: 5 },
        }}
      >
        Thank you!
      </Typography>
      
      {online && (
        <Typography
          sx={{
            fontSize: { xs: '24px', sm: '36px', md: '50px' },
            color: 'white',
            textAlign: 'center',
            mt: { xs: 2, sm: 3, md: 4 },
          }}
        >
          {`Follow this link to the second experiment: https://flankertask.netlify.app?exp=F1&online=T&PID=${PID}`}
        </Typography>
      )}
    </Container>
  </Box>
);

//Screen 12- Break Screen every 50 trials

const Screen12 = ({ onBreakEnd }) => {
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer); // Cleanup timeout
    } else {
      onBreakEnd(); // Call the callback to resume the experiment
    }
  }, [countdown, onBreakEnd]);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        width: '100vw',
        height: '100vh',
        border: 'none',
        overflow: 'auto',
      }}
    >
      <Container
        maxWidth="md"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          border: '2px solid black',
          backgroundColor: 'black',
          height: { xs: '80vh', md: '60vh' },
          width: '100%',
          padding: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: '32px', sm: '48px', md: '60px' },
            color: 'white',
            textAlign: 'center',
            maxWidth: '100%',
          }}
        >
          Break Time!
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: '24px', sm: '36px', md: '48px' },
            color: 'white',
            textAlign: 'center',
            marginTop: 2,
          }}
        >
          Experiment will resume in {countdown} seconds.
        </Typography>
      </Container>
    </Box>
  );
}




//Rotate Screens
const FaceExperiment = ({ online, experiment, PID }) => {
  const [screen, setScreen] = useState(1);
  const [delay, setDelay] = useState(1000);
  const [inputValue, setInputValue] = useState('');
  const [targetScreen, setTargetScreen] = useState(0);
  const [responses, setResponses] = useState([]);
  const [stopwatch, setStopwatch] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const [patterns, setPatterns] = useState([]);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [currentPatternIndex, setCurrentPatternIndex] = useState(0);
  const [congruency, setCongruency] = useState(0);
  const [tooSlow, setTooSlow] = useState(false);
  const [takeBreak, setTakeBreak] = useState(false);
  const [skipped, setSkipped] = useState([]);

  // Helper function to create image pattern from URLs
  const createImagePattern = (flankerUrl, targetUrl) => {
    return [
      flankerUrl,  // left flanker
      flankerUrl,  // left flanker
      targetUrl,   // target
      flankerUrl,  // right flanker
      flankerUrl   // right flanker
    ];
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const csvFile = '/flanker_images_mini.csv'; 
        console.log("Experiment:", experiment);
        const response = await axios.get(csvFile);
        console.log("Raw CSV data:", response.data);

        Papa.parse(response.data, {
          header: true,
          complete: (results) => {
            console.log("Parsed data:", results.data);
            
            // Parse the patterns using target and flanker URLs directly
            const parsedPatterns = results.data
              .filter(row => row.flanker && row.target)
              .map(row => createImagePattern(row.flanker, row.target));

            const correctAnswer = results.data
              .filter(row => row.correct)
              .map(row => row.correct.toUpperCase());

            const congruent = results.data
              .filter(row => row.congruency)
              .map(row => row.congruency);

            console.log("Parsed patterns:", parsedPatterns);
            setPatterns(parsedPatterns);
            setCorrectAnswers(correctAnswer);
            setCongruency(congruent);
          },
          error: (error) => {
            console.error("Parsing error:", error);
          }
        });
      } catch (error) {
        console.error('Error fetching the CSV file:', error);
      }
    };
    fetchData();
  }, []);

  // Helper component to render the image pattern
  const ImagePattern = ({ pattern }) => {
    if (!pattern) return null;

    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
        {pattern.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`Flanker ${index}`}
            style={{
              width: '50px',
              height: '50px',
              transform: 'rotate(0deg)'
            }}
          />
        ))}
      </div>
    );
  };

  useEffect(() => {
    console.log("Current Pattern Index:", currentPatternIndex);
    console.log(PID);
    console.log("Current Pattern:", patterns[currentPatternIndex]);
  }, [currentPatternIndex, patterns]);
  
//if takes more than 5 seconds, too slow message, and move pattern back
useEffect(() => {
  let slow, move;
  //after hit space bar, move pattern to end and remove event listener
  const handleSpace = (event) => {
    if (tooSlow == true && event.code === 'Space') {
      movePatternToEnd();
      setCurrentPatternIndex(prevIndex => (prevIndex + 1));
      //if every 50 trials, set takebreak to true
      //change to 58
      if(currentPatternIndex % 58 == 0) {
          setTakeBreak(true);
      }
      setTooSlow(false); // hides the too slow message
      saveResponse(null, 0);
      console.log("added null trial");
      window.removeEventListener('keydown', handleSpace); // remove the event listener after handling the event
    }
  };

  //stores start time for pattern
    if (screen === 9 && currentPatternIndex >= 8) {
      setStartTime(Date.now());
      console.log(startTime);
      
    // waits 5 seconds, then says too slow and adds event listener for space bar
    slow = setTimeout(() => {
      setTooSlow(true);
      window.addEventListener('keydown', handleSpace); // add the event listener for user to hit space bar
    }, 2000);
  };

  //clean up
  return () => {
    clearTimeout(slow);
    clearTimeout(move);
    window.removeEventListener('keydown', handleSpace); 
  };

  // renders every time screen and currentPatternIndex update
}, [screen, currentPatternIndex, tooSlow]);


//moves pattern to end of list if participant takes longer than 5 sec
  const movePatternToEnd = () => {
      console.log("Moving Pattern to Back")
      //replace patterns with new rearranged array
      setPatterns(prevPatterns => {
        //copy current array from arg prevPatterns
        const updatedPatterns = [...prevPatterns];
        //remove current pattern from array and store pattern
        const currentPattern = updatedPatterns[currentPatternIndex];
        //adds pattern to end of array
        updatedPatterns.push(currentPattern);
        //takes previous state(prevSkipped) as arg and returns new state as array with currPatternIndex
        //update the skipped array
        setSkipped(prevSkipped => {
            const updatedSkipped = [...prevSkipped, currentPatternIndex];
            console.log("Skipped array:", updatedSkipped);
            return updatedSkipped;
        });
        console.log("Patterns array:", updatedPatterns);
        //returns new patterns array
        return updatedPatterns;
    });
    setTooSlow(false);
    setScreen(6);
  };

  //stops timer when keydown for Q or P
  useEffect(() => {
      const handleKeyDown = (event) => {
          const { key } = event;
          //Experiment Block
          if(!tooSlow) {
            if ((screen === 9) && (currentPatternIndex >= 8) && (key === 'Q' || key === 'P' || key === 'q' || key === 'p')) {
                const endTime = Date.now();
                const duration = endTime - startTime;
                console.log(startTime);
                console.log(endTime);
                console.log("Response duration:", duration);
                saveResponse(key.toUpperCase(), duration);
                setCurrentPatternIndex(prevIndex => (prevIndex + 1));
                 //if every 50 trials, set takebreak to true
                 //change to 58
                 if(currentPatternIndex % 58 == 0) {
                  setTakeBreak(true);
                }
                setInputValue(''); // Clear input field for the next pattern
            }
            //Practice Block
            else if((screen === 9) && (key.toUpperCase() == correctAnswers[currentPatternIndex])) {
              setCurrentPatternIndex(prevIndex => (prevIndex + 1));
              setInputValue(''); 
              setScreen(6);
            }
        }
      };

      document.addEventListener('keydown', handleKeyDown);
      return () => {
          document.removeEventListener('keydown', handleKeyDown);
      };
  }, [screen, stopwatch, tooSlow]);
  
  // //stores startTime when hit patterns
  // useEffect(() => {
  //     if (screen === 9 && currentPatternIndex == patterns.length/2 - 1) {
  //         setStartTime(Date.now());
  //         console.log(startTime);
  //     }
  // }, [screen]);
  
  
  //creates new response object with screen number, response, and time
  const saveResponse = (response, duration) => {
      const existingResponses = JSON.parse(localStorage.getItem('responses')) || [];
      
      //set trial number
      let trialNumber = currentPatternIndex;
      //when currentPatternIndex is greater than total number of trials
      //change based on total number of trials!!!
      if(currentPatternIndex >= 16 && skipped.length > 0) {
          trialNumber = skipped.shift();
          console.log("Setting new Trial Number");
      }
      //check accuracy and store for result
      let accuracy = false;
      if (response == correctAnswers[trialNumber]){
          accuracy = true;
      }
      //set congruency
      let congruent = congruency[trialNumber]
     
      const newResponse = {
          trial: currentPatternIndex - 7,
          response: response,
          duration: duration, 
          accuracy: accuracy, 
          congruency: congruent,
          experiment: experiment,
          id: PID
      };
      

  //adds new response object to array of responses
      const updatedResponses = [...existingResponses, newResponse];
        localStorage.setItem('responses', JSON.stringify(updatedResponses));
        setResponses(updatedResponses);
        console.log(newResponse);
        if (screen >= 9) {
            setScreen(6);
        }
  };

  //determines delay for screens 6-8 and initializes empty input for trials
  useEffect(() => {
    const interval = setInterval(() => {
        if (screen === 6) {
            setDelay(1000);
            setScreen(screen => screen + 1);  
        }
        if (screen === 8) {
          setDelay(1000);
          //when hit currentPatternIndex = 58, give 10 sec break
          if(currentPatternIndex > 0 && currentPatternIndex % 2 == 0 && takeBreak == true) {
              console.log("setting screen 12");
              setScreen(12);
              setTimeout(() => {
                setScreen(6); // Return to screen 8 after 10 seconds
                setTakeBreak(false);
              }, 10000);
          }
          else if (currentPatternIndex === patterns.length) {
              setScreen(targetScreen); // Change screen to 11 after last pattern
          } 
          else if (targetScreen === 11) {
              setScreen(9); // Transition to screen 9 after patterns in screen 8
              setStartTime(Date.now());
              console.log(startTime);
          } 
          else if (currentPatternIndex === 8) {
              setScreen(10); // Display screen 10 at halfway point of patterns in screen 8
          }
          else {
            console.log("incrementing to screen 9");
            setScreen(screen => screen + 1); 
          }
        } 
        else if (screen === 7) {
            setDelay(500);
            setScreen(8); // Move to next screen after delay for screen 7
        }
        // Reset input value for screen 9
        if (screen === 9 && inputValue !== '') {
            setInputValue('');
        }
    }, delay);
    return () => clearInterval(interval);
}, [screen, delay]);


  //downloads responses when reach last screen
  useEffect(() => {
      if (screen === 11) {
          console.log("Screen reached 11, downloading responses...");
          downloadResponses();
      }
  }, [screen]);

  //rotates instruction screens 1-5 and experiment screens
  const switchScreen = (nextScreen) => {
      if (nextScreen >= 1 && nextScreen <= 5) {
          setScreen(screen + 1);
      } else if (screen === 9 || screen == 10) {
          setScreen(6);
      } else {
          setScreen(screen + 1);
      }
  };

  //at screen 10, begin experiment
  const handleStartClick = () => {
    console.log("Starting the experiment block...");
    setTargetScreen(11);
    //how is this working
    switchScreen(10);
  };

  //at screen 10, repeat practice round
  const handlePracticeClick = () => {
    // Logic to start the experiment block
    console.log("Resetting practice block...");
    setCurrentPatternIndex(0);
    switchScreen(10);
  };
  
//downloads user responses
  const downloadResponses = () => {
      if (responses.length === 0) {
          console.error("No responses to download.");
          return;
      }
      const jsonData = JSON.stringify(responses);
      const blob = new Blob([jsonData], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'responses.json';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      sendDataToREDCap(jsonData);
      // Clear out local storage
      localStorage.removeItem('responses');
  };

//creates json file and sends to RedCap
  const sendDataToREDCap = (data) => {
      console.log("Sending responses to RedCap");
      //creates URLSearchParams API object to extract parameters
      const urlParams = new URLSearchParams(window.location.search);
      //retrieve PID from URL query string
      const userid = PID || '10';
      console.log(typeof userid)
      //REDCap API endpoint
      const url = 'https://redcap.case.edu/api/';

      // Determine which field to use based on the experiment
      let dataField = 'flanker_data_json';
      if (experiment === 'F1' || experiment === 'A2') {
          dataField = 'flanker_data_json_2';
      }

      //data to be sent to REDCap API
      const body = {
          method: 'POST',
          //API Token
          token: '6543B93BA07C88CFA3FD68E9692B1A87',
          content: 'record',
          format: 'json',
          type: 'flat',
          overwriteBehavior: 'normal',
          forceAutoNumber: 'false',
          data: JSON.stringify([{
              'record_id': userid,
              //change for faces as well
              [dataField]: data,
              //make flanker_data_json_2 for F1 and A2
              'flanker_data_complete': '2'
          }]),
          returnContent: 'count',
          returnFormat: 'json'
      };
      //HTTP POST request to REDCap API
      $.post(url, body)
          .done(function(response) {
              console.log('Data sent to REDCap. Response:', response);
          })
          .fail(function(error) {
              console.error('Failed to send data to REDCap:', error);
          });
  };

  const handleBreakEnd = () => {
    setScreen(6); // Return to the experiment after the break
    setTakeBreak(false); // Reset the break state
  };

  return (
    <div>
      {screen === 1 && <Screen1 online = { online } onButtonClick={() => switchScreen(2)} />}
      {screen === 2 && <Screen2 onButtonClick={() => switchScreen(3)} />}
      {screen === 3 && <Screen3 onButtonClick={() => switchScreen(4)} />}
      {screen === 4 && <Screen4 onButtonClick={() => switchScreen(5)} />}
      {screen === 5 && <Screen5 onButtonClick={() => switchScreen(6)} />}
      {screen === 6 && <Screen6 />}
      {screen === 7 && <Screen7 />}
      {screen === 8 && <Screen8 />}
      {screen === 9 && <Screen9 value={inputValue} onChange={(e) => setInputValue(e.target.value)} currentPattern1={patterns[currentPatternIndex]} tooSlow={tooSlow}/>}
      {screen === 10 && <Screen10 onStartClick={handleStartClick} onPracticeClick={handlePracticeClick} />}
      {screen === 11 && <Screen11 online = {online} PID = {PID} />}
      {screen === 12 && <Screen12 onBreakEnd={handleBreakEnd} />}
    </div>
  );
}

export default FaceExperiment;