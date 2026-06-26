export default async function CustomerDetailsPage({ params }) {
  const { id } = await params;

  return (
    <div>
      <h1>Customer {id}</h1>
    </div>
  );
}
