import React, { useState } from "react";

const ProductionForm = () => {
  const [formData, setFormData] = useState({
    merchantName: "",
    orderQty: 0,
    averageProductionPerDay: 0,
    stitchingDaysAllowed: 0,
    requiredOutputPerDay: 0,
    totalMachinesRequired: 0,
    revisionNumber: "",
    extensionNumber: "",
    tableRows: [
      {
        typeOfWork: "",
        description: "",
        reqQty: "",
        startDate: "",
        endDate: "",
        extensionDates: [],
        completedDate: "",
      },
    ],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleTableRowChange = (index, field, value) => {
    const updatedRows = [...formData.tableRows];
    updatedRows[index][field] = value;
    setFormData({ ...formData, tableRows: updatedRows });
  };

  const addTableRow = () => {
    setFormData({
      ...formData,
      tableRows: [
        ...formData.tableRows,
        {
          typeOfWork: "",
          description: "",
          reqQty: "",
          startDate: "",
          endDate: "",
          extensionDates: [],
          completedDate: "",
        },
      ],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center" }}>Production Form</h1>
      <form onSubmit={handleSubmit}>
        <section style={{ marginBottom: "20px" }}>
          <h2>Merchant Details</h2>
          <label>
            Merchant Name:
            <input
              type="text"
              name="merchantName"
              value={formData.merchantName}
              onChange={handleInputChange}
              required
              style={{ margin: "5px", padding: "5px", width: "100%" }}
            />
          </label>
          <label>
            Order Quantity:
            <input
              type="number"
              name="orderQty"
              value={formData.orderQty}
              onChange={handleInputChange}
              required
              style={{ margin: "5px", padding: "5px", width: "100%" }}
            />
          </label>
        </section>

        <section style={{ marginBottom: "20px" }}>
          <h2>Production Details</h2>
          <label>
            Average Production per Machine/Day:
            <input
              type="number"
              name="averageProductionPerDay"
              value={formData.averageProductionPerDay}
              onChange={handleInputChange}
              style={{ margin: "5px", padding: "5px", width: "100%" }}
            />
          </label>
          <label>
            Stitching Days Allowed:
            <input
              type="number"
              name="stitchingDaysAllowed"
              value={formData.stitchingDaysAllowed}
              onChange={handleInputChange}
              style={{ margin: "5px", padding: "5px", width: "100%" }}
            />
          </label>
          <label>
            Required Output per Day:
            <input
              type="number"
              name="requiredOutputPerDay"
              value={formData.requiredOutputPerDay}
              onChange={handleInputChange}
              style={{ margin: "5px", padding: "5px", width: "100%" }}
            />
          </label>
          <label>
            Total Machines Required:
            <input
              type="number"
              name="totalMachinesRequired"
              value={formData.totalMachinesRequired}
              onChange={handleInputChange}
              style={{ margin: "5px", padding: "5px", width: "100%" }}
            />
          </label>
        </section>

        <section style={{ marginBottom: "20px" }}>
          <h2>Production Schedule</h2>
          <table border="1" style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr>
                <th>Type of Work</th>
                <th>Description</th>
                <th>Required Qty</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Completed Date</th>
              </tr>
            </thead>
            <tbody>
              {formData.tableRows.map((row, index) => (
                <tr key={index}>
                  <td>
                    <input
                      type="text"
                      value={row.typeOfWork}
                      onChange={(e) =>
                        handleTableRowChange(index, "typeOfWork", e.target.value)
                      }
                      style={{ padding: "5px", width: "100%" }}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={row.description}
                      onChange={(e) =>
                        handleTableRowChange(index, "description", e.target.value)
                      }
                      style={{ padding: "5px", width: "100%" }}
                    />
                  </td>
                  <td>
                    <input
                      type="number"
                      value={row.reqQty}
                      onChange={(e) =>
                        handleTableRowChange(index, "reqQty", e.target.value)
                      }
                      style={{ padding: "5px", width: "100%" }}
                    />
                  </td>
                  <td>
                    <input
                      type="date"
                      value={row.startDate}
                      onChange={(e) =>
                        handleTableRowChange(index, "startDate", e.target.value)
                      }
                      style={{ padding: "5px", width: "100%" }}
                    />
                  </td>
                  <td>
                    <input
                      type="date"
                      value={row.endDate}
                      onChange={(e) =>
                        handleTableRowChange(index, "endDate", e.target.value)
                      }
                      style={{ padding: "5px", width: "100%" }}
                    />
                  </td>
                  <td>
                    <input
                      type="date"
                      value={row.completedDate}
                      onChange={(e) =>
                        handleTableRowChange(index, "completedDate", e.target.value)
                      }
                      style={{ padding: "5px", width: "100%" }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            type="button"
            onClick={addTableRow}
            style={{
              margin: "10px 0",
              padding: "10px",
              background: "#007BFF",
              color: "#FFF",
              border: "none",
              cursor: "pointer",
            }}
          >
            Add Row
          </button>
        </section>

        <button
          type="submit"
          style={{
            padding: "10px 20px",
            background: "#28a745",
            color: "#FFF",
            border: "none",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ProductionForm;
