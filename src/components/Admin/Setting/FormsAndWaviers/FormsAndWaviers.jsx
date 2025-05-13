import React from "react";
import "./Forms.css"

const FormsAndWaviers = () => {
  return (
    <>
      <div className="mm-container container">
        <div className="mm-header-buttons d-flex flex-column flex-md-row ">
          <button className="btn mm-btn-primary me-2 mt-2">
            <i className="fas fa-plus" /> New Agreement
          </button>
          <button className="btn mm-btn-primary me-2 mt-2">
            <i className="fas fa-plus" /> New Questionnaire
          </button>
          <button className="btn mm-btn-primary mt-2">
            <i className="fas fa-plus" /> New Membership Contract
          </button>
        </div>
        <div className=" table table-responsive">
        <table className="table mm-table mm-table-layout-fixed">
            <thead>
              <tr>
                <th className="mm-sortable" style={{ width: "65%" }}>
                  Name
                </th>
                <th className="mm-sortable text-end" style={{ width: "25%" }}>
                  Type
                </th>
                <th className="text-end" style={{ width: "10%" }}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="mm-text-nowrap">Default Membership Contract</td>
                <td className="text-end mm-text-nowrap">Membership Contract</td>
                <td className="mm-action-buttons">
                  <button className="btn mm-btn-sm" >
                  <i class="fa-solid fa-pen-to-square"></i>
                  </button>
                  <button
                    className="btn  mm-btn-sm"
                    title="Delete"
                  >
                    <i className="fas fa-trash text-danger" />
                  </button>
                </td>
              </tr>
              <tr>
                <td className="mm-text-nowrap">Golf Simulator</td>
                <td className="text-end mm-text-nowrap">
                  Terms and Conditions
                </td>
                <td className="mm-action-buttons">
                  <button className="btn  mm-btn-sm" title="Edit">
                  <i class="fa-solid fa-pen-to-square"></i>
                  </button>
                  <button
                    className="btn  mm-btn-sm"
                    title="Delete"
                  >
                    <i className="fas fa-trash text-danger" />
                  </button>
                </td>
              </tr>
              <tr>
                <td className="mm-text-nowrap">
                  Used for: 1:1 PT Memberships: 12 mo 3x, 4x, 8x &amp; 12x / 6
                  mo 3x, 4x &amp; 8x
                </td>
                <td className="text-end mm-text-nowrap">
                  Terms and Conditions
                </td>
                <td className="mm-action-buttons">
                  <button className="btn mm-btn-sm" title="Edit">
                  <i class="fa-solid fa-pen-to-square"></i>
                  </button>
                  <button
                    className="btn  mm-btn-sm"
                    title="Delete"
                  >
                    <i className="fas fa-trash text-danger" />
                  </button>
                </td>
              </tr>
              <tr>
                <td>Used for: 6 &amp; 12 Month Unlimited Bootcamp</td>
                <td className="text-end">Terms and Conditions</td>
                <td className="mm-action-buttons">
                  <button className="btn  mm-btn-sm" title="Edit">
                  <i class="fa-solid fa-pen-to-square"></i>
                  </button>
                  <button
                    className="btn  mm-btn-sm"
                    title="Delete"
                  >
                    <i className="fas fa-trash text-danger" />
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  Used for: Membership Family Plan, MULTICLUB, MULTICLUB +
                  guests, SINGLECLUB, SINGLECLUB + guests, Multi Club Membership
                  (gyms &amp; private studios)
                </td>
                <td className="text-end">Terms and Conditions</td>
                <td className="mm-action-buttons">
                  <button className="btn  mm-btn-sm" title="Edit">
                  <i class="fa-solid fa-pen-to-square"></i>
                  </button>
                  <button
                    className="btn  mm-btn-sm"
                    title="Delete"
                  >
                    <i className="fas fa-trash text-danger" />
                  </button>
                </td>
              </tr>
              <tr>
                <td>Used for: memberships with 3x, 5x and 7x sessions</td>
                <td className="text-end">Terms and Conditions</td>
                <td className="mm-action-buttons">
                  <button className="btn mm-btn-sm" title="Edit">
                  <i class="fa-solid fa-pen-to-square"></i>
                  </button>
                  <button
                    className="btn  mm-btn-sm"
                    title="Delete"
                  >
                    <i className="fas fa-trash text-danger" />
                  </button>
                </td>
              </tr>
              <tr>
                <td>
                  Used For: Private Studio 7x + guests, 7x 30 mins, 3x 30 mins,
                  3x, 2x 30 mins, 2x &amp; 1x
                </td>
                <td className="text-end">Terms and Conditions</td>
                <td className="mm-action-buttons">
                  <button className="btn  mm-btn-sm" title="Edit">
                  <i class="fa-solid fa-pen-to-square"></i>
                  </button>
                  <button
                    className="btn  mm-btn-sm"
                    title="Delete"
                  >
                    <i className="fas fa-trash text-danger" />
                  </button>
                </td>
              </tr>
              <tr>
                <td>Waiver/Terms and Conditions</td>
                <td className="text-end">Waiver</td>
                <td className="mm-action-buttons">
                  <button className="btn  mm-btn-sm" title="Edit">
                  <i class="fa-solid fa-pen-to-square"></i>
                  </button>
                  <button
                    className="btn  mm-btn-sm"
                    title="Delete"
                  >
                    <i className="fas fa-trash text-danger" />
                  </button>
                </td>
              </tr>
              <tr>
                <td>xold - 7 figure trainer</td>
                <td className="text-end">Terms and Conditions</td>
                <td className="mm-action-buttons">
                  <button className="btn  mm-btn-sm" title="Edit">
                  <i class="fa-solid fa-pen-to-square"></i>
                  </button>
                  <button
                    className="btn  mm-btn-sm"
                    title="Delete"
                  >
                    <i className="fas fa-trash text-danger" />
                  </button>
                </td>
              </tr>
              <tr>
                <td>xold - bootcamp challenge agreement</td>
                <td className="text-end">Terms and Conditions</td>
                <td className="mm-action-buttons">
                  <button className="btn  mm-btn-sm" title="Edit">
                  <i class="fa-solid fa-pen-to-square"></i>
                  </button>
                  <button
                    className="btn  mm-btn-sm"
                    title="Delete"
                  >
                    <i className="fas fa-trash text-danger" />
                  </button>
                </td>
              </tr>
              <tr>
                <td>xold - free 6 week challenge</td>
                <td className="text-end">Terms and Conditions</td>
                <td className="mm-action-buttons">
                  <button className="btn mm-btn-sm" title="Edit">
                  <i class="fa-solid fa-pen-to-square"></i>
                  </button>
                  <button
                    className="btn  mm-btn-sm"
                    title="Delete"
                  >
                    <i className="fas fa-trash text-danger" />
                  </button>
                </td>
              </tr>
              <tr>
                <td>xold - online training</td>
                <td className="text-end">Terms and Conditions</td>
                <td className="mm-action-buttons">
                  <button className="btn mm-btn-sm" title="Edit">
                  <i class="fa-solid fa-pen-to-square"></i>
                  </button>
                  <button
                    className="btn  mm-btn-sm"
                    title="Delete"
                  >
                    <i className="fas fa-trash text-danger" />
                  </button>
                </td>
              </tr>
              <tr>
                <td>xold - yoga</td>
                <td className="text-end">Terms and Conditions</td>
                <td className="mm-action-buttons">
                  <button className="btn  mm-btn-sm" title="Edit">
                  <i class="fa-solid fa-pen-to-square"></i>
                  </button>
                  <button
                    className="btn  mm-btn-sm"
                    title="Delete"
                  >
                    <i className="fas fa-trash text-danger" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default FormsAndWaviers;
