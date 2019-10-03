import React from 'react';
import { Card, Button } from 'react-bootstrap';
export default class CardComponent extends React.Component {
render() {
return (
<div>
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
                  Ut sit amet magna lobortis, volutpat erat eget, finibus mi. Vestibulum et molestie odio, a dapibus eros. Mauris vitae felis ex. Maecenas sit amet ex nunc.
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
                  Etiam varius nibh id blandit molestie. Nulla eu tincidunt nulla libero nunc consequat interdum aecenas sit amet ex nunc aliquam faucibus purus sit amet.
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
               Accumsan lacus vel facilisis volutpat est velit. Et ligula ullamcorper malesuada proin libero nunc consequat interdum. Felis eget nunc lobortis mattis.
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
               <Card.Title>Sit amet risus nullam eget felis eget risut</Card.Title>
               <Card.Text>
               Velit sed ullamcorper morbi tincidunt ornare. In nisl nisi scelerisque eu ultrices vitae auctor. Scelerisque mauris pellentesque pulvinar habitant morbi tristique.
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