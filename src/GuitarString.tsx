

function GuitarString(props: { notes: string[], keys: string[], string: string, }) {
  const {notes, keys, string} = props;
  const frets = 24;

  function buildScaleForString(string: string, frets: number) {
    const stringIndex = props.keys.indexOf(string);

    let spans = [];
    for (let i = 0; i < frets; i++) {
      const note = keys[(stringIndex + i) % keys.length];
      console.log(note);
      const stringWidth = 48 - i;
      if (notes.includes(note)) {
        const backgroundColor = note === notes[0] ? "#FF0000" : note === notes[4] ? "green" : note === notes[2] ? "yellow" : note === notes[6] ? "purple" : "teal";
        spans.push(
          <div style={{ textAlign: "center", width: `${stringWidth}px`, display: "flex", justifyContent: "center", borderRight: "5px solid silver"}}>
            <span style={{ backgroundColor: `${backgroundColor}`, width: "3ch", height: "3ch", borderRadius: "50%"}}>{note}</span>
            </div>
            );
      } else {
        spans.push(<div style={{width: `${stringWidth}px`, textAlign: "center", borderRight: "5px solid silver"}}>{note}</div>);
      }
    }
    return spans;
  }

    return (
      <>
      <div style={{justifyContent: "center", display: "flex", textAlign: "center", backgroundColor: "#f5ece4"}}>
        {buildScaleForString(string, frets)}
      </div>
      </>
    );
}

export default GuitarString;