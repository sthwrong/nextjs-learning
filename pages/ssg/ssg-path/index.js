export default function SsgPath() {}

export async function getStaticPaths() {
  const res = await fetch("http://localhost:3000/api/spaces");
  const spaces = await res.json();

  const paths = spaces.map((space) => `/space/${space.id}`);

  return { paths, fallback: false };
}
