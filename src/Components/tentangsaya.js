import React from 'react'
import { CardColumns } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
class TentangSaya extends React.Component{
    render () {
        return (
            [
                'Dark',
              ].map((variant, idx) => (
            <div>
                <CardColumns className="text-center">
                  <Card 
                    bg={variant.toLowerCase()}
                    key={idx}
                    text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                    style={{ width: '18rem' }}
                    className="text-center">

                    <Card.Img variant="top" src="../Media/aw.jpg" alt ="card"/>
                   
                    <Card.Body>
                    <Card.Header>Perpustakaan DEW</Card.Header>
                    <Card.Text>
                        Menyediakan peminjaman buku buku terbaru. Novel, Buku Kumpuan Puisi                         
                    </Card.Text>
                    </Card.Body>
                </Card>
                </CardColumns>
            </div>
        )));
    }
}

export default TentangSaya;
    
