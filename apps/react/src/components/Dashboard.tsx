import { trpc } from "../utils/trpc";
import { Typography, Box } from "@mui/material";
import PatientVisitList from "./PatientVisitList";

export default function Dashboard() {
  const { data } = trpc.get.useQuery({ name: "John Doe" });

  return (
    <Box>
      <Typography variant="h1" align="center">
        {data?.message}
      </Typography>
      <PatientVisitList />
    </Box>
  );
}
