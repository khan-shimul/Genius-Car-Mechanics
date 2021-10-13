import React from 'react';
import { Container, Row } from 'react-bootstrap';
import mechanic1 from '../../../images/Mechanic/1.jpg';
import mechanic2 from '../../../images/Mechanic/2.jpg';
import mechanic3 from '../../../images/Mechanic/3.jpg';
import mechanic4 from '../../../images/Mechanic/4.png';
import mechanic5 from '../../../images/Mechanic/5.jpg';
import Expert from '../Expert/Expert';

const experts = [
    { id: 302, img: mechanic1, name: 'John Smith', expertize: 'Engine Expert' },
    { id: 303, img: mechanic5, name: 'Alex Smith', expertize: 'Tire Expert' },
    { id: 304, img: mechanic3, name: 'Abra John', expertize: 'Polish Expert' },
    { id: 305, img: mechanic4, name: 'Doe Shun', expertize: 'Structure Expert' },
    { id: 306, img: mechanic2, name: 'Fa Gates', expertize: 'Engineer Expert' },
];

const Experts = () => {
    return (
        <div className="container">
            <h2 className="text-primary mt-4">Our Experts</h2>

            <Container>
                <Row>
                    {
                        experts.map(expert => <Expert
                            key={expert.id}
                            expert={expert}
                        ></Expert>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Experts;