import React from "react";
import Button from "@material-ui/core/Button";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import Typography from "@material-ui/core/Typography";
import { useTheme } from "@material-ui/core/styles";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import hall_front from '../../images/hall_front.jpg'
import hall_gate from '../../images/hall_gate.jpg'
import pice_give1 from '../../images/price_sport2.jpg'
import pice_give2 from '../../images/sport_price.jpg'
import hall_festival from '../../images/hall_ornamented.jpg'

const MyCollection = [
{
	label: "Front side of hall",
	imgPath:hall_front,
},
{
	label: "Hall gate",
	imgPath:hall_gate,
},
{
	label: "Hall annual price giving ceremony",
	imgPath:pice_give1,
},
{
    label:"Hall annural price giving ceremony",
    imgPath:pice_give2
},
{
    label:"Hall on a festival",
    imgPath:hall_festival
}
];

const ImageSlider = () => {
const CollectionSize = MyCollection.length;
const theme = useTheme();
const [index, setActiveStep] = React.useState(0);

const goToNextPicture = () => {
	setActiveStep((prevActiveStep) => prevActiveStep + 1);
};

return (
    <div>
        <h2 
        style={{
		width:"100%",
        textAlign:"center",
        paddingTop:"10px"
	}   }>WELCOME TO AMAR EKUSHEY HALL, DU</h2>
	<div
	style={{
		marginLeft: "calc(50% - 500px)",
        borderRadius:"5%"
	}}
	>
	<div
		style={{
		width: 1000,
		flexGrow: 1,
		}}
	>
		<Paper
		square
		elevation={0}
		style={{
			height: 50,
			display: "flex",
			paddingLeft: theme.spacing(4),
			backgroundColor: theme.palette.background.default,
			alignItems: "center",
		}}
		>
		<Typography>{MyCollection[index].label}</Typography>
		</Paper>
		<img
		src={MyCollection[index].imgPath}
		style={{
            borderRadius:"10px",
			height: 450,
			width: "100%",
			maxWidth: 1000,
			display: "block",
			overflow: "hidden",
		}}
		alt={MyCollection[index].label}
		/>
		<MobileStepper
		variant="text"
		position="static"
		index={index}
		steps={CollectionSize}
		nextButton={
			<Button
			size="small"
			onClick={goToNextPicture}
			disabled={index === CollectionSize - 1}
			>
			Next
			{theme.direction !== "rtl" ? (
				<KeyboardArrowRight />
			) : (
				<KeyboardArrowLeft />
			)}
			</Button>
		}
		/>
	</div>
	</div>
    </div>
);
};

export default ImageSlider;
