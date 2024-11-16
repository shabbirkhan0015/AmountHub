import React from "react";

const OffersList = () => {
  const offers = [
    {
      maxLoan: 24999,
      minLoan: 16000,
      payment: "-",
      term: 84,
      line: 24000,
      postDTI: "0%",
      postCLTV: "0%",
    },
    {
      maxLoan: 150000,
      minLoan: 100000,
      payment: "-",
      term: 180,
      line: 0,
      postDTI: "0%",
      postCLTV: "0%",
    },
    {
      maxLoan: 150000,
      minLoan: 100000,
      payment: "-",
      term: 180,
      line: 0,
      postDTI: "0%",
      postCLTV: "0%",
    },
    {
      maxLoan: 150000,
      minLoan: 100000,
      payment: "-",
      term: 180,
      line: 0,
      postDTI: "0%",
      postCLTV: "0%",
    },
    {
      maxLoan: 150000,
      minLoan: 100000,
      payment: "-",
      term: 180,
      line: 0,
      postDTI: "0%",
      postCLTV: "0%",
    },
    // Add more offers as needed
  ];

  return (
    <div className="offers-list bg-white border p-4 rounded-md shadow-md">
      <h2 className="text-lg font-semibold mb-4">Offers</h2>
      {/* Wrapper for horizontal scrolling */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr className="border-b bg-gray-50">
              <th className="py-2 px-4 text-left text-gray-600 whitespace-nowrap">
                Max Loan Amount
              </th>
              <th className="py-2 px-4 text-left text-gray-600 whitespace-nowrap">
                Min Loan Amount
              </th>
              <th className="py-2 px-4 text-left text-gray-600 whitespace-nowrap">
                Payment Amount
              </th>
              <th className="py-2 px-4 text-left text-gray-600 whitespace-nowrap">
                Term
              </th>
              <th className="py-2 px-4 text-left text-gray-600 whitespace-nowrap">
                Line
              </th>
              <th className="py-2 px-4 text-left text-gray-600 whitespace-nowrap">
                Household Post Loan DTI
              </th>
              <th className="py-2 px-4 text-left text-gray-600 whitespace-nowrap">
                Post Loan CLTV
              </th>
            </tr>
          </thead>
          <tbody>
            {offers.map((offer, index) => (
              <tr
                key={index}
                className="text-gray-700 border-b hover:bg-gray-100"
              >
                <td className="py-2 px-4">{offer.maxLoan}</td>
                <td className="py-2 px-4">{offer.minLoan}</td>
                <td className="py-2 px-4">{offer.payment}</td>
                <td className="py-2 px-4">{offer.term}</td>
                <td className="py-2 px-4">{offer.line}</td>
                <td className="py-2 px-4">{offer.postDTI}</td>
                <td className="py-2 px-4">{offer.postCLTV}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OffersList;
