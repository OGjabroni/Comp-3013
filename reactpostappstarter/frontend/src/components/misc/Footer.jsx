import React from 'react';
import { Container, Group, Anchor } from '@mantine/core';
import Camera from './Navimage';
import classes from './FooterSimple.module.css';

const links = [
  { link: '#', label: 'Contact' },
  { link: '#', label: 'Privacy' },
  { link: '#', label: 'Blog' },
  { link: '#', label: 'Careers' },
];



export default function Footer() {
    

  return (
    <div  className={classes.footer} >
      <Container className={classes.inner}>
        <Camera />
        <h3>the real bigfooter</h3>
      </Container>
    </div>
  );
}