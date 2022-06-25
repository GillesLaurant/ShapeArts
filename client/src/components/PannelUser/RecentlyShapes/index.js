import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import GeneratorSVG from "../../../features/svg/GeneratorSVG";

/*******    TABLE RECENTLY USERS     *******/

const RecentlyShapes = (props) => {
  const arrayPlayers = [
    {
      player: "test",
      shape: (
        <svg
          className="svg_model"
          fill="current-color"
          stroke="current-color"
          viewBox="0 0 512 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <use xlinkHref={"#roundSVG"} />
        </svg>
      ),
      date: "14 / 11 /  2022",
      time: "14 h 38",
    },
    {
      player: "test",
      shape: (
        <svg
          className="svg_model"
          fill="current-color"
          stroke="current-color"
          viewBox="0 0 512 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <use xlinkHref={"#roundSVG"} />
        </svg>
      ),
      date: "14 / 11 /  2022",
      time: "14 h 38",
    },
    {
      player: "test",
      shape: (
        <svg
          className="svg_model"
          fill="current-color"
          stroke="current-color"
          viewBox="0 0 512 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <use xlinkHref={"#roundSVG"} />
        </svg>
      ),
      date: "14 / 11 /  2022",
      time: "14 h 38",
    },
    {
      player: "test",
      shape: (
        <svg
          className="svg_model"
          fill="current-color"
          stroke="current-color"
          viewBox="0 0 512 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <use xlinkHref={"#roundSVG"} />
        </svg>
      ),
      date: "14 / 11 /  2022",
      time: "14 h 38",
    },
    {
      player: "test",
      shape: (
        <svg
          className="svg_model"
          fill="current-color"
          stroke="current-color"
          viewBox="0 0 512 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <use xlinkHref={"#roundSVG"} />
        </svg>
      ),
      date: "14 / 11 /  2022",
      time: "14 h 38",
    },
    {
      player: "test",
      shape: (
        <svg
          className="svg_model"
          fill="current-color"
          stroke="current-color"
          viewBox="0 0 512 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <use xlinkHref={"#roundSVG"} />
        </svg>
      ),
      date: "14 / 11 /  2022",
      time: "14 h 38",
    },
    {
      player: "test",
      shape: (
        <svg
          className="svg_model"
          fill="current-color"
          stroke="current-color"
          viewBox="0 0 512 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <use xlinkHref={"#roundSVG"} />
        </svg>
      ),
      date: "14 / 11 /  2022",
      time: "14 h 38",
    },
    {
      player: "test",
      shape: (
        <svg
          className="svg_model"
          fill="current-color"
          stroke="current-color"
          viewBox="0 0 512 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <use xlinkHref={"#roundSVG"} />
        </svg>
      ),
      date: "14 / 11 /  2022",
      time: "14 h 38",
    },
    {
      player: "test",
      shape: (
        <svg
          className="svg_model"
          fill="current-color"
          stroke="current-color"
          viewBox="0 0 512 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <use xlinkHref={"#roundSVG"} />
        </svg>
      ),
      date: "14 / 11 /  2022",
      time: "14 h 38",
    },
    {
      player: "test",
      shape: (
        <svg
          className="svg_model"
          fill="current-color"
          stroke="current-color"
          viewBox="0 0 512 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <use xlinkHref={"#roundSVG"} />
        </svg>
      ),
      date: "14 / 11 /  2022",
      time: "14 h 38",
    },
    {
      player: "test",
      shape: (
        <svg
          className="svg_model"
          fill="current-color"
          stroke="current-color"
          viewBox="0 0 512 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <use xlinkHref={"#roundSVG"} />
        </svg>
      ),
      date: "14 / 11 /  2022",
      time: "14 h 38",
    },
    {
      player: "test",
      shape: (
        <svg
          className="svg_model"
          fill="current-color"
          stroke="current-color"
          viewBox="0 0 512 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <use xlinkHref={"#roundSVG"} />
        </svg>
      ),
      date: "14 / 11 /  2022",
      time: "14 h 38",
    },
    {
      player: "test",
      shape: (
        <svg
          className="svg_model"
          fill="current-color"
          stroke="current-color"
          viewBox="0 0 512 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <use xlinkHref={"#roundSVG"} />
        </svg>
      ),
      date: "14 / 11 /  2022",
      time: "14 h 38",
    },
    {
      player: "test",
      shape: (
        <svg
          className="svg_model"
          fill="current-color"
          stroke="current-color"
          viewBox="0 0 512 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <use xlinkHref={"#roundSVG"} />
        </svg>
      ),
      date: "14 / 11 /  2022",
      time: "14 h 38",
    },
    {
      player: "test",
      shape: (
        <svg
          className="svg_model"
          fill="current-color"
          stroke="current-color"
          viewBox="0 0 512 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <use xlinkHref={"#roundSVG"} />
        </svg>
      ),
      date: "14 / 11 /  2022",
      time: "14 h 38",
    },
    {
      player: "test",
      shape: (
        <svg
          className="svg_model"
          fill="current-color"
          stroke="current-color"
          viewBox="0 0 512 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <use xlinkHref={"#roundSVG"} />
        </svg>
      ),
      date: "14 / 11 /  2022",
      time: "14 h 38",
    },
    {
      player: "test",
      shape: (
        <svg
          className="svg_model"
          fill="current-color"
          stroke="current-color"
          viewBox="0 0 512 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <use xlinkHref={"#roundSVG"} />
        </svg>
      ),
      date: "14 / 11 /  2022",
      time: "14 h 38",
    },
    {
      player: "test",
      shape: (
        <svg
          className="svg_model"
          fill="current-color"
          stroke="current-color"
          viewBox="0 0 512 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <use xlinkHref={"#roundSVG"} />
        </svg>
      ),
      date: "14 / 11 /  2022",
      time: "14 h 38",
    },
    {
      player: "test",
      shape: (
        <svg
          className="svg_model"
          fill="current-color"
          stroke="current-color"
          viewBox="0 0 512 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <use xlinkHref={"#roundSVG"} />
        </svg>
      ),
      date: "14 / 11 /  2022",
      time: "14 h 38",
    },
    {
      player: "test",
      shape: (
        <svg
          className="svg_model"
          fill="current-color"
          stroke="current-color"
          viewBox="0 0 512 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <use xlinkHref={"#roundSVG"} />
        </svg>
      ),
      date: "14 / 11 /  2022",
      time: "14 h 38",
    },
  ];
  return (
    <section className="recentlyShapes ">
      <h3 className="recentlyShapes-title">Joueurs récents</h3>
      <table className="recentTable">
        <thead className="recentTable-head">
          <tr className="recentTable-head-row">
            <th className="recentTable-head-player">
              <GeneratorSVG nameSvg="avatar" />
            </th>
            <th className="recentTable-head-shape">
              <GeneratorSVG nameSvg="shapes" />
            </th>
          </tr>
        </thead>
        <tbody className="recentBody">
          {arrayPlayers.map((shape, index) => (
            <tr key={index} className="recentBody-rows">
              <td className="table-row_font row-player">{shape.player}</td>
              <td className="table-row_font row-shape">{shape.shape}</td>
              <td className="table-row_back row-time">
                <p className="row-time-text">
                  <span className="row-time-text-date">{shape.date}</span> à{" "}
                  <span className="row-time-text-time">{shape.time}</span>
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
