import React from 'react'
import Card from 'react-bootstrap/Card'
import CardDeck from 'react-bootstrap/CardDeck'
class Karya extends React.Component {
    render() {
        return(
            <div>      
                 <CardDeck>
                    <Card>
                      <Card.Img variant="bottom" src="../Media/wyws.jpg" width = "100%" height="auto"  />
                        <Card.Body>
                         <Card.Title>While You Were Sleeping</Card.Title>
                            <Card.Text>
                            Drama ini disutradarai oleh Oh Choong Hwan dan Park Soo Jin, sementara itu penulis skenarionya adalah Park Hye Run. Telah tayang di Korea pada September
                             hingga November 2017 dengan 32 episode di saluran TV lokal, SBS. </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card> 
                      <Card.Img variant="top" src="../Media/w.jpg" width ="100%" height="auto"/>
                        <Card.Body>
                        <Card.Title>W (Two World</Card.Title>
                            <Card.Text>
                            Dua tahun hiatus, Drama Lee Jong Suk berikutnya adalah drama Korea yang diadaptasi dari webtoon berjudul W (Two World). Bersama dengan Han Hyo Joo, 
                            Lee Jong Suk kembali memenangkan penghargaan sebagai “Best Couple” dalam MBC Drama Award 2016.
                            </Card.Text>
                        </Card.Body>
                     </Card>
                     <Card>
                        <Card.Img variant="top" src="../Media/ds.jpg" width ="100%" height="auto"/>
                        <Card.Body>
                        <Card.Title>Doctor Stranger</Card.Title>
                         <Card.Text>
                         Doctor Stranger merupakan drama Korea yang dibintangi oleh Lee Jong Suk.
                          Kali ini, Lee Jong Suk berperan sebagai Park Hoon, seorang dokter ahli bedah jantung yang punya karir bagus.
                         </Card.Text>
                       </Card.Body>
                     </Card>
                 </CardDeck>
            </div>
        )
    }
}
export default Karya;
