import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { FaDumbbell, FaRunning, FaHeartbeat, FaChevronDown, FaChevronUp } from "react-icons/fa";

// Animations
const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
`;

const glow = keyframes`
  0% { box-shadow: 0 0 10px #ffd700, 0 0 20px #ff7300; }
  50% { box-shadow: 0 0 20px #ffd700, 0 0 40px #ff7300; }
  100% { box-shadow: 0 0 10px #ffd700, 0 0 20px #ff7300; }
`;

const Page = styled.div`
  min-height: 100vh;
  width: 100%;
  background: linear-gradient(135deg, #000000, #1a1a1a, #333333);
  overflow-y: auto;
  padding: 50px 20px;
  font-family: 'Poppins', sans-serif;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 50px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 25px;
  box-shadow: 0 30px 40px rgba(0, 0, 0, 0.7);
  color: #ffffff;
  animation: fadeIn 1s ease;
  text-align: center;

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(50px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;

const Title = styled.h1`
  font-size: 56px;
  font-weight: 900;
  margin-bottom: 25px;
  text-transform: uppercase;
  letter-spacing: 3px;
  background: linear-gradient(90deg, #ff7300, #ffd700);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: pulse 2s infinite;
`;

const Subtitle = styled.h2`
  font-size: 36px;
  margin: 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
  font-weight: 700;
  color: #00f2fe;
  text-transform: uppercase;
`;

const Paragraph = styled.p`
  font-size: 22px;
  margin-top: 30px;
  line-height: 1.8;
  color: #e0e0e0;
`;

const Quote = styled.p`
  margin-top: 30px;
  font-style: italic;
  font-size: 28px;
  color: #ff6b6b;
  font-weight: bold;
`;

const PlanSectionTitle = styled.h2`
  margin-top: 70px;
  font-size: 44px;
  font-weight: 900;
  color: #ffd700;
`;

const PlanGrid = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
`;

const PlanCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 30px;
  border-radius: 20px;
  backdrop-filter: blur(8px);
  transition: all 0.4s ease;
  cursor: pointer;
  border: 2px solid transparent;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 340px;
  animation: ${pulse} 5s infinite;

  &:hover {
    transform: translateY(-10px) scale(1.02);
    background: rgba(255, 255, 255, 0.2);
    border-color: #ff7300;
    animation: ${glow} 1.5s infinite;
  }
`;

const DayTitle = styled.h3`
  font-size: 28px;
  margin-bottom: 18px;
  font-weight: 800;
  color: #ffffff;
  text-transform: uppercase;
`;

const Exercises = styled.ul`
  list-style: none;
  padding: 0;
`;

const ExerciseItem = styled.li`
  margin: 12px 0;
  font-size: 20px;
  color: #cccccc;
  position: relative;
  padding-left: 25px;
  font-weight: 600;

  &::before {
    content: "🔥";
    position: absolute;
    left: 0;
    top: 0;
    font-size: 22px;
  }
`;

const ToggleButton = styled.button`
  margin-top: 25px;
  background: linear-gradient(45deg, #ff7300, #ffd700);
  color: #000;
  font-weight: bold;
  border: none;
  padding: 12px 18px;
  border-radius: 15px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 18px;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(45deg, #ffd700, #ff7300);
  }
`;

function Tutorial() {
  const [openDays, setOpenDays] = useState({});

  const toggleDay = (index) => {
    setOpenDays((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  const weekPlan = [
    { day: "Monday - Chest & triceps", exercises: ["Bench Press - 3 sets of 15 reps", "Incline Dumbbell Press - 3x15", "Chest Flys - 3x15", "Cable Crossovers - 3x15", "Decline Bench Press - 3x15","F-curl extension - 3x15","s-arm extension - 3x15", "push down - 3x15","Skull Crushers - 3x15","dips - 3x15"] },
    { day: "Tuesday - Back & Biceps", exercises: ["Lat Pulldown - 3x15","Reverse lat pulldown- 3x15","T-bar - 3x15","single-arm rowing- 3x15", "vertical Rowing - 3x15","Hyperextension- 3x15" ,"Dumbbell curls - 3x15", "Bicep Curls - 3x15", "Hammer Curls - 3x15", "Pull-Ups - 3xFailure","Preacher Curl - 3x15","Reverse- curl - 3x15"] },
    { day: "Wednesday - Shoulder & Core", exercises: ["Overhead Press - 3x8", "Lateral Raises - 3x12", "Front Raises - 3x12", "Shrugs - 4x15","Reverse-peck fly - 3x15","face-pulls- 3x15","upright-down- 3x15", "Planks - 3x60 sec",  "Russian Twists - 3x40", "bench-Crunches - 3x20", ] },
    { day: "Thursday -  Chest & triceps", exercises: ["Bench Press - 3 sets of 15 reps", "Incline Dumbbell Press - 3x15", "Chest Flys - 3x15", "Cable Crossovers - 3x15", "Decline Bench Press - 3x15","F-curl extension - 3x15","s-arm extension - 3x15", "push down - 3x15","Skull Crushers - 3x15","dips - 3x15"] },
    { day: "Friday - Back & Biceps", exercises: ["Lat Pulldown - 3x15","Reverse lat pulldown- 3x15","T-bar - 3x15","single-arm rowing- 3x15", "vertical Rowing - 3x15","Hyperextension- 3x15" ,"Dumbbell curls - 3x15", "Bicep Curls - 3x15", "Hammer Curls - 3x15", "Pull-Ups - 3xFailure","Preacher Curl - 3x15","Reverse- curl - 3x15"] },
    { day: "Saturday - Leg Day & Shoulder", exercises: ["Overhead Press - 3x8", "Lateral Raises - 3x12","face-pulls- 3x15","Squats - 3x15", "Lunges - 3x15", "Leg Press - 3x15", "Calf Raises - 3x20", "Leg-extension-3x15","leg hamstring -3x15"] },
    { day: "Sunday - Active Recovery", exercises: ["Yoga Flow - 30 min", "Stretching Routine - 20 min", "Light Walk - 15 min", "Foam Rolling - 10 min"] },
  ];

  return (
    <Page>
      <Container>
        <Title>Unleash The Beast</Title>
        <Subtitle><FaDumbbell /> Get Stronger Every Day <FaRunning /></Subtitle>
        <Paragraph>Step into the grind. Push harder. Chase the fire within. This is YOUR time!</Paragraph>
        <Quote>"Strength doesn't come from what you can do. It comes from overcoming what you thought you couldn't."</Quote>

        <PlanSectionTitle>🔥 Weekly Gym Domination Plan 🔥</PlanSectionTitle>

        <PlanGrid>
          {weekPlan.map((dayPlan, index) => (
            <PlanCard key={index}>
              <DayTitle>{dayPlan.day}</DayTitle>
              {openDays[index] && (
                <Exercises>
                  {dayPlan.exercises.map((exercise, idx) => (
                    <ExerciseItem key={idx}>{exercise}</ExerciseItem>
                  ))}
                </Exercises>
              )}
              <ToggleButton onClick={() => toggleDay(index)}>
                {openDays[index] ? "Hide" : "View"} {openDays[index] ? <FaChevronUp /> : <FaChevronDown />}
              </ToggleButton>
            </PlanCard>
          ))}
        </PlanGrid>
      </Container>
    </Page>
  );
}

export default Tutorial;
