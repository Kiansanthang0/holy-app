import { Container, Row, Col, Button } from "react-bootstrap";
import NewsCard from "./NewsCard";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import TwitterIcon from "../assets/img/TwitterIcon.png";
import IgIcon from "../assets/img/IgIcon.png";
import FbIcon from "../assets/img/FbIcon.png";

const NewsDetail = () => {
  return (
    <>
      <div className="NewsDetail"></div>
      <div>
        <Container fluid>
          <Row className="DetailHead">
            <Col sm>
              <div className="DetailButton">
                <Button variant="link">TRENDING</Button>
              </div>
            </Col>
            <Col>
              <div className="DetailSosmed d-flex">
                <div>Share</div>
                <div className="DetailIcon">
                  <img src={FbIcon}></img>
                  <img src={IgIcon}></img>
                  <img src={TwitterIcon}></img>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm>
              <div className="JudulDetail">Holywings Akan Segera Menghadirkan “Holywings Sport Show Boxing”</div>
              <div className="ParagrafDetail">
                <p>Sedang berlangsung Holywings Sport Show Boxing yang bisa ditonton lewat live streaming NET TV.</p>
                <p>
                  Adapun link live streaming NET TV untuk nonton siaran langsung pertandingan tinju hari ini terdapat di bawah artikel. Partai hiburan bertajuk Celebrity Fight akan mempertemukan Paris Pernandes 'salam dari Binjai' vs KKJ
                  Jekson Karmela dan Vicky Prasetyo vs Aldi Taher. Sedangkan partai utama akan menampilkan duel petinju Indonesia, Tibo Monabesa melawan Jayson Vayson dari Filipina yang akan memperebutkan gelar WBC International Light
                  Flyweight. Indonesia juga menurunkan Defry Palulu yang akan menghadapi petinju asal Thailand, Rekkawee. Dua partai lainnya akan mempertemukan petinju lokal yakni Hero Tito vs James Mokoginta dan Prisal Panjaitan vs Zainul
                  Fatah.
                </p>
                <p>
                  Partai pertandingan Paris Pernandes 'salam dari Binjai' vs KKJ Jekson Karmela jadi yang paling dinantikan. Paris Pernandes beken setelah video viral yang diunggah di media sosial yang memperlihatkan aksi tinjunya ke pohon
                  pisang. Terlebih dengan jargonnya yang terus diingat masyarakat yakni "salam dari Binjai". Paris Pernandes yang diketahui seorang mantan atlet tinju nasional akan unjuk kebolehan dalam ring melawan KKJ Jekson Karmela.
                  Jekson Karmela sendiri adalah peraih medali emas cabang Muaythai Pon Papua 2021.
                </p>
                <p>Pertandingan tinju yang disponsori oleh Holywings ini digelar di Holywings Gatsu Club V, Jakarta, Minggu 27 Februari 2022. </p>
              </div>
            </Col>
          </Row>
        </Container>
        <NewsCard />
        <Footer />
      </div>
    </>
  );
};

export default NewsDetail;
