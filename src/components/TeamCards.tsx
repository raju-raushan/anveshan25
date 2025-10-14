import React from 'react';
import styled from 'styled-components';
import Card from './Coordinator'; 


import raushan from '../components/assets/Person/mee-removebg-preview.png';
import ritu from '../components/assets/Person/Ati.jpg'
import sneha from '../components/assets/Person/sneha mam.png';

const peopleData = [
  // FIX: Remove curly braces around the imported image variables
  { id: 1, name: "Raushan Raj", designation: "Lead Developer", contact: "555-0101", frontImage: raushan, miniPhoto: raushan }, // Assuming raushan for mini photo as well
  { id: 2, name: "Prof. Snehlata Misha", designation: "UI/UX Designer", contact: "555-0102", frontImage: sneha, miniPhoto: sneha }, // FIX: Used 'sneha' directly
  { id: 3, name: "Dr.Ritu Tondon", designation: "Product Manager", contact: "555-0103", frontImage: ritu, miniPhoto: ritu }, // FIX: Used 'ritu' directly (Assuming Ritu's name)
  { id: 4, name: "Emily Smith", designation: "Marketing Specialist", contact: "555-0104", frontImage: "/images/person4_front.jpg", miniPhoto: "/images/person4_mini.jpg" },
  { id: 5, name: "Javier Garcia", designation: "DevOps Engineer", contact: "555-0105", frontImage: "/images/person5_front.jpg", miniPhoto: "/images/person5_mini.jpg" },
  { id: 6, name: "Nina Brown", designation: "Data Analyst", contact: "555-0106", frontImage: "/images/person6_front.jpg", miniPhoto: "/images/person6_mini.jpg" },
  { id: 7, name: "Omar Khan", designation: "Sales Director", contact: "555-0107", frontImage: "/images/person7_front.jpg", miniPhoto: "/images/person7_mini.jpg" },
  { id: 8, name: "Lily Rodriguez", designation: "Technical Writer", contact: "555-0108", frontImage: "/images/person8_front.jpg", miniPhoto: "/images/person8_mini.jpg" },
  { id: 9, name: "Ben Carter", designation: "Frontend Engineer", contact: "555-0109", frontImage: "/images/person9_front.jpg", miniPhoto: "/images/person9_mini.jpg" },
  { id: 10, name: "Chloe Wilson", designation: "HR Partner", contact: "555-0110", frontImage: "/images/person10_front.jpg", miniPhoto: "/images/person10_mini.jpg" },
];

const CardListWrapper = styled.div`
  display: flex;
  flex-wrap: wrap; 
  gap: 30px; 
  justify-content: center; 
  padding: 40px 20px; 
  min-height: 100vh;
  background-color: rgb(0, 0, 0); 
`;

const CardList = () => {
  return (
    <CardListWrapper>
      {peopleData.map((person) => (
        <Card key={person.id} coordinator={person} />
      ))}
    </CardListWrapper>
  );
};

export default CardList;