import React, { Component } from "react";
import NewsItemCMP from "./NewsItemCMP";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./Spinner";
import { v4 as uuid } from 'uuid';

export class NewsCMP extends Component {
  static defaultProps = {
    country: "us",
    category: "general",
  };

 
  constructor(props) {
      super(props);
      this.state = {
        articles: [],
        defaultArticles: JSON.stringify([
              {
                "source": {
                  "id": null,
                  "name": "Bolsamania.com"
                },
                "author": "redaccion@bolsamania.com (César Nuez)",
                "title": "Highlights at the close of the North American market",
                "description": "A fantastic performance by Costco that puts an end to the short-term consolidation by breaking the resistance of $924.",
                "url": "https://www.bolsamania.com/noticias/analisis-tecnico/valores-destacados-al-cierre-del-mercado-norteamericano--18001040.html",
                "urlToImage": "https://img6.s3wfg.com/web/img/images_uploaded/5/3/cbwallstreet2.jpg",
                "publishedAt": "2024-11-11T10:41:16Z",
                "content": "A fantastic performance by Costco that puts an end to the short-term consolidation by breaking through the resistance of $924.\r\nThe company is on a free rise with the path cleared for… [+614 chars]"
              },
              {
                "source": {
                  "id": null,
                  "name": "Feber.se"
                },
                "author": "Bobby Green",
                "title": "Den nya förverkandelagen verkar effektiv",
                "description": "19 sedan and fredags\n\n\n\n\n\n\nI fredags trädde den nya förverkandelagen i kraft. Denna gör att brottsbekämpande myndigheter kan ta brottsvinster och tillgångar från kriminella. runt på exempelvis massa kontanter, smycken, lyxkläder, inte har n…",
                "url": "https://feber.se/samhalle/den-nya-forverkandelagen-verkar-effektiv/473812/",
                "urlToImage": "https://static.feber.se/article_images/60/42/13/604213.jpg",
                "publishedAt": "2024-11-11T10:40:00Z",
                "content": "+\r\nLäs artiklar före alla andra\r\nKommentera före alla andra\r\nVälj periodJu längre period, desto bättre pris. Du bestämmer! \r\nMånad\r\n39 kr/mån\r\ nKvartal\r\n33 kr/mån\r\nÅr\r\n25 kr/mån\r\nVälj hur du vill beta… [+25605 chars]"
              },
              {
                "source": {
                  "id": null,
                  "name": "Hibridosyelectricos.com"
                },
                "author": "Javier Gómara",
                "title": "The Nissan Micra is leaked to the world and we discover who it bears a huge resemblance to",
                "description": "Although many no longer remember it, Nissan once sold more electric cars than Tesla itself. The Japanese had absolute control of the electrified market for a few years with the LEAF, which many consider to be the first electric car of…",
                "url": "https://www.hibridosyelectricos.com/coches/nissan-micra-se-filtra-todo-mundo-descubrimos-con-quien-guarda-enorme-parecido_76893_102.html",
                "urlToImage": "https://www.hibridosyelectricos.com/uploads/s1/85/47/89/nissan-micra-foto-espi-a_17_2000x1126.jpeg",
                "publishedAt": "2024-11-11T10:39:54Z",
                "content": "Although many no longer remember it, Nissan once sold more electric cars than Tesla itself. The Japanese had absolute control of the electrified market for a few years with the LEAF… [+3392 chars]"
              },
              {
                "source": {
                  "id": null,
                  "name": "Numerama"
                },
                "author": "Julien Cadot",
                "title": "Google Maps will allow you to choose the voice that you have for your outfits",
                "description": "Google Maps will have new options for personalizing the flèche that indicate your position. You can pour the transformer into a series of cars. Google Maps will change beaucoup d'année en année. Et si certaines mises à jour sont extrêmement …",
                "url": "https://www.numerama.com/tech/1841198-google-maps-va-vous-laisser-choisir-la-voiture-que-vous-voulez-pour-vos-trajets.html",
                "urlToImage": "https://www.numerama.com/wp-content/uploads/2024/11/google-maps-1.jpg",
                "publishedAt": "2024-11-11T10:35:40Z",
                "content": "Google Maps will add new options to personalize the flèche that indicate your position. You can transform it into a series of cars. \r\nGoogle Maps changes beaucoup d'… [+1233 chars]"
              },
              {
                "source": {
                  "id": null,
                  "name": "[Removed]"
                },
                "author": null,
                "title": "[Removed]",
                "description": "[Removed]",
                "url": "https://removed.com",
                "urlToImage": null,
                "publishedAt": "2024-11-11T10:35:03Z",
                "content": "[Removed]"
              },
              {
                "source": {
                  "id": null,
                  "name": "Yahoo Entertainment"
                },
                "author": null,
                "title": "Tesla unveils plans for incredible new Supercharger concept with its own power source: 'Solar is a no-brainer these days'",
                "description": null,
                "url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_752ab312-0d56-4d66-b1bb-af30cbd97485",
                "urlToImage": null,
                "publishedAt": "2024-11-11T10:30:28Z",
                "content": "If you click 'Accept all', we and our partners, including 237 who are part of the IAB Transparency & Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
              },
              {
                "source": {
                  "id": null,
                  "name": "Biztoc.com"
                },
                "author": "benzinga.com",
                "title": "Cybertruck 'Likely Won't Be Profitable' In Q4, Says Tesla Researcher",
                "description": "Tesla Inc (NASDAQ:TSLA) researcher Troy Teslike is of the opinion that the Cybertruck will likely not be profitable in the fourth quarter given the company has begun selling the regular versions of the vehicle instead of the Foundation series. \ nWhat Happened:…”",
                "url": "https://biztoc.com/x/a372cca1c419e1cc",
                "urlToImage": "https://biztoc.com/cdn/a372cca1c419e1cc_s.webp",
                "publishedAt": "2024-11-11T10:26:49Z",
                "content": "Tesla Inc (NASDAQ:TSLA) researcher Troy Teslike is of the opinion that the Cybertruck will likely not be profitable in the fourth quarter given the company has begun selling the regular versions of t… [+139 chars]"
              },
              {
                "source": {
                  "id": "focus",
                  "name": "Focus"
                },
                "author": "FOCUS online",
                "title": "New Ranking - Meistverkaufte Autos der Welt: Kein deutscher Hersteller in Top 10",
                "description": "Der Toyota Corolla führt die weltweiten Verkaufscharts der Autos an. Damit löst der japanische Hersteller Teslas Model Y auf Rang eins ab. Deutsche Hersteller tauchen auf den vorderen Plätzen gar nicht auf.",
                "url": "https://www.focus.de/finanzen/boerse/neues-ranking-meistverkaufte-autos-der-welt-deutsche-hersteller-weit-abgeschlagen_id_260469676.html",
                "urlToImage": "https://p6.focus.de/img/fotos/id_260469684/toyota-corolla.jpg?im=Crop%3D%280%2C115%2C3461%2C1728%29%3BResize%3D%281200 %2C627%29&impolicy=perceptual&quality=mediumHigh&hash=172a5709401fa2d4cd9f634668eaf737468a2c7ca7dcccbc29a32d4a34535fde",
                "publishedAt": "2024-11-11T10:26:25Z",
                "content": "Der Toyota Corolla führt die weltweiten Verkaufscharts der Autos an. Damit löst der japanische Hersteller Teslas Model Y auf Rang eins ab. Deutsche Hersteller tauchen auf den vorderen Plätzen gar nic… [+2332 chars]"
              },
              {
                "source": {
                  "id": "focus",
                  "name": "Focus"
                },
                "author": "FOCUS online",
                "title": "New Ranking - Meistverkaufte Autos der Welt: Kein deutscher Hersteller in Top 10",
                "description": "Der Toyota Corolla führt die weltweiten Verkaufscharts der Autos an. Damit löst der japanische Hersteller Teslas Model Y auf Rang eins ab. Deutsche Hersteller tauchen auf den vorderen Plätzen gar nicht auf.",
                "url": "https://www.focus.de/finanzen/boerse/neues-ranking-meistverkaufte-autos-der-welt-kein-deutscher-hersteller-in-top-10_id_260469676.html",
                "urlToImage": "https://p6.focus.de/img/fotos/id_260469684/toyota-corolla.jpg?im=Crop%3D%280%2C115%2C3461%2C1728%29%3BResize%3D%281200 %2C627%29&impolicy=perceptual&quality=mediumHigh&hash=172a5709401fa2d4cd9f634668eaf737468a2c7ca7dcccbc29a32d4a34535fde",
                "publishedAt": "2024-11-11T10:26:25Z",
                "content": "Der Toyota Corolla führt die weltweiten Verkaufscharts der Autos an. Damit löst der japanische Hersteller Teslas Model Y auf Rang eins ab. Deutsche Hersteller tauchen auf den vorderen Plätzen gar nic… [+2332 chars]"
              },
              {
                "source": {
                  "id": "focus",
                  "name": "Focus"
                },
                "author": "FOCUS online",
                "title": "New Ranking - Meistverkaufte Autos der Welt: Kein deutscher Hersteller in Top 10",
                "description": "Der Toyota Corolla führt die weltweiten Verkaufscharts der Autos an. Damit löst der japanische Hersteller Teslas Model Y auf Rang eins ab. Deutsche Hersteller tauchen auf den vorderen Plätzen gar nicht auf.",
                "url": "https://www.focus.de/finanzen/boerse/neues-ranking-deutsche-auto-hersteller-abgeschlagen-asiatische-anbieter-verkaufen-am-meisten_id_260469676.html",
                "urlToImage": "https://p6.focus.de/img/fotos/id_260469684/toyota-corolla.jpg?im=Crop%3D%280%2C115%2C3461%2C1728%29%3BResize%3D%281200 %2C627%29&impolicy=perceptual&quality=mediumHigh&hash=172a5709401fa2d4cd9f634668eaf737468a2c7ca7dcccbc29a32d4a34535fde",
                "publishedAt": "2024-11-11T10:26:25Z",
                "content": "Der Toyota Corolla führt die weltweiten Verkaufscharts der Autos an. Damit löst der japanische Hersteller Teslas Model Y auf Rang eins ab. Deutsche Hersteller tauchen auf den vorderen Plätzen gar nic… [+2332 chars]"
              },
              {
                "source": {
                  "id": "cnn",
                  "name": "CNN"
                },
                "author": "Sofia Barruti",
                "title": "Elon Musk exerts an increasingly profound influence on Donald Trump's presidential transition",
                "description": "Donald Trump's Mar-a-Lago club has been packed over the past 48 hours with two kinds of people: those seeking a job in the president-elect's incoming administration, and those trying to influence him to hire his picks for…",
                "url": "https://cnnespanol.cnn.com/2024/11/11/elon-musk-influencia-transicion-presidencial-donald-trump-trax",
                "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/cnne-1779310-descarga-11.jpg?c=16x9&q=w_800,c_fill",
                "publishedAt": "2024-11-11T10:22:30Z",
                "content": "(CNN) Over the past 48 hours, Donald Trump's Mar-a-Lago club has been packed with two kinds of people: those seeking a job in the president-elect's incoming administration, and those seeking a job in the president-elect's incoming administration.… [+3637 chars]"
              },
              {
                "source": {
                  "id": null,
                  "name": "Feber.se"
                },
                "author": "Wille Wilhelmsson",
                "title": "Nu är första avsnitten i säsong två av Arcane släppta",
                "description": "Remain rullar in på Netflix de kommande helgerna\n\n\n\n\n\n\n\n\n\n\n\n\nNetflix har nu släppt de första tre avsnitten av den andra säsongen för den hyllade animerade tv-serien Arcane, en serie som hämtat sin handling från Riot Games League of Legends-universum",
                "url": "https://feber.se/film/nu-ar-forsta-avsnitten-i-sasong-tva-av-arcane-slappta/473802/",
                "urlToImage": "https://static.feber.se/article_images/60/41/94/604194.jpg",
                "publishedAt": "2024-11-11T10:20:00Z",
                "content": "+\r\nLäs artiklar före alla andra\r\nKommentera före alla andra\r\nVälj periodJu längre period, desto bättre pris. Du bestämmer! \r\nMånad\r\n39 kr/mån\r\ nKvartal\r\n33 kr/mån\r\nÅr\r\n25 kr/mån\r\nVälj hur du vill beta… [+24787 chars]"
              },
              {
                "source": {
                  "id": null,
                  "name": "Biztoc.com"
                },
                "author": "barrons.com",
                "title": "These Stocks Are Moving the Most Today",
                "description": "Tesla stock extends gains after the electric-vehicle maker's market cap closes above $1 trillion for the first time since April 2022, Trump Media rises following an up and down week for the owner of the Truth Social website, and Coinbase and Robinhood emerges from...",
                "url": "https://biztoc.com/x/9e04a97ae63373bd",
                "urlToImage": "https://biztoc.com/cdn/9e04a97ae63373bd_s.webp",
                "publishedAt": "2024-11-11T10:16:06Z",
                "content": "Tesla stock extends gains after the electric-vehicle makers market cap closes above $1 trillion for the first time since April 2022, Trump Media rises following an up and down week for the owner of t… [+141 chars]"
              },
              {
                "source": {
                  "id": null,
                  "name": "Biztoc.com"
                },
                "author": "businessinsider.com",
                "title": "Trump's tariffs will make it hard for automakers — including Tesla — to set up shop in Mexico",
                "description": "A billboard welcoming Tesla to the Mexican state of Nuevo León, which was set to host Tesla's gigafactory.\nJULIO CESAR AGUILAR/AFP via Getty Images\nTesla's $10 billion Mexico gigafactory is in doubt after Donald Trump regained the presidency. \nElon Musk paused...",
                "url": "https://biztoc.com/x/c8290f78cd2829e4",
                "urlToImage": "https://biztoc.com/cdn/807/og.png",
                "publishedAt": "2024-11-11T10:15:48Z",
                "content": "A billboard welcoming Tesla to the Mexican state of Nuevo León, which was set to host Tesla's gigafactory.JULIO CESAR AGUILAR/AFP via Getty ImagesTesla's $10 billion Mexico gigafactory is in doubt af… [+145 chars]"
              },
              {
                "source": {
                  "id": null,
                  "name": "Biztoc.com"
                },
                "author": "businessinsider.com",
                "title": "Trump's tariffs will make it hard for automakers — including Tesla — to set up shop in Mexico",
                "description": "A billboard welcoming Tesla to the Mexican state of Nuevo León, which was set to host Tesla's gigafactory.\nJULIO CESAR AGUILAR/AFP via Getty Images\nTesla's $10 billion Mexico gigafactory is in doubt after Donald Trump regained the presidency. \nElon Musk paused...",
                "url": "https://biztoc.com/x/c8290f78cd2829e4",
                "urlToImage": "https://biztoc.com/cdn/807/og.png",
                "publishedAt": "2024-11-11T10:15:48Z",
                "content": "A billboard welcoming Tesla to the Mexican state of Nuevo León, which was set to host Tesla's gigafactory.JULIO CESAR AGUILAR/AFP via Getty ImagesTesla's $10 billion Mexico gigafactory is in doubt af… [+145 chars]"
              },
              {
                "source": {
                  "id": null,
                  "name": "Frandroid"
                },
                "author": "Marie Lizak",
                "title": "Volvo affûte sa prochaine berline electrique dotée d'une généreuse autonomy: sa launch date est même très proche",
                "description": "Si Volvo a annoncé revenir sur son objectif de ne plus vendre que des voitures electriques à de 2030, la firma va tout de même poursuivre son electrification massive. Elle prépare notamment sa future berline ES90, qui devrait chasser sur les lands of…",
                "url": "https://www.frandroid.com/marques/volvo/2397910_volvo-affute-sa-prochaine-berline-electrique-dotee-dune-genereuse-autonomie-sa-date-de-lancement-est-meme -three-proche",
                "urlToImage": "https://images.frandroid.com/wp-content/uploads/2024/11/es90-image-4x5-1-1200x654-1.jpg",
                "publishedAt": "2024-11-11T10:13:00Z",
                "content": "If Volvo has announced that it will revenir on the objective of ne plus come that electric vehicles from 2030 onwards, the firm will all be pouring out massive electrification. Elle prépare notamment sa… [+4084 chars]"
              },
              {
                "source": {
                  "id": null,
                  "name": "Slashdot.org"
                },
                "author": "AmiMoJo",
                "title": "US agency says Tesla's public statements about self driving are misleading",
                "description": "The US government's highway safety agency says Tesla is telling drivers in public statements that its vehicles can drive themselves, conflicting with owners manuals and briefings with the agency saying the electric vehicles need human supervision.The Nation…",
                "url": "https://slashdot.org/submission/17329777/us-agency-says-teslas-public-statements-about-self-driving-are-misleading",
                "urlToImage": null,
                "publishedAt": "2024-11-11T10:10:20Z",
                "content": "The US government's highway safety agency says Tesla is telling drivers in public statements that its vehicles can drive themselves, conflicting with owners manuals and briefings with the agency sa… [+1044 chars]"
              },
              {
                "source": {
                  "id": "business-insider",
                  "name": "Business Insider"
                },
                "author": "Tom Carter",
                "title": "Trump's tariffs will make it hard for automakers — including Tesla — to set up shop in Mexico",
                "description": "Donald Trump's idea of ​​imposing 200%-plus tariffs on vehicles imported from Mexico could throw the US auto industry into crisis, analysts say.",
                "url": "https://www.businessinsider.com/trump-tariffs-threaten-elon-musk-tesla-mexico-factory-limbo-2024-11",
                "urlToImage": "https://i.insider.com/672e0c7e88cea3ba1c1f1d72?width=1200&format=jpeg",
                "publishedAt": "2024-11-11T10:09:00Z",
                "content": "A billboard welcoming Tesla to the Mexican state of Nuevo León, which was set to host Tesla's gigafactory.JULIO CESAR AGUILAR/AFP via Getty Images\r\n\u003Cul\u003E\u003Cli\u003ETesla's $10 billion Mexico gigafactory is i… [+5774 chars]"
              },
              {
                "source": {
                  "id": null,
                  "name": "Biztoc.com"
                },
                "author": "businessinsider.com",
                "title": "Internal Tesla salary database shows Elon Musk's strategy: Lower salaries, bigger stock grants",
                "description": "An internal salary database shows that the company offers lower base salaries than its tech and automotive peers but offers substantial stock grants.\nJordan Strauss/Invision/AP; iStock; Rebecca Zisser/BI\nTesla attracts millions of job seekers annually",
                "url": "https://biztoc.com/x/a8ed74e3d6bb460d",
                "urlToImage": "https://biztoc.com/cdn/807/og.png",
                "publishedAt": "2024-11-11T10:05:15Z",
                "content": "An internal salary database shows that the company offers lower base salaries than its tech and automotive peers but offers substantial stock grants.Jordan Strauss/Invision/AP; iStock; Rebecca Zisser… [+143 chars]"
              },
              {
                "source": {
                  "id": null,
                  "name": "Biztoc.com"
                },
                "author": "businessinsider.com",
                "title": "Internal Tesla database shows why workers might accept lower salaries",
                "description": "Tesla pay data reflects Elon Musk's strategy to court true believers\nBusiness Insider secured access to an internal Tesla pay database, covering nearly 100,000 employees as of December 2021. Correspondent Grace Kay explains why employees working for Elon Musk…",
                "url": "https://biztoc.com/x/1788353c89348783",
                "urlToImage": "https://biztoc.com/cdn/807/og.png",
                "publishedAt": "2024-11-11T10:04:52Z",
                "content": "Tesla pay data reflects Elon Musk's strategy to court true believersBusiness Insider secured access to an internal Tesla pay database, covering nearly 100,000 employees as of December 2021. Corresponds… [+147 chars]"
              },
              {
                "source": {
                  "id": null,
                  "name": "Ambcrypto.com"
                },
                "author": "Ishika Kumari",
                "title": "MicroStrategy Bitcoin holdings cross $20B – Global crypto adoption next?",
                "description": "How has Bitcoin's recent emergence impacted MicroStrategy's investment strategy?",
                "url": "https://ambcrypto.com/microstrategy-bitcoin-holdings-cross-20b-global-crypto-adoption-next/",
                "urlToImage": "https://ambcrypto.com/wp-content/uploads/2024/11/MicroStrategy-BTC-holdings-surge-1000x600.webp",
                "publishedAt": "2024-11-11T10:00:23Z",
                "content": "\u003Cul\u003E\u003Cli\u003EMicroStrategys Bitcoin holdings surpassed $20 billion, solidifying its position.\u003C/li\u003E\u003Cli\u003EBitcoin's emergence fueled global adoption, influencing institutions and nations alike.\u003C/li\u003E\u003C/ul\u003EMichael S… [+3380 chars]"
              } 
            ]),
        page: 1,
        pageSize: 8,
        Spinner: false,
        totalResults: 0,
        apiKey: '17cf0f2d113c42a29559b990cd1cd568',
      };
    }

  Capitalize = (string) =>{
     return string.charAt(0).toUpperCase() + string.slice(1);
     }
    
   async UpdateData() {
    try {
      this.props.setprogress(20);
      // const URL = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&pageSize=${this.state.pageSize}&page=${this.state.page}&apiKey=${this.state.apiKey}`;
      const URL = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&pageSize=${this.state.pageSize}&apiKey=${this.state.apiKey}`;
      console.log(URL);
      
      document.title = `NewsMonkey - ${this.Capitalize(this.props.category)}`;
      this.setState({ Spinner: true });
      let data = await fetch(URL);
      let parsedData = await data.json();
      console.log(parsedData);
      
      this.props.setprogress(50);
      this.setState({
        // articles: parsedData.articles && parsedData.articles.length > 0 ? parsedData.articles : this.state.defaultArticles,
        articles: parsedData.articles,
        totalResults: parsedData.totalResults,
        Spinner: false,
      });
      this.props.setprogress(100);
    } catch (error){
      console.error(error);
    }
   }

   componentDidMount() {
     this.UpdateData();
   }
  
   componentDidUpdate(prevProps) {
     if (prevProps.country !== this.props.country || prevProps.category !== this.props.category) {
       this.UpdateData();
     }
     else if (prevProps.mode !== this.props.mode) {
       this.colorChanging();
     }
   }

   colorChanging = () => {
     if(this.props.mode === 'dark'){
       document.body.style.backgroundColor = 'rgb(4, 39, 67)';
     } else {
       document.body.style.backgroundColor = 'white';
     }
   }
   
   fetchMoreDataDelay = () =>{
     setTimeout(() => {
       this.fetchMoreData();
      }, 1000);
   }

   fetchMoreData = async (props) => {
    this.props.setprogress(0);
        //  const URL = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&pageSize=${this.state.pageSize}&page=${this.state.page+1}&apiKey=${this.state.apiKey}`;
        const URL = `https://newsapi.org/v2/top-headlines?country=us&category=${this.props.category}&pageSize=${this.state.pageSize}&page=${this.state.page + 1}&apiKey=${this.state.apiKey}`;  
         this.props.setprogress(20);
         let data = await fetch(URL);
         let parsedData = await data.json();
         this.props.setprogress(50);
       this.setState({
         articles: this.state.articles.concat(parsedData.articles),
         totalResults: parsedData.totalResults,
         page: this.state.page + 1,
       });
       this.props.setprogress(100);
      };
    
    
      render() {
  const CtgryWithCntry = `USA / ${this.props.category}`.toUpperCase();
  return (
    <>
      <h2 className={`content text-3xl text-center mt-3 mb-3 ${this.props.mode === 'light' ? 'text-black' : 'text-gray-100'}`}>
        <strong>News Monkey - Top {this.Capitalize(this.props.category)} Headlines</strong>
      </h2>
      <h1 className={`ml-28 text-xl ${this.props.mode === 'light' ? 'text-black' : 'text-gray-400'}`}>{CtgryWithCntry}</h1>

         <InfiniteScroll
             dataLength={this.state.articles.length}
             next={this.fetchMoreDataDelay}
             hasMore={this.state.totalResults > this.state.articles.length}
             loader={<Spinner/>}>
         <div className={`d-flex flex-row justify-content-center align-self-start mb-10`} style={{ marginRight: "100px", marginLeft: "100px" }}>
           <div className="row">
             {this.state.articles.map(element => {
               const uniqueKey = uuid();
              
                return (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    key={uniqueKey}
                    className="align-self-start col-md-4"
                  >
                  <NewsItemCMP
                    name={element.title}
                    description={element.description}
                    newsUrl={element.url}
                    imageURL={element.urlToImage}
                    author={element.author}
                    publishedAt={element.publishedAt}
                    source={element.source.name}
                    mode={this.props.mode}
                    />
                  </div>
                );
              })}
            </div>
        </div>
        </InfiniteScroll>
      </>
    );
  }
}

export default NewsCMP;