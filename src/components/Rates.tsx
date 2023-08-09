export function Rates() {
  return (
    <div className="modal-window rates">
      <div className="exitBtn-container">
        <button className="exitBtn">X</button>
      </div>
      <h2 className="section-title">Campground Rates</h2>
      <table>
        <thead>
          <tr>
            <th rowSpan={2} colSpan={1}>
              Activity
            </th>
            <th colSpan={3}>Summer</th>
            <th colSpan={3}>Winter</th>
          </tr>
          <tr>
            <th>Daily</th>
            <th>Weekly</th>
            <th>Monthly</th>
            <th>Daily</th>
            <th>Weekly</th>
            <th>Monthly</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>RV Site Standard</td>
            <td>$75</td>
            <td>$450</td>
            <td>$1400</td>
            <td>$55</td>
            <td>$330</td>
            <td>$700</td>
          </tr>
          <tr>
            <td>RV Site Deluxe</td>
            <td>$85</td>
            <td>$510</td>
            <td>$1600</td>
            <td>$65</td>
            <td>$390</td>
            <td>$800</td>
          </tr>
          <tr>
            <td>Holiday</td>
            <td>$5/night - 2 night minimum</td>
          </tr>
          <tr>
            <td>Tent Site</td>
            <td>$30</td>
          </tr>
          <tr>
            <td>Glamping Tent</td>
            <td>$80 - $130</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
