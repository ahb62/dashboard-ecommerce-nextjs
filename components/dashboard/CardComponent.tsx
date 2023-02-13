import React, { useState } from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";


const CardComponent = ({ data }: any) => {

	const totalEarned = 1000;

	const [state, setState] = useState(1000);

	const PositiveBox = () => {
		return (
			<>
				<Box
					sx={{
						borderRadius: "0.75rem",
						width: "5rem",
						height: "5rem",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
						boxShadow:
							"rgba(0, 0, 0, 0.14) 0rem 0.25rem 1.25rem 0rem, rgba(76, 175, 79, 0.4) 0rem 0.4375rem 0.625rem -0.3125rem",
						background:
							"linear-gradient(195deg, rgb(102, 187, 106), rgb(67, 160, 71))",
					}}
				>
					<MonetizationOnIcon sx={{ color: "white" }} fontSize="large" />
				</Box>
			</>
		);
	};

	const NegativeBox = () => {
		return (
			<>
				<Box
					sx={{
						borderRadius: "0.75rem",
						width: "5rem",
						height: "5rem",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
						boxShadow:
							"rgba(0, 0, 0, 0.14) 0rem 0.25rem 1.25rem 0rem, rgba(233, 30, 98, 0.4) 0rem 0.4375rem 0.625rem -0.3125rem",
						background:
							"linear-gradient(195deg, rgb(236, 64, 122), rgb(216, 27, 96))",
					}}
				>
					<MonetizationOnIcon sx={{ color: "white" }} fontSize="large" />
				</Box>
			</>
		);
	};

	const maxWidthCard: string = "16.422rem";
	const maxHeightCard: string = "10.781rem";
	
	return (
		<Box
			sx={{
				display: "flex",
				boxSizing: "border-box",
				flexFlow: "row-wrap",
				marginTop: "1.5rem",
				justifyContent: "space-between",
			}}
		>
			<Card
				sx={{
					maxWidth: maxWidthCard,
					maxHeight: maxHeightCard,
					marginBottom: "0.50rem",
					fontSize: "1.25rem",
					borderRadius: "0.75rem",
					flexBasis: "25%",
					flexGrow: "0",
					background: "#f3f4d9",
				}}
			>
				<Box
					sx={{
						borderRadius: "0.75rem",
						width: "5rem",
						height: "5rem",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
						background:
							"linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))",
						boxShadow:
							"rgba(0, 0, 0, 0.14) 0rem 0.25rem 1.25rem 0rem, rgba(64, 64, 64, 0.4) 0rem 0.4375rem 0.625rem -0.3125rem",
					}}
				>
					<LocalActivityIcon sx={{ color: "white" }} fontSize="large" />
				</Box>

				<CardContent>
					<Typography variant="h6" component="div">
						Total de Tickets
					</Typography>
					<Typography sx={{ mb: 1.5 }} variant="h5" color="text.secondary">
						
					</Typography>
				</CardContent>
			</Card>

			<Card
				sx={{
					maxWidth: maxWidthCard,
					maxHeight: maxHeightCard,
					marginBottom: "0.50rem",
					fontSize: "1.25rem",
					borderRadius: "0.75rem",
					flexBasis: "25%",
					flexGrow: "0",
					background: "#f3f4d9",
				}}
			>
				<Box
					sx={{
						borderRadius: "0.75rem",
						width: "5rem",
						height: "5rem",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
						background:
							"linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))",
						boxShadow:
							"rgba(0, 0, 0, 0.14) 0rem 0.25rem 1.25rem 0rem, rgba(0, 187, 212, 0.4) 0rem 0.4375rem 0.625rem -0.3125rem",
					}}
				>
					<AccountBalanceIcon sx={{ color: "white" }} fontSize="large" />
				</Box>

				<CardContent>
					<Typography variant="h6" component="div">
						Ventas - Depositos
					</Typography>
					<Typography sx={{ mb: 1.5 }} variant="h5" color="text.secondary">

					</Typography>
				</CardContent>
			</Card>

			<Card
				sx={{
					maxWidth: maxWidthCard,
					maxHeight: maxHeightCard,
					marginBottom: "0.50rem",
					fontSize: "1.25rem",
					borderRadius: "0.75rem",
					flexBasis: "25%",
					flexGrow: "0",
					background: "#f3f4d9",
				}}
			>
				<Box
					sx={{
						borderRadius: "0.75rem",
						width: "5rem",
						height: "5rem",
						display: "flex",
						flexDirection: "column",
						justifyContent: "center",
						alignItems: "center",
						boxShadow:
							"rgba(0, 0, 0, 0.14) 0rem 0.25rem 1.25rem 0rem, rgba(233, 30, 98, 0.4) 0rem 0.4375rem 0.625rem -0.3125rem",
						background:
							"linear-gradient(195deg, rgb(236, 64, 122), rgb(216, 27, 96))",
					}}
				>
					<EmojiEventsIcon sx={{ color: "white" }} fontSize="large" />
				</Box>
				<CardContent>
					<Typography variant="h6" component="div">
						Premios
					</Typography>
					<Typography sx={{ mb: 1.5 }} variant="h5" color="text.secondary">
						
					</Typography>
				</CardContent>
			</Card>

			<Card
				sx={{
					maxWidth: maxWidthCard,
					maxHeight: maxHeightCard,
					marginBottom: "0.50rem",
					fontSize: "1.25rem",
					borderRadius: "0.75rem",
					flexBasis: "25%",
					flexGrow: "0",
					background: "#f3f4d9",
				}}
			>
				{state == totalEarned ? <PositiveBox /> : <NegativeBox />}

				<CardContent>
					<Typography variant="h6" component="div">
						Ganancias Totales
					</Typography>
					<Typography sx={{ mb: 1.5 }} variant="h5" color="text.secondary">
						
					</Typography>
				</CardContent>
			</Card>
		</Box>
	);
};
export default CardComponent;
