import { Card, CardHeader, CardBody, CardTitle, CardText, CardLink } from 'reactstrap'
import HomeNavBar from './HomeNavBar'

const Home = () => {
  return (
    <div>
      <HomeNavBar />
      <Card className="m-1">
        <CardHeader>
          <CardTitle></CardTitle>
        </CardHeader>
        <CardBody>
          <CardText>Kullanıcı Kaydı/Girişi</CardText>
          <CardText>Tanıtım Sayfası</CardText>
          <CardText>Ön Muhasebe</CardText>
          <CardText>Randevu Yönetimi</CardText>
          <CardText>Stok Takibi</CardText>
          <CardText>Ürün Satışı</CardText>
          <CardText>Hizmet Satışı</CardText>
          <CardText>Fatura</CardText>
          <CardText></CardText>
          <CardText></CardText>
          <CardText></CardText>
          <CardText></CardText>
          <CardText></CardText>
          <CardText></CardText>
        </CardBody>
      </Card>
    </div>
  )
}

export default Home
