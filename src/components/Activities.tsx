export function Activities() {
  return (
    <div className="activities nav-section">
      <img src="/images/swimmer.jpg" alt="" className="swimmer-img" />
      <div>
        <h2 className="section-title">Activities</h2>
        <ul
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
          }}
        >
          <li>Nature Hiking</li>
          <li>Shuffle Board</li>
          <li>Indoor Games</li>
          <li>Carpet Golf</li>
          <li>Basketball</li>
          <li>Swimming</li>
          <li>Fishing</li>
          <li>Tennis</li>
        </ul>
        <p>
          We've been in the business of assisting traveling families since 1969,
          and have thousands of satisfied customers. Cross Country Campground
          has earned accolades and recognition for our valuable service and we
          strive to continue that level of care to you and your family daily.
        </p>
        <div className="btns">
          <button>Campground Calendar</button>
          <button>Campground Gallery</button>
        </div>
      </div>
    </div>
  );
}
