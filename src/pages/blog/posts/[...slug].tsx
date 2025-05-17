import { useRouter } from "next/router";

export default function PostsPage() {
  const router = useRouter();
  const segments =  router.query.slug as string [];

  return (
    <div>
      <h2>Posts : {segments?.join('/')}</h2>
    </div>
  );
}
