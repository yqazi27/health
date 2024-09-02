import { trpc } from "../utils/trpc";

export default function Test() {
  const { data } = trpc.testDb.useQuery();

  return (
    <div>
      <p>{data?.id}</p>
    </div>
  );
}
