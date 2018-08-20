import React, { Fragment } from 'react';
import styled from 'styled-components';
import Icon from './../Icon';
import { Flex } from './../Styles';
import percentage from './../../utils/percentage';

const Body = styled.div`
  width: 100%;
  height: auto;
  background: ${props => props.isPlaying ? 'linear-gradient(45deg, #882cb7, #8e357a)' : 'rgba(214, 214, 214, 0.22)'};
  padding: 10px 5px;
  position: relative;
  box-shadow: 0px 0px 9px 0px rgba(0, 0, 0, 0.2);
  margin-bottom: 10px;
  border-radius: 4px;
  transition: all 0.2s;
`;

const Container = Flex.extend`
  width: 100%;
  height: 100%;
`;

const Section = Flex.extend`
  flex: 1;
`;

const Name = Section.extend`
  text-align: center;
  display: inline;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ProgressBar = styled.div`
  position: absolute;
  height: 3px;
  bottom: 0%;
  left: 0%;
  background-color: ${props => props.isPlaying ? 'white' : 'rgba(255, 255, 255, 0.40)'};
  transition: 0.2s all;
`;

const Tags = styled.div`
  padding: 5px 20px 0px 5px;
  margin-top: 5px;
  border-top: 1px dashed rgba(255, 255, 255, 0.70);
  display: flex;
`;

const Tag = styled.span`
  max-width: 100px;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 4px 5px;
  background-color: rgba(255, 255, 255, 0.15);
  border-radius: 4px;
  &:not(:last-child) {
    margin-right: 5px;
  }
`;
const Clip = (props) => {
  const { name, time, start, end, id, tags: tagsData, isPlaying, onPlay, onDelete, onEdit } = props;
  const tags = tagsData
                .split(/,+/)
                .filter(tag => tag !== '')
                .map((tag, i) => <Tag key={tag+i}>{ tag.trim() }</Tag>);
  return(
    <Body isPlaying={isPlaying}>
      <Container>
        <Name>{ name }</Name>
        <Section>
          {
            id !== null && (
              <Fragment>
                { start + 's' }
                <Icon>chevron_right</Icon>
                { end + 's' }
              </Fragment>
            )
          }
        </Section>
        <Section>
          <Section>
            <Icon onClick={onPlay}>
              play_circle_outline
            </Icon>
          </Section>
          { id !== null && 
            <Fragment>
              <Section>
                <Icon onClick={onEdit}>edit</Icon>
              </Section>
              <Section>
                <Icon onClick={onDelete}>
                  delete_outline
                </Icon>
              </Section>
            </Fragment>
          }
        </Section>
      </Container>
      {
        tags.length > 0 && <Tags>{ tags }</Tags>
      }
      <ProgressBar
        style={{ width: percentage(time, +start, +end) + '%' }}
        isPlaying={isPlaying}
      />
    </Body>
  )
}

export default Clip;