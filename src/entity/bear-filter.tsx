interface BearFilterProps {
  onFilterChange: (showReserved: boolean) => void;
}

export const BearFilter: React.FC<BearFilterProps> = ({ onFilterChange }) => {
  return (
    <div className="filter-container">
      <label className="filter-label">
        <input
          type="checkbox"
          onChange={(e) => onFilterChange(e.target.checked)}
          className="filter-checkbox"
        />
        Только из заповедника
      </label>
    </div>
  );
};
