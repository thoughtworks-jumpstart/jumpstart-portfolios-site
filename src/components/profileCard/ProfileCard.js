import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Card } from "reactstrap";
import ProfileDescription from "../profileDescription/ProfileDescription";
import image from "../../images/man.svg";
import ProfileIcon from "../profileIcon/ProfileIcon";

import "./ProfileCard.css";
import "../profileIcon/ProfileIcon.css";

const ProfileCard = props => {
  return (
    <div>
      <Card className="profile-card">
        <Container>
          <Row>
            <Col className="left-panel" xs="3">
              <ProfileIcon image={image} />
            </Col>
            <Col className="main-panel" xs="9">
              <ProfileDescription profile={props.profile} />
            </Col>
          </Row>
        </Container>
      </Card>
    </div>
  );
};

export default ProfileCard;
