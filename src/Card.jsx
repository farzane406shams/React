import photo2 from "./assets/photo2.jpg";
import photo3 from "./assets/photo3.jpg";
import photo4 from "./assets/photo4.jpg";
import photo5 from "./assets/photo5.jpg";

const card = [

    {
        id: 1,
        country: "USA",
        title: "The age of Adeline",
        year: 2019,
        price: "20$",
        genre: "Drama",
        image: photo2,
        director: "Lee Toland Krieger",
        off: false,
    },

    {
        id: 2,
        country: "Uk",
        title: "Mechanic",
        year: 2022,
        price: "15$",
        genre: "Action",
        image: photo3,
        director: "Simon West",
        off: true,
    },

    {
        id: 3,
        country: "USA",
        title: "Joker",
        year: 2019,
        price: "30$",
        genre: "Crime",
        image: photo4,
        director: "Todd Phillips",
        off: false,
    },

    {
        id: 4,
        country: "Romania",
        title: "Wednesday",
        year: 2023,
        price: "15$",
        genre: "Mystery",
        image: photo5,
        director: "Alfred Gough",
        off: true,
    },
];

const Card = () => {


    //const [ off,setoff]=usestate("false")//

    return (

        <div className="cards">

            {card.map((card) => (

                <div className="card">
                    <img src={card.image} alt={card.title} />
                    <h2>{card.title}</h2>

                    <p>Country:{card.country}</p>
                    <p> Year:{card.year}</p>
                    <p>Director:{card.director}</p>
                    <p>Genre: {card.genre}</p>
                    <h4>price:{card.price}</h4> <h5>{card.off ? "OFF" : ""}</h5>

                    <button>Buy Now</button>
                </div>
            ))}
        </div>

    );
}


export default Card;