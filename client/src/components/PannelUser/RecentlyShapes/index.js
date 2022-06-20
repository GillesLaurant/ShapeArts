import React from "react";
import PropTypes from "prop-types";
import "./style.scss";

/*******    TABLE RECENTLY USERS     *******/

const RecentlyShapes = (props) => {
  const arrayPlayers = [
    {
      player: "test",
      shape: "round",
      date: "14 / 11 /  2022",
      time: "14 h 38",
    },
    {
      player: "test",
      shape: "round",
      date: "14 / 11 /  2022",
      time: "14 h 38",
    },
    {
      player: "test",
      shape: "round",
      date: "14 / 11 /  2022",
      time: "14 h 38",
    },
    {
      player: "test",
      shape: "round",
      date: "14 / 11 /  2022",
      time: "14 h 38",
    },
    {
      player: "test",
      shape: "round",
      date: "14 / 11 /  2022",
      time: "14 h 38",
    },
    {
      player: "test",
      shape: "round",
      date: "14 / 11 /  2022",
      time: "14 h 38",
    },
    {
      player: "test",
      shape: "round",
      date: "14 / 11 /  2022",
      time: "14 h 38",
    },
    {
      player: "test",
      shape: "round",
      date: "14 / 11 /  2022",
      time: "14 h 38",
    },
    {
      player: "test",
      shape: "round",
      date: "14 / 11 /  2022",
      time: "14 h 38",
    },
    {
      player: "test",
      shape: "round",
      date: "14 / 11 /  2022",
      time: "14 h 38",
    },
    {
      player: "test",
      shape: "round",
      date: "14 / 11 /  2022",
      time: "14 h 38",
    },
    {
      player: "test",
      shape: "round",
      date: "14 / 11 /  2022",
      time: "14 h 38",
    },
    {
      player: "test",
      shape: "round",
      date: "14 / 11 /  2022",
      time: "14 h 38",
    },
    {
      player: "test",
      shape: "round",
      date: "14 / 11 /  2022",
      time: "14 h 38",
    },
    {
      player: "test",
      shape: "round",
      date: "14 / 11 /  2022",
      time: "14 h 38",
    },
    {
      player: "test",
      shape: "round",
      date: "14 / 11 /  2022",
      time: "14 h 38",
    },
    {
      player: "test",
      shape: "round",
      date: "14 / 11 /  2022",
      time: "14 h 38",
    },
    {
      player: "test",
      shape: "round",
      date: "14 / 11 /  2022",
      time: "14 h 38",
    },
    {
      player: "test",
      shape: "round",
      date: "14 / 11 /  2022",
      time: "14 h 38",
    },
    {
      player: "test",
      shape: "round",
      date: "14 / 11 /  2022",
      time: "14 h 38",
    },
  ];
  return (
    <section className="recentlyShapes ">
      <h3 className="recentlyShapes-title">Joueurs récents</h3>
      <table className="recentTable">
        <thead className="recentTable-head">
          <tr>
            <th className="recentTable-head-player">Joueurs</th>
            <th className="recentTable-head-shape">Shapes</th>
          </tr>
        </thead>
        <tbody className="recentBody">
          {arrayPlayers.map((shape, index) => (
            <tr key={index} className="recentBody-rows">
              <td className="recentBody-player">{shape.player}</td>
              <td className="recentBody-shape">{shape.shape}</td>
              <td className="timeBuble">
                <p className="timeBuble-text">
                  Créée le{" "}
                  <span className="timeBuble-text-date">shape.date</span> à{" "}
                  <span className="timeBuble-text-time">shape.time</span>
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

RecentlyShapes.propTypes = {};

export default RecentlyShapes;
