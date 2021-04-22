export default function SSG({ spaces }) {
  console.log(spaces);
  return (
    <div>
      {spaces.length && spaces.map((space, id) => (
        <ul key={id}>
          <li>{space.id}</li>
          <li>{space.name}</li>
        </ul>
      ))}
    </div>
  );
}

export async function getStaticProps() {
  const spaces = [];

  return {
    props: {
      spaces,
    },
  };
}
