// TODO: Display timestamp (changedAt) and who updated the buyer (changedBy)

export default function BuyerHistory({ history }: { history: any[] }) {
  if (!history.length) {
    return <p className="text-gray-500">No history available.</p>;
  }

  return (
    <div className="space-y-2">
      {history.map((item, idx) => (
        <div key={idx} className="p-3 border rounded-lg shadow-sm">
          <p><strong>{item.fullName}</strong> - {item.city}</p>
          <p className="text-sm text-gray-600">
            Interested in {item.propertyType}, {item.bhk} BHK for {item.purpose}
          </p>
        </div>
      ))}
    </div>
  );
}
