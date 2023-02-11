import { trpc } from "trpc/client";
import { Button } from "ui";

export default function Web() {
  const { data } = trpc.greeting.useQuery();
  return (
    <div>
      <h1>Web with title changes</h1>
      <p>{data}</p>
      <Button />
      <Button />
      <Button />
    </div>
  );
}
