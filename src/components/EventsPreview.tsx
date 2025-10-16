import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
// Imported IndianRupee, User, Phone, etc.
import { Brain, Calendar, Clock, Code, Cpu, Gamepad2, IndianRupee, Lightbulb, Phone, Smartphone, User, Users, X } from 'lucide-react';
import React, { useState } from 'react';
import Badminton from './assets/Posters/Badminton.jpeg';
import BasketBall from './assets/Posters/BasketBall.jpeg';
import LANGaming from './assets/Posters/BGMI.jpeg';
import Chess from './assets/Posters/Chess.jpeg';
import CodeRace from './assets/Posters/Code Race.jpeg';
import Dance from './assets/Posters/Dance.jpeg';
import DataViz from './assets/Posters/DataViz.jpeg';
import Debate from './assets/Posters/Debate.jpeg';
import GullyCricket from './assets/Posters/GullyCricket.jpeg';
import Hackathon from './assets/Posters/Hackathon.jpeg';
import OMJ from './assets/Posters/OMJ.jpeg';
import Poster from './assets/Posters/Poster.png';
import ProjectExhibition from './assets/Posters/ProjectExhibition.png';
import Quiz from './assets/Posters/Quiz.jpeg';
import Robo from './assets/Posters/Robo.png';
import Singing from './assets/Posters/Singing.jpeg';
import TreasureHunt from './assets/Posters/Treasure Hunt.jpeg';
import TableTennis from './assets/Posters/TT.jpeg';
import UI from './assets/Posters/UI.jpeg';
import VolleyBall from './assets/Posters/VolleyBall.jpeg';
import FF from './assets/Posters/FF.jpeg';
import FunFair from './assets/Posters/FunFair.jpeg';




// ----------------------------------------------------------------------
// 1. INTERFACE AND DATA DEFINITION - UNIFIED STRUCTURE
// ----------------------------------------------------------------------

interface Coordinator {
  name: string;
  phone: string;
}

interface Event {
  id: number;
  title: string;
  category: string;
  description: string;
  icon: React.ElementType;
  date: string;
  time: string;
  participants: string;
  // prize: string; // This field is commented out in your interface and removed from event data
  image: string;
  registrationFee: string;
  
  // 🔥 UPDATED to use array for multiple Faculty Coordinators
  facultyCoordinator: Coordinator[]; 
  // 🔥 UPDATED to use array for multiple Student Coordinators
  studentCoordinator: Coordinator[]; 
  
  registrationLink: string;
  // NOTE: Difficulty and Prize were commented out in the modal and removed from the Event interface.
}

// NOTE: All events now use the array structure for coordinators to match event ID 1.
const events: Event[] = [
  { 
    id: 1, 
    title: 'One Minute Jam (Extompore)', 
    category: 'Techno Parv', 
    description: 'Showcase your spontaneity and fluency by speaking on a surprise topic for one minute.', 
    icon: Code, 
    date: 'October 30, 2025', 
    time: '9:00 AM', 
    participants: '50+', 
    image: OMJ, 
    registrationFee: '₹100',
    facultyCoordinator: [
      { name: 'Dr. Ati Jain', phone: '9826373722' },
      { name: 'Mr. Deepak Bairagi', phone: '6266185538' }
    ],
    studentCoordinator: [
      { name: 'Ayush Singh ', phone: '9589981849' },
    ],
    registrationLink: 'https://sageuniversity.in/sage_events/anveshan/' 
  },
  { 
    id: 2, 
    title: 'Poster Competition', 
    category: 'Techno Parv', 
    description: 'Express creativity and ideas through visually compelling and informative posters.', 
    icon: Brain, 
    date: 'October 30, 2025', 
    time: '10:00 AM', 
    participants: '200+', 
    image: Poster,
    registrationFee: '₹100',
    facultyCoordinator: [{ name: 'Dr. Stayendra Sharma', phone: '9826085743' },{ name: 'Prof. Nayan Joshi', phone: '88275 63739' }
    ],
    studentCoordinator: [{ name: 'Ravindra Vishwakarma ', phone: '9617681080' }],
    registrationLink: 'https://sageuniversity.in/sage_events/anveshan/' 
  },
  { 
    id: 3, 
    title: 'Hackathon', 
    category: 'Techno Parv', 
    description: 'Collaborate, code, and create innovative solutions to real-world problems within a time limit.', 
    icon: Cpu, 
    date: 'October 30, 2025', 
    time: '2:00 PM', 
    participants: '100+', 
    image: Hackathon,
    registrationFee: '₹300 / Team',
    facultyCoordinator: [{ name: ' Dr. Piyush Moghe', phone: '94245 11743' }],
    studentCoordinator: [{ name: 'Khushi Dewangan', phone: '6232100572' }],
    registrationLink: 'https://sageuniversity.in/sage_events/anveshan/' 
  },
  { id: 4, title: 'Data Viz Challenge', category: 'Techno Parv', description: 'Transform raw data into stunning and insightful visual stories.', icon: Gamepad2, date: 'March 15-16', time: '11:00 AM', participants: '50+', image: DataViz, registrationFee: '₹100', facultyCoordinator: [{ name: 'Prof. Rakesh Pathak', phone: '98237 95852' }], studentCoordinator: [{ name: 'Priyanshu Verma', phone: '7805013027' }], registrationLink: 'https://sageuniversity.in/sage_events/anveshan/' },
  { id: 5, title: 'UI/UX Champions', category: 'Techno Parv', description: 'Design intuitive and visually appealing user interfaces with great user experiences.', icon: Lightbulb, date: 'October 30, 2025', time: '3:00 PM', participants: '100+', image: UI, registrationFee: '₹100', facultyCoordinator: [{ name: 'Prof. Shivani Pagare', phone: '62664 85444' }], studentCoordinator: [{ name: 'Utkarsh Srivastava ', phone: '7652004780' }], registrationLink: 'https://sageuniversity.in/sage_events/anveshan/' },
  { id: 6, title: 'Robo Racce', category: 'Techno Parv', description: 'Build and race your robot through an obstacle-filled track to test speed and precision.', icon: Lightbulb, date: 'October 31, 2025', time: '3:00 PM', participants: '100+', image: Robo, registrationFee: '₹300 / Team', facultyCoordinator: [{ name: 'Prof. Lokendra Vishwakarma', phone: '99935 50257' }], studentCoordinator: [{ name: 'Balram Meena', phone: '78286 73051' }], registrationLink: 'https://sageuniversity.in/sage_events/anveshan/' },
  { id: 7, title: 'Quizee Buizee', category: 'Techno Parv', description: 'Test your technical knowledge, logic, and speed in a battle of brains.', icon: Smartphone, date: 'October 31, 2025', time: '9:00 AM', participants: '250+', image: Quiz, registrationFee: '₹100', facultyCoordinator: [{ name: 'Prof. Kavita Makwana', phone: '83194 57991' }], studentCoordinator: [{ name: 'Raushan Raj', phone: '8804001436' }], registrationLink: '#' },
  { id: 8, title: 'Project Exhibition', category: 'Techno Parv', description: 'Present your innovative projects and showcase your technical creativity.', icon: Lightbulb, date: 'November 1, 2025', time: '3:00 PM', participants: '100+', image: ProjectExhibition, registrationFee: '₹100', facultyCoordinator: [{ name: 'Prof. Jitendra Sharma', phone: '88219 75488' }], studentCoordinator: [{ name: 'Aditya Choudhary', phone: '7987564175' }], registrationLink: 'https://sageuniversity.in/sage_events/anveshan/' },
  { id: 9, title: 'Code Race', category: 'Techno Parv', description: 'Compete to solve coding problems faster and smarter than your peers.', icon: Lightbulb, date: 'November 1, 2025', time: '3:00 PM', participants: '100+', image: CodeRace, registrationFee: '₹100', facultyCoordinator: [{ name: 'Prof. vaishali Bajpaye', phone: '95841 89932' }], studentCoordinator: [{ name: 'Yashita kushwah ', phone: '9993911030' }], registrationLink: 'https://sageuniversity.in/sage_events/anveshan/' },
  { id: 10, title: 'Tech Debate', category: 'Techno Parv', description: 'Argue your stance on trending tech topics with logic, clarity, and confidence.', icon: Lightbulb, date: 'November 1, 2025', time: '3:00 PM', participants: '100+', image: Debate, registrationFee: '₹100', facultyCoordinator: [{ name: 'Prof. Jitendra Saxena', phone: '90733 22300' }], studentCoordinator: [{ name: 'Arslan Hussain', phone: '6206825799' }], registrationLink: 'https://sageuniversity.in/sage_events/anveshan/' },
  { id: 11, title: 'BGMI LAN Gaming', category: 'Techno Parv', description: 'Compete in adrenaline-pumping multiplayer games for the ultimate gaming glory.', icon: Code, date: 'October 30, 2025', time: '9:00 AM', participants: '500+', image: LANGaming, registrationFee: '₹1000', facultyCoordinator: [{ name: 'Prof. Dilip Solanki', phone: '98267 18678' }], studentCoordinator: [{ name: 'Om Shukla', phone: '8989468730' },{ name: 'Aditya Verma', phone: '78188 39571' }], registrationLink: 'https://sageuniversity.in/sage_events/anveshan/' },
    { id: 12, title: 'Free Fire LAN Gaming', category: 'Techno Parv', description: 'Compete in adrenaline-pumping multiplayer games for the ultimate gaming glory.', icon: Code, date: 'October 30, 2025', time: '9:00 AM', participants: '500+', image: FF, registrationFee: '₹500', facultyCoordinator: [{ name: 'Prof. Dilip Solanki', phone: '98267 18678' }], studentCoordinator: [{ name: 'Aditya Yadav', phone: '9244639933' },{ name: 'Prince Goutam', phone: '700488806' }], registrationLink: 'https://sageuniversity.in/sage_events/anveshan/' },
  { id: 13, title: 'BATTLE OF BANDS', category: 'Cultural Carnival', description: 'Rock the stage as bands clash in an electrifying showdown of rhythm and energy.', icon: Cpu, date: 'November 1, 2025', time: '1:30 - 4:30 PM', participants: '150+', image: 'standup-comedy-poster.jpg', registrationFee: '₹2000', facultyCoordinator: [{ name: 'Prof. Nayan Joshi', phone: '8827563739' },{ name: 'Prof. Siddharth Nath Goutam', phone: '8989525943' }], studentCoordinator: [{ name: 'Vansh OJha', phone: '99939256' },{ name: 'Bishal Joshi', phone: '8623839920' }], registrationLink: 'https://sageuniversity.in/sage_events/anveshan/' },
  { id: 14, title: 'FASHION SHOW', category: 'Cultural Carnival', description: 'Walk the ramp with style and confidence while showcasing creativity and trends.', icon: Gamepad2, date: 'November 1, 2025', time: '11:00 AM', participants: '300+', image: 'stunt-mania-poster.jpg', registrationFee: 'Fashion Show - ₹600 | Apparel Show - ₹1000', facultyCoordinator: [{ name: 'Prof. Aishwarya Patidar', phone: '70008 19969' }], studentCoordinator: [{ name: 'Atharva Barve', phone: '99814 75286' },{ name: 'Hrishikesh Shrivastava', phone: '99879 46163' }], registrationLink: 'https://sageuniversity.in/sage_events/anveshan/' },
  { id: 15, title: 'Treasure Hunt', category: 'Cultural Carnival', description: 'Solve clues, race against time, and uncover the hidden treasure with your team.', icon: Lightbulb, date: '31/10/2025', time: '11:00 AM', participants: '100+', image: TreasureHunt, registrationFee: '₹600', facultyCoordinator: [{ name: 'Prof. Siddharth Nath', phone: '89895 25943' }], studentCoordinator: [{ name: 'Lakshya Kher', phone: '8770214586' },{ name: 'Aryan Dev', phone: '7251901448' }], registrationLink: 'https://sageuniversity.in/sage_events/anveshan/' },
  { id: 16, title: 'REEL MAKING/SHORT Movie Making', category: 'Cultural Carnival', description: 'Capture creativity on camera and tell impactful stories in a few minutes.', icon: Lightbulb, date: '29/10/2025 - 01/11/2025', time: '09:00 AM - 04:30 PM', participants: '100+', image: 'reels-poster.jpg', registrationFee: '₹200', facultyCoordinator: [{ name: 'Prof. Ranu Solanki', phone: '96174 81343' },{ name: 'Sapna Patel', phone: '(99776 02369' }], studentCoordinator: [{ name: 'Harshita Goyal', phone: '94254 56424' }], registrationLink: 'https://sageuniversity.in/sage_events/anveshan/' },
  { id: 17, title: 'Move & Groove', category: 'Cultural Carnival', description: 'Express your rhythm, energy, and emotions through electrifying dance moves.', icon: Smartphone, date: '31/10/2025', time: '01:30 - 03:00 PM', participants: '250+', image: Dance, registrationFee: 'Solo - ₹400 | Group - ₹1000', facultyCoordinator: [{ name: 'Prof. Shaziya Sheikh', phone: '79743 23413' }], studentCoordinator: [{ name: 'Yogeshwari Agrawal ', phone: '80851 84206' },{ name: 'Disha Bais', phone: '96303 34125' }], registrationLink: 'https://sageuniversity.in/sage_events/anveshan/' },
  { id: 18, title: 'The Vocal War', category: 'Cultural Carnival', description: 'Let your voice steal the spotlight and mesmerize the audience with your melody.', icon: Lightbulb, date: '30/10/2025', time: '01:00 - 2:00 PM', participants: '100+', image: Singing, registrationFee: '₹300', facultyCoordinator: [{ name: 'Prof. Varsha Patil', phone: '85528 14965' }], studentCoordinator: [{ name: 'N/A', phone: 'N/A' }], registrationLink: 'https://sageuniversity.in/sage_events/anveshan/' },
  { id: 19, title: 'Cricket', category: 'Sports', description: 'Show your skills on the pitch and lead your team to victory with bat and ball.', icon: Lightbulb, date: '29/10/2025', time: '3:00 PM', participants: '100+', image: 'singing-poster.jpg', registrationFee: '₹1700', facultyCoordinator: [{ name: 'Prof Kunal Batra', phone: 'N/A' }], studentCoordinator: [{ name: 'KISHAN YADAV', phone: '9111064338' },{ name: 'Tushar sen ', phone: '9285519930' }], registrationLink: 'https://sageuniversity.in/sage_events/anveshan/' },
  { id: 20, title: 'Gully Cricket', category: 'Sports', description: 'Relive the street cricket thrill with fun, passion, and quick reflexes.', icon: Lightbulb, date: '29/10/2025', time: '3:00 PM', participants: '100+', image: GullyCricket, registrationFee: '₹600', facultyCoordinator: [{ name: 'Prof Lakhmichand Deshmukh', phone: 'N/A' }], studentCoordinator: [{ name: 'PUNJ PRAKASH', phone: '8235694421' },{ name: 'SUMIT YADAV', phone: '8720024344' }], registrationLink: 'https://sageuniversity.in/sage_events/anveshan/' },
  { id: 22, title: 'Football', category: 'Sports', description: 'Dribble, pass, and score your way to glory in this high-energy team sport.', icon: Lightbulb, date: '29/10/2025', time: '3:00 PM', participants: '100+', image: 'kabbadi-poster.jpg', registrationFee: '₹800', facultyCoordinator: [{ name: 'Prof. Lokendra Vishvakarma', phone: 'N/A' }], studentCoordinator: [{ name: 'PRATHAM VERMA', phone: '7089512357' },{ name: 'MD ASIF', phone: '6201011783' }], registrationLink: 'https://sageuniversity.in/sage_events/anveshan/' },
  { id: 23, title: 'Badminton (Single)', category: 'Sports', description: 'Test your agility and precision in an intense one-on-one shuttle battle.', icon: Lightbulb, date: '29/10/2025', time: '3:00 PM', participants: '100+', image: Badminton, registrationFee: 'Under 18 - ₹200 | Above 18 - ₹250', facultyCoordinator: [{ name: 'Dr. Deepak K Yadav', phone: 'N/A' }], studentCoordinator: [{ name: 'KHUSHAL KANATHEY', phone: '9399199027' },{ name: 'YATHARTH PATEL', phone: '9238803405' }], registrationLink: 'https://sageuniversity.in/sage_events/anveshan/' },
  { id: 24, title: 'Badminton (Double)', category: 'Sports', description: 'Team up and coordinate for fast-paced rallies and smashing victories.', icon: Lightbulb, date: '29/10/2025', time: '3:00 PM', participants: '100+', image: Badminton, registrationFee: 'Under 18 - ₹350 | Above 18 - ₹400', facultyCoordinator: [{ name: 'Prof Jeetesh K Jain', phone: 'N/A' }], studentCoordinator: [{ name: 'MAYANK DEWANGAN', phone: '9827950327' },{ name: 'MAYANK DEWANGAN', phone: '9827950327' }], registrationLink: 'https://sageuniversity.in/sage_events/anveshan/' },
  { id: 25, title: 'Basket Ball', category: 'Sports', description: 'Dunk, shoot, and defend in a thrilling match of teamwork and stamina.', icon: Lightbulb, date: '29/10/2025', time: '3:00 PM', participants: '100+', image: BasketBall, registrationFee: '₹1100', facultyCoordinator: [{ name: 'Dr. Deepak K Yadav', phone: 'N/A' }], studentCoordinator: [{ name: 'MALAY PATEL', phone: '7489529344' },{ name: 'KRISHNA RAJHANS', phone: '6266302604' }], registrationLink: 'https://sageuniversity.in/sage_events/anveshan/' },
  { id: 26, title: 'Chess', category: 'Sports', description: 'Outsmart your opponent in this ultimate game of strategy and intellect.', icon: Lightbulb, date: '29/10/2025', time: '3:00 PM', participants: '100+', image: Chess, registrationFee: '₹200', facultyCoordinator: [{ name: 'Prof. Lokendra Vishvakarma', phone: 'N/A' }], studentCoordinator: [{ name: 'ROHIT MISHRA', phone: '91791090006' }], registrationLink: 'https://sageuniversity.in/sage_events/anveshan/' },
  { id: 27, title: 'Volley Ball', category: 'Sports', description: 'Set, spike, and serve your way through exciting rallies on the court.', icon: Lightbulb, date: '29/10/2025', time: '3:00 PM', participants: '100+', image: VolleyBall, registrationFee: '₹1000', facultyCoordinator: [{ name: 'Prof Kunal Batra', phone: 'N/A' }], studentCoordinator: [{ name: 'VEDANT PATEL', phone: '9589396704' },{ name: 'VISHWAJEET RATHORE', phone: '7415674055' }], registrationLink: 'https://sageuniversity.in/sage_events/anveshan/' },
  { id: 30, title: 'Carrom (Single)', category: 'Sports', description: 'Strike with precision and pocket your way to victory solo.', icon: Lightbulb, date: '29/10/2025', time: '3:00 PM', participants: '100+', image: 'table-tennis-poster.jpg', registrationFee: '₹100', facultyCoordinator: [{ name: 'Prof. Lokendra Vishvakarma', phone: 'N/A' }], studentCoordinator: [{ name: 'ADITYA BELE', phone: 'N/A' }], registrationLink: 'https://sageuniversity.in/sage_events/anveshan/' },
  { id: 31, title: 'Carrom (Double)', category: 'Sports', description: 'Partner up to showcase teamwork and skill in this classic board challenge.', icon: Lightbulb, date: '29/10/2025', time: '3:00 PM', participants: '100+', image: 'table-tennis-poster.jpg', registrationFee: '₹200', facultyCoordinator: [{ name: 'Prof Jeetesh K Jain', phone: 'N/A' }], studentCoordinator: [{ name: 'AKASH DWIVEDI', phone: '9174287753' }], registrationLink: 'https://sageuniversity.in/sage_events/anveshan/' },
  { id: 33, title: 'Kabaddi', category: 'Sports', description: 'Combine strength, strategy, and agility to tag and tackle your way to triumph.', icon: Lightbulb, date: '29/10/2025', time: '3:00 PM', participants: '100+', image: 'table-tennis-poster.jpg', registrationFee: '₹1000', facultyCoordinator: [{ name: 'Dr. Deepak K Yadav', phone: 'N/A' }], studentCoordinator: [{ name: 'RAJVEER RAJPUT', phone: '9753354283' }], registrationLink: 'https://sageuniversity.in/sage_events/anveshan/' },
  { id: 34, title: 'Table Tennis', category: 'Sports', description: 'Smash and spin your way through fast-paced rallies for the win.', icon: Lightbulb, date: '29/10/2025', time: '3:00 PM', participants: '100+', image: TableTennis, registrationFee: '₹150', facultyCoordinator: [{ name: ' Prof. Vinod Azad', phone: 'N/A' }], studentCoordinator: [{ name: 'SANYOG', phone: '8839574422' },{ name: 'BHAVESH', phone: '6263142567' }], registrationLink: 'https://sageuniversity.in/sage_events/anveshan/' },
  { id: 35, title: 'Running Race (100m)', category: 'Sports', description: 'Sprint with all your might to claim the title of fastest on track.', icon: Lightbulb, date: '29/10/2025', time: '3:00 PM', participants: '100+', image: 'table-tennis-poster.jpg', registrationFee: '100m - ₹200 | 200m - ₹300 |400m - ₹400 |4*100m Relay - ₹600 ', facultyCoordinator: [{ name: ' Prof. Vinod Azad', phone: 'N/A' }], studentCoordinator: [{ name: 'VISHWAJEET RATHORE', phone: '7415674055' }], registrationLink: 'https://sageuniversity.in/sage_events/anveshan/' },
  { id: 36, title: 'Power Lifting', category: 'Sports', description: 'Showcase your strength and determination in this ultimate test of power.', icon: Lightbulb, date: '29/10/2025', time: '3:00 PM', participants: '100+', image: 'table-tennis-poster.jpg', registrationFee: '₹200/Event', facultyCoordinator: [{ name: 'Prof Kunal Batra', phone: 'N/A' }], studentCoordinator: [{ name: 'MALAY PATEL', phone: '7489529344' }], registrationLink: 'https://sageuniversity.in/sage_events/anveshan/' },
    { id: 37, title: 'Food Stall', category: 'Fun Fair', description: 'Showoff your cooking skills', icon: Lightbulb, date: '29/10/2025 - 01/11/2025', time: '3:00 PM', participants: '100+', image: FunFair, registrationFee: 'Sagian - ₹2500 | Non-Sagian - ₹5000', facultyCoordinator: [{ name: ' Prof. Vijay Malviya', phone: '9098396770' }], studentCoordinator: [{ name: 'Sanjay Rai', phone: '8085236467' }], registrationLink: 'https://sageuniversity.in/sage_events/anveshan/' },
    { id: 38, title: 'Cultural Stalls', category: 'Fun Fair', description: 'Showoff your cooking skills', icon: Lightbulb, date: '29/10/2025 - 01/11/2025', time: '3:00 PM', participants: '100+', image: FunFair, registrationFee: 'Sagian - ₹2500 | Non-Sagian - ₹5000', facultyCoordinator: [{ name: ' Prof. Priya Sen', phone: '8319012848' }], studentCoordinator: [{ name: 'Astha Harode', phone: '7000273376' }], registrationLink: 'https://sageuniversity.in/sage_events/anveshan/' },
    { id: 39, title: 'Game Stall', category: 'Fun Fair', description: 'Showoff your cooking skills', icon: Lightbulb, date: '29/10/2025 - 01/11/2025', time: '3:00 PM', participants: '100+', image: FunFair, registrationFee: 'Sagian - ₹2500 | Non-Sagian - ₹5000', facultyCoordinator: [{ name: ' Prof. Vijay Malviya', phone: '9098396770' }], studentCoordinator: [{ name: 'Anuj Agrawal', phone: '9301534648' }], registrationLink: 'https://sageuniversity.in/sage_events/anveshan/' },
    { id: 38, title: 'Water Bottle Stalls', category: 'Fun Fair', description: 'Showoff your cooking skills', icon: Lightbulb, date: '29/10/2025 - 01/11/2025', time: '3:00 PM', participants: '100+', image: FunFair, registrationFee: 'Sagian - ₹5000 | Non-Sagian - ₹10000', facultyCoordinator: [{ name: ' Prof. Priya Sen', phone: '8319012848' }], studentCoordinator: [{ name: 'Astha Jain', phone: '881960259' }], registrationLink: 'https://sageuniversity.in/sage_events/anveshan/' },
];


// ----------------------------------------------------------------------
// 2. HELPER FUNCTIONS AND COMPONENTS
// ----------------------------------------------------------------------

const getDifficultyColor = (difficulty: string) => {
  // NOTE: Difficulty field is not in the current Event interface, keeping function here just in case.
  switch (difficulty) {
    case 'Beginner': return 'text-green-400 bg-green-400/10';
    case 'Intermediate': return 'text-yellow-400 bg-yellow-400/10';
    case 'Advanced': return 'text-red-400 bg-red-400/10';
    default: return 'text-primary bg-primary/10';
  }
};

const resolveImageSrc = (image: string) => {
  if (!image) return '';
  if (image.startsWith('/') || image.startsWith('http') || image.includes('/')) {
    return image;
  }
  return `/assets/posters/${image}`;
};

// 🔥 New sub-component for rendering a single coordinator
const CoordinatorDetail: React.FC<{ role: string, coordinator: Coordinator }> = ({ role, coordinator }) => (
    <div className="flex items-start gap-3">
        <User className="w-5 h-5 text-primary/70 flex-shrink-0" />
        <div className="text-sm">
            <span className="font-semibold block">{role}: {coordinator.name}</span> 
            <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Phone className="w-3 h-3"/>
                <a href={`tel:${coordinator.phone}`} className="hover:text-primary transition-colors">{coordinator.phone}</a>
            </div>
        </div>
    </div>
);


/**
 * Renders the pop-up modal for event details and poster. - UPDATED
 */
const EventModal: React.FC<{ event: Event | null; onClose: () => void }> = ({ event, onClose }) => {
  if (!event) return null;

  const imagePath = resolveImageSrc(event.image);

  // Handler for the Register Now button: redirects to the registration link
  const handleRegisterClick = () => {
    if (event.registrationLink && event.registrationLink !== '#') {
      window.open(event.registrationLink, '_blank');
    } else {
      alert("Registration link is not yet available for this event.");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" onClick={onClose}>
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="relative bg-glass/80 backdrop-blur-xl border border-glass-border rounded-xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()} 
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-red-500/80 text-white hover:bg-red-600 transition-colors shadow-lg"
          aria-label="Close event details"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="md:flex">
          {/* Poster Image Area - Left Side */}
          <div className="md:w-1/2 p-6 flex-shrink-0">
            <h2 className="md:hidden text-3xl font-extrabold mb-4 bg-gradient-tech bg-clip-text text-transparent">{event.title}</h2>
            <img 
              src={imagePath} 
              alt={`Poster for ${event.title}`} 
              className="w-full h-auto max-h-[75vh] object-contain rounded-lg shadow-2xl border border-primary/20" 
            />
          </div>

          {/* Details Area - Right Side */}
          <div className="md:w-1/2 p-8">
            <h2 className="hidden md:block text-3xl font-extrabold mb-4 bg-gradient-tech bg-clip-text text-transparent">{event.title}</h2>
            
            <p className="text-muted-foreground mb-6 text-base leading-relaxed border-b border-glass-border/50 pb-4">{event.description}</p>
            
            <div className="space-y-4 text-foreground">
              {/* Core Details (Date, Time, Participants, Fee) */}
              <div className="grid grid-cols-2 gap-y-4 gap-x-6">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="font-semibold">Date:</span> <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="font-semibold">Time:</span> <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="font-semibold">Participants:</span> <span>{event.participants}</span>
                </div>
                {/* Registration Fee */}
                <div className="flex items-center gap-3">
                  <IndianRupee className="w-5 h-5 text-green-400" />
                  <span className="font-semibold">Fee:</span> <span className="font-bold text-green-400">{event.registrationFee}</span>
                </div>
              </div>
              
              {/* Coordinator Details - UPDATED SECTION TO LOOP THROUGH ARRAYS */}
              <div className="border-t border-glass-border/50 pt-4 space-y-4">
                <h3 className="text-lg font-bold text-primary">Coordinators</h3>
                
                {/* Faculty Coordinators (Loops through all in the array) */}
                <div className='space-y-2'>
                    <h4 className="font-semibold text-sm text-primary/80">Faculty:</h4>
                    {event.facultyCoordinator.map((coordinator, index) => (
                        <CoordinatorDetail 
                            key={`fc-${index}`} 
                            role={`F.C. ${index + 1}`} 
                            coordinator={coordinator} 
                        />
                    ))}
                </div>

                {/* Student Coordinators (Loops through all in the array) */}
                <div className='space-y-2 pt-3'>
                    <h4 className="font-semibold text-sm text-primary/80">Students:</h4>
                    {event.studentCoordinator.map((coordinator, index) => (
                        <CoordinatorDetail 
                            key={`sc-${index}`} 
                            role={`S.C. ${index + 1}`} 
                            coordinator={coordinator} 
                        />
                    ))}
                </div>
              </div>
            </div>

            {/* Register Now Button with redirect logic */}
            <Button 
              className="w-full mt-8 bg-gradient-primary hover:shadow-tech transition-all duration-300"
              onClick={handleRegisterClick}
              disabled={event.registrationLink === '#'}
            >
              Register Now
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};


// ----------------------------------------------------------------------
// 3. MAIN EventsPreview COMPONENT
// ----------------------------------------------------------------------

const EventsPreview: React.FC = () => {
  const [showAllEvents, setShowAllEvents] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All Events'); 
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const eventCategories = [
    { name: 'All Events', active: selectedCategory === 'All Events' },
    { name: 'Techno Parv', active: selectedCategory === 'Techno Parv' },
    { name: 'Fun Fair', active: selectedCategory === 'Fun Fair' }, 
    { name: 'Cultural Carnival', active: selectedCategory === 'Cultural Carnival' },
    { name: 'Sports', active: selectedCategory === 'Sports' }
  ];

  // Logic for filtering and displaying events
  const filteredEvents = events.filter(event => 
    selectedCategory === 'All Events' ? true : event.category === selectedCategory
  );
  const displayedEvents = showAllEvents ? filteredEvents : filteredEvents.slice(0, 6);

  // Handlers
  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(categoryName);
    setShowAllEvents(false);
  };

  const handleViewAllEvents = () => {
    setShowAllEvents(true);
  };
  
  const openModal = (event: Event) => setSelectedEvent(event);
  const closeModal = () => setSelectedEvent(null);

  return (
    <section id="events" className="py-20 tech-bg">
      <div className="container mx-auto px-6">
        
        {/* Section Header and Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="bg-gradient-tech bg-clip-text text-transparent">Events</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8">
            Dive into exciting competitions, workshops, and hackathons designed to challenge your skills and expand your horizons
          </p>

          {/* Category Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {eventCategories.map((category, index) => (
              <motion.button
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleCategoryClick(category.name)}
                className={`px-6 py-3 rounded-full border transition-all duration-300 ${
                  category.active
                    ? 'bg-gradient-primary text-primary-foreground border-primary shadow-tech'
                    : 'bg-glass/30 text-foreground border-glass-border hover:bg-glass/50'
                }`}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Events Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              // Make the entire card open the modal
              onClick={() => openModal(event)}
              className="group relative bg-glass/30 backdrop-blur-sm border border-glass-border rounded-2xl p-6 hover:bg-glass/50 hover:shadow-glass transition-all duration-300 cursor-pointer"
            >
              {/* Event Icon and POSTER THUMBNAIL */}
              <div className="relative mb-6 flex justify-between items-start">
                {/* Icon */}
                <div className="p-4 bg-gradient-primary rounded-xl w-fit group-hover:shadow-tech transition-all duration-300">
                  <event.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                
                {/* Clickable Poster Thumbnail */}
                <button 
                  onClick={(e) => {e.stopPropagation(); openModal(event);}}
                  className="w-24 h-24 overflow-hidden rounded-lg transform hover:scale-105 transition-transform duration-300 border-2 border-primary/50 shadow-md"
                  title="View Event Poster and Details"
                >
                  <img
                    src={resolveImageSrc(event.image)}
                    alt={`${event.title} Poster`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <Lightbulb className="w-6 h-6 text-white" />
                  </div>
                </button>
              </div>

              {/* Event Content */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {event.description}
                  </p>
                </div>

                {/* Event Details */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>{event.date}</span>
                    <Clock className="w-4 h-4 text-primary ml-2" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="w-4 h-4 text-primary" />
                      <span>{event.participants}</span>
                    </div>
                  </div>
                </div>

                {/* Action Button */}
                <Button 
                  className="w-full mt-6 bg-gradient-primary hover:shadow-tech transition-all duration-300 group-hover:scale-105"
                  onClick={(e) => {e.stopPropagation(); openModal(event);}}
                >
                  View Details & Register
                </Button>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>

        {/* View All / Show Less CTA */}
        {!showAllEvents && filteredEvents.length > 6 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Button 
              size="lg" 
              variant="outline" 
              onClick={handleViewAllEvents}
              className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-tech px-8 py-4 text-lg"
            >
              View All Events
            </Button>
          </motion.div>
        )}

        {showAllEvents && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Button 
              size="lg" 
              variant="outline" 
              onClick={() => setShowAllEvents(false)}
              className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-tech px-8 py-4 text-lg"
            >
              Show Less Events
            </Button>
          </motion.div>
        )}
      </div>

      {/* Render the Modal */}
      <EventModal event={selectedEvent} onClose={closeModal} />
    </section>
  );
};

export default EventsPreview;