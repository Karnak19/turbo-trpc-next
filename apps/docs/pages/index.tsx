import { trpc } from "trpc/client";
import { Button } from "ui";

export default function Docs() {
  const { data } = trpc.user.getAll.useQuery();

  return (
    <div>
      <h1>Docs</h1>
      <Button />
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
