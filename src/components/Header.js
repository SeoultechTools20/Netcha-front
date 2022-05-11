import React from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import "./Header.css";

function Header() {
  const styles = {
    padding: {
      paddingTop: 7,
      paddingBottom: 7,
    },
  };
  const profile = <img className="user-logo" src="img/user.png" alt=""/>;
  return (
    <Navbar bg="black" expand="lg" fixed="top" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#">
          <img className="logo" src="img/넷플릭스.png" href="/mainpage" alt=""/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="/mainpage">홈</Nav.Link>
            <Nav.Link href="#action1">추천</Nav.Link>
            <NavDropdown title="장르" id="navbarScrollingDropdown">
              <NavDropdown.Item href="/action">액션</NavDropdown.Item>
              <NavDropdown.Item href="/fantasy">판타지</NavDropdown.Item>
              <NavDropdown.Item href="/animation">애니메이션</NavDropdown.Item>
              <NavDropdown.Item href="/drama">드라마</NavDropdown.Item>
              <NavDropdown.Item href="/horror">공포</NavDropdown.Item>
              <NavDropdown.Item href="/adventure">모험</NavDropdown.Item>
              <NavDropdown.Item href="/comedy">코미디</NavDropdown.Item>
              <NavDropdown.Item href="/history">역사</NavDropdown.Item>
              <NavDropdown.Item href="/western">서부</NavDropdown.Item>
              <NavDropdown.Item href="/thriller">스릴러</NavDropdown.Item>
              <NavDropdown.Item href="/crime">범죄</NavDropdown.Item>
              <NavDropdown.Item href="/documentary">다큐멘터리</NavDropdown.Item>
              <NavDropdown.Item href="/sf">SF</NavDropdown.Item>
              <NavDropdown.Item href="/mystery">미스터리</NavDropdown.Item>
              <NavDropdown.Item href="/music">음악</NavDropdown.Item>
              <NavDropdown.Item href="/romance">로맨스</NavDropdown.Item>
              <NavDropdown.Item href="/family">가족</NavDropdown.Item>
              <NavDropdown.Item href="/war">전쟁</NavDropdown.Item>
              <NavDropdown.Item href="/tv">TV 영화</NavDropdown.Item>


            </NavDropdown>
            <Nav.Link href="#action4">보관함</Nav.Link>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Form style={styles.padding} className="d-flex">
                <FormControl
                  type="search"
                  placeholder="영화 제목, 감독 이름 등"
                  className="me-2"
                  aria-label="Search"
                />
                <Button  className="me-3" variant="outline-success">
                  Search
                </Button>
              </Form>
              <NavDropdown title={profile} id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action2">👤 마이페이지</NavDropdown.Item>
                <NavDropdown.Item href="#action3">⚙  설정</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
