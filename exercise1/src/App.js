import MainNews from './components/MainNews'
import MostRead from './components/MostRead'
import NavBar from './components/NavBar'
import SideTopic from './components/SideTopic'
import TopArticles from './components/TopArticles'

import publicTransport from './images/PublicTransport.jpg'
import cityPic from './images/city.jpg'
import styles from './Styles.module.css'

const topArticles = 
[
  {
    header: "PÄIVÄN TIMANTTI: ",
    content: "Tutkija kertoo: Näin sota näkyy meissä edelleen",
    type: "New",
  },
  {
    header: "PÄIVÄN TIMANTTI: ",
    content: "Harriet Rabb tajusi avioliiton taloudelliset hyödyt ja kosi - Näin hän säästäisi aviopuolisona 19 200 euroa",
    type: "New",
  },
  {
    header: "MAINOS: ",
    content: "Faktoille on nyt suurempi tarve kuin koskaan - tutustu hesariin 2 viikkoa maksutta!",
    type: "Ad",
  }
];

const mainNews = [
  {
    header: "Joukkoliikenne |",
    content: "Metro- ja raitioliikenne uhkaavat seisahtua kahdeksi päiväksi lakon vuoksi",
    image: publicTransport,
    category: "Kaupunki 15:42",
  },
  {
    header: "Kaupunkisuunnittelu |",
    content: 'Helsinki hyväksyi Koivusaaren kaavan, perussuomalaiset vastustivat Ikeaa - "Olisiko Kärkkäisen tavaratalo ollut parempi?" ',
    image: cityPic,
    category: "Kaupunki 10:00",
  }
];

const mostRead = [
  {
      header: "Rikosepäilyt |",
      content: "EIT-huijaus: Kuolleeksi väitetyn irakilaismiehen tytär valehteli perheen taustoista jo turvapaikkahakemuksessa"
  },
  {
      header: "HS Vantaa |",
      content: "Vantaalle nousi vankilan näköinen päiväkoti, jota pilkataan nyt surutta verkossa"
  },
  {
      header: "Päivittyvä seuranta |",
      content: "STM: Parasetamolia tai deksametasonia sisältävien lääkkeiden myyntiä rajoitetaan - Ministeriö haluaa varmistaa valmisteiden riittävyyden"
  },
  {
      header: "Nyt.fi |",
      content: 'Harry Styles puki ylleen suomalaisen suunnittelijan neuleen, nyt tätä "mummon tilkkutäkkiä" neulovat kymmenet tuhannet ympäri maailman - Soitimme vaatesuunnittelijalle'
  },
  {
      header: "Rikosepäilyt |",
      content: 'Atte Jääskäläinen sai syytteet liikenneturvaalisuuden vaarantamisesta ja vammantuottamuksesta - "Olen myöntänyt syyllisyyteni"'
  },
  {
      header: "Helsinki |",
      content: "Työryhmän ehdotus julki: Jättimäisestä hiilivoimalasta halutaan täysin uudenlainen tapahtumapaikka kaupungin asukkaille"
  },
  {
    header: "Sijoittaminen |",
    content: "21-vuotias opiskelija avasi vahingossa kaksi osakesäästötiliä, tuloksena tuhansien eurojen rangaistus",
  },
  {
    header: "Verotus |",
    content: "Hallituksen päätös uudesta arvonnousuverosta nostatti kovan kiistan: Tästä verossa on kyse, HS käy läpi hyödy ja haitat",
  }
];

function App() {
  return (
    <div className={styles.Styles}>
      <NavBar />
      <div className={styles.TopArticlesContainer}>
        {topArticles.map(e => <TopArticles header={e.header} content={e.content} type={e.type} />)} 
      </div>
      <div className={styles.NewsContainer}>
        <div className={styles.MainNewsContainer}>
          {mainNews.map(e => <MainNews header={e.header} content={e.content} image={e.image} category={e.category} />)}
        </div>
        <div className={styles.MostReadContainer}>
        <SideTopic header={"Luetuimmat"} />
          <ol>
            {mostRead.map(e => <MostRead header={e.header} content={e.content} /> )}
          </ol>
        </div>
      </div>
    </div>
  )
}

export default App;
