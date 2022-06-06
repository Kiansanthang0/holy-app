import Sample from "../assets/video/Sample.mp4";
import { Container } from "react-bootstrap";

const Video = () => {
  return (
    <div>
      <Container fluid>
        <div class="embed-responsive embed-responsive-16by9 VidCon">
          <iframe class="embed-responsive-item  Video" src={Sample}></iframe>
        </div>
      </Container>
    </div>
  );
};

export default Video;
