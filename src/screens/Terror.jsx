import React from 'react'
import {Grid, styled, Typography, ButtonBase} from '@mui/material'
import Footer from '../components/footer';
import '../styles/terror.css'

import terror1 from '../images/terror1.jpeg';
import terror2 from '../images/terror2.jpeg';
import terror3 from '../images/terror3.jpeg';
import terror4 from '../images/terror4.jpeg';
import terror5 from '../images/terror5.jpeg';
import terror6 from '../images/terror6.png';
import terror7 from '../images/terror7.jpeg';
import terror8 from '../images/terror8.jpeg';
import terror9 from '../images/terror9.jpeg';
import terror10 from '../images/terror10.jpeg';
import terror11 from '../images/terror11.jpeg';
import terror12 from '../images/terror12.jpeg';
import terror13 from '../images/terror13.jpeg';
import terror14 from '../images/terror14.jpeg';
import terror15 from '../images/terror15.jpeg';
import terror16 from '../images/terror16.jpeg';
import terror17 from '../images/terror17.jpeg';
import terror18 from '../images/terror18.jpeg';
import terror19 from '../images/terror19.jpeg';
import terror20 from '../images/terror20.jpeg';

const Img = styled('img')({
	margin:'auto',
	display: 'block',
	width: 120,
  flexGrow: 1,
	height: 190,
})

function Terror() {
	
	const librosTerror=[
		{id:'1', title: 'Asylum', author:'Madeleine Roux', tapa:'Tapa Blanda, Nuevo', precio:'$86.064', img:terror1},
		{id:'2', title: 'Cierra todas las puertas', author:'Riley Sager', tapa:'Tapa Dura, Nuevo', precio:'$102.450', img: terror2},
		{id:'3', title: 'Montañas de la locura', author:'H.P Lovecraft', tapa:'Tapa Blanda, Nuevo', precio:'$74.760', img: terror3},
		{id:'4', title: 'El segundo asesino', author:'Sarah Pinborough', tapa:'Tapa Dura, Nuevo', precio:'$57.890', img:terror4},
		{id:'5', title: 'Julia', author:'Peter Straub', tapa:'Tapa Blanda, Usado', precio:'$89.990', img: terror5},
		{id:'6', title: 'El apartamento olvidado', author:'S.L Grey', tapa:'Tapa Blanda, Nuevo', precio:'$54.800', img: terror6},
		{id:'7', title: 'Déjame entrar', author:'John Ajvide', tapa:'Tapa Blanda, Nuevo', precio:'$145.670', img:terror7},
		{id:'8', title: 'El terror', author:'Dan Simmons', tapa:'Tapa Dura, Nuevo', precio:'$57.603', img: terror8},
		{id:'9', title: 'El hombre de tiza', author:'C.J Tudor', tapa:'Tapa Blanda, Nuevo', precio:'$97.450', img: terror9},
		{id:'10', title: 'El invierno más largo', author:'Cecilia Ekback', tapa:'Tapa Blanda, Usado', precio:'$124.560', img:terror10},
		{id:'11', title: 'El visitante', author:'Stephen King', tapa:'Tapa Dura, Nuevo', precio:'$213.570', img: terror11},
		{id:'12', title: 'El intercambio', author:'Rebecca Fleet', tapa:'Tapa Dura, Nuevo', precio:'$145.670', img: terror12},
		{id:'13', title: 'Un rastro de asesinato', author:'Blake Pierce', tapa:'Tapa Blanda, Usado', precio:'$48.650', img:terror13},
		{id:'14', title: 'Obsesión', author:'J.L. Butler', tapa:'Tapa Dura, Nuevo', precio:'$163.160', img: terror14},
		{id:'15', title: 'Bibilioteca de los muertos', author:'Glenn Cooper', tapa:'Tapa Blanda, Usado', precio:'$74.890', img: terror15},
	]

	return (
		<>
			<div className='terror'>
			<h2>Tus nuevos libros favoritos de terror</h2>
			</div>
			<Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 1, sm: 8, md: 12 }} padding={10}>
			{librosTerror.map((item) => (
				<Grid item xs={2} sm={4} md={4} key={item.id} direction='column' paddingBottom={5}>
					<Grid item>
						<Img src={item.img} alt={item.id}/>
					</Grid>
					<Grid item xs={2} sm={4} md={4} key={item.title} paddingLeft={10} paddingTop={2} className='letras'>
						<Typography gutterBottom variant="subtitle1" component="div">
							{item.title}
						</Typography>
						<Typography variant="body2" gutterBottom>
							{item.author}
						</Typography>
						<Typography variant="body2" color="text.secondary">
							{item.tapa}
						</Typography>
					</Grid>
					<Grid item paddingLeft={'10rem'} paddingTop={2} className='precio'>
						<Typography variant='subtitle1' component='div'>
							{item.precio}
						</Typography>
					</Grid>
					<Grid container item justifyContent='center' alignItems='center' marginTop={2} bgcolor='#5E90F2' paddingTop={0.5}>
					<ButtonBase className='butonadd' variant='contained'>
						Añadir al carrito
					</ButtonBase>
					</Grid>
				</Grid>
			))}
			</Grid>
		<Footer></Footer>
		</>
	)
}

export default Terror