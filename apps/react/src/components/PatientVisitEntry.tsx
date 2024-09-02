import { Typography, Card, Stack } from "@mui/material";

export default function PatientVisitEntry({
  patientId,
  visitTime,
}: {
  patientId: string;
  visitTime: string /** This should be a strict timestamp */;
}): JSX.Element {
  return (
    <Card>
      {/** Using spacing for now, but I want to attach to ends of the Card */}
      <Stack direction={"row"} spacing={20}>
        <Typography variant="body1" align="left">
          Patient {patientId}
        </Typography>
        <Typography variant="body1" align="right">
          {/** This should right-align, but it's not doing so */}
          Time: {visitTime}
        </Typography>
      </Stack>
    </Card>
  );
}
