import { Card, CardContent, Stack, Typography } from "@mui/material";

interface PeselInfo {
    day: number
    month: number
    year: number
    digits: string
}
const PeselCard = (props: PeselInfo) => {
    return (
        <Card>
            <CardContent>
                <Stack direction={"row"} spacing={4}>
                    <Typography variant="h5" component="div">
                        {props.day}
                    </Typography>
                    <Typography variant="h5" component="div">
                        {props.month}
                    </Typography>
                    <Typography variant="h5" component="div">
                        {props.year}
                    </Typography>
                    <Typography variant="h5" component="div">
                        {props.digits}
                    </Typography>
                </Stack>
            </CardContent>
        </Card>
    );
}

export default PeselCard;