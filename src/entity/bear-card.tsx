import React from "react";

interface Bear {
  gender: string;
  id: number;
  image_url: string;
  in_reserve: boolean;
  name: string;
  text: string;
  type: string;
}

interface BearCardProps {
  bearlist: Bear[];
}

export const BearCard: React.FC<BearCardProps> = ({ bearlist }) => {
  return (
    <ul className="bears-list">
      {bearlist.map((bear) => (
        <li
          key={bear.id}
          className={`bear-item ${bear.in_reserve ? "reserved" : ""}`}
        >
          <div
            className={`bear-image-wrapper ${
              bear.in_reserve ? "reserved" : ""
            }`}
          >
            <img src={bear.image_url} alt={bear.name} className="bear-image" />
          </div>
          <div className={`bear-details ${bear.in_reserve ? "reserved" : ""}`}>
            <h2 className={`bear-name ${bear.in_reserve ? "reserved" : ""}`}>
              {bear.name}
            </h2>
            <p className={`bear-type ${bear.in_reserve ? "reserved" : ""}`}>
              {bear.type}
            </p>
            <p className={`bear-gender ${bear.in_reserve ? "reserved" : ""}`}>
              {bear.gender}
            </p>
            <p className={`bear-status ${bear.in_reserve ? "reserved" : ""}`}>
              {bear.in_reserve ? "В заповеднике" : ""}
            </p>
          </div>
          <div className="button-block">
            <button
              className={`accept-button ${bear.in_reserve ? "reserved" : ""}`}
            >
              Принять
            </button>
            <button
              className={`decline-button ${bear.in_reserve ? "reserved" : ""}`}
            >
              Отклонить
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};
