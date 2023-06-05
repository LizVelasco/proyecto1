import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import aventura from '../images/aventura-01.png';
import ciencia from '../images/ciencia-01.png';
import cienciaficcion from '../images/ciencia-ficcion-01.png';
import cuento from '../images/cuento-01.png';
import ensayo from '../images/ensayo-01.png';
import teatro from '../images/teatro-01.png';
import crimen from '../images/crimen-01.png';
import terror from '../images/terror-01.png';
import romance from '../images/romance-01.png';
import humor from '../images/humor-01.png';
import poesia from '../images/poesia-01.png';

export default function Carrusel(){
	const datatipolibro =[
		{id:1, title:"Aventura", Icon: aventura, path:'../screens' },
		{id:2, title:"Ficción", Icon:cienciaficcion, path:'../screens'},
		{id:3, title:"Crimen", Icon:crimen, path:'../screens'},
		{id:4, title:"Terror", Icon:terror, path:'/terror'},
		{id:5, title:"Romance", Icon:romance , path:'../screens'},
		{id:6, title:"Humor", Icon:humor , path:'../screens'},
		{id:7, title:"Poesía", Icon:poesia , path:'../screens'},
		{id:8, title:"Cuento", Icon: cuento , path:'../screens'},
		{id:9, title:"Teatro", Icon:teatro , path:'../screens'},
		{id:10, title:"Ensayos", Icon: ensayo , path:'../screens'},
		{id:11, title:"Científico", Icon:ciencia , path:'../screens'},
	];

	const settings = {
	state : {
		display: true,
		width: 400,
		Height: 600
	},
	
	dots: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
	infinite: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	};
	
	return (
    <div className="containerCarrusel">
			<h2>Busca tu libro por género</h2>
			<Slider {...settings}>
        {datatipolibro.map((item)=>
        <div className="genero" key={item.id}>
            <div className="top">
              <img src={item.Icon} alt={item.title}/>
              <a href={item.path}>{item.title}</a>
            </div>
          </div>
        )}
      </Slider>
    </div>
  )
}


