import React from "react";
import styled from "styled-components";
import moment from "moment";
import PropTypes from "prop-types";

const Container = styled.div`
  border-bottom: 1px solid #eee;
  margin-bottom: 8px;
  padding-bottom: 6px;
`;

const MoreInfoContainer = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  font-size: 0.75em;
  max-width: 100%;
`;

const MoreInfoItem = styled.li`
  display: block;
  border-left: 1px solid #e2e2e2;
  padding: 0 8px;
  cursor: default;
  color: #6f6f6f;

  &:first-child {
    padding-left: 0;
  }
  &:first-child {
    border: none;
  }
`;

const MoreInfoUrl = MoreInfoItem.extend`
  max-width: 500px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (max-width: 425px) {
    display: none;
  }
`;

const Title = styled.a`
  color: #484848;
  text-decoration: none;
`;

const TableItem = props => {
  const { title, points, author, created_at, url } = props;
  return (
    <Container>
      <Title href={url} rel="noopener noreferrer" target="_blank">
        {title}
      </Title>
      <MoreInfoContainer>
        <MoreInfoItem> {points} points</MoreInfoItem>
        <MoreInfoItem> {author} </MoreInfoItem>
        <MoreInfoItem> {moment(created_at).fromNow()} </MoreInfoItem>
        <MoreInfoUrl>
          <a href={url} rel="noopener noreferrer" target="_blank">
            ({url})
          </a>
        </MoreInfoUrl>
      </MoreInfoContainer>
    </Container>
  );
};

TableItem.propTypes = {
  title: PropTypes.string.isRequired,
  points: PropTypes.number.isRequired,
  author: PropTypes.string.isRequired,
  created_at: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default TableItem;
