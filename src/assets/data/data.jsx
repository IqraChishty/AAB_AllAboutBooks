const menu = [
    {
        name:"Home",
        link:"/",       
    },
    {
        name:"About Us",
        link:"/about-us",      
    },
    {
        name:"Categories",
        link:"",     
    },
    {
        name:"Contact Us",
        link:"/contact-us",
        
    }
]
const categories = [
    {name:"Science & Mathematics",
     link:"/science-maths",
    srcLogo:"/assets/iconsLogos/science.svg",
    coverImg:`bg-[url("/assets/images/science-maths.jpg")]`,
    quote:"Mathematics is the queen of science, and arithmetic the queen of mathematics.",
    quoteAuthor:"~ Carl Friedrich Gauss ~",
   query:"subject=Science/Mathematics&mode=ebooks&has_fulltext=true"},
   
    {name:"Business",
     link:"/business",
    srcLogo:"/assets/iconsLogos/business.svg",
    coverImg:`bg-[url("/assets/images/business.jpg")]`,
    quote:"Business opportunities are like buses, there’s always another one coming.",
    quoteAuthor:"~ Richard Branson ~",
   query:"subject=Business"},
   
    {name:"Health & Nutrition",
     link:"/health-nutrition",
    srcLogo:"/assets/iconsLogos/health.svg",
    coverImg:`bg-[url("/assets/images/health.jpg")]`,
    quote:"Early to bed and early to rise makes a man healthy, wealthy and wise.",
    quoteAuthor:"~ Benjamin Franklin ~",
   query:"q=health+and+nutrition&mode=ebooks&has_fulltext=true"},
   
    {name:"Arts",
     link:"/arts",
    srcLogo:"/assets/iconsLogos/arts.svg",
    coverImg:`bg-[url("/assets/images/arts.jpg")]`,
    quote:"Art is not what you see, but what you make others see.",
    quoteAuthor:"~ Edgar Degas ~",
   query:"subject=Art%20%26%20Art%20Instruction"},
   
    {name:"Children",
     link:"/children",
    srcLogo:"/assets/iconsLogos/children.svg",
    coverImg:`bg-[url("/assets/images/children.jpg")]`,
    quote:"It is easier to build strong children than to repair broken men.",
    quoteAuthor:"~ Frederick Douglass ~",
   query:"subject=Juvenile%20fiction"},
   
    {name:"Animals",
     link:"/animals",
    srcLogo:"/assets/iconsLogos/animal.svg",
    coverImg:`bg-[url("/assets/images/animal.jpg")]`,
    quote:"Until one has loved an animal, a part of one's soul remains unawakened.",
    quoteAuthor:"~ Anatole France ~",
   query:"q=animals&mode=ebooks&has_fulltext=true"}
]

const collecion=[
  {name:"Star Trek",
   imgUrl:"/assets/images/star-trek.jpg",
   link:"/star-trek",
   coverImg:`bg-[url("https://images.alphacoders.com/248/thumb-1920-248611.png")]`,
   query:"q=subject%3A%22collectionID%3ASTorig%22&fields=%2A%2Cavailability"},
 
   {name:"Fear Street",
   imgUrl:"/assets/images/fear-street.jpg",
   link:"/fear-street",
   coverImg:`bg-[url("https://api.time.com/wp-content/uploads/2014/09/9781250051615.jpg")]`,
   query:"q=subject%3A%22collectionID%3AFSNovel%22&fields=%2A%2Cavailability"},

   {name:"Dinotopia",
   imgUrl:"/assets/images/dinotopia.jpg",
   link:"/dinotopia",
   coverImg:`bg-[url("https://i.pinimg.com/originals/9a/0c/63/9a0c63fc5fcfd8868e933ede5b211400.jpg")]`,
   query:"q=key%3A%28%2Fworks%2FOL15005391W+OR+%2Fworks%2FOL15828036W+OR+%2Fworks%2FOL1803513W+OR+%2Fworks%2FOL15005345W+OR+%2Fworks%2FOL2783420W+OR+%2Fworks%2FOL15005386W+OR+%2Fworks%2FOL2761303W+OR+%2Fworks%2FOL15069530W+OR+%2Fworks%2FOL2773566W+OR+%2Fworks%2FOL65139W+OR+%2Fworks%2FOL545150W+OR+%2Fworks%2FOL15005364W+OR+%2Fworks%2FOL55213W+OR+%2Fworks%2FOL15005331W+OR+%2Fworks%2FOL2783379W+OR+%2Fworks%2FOL568830W+OR+%2Fworks%2FOL20939463W+OR+%2Fworks%2FOL102590W%29&fields=%2A%2Cavailability"},
 
   {name:"Choose Your Own Adventure",
   imgUrl:"/assets/images/cyoa.jpg",
   link:"/choose-your-own-adventure",
   coverImg:`bg-[url("https://reviewedwords.com/wp-content/uploads/2020/04/unicorn-4766547_1280.jpg")]`,
   query:"q=subject%3A%22collectionID%3ACYOA4%22&fields=%2A%2Cavailability"},
 
   {name:"Origami",
   imgUrl:"/assets/images/origami.jpg",
   link:"/origami",
   coverImg:`bg-[url("https://images.unsplash.com/photo-1563260797-cb5cd70254c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8b3JpZ2FtaXxlbnwwfHwwfHw%3D&w=1000&q=80")]`,
   query:"q=subject%3A%22collection%3Aorigami%22&fields=%2A%2Cavailability"}
]


export {menu, categories,collecion}
  