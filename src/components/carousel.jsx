import * as React from "react";
import {Carousel} from "react-bootstrap";

function ProjectCarousel() {
    return <div className="carouselDiv">
        <Carousel variant="dark" className="slidingCarousel">
            <Carousel.Item className="carouselItem">
                <h1 className="carouselContent">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h1>
            </Carousel.Item>
            <Carousel.Item className="carouselItem">
                <h1 className="carouselContent">Praesent semper feugiat nibh sed. Dui vivamus arcu felis bibendum. Neque laoreet suspendisse interdum consectetur libero id. Tellus in hac habitasse platea dictumst vestibulum rhoncus est. Cursus vitae congue mauris rhoncus. Dui vivamus arcu felis bibendum ut tristique et egestas. Sapien nec sagittis aliquam malesuada. Donec ac odio tempor orci dapibus ultrices in iaculis. Enim praesent elementum facilisis leo. Amet nisl suscipit adipiscing bibendum est ultricies integer quis auctor. Consectetur a erat nam at lectus urna duis. In fermentum posuere urna nec tincidunt praesent.</h1>
            </Carousel.Item>
            <Carousel.Item className="carouselItem">
                <h1 className="carouselContent">Leo duis ut diam quam. Enim nunc faucibus a pellentesque sit amet porttitor eget dolor. Adipiscing enim eu turpis egestas pretium aenean. Pulvinar mattis nunc sed blandit libero volutpat. Orci sagittis eu volutpat odio facilisis. Quam vulputate dignissim suspendisse in est. Laoreet non curabitur gravida arcu. Nec ultrices dui sapien eget. Gravida quis blandit turpis cursus in hac habitasse platea dictumst. Orci ac auctor augue mauris augue neque gravida.</h1>
            </Carousel.Item>
        </Carousel>
    </div>
}

export default ProjectCarousel;