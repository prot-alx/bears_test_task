import { useState, useEffect } from "react";
import { BearCard } from "../entity/bear-card";
import { BearFilter } from "../entity/bear-filter";

export interface ApiResponse {
  success: boolean;
  results: {
    data: Array<{
      gender: string;
      id: number;
      image_url: string;
      in_reserve: boolean;
      name: string;
      text: string;
      type: string;
    }>;
  };
}

export const BearList = () => {
  const [data, setData] = useState<ApiResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [showReserved, setShowReserved] = useState(false);

  const URL =
    "https://private-9d5e37a-testassignment.apiary-mock.com/get-bears";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URL);
        const json = (await response.json()) as ApiResponse;
        setData(json);
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  if (!data || !Array.isArray(data.results.data)) {
    return <div className="no-data">No data available</div>;
  }

  const filteredBears = showReserved
    ? data.results.data.filter((bear) => bear.in_reserve)
    : data.results.data;

  return (
    <div className="bears-container">
      <BearFilter onFilterChange={setShowReserved} />
      <BearCard bearlist={filteredBears} />
    </div>
  );
};
