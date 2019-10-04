import React from 'react';
import { Card } from 'react-bootstrap';

export default class NewsComponent extends React.Component {
render() {
return (
<div>
    <h2>News</h2>
   <div className="row">
      <div className="col-md-3">
         <Card>
            <div className="comp news image text">
               <div className="card-image" style={{ backgroundImage: 'url(/news1.jpg)' }}>
               <Card.Img variant="top" className="d-none" src="/news1.jpg" />
            </div>
            <Card.Body>
               <Card.Title>Lorem ipsum dolor sit amet, consect adipiscing elit</Card.Title>
               <Card.Text>
                  Ut sit amet magna lobortis, volutpat erat eget, finibus mi. Vestibulum et molestie odio, a dapibus eros.
               </Card.Text>
            </Card.Body>
      </div>
      </Card>
   </div>
   <div className="col-md-3">
      <Card>
         <div className="comp news video text">
            <video controls autoplay>
               <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" />
            </video>
            <Card.Body>
               <Card.Title>Pellentesque eget neque dolor sed convallis</Card.Title>
               <Card.Text>
                  Etiam varius nibh id blandit molestie. Nulla eu tincidunt nulla libero nunc consequat interdum aecena.
               </Card.Text>
            </Card.Body>
         </div>
      </Card>
   </div>
   <div className="col-md-3">
      <Card>
         <div className="comp news video text">
            <video controls autoplay>
               <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" />
            </video>
            <Card.Body>
               <Card.Title>Vel elit sceleris mauris pellente pulvinar</Card.Title>
               <Card.Text>
               Accumsan lacus vel facilisis volutpat est velit. Et ligula ullamcorper malesuada proin libero nunc.
               </Card.Text>
            </Card.Body>
         </div>
      </Card>
   </div>
</div>
</div>
)
}
}