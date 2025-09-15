// TODO: Add sorting, filtering, and pagination


export default function BuyerTable({ buyers }: { buyers: any[] }) {
  if (!buyers.length) {
    return <p className="text-gray-500">No buyers found.</p>;
  }

  return (
    <table className="w-full border-collapse border rounded-lg shadow">
      <thead>
        <tr className="bg-gray-100">
          <th className="border p-2">Name</th>
          <th className="border p-2">Email</th>
          <th className="border p-2">Phone</th>
          <th className="border p-2">City</th>
          <th className="border p-2">Property Type</th>
          <th className="border p-2">BHK</th>
          <th className="border p-2">Purpose</th>
        </tr>
      </thead>
      <tbody>
        {buyers.map((buyer) => (
          <tr key={buyer.id}>
            <td className="border p-2">{buyer.fullName}</td>
            <td className="border p-2">{buyer.email}</td>
            <td className="border p-2">{buyer.phone}</td>
            <td className="border p-2">{buyer.city}</td>
            <td className="border p-2">{buyer.propertyType}</td>
            <td className="border p-2">{buyer.bhk}</td>
            <td className="border p-2">{buyer.purpose}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
