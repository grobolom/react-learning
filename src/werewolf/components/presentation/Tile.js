import React, { Component } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 300px;
  height: 150px;
  overflow: none;
  display: inline-block;
  text-align: center;
`;

const TileImage = styled.img`
  display: block;
  width: 280px;
  height: 100px;
  margin: 0 auto;
`;

export default ({ image, text, onClick }) => (
  <Wrapper className="tile">
    <TileImage src={image} onClick={onClick} />
    <p>{text}</p>
  </Wrapper>
);
