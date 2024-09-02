import { Card, Typography, CardContent, Stack } from "@mui/material";
import PatientVisitEntry from "./PatientVisitEntry";

export default function PatientVisitList() {
  /**
   * Here, we will make a tRPC call to get the patients from today
   *
   */
  const sampleList: {
    patientId: string;
    visitTime: string;
  }[] = [
    {
      patientId: "1",
      visitTime: "2021-10-10T10:00:00Z",
    },
    {
      patientId: "2",
      visitTime: "2021-10-10T11:00:00Z",
    },
    {
      patientId: "3",
      visitTime: "2021-10-10T12:00:00Z",
    },
    {
      patientId: "4",
      visitTime: "2021-10-10T13:00:00Z",
    },
    {
      patientId: "5",
      visitTime: "2021-10-10T14:00:00Z",
    },
  ];

  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardContent>
        <Typography variant="h4" align="center">
          Patient Visit List
        </Typography>
        <Stack spacing={2}>
          {sampleList.map((entry, index) => (
            <PatientVisitEntry
              key={index}
              patientId={entry.patientId}
              visitTime={entry.visitTime}
            />
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
}
