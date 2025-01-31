

function ScaleIntervals(props: { intervals: number[] }) {
  const scaleIntervals = [];
  scaleIntervals['1'] = "I";
  scaleIntervals['2'] = "ii";
  scaleIntervals['3'] = "II";
  scaleIntervals['4'] = "iii";
  scaleIntervals['5'] = "III";
  scaleIntervals['6'] = "IV";
  scaleIntervals['8'] = "V";
  scaleIntervals['9'] = "vi";
  scaleIntervals['10'] = "VI";
  scaleIntervals['11'] = "vii";
  scaleIntervals['12'] = "VII";

    return (
      <>
      <div style={{justifyContent: "center", display: "flex"}}>
        {props.intervals.map((interval) => (
          <span style={{width: "50px", minWidth: "25px", textAlign: "center"}}
                key={interval}>{scaleIntervals[interval]}</span>
        ))}
      </div>
      </>
    );
}

export default ScaleIntervals;