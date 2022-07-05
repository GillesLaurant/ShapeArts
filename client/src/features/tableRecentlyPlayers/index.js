import React from "react";
import dayjs from "dayjs";
import "./style.scss";
import GeneratorSVG from "../svg/GeneratorSVG";
import { useSelector } from "react-redux";

/*******    TABLE RECENTLY USERS     *******/

const RecentlyShapes = () => {
  const cloth = useSelector((state) => state.cloth.content);
  const loading = useSelector((state) => state.loader.cloth);

  return (
    <section className="recentlyShapes ">
      <h3 className="recentlyShapes-title">Joueurs récents</h3>
      {!loading && (
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
            {cloth
              .filter((item) => item.id > cloth.length - 30)
              .reverse()
              .map((shape) => (
                <tr key={shape.id} className="recentBody-rows">
                  <td className="table-row_font col-player">
                    <p className="row-player">{shape.User.user_name}</p>
                    <p className="row-time">
                      <span className="row-time-text-date">{`${dayjs(
                        shape.createdAt
                      ).format("DD / MM / YY")}`}</span>
                      <span className="row-time-text-time">
                        {`à ${dayjs(shape.createdAt).format("H : mm : ss")}`}
                      </span>
                    </p>
                  </td>
                  <td className="table-row_font col-shape">
                    <svg
                      className="row-shape"
                      viewBox="0 0 512 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{
                        position: "relative",
                        transform: `scale(1.${shape.size}) rotate(${shape.rotation}deg) rotateX(${shape.rotation_x}deg) rotateY(${shape.rotation_y}deg)`,
                      }}
                    >
                      <use xlinkHref={`#recent_${shape.id}`} />
                    </svg>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </section>
  );
};

RecentlyShapes.propTypes = {};

export default RecentlyShapes;
