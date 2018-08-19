import React, { Fragment } from 'react';
import styled from 'styled-components';
import Icon from './../Icon';
import { Link } from 'react-router-dom';
import { boundedVideoUrlUpdate, boundedPlaylistClipDelete } from './../../redux/boundedActions';

const Body = styled.div`
  width: 100%;
  height: 45px;
  background-color: white;
  padding: 5px;
  display: flex;
  justify-content: center;
  position: relative;
  border-bottom: 1px solid #d4d4d4;
`;

const Section = styled.div`
  flex: 1;
  display: flex;
  justify-content: ${props => props.clipname ? 'center' : 'flex-start'};
  align-items: center;
`;

const ProgressBar = styled.div`
  position: absolute;
  height: 2px;
  bottom: 0%;
  left: 0%;
  background-color: orange;
`;

const Clip = (props) => {
  const { name, time, start, end, fullclip, id } = props;
  return(
    <Body>
      <Section clipname>{ name }</Section>
      <Section>{ !fullclip && start + 's -> ' + end + 's' }</Section>
      <Section>
        <Section>
          <Icon onClick={() => boundedVideoUrlUpdate('/video.mp4#t=' + [start, end])}>
            play_circle_outline
          </Icon>
        </Section>
        { !fullclip && 
          <Fragment>
            <Section>
              <Link to={'/edit/' + id}>
                <Icon>edit</Icon>
              </Link>
            </Section>
            <Section>
              <Icon onClick={() => boundedPlaylistClipDelete(id)}>
                delete_outline
              </Icon>
            </Section>
          </Fragment>
        }
      </Section>
      <ProgressBar style={{ width: time + '%' }}/>
    </Body>
  )
}

export default Clip;