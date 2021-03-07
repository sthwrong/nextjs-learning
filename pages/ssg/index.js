export default function SSG({ spaces }) {
  console.log(spaces);
  return (
    <div>
      {spaces.map((space, id) => (
        <ul key={id}>
          <li>{space.id}</li>
          <li>{space.name}</li>
        </ul>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/spaces");
  const spaces = await res.json();

  return {
    props: {
      spaces,
    },
  };
}
